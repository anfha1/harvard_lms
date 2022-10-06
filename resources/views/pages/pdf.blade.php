@php
  $listImg = $list_photo;
@endphp

@extends('layouts.pdf')

@section('title', 'Giáo án: '.$name)
@section('fistimg', $listImg[0])

@section('content')
@for ($num = 0; $num < count($listImg); $num++)
<div id="page_{{ $num + 1 }}" data-isused="false" data-idpage="{{ $num + 76595 }}">
  <input id="idPage_{{ $num + 1 }}" type="hidden" value="{{ $num + 76595 }}" />
  <img
    class="img-page"
    id="img-page-{{ $num + 1 }}"
    src="{{ $listImg[$num] }}"
    id-page="{{ $num + 76595 }}"
    index-page="{{ $num + 1 }}"
    style="width: 100%; height: 100%; position: relative"
  />
  <input type="hidden" id="idLevelTheme" value="{{ $num + 1 }}" />
</div>
@endfor
@stop

@section('thumbnail')
@for ($num = 0; $num < count($listImg); $num++)
<div class="grid-thumbnail">
  <img
    class="grid-page"
    id="imgThumbnail{{ $num + 1 }})"
    onclick="gotoPageByThumbnail({{ $num + 1 }})"
    src="{{ $listImg[$num] }}"
  />
  <div class="thumbnail-info">
    <p>Page {{ $num + 1 }}</p>
  </div>
</div>
@endfor
@stop
