@php $active = 'Home'; @endphp
@extends('layouts.bootstrap')

@section('title', 'Đăng nhập')

@section('content')
@component('components.form', [
    'submit' => 'Đăng nhập',
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
    ],
])
@endcomponent
@stop