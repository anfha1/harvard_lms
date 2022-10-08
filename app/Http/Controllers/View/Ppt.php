<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Fai\Lib\App;

use App\Models\lsession;
use App\Models\lsessionrole;

class Ppt extends Controller {
    public function view(Request $request, $id_ppt, $session_id) {
        $info_session = lsession::find($session_id);
        if ($info_session->ppttype) {
            $path_file_info = "/ppt/info/{$session_id}.json";
            $ppt_info = json_decode(Storage::get($path_file_info), 1);

            if ($ppt_info['idc'] == $id_ppt && $ppt_info['status'] == 1) {
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
                    return view('pages.ppt', [
                        'dataRender' => $ppt_info['data'],
                        'title' => $info_session->name,
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
            }
        }

        return "Tài liệu không tồn tại";
    }
}
