<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{--CSRF Token--}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', config('app.name', 'Fai'))</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

    @yield('style')
  </head>
  <body>
    <div class="container-fluid">
      {{-- Thanh nav --}}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Tên trang web</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Trang chủ</span></a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            @if ($logined)
              <li class="nav-item">
                <span class="nav-link active">Xin chào {{ $info_user->name }},</span>
              </li>
              {{-- chỉ có quyền quản lý thôi --}}
              @if (in_array($info_user->role, [1, 2]))
                <li class="nav-item">
                  <a class="nav-link text-primary" href="/manage">Quản lý</a>
                </li>
              @endif
              <li class="nav-item">
                <a class="nav-link text-danger" href="/logout">Đăng xuất</a>
              </li>
            @else
              <li class="nav-item">
                <a class="nav-link text-primary" href="/login">Đăng nhập</a>
              </li>
            @endif
          </ul>
        </div>
      </nav>

      @error('msg')
        <div class="alert alert-danger alert-dismissible fade show text-center mt-2" role="alert">
          {{ $message }}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      @enderror

      @if (session('success-msg'))
        <div class="alert alert-success alert-dismissible fade show text-center mt-2" role="alert">
          {{ session('success-msg') }}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      @endif

      @if (session('error-msg'))
        <div class="alert alert-danger text-center alert-dismissible fade show mt-2" role="alert">
          {{ session('error-msg') }}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      @endif

      @yield('content')
      @yield('script')
    </div>
  </body>
</html>
