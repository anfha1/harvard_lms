<form
  method="{{ $method ?? 'POST' }}"

  @if(isset($file) && $file) enctype="multipart/form-data" @endif
  @if(isset($action)) action="{{ $action }}" @endif

  @if(isset($hide) && $hide) style="display: none;" @endif
  @if(isset($id)) id="{{ $id }}" @endif
  @if(isset($onsubmit)) onsubmit="{{ $onsubmit }}" @endif
>
  @csrf

  @foreach($components ?? [] as $component)
    @component($component[0], $component[1]) @endcomponent
  @endforeach

  {{ $slot }}

  <button
    type="submit"
    class="btn btn-primary"
    {{ empty($submit_name) ? '' : 'name="'.$submit_name.'"' }}
    {{ empty($submit_value) ? '' : 'value="'.$submit_value.'"' }}
  >
    {{ $submit ?? 'Gửi' }}
  </button>
</form>