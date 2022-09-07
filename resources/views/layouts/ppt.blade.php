<!DOCTYPE html>
<!-- Created with iSpring -->
<!-- 1304 794 -->
<!--version 10.3.5.15004 -->
<!--type html -->
<!--mainFolder ./ -->
<html style=background-color:#ced1d3;>
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="msapplication-tap-highlight" content="no" />
  <title>@yield('title', config('app.name', 'Fai'))</title>
  {!! $dataRender['style'] !!}
</head>
<body>
  {!! $dataRender['content'] !!}
  <script>
    (function removeWP() {
      let elm = document.getElementsByClassName('trial_banner')
      if (elm.length > 0) {
        elm = elm[0]
        elm.remove()
      } else {
        setTimeout(removeWP, 100)
      }
    })()
  </script>
</body>
</html>
