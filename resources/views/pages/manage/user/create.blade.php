@php $active = 'User'; @endphp
@extends('layouts.manage')

@section('title', 'Thêm tài khoản')

@section('content')
@component('components.form', [
    'submit' => 'Tạo tài khoản',
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
            ]
        ],
        [
            'components.input.basic',
            [
                'type' => 'select',
                'name' => 'role',
                'label' => 'Loại tài khoản',
                'options' => ['Giáo viên hoặc đối tác', 'Quản trị viên', 'Trợ lý hoặc cộng tác viên'],
            ]
        ],
    ],
])
@endcomponent
@stop