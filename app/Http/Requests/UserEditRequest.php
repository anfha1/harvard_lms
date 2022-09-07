<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserEditRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'username' => 'required|min:5|max:20|not_regex:/[^A-Za-z0-9\.\_\-]/',
            'password' => 'nullable|min:6|max:20|not_regex:/[^A-Za-z0-9\.\+\-\_\!\@\#\$\%\^\&\*]/',
        ];
    }

    public function messages() {
        return [
            'required' => ':attribute không được để trống',
            'min' => ':attribute không được ít hơn :min ký tự',
            'max' => ':attribute không được nhiều hơn :max ký tự',
            'username.not_regex' => ':attribute chỉ chứa các ký tự a-z 0-9 không phân biệt hoa thường và 1 số ký tự đặc biệt ._-',
            'password.not_regex' => ':attribute chỉ chứa các ký tự a-z A-Z 0-9 và 1 số ký tự đặc biệt .+-!@#$%^&*',
        ];
    }

    public function attributes() {
        return [
            'username' => 'Tài khoản',
            'password' => 'Mật khẩu',
        ];
    }

    public function withvalidator($validator) {
        $validator->after(function ($validator) {
            if ($validator->errors()->count() > 0) {
                $validator->errors()->add('msg', 'Đã có lỗi xảy ra');
            }
        });
    }
}
