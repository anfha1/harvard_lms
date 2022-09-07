@if(!empty($label))
<label for="input_{{ $type }}_{{ $name }}">{{ $label }}</label>
@endif

<input
  type="{{ $type }}"
  class="form-control @error($name) is-invalid @enderror"
  id="input_{{ $type }}_{{ $name }}"
  placeholder="{{ $placeholder }}"
  name="{{ $name }}"
  value="{{ $value }}"
>