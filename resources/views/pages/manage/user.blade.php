@php $active = 'User'; @endphp
@extends('layouts.manage')

@section('title', 'Quản lý người dùng')

@section('content')
    @if ($info_user->role === 1)
    <a class="btn btn-sm btn-primary" href="{{ route('manage.user.create') }}">Thêm tài khoản</a>

    <table class="table table-bordered mt-2">
    @else
    <table class="table table-bordered">
    @endif
        <thead>
            <tr>
                <th scope="col" class="text-center">id</th>
                <th scope="col" class="text-center">Tài khoản</th>
                <th scope="col" class="text-center" style="width: 30%;">Họ và tên</th>
                <th scope="col" class="text-center">Loại tài khoản</th>
                @if ($info_user->role === 1)
                <th scope="col" class="text-center">Trạng thái</th>
                @endif
                <th scope="col" class="text-center">Chức năng</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-center">0</td>
                <td>Khách</td>
                <td colspan="2">Người dùng không đăng nhập</td>
                @if ($info_user->role === 1)
                <td></td>
                @endif
                <td class="text-center" collapse="4">
                    <a href="{{ route('manage.user.course', ['id' => 0]) }}" class="btn btn-sm btn-primary">Giáo trình</a>
                </td>
            </tr>
            @if ($list_user->count() > 0)
            @foreach ($list_user as $user)
                <tr>
                    <td class="text-center">{{ $user->id }}</td>
                    <td>{{ $user->username }}</td>
                    <td>{{ $user->name }}{!! ($user->id == $id_user ? ' <b>(Tôi)</b>' : '') !!}</td>
                    <td>
                        @switch((int)$user->role)
                        @case(2)
                            Trợ lý hoặc cộng tác viên
                        @break
                        @case(1)
                            Quản trị viên
                        @break
                        @default
                            Giáo viên hoặc đối tác
                        @endswitch
                    </td>
                    @if ($info_user->role === 1)
                    <td>
                        @switch((int)$user->status)
                        @case(1)
                            Kích hoạt
                        @break
                        @default
                            Vô hiệu hóa
                        @endswitch
                    </td>
                    @endif
                    <td class="text-center" collapse="4">
                        <a href="{{ route('manage.user.course', ['id' => $user->id]) }}" class="btn btn-sm btn-primary">Giáo trình</a>
                        @if ($info_user->role === 1)
                        <a href="{{ route('manage.user.edit', ['id' => $user->id]) }}" class="btn btn-sm btn-warning">Sửa</a>
                        <button type="button" class="btn btn-sm btn-danger" onclick="$('#del_{{ $user->id }}').submit()">Xóa</button>

                        <form id="del_{{ $user->id }}" method="POST" style="display: none;" action="/manage/user/delete" onsubmit="return confirm('Bạn có chắc chắn muốn xóa?');">
                            @csrf
                            <input type="text" name="id_user" value="{{ $user->id }}" />
                        </form>
                        @endif
                    </td>
                </tr>
            @endforeach
            @endif
        </tbody>
    </table>
@stop

@section('style')
<link rel="stylesheet" href="/lib/dropdowntree.css">
@stop

@section('script')
<script src="/lib/dropdowntree.js"></script>
@stop