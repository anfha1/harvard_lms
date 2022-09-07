<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\lsession;
use App\Models\lsessionrole;

class Doc extends Controller {
    public function view($id_session) {
        $info_session = lsession::find($id_session);
        if ($info_session && $info_session->status && $info_session->doctype) {
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
                return view('pages.doc', array_merge($GLOBALS['data_bind'], [
                    'info_session' => $info_session,
                ]));
            }
        }
        return redirect()->route('home');
    }
}
