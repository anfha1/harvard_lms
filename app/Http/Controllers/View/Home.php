<?php

namespace App\Http\Controllers\View;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\lblog;
use App\Models\lcourse;
use App\Models\lsessionrole;

class Home extends Controller {
    public function home() {
        $list_blog = lblog::where('status', 1)->get();
        $list_course = lcourse::where('status', 1)->get();
        return view('pages.home', array_merge($GLOBALS['data_bind'], [
            'list_course' => $list_course,
            'list_blog' => $list_blog,
        ]));
    }

    public function course($id) {
        $info_course = lcourse::find($id);
        if ($info_course) {
            $list_role_free_raw = lsessionrole::select('lsession_id')->where('luser_id', 0)->get();
            $list_role = [];
            foreach ($list_role_free_raw as $role) {
                $list_role[$role->lsession_id] = [
                    'is_free' => 1,
                ];
            }

            if ($GLOBALS['data_bind']['logined']) {
                $list_role_raw = lsessionrole::select('lsession_id')->where('luser_id', $GLOBALS['data_bind']['id_user'])->get();
                foreach ($list_role_raw as $role) {
                    $list_role[$role->lsession_id] = [
                        'is_free' => 0,
                    ];
                }
            }
            return view('pages.course', array_merge($GLOBALS['data_bind'], [
                'info_course' => $info_course,
                'list_role' => $list_role,
                'list_key_role' => array_keys($list_role),
            ]));
        }
    }
    
    public function login() {
        return view('pages.login', $GLOBALS['data_bind']);
    }

    public function logout(Request $request) {
        $request->session()->forget('id_user');
        return redirect()->route('home');
    }
}
