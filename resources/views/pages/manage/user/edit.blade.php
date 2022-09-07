@php $active = 'User'; @endphp
@extends('layouts.manage')

@section('title', 'Sửa tài khoản '.$info_user_edit->name)

@section('content')
@component('components.form', [
    'submit' => 'Sửa tài khoản',
    'components' => [
        [
            'components.input.multi',
            [
                'components' => [
                    [
                        'components.input.basic',
                        [
                            'type' => 'text',
                            'name' => 'username',
                            'label' => 'Tài khoản',
                            'value' => $info_user_edit->username,
                        ]
                    ],
                    [
                        'components.input.basic',
                        [
                            'type' => 'password',
                            'name' => 'password',
                            'label' => 'Mật khẩu',
                        ]
                    ],
                ]
            ]
        ],
        [
            'components.input.basic',
            [
                'type' => 'text',
                'name' => 'name',
                'label' => 'Họ và tên',
                'value' => $info_user_edit->name,
            ]
        ],
        [
            'components.input.basic',
            [
                'type' => 'select',
                'name' => 'role',
                'label' => 'Loại tài khoản',
                'options' => ['Giáo viên hoặc đối tác', 'Quản trị viên', 'Trợ lý hoặc cộng tác viên'],
                'value' => $info_user_edit->role,
            ]
        ],
        [
            'components.input.basic',
            [
                'type' => 'select',
                'name' => 'status',
                'label' => 'Trạng thái',
                'options' => ['Hủy kích hoạt', 'Kích hoạt'],
                'value' => $info_user_edit->status,
            ]
        ],
    ],
])
    <button type="button" class="btn btn-danger" onclick="$('#del_{{ $info_user_edit->id }}').submit()">Xóa tài khoản</button>
@endcomponent

@component('components.form', [
    'id' => 'del_'.$info_user_edit->id,
    'hide' => 1,
    'action' => '/manage/user/delete',
    'onsubmit' => 'return confirm(\'Bạn có chắc chắn muốn xóa?\');',
    'components' => [
        [
            'components.input.basic',
            [
                'type' => 'text',
                'name' => 'id_user',
                'value' => $info_user_edit->id
            ]
        ],
    ],
])
@endcomponent
@stop