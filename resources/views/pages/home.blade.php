@php $active = 'Home'; @endphp
@extends('layouts.bootstrap')

@section('title', 'Trang chủ')

@section('content')
{{-- blog --}}
@if($list_blog->count() > 0)
<div>
  <h2>Tin tức</h2>
  <div class="row">
    @foreach ($list_blog as $blog)
      <div class="col-md-3 mb-3 click_course" onclick="location.assign('{{ route('blog.view', ['id_blog' => $blog->id]) }}')">
        <div class="card shadow-sm">
          <img class="card-img-top img_course" alt="Ảnh {{ $blog->title }}" src="{{ $blog->photo ?? 'https://monkeymedia.vcdn.com.vn/upload/web/storage_web/09-08-2022_17:06:37_toan-lop-1-khoi-lap-phuong.jpg' }}">
          <div class="card-body">
            <h6 class="card-title">{{ $blog->title }}</h6>
            <p class="card-text">{{ $blog->description }}</p>
          </div>
        </div>
      </div>
    @endforeach
  </div>
</div>
@endif

{{-- Bài học --}}
@if($list_course->count() > 0)
<div class="mt-3">
  <h2>Khối học</h2>
  <div class="row">
    @foreach ($list_course as $course)
      @php
        $count_session = $course->session->count();
      @endphp
      <div class="col-md-3 mb-3 @if ($count_session > 0) click_course @endif" @if ($count_session > 0) onclick="location.assign('{{ route('course', ['id' => $course->id]) }}')" @endif>
        <div class="card shadow-sm">
          <img class="card-img-top img_course" src="{{ $course->photo ?? 'https://monkeymedia.vcdn.com.vn/upload/web/storage_web/09-08-2022_17:06:37_toan-lop-1-khoi-lap-phuong.jpg' }}" alt="Ảnh {{ $course->name }}">
          <div class="card-body">
            <h5 class="card-title">{{ $course->name }}</h5>
            @if ($count_session > 0)
            <p class="card-text">{{ $count_session }} Tiết học</p>
            @else
            <p class="card-text">Sắp ra mắt</p>
            @endif
          </div>
        </div>
      </div>
    @endforeach
  </div>
</div>
@endif
@stop

@section('style')
<style>
  .img_course {
    height: 180px;
    object-fit: cover;
  }
  .click_course {
    cursor: pointer;
  }
</style>
@stop