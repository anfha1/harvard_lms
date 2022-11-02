<?php

namespace App\Http\Controllers\APi\V1;

use Fai\Lib\App;
use Fai\Lib\Validate;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

use App\Jobs\Pdf;

use App\Models\luser;
use App\Models\lcourse;
use App\Models\lsession;
use App\Models\lsessionrole;
use App\Models\lblog;
use App\Models\lcategory;
use App\Models\lblog_category;

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
                'school' => $info['info_user']['school'],
                'course' => $info['info_user']['course'],
            ];
        } else {
            $res['info'] = [
                'id' => 0,
                'role' => 0,
                'name' => '',
                'avatar' => '',
                'school' => '',
                'course' => '',
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
        foreach (lblog::where('status', 1)->orderBy('id', 'desc')->get() as $blog) {
            $list_blog[] = [
                'id' => $blog->id,
                'name' => $blog->name,
                'slug' => $blog->slug,
                'photo' => $blog->photo,
                'description' => $blog->description,
                'created_at' => $blog->created_at,
            ];
        }
        return App::response([
            'status' => '1',
            'msg' => '',
            'blogs' => $list_blog,
        ]);
    }

    public function blog1(Request $request) {
        $list_blog = [];
        foreach (lblog::where('status', 1)->orderBy('id', 'desc')->limit(2)->get() as $blog) {
            $list_blog[] = [
                'id' => $blog->id,
                'name' => $blog->name,
                'slug' => $blog->slug,
                'photo' => $blog->photo,
                'description' => $blog->description,
                'created_at' => $blog->created_at,
            ];
        }
        return App::response([
            'status' => '1',
            'msg' => '',
            'blogs' => $list_blog,
        ]);
    }

    public function blog_role_check(Request $request) {
        $res = App::Res([
            'data' => '',
        ]);
        $blog = lblog::find((int)$request->blog_id);
        if ($blog) {
            if (
                $blog->slug == $request->blog_slug &&
                $blog->status == 1
            ) {
                // trả về thông tin để hiển thị
                $res['status'] = 1;
                $res['data'] = [
                    'name' => $blog->name,
                    'data' => '',
                    'user' => 'Quản trị viên',
                    'created_at' => $blog->created_at,
                ];

                $data = Storage::get("/blog/{$request->blog_id}.txt");
                if ($data) {
                    $res['data']['data'] = $data;
                }

                $user_create = luser::select('id', 'name')->where('id', $blog->luser_id)->first();
                if ($user_create) {
                    $res['data']['user'] = $user_create->name;
                }
            } else {
                $res['msg'] = 'Tài liệu không tồn tại';
            }
        } else {
            $res['msg'] = 'Tài liệu không tồn tại';
        }

        return App::response($res);
    }

    public function course(Request $request) {
        // lấy thông tin đăng nhập
        $info = App::CheckLogin($request);
        $check_role = true;
        if ($info['status']) {
            $id_user = $info['info_user']['id'];
            if ((int)$info['info_user']['role'] === 1) {
                $check_role = false;
            }
        } else {
            $id_user = 0;
        }

        if ($check_role) {
            // lấy danh sách quyền đang có
            $list_role = lsessionrole::select('lsession_id')->where('luser_id', $id_user)->get();
            if ($list_role->count() > 0) {
                $list_role_tmp = [];
                foreach ($list_role as $role) {
                    $list_role_tmp[] = $role->lsession_id;
                }
                $list_role = $list_role_tmp;
            } else {
                $list_role = [];
            }
        }

        $list_course = [];
        foreach (lcourse::where('status', 1)->get() as $course) {
            $list_session = [];
            foreach ($course->session()->where('status', 1)->get() as $session) {
                $ppt_status = 0;
                if ($check_role) {
                    if (in_array($session->id, $list_role)) {
                        $lock = 0;
                    } else {
                        $lock = 1;
                    }
                } else {
                    $lock = 0;
                }
                $session_info = [
                    'id' => $session->id,
                    'name' => $session->name,
                    'photo' => $session->photo,
                    'lock' => $lock,
                    'ppt_type' => 0,
                    'ppt_link' => "",
                    'doc_type' => 0,
                    'doc_link' => "",
                ];
                if (!$lock) {
                    if ($session->ppttype == 1) {
                        $data = Storage::get("/ppt/info/{$session->id}.json");
                        if ($data) {
                            $info = json_decode($data, 1);
                            if ($info['status'] == 1) {
                                $session_info['ppt_type'] = 1;
                                $session_info['ppt_link'] = [
                                    'course_slug' => $course->slug,
                                    'course_id' => $course->id,
                                    'session_slug' => $session->slug,
                                    'session_id' => $session->id,
                                ];
                            }
                        }
                    }
                    if ($session->doctype == 1) {
                        $data = Storage::get("/pdf/info/{$session->id}.json");
                        if ($data) {
                            $info = json_decode($data, 1);
                            if ($info['status'] == 1) {
                                $session_info['doc_type'] = 1;
                                $session_info['doc_link'] = "/view/doc/{$course->slug}-{$course->id}/{$session->slug}-{$session->id}.html";
                            }
                        }
                    }
                    $list_session[] = $session_info;
                }
            }
            if (count($list_session)) {
                $list_course[] = [
                    'id' => $course->id,
                    'name' => $course->name,
                    'photo' => $course->photo,
                    'sessions' => $list_session,
                ];
            }
        }

        return App::response([
            'status' => 1,
            'msg' => '',
            'courses' => $list_course,
        ]);
    }

    public function ppt_role_check(Request $request) {
        $res = App::Res([
            'link' => '',
        ]);
        $session_info = lsession::select('slug', 'name', 'ppttype', 'lcourse_id')->where('id', $request->session_id)->get();
        if ($session_info->count() > 0) {
            $session_info = $session_info->first();
            if (
                $session_info->ppttype == 1 &&
                $session_info->slug == $request->session_slug &&
                $session_info->lcourse_id == $request->course_id
            ) {
                $course_info = lcourse::find($request->course_id);
                if ($course_info && $course_info->slug == $request->course_slug) {
                    $info_ppt = json_decode(Storage::get("/ppt/info/{$request->session_id}.json"), 1);
                    if (isset($info_ppt['status']) && $info_ppt['status'] == 1) {
                        // lấy thông tin đăng nhập
                        $info = App::CheckLogin($request);
                        $check_role = true;
                        if ($info['status']) {
                            $id_user = $info['info_user']['id'];
                            if ((int)$info['info_user']['role'] === 1) {
                                $check_role = false;
                            }
                        } else {
                            $id_user = 0;
                        }

                        if ($check_role) {
                            // check xem có quyền xem hay không?
                            $list_role = lsessionrole::select('id')->where('luser_id', $id_user)->where('lsession_id', $request->session_id)->get();
                            if ($list_role->count() > 0) {
                                $is_view = true;
                            } else {
                                $is_view = false;
                            }
                        } else {
                            $is_view = true;
                        }

                        if ($is_view) {
                            $res['status'] = 1;
                            $res['course_name'] = $course_info->name;
                            $res['session_name'] = $session_info->name;
                            $res['link'] = "/ppt/{$info_ppt['idc']}/{$request->session_id}.html";
                        } else {
                            if ($info['status']) {
                                // không có quyền xem
                                $res['msg'] =  'Tài liệu bị khóa - bạn không có quyền xem!';
                            } else {
                                // yêu cầu đăng nhập
                                $res['msg'] =  'Vui lòng đăng nhập!';
                            }
                        }
                    } else {
                        $res['msg'] = 'Tài liệu không tồn tại';
                    }
                } else {
                    $res['msg'] = 'Tài liệu không tồn tại';
                }
            } else {
                $res['msg'] = 'Tài liệu không tồn tại';
            }
        } else {
            $res['msg'] = 'Tài liệu không tồn tại';
        }

        return App::response($res);
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
                        'school' => $user->school ?: '',
                        'course' => $user->course ?: '',
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
                                if (Validate::name($res, $request_all, 'school', 'Tên trường')) {
                                    if (Validate::name($res, $request_all, 'course', 'Tên khối')) {
                                        // tiến hành tạo :))
                                        $luser = new luser;
                                        $luser->username = $request_all['username'];
                                        $luser->password = md5($request_all['password']);
                                        $luser->name = $request_all['name'];
                                        $luser->role = $request_all['role'];
                                        $luser->school = $request_all['school'];
                                        $luser->course = $request_all['course'];

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

    // Sửa tài khoản
    public function manage_user_edit(Request $request) {
        $request_all = $request->all();
        $res = App::Res();

        if (Validate::number($res, $request_all, 'user_id', 'Tài khoản')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    // kiểm tra tài khoản
                    $user = luser::find($request_all['user_id']);
                    if ($user) {
                        $change = false;
                        $next = true;
                        if (!empty($request->username)) {
                            if (Validate::username($res, $request_all)) {
                                if ($request_all['username'] != $user->username) {
                                    $user->username = $request_all['username'];
                                    $change = true;
                                }
                            } else {
                                $next = false;
                            }
                        }
                        if ($next && !empty($request->password)) {
                            if (Validate::password($res, $request_all)) {
                                if (md5($request_all['password']) != $user->password) {
                                    $user->password = md5($request_all['password']);
                                    $change = true;
                                }
                            } else {
                                $next = false;
                            }
                        }
                        if ($next && !empty($request->name)) {
                            if (Validate::name($res, $request_all, 'name', 'Tên hiển thị')) {
                                if ($request_all['name'] != $user->name) {
                                    $user->name = $request_all['name'];
                                    $change = true;
                                }
                            } else {
                                $next = false;
                            }
                        }
                        if ($next && !empty($request->school)) {
                            if (Validate::name($res, $request_all, 'school', 'Tên trường')) {
                                if ($request_all['school'] != $user->school) {
                                    $user->school = $request_all['school'];
                                    $change = true;
                                }
                            } else {
                                $next = false;
                            }
                        }
                        if ($next && !empty($request->course)) {
                            if (Validate::name($res, $request_all, 'course', 'Tên hiển thị')) {
                                if ($request_all['course'] != $user->course) {
                                    $user->course = $request_all['course'];
                                    $change = true;
                                }
                            } else {
                                $next = false;
                            }
                        }
                        if ($next && !empty($request->role)) {
                            if (Validate::role($res, $request_all)) {
                                if ($request_all['role'] != $user->role) {
                                    $user->role = $request_all['role'];
                                    $change = true;
                                }
                            } else {
                                $next = false;
                            }
                        }

                        if ($next && $request->file('avatar')) {
                            $file_img = public_path().$user->photo;
                            if (is_file($file_img)) {
                                unlink($file_img);
                            }

                            $file = $request->file('avatar');
                            $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                            $file->move(public_path('upload/photo'), $filename);
                            $user->photo = '/upload/photo/' . $filename;
                            $change = true;
                        }

                        if ($next && $request->tags) {
                            if ($request->tags != $user->tags) {
                                $user->tags = $request->tags;
                                $change = true;
                            }
                        }

                        if ($next) {
                            if ($change) {
                                $user->save();
                                $res['msg'] = 'Cập nhật thành công!';
                                $res['status'] = 1;
                            } else {
                                $res['msg'] = 'Không có gì thay đổi!';
                            }
                        }

                        // tiền hành kiểm tra các trường và các trường và các thứ thay đổi
                    } else {
                        $res['msg'] = 'Tài khoản không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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

    // xóa tài khoản
    public function manage_user_delete(Request $request) {
        $request_all = $request->all();
        $res = App::Res();

        if (Validate::number($res, $request_all, 'user_id', 'Tài khoản')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    // kiểm tra tài khoản
                    $user = luser::find($request_all['user_id']);
                    if ($user) {
                        // xóa các quyền của người dùng
                        // xóa tài khoản
                        lsessionrole::where('luser_id', $request_all['user_id'])->delete();
                        $user->delete();
                        $res['status'] = 1;
                        $res['msg'] = 'Đã xóa thành công';
                    } else {
                        $res['msg'] = 'Tài khoản không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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

    // kích hoạt tài khoản
    public function manage_user_active(Request $request) {
        $request_all = $request->all();
        $res = App::Res();

        if (Validate::number($res, $request_all, 'user_id', 'Tài khoản')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    // kiểm tra tài khoản
                    $user = luser::find($request_all['user_id']);
                    if ($user) {
                        if ($user->status) {
                            $res['msg'] = 'Tài khoản đang hoạt động!';
                        } else {
                            $user->status = 1;
                            $user->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã cập nhật thành công';
                        }
                    } else {
                        $res['msg'] = 'Tài khoản không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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

    // vô hiệu hóa tài khoản
    public function manage_user_lock(Request $request) {
        $request_all = $request->all();
        $res = App::Res();

        if (Validate::number($res, $request_all, 'user_id', 'Tài khoản')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], 1)) {
                    // kiểm tra tài khoản
                    $user = luser::find($request_all['user_id']);
                    if ($user) {
                        if ($user->status) {
                            $user->status = 0;
                            $user->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã cập nhật thành công';
                        } else {
                            $res['msg'] = 'Tài khoản đang bị vô hiệu hóa!';
                        }
                    } else {
                        $res['msg'] = 'Tài khoản không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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

    // Lấy thông tin quyền
    public function manage_role_get(Request $request) {
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
                                    if (isset($list_course_group[(int)$session->lcourse_id])) {
                                        $list_course_group[(int)$session->lcourse_id]['sessions'][] = [
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
                        $listSesssion = lsession::select('id')->where('lcourse_id', $request_all['course_id'])->get();
                        if ($listSesssion && $listSesssion->count() > 0) {
                            foreach ($listSesssion as $session) {
                                lsessionrole::where('lsession_id', $session->id)->delete();
                            }
                        }
                        lsession::where('lcourse_id', $request_all['course_id'])->delete();
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
    public function manage_session_create(Request $request) {
        $res = App::Res();
        $request_all = $request->all();

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
                            $session->lcourse_id = $request_all['course_id'];
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
        $res = App::Res();
        $request_all = $request->all();

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
                        lsessionrole::where('lsession_id', $session->id)->delete();
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
                        $file_exten = pathinfo($file_upload_info['nameor'], PATHINFO_EXTENSION);
                        $file_upload_info['name'] = $file_upload_info['idc'].'.'.$file_exten;
                        $file->move(public_path('upload/ppt'), $file_upload_info['name']);

                        // kiểm tra xem file đã có chưa
                        $path_file_info = "/ppt/info/{$session->id}.json";
                        if ($session->ppttype) {
                            $ppt_info = json_decode(Storage::get($path_file_info), 1);
                            if ($ppt_info) {
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
                            }
                        } else {
                            // cập nhật thông tin ppt
                            $session->ppttype = 1;
                            $session->save();
                        }

                        if ($file_exten == 'zip') {
                            $ppt_info = $file_upload_info;
                            $path_file_zip = public_path('upload/ppt').'/'.$ppt_info['name'];
                            $file_exten = pathinfo($path_file_zip, PATHINFO_EXTENSION);

                            $folder_tmp = public_path('tmp');
                            if (!is_dir($folder_tmp)) {
                                mkdir($folder_tmp);
                            }
                            $folder_tmp .= '/'.$ppt_info['idc'];
                            if (!is_dir($folder_tmp)) {
                                mkdir($folder_tmp);
                            } else {
                                App::deleteDir($folder_tmp);
                                mkdir($folder_tmp);
                            }

                            $zip = new \ZipArchive;
                            $resZip = $zip->open($path_file_zip);
                            if ($resZip === TRUE) {
                                $zip->extractTo($folder_tmp);
                                $zip->close();

                                $validate = true;
                                if (is_file($folder_tmp.'/index.html') && is_dir($folder_tmp.'/data')) {
                                    $folder_data = $folder_tmp;
                                } else {
                                    $list_file_of_tmp = glob($folder_tmp.'/*');
                                    if (count($list_file_of_tmp) === 1) {
                                        $folder_data_tmp = $list_file_of_tmp[0];
                                        if (is_dir($folder_data_tmp) && is_file($folder_data_tmp.'/index.html') && is_dir($folder_data_tmp.'/data')) {
                                            $folder_data = $folder_data_tmp;
                                        } else {
                                            $validate = false;
                                        }
                                    } else {
                                        $validate = false;
                                    }
                                }

                                if ($validate) {
                                    $dataRender = $this->process_html($folder_data.'/index.html');

                                    // xử lý xong tiến hành xóa file index.html
                                    unlink($folder_data.'/index.html');

                                    // di chuyển toàn bộ thư mục qua thư mục được chỉ định
                                    $folder = public_path('ppt');
                                    if (!is_dir($folder)) {
                                        mkdir($folder);
                                    }
                                    $folder .= '/'.$ppt_info['idc'];
                                    if (!is_dir($folder)) {
                                        mkdir($folder);
                                    }

                                    $this->cut_folder($folder_data, $folder);
                                    $ppt_info['data'] = $dataRender;
                                    $ppt_info['status'] = 1;
                                    Storage::put($path_file_info, json_encode($ppt_info));

                                    App::deleteDir($folder_tmp);
                                    $res['status'] = 1;
                                    $res['msg'] = 'Đã tải lên và xử lý thành công';
                                } else {
                                    App::deleteDir($folder_tmp);
                                    $res['msg'] = 'File Zip không hợp lệ!';
                                }
                            } else {
                                $res['msg'] = 'File Zip không hợp lệ!';
                            }
                        } else {
                            // lưu lại thông tin file
                            Storage::put($path_file_info, json_encode($file_upload_info));
                            $res['status'] = 1;
                            $res['msg'] = 'Tải lên thành công';
                        }
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
                        $file_exten = pathinfo($file_upload_info['nameor'], PATHINFO_EXTENSION);

                        // chuyển pdf thành ảnh
                        if ($file_exten == 'pdf') {
                            $file_upload_info['name'] = $file_upload_info['idc'].'.'.$file_exten;
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

                            Pdf::dispatch($file_upload_info['idc'], $file_upload_info['name'], $path_file_info);
                            $res['msg'] = 'Tải lên thành công';
                            $res['status'] = 1;
                        } else {
                            $res['msg'] = 'File không hợp lệ vui lòng tải lên pdf!';
                        }
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

    // lấy tất cả các blog
    public function manage_blog(Request $request) {
        $info = App::CheckLogin($request);
        $res = App::Res([
            'blogs' => [],
        ]);

        if ($info['status']) {
            if (App::auth($info['info_user'], 1)) { // chỉ có quản trị viên mới vô đc
                $list_blog = [];
                foreach (lblog::all()->sortByDesc('id') as $blog) {
                    $blog_info = [
                        'id' => $blog->id,
                        'name' => $blog->name,
                        // 'slug' => $blog->slug,
                        'photo' => $blog->photo,
                        'description' => $blog->description,
                        'status' => $blog->status,
                        // 'user' => 'quản trị viên',
                        // 'data' => '',
                    ];

                    // $data = Storage::get("/blog/{$blog->id}.txt");
                    // if ($data) {
                    //     $blog_info['data'] = $data;
                    // }

                    // $user_create = luser::select('id', 'name')->where('id', $blog->luser_id)->first();
                    // if ($user_create) {
                    //     $blog_info['user'] = $user_create->name;
                    // }

                    $list_blog[] = $blog_info;

                }

                $res['blogs'] = $list_blog;
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

    // Thêm blog
    public function manage_blog_create(Request $request) {
        $res = App::Res();
        $info = App::CheckLogin($request);

        if ($info['status']) {
            if (App::auth($info['info_user'], [1, 2])) {
                if (Validate::name($res, $request->all(), 'name', 'Tiêu đề')) {
                    // tiến hành tạo :))
                    $blog = new lblog;
                    $blog->name = $request->name;
                    $blog->slug = Str::slug($request->name, '-');
                    if (!empty($request->description)) {
                        $blog->description = $request->description;
                    }

                    if ($request->file('image')) {
                        $file = $request->file('image');
                        $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                        $file->move(public_path('upload/photo'), $filename);
                        $blog->photo = '/upload/photo/' . $filename;
                    } else {
                        $imgs = config('app.photo');
                        $blog->photo = $imgs[rand(0, count($imgs)-1)];
                    }

                    $category = [];
                    if (!empty($request->category)) {
                        $category_tmp = json_decode($request->category, 1);
                        if (is_array($category_tmp) && count($category_tmp) > 0) {
                            foreach ($category_tmp as $category_elm) {
                                if (is_string($category_elm) || is_numeric($category_elm)) {
                                    // đọc từ db ra nếu có thì lưu lại id
                                    $query_category = lcategory::select('id')->where('name', $category_elm)->get();
                                    // nếu không có thì tạo mới
                                    if ($query_category->count() > 0) {
                                        $category[] = $query_category[0]->id;
                                    } else {
                                        $category_new = new lcategory;
                                        $category_new->name = $category_elm;
                                        $category_new->save();
                                        $category[] = $category_new->id;
                                    }
                                }
                            }
                        }
                    }

                    $blog->save();
                    // lưu lại data
                    $path_file_info = "/blog/{$blog->id}.json";
                    $data = '';
                    if (!empty($request->data) && is_string($request->data)) {
                        $data = $request->data;
                    }
                    Storage::put($path_file_info, $data);

                    // thêm category cho blog
                    if (count($category) > 0) {
                        $data_insert = [];
                        foreach ($category as $category_id) {
                            $data_insert[] = [
                                'lblog_id' => $blog->id,
                                'lcategorys_id' => $category_id,
                            ];
                        }
                        DB::table('lblog_categorys')->insert($data_insert);
                    }
                    $res['status'] = 1;
                    $res['msg'] = 'Thêm tin tức thành công';
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

    // lấy data của blog
    public function manage_blog_get_data(Request $request) {
        $request_all = $request->all();
        $res = App::Res([
            'data' => '',
            'list_category' => [],
        ]);

        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        // lấy data và trả về cho frontend
                        $path_file_info = "/blog/{$request_all['blog_id']}.txt";
                        $data = Storage::get($path_file_info);
                        if (empty($data)) {
                            $data = '';
                        }
                        // lấy danh sách category
                        $category = [];
                        $query_category = DB::table('lblog_categorys')->select('name')->where('lblog_id', $request_all['blog_id'])->join('lcategorys', 'lblog_categorys.lcategorys_id', '=', 'lcategorys.id')->get();
                        if ($query_category->count() > 0) {
                            foreach ($query_category as $category_tmp) {
                                $category[] = $category_tmp->name;
                            }
                        }
                        $res['status'] = 1;
                        $res['data'] = $data;
                        $res['list_category'] = $category;
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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

    // show blog
    public function manage_blog_show(Request $request) {
        $request_all = $request->all();
        $res = App::Res();
        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        if ($blog->status == 1) {
                            $res['msg'] = 'Tin tức đang được hiển thị!';
                        } else {
                            $blog->status = 1;
                            $blog->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã hiển thị tin tức!';
                        }
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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

    // tắt blog
    public function manage_blog_off(Request $request) {
        $request_all = $request->all();
        $res = App::Res();
        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        if ($blog->status == 1) {
                            $blog->status = 0;
                            $blog->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã tắt hiển thị tin tức!';
                        } else {
                            $res['msg'] = 'Tin tức đang không hiển thị!';
                        }
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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

    // sửa blog
    public function manage_blog_edit(Request $request) {
        $request_all = $request->all();
        $res = App::Res();
        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        $change = false;
                        if (!empty($request->name) && $request->name != $blog->name) {
                            if (Validate::name($res, $request->all(), 'name', 'Tên lớp')) {
                                // Tạo slug
                                $blog->name = $request->name;
                                $blog->slug = Str::slug($request->name, '-');
                                $change = true;
                            }
                        }
                        if (!empty($request->description) && $request->description != $blog->description) {
                            $blog->description = $request->description;
                            $change = true;
                        }
                        if ($request->file('image')) {
                            $file = $request->file('image');
                            $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                            $file->move(public_path('upload/photo'), $filename);
                            $blog->photo = '/upload/photo/' . $filename;
                            $change = true;
                        }

                        $path_file_info = "/blog/{$blog->id}.txt";
                        $data = Storage::get($path_file_info);
                        if (!empty($request->data) && is_string($request->data) && $request->data != $data) {
                            Storage::put($path_file_info, $request->data);
                            $change = true;
                        }

                        // lấy danh sách category để kiểm tra
                        $category = [];
                        if (!empty($request->category)) {
                            $category_tmp = json_decode($request->category, 1);
                            if (is_array($category_tmp) && count($category_tmp) > 0) {
                                foreach ($category_tmp as $category_elm) {
                                    if (is_string($category_elm) || is_numeric($category_elm)) {
                                        // đọc từ db ra nếu có thì lưu lại id
                                        $query_category = lcategory::select('id')->where('name', $category_elm)->get();
                                        // nếu không có thì tạo mới
                                        if ($query_category->count() > 0) {
                                            $category[] = $query_category[0]->id;
                                        } else {
                                            $category_new = new lcategory;
                                            $category_new->name = $category_elm;
                                            $category_new->save();
                                            $category[] = $category_new->id;
                                        }
                                    }
                                }
                            }
                        }

                        // lấy category trong blog
                        $category_old = [];
                        $query_category = DB::table('lblog_categorys')->select('id', 'lcategorys_id')->where('lblog_id', $request_all['blog_id'])->get();
                        $link_relationship = [];
                        if ($query_category->count() > 0) {
                            foreach ($query_category as $category_tmp) {
                                $link_relationship[$category_tmp->lcategorys_id] = $category_tmp->id;
                                $category_old[] = $category_tmp->lcategorys_id;
                            }
                        }

                        // So sánh 2 danh sách để xem thằng nào xóa và thằng nào được thêm 
                        $list_delete = array_diff($category_old, $category); // id của mối quan hệ giữa blog và category để còn xóa
                        $list_add = array_diff($category, $category_old); // danh sách id những category cần thêm

                        $res['test_1'] = [$category, $category_old];
                        $res['test_2'] = [$list_delete, $list_add];

                        if (count($list_delete) > 0) {
                            $id_delete = [];
                            foreach ($list_delete as $id) {
                                $id_delete[] = $link_relationship[$id];
                            }
                            DB::table('lblog_categorys')->whereIn('id', $id_delete)->delete();
                            $change = true;
                        }

                        if (count($list_add) > 0) {
                            $data_insert = [];
                            foreach ($list_add as $id) {
                                $data_insert[] = [
                                    'lblog_id' => $blog->id,
                                    'lcategorys_id' => $id,
                                ];
                            }
                            DB::table('lblog_categorys')->insert($data_insert);
                            $change = true;
                        }

                        if ($change) {
                            $blog->save();
                            $res['status'] = 1;
                            $res['msg'] = 'Đã sửa lớp thành công';
                        } else {
                            $res['msg'] = 'Không có gì thay đổi!';
                        }
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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

    // xóa blog
    public function manage_blog_delete(Request $request) {
        $request_all = $request->all();
        $res = App::Res();
        if (Validate::number($res, $request_all, 'blog_id', 'Tin tức')) {
            $info = App::CheckLogin($request);
            if ($info['status']) {
                if (App::auth($info['info_user'], [1, 2])) {
                    $blog = lblog::find($request_all['blog_id']);
                    if ($blog) {
                        // tiến hành xóa tin tức
                        $path_file_info = "/blog/{$request_all['blog_id']}.txt";
                        Storage::delete($path_file_info);
                        $blog->delete();
                        $res['msg'] = 'Đã xóa thành công!';
                        $res['status'] = 1;
                    } else {
                        $res['msg'] = 'Tin tức không tồn tại hoặc đã bị xóa vui lòng kiểm tra lại!';
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

    public function search_category(Request $request) {
        // dùng để tìm kiếm catogory
        $res = App::Res([
            'list_category' => []
        ]);
        if (empty($request->key)) {
            $res['msg'] = 'Từ khóa không được để trống';
        } else {
            $list_category = [];
            $list_category_raw = lcategory::where('name', 'LIKE', "%{$request->key}%")->get();
            foreach ($list_category_raw as $category) {
                $list_category[] = $category->name;
            }
            $res['status'] = 1;
            $res['list_category'] = $list_category;
        }
        return App::response($res);
    }

    // app giả để che mắt thôi
    public function loguseractivity(Request $request) {
        return App::response([
            'id' => '1',
            'succeeded' => true
        ]);
    }

    private function process_html($file) {
        $dom = new \DomDocument();
        libxml_use_internal_errors(true);
        $dom->loadHTMLFile($file);
        $head = $dom->getElementsByTagName('head')[0];
        $dataHead = '';
        foreach ($head->childNodes as $child) {
            if ($child->nodeName != 'meta' && $child->nodeName != '#text' && $child->nodeName != 'title') {
                if (
                    $child->nodeName == 'link' &&
                    $child->hasAttribute('rel') &&
                    $child->getAttribute('rel') == 'shortcut icon'
                ) {
                    echo "Đã loại bỏ icon\n";
                } else {
                    $dataHead .= $dom->saveHTML($child);
                }
            }
        }
        $body = $dom->getElementsByTagName('body')[0];
        $dataRender['style'] = $dataHead;
        $dataRender['content'] = $dom->saveHTML($body);
        libxml_clear_errors();
        return $dataRender;
    }

    private function cut_folder($from, $to) {
        foreach(glob($from.'/*') as $file) {
            $fileName = preg_replace('/^'.preg_quote($from, '/').'\//', '', $file);
            $fileNameNew = $to.'/'.$fileName;

            if (is_dir($file)) {
                // tạo thư mục
                if (!is_dir($fileNameNew)) {
                    mkdir($fileNameNew);
                }
                // tiếp tục cut thưu mục bên trong
                $this->cut_folder($file, $fileNameNew);
            } else {
                // copy file và xóa file cũ
                rename($file, $fileNameNew);
                // unlink($file);
            }
        }

        // xóa thư mục cũ
        rmdir($from);
    }

    public function ckfinderUpload(Request $request) {
        $request_all = $request->all();
        $res = App::Res([
            'fileName' => '',
            'uploaded' => 0,
            'url' => '',
        ]);

        $info = App::CheckLogin($request);
        if ($info['status']) {
            if (App::auth($info['info_user'], 1)) {
                if ($request->hasFile('upload')) {
                    $file = $request->file('upload');
                    $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                    $file->move(public_path('upload/blog'), $filename);
                    $res['fileName'] = $filename;
                    $res['uploaded'] = $res['status'] = 1;
                    $res['url'] = '/upload/blog/' . $filename;
                    $res['msg'] = 'Tải lên thành công';
                } else {
                    $res['msg'] = 'Bạn không có file tải lên!';
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
}
