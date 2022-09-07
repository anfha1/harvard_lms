<div class="form-group @if(isset($multi) && $multi) col @endif" @if(isset($hide) && $hide) style="display: none;" @endif>
  @switch($type)
    {{-- xử lý select --}}
    @case('select')
      @component('components.core.select', [
        'name' => $name,
        'label' => $label ?? '',
        'options' => $options,
        'value' => old($name) ?? $value ?? '',
      ])
      @endcomponent
      @break

    {{-- Xử lý file --}}
    @case('image')
      @component('components.core.file', [
        'type' => $type,
        'name' => $name,
        'label' => $label ?? '',
      ])
      @endcomponent
      @break
    @case('textarea')
      @component('components.core.textarea', [
        'name' => $name,
        'label' => $label ?? '',
        'value' => old($name) ?? $value ?? '',
      ])
      @endcomponent
      @break

    {{-- xử lý text --}}
    @default
      @component('components.core.text', [
        'type' => $type ?? 'text',
        'name' => $name,
        'label' => $label ?? '',
        'placeholder' => $placeholder ?? $label ?? '',
        'value' => old($name) ?? $value ?? '',
      ])
      @endcomponent
  @endswitch
  @error($name)
    <div class="mt-2">
      <span style="color: red;">{{ $message }}</span>
    </div>
  @enderror
</div>