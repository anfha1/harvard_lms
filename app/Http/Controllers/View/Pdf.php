<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\lsession;

class Pdf extends Controller {
    public function view(Request $request, $id_session) {
        $session_info = lsession::find($id_session);
        if ($session_info) {
            if ($session_info->doctype) {
                $info_ppt = json_decode(Storage::get("/pdf/info/{$session_info->id}.json"), 1);
                if (isset($info_ppt['list']) && count($info_ppt['list']) > 0) {
                    return view('pages.pdf', [
                        'list_photo' => $info_ppt['list'],
                    ]);
                }
            }
        }
        return 'Tài liệu không tồn tại!';
    }
}
