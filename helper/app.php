<?php
namespace Fai\Lib;

use App\Models\luser;

class App {
    const RES_FORM = [
        'status' => 0,
        'msg_code' => 0,
        'msg' => '',
    ];

    public static function Res($data = [], $status = 0, $msg_code = 0) {
        $res = self::RES_FORM;
        $res['status'] = $status;
        $res['msg_code'] = $msg_code;
        return array_merge($res, $data);
    }

    public static function CheckLogin($request) {
        $res = self::Res([
            'id_user' => 0,
            'info_user' => []
        ]);

        $id_user = $request->session()->get('id_user');
        if ($id_user) {
            $info_user = luser::find($id_user);
            if ($info_user && $info_user->status) {
                $res['status'] = 1;
                $res['id_user'] = $id_user;
                $res['info_user'] = $info_user;
            } else {
                $request->session()->forget('id_user');
            }
        }

        return $res;
    }

    public static function response($res, $statusCode = 200) {
        return response()->json($res, $statusCode, [
            'Content-Type' => 'application/json;charset=UTF-8',
            'Charset' => 'utf-8'
        ], JSON_UNESCAPED_UNICODE);
    }

    public static function deleteDir($folder) {
        foreach (glob($folder.'/*') as $file) {
            if (is_file($file)) {
                unlink($file);
            } else if (is_dir($file)) {
                self::deleteDir($file);
            }
        }
        if (is_dir($folder)) {
            rmdir($folder);
        }
    }

    public static function auth($info, $role = 2) {
        /** Role
         * 1: Quyền quản trị viên
         * 2: Quyền cộng tác viên
        */

        if (is_array($role)) {
            return in_array(((int)$info['role']), $role);
        } else {
            return ((int)$info['role']) === $role;
        }
    }

    public static function cutDir($from, $to) {
        foreach(glob($from.'/*') as $file) {
            $fileName = preg_replace('/^'.preg_quote($from, '/').'\//', '', $file);
            $fileNameNew = $to.'/'.$fileName;

            if (is_dir($file)) {
                // tạo thư mục
                if (!is_dir($fileNameNew)) {
                    mkdir($fileNameNew);
                }
                // tiếp tục cut thưu mục bên trong
                self::cutDir($file, $fileNameNew);
            } else {
                // copy file và xóa file cũ
                rename($file, $fileNameNew);
                // unlink($file);
            }
        }

        // xóa thư mục cũ
        rmdir($from);
    }
}
