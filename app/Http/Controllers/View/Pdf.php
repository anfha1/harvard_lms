<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\lcourse;
use App\Models\lsession;
use Fai\Lib\App;

use Illuminate\Support\Facades\Session;

class Pdf extends Controller {
    public function view(Request $request, $course_slug, $course_id, $session_slug, $session_id) {
        // liêm tra tài liệu có tồn tại hay không trước
        $session_info = lsession::select('slug', 'name', 'doctype', 'lcourse_id')->where('id', $session_id)->get();

        if ($session_info->count() > 0) {
            $session_info = $session_info->first();
            if (
                $session_info->doctype == 1 &&
                $session_info->slug == $session_slug &&
                $session_info->lcourse_id == $course_id
            ) {
                $course_info = lcourse::select('slug')->where('id', $course_id)->get();
                if ($course_info->count() > 0 && $course_info->first()->slug == $course_slug) {
                    $info_ppt = json_decode(Storage::get("/pdf/info/{$session_id}.json"), 1);
                    if (isset($info_ppt['status'])) {
                        if (isset($info_ppt['list']) && count($info_ppt['list']) > 0) {
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
                                $list_role = lsessionrole::select('id')->where('luser_id', $id_user)->where('lsession_id', $session_id)->get();
                                if ($list_role->count() > 0) {
                                    $is_view = true;
                                } else {
                                    $is_view = false;
                                }
                            } else {
                                $is_view = true;
                            }

                            if ($is_view) {
                                return view('pages.pdf', [
                                    'list_photo' => $info_ppt['list'],
                                    'name' => $session_info->name,
                                ]);
                            } else {
                                if ($info['status']) {
                                    // không có quyền xem
                                    return 'Tài liệu bị khóa - bạn không có quyền xem!';
                                } else {
                                    // yêu cầu đăng nhập
                                    return 'Vui lòng đăng nhập!';
                                }
                            }
                        } else {
                            return 'Tài liệu trống';
                        }
                    }
                }
            }
        }

        return 'Tài liệu không tồn tại';

        // $info = App::CheckLogin($request);
        // if ($info['status']) {
        //     $session_info = lsession::find($id_session);
        //     if ($session_info) {
        //         if ($session_info->doctype) {
        //             $info_ppt = json_decode(Storage::get("/pdf/info/{$session_info->id}.json"), 1);
        //             if (isset($info_ppt['list']) && count($info_ppt['list']) > 0) {
        //                 return view('pages.pdf', [
        //                     'list_photo' => $info_ppt['list'],
        //                     'name' => $session_info->name,
        //                 ]);
        //             }
        //         }
        //     }
        //     return 'Tài liệu không tồn tại!';
        // } else {
        //     return 'Vui lòng đăng nhập!';
        // }
    }
}
