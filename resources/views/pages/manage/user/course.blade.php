@php $active = 'User'; @endphp
@extends('layouts.manage')

@section('title', 'Chỉnh quyền giáo trình của '.($guest ? 'Khách' : $info_user_edit->name))

@section('content')
<form method="POST" action="/manage/role/user">
  @csrf
  @foreach ($list_course as $course)
  @if ($course->session->count() > 0)
    <div>
      <h6>{{ $course->name }}</h6>

      @foreach ($course->session as $session)
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" name="session[{{ $session->id }}]" id="user_{{ $guest ? 0 : $info_user_edit->id }}_session_{{ $session->id }}" @if (in_array($session->id, $list_session)) checked @endif>
          <label class="custom-control-label" for="user_{{ $guest ? 0 : $info_user_edit->id }}_session_{{ $session->id }}">{{ $session->name }}</label>
        </div>
      @endforeach
    </div>
  @endif
  @endforeach
  <button type="submit" name="id_user" class="btn btn-sm btn-primary mt-3" value="{{ $guest ? 0 : $info_user_edit->id }}">Lưu</button>
</form>
@stop