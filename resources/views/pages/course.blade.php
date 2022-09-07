@php $active = 'Home'; @endphp
@extends('layouts.bootstrap')

@section('title', $info_course->name)

@section('content')
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 carousel-photo" src="{{ $info_course->photo }}" alt="{{ $info_course->name }}">
    </div>
  </div>
</div>
<div class="mt-3">
  <h2>{{ $info_course->name }}</h2>
  @php
    $list_session = $info_course->session->where('status', 1);
  @endphp
  @if ($list_session->count() > 0)
  <div class="list-group">
    @foreach ($list_session as $session)
      <div class="list-group-item list-group-item-action">
        <span>{{ $session->name }}
          @if(in_array($session->id, $list_key_role))
            @if($list_role[$session->id]['is_free'])
            <span class="badge badge-info">Học thử</span>
            @else
            <span class="badge badge-primary">Đã mở khóa</span>
            @endif
          @else
            <span class="badge badge-danger">Đã khóa</span>
          @endif
        </span>
        <div class="btn-group float-right" role="group">
          @if(in_array($session->id, $list_key_role))
            @if ($session->doctype)
            <a href="{{ route('doc.view', ['id_session' => $session->id]) }}" onclick="" type="button" class="btn btn-sm btn-primary">Tài liệu
              <ion-icon name="eye-outline"></ion-icon>
            </a>
            @endif
            @if ($session->lppt_id)
            @if ($session->ppt->status)
            <a href="{{ route('ppt.view', ['id_ppt' => $session->ppt->idc, 'id_session' => $session->id]) }}" onclick="" type="button" class="btn btn-sm btn-success">Powerpoint
              <ion-icon name="eye-outline"></ion-icon>
            </a>
            @else
            <button type="button" class="btn btn-sm btn-success" title="Đang xử lý">Powerpoint
              <ion-icon name="cog-outline"></ion-icon>
            </button>
            @endif
            @endif
          @else
            @if ($session->doctype)
            <button type="button" class="btn btn-sm btn-primary" disabled>Tài liệu
              <ion-icon name="lock-closed-outline"></ion-icon>
            </button>
            @endif
            @if ($session->lppt_id)
            <button type="button" class="btn btn-sm btn-success" disabled>Powerpoint
              <ion-icon name="lock-closed-outline"></ion-icon>
            </button>
            @endif
          @endif
        </div>
      </div>
    @endforeach
  </div>
  @else
  Chưa có tiết học nào
  @endif
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

@section('script')
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
@stop