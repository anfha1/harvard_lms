<?php
namespace Fai\Lib;

class Validate {
    public static function number(&$res, &$request, $key='number', $name='') {
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

    public static function username(&$res, $request, $key='username', $name='Tài khoản') {
        if (empty($name)) {
            $name = $key;
        }

        if (empty($request[$key])) {
            $res['msg'] = "{$name} Không được để trống";
            return false;
        } else if (is_string($request[$key])) {
            if (strlen($request[$key]) < 5) {
                $res['msg'] = "{$name} Không được ít hơn 5 ký tự";
                return false;
            } else if (strlen($request[$key]) > 25) {
                $res['msg'] = "{$name} Không được nhiều hơn 25 ký tự";
                return false;
            } elseif (preg_match('/^[A-Za-z0-9-_]+$/', strtolower($request[$key]))) {
                $request[$key] = strtolower($request[$key]);
                return true;
            } else {
                $res['msg'] = "{$name} chỉ chứa các ký tự a-z 0-9 không phân biệt ký tự hoa thường";
                return false;
            }
        } else {
            $res['msg'] = "{$name} Không đúng định dạng";
            return false;
        }
    }

    public static function password(&$res, $request, $key='password', $name='Mật khẩu') {
        if (empty($name)) {
            $name = $key;
        }

        if (empty($request[$key])) {
            $res['msg'] = "{$name} Không được để trống";
            return false;
        } else if (is_string($request[$key])) {
            if (strlen($request[$key]) < 5) {
                $res['msg'] = "{$name} Không được ít hơn 5 ký tự";
                return false;
            } else if (strlen($request[$key]) > 25) {
                $res['msg'] = "{$name} Không được nhiều hơn 25 ký tự";
                return false;
            } elseif (preg_match('/^[A-Za-z0-9]+$/', strtolower($request[$key]))) {
                $request[$key] = strtolower($request[$key]);
                return true;
            } else {
                $res['msg'] = "{$name} chỉ chứa các ký tự A-Z a-z 0-9 có phân biệt ký tự hoa thường";
                return false;
            }
        } else {
            $res['msg'] = "{$name} Không đúng định dạng";
            return false;
        }
    }

    public static function role(&$res, $request, $key='role', $name='Quyền') {
        if (empty($name)) {
            $name = $key;
        }

        $request[$key] = (int)$request[$key] ?? 0;

        if (in_array($request[$key], [0, 1, 2])) {
            return true;
        } else {
            $res['msg'] = "{$name} Không phù hợp";
            return false;
        }
    }

    public static function name(&$res, $request, $key='name', $name='') {
        if (empty($name)) {
            $name = $key;
        }

        if (isset($request[$key])) {
            if (preg_match('/^[A-Za-z0-9áàảãạăắặằẳẵâấầẩẫậđéèẻẽẹêếềểễệíìỉĩịóòỏõọôốồổỗộơớờởỡợúùủũụưứừửữựýỳỷỹỵÁÀẢÃẠĂẮẶẰẲẴÂẤẦẨẪẬĐÉÈẺẼẸÊẾỀỂỄỆÍÌỈĨỊÓÒỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÚÙỦŨỤƯỨỪỬỮỰÝỲỶỸỴ\-\: ]+$/', $request[$key])) {
                return true;
            }

            $res['msg'] = "{$name} Không đúng định dạng";
            return false;
        }

        $res['msg'] = "{$name} Không được để trống";
        return false;
    }

    public static function email(&$res, $request, $key='email', $name='Email') {
        if (empty($name)) {
            $name = $key;
        }

        if (isset($request[$key])) {
            if (filter_var($request[$key], FILTER_VALIDATE_EMAIL)) {
                return true;
            }

            $res['msg'] = "{$name} Không đúng định dạng";
            return false;
        }

        $res['msg'] = "{$name} Không được để trống";
        return false;
    }

    public static function list_role(&$res, $request, $key='list_role', $name='Danh sách quyền') {
        if (empty($name)) {
            $name = $key;
        }

        if (isset($request[$key])) {
            if (is_array($request[$key])) {
                foreach($request[$key] as $index => $role) {
                    if (is_int($index)) {
                        if (is_int($request[$key][$index])) {
                            return true;
                        } elseif (is_string($request[$key][$index]) && preg_match('/^\d+$/', $request[$key][$index])) {
                            $request[$key][$index] = (int)$request[$key][$index];
                            return true;
                        } else {
                            $res['msg'] = "{$name} Không đúng định dạng";
                            return false;
                        }
                    } else {
                        $res['msg'] = "{$name} Không đúng định dạng";
                        return false;
                    }
                }
                return true;
            }

            $res['msg'] = "{$name} Không đúng định dạng";
            return false;
        }

        $res['msg'] = "{$name} Không được để trống";
        return false;
    }
}

class FaIPwS {
    private static $encrypt_method = "AES-256-CBC";
    private static $prefix = 'f5';
    private static $suffixes = 'K22';

    public static function encode($string, $sall) {
      $output = openssl_encrypt(
        $string,
        self::$encrypt_method,
        self::hash_key($sall),
        0,
        self::hash_iv($sall)
      );
      return base64_encode($output);
    }

    public static function decode($string, $sall) {
      $output = openssl_decrypt(
        base64_decode($string),
        self::$encrypt_method,
        self::hash_key($sall),
        0,
        self::hash_iv($sall)
      );

      if ($string == self::encode($output, $sall)) {
        return $output;
      } else {
        return false;
      }
    }

    public static function validate($hash, $string, $sall) {
      return self::encode($string, $sall) == $hash;
    }

    private static function hash_key($sall) {
      return hash('sha256', base64_encode($sall));
    }

    private static function hash_iv($sall) {
      $secret_iv = self::$prefix.base64_encode($sall).self::$suffixes;
      return substr(hash('sha256', $secret_iv), 0, 16);
    }
}