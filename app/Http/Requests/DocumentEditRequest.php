<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DocumentEditRequest extends FormRequest
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
            'content' => 'required'
        ];
    }

    public function messages() {
        return [
            'required' => ':attribute không được để trống',
        ];
    }

    public function attributes() {
        return [
            'content' => 'Nội dung',
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
