<?php

namespace App\Http\Controllers\View\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\luser;
use App\Models\lcourse;
use App\Models\lsessionrole;

class User extends Controller {
    public function home() {
        $info_user = $GLOBALS['data_bind']['info_user'];
        if ($info_user->role == 1) {
            $listUser = luser::all();
        } else {
            $listUser = luser::where('status', 1)->get();
        }
        return view('pages.manage.user', array_merge($GLOBALS['data_bind'], [
            'list_user' => $listUser,
        ]));
    }

    public function create() {
        return view('pages.manage.user.create', $GLOBALS['data_bind']);
    }

    public function edit($id) {
        $info_user = luser::find($id);
        if ($info_user) {
            return view('pages.manage.user.edit', array_merge($GLOBALS['data_bind'], [
                'info_user_edit' => $info_user,
            ]));
        }
        return redirect()->route('manage.user.home');
    }

    public function course($id) {
        if ($id == 0) {
            $list_session = [];
            $list_role = lsessionrole::select('lsession_id')->where('luser_id', 0)->get();
            foreach ($list_role as $role) {
                $list_session[] = $role->lsession_id;
            }
            return view('pages.manage.user.course', array_merge($GLOBALS['data_bind'], [
                'guest' => 1,
                'list_course' => lcourse::all(),
                'list_session' => $list_session,
            ]));
        } else {
            $info_user = luser::find($id);
            if ($info_user) {
                $list_session = [];
                $list_role = lsessionrole::select('lsession_id')->where('luser_id', $id)->get();
                foreach ($list_role as $role) {
                    $list_session[] = $role->lsession_id;
                }
                return view('pages.manage.user.course', array_merge($GLOBALS['data_bind'], [
                    'guest' => 0,
                    'info_user_edit' => $info_user,
                    'list_course' => lcourse::all(),
                    'list_session' => $list_session,
                ]));
            }
        }
        return redirect()->route('manage.user.home');
    }
}
