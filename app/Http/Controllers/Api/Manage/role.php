<?php

namespace App\Http\Controllers\Api\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;

use App\Models\luser;
use App\Models\lsession;
use App\Models\lsessionrole;

class Role extends Controller {
    public function user(Request $request) {
        $list_role = lsessionrole::select('id', 'lsession_id')->where('luser_id', $request->id_user)->get();
        $data = $request->session;
        if ($data) {
            $list_session = array_keys($data);
        } else {
            $data = [];
            $list_session = [];
        }

        $change = 0;
        if ($list_role->count() > 0) {
            // check xem đã tồn tại hay chưa nếu rồi thì thôi chưa thì thêm vô
            foreach ($list_role as $role) {
                if (in_array($role->lsession_id, $list_session)) {
                    if (isset($data[$role->lsession_id])) {
                        unset($data[$role->lsession_id]);
                        $list_session = array_keys($data);
                    }
                } else {
                    $role->delete();
                    $change++;
                }
            }
        }
        if (count($list_session) > 0) {
            // tiền hành thêm quyền vào db
            foreach ($list_session as $id_session) {
                lsessionrole::create([
                    'luser_id' => $request->id_user,
                    'lsession_id' => $id_session
                ]);
                $change++;
            }
        }

        if ($change) {
            return redirect()->route('manage.user.home')->with('success-msg', 'Đã cấu hình quyền thành công');
        }

        throw ValidationException::withMessages([
            'msg' => 'không có thay đổi về quyền!'
        ]);
    }
}
