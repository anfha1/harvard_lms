@php
  $content = [];
  $content_raw = Storage::get('config/frontend.json');
  if ($content_raw) {
    $content = json_decode($content_raw, 1);
  }
  $meta_content = [];
  $meta_content_raw = Storage::get('config/meta.json');
  if ($meta_content_raw) {
    $meta_content = json_decode($meta_content_raw, 1);
  }
@endphp
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Giáo dục Harvard</title>
    {!! $content['head'] ?? '' !!}
    @if (isset($meta_content['meta']) && count($meta_content['meta']) > 0)
      @foreach ($meta_content['meta'] as $meta)
        <meta @foreach ($meta as $key => $value) {{ $key }}="{{ $value }}" @endforeach />
      @endforeach
    @endif
  </head>
  <body>
    <div id="app"></div>
    {!! $content['body'] ?? '' !!}
  </body>
</html>
