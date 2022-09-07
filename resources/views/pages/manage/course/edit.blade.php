@php $active = 'Course'; @endphp
@extends('layouts.manage')

@section('title', 'Sửa '.$info_course->name)

@section('content')
@component('components.form', [
    'file' => 1,
    'submit' => 'Sửa khối lớp',
    'components' => [
        [
            'components.input.basic',
            [
                'type' => 'text',
                'name' => 'name',
                'label' => 'Tên khối',
                'value' => $info_course->name,
            ]
        ],
        [
            'components.input.basic',
            [
                'type' => 'image',
                'name' => 'image',
                'label' => 'Tải ảnh lên'
            ]
        ],
        [
            'components.input.basic',
            [
                'type' => 'select',
                'name' => 'status',
                'label' => 'Trạng thái',
                'options' => ['Hủy kích hoạt', 'Kích hoạt'],
                'value' => $info_course->status,
            ]
        ],
    ],
])
    <button type="button" class="btn btn-danger" onclick="$('#del_{{ $info_course->id }}').submit()">Xóa khối</button>
@endcomponent

@component('components.form', [
    'id' => 'del_'.$info_course->id,
    'hide' => 1,
    'action' => '/manage/course/delete',
    'onsubmit' => 'return confirm(\'Bạn có chắc chắn muốn xóa?\');',
    'components' => [
        [
            'components.input.basic',
            [
                'type' => 'text',
                'name' => 'id_course',
                'value' => $info_course->id
            ]
        ],
    ],
])
@endcomponent

<div class="card shadow-sm mt-5" style="width: 300px;">
    <img id="PhotoPreview" class="card-img-top img_course" src="{{ $info_course->photo }}">
    <div class="card-body">
        <h6 id="NamePreview" class="card-title">{{ $info_course->name }}</h6>
        <p class="card-text">Xem trước</p>
    </div>
</div>
@stop

@section('style')
<style>
  .img_course {
    height: 180px;
    object-fit: cover;
  }
</style>
@stop

@section('script')
<script>
    $('#input_text_name').keyup(e => {
        $('#NamePreview').text(e.target.value)
    })
    $('#input_file_image_image').change(e => {
        $('#PhotoPreview').attr('src', URL.createObjectURL(e.target.files[0]))
    })
</script>
@stop