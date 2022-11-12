<?php
namespace App\Http\Controllers\Api\V1;

use Fai\Lib\App;
use Fai\Lib\Validate;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

use App\Models\luser;

use App\Models\laction;
use App\Models\laction_session;
use App\Models\laction_session_role;

class ManageAction extends Controller
{
    // khu vực api của hoạt động hướng dẫn kỹ năng sống
    public function get(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res([
            'courses' => [],
        ]);

        if ($info['status']) {
            if (App::auth($info['info_user'], [1, 2])) {
                $list_course = [];
                foreach (laction::all() as $course) {
                    $list_session = [];
                    foreach ($course->session()->get() as $session) {
                        // lấy data
                        $data = Storage::get("/action/{$session->id}.txt");
                        // dữ liệu trả về
                        $session_info = [
                            'id' => $session->id,
                            'name' => $session->name,
                            'status' => $session->status,
                            'photo' => $session->photo,
                            'slug' => $session->slug,
                            'description' => $session->description,
                            'data' => $data,
                        ];
                        $list_session[] = $session_info;
                    }
                    $list_course[] = [
                        'id' => $course->id,
                        'name' => $course->name,
                        'slug' => $course->slug,
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

    // Lấy thông tin quyền Course
    public function role_get(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'user_id', 'Người dùng')) {
            $info = App::CheckLogin($request);
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
                        $list_role = laction_session_role::select('laction_session_id')->where('luser_id', $user_select)->get();
                        if ($list_role->count() > 0) {
                            $list_role_tmp = [];
                            foreach ($list_role as $role) {
                                $list_role_tmp[] = $role->laction_session_id;
                            }
                            $list_role = $list_role_tmp;
                        } else {
                            $list_role = [];
                        }
                        $res['user_role'] = $list_role;

                        // lấy danh sách tất cả quyền
                        $list_course = laction::select('id', 'name')->get();
                        $list_course_group = [];
                        $list_role = [];
                        if ($list_course->count() > 0) {
                            foreach ($list_course as $course) {
                                $list_course_group[(int)$course->id] = [
                                    'name' => $course->name,
                                    'sessions' => [],
                                ];
                            }
                            $list_session = laction_session::select('id', 'name', 'laction_id')->get();
                            if ($list_session->count() > 0) {
                                foreach ($list_session as $session) {
                                    if (isset($list_course_group[(int)$session->laction_id])) {
                                        $list_course_group[(int)$session->laction_id]['sessions'][] = [
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

    // đặt quyền người dùng Course
    public function role_set(Request $request) {
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
                            $list_role = laction_session_role::select('id', 'laction_session_id')->where('luser_id', $user_select)->get();

                            foreach ($list_role as $role) {
                                if (in_array($role->laction_session_id, $list_check)) {
                                    // xóa giá trị khỏi $list_check
                                    $list_av[] = $role->laction_session_id;
                                    if (($key = array_search($role->laction_session_id, $list_check)) !== false) {
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
                                laction_session_role::insert(array_map(function($id) use ($user_select) {
                                    return [
                                        'luser_id' => $user_select,
                                        'laction_session_id' => $id,
                                    ];
                                }, $list_check));
                            }
                            // Tiến hành xóa các quyền không cần thiết
                            if (count($list_del)) {
                                $notTrue = false;
                                laction_session_role::whereIn('id', $list_del)->delete();
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

    // tạo Khối (lớp) mới yêu cầu quyền admin
    public function create(Request $request) {
        $res = App::Res();
        $info = App::CheckLogin($request);

        if ($info['status']) {
            if (App::auth($info['info_user'], 1)) {
                if (Validate::name($res, $request->all(), 'name', 'Tên khối (lớp)')) {
                    // tiến hành tạo :))
                    $course = new laction;
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
    public function edit(Request $request) {
        $request_all = $request->all();
        $res = App::Res();

        if (Validate::number($res, $request_all, 'course_id', 'Khối (lớp)')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    $course = laction::find($request_all['course_id']);
                    if ($course) {
                        $change = false;
                        if (!empty($request->name) && $request->name != $course->name) {
                            if (Validate::name($res, $request->all(), 'name', 'Tên khối (lớp)')) {
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
    public function off(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    // tiến hành tạo :))
                    $course = laction::find($request_all['course_id']);
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
    public function show(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $course = laction::find($request_all['course_id']);
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
    public function delete(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    $course = laction::find($request_all['course_id']);
                    if ($course) {
                        $listSesssion = laction_session::select('id')->where('laction_id', $request_all['course_id'])->get();
                        if ($listSesssion && $listSesssion->count() > 0) {
                            foreach ($listSesssion as $session) {
                                // xóa file data
                                Storage::delete("/action/{$session->id}.txt");

                                // xóa quyền
                                laction_session_role::where('laction_session_id', $session->id)->delete();
                            }
                        }
                        laction_session::where('laction_id', $request_all['course_id'])->delete();
                        $course->delete();

                        $res['status'] = 1;
                        $res['msg'] = 'Đã xóa lớp (khối) thành công';
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
    public function session_create(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'course_id', 'Lớp (khối)')) {
            $info = App::CheckLogin($request);

            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    $course = laction::find($request_all['course_id']);
                    if ($course) {
                        if (Validate::name($res, $request->all(), 'name', 'Tên hoạt động')) {
                            // tiến hành tạo :))
                            $session = new laction_session;
                            $session->name = $request->name;
                            $session->slug = Str::slug($request->name, '-');
                            $session->laction_id = $request_all['course_id'];
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

                            // lưu lại data
                            $path_file_info = "/action/{$session->id}.txt";
                            $data = '';
                            if (!empty($request->data) && is_string($request->data)) {
                                $data = $request->data;
                            }
                            Storage::put($path_file_info, $data);

                            $res['status'] = 1;
                            $res['msg'] = 'Đã tạo hoạt động thành công';
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
    public function session_edit(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'session_id', 'Hoạt động')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    $session = laction_session::find($request_all['session_id']);
                    if ($session) {
                        $change = false;
                        if (!empty($request->name) && $request->name != $session->name) {
                            if (Validate::name($res, $request->all(), 'name', 'Tên hoạt động')) {
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

                        $path_file_info = "/action/{$session->id}.txt";
                        $data = Storage::get($path_file_info);
                        if (!empty($request->data) && is_string($request->data) && $request->data != $data) {
                            Storage::put($path_file_info, $request->data);
                            $change = true;
                        }

                        if ($change) {
                            $session->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã cập nhật thay đổi hoạt động thành công';
                        } else {
                            $res['msg'] = 'Không có gì thay đổi!';
                        }
                    } else {
                        $res['msg'] = 'Hoạt động không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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
    public function session_show(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'session_id', 'Hoạt động')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    // tiến hành tạo :))
                    $session = laction_session::find($request_all['session_id']);
                    if ($session) {
                        if ($session->status) {
                            $res['msg'] = 'Hoạt động đang hiển thị';
                        } else {
                            $session->status = 1;
                            $session->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã mở thành công';
                        }
                    } else {
                        $res['msg'] = 'Hoạt động không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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
    public function session_off(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'session_id', 'Hoạt động')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $session = laction_session::find($request_all['session_id']);
                    if ($session) {
                        if ($session->status == 1) {
                            $session->status = 0;
                            $session->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã tắt thành công';
                        } else {
                            $res['msg'] = 'Hoạt động đang bị tắt';
                        }
                    } else {
                        $res['msg'] = 'Hoạt động không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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
    public function session_delete(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

        if (Validate::number($res, $request_all, 'session_id', 'Hoạt động')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    // tiến hành tạo :))
                    $session = laction_session::find($request_all['session_id']);
                    if ($session) {
                        // xóa file data
                        Storage::delete("/action/{$session->id}.txt");

                        // xóa quyền
                        laction_session_role::where('laction_session_id', $session->id)->delete();

                        // xóa tiết
                        $session->delete();
                        $res['status'] = 1;
                        $res['msg'] = 'Đã tạo hoạt động thành công';
                    } else {
                        $res['msg'] = 'Hoạt động không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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
}
?>