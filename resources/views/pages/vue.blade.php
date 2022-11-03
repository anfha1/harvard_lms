<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Harvard</title>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="https://ricostacruz.com/jquery.transit/jquery.transit.min.js"></script>
    <script type="module" crossorigin src="/assets/index.6cd6420e.js"></script>
    <link rel="stylesheet" href="/assets/index.7d5be196.css">
  </head>
  <body>
    <div id="app"></div>

    <!-- Messenger Plugin chat Code -->
    <div id="fb-root"></div>
    <!-- Your Plugin chat code -->
    <div id="fb-customer-chat" class="fb-customerchat"></div>

    

    <script>
      const animations = {
        initializr() {
          var $this = this;

          //option
          $this.id = "background_css3";
          $this.style = {
            bubbles_color:"#fff",
            stroke_width:0,
            stroke_color :"black"
          };

          $this.bubbles_number = 30;
          $this.speed = [1500, 8000]; //milliseconds
          $this.max_bubbles_height = $this.height;
          $this.shape = false // 1 : circle | 2 : triangle | 3 : rect | false :random

          if ($("#"+$this.id).lenght > 0) {
            $("#"+$this.id).remove();
          }
          $(window).resize($this.setSize)
          $this.setSize();

          $("body").prepend("<style>.shape_background {transform-origin:center; width:80px; height:80px; background: "+$this.style.bubbles_color+"; position: absolute}</style>");

          for (i = 0; i < $this.bubbles_number; i++) {
            $this.generate_bubbles()
          }
        },

        setSize() {
          var $this = this;
          $this.ww = $(window).width();
          $this.wh = $(window).height();
          $this.object = $("#background_css3");
          $this.object.width($this.ww);
          $this.object.height($this.wh);
        },

        generate_bubbles() {
          var $this = this;
          var base = $("<div class='shape_background'></div>");
          var shape_type = $this.shape ? $this.shape : Math.floor($this.rn(1,3));
          if (shape_type == 1) {
            var bolla = base.css({borderRadius: "50%"})
          } else if (shape_type == 2) {
            var bolla = base.css({width:0, height:0, "border-style":"solid","border-width":"0 40px 69.3px 40px","border-color":"transparent transparent "+$this.style.bubbles_color+" transparent", background:"transparent"}); 
          } else {
            var bolla = base; 
          }    
          var rn_size = $this.rn(.8,1.2);
          bolla.css({"transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", top:$this.wh+100, left:$this.rn(-60, $this.ww+60)});        
          bolla.appendTo($this.object);
          bolla.transit({top: $this.rn($this.wh/2,$this.wh/2-60), "transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", opacity: 0},$this.rn($this.speed[0],$this.speed[1]), function(){
            $(this).remove();
            $this.generate_bubbles();
          })
        },
        rn(from, to, arr) {
          if (arr) {
            return Math.random() * (to - from + 1) + from;
          } else {
            return Math.floor(Math.random() * (to - from + 1) + from);
          }
        }
      }

      const findbackground = () => {
        if ($("#background_css3").length > 0) {
          animations.initializr()
        } else {
          setTimeout(findbackground, 300)
        }
      }
      findbackground()
    </script>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "111522164102574");
      chatbox.setAttribute("attribution", "biz_inbox");
      window.fbAsyncInit = function() {
        FB.init({
          xfbml: true,
          version: 'v15.0',
        });
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>
  </body>
</html>
