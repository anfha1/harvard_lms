@php $active = 'Home'; @endphp
@php
$dataRender = json_decode(Storage::disk('ftp')->get("ppt_{$info_ppt->id}.json"), 1);
@endphp
@extends('layouts.ppt')

@section('title', 'Powerpoint')