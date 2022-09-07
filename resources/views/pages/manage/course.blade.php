@php $active = 'Course'; @endphp
@extends('layouts.manage')

@section('title', 'Quản lý lộ trình')

@section('content')
<div class="container">
  <div class="row">
    @foreach ($list_course as $course)
    <div class="col-md-3 mb-3 click_course" onclick="location.assign('{{ route('manage.course.detail', ['id' => $course->id]) }}')">
      <div class="card shadow-sm">
        <img class="card-img-top img_course" src="{{ $course->photo ?? 'https://monkeymedia.vcdn.com.vn/upload/web/storage_web/09-08-2022_17:06:37_toan-lop-1-khoi-lap-phuong.jpg' }}" alt="Ảnh {{ $course->name }}">
        <div class="card-body">
          <h5 class="card-title">{{ $course->name }}</h5>
          @if ($info_user->role === 1)
          <p class="card-text">{{ $course->status ? 'Hiển thị' : 'Không hiển thị' }}</p>
          @endif
        </div>
      </div>
    </div>
    @endforeach

    @if ($info_user->role == 1)
    <div class="col-md-3 mb-3 click_course" onclick="location.assign('{{ route('manage.course.create') }}')">
      <div class="card shadow-sm">
        <img class="card-img-top img_course" src="https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png" alt="Card image cap">
        <div class="card-body">
          <h6 class="card-title">Thêm khối</h6>
          <p class="card-text">Tạo thêm 1 khối mới</p>
        </div>
      </div>
    </div>
    @elseif($list_course->count() < 1)
    <div class="col-md-3 mb-3">
      <div class="card shadow-sm">
        <img class="card-img-top img_course" src="https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png" alt="Card image cap">
        <div class="card-body">
          <h6 class="card-title">Không có khối nào</h6>
          <p class="card-text">Vui lòng liên hệ quản trị viên để thêm.</p>
        </div>
      </div>
    </div>
    @endif
  </div>
</div>
@stop

@section('style')
<style>
  .img_course {
    height: 180px;
    object-fit: cover;
  }
  .click_new {
    cursor: pointer;
  }
</style>
@stop