@if(!empty($label))
<label for="input_select_{{ $name }}">{{ $label }}</label>
@endif

<select id="input_select_{{ $name }}" class="custom-select" name="{{ $name }}">
  @foreach ($options as $optionName => $optionValue)
  <option
    value="{{ $optionName }}"
    {{ ($value == $optionName ? 'selected' : '') }}
  >
    {{ $optionValue }}
  </option>
  @endforeach
</select>