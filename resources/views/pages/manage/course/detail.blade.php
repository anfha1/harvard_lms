@php $active = 'Course'; @endphp
@extends('layouts.manage')

@section('title', $info_course->name)

@section('content')
<div class="card shadow-sm" style="width: 300px;">
    <img id="PhotoPreview" class="card-img-top img_course" src="{{ $info_course->photo }}">
    <div class="card-body">
        <h6 id="NamePreview" class="card-title">{{ $info_course->name }}</h6>
    </div>
</div>

<div class="mt-2">
    @if ($info_user->role === 1)
        <a class="btn btn-sm btn-primary" href="{{ route('manage.course.edit', ['id' => $info_course->id]) }}">Sửa khối</a>
        <button type="button" class="btn btn-sm btn-danger" onclick="$('#del_{{ $info_course->id }}').submit()">xóa khối</button>

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
    @endif
</div>

@if($info_course->session->count() > 0)
<div class="list-group mt-5" id="accordion_info_session">
    @foreach ($info_course->session as $session)
    <div class="list-group-item list-group-item-action">
        <span>
            <b>{{ $session->name }}</b>

            @if ($session->doctype)
                <span class="badge badge-primary">Đã có tài liệu</span>
            @else
                <span class="badge badge-secondary">Chưa có tài liệu</span>
            @endif

            @if ($session->lppt_id)
                <span class="badge badge-primary">Đã có powerpoint</span>
            @else
                <span class="badge badge-secondary">Chưa có powerpoint</span>
            @endif
        </span>

        <div class="btn-group float-right" role="group">
            <button type="button" class="btn btn-sm btn-info" data-toggle="collapse" href="#collapse_info_session_{{ $session->id }}">Mở rộng</button>
            @if ($session->status)
                <button type="button" class="btn btn-sm btn-warning" onclick="$('#hide_session_{{ $session->id }}').submit()">Hủy xuất bản</button>
                @component('components.form', [
                    'id' => 'hide_session_'.$session->id,
                    'hide' => 1,
                    'action' => '/manage/session/hide',
                    'components' => [
                        [
                            'components.input.basic',
                            [
                                'type' => 'text',
                                'name' => 'id_session',
                                'value' => $session->id
                            ]
                        ],
                    ],
                ])
                @endcomponent
            @else
                <button type="button" class="btn btn-sm btn-success" onclick="$('#show_session_{{ $session->id }}').submit()">Xuất bản</button>
                @component('components.form', [
                    'id' => 'show_session_'.$session->id,
                    'hide' => 1,
                    'action' => '/manage/session/show',
                    'components' => [
                        [
                            'components.input.basic',
                            [
                                'type' => 'text',
                                'name' => 'id_session',
                                'value' => $session->id
                            ]
                        ],
                    ],
                ])
                @endcomponent
            @endif

            {{-- Chức năng của admin --}}
            @if ($info_user->role === 1)
            <button type="button" class="btn btn-sm btn-primary" data-toggle="collapse" href="#collapse_rename_session_{{ $session->id }}">Đổi tên</button>
            <button type="button" class="btn btn-sm btn-danger" onclick="$('#del_session_{{ $session->id }}').submit()">Xóa</button>
            @component('components.form', [
                'id' => 'del_session_'.$session->id,
                'hide' => 1,
                'action' => '/manage/session/delete',
                'onsubmit' => 'return confirm(\'Bạn có chắc chắn muốn xóa?\');',
                'components' => [
                    [
                        'components.input.basic',
                        [
                            'type' => 'text',
                            'name' => 'id_session',
                            'value' => $session->id
                        ]
                    ],
                ],
            ])
            @endcomponent
            @endif
        </div>
    </div>
    <div class="collapse" id="collapse_info_session_{{ $session->id }}" data-parent="#accordion_info_session">
        <div class="card card-body">
            <div class="list-group-item list-group-item-action">
                <span>Tài liệu</span>
                @if ($info_user->role === 1)
                <div class="btn-group float-right" role="group">
                    @if ($session->doctype)
                        <a class="btn btn-sm btn-primary" href="{{ route('manage.doc.edit', ['id' => $session->id]) }}">Sửa tài liệu</a>
                        @component('components.form', [
                            'id' => 'del_document_'.$session->id,
                            'hide' => 1,
                            'action' => '/manage/document/delete',
                            'onsubmit' => 'return confirm(\'Bạn có chắc chắn muốn xóa?\');',
                            'components' => [
                                [
                                    'components.input.basic',
                                    [
                                        'type' => 'text',
                                        'name' => 'id_session',
                                        'value' => $session->id
                                    ]
                                ],
                            ],
                        ])
                        @endcomponent
                        <button type="button" class="btn btn-sm btn-danger" onclick="$('#del_document_{{ $session->id }}').submit()">Xóa tài liệu</button>
                        {{-- Xóa tài liệu --}}
                        @component('components.form', [
                            'id' => 'del_document_'.$session->id,
                            'hide' => 1,
                            'action' => '/manage/document/delete',
                            'onsubmit' => 'return confirm(\'Bạn có chắc chắn muốn xóa?\');',
                            'components' => [
                                [
                                    'components.input.basic',
                                    [
                                        'type' => 'text',
                                        'name' => 'id_session',
                                        'value' => $session->id
                                    ]
                                ],
                            ],
                        ])
                        @endcomponent
                    @else
                        <a class="btn btn-sm btn-primary" href="{{ route('manage.doc.create', ['id' => $session->id]) }}">Thêm tài liệu</a>
                    @endif
                </div>
                @endif
            </div>
            <div class="list-group-item list-group-item-action">
                <span>Powerpoint:</span> <span id="nameppt">{{ ($session->lppt_id ? $session->ppt->nameor : 'Chưa có') }}</span>
                @if ($info_user->role === 1)
                <div class="btn-group float-right" role="group">
                    @if ($session->lppt_id)
                        <label for="create_ppt_input_{{ $session->id }}" class="btn btn-sm btn-primary" style="margin: 0;">Sửa powerpoint</label>

                        <button type="button" class="btn btn-sm btn-danger" onclick="$('#del_ppt_{{ $session->id }}').submit()">Xóa powerpoint</button>
                        {{-- Xóa powerpoint --}}
                        @component('components.form', [
                            'id' => 'del_ppt_'.$session->id,
                            'hide' => 1,
                            'action' => '/manage/ppt/delete',
                            'onsubmit' => 'return confirm(\'Bạn có chắc chắn muốn xóa?\');',
                            'components' => [
                                [
                                    'components.input.basic',
                                    [
                                        'type' => 'text',
                                        'name' => 'id_session',
                                        'value' => $session->id
                                    ]
                                ],
                            ],
                        ])
                        @endcomponent
                    @else
                        <label for="create_ppt_input_{{ $session->id }}" class="btn btn-sm btn-primary" style="margin: 0;">Thêm powerpoint</label>
                    @endif

                    <input type="file" name="ppt" id="create_ppt_input_{{ $session->id }}" style="display: none;" />
                    <script>
                        $('#create_ppt_input_{{ $session->id }}').change(function(e) {
                            $('#create_ppt_input_{{ $session->id }}').hide();
                            var nameUpload = e.target.files[0].name
                            if (e.target.files[0] && confirm(`Bạn có chắc chắn muốn tải lên ${ nameUpload }?`)) {
                                var nameBackup = $('#nameppt').text();
                                let data = new FormData();
                                data.append('ppt', e.target.files[0]);
                                data.append('id_session', {{ $session->id }});
                                data.append('_token', '{{ csrf_token() }}');
                                axios.post('/manage/ppt/upload', data, {
                                    onUploadProgress: progressEvent => {
                                        if (progressEvent.loaded === progressEvent.total) {
                                            $('#nameppt').text(nameUpload + ' - Đang xử lý')
                                        } else {
                                            $('#nameppt').text(nameUpload + ' - Đang tải lên ' + showProcess(progressEvent))
                                        }
                                    },
                                }).then(res => {
                                    if (res.data.status) {
                                        location.reload();
                                    } else {
                                        $('#nameppt').text(nameBackup)
                                    }
                                    $('#create_ppt_input_{{ $session->id }}').show();
                                });
                            }
                        })
                    </script>
                </div>
                @endif
            </div>
        </div>
    </div>
    
    {{-- Chức năng của admin --}}
    @if ($info_user->role === 1)
    <div class="collapse" id="collapse_rename_session_{{ $session->id }}" data-parent="#accordion_info_session  ">
        <div class="card card-body">
            @component('components.form', [
                'id' => 'rename_'.$info_course->id,
                'action' => '/manage/session/rename',
                'submit' => 'Đổi tên',
                'components' => [
                    [
                        'components.input.basic',
                        [
                            'type' => 'text',
                            'name' => 'id_session',
                            'value' => $session->id,
                            'hide' => 1,
                        ]
                    ],
                    [
                        'components.input.basic',
                        [
                            'type' => 'text',
                            'name' => 'name',
                            'label' => 'Tên tiết',
                            'value' => $session->name,
                        ]
                    ],
                ],
            ])
                <button type="button" class="btn btn-danger" data-toggle="collapse" href="#collapse_rename_session_{{ $session->id }}">Hủy</button>
            @endcomponent
            
        </div>
    </div>
    @endif
    @endforeach
</div>
@endif

@if ($info_user->role === 1)
<div class="mt-5">
    <h4>Thêm tiết</h4>
</div>
@component('components.form', [
    'submit' => 'Thêm tiết',
    'action' => '/manage/session/create',
    'components' => [
        [
            'components.input.basic',
            [
                'type' => 'text',
                'name' => 'name',
                'label' => 'Tên tiết',
            ]
        ],
    ],
])
<input name="id_course" value="{{ $info_course->id }}" style="display: none" />
@endcomponent
@endif

{{-- <select id="selecttest" class="selectpicker" multiple data-live-search="true">
    <option>Mustard</option>
    <option>Ketchup</option>
    <option>Relish</option>
</select> --}}
@stop

@section('style')
{{-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" /> --}}
<style>
    .img_course {
        height: 180px;
        object-fit: cover;
    }
</style>
@stop

@section('script')
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
{{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script> --}}
<script>
    function bytesToSize(bytes) {
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes == 0) return '0 Byte';
        var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }
    function showProcess(progressEvent) {
        var percentProcess = ((progressEvent.loaded * 100) / progressEvent.total).toFixed(2);
        return `${ percentProcess }% (${ bytesToSize(progressEvent.loaded) } / ${ bytesToSize(progressEvent.total) })`
    }
    // $('#selecttest').selectpicker();
    // $('#selecttest').change(function() {
    //     console.log($(this).val())
    // })
</script>
@stop