<?php
namespace Fai\Lib;

class Validate {
    public static function number(&$res, &$request, $key, $name='') {
        if (empty($name)) {
            $name = $key;
        }

        if (isset($request[$key])) {
            if (is_int($request[$key])) {
                return true;
            } elseif (is_string($request[$key]) && preg_match('/^\d+$/', $request[$key])) {
                $request[$key] = (int)$request[$key];
                return true;
            }

            $res['msg'] = "{$name} Không đúng định dạng";
            return false;
        }

        $res['msg'] = "{$name} Không được để trống";
        return false;
    }
}
