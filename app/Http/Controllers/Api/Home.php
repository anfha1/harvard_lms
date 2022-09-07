<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

use App\Http\Requests\LoginRequest;
use App\Models\luser;

class Home extends Controller {
    public function login(LoginRequest $request) {
        $request->username = strtolower($request->username);

        $userUseUsername = luser::where('username', $request->username)->get();

        if ($userUseUsername->count() < 1) {
            throw ValidationException::withMessages([
                'msg' => 'Tài khoản hoặc mật khẩu không đúng! Vui lòng kiểm tra lại.'
            ]);
        }

        foreach ($userUseUsername as $user) {
            if ($user->password === md5($request->password)) {
                if ($user->status) {
                    $request->session()->put('id_user', $user->id);
                    return redirect('/')->with('success-msg', 'Đăng nhập thành công');
                }
                break;
            }
        }

        throw ValidationException::withMessages([
            'msg' => 'Tài khoản hoặc mật khẩu không đúng! Vui lòng kiểm tra lại.'
        ]);
    }

    public function ckfinderUpload(Request $request) {
        $res = [
            'fileName' => '',
            'uploaded' => 0,
            'url' => '',
        ];
        if ($request->hasFile('upload')) {
            $file = $request->file('upload');
            $filename = ((int)(microtime(1)*1000)).'.'.pathinfo($file->getClientOriginalName(), PATHINFO_EXTENSION);
            $file->move(public_path('upload/blog'), $filename);
            $res = [
                'fileName' => $filename,
                'uploaded' => 1,
                'url' => '/upload/blog/' . $filename,
            ];
        }
        return response()->json($res);
    }
}
