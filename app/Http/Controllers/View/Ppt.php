<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\lsession;
use App\Models\lppt;
use App\Models\lsessionrole;

class Ppt extends Controller {
    public function view(Request $request, $id_ppt, $id_session) {
        $info_ppt = lppt::where('idc', $id_ppt)->first();
        $info_session = lsession::find($id_session);
        if (
            $info_ppt && $info_session &&
            $info_ppt->status == 1 &&
            $info_session->lppt_id == $info_ppt->id &&
            $info_session->status
        ) {
            // sau đó check quyền để hiển thị :v
            $role = lsessionrole::where('lsession_id', $id_session);
            if ($GLOBALS['data_bind']['logined']) {
                $role = $role->where(function ($query) {
                    $query->where('luser_id', 0)->orWhere('luser_id', $GLOBALS['data_bind']['id_user']);
                });
            } else {
                $role = $role->where('luser_id', 0);
            }
            $role = $role->get();
            if ($role->count() > 0) {
                return view('pages.ppt', array_merge($GLOBALS['data_bind'], [
                    'info_ppt' => $info_ppt,
                    'info_session' => $info_session,
                ]));
            }
        }
        return redirect()->route('home');
    }
}
