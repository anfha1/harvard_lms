@if(!empty($label))
<label for="textarea_{{ $name }}">{{ $label }}</label>
@endif

<textarea id="textarea_{{ $name }}" name="{{ $name }}">{{ $value }}</textarea>