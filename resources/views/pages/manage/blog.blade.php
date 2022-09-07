@php $active = 'Blog'; @endphp
@extends('layouts.manage')

@section('title', 'Quản lý bài viết')

@section('content')
<div class="container">
  <div class="row">
    @foreach ($list_blog as $blog)
    <div class="col-md-3 mb-3 click_blog" onclick="location.assign('{{ route('manage.blog.edit', ['id' => $blog->id]) }}')">
      <div class="card shadow-sm">
        <img class="card-img-top img_course" alt="Ảnh {{ $blog->title }}" src="{{ $blog->photo ?? 'https://monkeymedia.vcdn.com.vn/upload/web/storage_web/09-08-2022_17:06:37_toan-lop-1-khoi-lap-phuong.jpg' }}">
        <div class="card-body">
          <h6 class="card-title">{{ $blog->title }}</h6>
          <p class="card-text">{{ $blog->description }}</p>
          <small class="card-text">{{ $blog->status ? 'Hiển thị' : 'Không hiển thị' }}</small>
        </div>
      </div>
    </div>
    @endforeach

    <div class="col-md-3 mb-3 click_blog" onclick="location.assign('{{ route('manage.blog.create') }}')">
      <div class="card shadow-sm">
        <img class="card-img-top img_course" src="https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png" alt="Card image cap">
        <div class="card-body">
          <h6 class="card-title">Thêm tin tức mới</h6>
          <p class="card-text">Tạo thêm tin tức</p>
          <small>Click vào để thêm</small>
        </div>
      </div>
    </div>
  </div>
</div>
@stop

@section('style')
<style>
  .img_course {
    height: 180px;
    object-fit: cover;
  }
  .click_blog {
    cursor: pointer;
  }
</style>
@stop