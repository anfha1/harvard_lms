@if(!empty($label))
<label for="input_file_{{ $type }}_{{ $name }}">{{ $label }}</label>
@endif

<input
  type="file"
  class="form-control @error($name) is-invalid @enderror"
  id="input_file_{{ $type }}_{{ $name }}"
  name="{{ $name }}"
  @if($type != 'file')
  accept="{{ $type }}/*"
  @endif
>