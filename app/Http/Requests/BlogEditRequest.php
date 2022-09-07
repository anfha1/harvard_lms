<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BlogEditRequest extends FormRequest
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
            'title' => 'required'
        ];
    }

    public function messages() {
        return [
            'required' => ':attribute không được để trống',
        ];
    }

    public function attributes() {
        return [
            'title' => 'Tiêu đề',
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
