@php $active = 'Course'; @endphp
@extends('layouts.manage')

@section('title', 'Tạo tài liệu')

@section('content')
<div><a href="{{ route('manage.course.detail', ['id' => $info_session->lcourse_id]) }}">{{ $info_session->course->name }}</a> > {{ $info_session->name }} > Tạo tài liệu</div>
@component('components.form', [
  'file' => 1,
  'submit' => 'Thêm tài liệu',
  'components' => [
    [
      'components.input.basic',
      [
        'type' => 'textarea',
        'name' => 'content',
        'label' => 'Nội dung',
      ]
    ],
  ],
])
@endcomponent
@stop

@section('script')
<script src="https://cdn.ckeditor.com/ckeditor5/35.0.1/classic/ckeditor.js"></script>
<script>
  ClassicEditor.create(document.querySelector('#textarea_content'), {
    ckfinder: {
      uploadUrl: "{{ route('ckfinder.upload').'?_token='.csrf_token() }}"
    }
  }).catch(e => {
    console.error(e)
  })
</script>
@stop