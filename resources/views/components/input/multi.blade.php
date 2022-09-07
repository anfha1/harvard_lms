<div class="form-row">
  @foreach($components ?? [] as $component)
    @component($component[0], array_merge($component[1], [
      'multi' => 1
    ]))
    @endcomponent
  @endforeach
</div>