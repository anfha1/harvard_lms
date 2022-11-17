<?php

namespace App\Http\Controllers\Api\V1;

use Fai\Lib\App;
use Fai\Lib\Validate;
use Fai\Lib\FaIPwS;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use App\Jobs\Pdf;

use App\Models\luser;

use App\Models\lblog;
use App\Models\lcategory;
use App\Models\lblog_category;

use App\Models\lcourse;
use App\Models\lsession;
use App\Models\lsessionrole;

use App\Models\lbook;
use App\Models\lbook_session_role;

use App\Models\laction;
use App\Models\laction_session;
use App\Models\laction_session_role;

use App\Models\ladvise;
use App\Models\ladvise_session;
use App\Models\ladvise_session_role;
use App\Models\lfeedback;

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
        $list_select = [];
        $path_file_info = "/blog/config.json";
        $data = json_decode(Storage::get($path_file_info), 1);
        if (!empty($data) && isset($data['selection'])) {
            $list_select = $data['selection'];
        }

        $list_blog = [];
        foreach (lblog::whereIn('id', $list_select)->where('status', 1)->orderBy('id', 'desc')->get() as $blog) {
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

    public function feedback(Request $request) {
        $res = App::Res();
        if (empty($request->name)) {
            $res['msg'] = 'Tên không được để trống';
        } else {
            if (empty($request->phone) && empty($request->email)) {
                $res['msg'] = 'Email hoặc số điện thoại không được để trống';
            } else {
                if (empty($request->content)) {
                    $res['msg'] = 'Nội dung không được để trống';
                } else {
                    $data = [
                        'name' => $request->name,
                        'phone' => $request->phone ?? '',
                        'email' => $request->email ?? '',
                        'content' => $request->content,
                    ];

                    $feedback = new lfeedback;
                    $feedback->content = json_encode($data);
                    $feedback->save();

                    $res['status'] = 1;
                    $res['msg'] = 'Đã gửi đi thành công';
                }
            }
        }
        return App::response($res);
    }

    public function blog_role_check(Request $request) {
        $res = App::Res([
            'data' => '',
            'list_blog' => [],
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

                // Lấy danh sách category theo blog
                $category = [];
                $query_category = lblog_category::select('lcategorys_id')->where('lblog_id', $request->blog_id)->get();
                if ($query_category->count() > 0) {
                    foreach ($query_category as $category_tmp) {
                        $category[] = $category_tmp->lcategorys_id;
                    }
                }

                // lấy danh sách id của bài viết
                if (count($category) > 0) {
                    $query_category = lblog_category::select('lblog_id')
                    ->whereIn('lcategorys_id', $category)
                    ->whereNot('lblog_id', $request->blog_id)
                    ->get();
                    $category = [];
                    if ($query_category->count() > 0) {
                        foreach ($query_category as $category_tmp) {
                            $category[] = $category_tmp->lblog_id;
                        }
                    }
                }

                // lấy thông tin bài viết
                $list_blog = [];
                if (count($category) > 0) {
                    $query_category = lblog::where('status', 1)->whereIn('id', $category)->orderBy('id', 'desc')->limit(2)->get();
                    if ($query_category->count() > 0) {
                        foreach ($query_category as $blog) {
                            $list_blog[] = [
                                'id' => $blog->id,
                                'name' => $blog->name,
                                'slug' => $blog->slug,
                                'photo' => $blog->photo,
                                'description' => $blog->description,
                                'created_at' => $blog->created_at,
                            ];
                        }
                    }
                }
                $res['list_blog'] = $list_blog;
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

    public function course_ppt_get_data(Request $request) {
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

    public function book(Request $request) {
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
            $list_role = lbook_session_role::select('lbook_session_id')->where('luser_id', $id_user)->get();
            if ($list_role->count() > 0) {
                $list_role_tmp = [];
                foreach ($list_role as $role) {
                    $list_role_tmp[] = $role->lbook_session_id;
                }
                $list_role = $list_role_tmp;
            } else {
                $list_role = [];
            }
        }

        $list_course = [];
        foreach (lbook::where('status', 1)->get() as $course) {
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
                    'doc_type' => 0,
                    'doc_link' => "",
                ];
                if (!$lock) {
                    if ($session->doctype == 1) {
                        $data = Storage::get("/book/info/{$session->id}.json");
                        if ($data) {
                            $info = json_decode($data, 1);
                            if ($info['status'] == 1) {
                                $session_info['doc_type'] = 1;
                                $session_info['doc_link'] = "/view/book/{$course->slug}-{$course->id}/{$session->slug}-{$session->id}.html";
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

    public function action(Request $request) {
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
            $list_role = laction_session_role::select('laction_session_id')->where('luser_id', $id_user)->get();
            if ($list_role->count() > 0) {
                $list_role_tmp = [];
                foreach ($list_role as $role) {
                    $list_role_tmp[] = $role->laction_session_id;
                }
                $list_role = $list_role_tmp;
            } else {
                $list_role = [];
            }
        }

        $list_course = [];
        foreach (laction::where('status', 1)->get() as $course) {
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
                if (!$lock) {
                    $list_session[] = [
                        'id' => $session->id,
                        'name' => $session->name,
                        'description' => $session->description,
                        'photo' => $session->photo,
                        'slug' => $session->slug,
                    ];
                }
            }
            if (count($list_session)) {
                $list_course[] = [
                    'id' => $course->id,
                    'name' => $course->name,
                    'photo' => $course->photo,
                    'sessions' => $list_session,
                    'slug' => $course->slug,
                ];
            }
        }

        return App::response([
            'status' => 1,
            'msg' => '',
            'courses' => $list_course,
        ]);
    }

    public function action_get_data(Request $request) {
        $res = App::Res([
            'data' => '',
        ]);
        $session_info = laction_session::select('slug', 'name', 'laction_id')->where('id', $request->session_id)->get();
        if ($session_info->count() > 0) {
            $session_info = $session_info->first();
            if (
                $session_info->slug == $request->session_slug &&
                $session_info->laction_id == $request->course_id
            ) {
                $course_info = laction::find($request->course_id);
                if (
                    $course_info &&
                    $course_info->slug == $request->course_slug
                ) {
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
                        $list_role = laction_session_role::select('id')->where('luser_id', $id_user)->where('laction_session_id', $request->session_id)->get();
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
                        $res['data'] = Storage::get("/action/{$request->session_id}.txt") ?? '';
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

        return App::response($res);
    }

    public function advise(Request $request) {
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
            $list_role = ladvise_session_role::select('ladvise_session_id')->where('luser_id', $id_user)->get();
            if ($list_role->count() > 0) {
                $list_role_tmp = [];
                foreach ($list_role as $role) {
                    $list_role_tmp[] = $role->ladvise_session_id;
                }
                $list_role = $list_role_tmp;
            } else {
                $list_role = [];
            }
        }

        $list_course = [];
        foreach (ladvise::where('status', 1)->get() as $course) {
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
                if (!$lock) {
                    $list_session[] = [
                        'id' => $session->id,
                        'name' => $session->name,
                        'description' => $session->description,
                        'photo' => $session->photo,
                        'slug' => $session->slug,
                    ];
                }
            }
            if (count($list_session)) {
                $list_course[] = [
                    'id' => $course->id,
                    'name' => $course->name,
                    'photo' => $course->photo,
                    'sessions' => $list_session,
                    'slug' => $course->slug,
                ];
            }
        }

        return App::response([
            'status' => 1,
            'msg' => '',
            'courses' => $list_course,
        ]);
    }

    public function advise_get_data(Request $request) {
        $res = App::Res([
            'data' => '',
        ]);
        $session_info = ladvise_session::select('slug', 'name', 'ladvise_id')->where('id', $request->session_id)->get();
        if ($session_info->count() > 0) {
            $session_info = $session_info->first();
            if (
                $session_info->slug == $request->session_slug &&
                $session_info->ladvise_id == $request->course_id
            ) {
                $course_info = ladvise::find($request->course_id);
                if (
                    $course_info &&
                    $course_info->slug == $request->course_slug
                ) {
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
                        $list_role = ladvise_session_role::select('id')->where('luser_id', $id_user)->where('ladvise_session_id', $request->session_id)->get();
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
                        $res['data'] = Storage::get("/advise/{$request->session_id}.txt") ?? '';
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
                        'phone' => $user->phone ?? '',
                        'email' => $user->email ?? '',
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
                                        $luser->phone = $request_all['phone'];
                                        $luser->email = $request_all['email'];

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
                        if ($next && !empty($request->phone)) {
                            if ($request_all['phone'] != $user->phone) {
                                $user->phone = $request_all['phone'];
                                $change = true;
                            }
                        }
                        if ($next && !empty($request->email)) {
                            if ($request_all['email'] != $user->email) {
                                $user->email = $request_all['email'];
                                $change = true;
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

    // tìm kiếm chủ đề
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

    // upload ảnh theo ckeditor
    public function ckfinderUpload(Request $request) {
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

    // upload ảnh theo tinyMCE
    public function tinyUpload(Request $request) {
        $res = App::Res([
            'fileName' => '',
            'uploaded' => 0,
            'url' => '',
        ]);

        // dd($request);

        $info = App::CheckLogin($request);
        if ($info['status']) {
            if (App::auth($info['info_user'], [1, 2])) {
                if ($request->hasFile('file')) {
                    $file = $request->file('file');
                    $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
                    $file->move(public_path('upload/blog'), $filename);
                    $res['fileName'] = $filename;
                    $res['uploaded'] = $res['status'] = 1;
                    $res['location'] = '/upload/blog/' . $filename;
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

        if ($res['status']) {
            return App::response($res);
        } else {
            return App::response($res, 400);
        }
    }

    // lấy token
    public function session_get(Request $request) {
        $res = App::Res([
            'status' => 1,
            'token' => FaIPwS::encode(microtime(1).'#'.$request->session()->getId(), 'token_session'),
        ]);
        return App::response($res);
    }

    // check token
    public function session_check(Request $request) {
        $res = App::Res();
        if ($request->has(['token'])) {
            $token = FaIPwS::decode($request->token, 'token_session');
            if ($token) {
                $token = explode('#', $token);
                if (count($token) == 2) {
                    $time = microtime(1) - (double)$token[0];
                    if ($time < 180) {
                        $file_sesssion = storage_path('framework/sessions') . '/' . $token[1];
                        $data_file_sesssion = unserialize(file_get_contents($file_sesssion));
                        if (isset($data_file_sesssion['id_user']) && $data_file_sesssion['id_user'] > 0) {
                            $info_user = luser::find($data_file_sesssion['id_user']);
                            $res['id_user'] = $info_user->id;
                            $res['role_user'] = $info_user->role ?? 0;
                        } else {
                            $res['id_user'] = 0;
                            $res['role_user'] = 0;
                        }
                        $res['status'] = 1;
                        $res['session'] = $token[1];
                        $res['msg'] = 'Token hợp lệ';
                    } else {
                        $res['msg'] = 'Token đã hết hạn';
                    }
                } else {
                    $res['msg'] = 'Token không hợp lệ';
                }
            } else {
                $res['msg'] = 'Token không hợp lệ';
            }
        } else {
            $res['msg'] = 'Token không được để trống';
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
}
