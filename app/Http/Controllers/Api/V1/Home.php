<?php

namespace App\Http\Controllers\APi\V1;

use Fai\Lib\App;
use Fai\Lib\Validate;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

use App\Jobs\Pdf;

use App\Models\luser;
use App\Models\lcourse;
use App\Models\lsession;

class Home extends Controller
{
    public function check_info(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res([
            'status' => 1,
            'msg_code' => $info['msg_code'],
            'msg' => $info['msg'],
            'login' => $info['status'],
        ]);

        if ($info['status']) {
            $res['info'] = [
                'id' => $info['info_user']['id'],
                'name' => $info['info_user']['name'],
                'role' => $info['info_user']['role'],
                'avatar' => $info['info_user']['photo'] ?? 'https://api.minimalavatars.com/avatar/random/png',
            ];
        } else {
            $res['info'] = [
                'id' => 0,
                'role' => 0,
                'name' => '',
                'avatar' => '',
            ];
        }

        return App::response($res);
    }

    public function login(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::RES_FORM;

        if ($info['status']) {
            $res['msg'] = 'Bạn đã đăng nhập';
        } else {
            // validate username, password

            $request->username = strtolower($request->username);
            $userUseUsername = luser::where('username', $request->username)->get();
            if ($userUseUsername->count() < 1) {
                $res['msg'] = 'Tài khoản hoặc mật khẩu không đúng! Vui lòng kiểm tra lại.';
            } else {
                foreach ($userUseUsername as $user) {
                    if ($user->password === md5($request->password)) {
                        if ($user->status) {
                            $request->session()->put('id_user', $user->id);
                            $res['status'] = 1;
                            $res['msg'] = 'Đăng nhập thành công';
                            goto return_result;
                        }
                        break;
                    }
                }
                $res['msg'] = 'Tài khoản hoặc mật khẩu không đúng! Vui lòng kiểm tra lại.';
            }
        }

        return_result: # khu vực trả về dữ liệu
        return App::response($res);
    }

    public function logout(Request $request) {
        if ($request->session()->get('id_user')) {
            $request->session()->forget('id_user');
            $res = App::Res([
                'status' => 1,
                'msg' => 'Đăng xuất thành công',
            ]);
        } else {
            $res = App::Res([
                'status' => 1,
                'msg' => 'Bạn chưa đăng nhập',
            ]);
        }
        return App::response($res);
    }

    public function blog(Request $request) {
        $list_blog = [];
        for ($i = 0; $i < 3; $i++) {
            $list_blog[] = [
                'id' => $i,
                'name' => 'Tin tức '.($i + 1),
                'slug' => '',
                'photo' => 'https://www.w3schools.com/w3css/img_lights.jpg',
                'description' => '',
            ];
        }
        return App::response([
            'status' => '1',
            'msg' => '',
            'blogs' => $list_blog,
        ]);
    }

    public function course(Request $request) {
        $list_course = [];
        foreach (lcourse::where('status', 1)->get() as $course) {
            $list_session = [];
            foreach ($course->session()->where('status', 1)->get() as $session) {
                $ppt_status = 0;
                $session_info = [
                    'id' => $session->id,
                    'name' => $session->name,
                    'photo' => $session->photo,
                    'ppt_type' => 0,
                    'doc_type' => 0,
                ];
                if ($session->ppttype == 1) {
                    $data = Storage::get("/ppt/info/{$session->id}.json");
                    if ($data) {
                        $info = json_decode($data, 1);
                        if ($info['status'] == 1) {
                            $session_info['ppt_type'] = 1;
                        }
                    }
                }
                if ($session->doctype == 1) {
                    $data = Storage::get("/pdf/info/{$session->id}.json");
                    if ($data) {
                        $info = json_decode($data, 1);
                        if ($info['status'] == 1) {
                            $session_info['doc_type'] = 1;
                        }
                    }
                }
                $list_session[] = $session_info;
            }
            $list_course[] = [
                'id' => $course->id,
                'name' => $course->name,
                'photo' => $course->photo,
                'sessions' => $list_session,
            ];
        }

        return App::response([
            'status' => 1,
            'msg' => '',
            'courses' => $list_course,
        ]);
    }

    public function manage_course(Request $request) {
        // giả lập đăng nhập
        // $request->session()->put('id_user', 1);

        $info = App::CheckLogin($request);
        $res = App::Res([
            'courses' => [],
        ]);

        if ($info['status']) {
            switch ((int)$info['info_user']->role) {
                case 1:
                case 2: {
                    $list_course = [];
                    foreach (lcourse::all() as $course) {
                        $list_session = [];
                        foreach ($course->session()->get() as $session) {
                            $ppt_status = 0;
                            $session_info = [
                                'id' => $session->id,
                                'name' => $session->name,
                                'status' => $session->status,
                                'photo' => $session->photo,
                                'doc_type' => $session->doctype,
                                'doc_info' => [],
                                'ppt_type' => $session->ppttype,
                                'ppt_info' => [],
                            ];
                            if ($session->ppttype == 1) {
                                $data = Storage::get("/ppt/info/{$session->id}.json");
                                if ($data) {
                                    $info_ppt = json_decode($data, 1);
                                    $session_info['ppt_info'] = [
                                        'status' => $info_ppt['status'],
                                        'name' => $info_ppt['nameor'],
                                    ];
                                }
                            }
                            if ($session->doctype == 1) {
                                $data = Storage::get("/pdf/info/{$session->id}.json");
                                if ($data) {
                                    $info_ppt = json_decode($data, 1);
                                    $session_info['doc_info'] = [
                                        'status' => $info_ppt['status'],
                                        'name' => $info_ppt['nameor'],
                                    ];
                                }
                            }
                            $list_session[] = $session_info;
                        }
                        $list_course[] = [
                            'id' => $course->id,
                            'name' => $course->name,
                            'status' => $course->status,
                            'sessions' => $list_session,
                        ];
                    }

                    $res['courses'] = $list_course;
                    $res['status'] = 1;
                    break;
                }
                default: {
                    $res['msg'] = 'Bạn không có quyền truy cập!';
                    break;
                }
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
        }
        return App::response($res);
    }

    // tạo Khối (lớp) mới yêu cầu quyền admin
    public function manage_course_create(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res();

        if ($info['status']) {
            if (App::auth($info['info_user'], 1)) {
                if (Validate::name($res, $request->all(), 'name', 'Tên lớp')) {
                    // tiến hành tạo :))
                    $course = new lcourse;
                    $course->name = $request->name;
                    $course->slug = Str::slug($request->name, '-');
                    if (!empty($request->description)) {
                        $course->description = $request->description;
                    }

                    if ($request->file('image')) {
                        $file = $request->file('image');
                        $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                        $file->move(public_path('upload/photo'), $filename);
                        $course->photo = '/upload/photo/' . $filename;
                    } else {
                        $imgs = config('app.photo');
                        $course->photo = $imgs[rand(0, count($imgs)-1)];
                    }
                    $course->save();
                    $res['status'] = 1;
                    $res['msg'] = 'Đã tạo lớp thành công';
                }
            } else {
                // không có quyền vô
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
        }

        return App::response($res);
    }

    // tắt hiển thị
    public function manage_course_off(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res();
        $request_all = $request->all();

        if ($info['status']) {
            if (App::auth($info['info_user'], [1, 2])) {
                if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
                    // tiến hành tạo :))
                    $course = lcourse::find($request_all['course_id']);
                    if ($course) {
                        $course->status = 0;
                        $course->save();
                        $res['status'] = 1;
                        $res['msg'] = 'Đã tắt thành công';
                    } else {
                        $res['msg'] = 'Lớp (khối) không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                }
            } else {
                // không có quyền vô
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
        }

        return App::response($res);
    }

    // hiển thị
    public function manage_course_show(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res();
        $request_all = $request->all();

        if ($info['status']) {
            if (App::auth($info['info_user'], [1, 2])) {
                if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
                    // tiến hành tạo :))
                    $course = lcourse::find($request_all['course_id']);
                    if ($course) {
                        $course->status = 1;
                        $course->save();
                        $res['status'] = 1;
                        $res['msg'] = 'Đã mở thành công';
                    } else {
                        $res['msg'] = 'Lớp (khối) không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                }
            } else {
                // không có quyền vô
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
        }

        return App::response($res);
    }

    // xoá khối (lớp)
    public function manage_course_delete(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res();
        $request_all = $request->all();

        if ($info['status']) {
            if (App::auth($info['info_user'], 1)) {
                if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
                    // tiến hành tạo :))
                    $course = lcourse::find($request_all['course_id']);
                    if ($course) {
                        $course->delete();
                        $res['status'] = 1;
                        $res['msg'] = 'Đã tạo lớp thành công';
                    } else {
                        $res['msg'] = 'Lớp (khối) không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                }
            } else {
                // không có quyền vô
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
        }

        return App::response($res);
    }

    public function manage_ppt_upload(Request $request) {
        $all_request = $request->all();
        $res = App::RES_FORM;
        if (Validate::number($res, $all_request, 'session_id', 'Tiết')) {
            $session_info = lsession::find($all_request['session_id']);
            if ($session_info) {
                $res['msg'] = 'File upload không hợp lệ vui lòng gửi lại!';
                if ($request->file('file')) {
                    $file = $request->file('file');

                    // tạo thông tin của file tải lên
                    $file_upload_info = [
                        'idc' => (int)(microtime(1)*1000),
                        'nameor' => $file->getClientOriginalName(),
                        'status' => 0,
                    ];
                    $file_upload_info['name'] = $file_upload_info['idc'].'.'.pathinfo($file_upload_info['nameor'], PATHINFO_EXTENSION);
                    $file->move(public_path('upload/ppt'), $file_upload_info['name']);

                    // kiểm tra xem file đã có chưa
                    $path_file_info = "/ppt/info/{$session_info->id}.json";
                    if ($session_info->ppttype) {
                        $ppt_info = json_decode(Storage::get($path_file_info), 1);

                        // xóa file ppt cũ
                        $file_ppt = public_path('upload/ppt').'/'.$ppt_info['name'];
                        if (is_file($file_ppt)) {
                            unlink($file_ppt);
                        }

                        // xóa folder ppt nếu đã process xong
                        $folder_ppt = public_path('ppt').'/'.$ppt_info['idc'];
                        if (is_dir($folder_ppt)) {
                            App::deleteDir($folder_ppt);
                        }
                    } else {
                        // cập nhật thông tin ppt
                        $session_info->ppttype = 1;
                        $session_info->save();
                    }

                    // lưu lại thông tin file
                    Storage::put($path_file_info, json_encode($file_upload_info));

                    $res['status'] = 1;
                    $res['msg'] = 'Tải lên thành công';
                }
            } else {
                $res['msg'] = "Tiết Không tồn tại hoặc đẵ bị xóa vui lòng thử lại";
            }
        }
        return $res;
    }

    public function manage_pdf_upload(Request $request) {
        $all_request = $request->all();
        $res = App::RES_FORM;
        if (Validate::number($res, $all_request, 'session_id', 'Tiết')) {
            $session_info = lsession::find($all_request['session_id']);
            if ($session_info) {
                $res['msg'] = 'File upload không hợp lệ vui lòng gửi lại!';
                if ($request->file('file')) {
                    $file = $request->file('file');

                    // tạo thông tin của file tải lên
                    $file_upload_info = [
                        'idc' => (int)(microtime(1)*1000),
                        'nameor' => $file->getClientOriginalName(),
                        'status' => 0,
                    ];
                    $file_upload_info['name'] = $file_upload_info['idc'].'.'.pathinfo($file_upload_info['nameor'], PATHINFO_EXTENSION);
                    $file->move(public_path('upload/pdf'), $file_upload_info['name']);

                    // kiểm tra xem file đã có chưa
                    $path_file_info = "/pdf/info/{$session_info->id}.json";
                    if ($session_info->doctype) {
                        $data = Storage::get($path_file_info);
                        if ($data) {
                            $pdf_info = json_decode($data, 1);

                            // xóa file pdf cũ
                            $file_pdf = public_path('upload/pdf').'/'.$pdf_info['name'];
                            if (is_file($file_pdf)) {
                                unlink($file_pdf);
                            }

                            // xóa folder pdf nếu đã process xong
                            $folder_pdf = public_path('pdf').'/'.$pdf_info['idc'];
                            if (is_dir($folder_pdf)) {
                                foreach (File::allFiles($folder_pdf) as $file) {
                                    unlink($file);
                                }
                                rmdir($folder_pdf);
                            }
                        }
                    } else {
                        // cập nhật thông tin df
                        $session_info->doctype = 1;
                        $session_info->save();
                    }

                    // lưu lại thông tin file
                    Storage::put($path_file_info, json_encode($file_upload_info));

                    // chuyển pdf thành ảnh
                    Pdf::dispatch($file_upload_info['idc'], $file_upload_info['name'], $path_file_info);

                    $res['status'] = 1;
                    $res['msg'] = 'Tải lên thành công';
                }
            } else {
                $res['msg'] = "Tiết Không tồn tại hoặc đẵ bị xóa vui lòng thử lại";
            }
        }
        return $res;
    }

    // app giả để che mắt thôi
    public function loguseractivity(Request $request) {
        return App::response([
            'id' => '1',
            'succeeded' => true
        ]);
    }
}
