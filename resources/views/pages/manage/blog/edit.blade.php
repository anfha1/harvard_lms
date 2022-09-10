@php $active = 'Blog'; @endphp
@extends('layouts.manage')

@section('title', 'Sửa tin tức')

@section('content')
@component('components.form', [
    'file' => 1,
    'submit' => 'Sửa tin tức',
    'components' => [
        [
            'components.input.basic',
            [
                'type' => 'text',
                'name' => 'title',
                'label' => 'Tiêu đề',
                'value' => $info_blog->title,
            ]
        ],
        [
            'components.input.basic',
            [
                'type' => 'text',
                'name' => 'description',
                'label' => 'Mô tả',
                'value' => $info_blog->description,
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
        [
            'components.input.basic',
            [
                'type' => 'select',
                'name' => 'status',
                'label' => 'Trạng thái',
                'options' => ['Hủy kích hoạt', 'Kích hoạt'],
                'value' => $info_blog->status,
            ]
        ],
        [
            'components.input.basic',
            [
                'type' => 'textarea',
                'name' => 'content',
                'label' => 'Nội dung',
                'value' => Storage::disk('ftp')->get("blog_{$info_blog->id}.txt"),
            ]
        ],
    ],
])
    <button type="button" class="btn btn-danger" onclick="$('#del_{{ $info_blog->id }}').submit()">Xóa tin tức</button>
@endcomponent

@component('components.form', [
    'id' => 'del_'.$info_blog->id,
    'hide' => 1,
    'action' => '/manage/blog/delete',
    'onsubmit' => 'return confirm(\'Bạn có chắc chắn muốn xóa?\');',
    'components' => [
        [
            'components.input.basic',
            [
                'type' => 'text',
                'name' => 'id_blog',
                'value' => $info_blog->id
            ]
        ],
    ],
])
@endcomponent

<div class="card shadow-sm mt-5" style="width: 300px;">
    <img id="PhotoPreview" class="card-img-top img_course" src="{{ $info_blog->photo }}">
    <div class="card-body">
        <h6 id="NamePreview" class="card-title">{{ $info_blog->title }}</h6>
        <p id="ContentPreview" class="card-text">{{ $info_blog->description }}</p>
        <small>Xem trước</small>
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
<script src="https://cdn.ckeditor.com/ckeditor5/35.0.1/classic/ckeditor.js"></script>
<script>
    $('#input_text_title').keyup(e => {
        $('#NamePreview').text(e.target.value)
    })
    $('#input_text_description').keyup(e => {
        $('#ContentPreview').text(e.target.value)
    })
    $('#input_file_image_image').change(e => {
        $('#PhotoPreview').attr('src', URL.createObjectURL(e.target.files[0]))
    })

    ClassicEditor.create(document.querySelector('#textarea_content'), {
        ckfinder: {
            uploadUrl: "{{ '/ckfinder/upload?_token='.csrf_token() }}"
        }
    }).catch(e => {
        console.error(e)
    })
</script>
@stop