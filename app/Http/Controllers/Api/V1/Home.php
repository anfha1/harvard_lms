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
use App\Models\lsessionrole;

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

    // hiển thị danh sách user cho quản lý user
    public function manage_user(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res([
            'users' => [],
        ]);

        if ($info['status']) {
            if (App::auth($info['info_user'], [1, 2])) {
                $list_user = luser::all();
                foreach ($list_user as $user) {
                    $res['users'][] = [
                        'id' => $user->id,
                        'username' => $user->username,
                        'avatar' => $user->photo,
                        'name' => $user->name,
                        'status' => $user->status,
                        'role' => $user->role,
                        'tags' => json_decode($user->tags),
                    ];
                }
                $res['status'] = 1;
            } else {
                $res['msg'] = 'Bạn không có quyền truy cập!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
            $res['check_login'] = 1;
        }
        return App::response($res);
    }

    // Thêm tài khoản
    public function manage_user_create(Request $request) {
        $res = App::Res();
        $info = App::CheckLogin($request);
        $request_all = $request->all();

        if ($info['status']) {
            if (App::auth($info['info_user'], 1)) {
                if (Validate::username($res, $request_all)) {
                    if (Validate::password($res, $request_all)) {
                        if (Validate::role($res, $request_all)) {
                            if (Validate::name($res, $request_all, 'name', 'Tên hiển thị')) {
                                // tiến hành tạo :))
                                $luser = new luser;
                                $luser->username = $request_all['username'];
                                $luser->password = md5($request_all['password']);
                                $luser->name = $request_all['name'];
                                $luser->role = $request_all['role'];

                                if ($request->file('avatar')) {
                                    $file = $request->file('avatar');
                                    $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                                    $file->move(public_path('upload/photo'), $filename);
                                    $luser->photo = '/upload/photo/' . $filename;
                                } else {
                                    $user = Str::slug($request_all['name'], '-');
                                    $luser->photo = "https://avatars.dicebear.com/api/adventurer-neutral/{$user}.svg";
                                }

                                $luser->tags = $request->tags ?? json_encode([]);
                                $luser->save();

                                $res['status'] = 1;
                                $res['msg'] = 'Đã tạo tài khoản thành công';
                            }
                        }
                    }
                }
            } else {
                // không có quyền vô
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
            $res['check_login'] = 1;
        }

        return App::response($res);
    }

    // Lấy thông tin quyền
    public function manage_role_get(Request $request) {
        $res = App::Res();
        $info = App::CheckLogin($request);
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'user_id', 'Người dùng')) {
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $user_select = 0;
                    $next = true;

                    if ($request_all['user_id'] != 0) {
                        $user_check_info = luser::find($request_all['user_id']);
                        if ($user_check_info) {
                            $user_select = $request_all['user_id'];
                        } else {
                            // Không có người dùng k đặt được
                            $res['msg'] = 'Người dùng không hợp lệ hoặc đã bị xóa vui lòng kiểm tra lại!';
                            $next = false;
                        }
                    }

                    if ($next) {
                        $res['status'] = 1;

                        // lấy danh sách quyền người dùng đó đang có
                        $list_role = lsessionrole::select('lsession_id')->where('luser_id', $user_select)->get();
                        if ($list_role->count() > 0) {
                            $list_role_tmp = [];
                            foreach ($list_role as $role) {
                                $list_role_tmp[] = $role->lsession_id;
                            }
                            $list_role = $list_role_tmp;
                        } else {
                            $list_role = [];
                        }
                        $res['user_role'] = $list_role;

                        // lấy danh sách tất cả quyền
                        $list_course = lcourse::select('id', 'name')->get();
                        $list_course_group = [];
                        $list_role = [];
                        if ($list_course->count() > 0) {
                            foreach ($list_course as $course) {
                                $list_course_group[(int)$course->id] = [
                                    'name' => $course->name,
                                    'sessions' => [],
                                ];
                            }
                            $list_session = lsession::select('id', 'name', 'lcourse_id')->get();
                            if ($list_session->count() > 0) {
                                foreach ($list_session as $session) {
                                    if (isset($list_course_group[(int)$session->id])) {
                                        $list_course_group[(int)$session->id]['sessions'][] = [
                                            'id' => $session->id,
                                            'name' => $session->name,
                                        ];
                                    }
                                }
                            }

                            foreach ($list_course_group as $course) {
                                $list_role[] = $course;
                            }
                        }

                        $res['list_role'] = $list_role;
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // đặt quyền người dùng
    public function manage_role_set(Request $request) {
        $res = App::Res();
        $info = App::CheckLogin($request);
        $request_all = $request->all();

        if (Validate::list_role($res, $request_all)) {
            if (Validate::number($res, $request_all, 'user_id', 'Người dùng')) {
                if ($info['status']) {
                    if (App::auth($info['info_user'], [1, 2])) {
                        $user_select = 0;
                        $next = true;

                        if ($request_all['user_id'] != 0) {
                            $user_check_info = luser::find($request_all['user_id']);
                            if ($user_check_info) {
                                $user_select = (int)$request_all['user_id'];
                            } else {
                                // Không có người dùng k đặt được
                                $res['msg'] = 'Người dùng không hợp lệ hoặc đã bị xóa vui lòng kiểm tra lại!';
                                $next = false;
                            }
                        }

                        if ($next) {
                            // var_dump($request_all['list_role']);
                            $list_check = array_unique($request_all['list_role']); // chứa id của session
                            $list_av = []; // chứa id của session
                            $list_del = []; // chỉ ghi lại id role để xóa

                            // lấy danh sách quyền người dùng đó đang có
                            $list_role = lsessionrole::select('id', 'lsession_id')->where('luser_id', $user_select)->get();

                            foreach ($list_role as $role) {
                                if (in_array($role->lsession_id, $list_check)) {
                                    // xóa giá trị khỏi $list_check
                                    $list_av[] = $role->lsession_id;
                                    if (($key = array_search($role->lsession_id, $list_check)) !== false) {
                                        unset($list_check[$key]);
                                    }
                                } else {
                                    // thêm vào chế độ xóa
                                    $list_del[] = $role->id;
                                }
                            }

                            $notTrue = true;
                            // Tiến thêm quyền cho người dùng
                            if (count($list_check) > 0) {
                                $notTrue = false;
                                lsessionrole::insert(array_map(function($id) use ($user_select) {
                                    return [
                                        'luser_id' => $user_select,
                                        'lsession_id' => $id,
                                    ];
                                }, $list_check));
                            }
                            // Tiến hành xóa các quyền không cần thiết
                            if (count($list_del)) {
                                $notTrue = false;
                                lsessionrole::whereIn('id', $list_del)->delete();
                            }

                            // chạy vòng lặp để xem cái nào có cái nào chưa có
                            if ($notTrue) {
                                $res['msg'] = 'Xin lỗi không có gì thay đổi!';
                            } else {
                                $res['msg'] = 'Đã cập nhật thành công!';
                                $res['status'] = 1;
                            }
                        }
                    } else {
                        // không có quyền vô
                        $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                    }
                } else {
                    $res['msg'] = 'Vui lòng đăng nhập!';
                    $res['check_login'] = 1;
                }
            }
        }
        return App::response($res);
    }

    public function manage_course(Request $request) {
        // giả lập đăng nhập
        // $request->session()->put('id_user', 1);

        $info = App::CheckLogin($request);
        $res = App::Res([
            'courses' => [],
        ]);

        if ($info['status']) {
            if (App::auth($info['info_user'], [1, 2])) {
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
            } else {
                $res['msg'] = 'Bạn không có quyền truy cập!';
            }
        } else {
            $res['msg'] = 'Vui lòng đăng nhập!';
            $res['check_login'] = 1;
        }
        return App::response($res);
    }

    // tạo Khối (lớp) mới yêu cầu quyền admin
    public function manage_course_create(Request $request) {
        $res = App::Res();
        $info = App::CheckLogin($request);

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
            $res['check_login'] = 1;
        }

        return App::response($res);
    }

    // sửa Khối (lớp) yêu cầu quyền admin
    public function manage_course_edit(Request $request) {
        $request_all = $request->all();
        $res = App::Res();

        if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    $course = lcourse::find($request_all['course_id']);
                    if ($course) {
                        $change = false;
                        if (!empty($request->name) && $request->name != $course->name) {
                            if (Validate::name($res, $request->all(), 'name', 'Tên lớp')) {
                                // tiến hành tạo :))
                                $course->name = $request->name;
                                $course->slug = Str::slug($request->name, '-');
                                $change = true;
                            }
                        }

                        if (!empty($request->description) && $request->description != $course->description) {
                            $course->description = $request->description;
                            $change = true;
                        }

                        if ($request->file('image')) {
                            $file = $request->file('image');
                            $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                            $file->move(public_path('upload/photo'), $filename);
                            $course->photo = '/upload/photo/' . $filename;
                            $change = true;
                        }

                        if ($change) {
                            $course->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã sửa lớp thành công';
                        } else {
                            $res['msg'] = 'Không có gì thay đổi!';
                        }
                    } else {
                        $res['msg'] = 'Lớp (khối) không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // tắt hiển thị lớp
    public function manage_course_off(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    // tiến hành tạo :))
                    $course = lcourse::find($request_all['course_id']);
                    if ($course) {
                        if ($course->status == 1) {
                            $course->status = 0;
                            $course->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã tắt thành công';
                        } else {
                            $res['msg'] = 'Lốp (khối) đang tắt';
                        }
                    } else {
                        $res['msg'] = 'Lớp (khối) không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // hiển thị lớp
    public function manage_course_show(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    // tiến hành tạo :))
                    $course = lcourse::find($request_all['course_id']);
                    if ($course) {
                        if ($course->status) {
                            $res['msg'] = 'Lốp (khối) đang hiển thị';
                        } else {
                            $course->status = 1;
                            $course->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã mở thành công';
                        }
                    } else {
                        $res['msg'] = 'Lớp (khối) không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // xoá khối (lớp)
    public function manage_course_delete(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {

                    // tiến hành tạo :))
                    $course = lcourse::find($request_all['course_id']);
                    if ($course) {
                        $course->delete();
                        $res['status'] = 1;
                        $res['msg'] = 'Đã tạo lớp thành công';
                    } else {
                        $res['msg'] = 'Lớp (khối) không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // tạo tiết mới yêu cầu quyền admin
    public function manage_session_create(Request $request) {
        $res = App::Res();

        if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
            $info = App::CheckLogin($request);

            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    $course = lcourse::find($request_all['course_id']);
                    if ($course) {
                        if (Validate::name($res, $request->all(), 'name', 'Tên tiết')) {
                            // tiến hành tạo :))
                            $session = new lsession;
                            $session->name = $request->name;
                            $session->slug = Str::slug($request->name, '-');
                            if (!empty($request->description)) {
                                $session->description = $request->description;
                            }

                            if ($request->file('image')) {
                                $file = $request->file('image');
                                $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                                $file->move(public_path('upload/photo'), $filename);
                                $session->photo = '/upload/photo/' . $filename;
                            } else {
                                $imgs = config('app.photo');
                                $session->photo = $imgs[rand(0, count($imgs)-1)];
                            }
                            $session->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã tạo tiết thành công';
                        }
                    } else {
                        $res['msg'] = 'Lớp (khối) không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // sửa tiết yêu cầu quyền admin
    public function manage_session_edit(Request $request) {
        $request_all = $request->all();
        $res = App::Res();

        if (Validate::number($res, $request_all, 'session_id', 'Tiết')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    $session = lsession::find($request_all['session_id']);
                    if ($session) {
                        $change = false;
                        if (!empty($request->name) && $request->name != $session->name) {
                            if (Validate::name($res, $request->all(), 'name', 'Tên tiết')) {
                                // tiến hành tạo :))
                                $session->name = $request->name;
                                $session->slug = Str::slug($request->name, '-');
                                $change = true;
                            }
                        }

                        if (!empty($request->description) && $request->description != $session->description) {
                            $session->description = $request->description;
                            $change = true;
                        }

                        if ($request->file('image')) {
                            $file = $request->file('image');
                            $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                            $file->move(public_path('upload/photo'), $filename);
                            $session->photo = '/upload/photo/' . $filename;
                            $change = true;
                        }

                        if ($change) {
                            $session->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã thay đổi tiết thành công';
                        } else {
                            $res['msg'] = 'Không có gì thay đổi!';
                        }
                    } else {
                        $res['msg'] = 'Tiết không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // hiển thị tiết
    public function manage_session_show(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'session_id', 'Tiết')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    // tiến hành tạo :))
                    $session = lsession::find($request_all['session_id']);
                    if ($session) {
                        if ($session->status) {
                            $res['msg'] = 'Tiết đang hiển thị';
                        } else {
                            $session->status = 1;
                            $session->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã mở thành công';
                        }
                    } else {
                        $res['msg'] = 'Tiết không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // tắt hiển thị tiết
    public function manage_session_off(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'session_id', 'Tiết')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    // tiến hành tạo :))
                    $session = lsession::find($request_all['session_id']);
                    if ($session) {
                        if ($session->status == 1) {
                            $session->status = 0;
                            $session->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã tắt thành công';
                        } else {
                            $res['msg'] = 'Tiết đang tắt';
                        }
                    } else {
                        $res['msg'] = 'Tiết không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // xoá tiết
    public function manage_session_delete(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'session_id', 'Tiết')) {
            $info = App::CheckLogin($request);
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    // tiến hành tạo :))
                    $session = lsession::find($request_all['session_id']);
                    if ($session) {
                        $session->delete();
                        $res['status'] = 1;
                        $res['msg'] = 'Đã tạo tiết thành công';
                    } else {
                        $res['msg'] = 'Tiết không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                    }
                } else {
                    // không có quyền vô
                    $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
                }
            } else {
                $res['msg'] = 'Vui lòng đăng nhập!';
                $res['check_login'] = 1;
            }
        }

        return App::response($res);
    }

    // upload powepoint
    public function manage_ppt_upload(Request $request) {
        $res = App::RES_FORM;
        $all_request = $request->all();
        if (Validate::number($res, $all_request, 'session_id', 'Tiết')) {
            $info = App::CheckLogin($request);
            if (App::auth($info['info_user'], 1)) {
                $session = lsession::find($all_request['session_id']);
                if ($session) {
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
                        $path_file_info = "/ppt/info/{$session->id}.json";
                        if ($session->ppttype) {
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
                            $session->ppttype = 1;
                            $session->save();
                        }

                        // lưu lại thông tin file
                        Storage::put($path_file_info, json_encode($file_upload_info));

                        $res['status'] = 1;
                        $res['msg'] = 'Tải lên thành công';
                    }
                } else {
                    $res['msg'] = "Tiết Không tồn tại hoặc đẵ bị xóa vui lòng thử lại";
                }
            } else {
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
            }
        }
        return $res;
    }

    public function manage_ppt_delete(Request $request) {
        $res = App::RES_FORM;
        $all_request = $request->all();
        if (Validate::number($res, $all_request, 'session_id', 'Tiết')) {
            $info = App::CheckLogin($request);
            if (App::auth($info['info_user'], 1)) {
                $session = lsession::find($all_request['session_id']);
                if ($session) {
                    $path_file_info = "/ppt/info/{$session->id}.json";
                    if ($session->ppttype) {
                        $data = Storage::get($path_file_info);
                        if ($data) {
                            $ppt_info = json_decode($data, 1);

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
                            Storage::delete($path_file_info);
                        }
                        $session->ppttype = 0;
                        $session->save();
                        $res['status'] = 1;
                        $res['msg'] = 'Đã xóa thành công';
                    } else {
                        $res['msg'] = 'Tiết chưa có giáo án điện tử!';
                    }
                } else {
                    $res['msg'] = "Tiết Không tồn tại hoặc đẵ bị xóa vui lòng thử lại";
                }
            } else {
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
            }
        }
        return $res;
    }

    // upload pdf
    public function manage_pdf_upload(Request $request) {
        $res = App::RES_FORM;
        $all_request = $request->all();
        if (Validate::number($res, $all_request, 'session_id', 'Tiết')) {
            $info = App::CheckLogin($request);
            if (App::auth($info['info_user'], 1)) {
            $session = lsession::find($all_request['session_id']);
                if ($session) {
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
                        $path_file_info = "/pdf/info/{$session->id}.json";
                        if ($session->doctype) {
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
                                    App::deleteDir($folder_pdf);
                                }
                            }
                        } else {
                            // cập nhật thông tin df
                            $session->doctype = 1;
                            $session->save();
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
            } else {
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
            }
        }
        return $res;
    }

    // delete pdf
    public function manage_pdf_delete(Request $request) {
        $res = App::RES_FORM;
        $all_request = $request->all();
        if (Validate::number($res, $all_request, 'session_id', 'Tiết')) {
            $info = App::CheckLogin($request);
            if (App::auth($info['info_user'], 1)) {
                $session = lsession::find($all_request['session_id']);
                if ($session) {
                    if ((int)$session->doctype) {
                        // tiến hành xóa tài liệu
                        $path_file_info = "/pdf/info/{$session->id}.json";
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
                                App::deleteDir($folder_pdf);
                            }
                            Storage::delete($path_file_info);
                        }
                        $session->doctype = 0;
                        $session->save();
                        $res['status'] = 1;
                        $res['msg'] = 'Đã xóa thành công';
                    } else {
                        $res['msg'] = 'Tiết chưa có giáo án!';
                    }
                } else {
                    $res['msg'] = 'Tiết không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
                }
            } else {
                $res['msg'] = 'Xin lỗi bạn không có quyền để thực hiện chức năng này!';
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
