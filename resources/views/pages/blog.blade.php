@php $active = 'Home'; @endphp
@extends('layouts.bootstrap')

@section('title', $info_blog->title)

@section('content')
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 carousel-photo" src="{{ $info_blog->photo }}" alt="{{ $info_blog->title }}">
    </div>
  </div>
</div>
<div class="mt-3">
  <h2>{{ $info_blog->title }}</h2>
  <small>Ngày đăng: {{ Carbon\Carbon::createFromFormat('Y-m-d H:i:s', $info_blog->created_at)->format('H:i:s d/m/Y') }}</small>
</div>
<div class="content mt-3">
  {!! Storage::disk('ftp')->get("blog_{$info_blog->id}.txt") !!}
</div>
@stop

@section('style')
<style>
  .carousel-photo {
    max-height: 300px;
    object-fit: cover;
  }
</style>
@stop