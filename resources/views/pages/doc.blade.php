@php $active = 'Home'; @endphp
@extends('layouts.bootstrap')

@section('title', $info_session->course->name.' - '.$info_session->name)

@section('content')
<div><a href="{{ route('course', ['id' => $info_session->lcourse_id]) }}">{{ $info_session->course->name }}</a> > {{ $info_session->name }}</div>

<div class="content mt-3">
  {!! Storage::disk('ftp')->get("document_{$info_session->id}.txt") !!}
</div>
@stop