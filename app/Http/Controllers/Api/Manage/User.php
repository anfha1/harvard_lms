<?php

namespace App\Http\Controllers\Api\Manage;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserEditRequest;
use App\Models\luser;

class User extends Controller {
    public function create(UserCreateRequest $request) {
        $request->username = strtolower($request->username);

        // kiểm tra xem có trùng username không nếu trùng thì báo lỗi
        $numUserUseUsername = luser::where('username', $request->username)->count();
        if ($numUserUseUsername > 0) {
            throw ValidationException::withMessages([
                'username' => 'Tài khoản đã được sửa dụng! Vui lòng sử dụng tài khoản khác.'
            ]);
        }

        // Tạo tài khoản
        $user = new luser;
        $user->username = $request->username;
        $user->password = md5($request->password);
        $user->name = $request->name ?: $request->username;
        $role = (int)$request->role ?: 0;
        $user->role = (in_array($role, [0, 1, 2]) ? $role : 0);
        $user->save();

        return redirect()->back()->with('success-msg', 'Đăng ký tài khoản thành công');
    }

    public function edit(UserEditRequest $request, $id) {
        $info_user = luser::find($id);
        if ($info_user) {
            $change = 0;
            // thay đổi tài khoản
            if ($info_user->username != $request->username) {
                $info_user->username = $request->username;
                $change++;
            }
            // thay đổi mật khẩu
            if (!empty($request->password) && $info_user->password != md5($request->password)) {
                $info_user->password = md5($request->password);
                $change++;
            }
            // thay đổi tên
            if ($info_user->name != $request->name) {
                $info_user->name = $request->name;
                $change++;
            }
            // role
            if ($info_user->role != $request->role) {
                $info_user->role = $request->role;
                $change++;
            }
            // status
            if ($info_user->status != $request->status) {
                $info_user->status = $request->status;
                $change++;
            }
            if ($change > 0) {
                $info_user->save();
                return redirect()->back()->with('success-msg', 'Đã cập nhật thành công');
            } else {
                throw ValidationException::withMessages([
                    'msg' => 'Không có gì thay đổi.'
                ]);
            }
        }
        throw ValidationException::withMessages([
            'msg' => 'Người dùng không tồn tại.'
        ]);
    }

    public function delete(Request $request) {
        $info_user = luser::find($request->id_user);
        if ($info_user) {
            $info_user->delete();
        }
        return redirect()->back()->with('success-msg', 'Đã xóa thành công');
    }
}
