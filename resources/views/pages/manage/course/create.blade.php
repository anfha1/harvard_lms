@php $active = 'Course'; @endphp
@extends('layouts.manage')

@section('title', 'Thêm khối mới')

@section('content')
@component('components.form', [
    'file' => 1,
    'submit' => 'Tạo khối lớp',
    'components' => [
        [
            'components.input.basic',
            [
                'type' => 'text',
                'name' => 'name',
                'label' => 'Tên khối',
            ]
        ],
        [
            'components.input.basic',
            [
                'type' => 'image',
                'name' => 'image',
                'label' => 'Tải ảnh lên',
            ]
        ],
    ],
])
@endcomponent

<div class="card shadow-sm mt-5" style="width: 300px;">
    <img id="PhotoPreview" class="card-img-top img_course" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22348%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20348%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_182d8fd1b62%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A17pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_182d8fd1b62%22%3E%3Crect%20width%3D%22348%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22116.71875%22%20y%3D%22120.3%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E">
    <div class="card-body">
        <h6 id="NamePreview" class="card-title">Thêm khối mới</h6>
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