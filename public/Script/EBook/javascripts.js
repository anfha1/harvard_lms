/* Minification failed. Returning unminified contents.
(434,62-63): run-time error JS1195: Expected expression: >
(434,66-67): run-time error JS1014: Invalid character: `
(434,67-68): run-time error JS1014: Invalid character: #
(434,69-70): run-time error JS1193: Expected ',' or ')': {
(434,78-79): run-time error JS1014: Invalid character: `
(434,79-80): run-time error JS1195: Expected expression: )
(434,104-105): run-time error JS1004: Expected ';': )
(435,21-22): run-time error JS1002: Syntax error: }
(449,65-66): run-time error JS1195: Expected expression: >
(449,69-70): run-time error JS1014: Invalid character: `
(449,70-71): run-time error JS1014: Invalid character: #
(449,72-73): run-time error JS1193: Expected ',' or ')': {
(449,81-82): run-time error JS1014: Invalid character: `
(449,82-83): run-time error JS1195: Expected expression: )
(452,65-66): run-time error JS1195: Expected expression: >
(452,69-70): run-time error JS1014: Invalid character: `
(452,70-71): run-time error JS1014: Invalid character: #
(452,72-73): run-time error JS1193: Expected ',' or ')': {
(452,81-82): run-time error JS1014: Invalid character: `
(452,82-83): run-time error JS1195: Expected expression: )
(454,17-18): run-time error JS1002: Syntax error: }
(458,61-62): run-time error JS1004: Expected ';': {
(460,19-23): run-time error JS1034: Unmatched 'else'; no 'if' defined: else
(462,17-18): run-time error JS1002: Syntax error: }
(464,60-61): run-time error JS1004: Expected ';': {
(468,19-23): run-time error JS1034: Unmatched 'else'; no 'if' defined: else
(470,17-18): run-time error JS1002: Syntax error: }
(472,58-59): run-time error JS1004: Expected ';': {
(476,19-23): run-time error JS1034: Unmatched 'else'; no 'if' defined: else
(478,17-18): run-time error JS1002: Syntax error: }
(506,46-47): run-time error JS1197: Too many errors. The file might not be a JavaScript file: .
 */
/* turn.js 4.1.0 | Copyright (c) 2012 Emmanuel Garcia | turnjs.com | turnjs.com/license.txt */

(function(f){function J(a,b,c){if(!c[0]||"object"==typeof c[0])return b.init.apply(a,c);if(b[c[0]])return b[c[0]].apply(a,Array.prototype.slice.call(c,1));throw q(c[0]+" is not a method or property");}function l(a,b,c,d){return{css:{position:"absolute",top:a,left:b,overflow:d||"hidden",zIndex:c||"auto"}}}function S(a,b,c,d,e){var h=1-e,f=h*h*h,g=e*e*e;return j(Math.round(f*a.x+3*e*h*h*b.x+3*e*e*h*c.x+g*d.x),Math.round(f*a.y+3*e*h*h*b.y+3*e*e*h*c.y+g*d.y))}function j(a,b){return{x:a,y:b}}function F(a,
b,c){return z&&c?" translate3d("+a+"px,"+b+"px, 0px) ":" translate("+a+"px, "+b+"px) "}function G(a){return" rotate("+a+"deg) "}function n(a,b){return Object.prototype.hasOwnProperty.call(b,a)}function T(){for(var a=["Moz","Webkit","Khtml","O","ms"],b=a.length,c="";b--;)a[b]+"Transform"in document.body.style&&(c="-"+a[b].toLowerCase()+"-");return c}function P(a,b,c,d,e){var h,f=[];if("-webkit-"==w){for(h=0;h<e;h++)f.push("color-stop("+d[h][0]+", "+d[h][1]+")");a.css({"background-image":"-webkit-gradient(linear, "+
b.x+"% "+b.y+"%,"+c.x+"% "+c.y+"%, "+f.join(",")+" )"})}else{var b={x:b.x/100*a.width(),y:b.y/100*a.height()},c={x:c.x/100*a.width(),y:c.y/100*a.height()},g=c.x-b.x;h=c.y-b.y;var i=Math.atan2(h,g),x=i-Math.PI/2,x=Math.abs(a.width()*Math.sin(x))+Math.abs(a.height()*Math.cos(x)),g=Math.sqrt(h*h+g*g),c=j(c.x<b.x?a.width():0,c.y<b.y?a.height():0),k=Math.tan(i);h=-1/k;k=(h*c.x-c.y-k*b.x+b.y)/(h-k);c=h*k-h*c.x+c.y;b=Math.sqrt(Math.pow(k-b.x,2)+Math.pow(c-b.y,2));for(h=0;h<e;h++)f.push(" "+d[h][1]+" "+100*
(b+g*d[h][0])/x+"%");a.css({"background-image":w+"linear-gradient("+-i+"rad,"+f.join(",")+")"})}}function t(a,b,c){a=f.Event(a);b.trigger(a,c);return a.isDefaultPrevented()?"prevented":a.isPropagationStopped()?"stopped":""}function q(a){function b(a){this.name="TurnJsError";this.message=a}b.prototype=Error();b.prototype.constructor=b;return new b(a)}function D(a){var b={top:0,left:0};do b.left+=a.offsetLeft,b.top+=a.offsetTop;while(a=a.offsetParent);return b}var z,U,w="",K=Math.PI,L=K/2,u="ontouchstart"in
window,r=u?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchend"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},p={backward:["bl","tl"],forward:["br","tr"],all:"tl bl tr br l r".split(" ")},V=["single","double"],W=["ltr","rtl"],X={acceleration:!0,display:"double",duration:600,page:1,gradients:!0,turnCorners:"bl,br",when:null},Y={cornerSize:100},g={init:function(a){z="WebKitCSSMatrix"in window||"MozPerspective"in document.body.style;var b;
U=(b=/AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent))?534.3<parseFloat(b[1]):!0;w=T();var c;b=0;var d=this.data(),e=this.children(),a=f.extend({width:this.width(),height:this.height(),direction:this.attr("dir")||this.css("direction")||"ltr"},X,a);d.opts=a;d.pageObjs={};d.pages={};d.pageWrap={};d.pageZoom={};d.pagePlace={};d.pageMv=[];d.zoom=1;d.totalPages=a.pages||0;d.eventHandlers={touchStart:f.proxy(g._touchStart,this),touchMove:f.proxy(g._touchMove,this),touchEnd:f.proxy(g._touchEnd,this),
start:f.proxy(g._eventStart,this)};if(a.when)for(c in a.when)n(c,a.when)&&this.bind(c,a.when[c]);this.css({position:"relative",width:a.width,height:a.height});this.turn("display",a.display);""!==a.direction&&this.turn("direction",a.direction);z&&(!u&&a.acceleration)&&this.transform(F(0,0,!0));for(c=0;c<e.length;c++)"1"!=f(e[c]).attr("ignore")&&this.turn("addPage",e[c],++b);f(this).bind(r.down,d.eventHandlers.touchStart).bind("end",g._eventEnd).bind("pressed",g._eventPressed).bind("released",g._eventReleased).bind("flip",
g._flip);f(this).parent().bind("start",d.eventHandlers.start);f(document).bind(r.move,d.eventHandlers.touchMove).bind(r.up,d.eventHandlers.touchEnd);this.turn("page",a.page);d.done=!0;return this},addPage:function(a,b){var c,d=!1,e=this.data(),h=e.totalPages+1;if(e.destroying)return!1;if(c=/\bp([0-9]+)\b/.exec(f(a).attr("class")))b=parseInt(c[1],10);if(b)if(b==h)d=!0;else{if(b>h)throw q('Page "'+b+'" cannot be inserted');}else b=h,d=!0;1<=b&&b<=h&&(c="double"==e.display?b%2?" odd":" even":"",e.done&&
this.turn("stop"),b in e.pageObjs&&g._movePages.call(this,b,1),d&&(e.totalPages=h),e.pageObjs[b]=f(a).css({"float":"left"}).addClass("page p"+b+c),-1!=navigator.userAgent.indexOf("MSIE 9.0")&&e.pageObjs[b].hasClass("hard")&&e.pageObjs[b].removeClass("hard"),g._addPage.call(this,b),g._removeFromDOM.call(this));return this},_addPage:function(a){var b=this.data(),c=b.pageObjs[a];if(c)if(g._necessPage.call(this,a)){if(!b.pageWrap[a]){b.pageWrap[a]=f("<div/>",{"class":"page-wrapper",page:a,css:{position:"absolute",
overflow:"hidden"}});this.append(b.pageWrap[a]);b.pagePlace[a]||(b.pagePlace[a]=a,b.pageObjs[a].appendTo(b.pageWrap[a]));var d=g._pageSize.call(this,a,!0);c.css({width:d.width,height:d.height});b.pageWrap[a].css(d)}b.pagePlace[a]==a&&g._makeFlip.call(this,a)}else b.pagePlace[a]=0,b.pageObjs[a]&&b.pageObjs[a].remove()},hasPage:function(a){return n(a,this.data().pageObjs)},center:function(a){var b=this.data(),c=f(this).turn("size"),d=0;b.noCenter||("double"==b.display&&(a=this.turn("view",a||b.tpage||
b.page),"ltr"==b.direction?a[0]?a[1]||(d+=c.width/4):d-=c.width/4:a[0]?a[1]||(d-=c.width/4):d+=c.width/4),f(this).css({marginLeft:d}));return this},destroy:function(){var a=this,b=this.data(),c="end first flip last pressed released start turning turned zooming missing".split(" ");if("prevented"!=t("destroying",this)){b.destroying=!0;f.each(c,function(b,c){a.unbind(c)});this.parent().unbind("start",b.eventHandlers.start);for(f(document).unbind(r.move,b.eventHandlers.touchMove).unbind(r.up,b.eventHandlers.touchEnd);0!==
b.totalPages;)this.turn("removePage",b.totalPages);b.fparent&&b.fparent.remove();b.shadow&&b.shadow.remove();this.removeData();b=null;return this}},is:function(){return"object"==typeof this.data().pages},zoom:function(a){var b=this.data();if("number"==typeof a){if(0.0010>a||100<a)throw q(a+" is not a value for zoom");if("prevented"==t("zooming",this,[a,b.zoom]))return this;var c=this.turn("size"),d=this.turn("view"),e=1/b.zoom,h=Math.round(c.width*e*a),c=Math.round(c.height*e*a);b.zoom=a;f(this).turn("stop").turn("size",
h,c);b.opts.autoCenter&&this.turn("center");g._updateShadow.call(this);for(a=0;a<d.length;a++)d[a]&&b.pageZoom[d[a]]!=b.zoom&&(this.trigger("zoomed",[d[a],d,b.pageZoom[d[a]],b.zoom]),b.pageZoom[d[a]]=b.zoom);return this}return b.zoom},_pageSize:function(a,b){var c=this.data(),d={};if("single"==c.display)d.width=this.width(),d.height=this.height(),b&&(d.top=0,d.left=0,d.right="auto");else{var e=this.width()/2,h=this.height();c.pageObjs[a].hasClass("own-size")?(d.width=c.pageObjs[a].width(),d.height=
c.pageObjs[a].height()):(d.width=e,d.height=h);if(b){var f=a%2;d.top=(h-d.height)/2;"ltr"==c.direction?(d[f?"right":"left"]=e-d.width,d[f?"left":"right"]="auto"):(d[f?"left":"right"]=e-d.width,d[f?"right":"left"]="auto")}}return d},_makeFlip:function(a){var b=this.data();if(!b.pages[a]&&b.pagePlace[a]==a){var c="single"==b.display,d=a%2;b.pages[a]=b.pageObjs[a].css(g._pageSize.call(this,a)).flip({page:a,next:d||c?a+1:a-1,turn:this}).flip("disable",b.disabled);g._setPageLoc.call(this,a);b.pageZoom[a]=
b.zoom}return b.pages[a]},_makeRange:function(){var a,b;if(!(1>this.data().totalPages)){b=this.turn("range");for(a=b[0];a<=b[1];a++)g._addPage.call(this,a)}},range:function(a){var b,c,d,e=this.data(),a=a||e.tpage||e.page||1;d=g._view.call(this,a);if(1>a||a>e.totalPages)throw q('"'+a+'" is not a valid page');d[1]=d[1]||d[0];1<=d[0]&&d[1]<=e.totalPages?(a=Math.floor(2),e.totalPages-d[1]>d[0]?(b=Math.min(d[0]-1,a),c=2*a-b):(c=Math.min(e.totalPages-d[1],a),b=2*a-c)):c=b=5;return[Math.max(1,d[0]-b),Math.min(e.totalPages,
d[1]+c)]},_necessPage:function(a){if(0===a)return!0;var b=this.turn("range");return this.data().pageObjs[a].hasClass("fixed")||a>=b[0]&&a<=b[1]},_removeFromDOM:function(){var a,b=this.data();for(a in b.pageWrap)n(a,b.pageWrap)&&!g._necessPage.call(this,a)&&g._removePageFromDOM.call(this,a)},_removePageFromDOM:function(a){var b=this.data();if(b.pages[a]){var c=b.pages[a].data();i._moveFoldingPage.call(b.pages[a],!1);c.f&&c.f.fwrapper&&c.f.fwrapper.remove();b.pages[a].removeData();b.pages[a].remove();
delete b.pages[a]}b.pageObjs[a]&&b.pageObjs[a].remove();b.pageWrap[a]&&(b.pageWrap[a].remove(),delete b.pageWrap[a]);g._removeMv.call(this,a);delete b.pagePlace[a];delete b.pageZoom[a]},removePage:function(a){var b=this.data();if("*"==a)for(;0!==b.totalPages;)this.turn("removePage",b.totalPages);else{if(1>a||a>b.totalPages)throw q("The page "+a+" doesn't exist");b.pageObjs[a]&&(this.turn("stop"),g._removePageFromDOM.call(this,a),delete b.pageObjs[a]);g._movePages.call(this,a,-1);b.totalPages-=1;b.page>
b.totalPages?(b.page=null,g._fitPage.call(this,b.totalPages)):(g._makeRange.call(this),this.turn("update"))}return this},_movePages:function(a,b){var c,d=this,e=this.data(),h="single"==e.display,f=function(a){var c=a+b,f=c%2,i=f?" odd ":" even ";e.pageObjs[a]&&(e.pageObjs[c]=e.pageObjs[a].removeClass("p"+a+" odd even").addClass("p"+c+i));e.pagePlace[a]&&e.pageWrap[a]&&(e.pagePlace[c]=c,e.pageWrap[c]=e.pageObjs[c].hasClass("fixed")?e.pageWrap[a].attr("page",c):e.pageWrap[a].css(g._pageSize.call(d,
c,!0)).attr("page",c),e.pages[a]&&(e.pages[c]=e.pages[a].flip("options",{page:c,next:h||f?c+1:c-1})),b&&(delete e.pages[a],delete e.pagePlace[a],delete e.pageZoom[a],delete e.pageObjs[a],delete e.pageWrap[a]))};if(0<b)for(c=e.totalPages;c>=a;c--)f(c);else for(c=a;c<=e.totalPages;c++)f(c)},display:function(a){var b=this.data(),c=b.display;if(void 0===a)return c;if(-1==f.inArray(a,V))throw q('"'+a+'" is not a value for display');switch(a){case "single":b.pageObjs[0]||(this.turn("stop").css({overflow:"hidden"}),
b.pageObjs[0]=f("<div />",{"class":"page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this));this.addClass("shadow");break;case "double":b.pageObjs[0]&&(this.turn("stop").css({overflow:""}),b.pageObjs[0].remove(),delete b.pageObjs[0]),this.removeClass("shadow")}b.display=a;c&&(a=this.turn("size"),g._movePages.call(this,1,0),this.turn("size",a.width,a.height).turn("update"));return this},direction:function(a){var b=this.data();if(void 0===a)return b.direction;a=a.toLowerCase();
if(-1==f.inArray(a,W))throw q('"'+a+'" is not a value for direction');"rtl"==a&&f(this).attr("dir","ltr").css({direction:"ltr"});b.direction=a;b.done&&this.turn("size",f(this).width(),f(this).height());return this},animating:function(){return 0<this.data().pageMv.length},corner:function(){var a,b,c=this.data();for(b in c.pages)if(n(b,c.pages)&&(a=c.pages[b].flip("corner")))return a;return!1},data:function(){return this.data()},disable:function(a){var b,c=this.data(),d=this.turn("view");c.disabled=
void 0===a||!0===a;for(b in c.pages)n(b,c.pages)&&c.pages[b].flip("disable",c.disabled?!0:-1==f.inArray(parseInt(b,10),d));return this},disabled:function(a){return void 0===a?!0===this.data().disabled:this.turn("disable",a)},size:function(a,b){if(void 0===a||void 0===b)return{width:this.width(),height:this.height()};this.turn("stop");var c,d,e=this.data();d="double"==e.display?a/2:a;this.css({width:a,height:b});e.pageObjs[0]&&e.pageObjs[0].css({width:d,height:b});for(c in e.pageWrap)n(c,e.pageWrap)&&
(d=g._pageSize.call(this,c,!0),e.pageObjs[c].css({width:d.width,height:d.height}),e.pageWrap[c].css(d),e.pages[c]&&e.pages[c].css({width:d.width,height:d.height}));this.turn("resize");return this},resize:function(){var a,b=this.data();b.pages[0]&&(b.pageWrap[0].css({left:-this.width()}),b.pages[0].flip("resize",!0));for(a=1;a<=b.totalPages;a++)b.pages[a]&&b.pages[a].flip("resize",!0);g._updateShadow.call(this);b.opts.autoCenter&&this.turn("center")},_removeMv:function(a){var b,c=this.data();for(b=
0;b<c.pageMv.length;b++)if(c.pageMv[b]==a)return c.pageMv.splice(b,1),!0;return!1},_addMv:function(a){var b=this.data();g._removeMv.call(this,a);b.pageMv.push(a)},_view:function(a){var b=this.data(),a=a||b.page;return"double"==b.display?a%2?[a-1,a]:[a,a+1]:[a]},view:function(a){var b=this.data(),a=g._view.call(this,a);return"double"==b.display?[0<a[0]?a[0]:0,a[1]<=b.totalPages?a[1]:0]:[0<a[0]&&a[0]<=b.totalPages?a[0]:0]},stop:function(a,b){if(this.turn("animating")){var c,d,e,h=this.data();h.tpage&&
(h.page=h.tpage,delete h.tpage);for(c=0;c<h.pageMv.length;c++)h.pageMv[c]&&h.pageMv[c]!==a&&(e=h.pages[h.pageMv[c]],d=e.data().f.opts,e.flip("hideFoldedPage",b),b||i._moveFoldingPage.call(e,!1),d.force&&(d.next=0===d.page%2?d.page-1:d.page+1,delete d.force))}this.turn("update");return this},pages:function(a){var b=this.data();if(a){if(a<b.totalPages)for(var c=b.totalPages;c>a;c--)this.turn("removePage",c);b.totalPages=a;g._fitPage.call(this,b.page);return this}return b.totalPages},_missing:function(a){var b=
this.data();if(!(1>b.totalPages)){for(var c=this.turn("range",a),d=[],a=c[0];a<=c[1];a++)b.pageObjs[a]||d.push(a);0<d.length&&this.trigger("missing",[d])}},_fitPage:function(a){var b=this.data(),c=this.turn("view",a);g._missing.call(this,a);if(b.pageObjs[a]){b.page=a;this.turn("stop");for(var d=0;d<c.length;d++)c[d]&&b.pageZoom[c[d]]!=b.zoom&&(this.trigger("zoomed",[c[d],c,b.pageZoom[c[d]],b.zoom]),b.pageZoom[c[d]]=b.zoom);g._removeFromDOM.call(this);g._makeRange.call(this);g._updateShadow.call(this);
this.trigger("turned",[a,c]);this.turn("update");b.opts.autoCenter&&this.turn("center")}},_turnPage:function(a){var b,c,d=this.data(),e=d.pagePlace[a],h=this.turn("view"),i=this.turn("view",a);if(d.page!=a){var j=d.page;if("prevented"==t("turning",this,[a,i])){j==d.page&&-1!=f.inArray(e,d.pageMv)&&d.pages[e].flip("hideFoldedPage",!0);return}-1!=f.inArray(1,i)&&this.trigger("first");-1!=f.inArray(d.totalPages,i)&&this.trigger("last")}"single"==d.display?(b=h[0],c=i[0]):h[1]&&a>h[1]?(b=h[1],c=i[0]):
h[0]&&a<h[0]&&(b=h[0],c=i[1]);e=d.opts.turnCorners.split(",");h=d.pages[b].data().f;i=h.opts;j=h.point;g._missing.call(this,a);d.pageObjs[a]&&(this.turn("stop"),d.page=a,g._makeRange.call(this),d.tpage=c,i.next!=c&&(i.next=c,i.force=!0),this.turn("update"),h.point=j,"hard"==h.effect?"ltr"==d.direction?d.pages[b].flip("turnPage",a>b?"r":"l"):d.pages[b].flip("turnPage",a>b?"l":"r"):"ltr"==d.direction?d.pages[b].flip("turnPage",e[a>b?1:0]):d.pages[b].flip("turnPage",e[a>b?0:1]))},page:function(a){var b=
this.data();if(void 0===a)return b.page;if(!b.disabled&&!b.destroying){a=parseInt(a,10);if(0<a&&a<=b.totalPages)return a!=b.page&&(!b.done||-1!=f.inArray(a,this.turn("view"))?g._fitPage.call(this,a):g._turnPage.call(this,a)),this;throw q("The page "+a+" does not exist");}},next:function(){return this.turn("page",Math.min(this.data().totalPages,g._view.call(this,this.data().page).pop()+1))},previous:function(){return this.turn("page",Math.max(1,g._view.call(this,this.data().page).shift()-1))},peel:function(a,
b){var c=this.data(),d=this.turn("view"),b=void 0===b?!0:!0===b;!1===a?this.turn("stop",null,b):"single"==c.display?c.pages[c.page].flip("peel",a,b):(d="ltr"==c.direction?-1!=a.indexOf("l")?d[0]:d[1]:-1!=a.indexOf("l")?d[1]:d[0],c.pages[d]&&c.pages[d].flip("peel",a,b));return this},_addMotionPage:function(){var a=f(this).data().f.opts,b=a.turn;b.data();g._addMv.call(b,a.page)},_eventStart:function(a,b,c){var d=b.turn.data(),e=d.pageZoom[b.page];a.isDefaultPrevented()||(e&&e!=d.zoom&&(b.turn.trigger("zoomed",
[b.page,b.turn.turn("view",b.page),e,d.zoom]),d.pageZoom[b.page]=d.zoom),"single"==d.display&&c&&("l"==c.charAt(1)&&"ltr"==d.direction||"r"==c.charAt(1)&&"rtl"==d.direction?(b.next=b.next<b.page?b.next:b.page-1,b.force=!0):b.next=b.next>b.page?b.next:b.page+1),g._addMotionPage.call(a.target));g._updateShadow.call(b.turn)},_eventEnd:function(a,b,c){f(a.target).data();var a=b.turn,d=a.data();if(c){if(c=d.tpage||d.page,c==b.next||c==b.page)delete d.tpage,g._fitPage.call(a,c||b.next,!0)}else g._removeMv.call(a,
b.page),g._updateShadow.call(a),a.turn("update")},_eventPressed:function(a){var a=f(a.target).data().f,b=a.opts.turn;b.data().mouseAction=!0;b.turn("update");return a.time=(new Date).getTime()},_eventReleased:function(a,b){var c;c=f(a.target);var d=c.data().f,e=d.opts.turn,h=e.data();c="single"==h.display?"br"==b.corner||"tr"==b.corner?b.x<c.width()/2:b.x>c.width()/2:0>b.x||b.x>c.width();if(200>(new Date).getTime()-d.time||c)a.preventDefault(),g._turnPage.call(e,d.opts.next);h.mouseAction=!1},_flip:function(a){a.stopPropagation();
a=f(a.target).data().f.opts;a.turn.trigger("turn",[a.next]);a.turn.data().opts.autoCenter&&a.turn.turn("center",a.next)},_touchStart:function(){var a=this.data(),b;for(b in a.pages)if(n(b,a.pages)&&!1===i._eventStart.apply(a.pages[b],arguments))return!1},_touchMove:function(){var a=this.data(),b;for(b in a.pages)n(b,a.pages)&&i._eventMove.apply(a.pages[b],arguments)},_touchEnd:function(){var a=this.data(),b;for(b in a.pages)n(b,a.pages)&&i._eventEnd.apply(a.pages[b],arguments)},calculateZ:function(a){var b,
c,d,e,h=this,f=this.data();b=this.turn("view");var i=b[0]||b[1],g=a.length-1,j={pageZ:{},partZ:{},pageV:{}},k=function(a){a=h.turn("view",a);a[0]&&(j.pageV[a[0]]=!0);a[1]&&(j.pageV[a[1]]=!0)};for(b=0;b<=g;b++)c=a[b],d=f.pages[c].data().f.opts.next,e=f.pagePlace[c],k(c),k(d),c=f.pagePlace[d]==d?d:c,j.pageZ[c]=f.totalPages-Math.abs(i-c),j.partZ[e]=2*f.totalPages-g+b;return j},update:function(){var a,b=this.data();if(this.turn("animating")&&0!==b.pageMv[0]){var c,d=this.turn("calculateZ",b.pageMv),e=
this.turn("corner"),h=this.turn("view"),i=this.turn("view",b.tpage);for(a in b.pageWrap)if(n(a,b.pageWrap)&&(c=b.pageObjs[a].hasClass("fixed"),b.pageWrap[a].css({display:d.pageV[a]||c?"":"none",zIndex:(b.pageObjs[a].hasClass("hard")?d.partZ[a]:d.pageZ[a])||(c?-1:0)}),c=b.pages[a]))c.flip("z",d.partZ[a]||null),d.pageV[a]&&c.flip("resize"),b.tpage?c.flip("hover",!1).flip("disable",-1==f.inArray(parseInt(a,10),b.pageMv)&&a!=i[0]&&a!=i[1]):c.flip("hover",!1===e).flip("disable",a!=h[0]&&a!=h[1])}else for(a in b.pageWrap)n(a,
b.pageWrap)&&(d=g._setPageLoc.call(this,a),b.pages[a]&&b.pages[a].flip("disable",b.disabled||1!=d).flip("hover",!0).flip("z",null));return this},_updateShadow:function(){var a,b,c=this.data(),d=this.width(),e=this.height(),h="single"==c.display?d:d/2;a=this.turn("view");c.shadow||(c.shadow=f("<div />",{"class":"shadow",css:l(0,0,0).css}).appendTo(this));for(var i=0;i<c.pageMv.length&&a[0]&&a[1];i++)a=this.turn("view",c.pages[c.pageMv[i]].data().f.opts.next),b=this.turn("view",c.pageMv[i]),a[0]=a[0]&&
b[0],a[1]=a[1]&&b[1];switch(a[0]?a[1]?3:"ltr"==c.direction?2:1:"ltr"==c.direction?1:2){case 1:c.shadow.css({width:h,height:e,top:0,left:h});break;case 2:c.shadow.css({width:h,height:e,top:0,left:0});break;case 3:c.shadow.css({width:d,height:e,top:0,left:0})}},_setPageLoc:function(a){var b=this.data(),c=this.turn("view"),d=0;if(a==c[0]||a==c[1])d=1;else if("single"==b.display&&a==c[0]+1||"double"==b.display&&a==c[0]-2||a==c[1]+2)d=2;if(!this.turn("animating"))switch(d){case 1:b.pageWrap[a].css({zIndex:b.totalPages,
display:""});break;case 2:b.pageWrap[a].css({zIndex:b.totalPages-1,display:""});break;case 0:b.pageWrap[a].css({zIndex:0,display:b.pageObjs[a].hasClass("fixed")?"":"none"})}return d},options:function(a){if(void 0===a)return this.data().opts;var b=this.data();f.extend(b.opts,a);a.pages&&this.turn("pages",a.pages);a.page&&this.turn("page",a.page);a.display&&this.turn("display",a.display);a.direction&&this.turn("direction",a.direction);a.width&&a.height&&this.turn("size",a.width,a.height);if(a.when)for(var c in a.when)n(c,
a.when)&&this.unbind(c).bind(c,a.when[c]);return this},version:function(){return"4.1.0"}},i={init:function(a){this.data({f:{disabled:!1,hover:!1,effect:this.hasClass("hard")?"hard":"sheet"}});this.flip("options",a);i._addPageWrapper.call(this);return this},setData:function(a){var b=this.data();b.f=f.extend(b.f,a);return this},options:function(a){var b=this.data().f;return a?(i.setData.call(this,{opts:f.extend({},b.opts||Y,a)}),this):b.opts},z:function(a){var b=this.data().f;b.opts["z-index"]=a;b.fwrapper&&
b.fwrapper.css({zIndex:a||parseInt(b.parent.css("z-index"),10)||0});return this},_cAllowed:function(){var a=this.data().f,b=a.opts.page,c=a.opts.turn.data(),d=b%2;return"hard"==a.effect?"ltr"==c.direction?[d?"r":"l"]:[d?"l":"r"]:"single"==c.display?1==b?"ltr"==c.direction?p.forward:p.backward:b==c.totalPages?"ltr"==c.direction?p.backward:p.forward:p.all:"ltr"==c.direction?p[d?"forward":"backward"]:p[d?"backward":"forward"]},_cornerActivated:function(a){var b=this.data().f,c=this.width(),d=this.height(),
a={x:a.x,y:a.y,corner:""},e=b.opts.cornerSize;if(0>=a.x||0>=a.y||a.x>=c||a.y>=d)return!1;var h=i._cAllowed.call(this);switch(b.effect){case "hard":if(a.x>c-e)a.corner="r";else if(a.x<e)a.corner="l";else return!1;break;case "sheet":if(a.y<e)a.corner+="t";else if(a.y>=d-e)a.corner+="b";else return!1;if(a.x<=e)a.corner+="l";else if(a.x>=c-e)a.corner+="r";else return!1}return!a.corner||-1==f.inArray(a.corner,h)?!1:a},_isIArea:function(a){var b=this.data().f.parent.offset(),a=u&&a.originalEvent?a.originalEvent.touches[0]:
a;return i._cornerActivated.call(this,{x:a.pageX-b.left,y:a.pageY-b.top})},_c:function(a,b){b=b||0;switch(a){case "tl":return j(b,b);case "tr":return j(this.width()-b,b);case "bl":return j(b,this.height()-b);case "br":return j(this.width()-b,this.height()-b);case "l":return j(b,0);case "r":return j(this.width()-b,0)}},_c2:function(a){switch(a){case "tl":return j(2*this.width(),0);case "tr":return j(-this.width(),0);case "bl":return j(2*this.width(),this.height());case "br":return j(-this.width(),
this.height());case "l":return j(2*this.width(),0);case "r":return j(-this.width(),0)}},_foldingPage:function(){var a=this.data().f;if(a){var b=a.opts;if(b.turn)return a=b.turn.data(),"single"==a.display?1<b.next||1<b.page?a.pageObjs[0]:null:a.pageObjs[b.next]}},_backGradient:function(){var a=this.data().f,b=a.opts.turn.data();if((b=b.opts.gradients&&("single"==b.display||2!=a.opts.page&&a.opts.page!=b.totalPages-1))&&!a.bshadow)a.bshadow=f("<div/>",l(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(a.parent);
return b},type:function(){return this.data().f.effect},resize:function(a){var b=this.data().f,c=b.opts.turn.data(),d=this.width(),e=this.height();switch(b.effect){case "hard":a&&(b.wrapper.css({width:d,height:e}),b.fpage.css({width:d,height:e}),c.opts.gradients&&(b.ashadow.css({width:d,height:e}),b.bshadow.css({width:d,height:e})));break;case "sheet":a&&(a=Math.round(Math.sqrt(Math.pow(d,2)+Math.pow(e,2))),b.wrapper.css({width:a,height:a}),b.fwrapper.css({width:a,height:a}).children(":first-child").css({width:d,
height:e}),b.fpage.css({width:d,height:e}),c.opts.gradients&&b.ashadow.css({width:d,height:e}),i._backGradient.call(this)&&b.bshadow.css({width:d,height:e})),b.parent.is(":visible")&&(c=D(b.parent[0]),b.fwrapper.css({top:c.top,left:c.left}),c=D(b.opts.turn[0]),b.fparent.css({top:-c.top,left:-c.left})),this.flip("z",b.opts["z-index"])}},_addPageWrapper:function(){var a=this.data().f,b=a.opts.turn.data(),c=this.parent();a.parent=c;if(!a.wrapper)switch(a.effect){case "hard":var d={};d[w+"transform-style"]=
"preserve-3d";d[w+"backface-visibility"]="hidden";a.wrapper=f("<div/>",l(0,0,2)).css(d).appendTo(c).prepend(this);a.fpage=f("<div/>",l(0,0,1)).css(d).appendTo(c);b.opts.gradients&&(a.ashadow=f("<div/>",l(0,0,0)).hide().appendTo(c),a.bshadow=f("<div/>",l(0,0,0)));break;case "sheet":var d=this.width(),e=this.height();Math.round(Math.sqrt(Math.pow(d,2)+Math.pow(e,2)));a.fparent=a.opts.turn.data().fparent;a.fparent||(d=f("<div/>",{css:{"pointer-events":"none"}}).hide(),d.data().flips=0,d.css(l(0,0,"auto",
"visible").css).appendTo(a.opts.turn),a.opts.turn.data().fparent=d,a.fparent=d);this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"});a.wrapper=f("<div/>",l(0,0,this.css("z-index"))).appendTo(c).prepend(this);a.fwrapper=f("<div/>",l(c.offset().top,c.offset().left)).hide().appendTo(a.fparent);a.fpage=f("<div/>",l(0,0,0,"visible")).css({cursor:"default"}).appendTo(a.fwrapper);b.opts.gradients&&(a.ashadow=f("<div/>",l(0,0,1)).appendTo(a.fpage));i.setData.call(this,a)}i.resize.call(this,
!0)},_fold:function(a){var b=this.data().f,c=b.opts.turn.data(),d=i._c.call(this,a.corner),e=this.width(),h=this.height();switch(b.effect){case "hard":a.x="l"==a.corner?Math.min(Math.max(a.x,0),2*e):Math.max(Math.min(a.x,e),-e);var f,g,s,x,k,n=c.totalPages,l=b.opts["z-index"]||n,q={overflow:"visible"},p=d.x?(d.x-a.x)/e:a.x/e,r=90*p,t=90>r;switch(a.corner){case "l":x="0% 50%";k="100% 50%";t?(f=0,g=0<b.opts.next-1,s=1):(f="100%",g=b.opts.page+1<n,s=0);break;case "r":x="100% 50%",k="0% 50%",r=-r,e=-e,
t?(f=0,g=b.opts.next+1<n,s=0):(f="-100%",g=1!=b.opts.page,s=1)}q[w+"perspective-origin"]=k;b.wrapper.transform("rotateY("+r+"deg)translate3d(0px, 0px, "+(this.attr("depth")||0)+"px)",k);b.fpage.transform("translateX("+e+"px) rotateY("+(180+r)+"deg)",x);b.parent.css(q);t?(p=-p+1,b.wrapper.css({zIndex:l+1}),b.fpage.css({zIndex:l})):(p-=1,b.wrapper.css({zIndex:l}),b.fpage.css({zIndex:l+1}));c.opts.gradients&&(g?b.ashadow.css({display:"",left:f,backgroundColor:"rgba(0,0,0,"+0.5*p+")"}).transform("rotateY(0deg)"):
b.ashadow.hide(),b.bshadow.css({opacity:-p+1}),t?b.bshadow.parent()[0]!=b.wrapper[0]&&b.bshadow.appendTo(b.wrapper):b.bshadow.parent()[0]!=b.fpage[0]&&b.bshadow.appendTo(b.fpage),P(b.bshadow,j(100*s,0),j(100*(-s+1),0),[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]],2));break;case "sheet":var u=this,H=0,z,A,B,M,y,N,D,v=j(0,0),Q=j(0,0),m=j(0,0),J=i._foldingPage.call(this);Math.tan(0);var O=c.opts.acceleration,R=b.wrapper.height(),E="t"==a.corner.substr(0,1),C="l"==a.corner.substr(1,1),I=function(){var b=
j(0,0),f=j(0,0);b.x=d.x?d.x-a.x:a.x;b.y=U?d.y?d.y-a.y:a.y:0;f.x=C?e-b.x/2:a.x+b.x/2;f.y=b.y/2;var g=L-Math.atan2(b.y,b.x),k=g-Math.atan2(f.y,f.x),k=Math.max(0,Math.sin(k)*Math.sqrt(Math.pow(f.x,2)+Math.pow(f.y,2)));H=180*(g/K);m=j(k*Math.sin(g),k*Math.cos(g));if(g>L&&(m.x+=Math.abs(m.y*b.y/b.x),m.y=0,Math.round(m.x*Math.tan(K-g))<h))return a.y=Math.sqrt(Math.pow(h,2)+2*f.x*b.x),E&&(a.y=h-a.y),I();g>L&&(b=K-g,f=R-h/Math.sin(b),v=j(Math.round(f*Math.cos(b)),Math.round(f*Math.sin(b))),C&&(v.x=-v.x),
E&&(v.y=-v.y));z=Math.round(m.y/Math.tan(g)+m.x);b=e-z;f=b*Math.cos(2*g);k=b*Math.sin(2*g);Q=j(Math.round(C?b-f:z+f),Math.round(E?k:h-k));c.opts.gradients&&(y=b*Math.sin(g),b=i._c2.call(u,a.corner),b=Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2))/e,D=Math.sin(L*(1<b?2-b:b)),N=Math.min(b,1),M=100<y?(y-100)/y:0,A=j(100*(y*Math.sin(g)/e),100*(y*Math.cos(g)/h)),i._backGradient.call(u)&&(B=j(100*(1.2*y*Math.sin(g)/e),100*(1.2*y*Math.cos(g)/h)),C||(B.x=100-B.x),E||(B.y=100-B.y)));m.x=Math.round(m.x);
m.y=Math.round(m.y);return!0};f=function(a,d,f,g){var k=["0","auto"],m=(e-R)*f[0]/100,l=(h-R)*f[1]/100,d={left:k[d[0]],top:k[d[1]],right:k[d[2]],bottom:k[d[3]]},k={},n=90!=g&&-90!=g?C?-1:1:0,s=f[0]+"% "+f[1]+"%";u.css(d).transform(G(g)+F(a.x+n,a.y,O),s);b.fpage.css(d).transform(G(g)+F(a.x+Q.x-v.x-e*f[0]/100,a.y+Q.y-v.y-h*f[1]/100,O)+G((180/g-2)*g),s);b.wrapper.transform(F(-a.x+m-n,-a.y+l,O)+G(-g),s);b.fwrapper.transform(F(-a.x+v.x+m,-a.y+v.y+l,O)+G(-g),s);c.opts.gradients&&(f[0]&&(A.x=100-A.x),f[1]&&
(A.y=100-A.y),k["box-shadow"]="0 0 20px rgba(0,0,0,"+0.5*D+")",J.css(k),P(b.ashadow,j(C?100:0,E?0:100),j(A.x,A.y),[[M,"rgba(0,0,0,0)"],[0.8*(1-M)+M,"rgba(0,0,0,"+0.2*N+")"],[1,"rgba(255,255,255,"+0.2*N+")"]],3,0),i._backGradient.call(u)&&P(b.bshadow,j(C?0:100,E?0:100),j(B.x,B.y),[[0.6,"rgba(0,0,0,0)"],[0.8,"rgba(0,0,0,"+0.3*N+")"],[1,"rgba(0,0,0,0)"]],3))};switch(a.corner){case "tl":a.x=Math.max(a.x,1);I();f(m,[1,0,0,1],[100,0],H);break;case "tr":a.x=Math.min(a.x,e-1);I();f(j(-m.x,m.y),[0,0,0,1],
[0,0],-H);break;case "bl":a.x=Math.max(a.x,1);I();f(j(m.x,-m.y),[1,1,0,0],[100,100],-H);break;case "br":a.x=Math.min(a.x,e-1),I(),f(j(-m.x,-m.y),[0,1,1,0],[0,100],H)}}b.point=a},_moveFoldingPage:function(a){var b=this.data().f;if(b){var c=b.opts.turn,d=c.data(),e=d.pagePlace;a?(d=b.opts.next,e[d]!=b.opts.page&&(b.folding&&i._moveFoldingPage.call(this,!1),i._foldingPage.call(this).appendTo(b.fpage),e[d]=b.opts.page,b.folding=d),c.turn("update")):b.folding&&(d.pages[b.folding]?(c=d.pages[b.folding].data().f,
d.pageObjs[b.folding].appendTo(c.wrapper)):d.pageWrap[b.folding]&&d.pageObjs[b.folding].appendTo(d.pageWrap[b.folding]),b.folding in e&&(e[b.folding]=b.folding),delete b.folding)}},_showFoldedPage:function(a,b){var c=i._foldingPage.call(this),d=this.data(),e=d.f,f=e.visible;if(c){if(!f||!e.point||e.point.corner!=a.corner)if(c="hover"==e.status||"peel"==e.status||e.opts.turn.data().mouseAction?a.corner:null,f=!1,"prevented"==t("start",this,[e.opts,c]))return!1;if(b){var g=this,d=e.point&&e.point.corner==
a.corner?e.point:i._c.call(this,a.corner,1);this.animatef({from:[d.x,d.y],to:[a.x,a.y],duration:500,frame:function(b){a.x=Math.round(b[0]);a.y=Math.round(b[1]);i._fold.call(g,a)}})}else i._fold.call(this,a),d.effect&&!d.effect.turning&&this.animatef(!1);if(!f)switch(e.effect){case "hard":e.visible=!0;i._moveFoldingPage.call(this,!0);e.fpage.show();e.opts.shadows&&e.bshadow.show();break;case "sheet":e.visible=!0,e.fparent.show().data().flips++,i._moveFoldingPage.call(this,!0),e.fwrapper.show(),e.bshadow&&
e.bshadow.show()}return!0}return!1},hide:function(){var a=this.data().f,b=a.opts.turn.data(),c=i._foldingPage.call(this);switch(a.effect){case "hard":b.opts.gradients&&(a.bshadowLoc=0,a.bshadow.remove(),a.ashadow.hide());a.wrapper.transform("");a.fpage.hide();break;case "sheet":0===--a.fparent.data().flips&&a.fparent.hide(),this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform(""),a.wrapper.transform(""),a.fwrapper.hide(),a.bshadow&&a.bshadow.hide(),c.transform("")}a.visible=!1;return this},
hideFoldedPage:function(a){var b=this.data().f;if(b.point){var c=this,d=b.point,e=function(){b.point=null;b.status="";c.flip("hide");c.trigger("end",[b.opts,!1])};if(a){var f=i._c.call(this,d.corner),a="t"==d.corner.substr(0,1)?Math.min(0,d.y-f.y)/2:Math.max(0,d.y-f.y)/2,g=j(d.x,d.y+a),l=j(f.x,f.y-a);this.animatef({from:0,to:1,frame:function(a){a=S(d,g,l,f,a);d.x=a.x;d.y=a.y;i._fold.call(c,d)},complete:e,duration:800,hiding:!0})}else this.animatef(!1),e()}},turnPage:function(a){var b=this,c=this.data().f,
d=c.opts.turn.data(),a={corner:c.corner?c.corner.corner:a||i._cAllowed.call(this)[0]},e=c.point||i._c.call(this,a.corner,c.opts.turn?d.opts.elevation:0),f=i._c2.call(this,a.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(c){c=S(e,e,f,f,c);a.x=c.x;a.y=c.y;i._showFoldedPage.call(b,a)},complete:function(){b.trigger("end",[c.opts,!0])},duration:d.opts.duration,turning:!0});c.corner=null},moving:function(){return"effect"in this.data()},isTurning:function(){return this.flip("moving")&&
this.data().effect.turning},corner:function(){return this.data().f.corner},_eventStart:function(a){var b=this.data().f,c=b.opts.turn;if(!b.corner&&!b.disabled&&!this.flip("isTurning")&&b.opts.page==c.data().pagePlace[b.opts.page]){b.corner=i._isIArea.call(this,a);if(b.corner&&i._foldingPage.call(this))return this.trigger("pressed",[b.point]),i._showFoldedPage.call(this,b.corner),!1;b.corner=null}},_eventMove:function(a){var b=this.data().f;if(!b.disabled)if(a=u?a.originalEvent.touches:[a],b.corner){var c=
b.parent.offset();b.corner.x=a[0].pageX-c.left;b.corner.y=a[0].pageY-c.top;i._showFoldedPage.call(this,b.corner)}else if(b.hover&&!this.data().effect&&this.is(":visible"))if(a=i._isIArea.call(this,a[0])){if("sheet"==b.effect&&2==a.corner.length||"hard"==b.effect)b.status="hover",b=i._c.call(this,a.corner,b.opts.cornerSize/2),a.x=b.x,a.y=b.y,i._showFoldedPage.call(this,a,!0)}else"hover"==b.status&&(b.status="",i.hideFoldedPage.call(this,!0))},_eventEnd:function(){var a=this.data().f,b=a.corner;!a.disabled&&
b&&"prevented"!=t("released",this,[a.point||b])&&i.hideFoldedPage.call(this,!0);a.corner=null},disable:function(a){i.setData.call(this,{disabled:a});return this},hover:function(a){i.setData.call(this,{hover:a});return this},peel:function(a,b){var c=this.data().f;if(a){if(-1==f.inArray(a,p.all))throw q("Corner "+a+" is not permitted");if(-1!=f.inArray(a,i._cAllowed.call(this))){var d=i._c.call(this,a,c.opts.cornerSize/2);c.status="peel";i._showFoldedPage.call(this,{corner:a,x:d.x,y:d.y},b)}}else c.status=
"",i.hideFoldedPage.call(this,b);return this}};window.requestAnim=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};f.extend(f.fn,{flip:function(){return J(f(this[0]),i,arguments)},turn:function(){return J(f(this[0]),g,arguments)},transform:function(a,b){var c={};b&&(c[w+"transform-origin"]=b);c[w+"transform"]=a;return this.css(c)},animatef:function(a){var b=
this.data();b.effect&&b.effect.stop();if(a){a.to.length||(a.to=[a.to]);a.from.length||(a.from=[a.from]);for(var c=[],d=a.to.length,e=!0,g=this,i=(new Date).getTime(),j=function(){if(b.effect&&e){for(var f=[],k=Math.min(a.duration,(new Date).getTime()-i),l=0;l<d;l++)f.push(b.effect.easing(1,k,a.from[l],c[l],a.duration));a.frame(1==d?f[0]:f);k==a.duration?(delete b.effect,g.data(b),a.complete&&a.complete()):window.requestAnim(j)}},l=0;l<d;l++)c.push(a.to[l]-a.from[l]);b.effect=f.extend({stop:function(){e=
!1},easing:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c}},a);this.data(b);j()}else delete b.effect}});f.isTouch=u;f.mouseEvents=r;f.cssPrefix=T;f.cssTransitionEnd=function(){var a,b=document.createElement("fakeelement"),c={transition:"transitionend",OTransition:"oTransitionEnd",MSTransition:"transitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in c)if(void 0!==b.style[a])return c[a]};f.findPos=D})(jQuery);
;
var EReaderThemeIndex = function () {
    this.top = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    return this.Init();
};
EReaderThemeIndex.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;
        //var width = $(".pb-3").width();
        //var height = (width / 2) * (heightImage / widthImage);
        //let h = window.innerHeight;
        //let w = window.innerWidth;
        //if (w / h > 1024 / 768) {
        //    w = h * (1024 / 768);
        //} else {
        //    h = (w) * (768 / (1024));

        //}

        //if (width / height > 987 / 676) {
        //    width = height * (987 / 676);
        //} else {
        //    height = (width) * (676 / (987));

        //}

        $("#flipbook").turn({
            display: 'double',
            autoCenter: true,
            //acceleration: true,
            width: 800,
            height: 400
        });
        this.ResizeFlipbook(urlImage);
        Common.updateImagePageClass();


        $("#flipbook").bind("start", function (event, pageObject, corner) {
            console.log("start");
            zoomActive = false;
        });
        $("#flipbook").bind("turn", function (event, pageObject, corner) {
            isturning = true;
            Common.EReaderThemeIndex.changePositionBtnNext();
            if (read_single_page == false) {
                isZoom = true;
                $(".book-content").trigger("click");
            }
            
        });
        $("#flipbook").bind("end", function (event, pageObject, corner) {
            console.log("end", isturning, isZoom);
            if (isturning == false) {
                if (!isZoom) {
                    Common.EReaderThemeIndex.ChangeReadingMode();
                }
                zoomActive = true;
            }
        });
        $("#flipbook").bind("turned", function (event, page, view) {
            var idx = listAudio.length, i = -1;
            while (idx--) {
                listAudio[idx].pause();
                listAudio[idx].currentTime = 0;
            }
            listAudio = $();
            view.forEach(PlayAudio)
            function PlayAudio(item, index, arr) {
                listAudio = listAudio.add($(".p" + item).find("audio"));
            }
            playSnd();

            function playSnd() {
                $(listAudio[i]).next('div').find('span').last().css('color', 'black');
                i++;
                if (i == listAudio.length) return;
                listAudio[i].addEventListener('ended', playSnd);
                listAudio[i].play();
                $(listAudio[i]).closest('div').prev('video')[0].play()
            }

            isturning = false;
            console.log("turned");
            zoomActive = true;
            if (read_single_page == true) {
                Common.EReaderThemeIndex.ChangeReadingMode();
                $("#flipbook").draggable({
                    disabled: true
                });
            }
            //let current = $("#flipbook").turn("page");
            //console.log(current);
            //$(".page-wrapper").each(function (index, item) {
            //    if (item.getAttribute("page") == current) {
            //        item.style.display = 'block';
            //    }
            //    else {
            //        item.style.display = 'none';
            //    }
            //});
            
           
        });
        $("#flipbook").bind("first", function (event) {
            //console.log(event);
        });

        $("#flipbook").bind("last", function (event) {
            console.log("last");
        });

        //$("#iframeMain").css("width", w + "px")
        //$("#iframeMain").css("height", h + "px");
        $('#viewPopupClose').css('right', window.innerWidth - width - ((window.innerWidth - width) / 2));
        $('#viewPopupClose').css('top', window.innerHeight - height - ((window.innerHeight - height) / 2));
        $("#idViewPopup").click(function () {
            $("#idViewPopup").css("display", "none");
        })

        let left = window.innerWidth / 2 - width / 2;
        let top = 27;
        let isturning = false;

        //$(".book-content").css("width", width + "px")
        //$(".book-content").css("left", window.innerWidth / 2 - width / 2 + "px");
        //$(".book-content").css("top", 27 + "px");
        //$(".book-content").css("height", height + "px");
        $(".book-content").click(function (e) {
            console.log("click book-conten", zoomActive, isZoom)
            if (zoomActive) {
                let relX = e.pageX - $(this).offset().left - 10;
                let relY = e.pageY - $(this).offset().top;
                if (isZoom) {
                    isZoom = false;
                    $("#flipbook").css({ "transform": "translate3d(0px, 0px, 0px) scale(1)" })
                    $("#flipbook").css("transform-origin", relX + "px " + relY + "px")
                    //document.querySelector('#imgPrevious').classList.remove('content-hide');
                    //document.querySelector('#imgNext').classList.remove('content-hide');
                    $("#flipbook").css("top", 0);
                    $("#flipbook").css("left", 0);
                    $("#flipbook").draggable({
                        disabled: true
                    });
                    zooming = 0;
                    console.log(isturning);
                    if (read_single_page == true && isturning == false) {
                        Common.EReaderThemeIndex.ChangeReadingMode();
                    }
                    Common.EReaderThemeIndex.changePositionBtnNext();
                } else {
                    isZoom = true;
                    zooming = 1;
                    if (read_single_page == true) {
                        var newheight = Common.EReaderThemeIndex.height;
                        var newwidth = Common.EReaderThemeIndex.width / 2;
                        $('.page-wrapper').css('width', newwidth);
                        $('.page-wrapper').css('height', newheight);
                        $('.page').css('width', newwidth);
                        $('.book-content').css('width', newwidth * 2);
                        $('.book-content').css('height', newheight);
                        $("#flipbook").turn("size", newwidth, newheight);
                    }
                    var bgZoom = document.getElementById("flipbook");
                    $("#flipbook").css({ "transform": "translate3d(0px, 0px, 0px) scale(2)" })
                    var marginLeft = parseInt($('#flipbook').css('margin-left'), 10);

                    var quarheight = bgZoom.offsetHeight / 4;
                    var haftheight = quarheight * 2;
                    if (relY > 0 && relY < quarheight) {
                        relY = 0;
                    }
                    if (relY > height - quarheight) {
                        relY = height;
                    }
                    if (relY >= quarheight && relY <= height - quarheight) {
                        if (relY < haftheight) {
                            relY -= quarheight * 0.5;
                        }
                        else {
                            relY += quarheight * 0.5;
                        }
                    }

                    if (read_single_page == false && $('#flipbook').turn('view')[0] == 0) { //trường hợp zoom trang bìa đầu
                        relX = Common.EReaderThemeIndex.width + marginLeft;
                        $("#flipbook").css("transform-origin", relX + "px " + relY + "px");

                    }
                    else if (read_single_page == false && $('#flipbook').turn('view')[1] == 0) { //trường hợp zoom trang bìa cuối

                        $("#flipbook").css("transform-origin", marginLeft + "px " + relY + "px");

                    }
                    else {
                        if (relX <= Common.EReaderThemeIndex.width / 2) {
                            relX = 0;
                        }
                        else {
                            relX = Common.EReaderThemeIndex.width + marginLeft;
                            if (read_single_page == true) {
                                relX = 0;
                            }
                        }
                        $("#flipbook").css("transform-origin", relX + "px " + relY + "px");
                    }
                    var startX = 0;
                    var startY = 0;

                    bgZoom.addEventListener("touchstart", function (e) {
                        startX = e.touches[0].clientX;
                        startY = e.touches[0].clientY;
                    });
                    bgZoom.addEventListener("touchmove", function (e) {
                        var position = e.touches[0];
                        var transformOrigin = bgZoom.style.transformOrigin.split(" ");
                        var transformOriginX = parseInt(transformOrigin[0].replace("px", ""));
                        var transformOriginY = parseInt(transformOrigin[1].replace("px", ""));
                        var newY = transformOriginY;
                        var newX = transformOriginX;
                        if (position.clientY > startY) {
                            newY = transformOriginY + (startY - position.clientY);
                            if (newY < 0) {
                                newY = 0;
                            }
                        }
                        else {
                            newY = transformOriginY + (startY - position.clientY);
                            if (newY > height) {
                                newY = height;
                            }
                        }
                        if (($('#flipbook').turn('view')[0] == 0 || $('#flipbook').turn('view')[1] == 0)) { //trường hợp zoom trang bìa
                            newX = transformOriginX;
                        }
                        else {
                            if (position.clientX < startX) {
                                newX = transformOriginX + (startX - position.clientX);
                                if (newX > width + marginLeft) {
                                    newX = width + marginLeft;
                                }
                            }
                            else {
                                newX = transformOriginX - (position.clientX - startX);
                                if (newX < 0) {
                                    newX = 0;
                                }
                            }

                        }

                        $("#flipbook").css("transform-origin", newX + "px " + newY + "px");
                        //update startX, startY
                        startX = position.clientX;
                        startY = position.clientY;
                    });
                    $("#flipbook").draggable
                        ({
                            disabled: false,
                            drag: function (event, ui) {
                                var newheight = Common.EReaderThemeIndex.height;
                                var newwidth = Common.EReaderThemeIndex.width;
                                //if (read_single_page == true) {
                                //    var ratio = (Common.EReaderThemeIndex.height / (Common.EReaderThemeIndex.width / 2));
                                //    newheight = height;
                                //    newwidth = newheight / ratio;
                                //}

                                if (ui.position.top > 0 && ui.position.top > relY) {
                                    ui.position.top = relY;
                                }
                                if (ui.position.top < 0 && ui.position.top < -(newheight - relY)) {
                                    ui.position.top = -(newheight - relY);
                                }
                                if (read_single_page == false && ($('#flipbook').turn('view')[0] == 0 || $('#flipbook').turn('view')[1] == 0)) { //trường hợp zoom trang bìa
                                    if (ui.position.left > 0 || ui.position.left < 0) {
                                        ui.position.left = 0;
                                    }

                                }
                                else {
                                    if (ui.position.left > 0 && ui.position.left > relX) {
                                        ui.position.left = relX;
                                    }
                                }
                                if (read_single_page == true) {
                                    ui.position.left = 0;
                                    //if (ui.position.left < 0 && ui.position.left < -(newwidth- relX)) {
                                    //    ui.position.left = -(newwidth - relX);
                                    //}
                                }
                                else {

                                    if (ui.position.left < 0 && ui.position.left < -(Common.EReaderThemeIndex.width - relX)) {
                                        ui.position.left = -(Common.EReaderThemeIndex.width - relX);
                                    }
                                }

                            },

                        });
                    //document.querySelector('#imgPrevious').classList.add('content-hide');
                    //document.querySelector('#imgNext').classList.add('content-hide');
                    if (($("#flipbook").turn("page") == 1 || $("#flipbook").turn("page") == $("#flipbook").turn("pages")) && read_single_page == false) {
                        $("#imgNext").css('right', "-20px");
                        $("#imgPrevious").css('left', "-20px");
                    }
                }
            }
        })


        /*Thumbnail and Bookmark*/
        $(".bg-thumbnail").css("width", width + 50 + "px")
        $(".bg-thumbnail").css("left", window.innerWidth / 2 - width / 2 - 25 + "px");
        $(".bg-bookmark").css("width", width + 50 + "px")
        $(".bg-bookmark").css("left", window.innerWidth / 2 - width / 2 - 25 + "px");


        //$("#cover-page").css({ 'width': width, 'height': height });

        //    $(".bg-zoom").hover(
        //function() {
        //    $(this).animate({ 'zoom': 1.2 }, 400);
        //},
        //function() {
        //    $(this).animate({ 'zoom': 1 }, 400);
        //});
        //changing page
        $("#flipbook").bind("turning", function (event, page, view) {
            Common.updateImagePageClass();
            var totalPage = $("#flipbook").turn("pages");
            if ((totalPage % 2 == 0) || read_single_page == true) {
                currentPage = view[0];
            }
            else {
                currentPage = view[1];
            }
            if (flag == 1 && (currentPage >= totalPage)) {
                $("#imgNext").addClass('hidden');
            }
            else {
                $("#imgNext").removeClass('hidden');
            }
            if (view[0] == 0 || (read_single_page == true && view[0] == 1)) {
                $("#imgPrevious").addClass('hidden');
            }
            else {
                $("#imgPrevious").removeClass('hidden');
            }

            if (page == 0) {
                event.preventDefault(); //will not happen at page 1
            } else {
                let previousPage = PageCurrent;
                if (read_single_page == true) {
                    PageCurrent = page;
                    Common.drawingTool.reDrawOnCurrentPage();
                    $('.content-container').css('display', 'none');
                    if (Memo.memoListPerPage[page] != undefined && Memo.memoListPerPage[view[0]].length > 0) {
                        Memo.memoListPerPage[page].map(memo => $(`#${memo.id}`).css('display', 'block'));
                    }
                    //if (Memo.memoListPerPage[page] != undefined && Memo.memoListPerPage[view[1]].length > 0) {
                    //    Memo.memoListPerPage[page].map(memo => $(`#${memo.id}`).css('display', 'block'));
                    //}
                } else {
                    view.forEach(drawCurrentPage)
                    function drawCurrentPage(item) {
                        if (item != 0) {
                            PageCurrent = item;
                            Common.drawingTool.reDrawOnCurrentPage();
                        }
                    }
                    $('.content-container').css('display', 'none');
                    if (Memo.memoListPerPage[view[0]] != undefined && Memo.memoListPerPage[view[0]].length > 0) {
                        Memo.memoListPerPage[view[0]].map(memo => $(`#${memo.id}`).css('display', 'block'));
                    }
                    if (Memo.memoListPerPage[view[1]] != undefined && Memo.memoListPerPage[view[1]].length > 0) {
                        Memo.memoListPerPage[view[1]].map(memo => $(`#${memo.id}`).css('display', 'block'));
                    }
                }

                PageCurrentThumbnail = page;

                if ($("#idTeacherNote_" + page).val() != 0) {
                    $("#teacherNote").css("display", "block");
                } else {
                    $("#teacherNote").css("display", "none");
                }

                if ($("#idReviewGame_" + page).val() != 0) {
                    $("#review").css("display", "block");


                } else {
                    $("#review").css("display", "none");
                }

                if ($("#idWorkBook_" + page).val() != 0) {
                    $("#workBook").css("display", "block");


                } else {
                    $("#workBook").css("display", "none");
                }

                //if (previousPage != 1 || PageCurrent != 1) {
                //    if (Memo.memoListPerPage[previousPage - 1] != undefined && Memo.memoListPerPage[previousPage - 1].length > 0 && Memo.memoListPerPage[previousPage - 1] != 0) {
                //        Memo.memoListPerPage[previousPage - 1].map(memo => $(`#${memo.id}`).addClass('content-hide'));
                //    }

                //    if (Memo.memoListPerPage[previousPage] != undefined && Memo.memoListPerPage[previousPage].length > 0) {
                //        Memo.memoListPerPage[previousPage].map(memo => $(`#${memo.id}`).addClass('content-hide'));
                //    }

                //    if (Memo.memoListPerPage[PageCurrent - 1] != undefined && Memo.memoListPerPage[PageCurrent - 1].length > 0 && Memo.memoListPerPage[PageCurrent - 1] != 0 && previousPage != 1) {
                //        Memo.memoListPerPage[PageCurrent - 1].map(memo => $(`#${memo.id}`).removeClass('content-hide'));
                //    }

                //    if (Memo.memoListPerPage[PageCurrent] != undefined && Memo.memoListPerPage[PageCurrent].length > 0) {
                //        Memo.memoListPerPage[PageCurrent].map(memo => $(`#${memo.id}`).removeClass('content-hide'));
                //    }
                //} else {
                //    if (Memo.memoListPerPage[previousPage] != undefined && Memo.memoListPerPage[previousPage].length > 0) {
                //        Memo.memoListPerPage[previousPage].map(memo => $(`#${memo.id}`).addClass('content-hide'));
                //    }
                //    if (Memo.memoListPerPage[PageCurrent] != undefined && Memo.memoListPerPage[PageCurrent].length > 0) {
                //        Memo.memoListPerPage[PageCurrent].map(memo => $(`#${memo.id}`).removeClass('content-hide'));
                //    }
                //}

            }
            $(".img-page").off("contextmenu").on("contextmenu", function (e) {
                return false;
            });
        });

        $("#imgPrevious").click(function () {
            $("#flipbook").turn("previous");
            isZoom = true;
            Common.updateImagePageClass();
        })

        $("#imgNext").click(function () {
            var totalPage = $("#flipbook").turn("pages");
            if (totalPage > 1) {
                //if ((flag == 0) && (currentPage == totalPage)) {
                //    Common.Account.ShowDialogLoginInContentBook();
                //}
                if ((flag == 0 || flag == 2) && (currentPage >= totalPage)) {
                    //Common.DialogPackageInContentBook.ShowDialogPackage(IdTheme);
                    Common.DialogPackageInContentBook.ShowDialogPackage(IdGrade, IdSubject, IdSeries, IdTheme);
                }
                else { $("#flipbook").turn("next"); }
            }
            else {
                if (flag == 0 || flag == 2) {
                    //Common.DialogPackageInContentBook.ShowDialogPackage(IdTheme);
                    Common.DialogPackageInContentBook.ShowDialogPackage(IdGrade, IdSubject, IdSeries, IdTheme);
                }
                else { $("#flipbook").turn("next"); }
            }
            Common.updateImagePageClass();
            isZoom = true;
        })

        $(function () {
            $("#imgNext").hover(function () {
                isZoom = true;
            }, function () {
                isZoom = false;
            });

            $("#imgPrevious").hover(function () {
                isZoom = true;
            }, function () {
                isZoom = false;
            });
        });

        $(".btn-tn-r-wb").css("top", height - 10 + "px");
        $("#review").css("top", height - 12 + "px");

        $("#idMenuTheme").css("top", height / 5 + "px");
        $("#idMenuTheme").css("left", window.innerWidth / 2 - width / 2 + 40 + "px");
        //$("#idMenuTheme").css("left", "170px");


        //click in menu theme
        $(".item_theme").click(function () {
            let index = $(this).data("index");
            $("#flipbook").turn("page", index);
        })

        //list of themes with background cover
        //document.querySelector('#imgMenuContent').addEventListener('click', this.triggerContentBtn.bind(this));

        $("#imgMenuContent").click(function () {
            $("#idMenuTheme").toggleClass("menu-show");
        })

        $("#idCloseMenuTheme").click(function () {
            $("#idMenuTheme").removeClass("menu-show");
        })
        ///btn menu
        $(".class-top-content").css("width", width + 120 + "px");
        $("#btnMenu").click(function () {
            $(".class-top-content").toggleClass("class-menu-top");
        })

        $("#teacherNote").click(function () {
            let page = PageCurrent;

            let idLevel = $("#idLevel_" + page).val();
            let idTheme = $("#idTheme_" + page).val();
            let idLesson = $("#idLesson_" + page).val();
            let idWorkBook = $("#idWorkBook_" + page).val();

            let idTeacherNote = $("#idTeacherNote_" + page).val();
            let idReviewGame = $("#idReviewGame_" + page).val();

            $("#formGotoView").find("#idLevel").val(idLevel);
            $("#formGotoView").find("#idTheme").val(idTheme);
            $("#formGotoView").find("#idLesson").val(idLesson);
            $("#formGotoView").find("#idReviewGame").val("0");
            $("#formGotoView").find("#idTeacherNote").val(idTeacherNote);

            $("#formGotoView").submit();
        })


        $("#review").click(function () {
            let page = PageCurrent;

            let idLevel = $("#idLevel_" + page).val();
            let idTheme = $("#idTheme_" + page).val();
            let idLesson = $("#idLesson_" + page).val();
            let idWorkBook = $("#idWorkBook_" + page).val();

            let idTeacherNote = $("#idTeacherNote_" + page).val();
            let idReviewGame = $("#idReviewGame_" + page).val();

            $("#formGotoView").find("#idLevel").val(idLevel);
            $("#formGotoView").find("#idTheme").val(idTheme);
            $("#formGotoView").find("#idLesson").val(idLesson);
            $("#formGotoView").find("#idReviewGame").val(idReviewGame);
            $("#formGotoView").find("#idTeacherNote").val("0");
            $("#formGotoView").submit();
        })

        $("#workBook").click(function () {
            let page = PageCurrent;

            let idLevel = $("#idLevel_" + page).val();
            let idTheme = $("#idTheme_" + page).val();
            let idLesson = $("#idLesson_" + page).val();
            let idWorkBook = $("#idWorkBook_" + page).val();

            let idTeacherNote = $("#idTeacherNote_" + page).val();
            let idReviewGame = $("#idReviewGame_" + page).val();

            $("#formGotoSlide").find("#idLevel").val(idLevel);
            $("#formGotoSlide").find("#idTheme").val(idTheme);
            $("#formGotoSlide").find("#idLesson").val(idLesson);
            $("#formGotoSlide").find("#idSlide").val(idWorkBook);

            $("#formGotoSlide").submit();
        })
        this.SetBasicInformation(top, left, width, height);

        // prevent right click and key code.
        document.addEventListener('contextmenu', event => event.preventDefault());
        document.onkeydown = function (e) {
            if (e.ctrlKey &&
                (e.keyCode === 67 ||
                    e.keyCode === 86 ||
                    e.keyCode === 85 ||
                    e.keyCode === 117)) {
                return false;
            } else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) { // prevent Ctrl+Shift+I        
                return false;
            } else if (e.ctrlKey && e.shiftKey && e.keyCode == 74) { // prevent Ctrl+Shift+J        
                return false;
            } else if (e.keyCode == 123) { // prevent F12
                return false;
            } else if (e.keyCode == 44) { // prevent print screen
                return false;
            }
            else {
                return true;
            }
        };
        $(document).keypress("u", function (e) {
            if (e.ctrlKey) {
                return false;
            }
            else {
                return true;
            }
        });

        $("#flipbook").bind("turned", function (event, page, view) {
            for (var i = 0; i < view.length; i++) {
                if ($("#page_" + view[i]).data("isused") == false && isLogin == 1 && isActive == 1) {
                    var idPage = $("#page_" + view[i]).data('idpage');
                    Common.EReaderThemeIndex.UpdateUsageHistory(idPage);
                }
            }

        });

    },
    myFunction: function (e) {
        var index = 0;
        var listWord = $(e).next("div").find("span");
        interval = setInterval(function changeAudio() {
            var vid = $(e);
            var time = $(listWord[index]).data('time');
            if (time <= vid[0].currentTime) {
                $(listWord).eq(index - 1).css("color", "black");
                $(listWord).eq(index).css("color", "#0900f8;");
                index++;
            }
            if (vid[0].ended == true && index == listWord.length) {
                clearInterval(interval);
            }
            //console.log(vid[0].currentTime);
        }, 1);
    },
    PauseFunction: function (e) {
        clearInterval(interval);
        return true;
    },
    triggerActivityBtn: function () {
        position: relative
        document.querySelector('#imgMenuContent').classList.toggle('d-none');
        document.querySelector('#activity-container-page-' + PageCurrent).classList.toggle('d-none');
        document.querySelector('#idContentListTheme').classList.add('content-hide');
        if (!document.querySelector('#imgMenuContent').classList.contains('d-none')) {
            document.querySelector('#imgPrevious').classList.remove('content-hide');
            document.querySelector('#imgNext').classList.remove('content-hide');
            document.querySelector('#teacherNote').style.display = 'block';
        }
        else {
            document.querySelector('#imgPrevious').classList.add('content-hide');
            document.querySelector('#imgNext').classList.add('content-hide');
            document.querySelector('#teacherNote').style.display = 'none';
        }
        let flipbookDisabled = !$('#flipbook').turn('disabled');
        $('#flipbook').turn('disable', flipbookDisabled);
    },
    triggerContentBtn: function () {
        //document.querySelector('#idContentListTheme').classList.toggle('content-hide');
        document.querySelector('#imgPrevious').classList.toggle('content-hide');
        document.querySelector('#imgNext').classList.toggle('content-hide');
        //document.querySelector('#activity-trigger').classList.toggle('content-hide');

        //if (document.querySelector('#idContentListTheme').classList.contains('content-hide'))
        //{
        //    let idTeacherNote = document.querySelector('#idTeacherNote_' + PageCurrent);
        //    let teacherNote = document.querySelector('#teacherNote');
        //    if (idTeacherNote != null && idTeacherNote.value != 0) {
        //        teacherNote.style.display = 'block';
        //    }
        //    else {
        //        teacherNote.style.display = 'none';
        //    }
        //}
        //else {
        //    teacherNote.style.display = 'none';
        //}
    },
    BeforeSend: function () {
        Common.ShowLoading(true);
    },
    SuccessViewForm: function (data) {
        Common.ShowLoading(false);
        $("#idViewPopup").find("#iframeMain").attr("src", urlContent + "Content/HTML/10/" + data + "/index.html");
        $("#idViewPopup").css('display', 'block');
    },
    GotoSlide: function (idLevel, idTheme, idLesson, idSlide, page) {
        $("#formGotoSlide").find("#idLevel").val(idLevel);
        $("#formGotoSlide").find("#idTheme").val(idTheme);
        $("#formGotoSlide").find("#idLesson").val(idLesson);
        $("#formGotoSlide").find("#idSlide").val(idSlide);
        $("#formGotoSlide").find("#page").val(page);
        $("#formGotoSlide").submit();
    },
    SetBasicInformation: function (top, left, width, height) {
        this.top = top;
        this.left = left;
        this.width = width;
        this.height = height;
    },
    Resize: function () {
        //let height = window.innerHeight;
        //let width = window.innerWidth;
        //if (width / height > 1024 / 768) {
        //    width = height * (1024 / 768);
        //} else {
        //    height = (width) * (768 / (1024));

        //}

        //$("#iframeMain").css("width", width + "px")
        //$("#iframeMain").css("height", height + "px");
        //$('#viewPopupClose').css('right', window.innerWidth - width - ((window.innerWidth - width) / 2));
        //$('#viewPopupClose').css('top', window.innerHeight - height - ((window.innerHeight - height) / 2));
        //if (width / height > 886 / 679) {
        //    width = height * (886 / 679);
        //} else {
        //    height = (width) * (679 / (886));

        //}
        //width = width - 60;
        //height = height - 60;
        //let top = 27;
        //let left = window.innerWidth / 2 - width / 2;

        ////$(".book-content").css("width", width + "px")
        ////$(".book-content").css("left", left + "px");
        ////$(".book-content").css("top", top + "px");
        ////$(".book-content").css("height", height + "px");

        ///*Thumbnail and Bookmark*/
        //$(".bg-thumbnail").css("width", width + 50 + "px")
        //$(".bg-thumbnail").css("left", window.innerWidth / 2 - width / 2 - 25 + "px");
        //$(".bg-bookmark").css("width", width + 50 + "px")
        //$(".bg-bookmark").css("left", window.innerWidth / 2 - width / 2 - 25 + "px");

        //$("#cover-page").css({ 'width': width, 'height': height })


        ////$("#imgMenuContent").css("left", window.innerWidth / 2 - width / 2 - 16 + "px");
        ////$("#imgMenuContent").css("top", height / 5 + "px");

        //$(".class-top-content").css("width", width + 120 + "px");

        ////$("#imgPrevious").css("left", window.innerWidth / 2 - width / 2 - 16 + "px");
        ////$("#imgPrevious").css("top", height * 4 / 5 + "px");
        ////$("#imgNext").css("left", (window.innerWidth - width) / 2 + width - 40 + 18 + "px");
        ////$("#imgNext").css("top", height * 4 / 5 + "px");
        //$(".btn-tn-r-wb").css("top", height - 10 + "px");
        //$("#review").css("top", height - 12 + "px");
        //$("#idMenuTheme").css("top", height / 5 + "px");
        //$("#idMenuTheme").css("left", window.innerWidth / 2 - width / 2 + 40 + "px");
        //var flipBook = $("#flipbook");
        //$(flipBook).turn('size', width, height);
        //$("#flipbook").attr("style", "position: relative; width: " + width + "px; height: " + height + "px; overflow: hidden; transform: translate3d(0px, 0px, 0px);");
        //$(".page-Amanda").attr("style", "float: left; width: " + width + "px; height: " + height + "px; position: absolute;");
        //this.SetBasicInformation(top, left, width, height);

        this.ResizeFlipbook(urlImage);
    },
    ChangeReadingMode: function () {
        //$("#idOnClickZoom img").attr("src", urlContent + "Content/images/Amanda/ic-zoom-active.png")
        zoomActive = true;
        if (zoomActive) {
            $('.book-content').css('cursor', 'url("' + linkico + '") 4 7, auto');
            $("#flipbook").css({ "transform": "translate3d(0px, 0px, 0px) scale(1)", "transform-origin": "0px 0px", "top": "0px", "left": "0px" });
        }
        if (read_single_page == true) {
            var ratio = (this.height / (this.width / 2));
            var newheight = height;
            var newwidth = newheight / ratio;
            //newheight = this.height;
            //newwidth = this.width / 2;
            $("#flipbook").turn('display', 'single');
            $('.page-wrapper').css('width', newwidth);
            $('.page-wrapper').css('height', newheight);
            $('.page').css('width', newwidth);
            $("#flipbook").turn("size", newwidth, newheight);
            $('.book-content').css('width', newwidth);
        }
        else {
            $("#flipbook").turn('display', 'double');
            $("#flipbook").turn("size", this.width, this.height);
            $('.book-content').css('width', this.width);
        }
        Common.EReaderThemeIndex.changePositionBtnNext();
        Common.drawingTool.reDrawWhenChangeMode();
        isZoom = false;
        zoomActive = true;
        $("#flipbook").draggable({
            disabled: true
        });
    },
    UpdateUsageHistory: function (idPage) {
        $.ajax({
            type: "POST",
            url: EReaderThemeIndex.Url.UpdateUsageHistory,
            cache: false,
            dataType: "json",
            data: {
                idTheme: IdTheme,
                idPage: idPage,
            },
            success: function (data) {
                if (data == 1) {
                    $("#page_" + idPage).data('isused', 'true');
                }
            },
            error: function (result) {
                alert(result);
            }
        });
    },
    ShowDialogStarRating: function (idTheme) {
        Common.Ajax({
            type: "POST",
            url: EReaderThemeIndex.Url.ShowDialogStarRating,
            cache: false,
            dataType: "html",
            data: {
                idTheme: idTheme,
            }
        }, function (result) {
            $("#dialog_vote_star_content").html(result);
            $("#dialog-star-vote").modal("show");
        });
    },
    ResizeFlipbook: function (url) {
        $("<img/>", {
            load: function () {
                var width = $(window).width();
                var height = $(window).height();

                if (this.width < this.height) {
                    height = height * 0.9;
                    width = ((height * this.width) / this.height) * 2
                }
                else {
                    width = width * 0.9;
                    height = (width * 0.5 * this.height) / this.width;
                }


                $(".book-content").css("width", width + "px")
                $(".book-content").css("height", height + "px");
                $('#flipbook').turn('size', width, height);

                /*Thumbnail and Bookmark*/
                $(".bg-thumbnail").css("width", width + 50 + "px")
                $(".bg-thumbnail").css("left", window.innerWidth / 2 - width / 2 - 25 + "px");
                $(".bg-bookmark").css("width", width + 50 + "px")
                $(".bg-bookmark").css("left", window.innerWidth / 2 - width / 2 - 25 + "px");
                $(".class-top-content").css("width", width + 120 + "px");
                Common.EReaderThemeIndex.width = width;
                Common.EReaderThemeIndex.height = height;
                Common.drawingTool.reDrawOnCurrentPage();
            },
            src: url
        });
    },
    changePositionBtnNext: function () {
        var page = $("#flipbook").turn("page");
        var pages = $("#flipbook").turn("pages");
        if ((page == 1 || page >= pages ) && read_single_page == false) {
            //var x = ($(window).width() - 60) / 4 - 40;
            var x = ($("#bg-zoom").innerWidth() / 4) - 20;
            $("#imgNext").css('right', x + "px");
            $("#imgPrevious").css('left', x + "px");
        }
        else {
            $("#imgNext").css('right', "-20px");
            $("#imgPrevious").css('left', "-20px");
        }
    }
}
;
var Drawing = function () {
    this.listDrawingData = [];
    this.stage;
    this.layer;
    this.canvas;
    this.image;
    this.context;
    this.isPaint;
    this.lastPointerPosition;
    this.mode;
    this.penSize;
    this.eraserSize;
    this.highlightSize;
    this.mouseStatus;
    this.colorSelect;
    this.opacity;
    this.idAcive;
    this.idShapeActive;
    this.posStartArray;
    this.posEndArray;
    return this.Init();
};
function ToolObj(type, act, stepArray) {
    this.type = type;
    this.act = act;
    this.stepArray = stepArray;
}
function PenObj(alpha, color, compositeOperation, lineJoin, lineWidth, posStartArray, posEndArray) {
    this.color = color;
    this.lineWidth = lineWidth;
    this.compositeOperation = compositeOperation;
    this.lineJoin = lineJoin;
    this.alpha = alpha;
    this.posStart = posStartArray;
    this.posEnd = posEndArray;
}
function TextObj(textHtml, id) {
    this.textHtml = textHtml;
    this.id = id;
}
function ShapeObj(shape) {
    this.shape = shape.attrs;
}
function position(x, y) {
    this.x = x;
    this.y = y;
}
Drawing.prototype = {
    Init: function (options) {
        $('#container').css('pointer-events', 'none');
        $('#arrow').addClass('img_active');
        this.setDefaultLocalStorage();
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;
        //this.onPreNextSlideClick();
        //this.registerStageEvent();
        //this.reDrawOnCurrentPage();
    },
    setDefaultLocalStorage: function () {
        if (typeof (Storage) !== undefined) {
            if (JSON.parse(localStorage.getItem("lsDrawingData")) == null) {
                var lsDrawing = {};
                localStorage.setItem("lsDrawingData", JSON.stringify(lsDrawing))
            }

            var lsDrawingData = JSON.parse(localStorage.getItem("lsDrawingData"));
            if (window.location.href.includes('EBook')) {
                if (lsDrawingData.EBook == undefined) {
                    lsDrawingData.EBook = {};
                    localStorage.setItem("lsDrawingData", JSON.stringify(lsDrawingData))
                }
                if (lsDrawingData.EBook[idThemeApp] != null ||
                    lsDrawingData.EBook[idThemeApp] !== undefined) {
                    this.listDrawingData = lsDrawingData.EBook[idThemeApp];
                }
            }
        }
        else {
            Common.Alert("Alert", "Sorry! No Web Storage support...")
        }
    },
    updateLocalStorage: function () {
        if (typeof (Storage) !== undefined) {
            if (JSON.parse(localStorage.getItem("lsDrawingData")) == null) {
                var lsDrawing = {};
                localStorage.setItem("lsDrawingData", JSON.stringify(lsDrawing))
            }

            if (window.location.href.includes('EBook')) {
                var lsDrawingData = JSON.parse(localStorage.getItem("lsDrawingData"));
                if (lsDrawingData.EBook == undefined) {
                    lsDrawingData.EBook = {};
                }
                lsDrawingData.EBook[idThemeApp] = this.listDrawingData;
                localStorage.setItem("lsDrawingData", JSON.stringify(lsDrawingData))
            }
        }
        else {
            Common.Alert("Alert", "Sorry! No Web Storage support...")
        }
    },
    onPreNextSlideClick: function () {
        //this.registerEventForOpacity();
        this.stage.destroy();
        this.reDrawOnCurrentPage();
    },
    registerEventForOpacity: function () {
        var handleClick = 0,
            percentage = 0;

        document.getElementById("opacity-player-container").addEventListener("mousemove", function (e) {
            curSlider = $(this);
            curPos = e.pageX - curSlider.offset().left;

            if (handleClick === 1) {
                if ((curPos <= $("#opacity-progress").width()) && (curPos + $("#opacity-progress").find('#draggable-point').width() / 2 >= 0)) {
                    let left = curPos
                    $('#draggable-point').css('left', left + 'px');
                    percentage = left / $("#opacity-progress").width();
                    $("#opacity-progress-bar").css("width", percentage * 100 + "%");
                }
            }
        });

        document.getElementById("draggable-point").addEventListener("mousedown", function () {
            handleClick = 1;
        });

        document.getElementsByTagName("BODY")[0].addEventListener("mouseup", () => {
            if (handleClick == 1) {
                let percent = parseFloat($("#opacity-progress-bar").width() / $("#opacity-progress").width())
                percent = Math.round(percent * 10);
                this.opacity = percent / 10;
                this.setOpacity(this.opacity);
                let left = $('#draggable-point').position().left;
                let progressbar = percentage * 100;
                this.setOpacityLocalStorage(left, progressbar, this.opacity);
            }
            handleClick = 0;
        });
    },
    reDrawOnCurrentPage: function () {
        this.registerStageEvent();
        let totalPage = $('#flipbook').turn('pages');
        let cenPos = $('.book-content').width();//vị trí trung tâm giữa 2 trang
        if (this.listDrawingData[PageCurrent] == null ||
            this.listDrawingData[PageCurrent] == undefined) {

            this.listDrawingData[PageCurrent] = {};
            return;
        }

        let reDrawingData = this.listDrawingData[PageCurrent].undoObj;
        if (reDrawingData == null || reDrawingData == undefined) {
            return;
        }

        let globalAlpha = this.context.globalAlpha;
        let strokeStyle = this.context.strokeStyle;
        let globalCompositeOperation = this.context.globalCompositeOperation;
        let lineJoin = this.context.lineJoin;
        let lineWidth = this.context.lineWidth;

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.stage.draw();

        for (var j = 0, l = reDrawingData.stepArray.length; j < l; j++) {
            if (reDrawingData.type[j] == 'shape') {
                if (reDrawingData.act[j] == "add") {
                    var tmp = 0;
                    for (k = reDrawingData.stepArray.length; k >= 0; k--) {
                        if (reDrawingData.type[k] == 'shape' &&
                            reDrawingData.act[k] == 'delete' &&
                            this.compareShape(reDrawingData.stepArray[j].shape, reDrawingData.stepArray[k].shape)) {
                            tmp = 1;
                        }
                    }
                    if (tmp == 0) {
                        if (read_single_page || PageCurrent == 0 || PageCurrent == 1 ) {
                            if (PageCurrent % 2 == 0 || PageCurrent == 0 || PageCurrent == 1) //trang bên trái
                            {
                                if (reDrawingData.stepArray[j].shape.x < cenPos || reDrawingData.stepArray[j].shape.x - reDrawingData.stepArray[j].shape.radiusX < cenPos) {
                                    this.drawShape(reDrawingData, reDrawingData.stepArray[j].shape);
                                }
                            }
                            else {
                                if (reDrawingData.stepArray[j].shape.x < 0 || reDrawingData.stepArray[j].shape.x > cenPos || reDrawingData.stepArray[j].shape.x + reDrawingData.stepArray[j].shape.radiusX > cenPos) {
                                    let shape = JSON.parse(JSON.stringify(reDrawingData.stepArray[j].shape));
                                    shape.x = shape.x - $('.book-content').width();
                                    this.drawShape(reDrawingData, shape);
                                }
                            }

                        }
                        else {
                            this.drawShape(reDrawingData, reDrawingData.stepArray[j].shape);
                        }
                    }
                }
            }
            else {
                this.context.globalAlpha = reDrawingData.stepArray[j].alpha;
                this.context.strokeStyle = reDrawingData.stepArray[j].color;
                this.context.globalCompositeOperation = reDrawingData.stepArray[j].compositeOperation;
                this.context.lineJoin = reDrawingData.stepArray[j].lineJoin;
                this.context.lineWidth = reDrawingData.stepArray[j].lineWidth;
                if (read_single_page) {
                    if (PageCurrent % 2 == 0 || PageCurrent == 0 || PageCurrent == 1) //trang bên trái
                    {
                        for (var i = 0, len = reDrawingData.stepArray[j].posStart.length; i < len; i++) {
                            this.context.beginPath();
                            if (reDrawingData.stepArray[j].posStart[i].x <= cenPos || reDrawingData.stepArray[j].posEnd[i].x <= cenPos) {
                                this.context.moveTo(reDrawingData.stepArray[j].posStart[i].x, reDrawingData.stepArray[j].posStart[i].y);
                                this.context.lineTo(reDrawingData.stepArray[j].posEnd[i].x, reDrawingData.stepArray[j].posEnd[i].y);
                            }
                            this.context.closePath();
                            this.context.stroke();
                            this.layer.batchDraw();
                        }
                    }
                    else {
                        for (var i = 0, len = reDrawingData.stepArray[j].posStart.length; i < len; i++) {
                            this.context.beginPath();
                            if (reDrawingData.stepArray[j].posStart[i].x >= cenPos || reDrawingData.stepArray[j].posEnd[i].x > cenPos) {
                                this.context.moveTo(reDrawingData.stepArray[j].posStart[i].x - cenPos, reDrawingData.stepArray[j].posStart[i].y);
                                this.context.lineTo(reDrawingData.stepArray[j].posEnd[i].x - cenPos, reDrawingData.stepArray[j].posEnd[i].y);
                            }
                            this.context.closePath();
                            this.context.stroke();
                            this.layer.batchDraw();
                        }
                    }

                }
                else {
                    for (var i = 0, len = reDrawingData.stepArray[j].posStart.length; i < len; i++) {
                        this.context.beginPath();
                        this.context.moveTo(reDrawingData.stepArray[j].posStart[i].x, reDrawingData.stepArray[j].posStart[i].y);
                        this.context.lineTo(reDrawingData.stepArray[j].posEnd[i].x, reDrawingData.stepArray[j].posEnd[i].y);
                        this.context.closePath();
                        this.context.stroke();
                        this.layer.batchDraw();
                    }
                }




            }
            this.context.globalAlpha = globalAlpha;
            this.context.strokeStyle = strokeStyle;
            this.context.globalCompositeOperation = globalCompositeOperation;
            this.context.lineJoin = lineJoin;
            this.context.lineWidth = lineWidth;
            this.stage.draw();
            this.setOpacity(this.opacity);
        }
    },
    reDrawWhenChangeMode: function () {
        this.registerStageEvent();
        let page = $('#flipbook').turn('page');
        let totalPage = $('#flipbook').turn('pages');
        let cenPos = $('.book-content').width();//vị trí trung tâm giữa 2 trang
        if (this.listDrawingData[PageCurrent] == null ||
            this.listDrawingData[PageCurrent] == undefined) {

            this.listDrawingData[PageCurrent] = {};
            return;
        }

        let reDrawingData = this.listDrawingData[PageCurrent].undoObj;
        if (reDrawingData == null || reDrawingData == undefined) {
            return;
        }

        let globalAlpha = this.context.globalAlpha;
        let strokeStyle = this.context.strokeStyle;
        let globalCompositeOperation = this.context.globalCompositeOperation;
        let lineJoin = this.context.lineJoin;
        let lineWidth = this.context.lineWidth;

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.stage.draw();

        for (var j = 0, l = reDrawingData.stepArray.length; j < l; j++) {
            if (reDrawingData.type[j] == 'shape') {
                if (reDrawingData.act[j] == "add") {
                    var tmp = 0;
                    for (k = reDrawingData.stepArray.length; k >= 0; k--) {
                        if (reDrawingData.type[k] == 'shape' &&
                            reDrawingData.act[k] == 'delete' &&
                            this.compareShape(reDrawingData.stepArray[j].shape, reDrawingData.stepArray[k].shape)) {
                            tmp = 1;
                        }
                    }
                    if (tmp == 0) {
                        if (read_single_page || page == 0 || page == 1) {
                            if (page % 2 == 0 || page == 0 || page == 1) //trang bên trái
                            {
                                if (reDrawingData.stepArray[j].shape.x < cenPos || reDrawingData.stepArray[j].shape.x - reDrawingData.stepArray[j].shape.radiusX < cenPos) {
                                    this.drawShape(reDrawingData, reDrawingData.stepArray[j].shape);
                                }
                            }
                            else {
                                if (reDrawingData.stepArray[j].shape.x < 0 || reDrawingData.stepArray[j].shape.x > cenPos || reDrawingData.stepArray[j].shape.x + reDrawingData.stepArray[j].shape.radiusX > cenPos) {
                                    let shape = JSON.parse(JSON.stringify(reDrawingData.stepArray[j].shape));
                                    shape.x = shape.x - $('.book-content').width();
                                    this.drawShape(reDrawingData, shape);
                                }
                            }

                        }
                        else {
                            this.drawShape(reDrawingData, reDrawingData.stepArray[j].shape);
                        }
                    }
                }
            }
            else {
                this.context.globalAlpha = reDrawingData.stepArray[j].alpha;
                this.context.strokeStyle = reDrawingData.stepArray[j].color;
                this.context.globalCompositeOperation = reDrawingData.stepArray[j].compositeOperation;
                this.context.lineJoin = reDrawingData.stepArray[j].lineJoin;
                this.context.lineWidth = reDrawingData.stepArray[j].lineWidth;
                if (read_single_page) {
                    if (page % 2 == 0 || page == 0 || page == 1) //trang bên trái
                    {
                        for (var i = 0, len = reDrawingData.stepArray[j].posStart.length; i < len; i++) {
                            this.context.beginPath();
                            if (reDrawingData.stepArray[j].posStart[i].x <= cenPos || reDrawingData.stepArray[j].posEnd[i].x <= cenPos) {
                                this.context.moveTo(reDrawingData.stepArray[j].posStart[i].x, reDrawingData.stepArray[j].posStart[i].y);
                                this.context.lineTo(reDrawingData.stepArray[j].posEnd[i].x, reDrawingData.stepArray[j].posEnd[i].y);
                            }
                            this.context.closePath();
                            this.context.stroke();
                            this.layer.batchDraw();
                        }
                    }
                    else {
                        for (var i = 0, len = reDrawingData.stepArray[j].posStart.length; i < len; i++) {
                            this.context.beginPath();
                            if (reDrawingData.stepArray[j].posStart[i].x >= cenPos || reDrawingData.stepArray[j].posEnd[i].x > cenPos) {
                                this.context.moveTo(reDrawingData.stepArray[j].posStart[i].x - cenPos, reDrawingData.stepArray[j].posStart[i].y);
                                this.context.lineTo(reDrawingData.stepArray[j].posEnd[i].x - cenPos, reDrawingData.stepArray[j].posEnd[i].y);
                            }
                            this.context.closePath();
                            this.context.stroke();
                            this.layer.batchDraw();
                        }
                    }

                }
                else {
                    for (var i = 0, len = reDrawingData.stepArray[j].posStart.length; i < len; i++) {
                        this.context.beginPath();
                        this.context.moveTo(reDrawingData.stepArray[j].posStart[i].x, reDrawingData.stepArray[j].posStart[i].y);
                        this.context.lineTo(reDrawingData.stepArray[j].posEnd[i].x, reDrawingData.stepArray[j].posEnd[i].y);
                        this.context.closePath();
                        this.context.stroke();
                        this.layer.batchDraw();
                    }
                }




            }
            this.context.globalAlpha = globalAlpha;
            this.context.strokeStyle = strokeStyle;
            this.context.globalCompositeOperation = globalCompositeOperation;
            this.context.lineJoin = lineJoin;
            this.context.lineWidth = lineWidth;
            this.stage.draw();
            this.setOpacity(this.opacity);
        }
    },
    OnClickDraw: function () {

        if ($("#idPenContent").css("display") == "none") {

            $("#idOnClickDrawing img").attr("src", urlContent + "Content/images/Amanda/ic-drawing-active.png")

            $("#idPenContent").css("top", 65 + "px");
            $("#idPenContent").css("left", 600 + "px");

            $("#idPenContent").css("display", "block");
            $("#idPenContent").css('z-index', toolPriority++);
        } else {
            this.OnClickCloseDraw();
        }
    },
    OnClickCloseDraw: function () {
        $("#idOnClickDrawing img").attr("src", urlContent + "Content/images/Amanda/ic-drawing.png");

        $("#idPenContent").css("display", "none");
    },
    ResetMouse: function (id) {
        $(".class-acticon-draw").removeClass('img_active');
        this.isPaint = false;
        this.mouseStatus = "up";
        $('#container').css('pointer-events', 'none');
        $('#container').css('cursor', 'default');
        $('#' + this.idAcive).removeClass('img_active');
        $('#' + id).addClass('img_active');
        this.idAcive = id;
        idShapeActive = id;
    },
    OnPen: function (id) {
        $(".class-acticon-draw").removeClass('img_active');
        this.isPaint = false;
        this.mouseStatus = "up";
        $('#container').css('pointer-events', 'auto');
        $('#container').css('cursor', 'url("Content/images/cursors/pen.ico") 7 25, auto');
        $('#' + this.idAcive).removeClass('img_active');
        $('#' + id).addClass('img_active');
        this.idAcive = id;
        idShapeActive = id;
        this.mode = 'brush';
        this.context.globalCompositeOperation = 'source-over';
        this.context.globalAlpha = 1;
        this.context.lineJoin = 'round';

    },
    OnHighLight: function (id) {
        $(".class-acticon-draw").removeClass('img_active');
        this.isPaint = false;
        this.mouseStatus = "up";
        $('#container').css('pointer-events', 'auto');
        $('#container').css('cursor', 'url("Content/images/cursors/hightlight.ico") 7 27, auto');
        $('#' + this.idAcive).removeClass('img_active');
        $('#' + id).addClass('img_active');
        this.idAcive = id;
        this.mode = 'highlight';
        idShapeActive = id;
        this.context.globalCompositeOperation = 'source-over';
        this.context.globalAlpha = 0.5;
        this.context.lineJoin = 'bevel';

    },
    OnEraserDraw: function (id) {
        $(".class-acticon-draw").removeClass('img_active');

        this.isPaint = false;
        this.mouseStatus = "up";
        $('#container').css('pointer-events', 'auto');
        $('#container').css('cursor', 'url("Content/images/cursors/eraser.ico") 7 24, auto');
        $('.content-container').css('pointer-events', 'auto ');
        $('#' + this.idAcive).removeClass('img_active');
        $('#' + id).addClass('img_active');

        this.idAcive = id;
        idShapeActive = id;
        this.mode = 'eraser';


        this.context.globalCompositeOperation = 'destination-out';
        this.context.globalAlpha = 1;
        this.context.lineJoin = 'round';
        this.context.lineWidth = 16;

    },
    DeleteDraw: function (id) {
        this.isPaint = false;
        this.mouseStatus = "up";
        this.listDrawingData[PageCurrent].undoObj = new ToolObj([], [], []);
        this.listDrawingData[PageCurrent].redoObj = new ToolObj([], [], []);
        this.updateLocalStorage();
        this.EnableRedo(false);
        this.EnableUndo(false);
        this.CheckUndoRedo();

        this.image.clearCache();
        this.layer.clear();
        this.stage.clear();

        if (this.stage.children[0].children.length > 1) {
            var i = this.stage.children[0].children.length;
            while (i > 1) {
                i = this.stage.children[0].children.length - 1;
                this.stage.children[0].children[i].remove();
            }
        }
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
        this.stage.draw();
    },
    DrawShape: function (id) {
        this.isPaint = false;
        this.mouseStatus = "up";
        $(".class-acticon-draw").removeClass('img_active');

        $('#container').css('pointer-events', 'auto');

        $('#' + this.idAcive).removeClass('img_active');

        idShapeActive = id;
        this.idAcive = id;
        $('#' + id).addClass('img_active');
        if (idShapeActive == 'draw_out_rect') {
            $('#container').css('cursor', 'url("/Content/images/cursors/rectangle2.ico") 16 16, auto');

        };
        if (idShapeActive == 'draw_in_rect') {
            $('#container').css('cursor', 'url("/Content/images/cursors/rectangle1.ico") 16 16, auto');

        };
        if (idShapeActive == 'draw_out_circle') {

            $('#container').css('cursor', 'url("/Content/images/cursors/circle2.ico") 16 16, auto');
        };
        if (idShapeActive == 'draw_in_circle') {
            $('#container').css('cursor', 'url("/Content/images/cursors/circle1.ico") 16 16, auto');

        };
    },
    setOpacity: function (opacity) {
        for (let i = 1, leni = this.layer.children.length; i < leni; i++) {

            if (this.layer.children[i].attrs["strokeWidth"] == 0 || this.layer.children[i].attrs["strokeWidth"] == undefined) {
                let color = this.layer.children[i].attrs["fill"];
                let color2 = this.hexToRgba(color, this.opacity);
                if (color2 == null) {
                    let rbgArr = color.replace(/[^\d,]/g, '').split(',')
                    let hex = "#" + ("000000" + this.rgbToHex(rbgArr[0], rbgArr[1], rbgArr[2])).slice(-6);
                    color2 = this.hexToRgba(hex, this.opacity);
                }
                this.layer.children[i].attrs["fill"] = color2;
            } else {
                let color = this.layer.children[i].attrs["stroke"];
                let color2 = this.hexToRgba(color, this.opacity);
                if (color2 == null) {
                    let rbgArr = color.replace(/[^\d,]/g, '').split(',')
                    let hex = "#" + ("000000" + this.rgbToHex(rbgArr[0], rbgArr[1], rbgArr[2])).slice(-6);
                    color2 = this.hexToRgba(hex, this.opacity);
                }
                this.layer.children[i].attrs["stroke"] = color2;
            }

        }
        this.stage.draw();
    },
    registerStageEvent: function () {
        this.ToolObj = new ToolObj([], [], []);
        this.CheckUndoRedo();
        this.idAcive = "arrow"
        this.isPaint = false;
        this.lastPointerPosition;
        this.mode = 'brush';
        this.penSize = 3;
        $("#sizeCurrent").text(this.penSize);
        this.eraserSize = 22;
        this.highlightSize = 3;
        this.mouseStatus = "up";
        this.colorSelect = "#231f20";
        $("#idPenContent").find(".tool-color .box-size").css("background-color", this.colorSelect);
        $("#idPenContent").find(".class-clolor-tool-bar div").css("background-color", this.colorSelect);
        this.opacity = this.getOpacityByLocalStorage();
        this.idShapeActive = "";

        this.ResetMouse("arrow");
        this.posStartArray = [];
        this.posEndArray = [];

        //var width_final = 0, heigth_final = 0;

        ////let h = window.innerHeight;
        ////let w = window.innerWidth;
        ////if (w / h > 1024 / 768) {
        ////    w = h * (1024 / 768);
        ////} else {
        ////    h = (w) * (768 / (1024));

        ////}

        ////if (width / height > 987 / 676) {
        ////    width = height * (987 / 676);
        ////} else {
        ////    height = (width) * (676 / (987));
        ////}

        let contentWidth = $('.book-content').width();
        let contentHeight = $('.book-content').height();
        let totalPage = $('#flipbook').turn('pages');

        if (read_single_page == false && ( PageCurrent == 0 || PageCurrent == 1 || (PageCurrent >= totalPage && totalPage % 2 == 0))) {
            contentWidth = contentWidth / 2;
        }
       
        this.stage = new Konva.Stage({
            container: 'container',
            width: contentWidth,
            height: contentHeight
        });
        this.layer = new Konva.Layer();
        this.stage.add(this.layer);

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.stage.width();
        this.canvas.height = this.stage.height();
        this.image = new Konva.Image({
            image: this.canvas,
            x: 0,
            y: 0
        });
        this.layer.add(this.image);
        this.stage.draw();
        this.context = this.canvas.getContext('2d');

        this.stage.on('mousedown touchstart', () => {
            this.isPaint = true;
            this.mouseStatus = "down";
            this.lastPointerPosition = this.stage.getPointerPosition();
            if (this.idAcive == "text") {

            } else {
                var list1 = ['draw_out_rect', 'draw_in_rect', 'draw_out_circle', 'draw_in_circle'];
                if (list1.includes(idShapeActive)) {
                    $('#shape').remove();
                    var top = this.lastPointerPosition.y;
                    var left = this.lastPointerPosition.x;
                    $('#container').append('<div id="shape" style ="top:' + top + 'px;left:' + left + 'px;"></div>');
                }
            }
        });
        this.stage.on('mousemove touchmove', () => {

            if (!this.isPaint) {
                return;
            }
            lists = ['pen', 'eraser', 'highlight'];
            if (lists.includes(this.idAcive)) {
                if (this.mode === 'brush') {
                    this.context.strokeStyle = this.colorSelect;
                    this.context.lineWidth = this.penSize;
                }
                if (this.mode === 'eraser') {
                    this.context.lineWidth = 22;
                }
                if (this.mode == 'highlight') {
                    this.context.strokeStyle = this.colorSelect;
                    this.context.lineWidth = this.penSize;
                }

                this.context.beginPath();
                var localPos = {
                    x: this.lastPointerPosition.x - this.image.x(),
                    y: this.lastPointerPosition.y - this.image.y()
                };
                this.context.moveTo(localPos.x, localPos.y);
                this.posStartArray.push(new position(localPos.x, localPos.y));
                this.EnableUndo(true);
                this.EnableRedo(false);

                var pos = this.stage.getPointerPosition();
                localPos = {
                    x: pos.x - this.image.x(),
                    y: pos.y - this.image.y()
                };
                this.context.lineTo(localPos.x, localPos.y);
                this.context.closePath();
                this.context.stroke();
                this.posEndArray.push(new position(localPos.x, localPos.y));
                this.lastPointerPosition = pos;
                this.layer.batchDraw();

            }
            else {
                list1 = ['draw_out_rect', 'draw_in_rect', 'draw_out_circle', 'draw_in_circle'];
                if (list1.includes(idShapeActive)) {
                    var pos = this.stage.getPointerPosition();
                    localPos = {
                        x: pos.x - this.image.x(),
                        y: pos.y - this.image.y()
                    };

                    let w = (localPos.x - this.lastPointerPosition.x) + "px";
                    let h = (localPos.y - this.lastPointerPosition.y) + "px";

                    $('#shape').css('width', w);
                    $('#shape').css('height', h);
                    list2 = ['draw_out_circle', 'draw_in_circle']; 
                    if (list2.includes(idShapeActive)) {
                        $('#shape').css('border-radius', '50%');
                    }
                }
            }
        });

        this.stage.on('mouseup touchend', () => {
            this.isPaint = false;
            this.mouseStatus = "up";
            lists1 = ['draw_out_rect', 'draw_in_rect', 'draw_out_circle', 'draw_in_circle'];

            let undoObj = new ToolObj([], [], []);
            if (this.listDrawingData[PageCurrent] != undefined &&
                this.listDrawingData[PageCurrent].undoObj != undefined) {
                undoObj = this.listDrawingData[PageCurrent].undoObj
            }

            let redoObj = new ToolObj([], [], []);
            if (this.listDrawingData[PageCurrent] != undefined &&
                this.listDrawingData[PageCurrent].redoObj != undefined) {
                redoObj = this.listDrawingData[PageCurrent].redoObj
            }
            let page = $('#flipbook').turn('page');
            let totalPage = $('#flipbook').turn('pages');
            lists2 = ['pen', 'eraser', 'highlight'];
            if (lists2.includes(this.idAcive)) {
      

                if (read_single_page == true && page % 2 != 0 && page != 1) {
                    let cenPos = $('.book-content').width();
                    this.posStartArray.forEach(item => item.x = item.x + cenPos);
                    this.posEndArray.forEach(item => item.x = item.x + cenPos);
                }
                undoObj.stepArray.push(
                    new PenObj(this.context.globalAlpha,
                        this.colorSelect,
                        this.context.globalCompositeOperation,
                        this.context.lineJoin,
                        this.context.lineWidth,
                        this.posStartArray,
                        this.posEndArray));

                undoObj.act.push('add');
                undoObj.type.push(this.idAcive);
                this.posStartArray = [];
                this.posEndArray = [];
                penRedoArray = [];

            }
            if (lists1.includes(idShapeActive)) {
                $('#shape').remove();
                this.EnableUndo(true);
                this.EnableRedo(false);
                var localPos = {
                    x: this.lastPointerPosition.x - this.image.x(),
                    y: this.lastPointerPosition.y - this.image.y()
                };
                this.context.moveTo(localPos.x, localPos.y);
                var pos = this.stage.getPointerPosition();

                if (pos.x - this.lastPointerPosition.x > 0 && pos.y - this.lastPointerPosition.y > 0) {

                    if (idShapeActive == 'draw_out_rect') {
                        let color = this.hexToRgba(this.colorSelect, this.opacity);
                        if (color == null) {
                            color = this.colorSelect.replace(")", "," + this.opacity + ")");
                        }
                        if (read_single_page == true && page % 2 != 0 && page != 1) {
                            let cenPos = $('.book-content').width();
                            var rect2 = new Konva.Rect({
                                x: this.lastPointerPosition.x - 3000,
                                y: this.lastPointerPosition.y - 3000,
                                width: pos.x - this.lastPointerPosition.x + 6000,
                                height: pos.y - this.lastPointerPosition.y + 6000,
                                fill: 'rgba(255,255,255,0.0001)',
                                fillEnabled: false,
                                stroke: color,
                                strokeWidth: 6000,
                                draggable: false
                            });
                            var rect2New = new Konva.Rect({
                                x: cenPos + this.lastPointerPosition.x - 3000,
                                y: this.lastPointerPosition.y - 3000,
                                width: pos.x - this.lastPointerPosition.x + 6000,
                                height: pos.y - this.lastPointerPosition.y + 6000,
                                fill: 'rgba(255,255,255,0.0001)',
                                fillEnabled: false,
                                stroke: color,
                                strokeWidth: 6000,
                                draggable: false
                            });
                            this.layer.add(rect2);
                            undoObj.stepArray.push(new ShapeObj(rect2New));
                            undoObj.act.push('add');
                            undoObj.type.push('shape');
                            this.EnableUndo(true);
                            rect2.off("mousemove").on('mousemove ', (e) => {
                                if (this.idAcive == "eraser") {
                                    if (this.mouseStatus == "down") {
                                        rect2.remove();
                                        undoObj.stepArray.push(new ShapeObj(rect2New));
                                        undoObj.act.push('delete');
                                        undoObj.type.push('shape');
                                        this.CheckUndoRedo();
                                        this.stage.draw();
                                    }
                                }
                            });
                            rect2.on('click ', (e) => {
                                if (this.idAcive == "eraser") {
                                    rect2.remove();
                                    undoObj.stepArray.push(new ShapeObj(rect2New));
                                    undoObj.act.push('delete');
                                    undoObj.type.push('shape');

                                    this.CheckUndoRedo();
                                    this.stage.draw();
                                }
                            });
                        }
                        else {
                            var rect2 = new Konva.Rect({
                                x: this.lastPointerPosition.x - 3000,
                                y: this.lastPointerPosition.y - 3000,
                                width: pos.x - this.lastPointerPosition.x + 6000,
                                height: pos.y - this.lastPointerPosition.y + 6000,
                                fill: 'rgba(255,255,255,0.0001)',
                                fillEnabled: false,
                                stroke: color,
                                strokeWidth: 6000,
                                draggable: false
                            });
                            this.layer.add(rect2);
                            undoObj.stepArray.push(new ShapeObj(rect2));
                            undoObj.act.push('add');
                            undoObj.type.push('shape');
                            this.EnableUndo(true);
                            rect2.off("mousemove").on('mousemove ', (e) => {
                                if (this.idAcive == "eraser") {
                                    if (this.mouseStatus == "down") {
                                        rect2.remove();
                                        undoObj.stepArray.push(new ShapeObj(rect2));
                                        undoObj.act.push('delete');
                                        undoObj.type.push('shape');
                                        this.CheckUndoRedo();
                                        this.stage.draw();
                                    }
                                }
                            });
                            rect2.on('click ', (e) => {
                                if (this.idAcive == "eraser") {
                                    rect2.remove();
                                    undoObj.stepArray.push(new ShapeObj(rect2));
                                    undoObj.act.push('delete');
                                    undoObj.type.push('shape');

                                    this.CheckUndoRedo();
                                    this.stage.draw();
                                }
                            });
                        }


                       


                    }
                    else if (idShapeActive == 'draw_in_rect') {
                        let color = this.hexToRgba(this.colorSelect, this.opacity)
                        if (color == null) {
                            color = this.colorSelect.replace(")", "," + this.opacity + ")");
                        }
                        if (read_single_page == true && page % 2 != 0 && page != 1) {
                            let cenPos = $('.book-content').width();
                            var rect1 = new Konva.Rect({
                                x: this.lastPointerPosition.x,
                                y:  this.lastPointerPosition.y,
                                width: pos.x - this.lastPointerPosition.x,
                                height: pos.y - this.lastPointerPosition.y,
                                fill: color,
                                strokeWidth: 0,
                                draggable: false
                            });
                            this.layer.add(rect1);
                            var rect1New = new Konva.Rect({
                                x: cenPos + this.lastPointerPosition.x,
                                y: this.lastPointerPosition.y,
                                width: pos.x - this.lastPointerPosition.x,
                                height: pos.y - this.lastPointerPosition.y,
                                fill: color,
                                strokeWidth: 0,
                                draggable: false
                            });
                           
                            undoObj.stepArray.push(new ShapeObj(rect1New));
                            undoObj.act.push('add');
                            undoObj.type.push('shape');

                            this.EnableUndo(true);
                            rect1.on('mouseenter ', () => {
                                if (this.idAcive == "eraser") {
                                    if (this.mouseStatus == "down") {
                                        rect1.remove();
                                        undoObj.stepArray.push(new ShapeObj(rect1New));
                                        undoObj.act.push('delete');
                                        undoObj.type.push('shape');

                                        this.CheckUndoRedo();
                                        this.stage.draw();
                                    }
                                }
                            });
                            rect1.on('click', () => {
                                if (this.idAcive == "eraser") {
                                    rect1.remove();
                                    undoObj.stepArray.push(new ShapeObj(rect1New));
                                    undoObj.act.push('delete');
                                    undoObj.type.push('shape');
                                    this.CheckUndoRedo();
                                    this.stage.draw();
                                }
                            });
                        }
                        else {
                            var rect1 = new Konva.Rect({
                                x: this.lastPointerPosition.x,
                                y: this.lastPointerPosition.y,
                                width: pos.x - this.lastPointerPosition.x,
                                height: pos.y - this.lastPointerPosition.y,
                                fill: color,
                                strokeWidth: 0,
                                draggable: false
                            });

                            this.layer.add(rect1);
                            undoObj.stepArray.push(new ShapeObj(rect1));
                            undoObj.act.push('add');
                            undoObj.type.push('shape');

                            this.EnableUndo(true);
                            rect1.on('mouseenter ', () => {
                                if (this.idAcive == "eraser") {
                                    if (this.mouseStatus == "down") {
                                        rect1.remove();
                                        undoObj.stepArray.push(new ShapeObj(rect1));
                                        undoObj.act.push('delete');
                                        undoObj.type.push('shape');

                                        this.CheckUndoRedo();
                                        this.stage.draw();
                                    }
                                }
                            });
                            rect1.on('click', () => {
                                if (this.idAcive == "eraser") {
                                    rect1.remove();
                                    undoObj.stepArray.push(new ShapeObj(rect1));
                                    undoObj.act.push('delete');
                                    undoObj.type.push('shape');
                                    this.CheckUndoRedo();
                                    this.stage.draw();
                                }
                            });
                        }
                        


                    }
                    else if (idShapeActive == 'draw_out_circle') {
                        let color = this.hexToRgba(this.colorSelect, this.opacity)
                        if (color == null) {
                            color = this.colorSelect.replace(")", "," + this.opacity + ")");
                        }
                        if (read_single_page == true && page % 2 != 0 && page != 1) {
                            let cenPos = $('.book-content').width();
                            var oval = new Konva.Ellipse({
                                x: (this.lastPointerPosition.x + (pos.x - this.lastPointerPosition.x) / 2),
                                y: (this.lastPointerPosition.y + (pos.y - this.lastPointerPosition.y) / 2),
                                radiusX: (pos.x - this.lastPointerPosition.x) / 2 + 3000,
                                radiusY: (pos.y - this.lastPointerPosition.y) / 2 + 3000,
                                fill: '#ffffff',
                                fillEnabled: false,
                                stroke: color,
                                strokeWidth: 6000
                            });
                            var ovalNew = new Konva.Ellipse({
                                x: cenPos + (this.lastPointerPosition.x + (pos.x - this.lastPointerPosition.x) / 2),
                                y: (this.lastPointerPosition.y + (pos.y - this.lastPointerPosition.y) / 2),
                                radiusX: (pos.x - this.lastPointerPosition.x) / 2 + 3000,
                                radiusY: (pos.y - this.lastPointerPosition.y) / 2 + 3000,
                                fill: '#ffffff',
                                fillEnabled: false,
                                stroke: color,
                                strokeWidth: 6000
                            });
                            oval.fill('rgba(255,255,255,0');

                            this.layer.add(oval);
                            undoObj.stepArray.push(new ShapeObj(ovalNew));
                            undoObj.act.push('add');
                            undoObj.type.push('shape');
                            this.EnableUndo(true);

                            oval.on('mousemove ', (e) => {
                                if (this.idAcive == "eraser") {
                                    if (this.mouseStatus == "down") {
                                        oval.remove();
                                        undoObj.stepArray.push(new ShapeObj(ovalNew));
                                        undoObj.act.push('delete');
                                        undoObj.type.push('shape');

                                        this.CheckUndoRedo();
                                        this.stage.draw();
                                    }
                                }
                            });
                            oval.on('click', (e) => {
                                if (this.idAcive == "eraser") {
                                    oval.remove();
                                    undoObj.stepArray.push(new ShapeObj(ovalNew));
                                    undoObj.act.push('delete');
                                    undoObj.type.push('shape');
                                    this.CheckUndoRedo();
                                    this.stage.draw();
                                }
                            });
                        }
                        else {
                            var oval = new Konva.Ellipse({
                                x: (this.lastPointerPosition.x + (pos.x - this.lastPointerPosition.x) / 2),
                                y: (this.lastPointerPosition.y + (pos.y - this.lastPointerPosition.y) / 2),
                                radiusX: (pos.x - this.lastPointerPosition.x) / 2 + 3000,
                                radiusY: (pos.y - this.lastPointerPosition.y) / 2 + 3000,
                                fill: '#ffffff',
                                fillEnabled: false,
                                stroke: color,
                                strokeWidth: 6000
                            });
                            oval.fill('rgba(255,255,255,0');

                            this.layer.add(oval);
                            undoObj.stepArray.push(new ShapeObj(oval));
                            undoObj.act.push('add');
                            undoObj.type.push('shape');
                            this.EnableUndo(true);

                            oval.on('mousemove ', (e) => {
                                if (this.idAcive == "eraser") {
                                    if (this.mouseStatus == "down") {
                                        oval.remove();
                                        undoObj.stepArray.push(new ShapeObj(oval));
                                        undoObj.act.push('delete');
                                        undoObj.type.push('shape');

                                        this.CheckUndoRedo();
                                        this.stage.draw();
                                    }
                                }
                            });
                            oval.on('click', (e) => {
                                if (this.idAcive == "eraser") {
                                    oval.remove();
                                    undoObj.stepArray.push(new ShapeObj(oval));
                                    undoObj.act.push('delete');
                                    undoObj.type.push('shape');
                                    this.CheckUndoRedo();
                                    this.stage.draw();
                                }
                            });
                        }
                       


                        

                    }
                    else if ((idShapeActive == 'draw_in_circle')) {
                        let color = this.hexToRgba(this.colorSelect, this.opacity)
                        if (color == null) {
                            color = this.colorSelect.replace(")", "," + this.opacity + ")");
                        }
                        var a = (pos.y - this.lastPointerPosition.y) * (pos.y - this.lastPointerPosition.y) / 4;
                        var b = (pos.x - this.lastPointerPosition.x) * (pos.x - this.lastPointerPosition.x) / 4;
                        if (read_single_page == true && page % 2 != 0 && page != 1) {
                            let cenPos = $('.book-content').width();
                            var oval = new Konva.Ellipse({
                                x: this.lastPointerPosition.x + ((pos.x - this.lastPointerPosition.x) / 2),
                                y: this.lastPointerPosition.y + (pos.y - this.lastPointerPosition.y) / 2,
                                radiusX: (pos.x - this.lastPointerPosition.x) / 2,
                                radiusY: (pos.y - this.lastPointerPosition.y) / 2,
                                fill: color,
                                stroke: '#000000',
                                strokeWidth: 0
                            });
                            var ovalNew = new Konva.Ellipse({
                                x: cenPos + (this.lastPointerPosition.x + ((pos.x - this.lastPointerPosition.x) / 2)),
                                y: this.lastPointerPosition.y + (pos.y - this.lastPointerPosition.y) / 2,
                                radiusX: (pos.x - this.lastPointerPosition.x) / 2,
                                radiusY: (pos.y - this.lastPointerPosition.y) / 2,
                                fill: color,
                                stroke: '#000000',
                                strokeWidth: 0
                            });
                            this.layer.add(oval);
                            undoObj.stepArray.push(new ShapeObj(ovalNew));
                            undoObj.act.push('add');
                            undoObj.type.push('shape');
                            this.EnableUndo(true);

                            oval.on('mousemove', () => {
                                if (this.idAcive == "eraser") {
                                    if (this.mouseStatus == "down") {
                                        oval.remove();
                                        undoObj.stepArray.push(new ShapeObj(ovalNew));
                                        undoObj.act.push('delete');
                                        undoObj.type.push('shape');
                                        this.CheckUndoRedo();
                                        this.stage.draw();
                                    }

                                }
                            });
                            oval.on('click', () => {
                                if (this.idAcive == "eraser") {
                                    oval.remove();
                                    undoObj.stepArray.push(new ShapeObj(ovalNew));
                                    undoObj.act.push('delete');
                                    undoObj.type.push('shape');
                                    this.CheckUndoRedo();
                                    this.stage.draw();

                                }
                            });

                           
                        }
                        else {
                            var oval = new Konva.Ellipse({
                                x: this.lastPointerPosition.x + ((pos.x - this.lastPointerPosition.x) / 2),
                                y: this.lastPointerPosition.y + (pos.y - this.lastPointerPosition.y) / 2,
                                radiusX: (pos.x - this.lastPointerPosition.x) / 2,
                                radiusY: (pos.y - this.lastPointerPosition.y) / 2,
                                fill: color,
                                stroke: '#000000',
                                strokeWidth: 0
                            });
                            this.layer.add(oval);
                            undoObj.stepArray.push(new ShapeObj(oval));
                            undoObj.act.push('add');
                            undoObj.type.push('shape');
                            this.EnableUndo(true);

                            oval.on('mousemove', () => {
                                if (this.idAcive == "eraser") {
                                    if (this.mouseStatus == "down") {
                                        oval.remove();
                                        undoObj.stepArray.push(new ShapeObj(oval));
                                        undoObj.act.push('delete');
                                        undoObj.type.push('shape');
                                        this.CheckUndoRedo();
                                        this.stage.draw();
                                    }

                                }
                            });
                            oval.on('click', () => {
                                if (this.idAcive == "eraser") {
                                    oval.remove();
                                    undoObj.stepArray.push(new ShapeObj(oval));
                                    undoObj.act.push('delete');
                                    undoObj.type.push('shape');
                                    this.CheckUndoRedo();
                                    this.stage.draw();

                                }
                            });
                        }
                       

                    }
                }
            }
            this.context.closePath();
            this.context.stroke();
            this.lastPointerPosition = pos;
            this.layer.batchDraw();
            this.updateDrawingDataOnChange(undoObj, redoObj);
        });
    },
    compareShape: function (shape1, shape2) {
        if (shape2.hasOwnProperty('x')) {
            if (shape1.x == shape2.x &&
                shape1.y == shape2.y &&
                shape1.width == shape2.width &&
                //shape1.stroke == shape2.stroke &&
                shape1.strokeWidth == shape2.strokeWidth) {
                return true;
            }
        }
        if (shape2.hasOwnProperty('attrs')) {
            if (shape1.x == shape2.attrs.x &&
                shape1.y == shape2.attrs.y &&
                shape1.width == shape2.attrs.width &&
                //shape1.stroke == shape2.attrs.stroke &&
                shape1.strokeWidth == shape2.attrs.strokeWidth) {
                return true;
            }
        }
        return false;
    },
    updateDrawingDataOnChange: function (undoObj, redoObj) {
        if (this.listDrawingData[PageCurrent] == undefined) {
            this.listDrawingData[PageCurrent] = {};
        }

        if (PageCurrent % 2 == 0) {
            if (this.listDrawingData[PageCurrent + 1] == undefined) {
                this.listDrawingData[PageCurrent + 1] = {};
            }
        } else {
            if (this.listDrawingData[PageCurrent - 1] == undefined) {
                this.listDrawingData[PageCurrent - 1] = {};
            }
        }

        this.listDrawingData[PageCurrent].undoObj = undoObj;
        this.listDrawingData[PageCurrent].redoObj = redoObj;
        if (PageCurrent != 1) {
            if (PageCurrent % 2 == 0) {
                this.listDrawingData[PageCurrent + 1].undoObj = undoObj;
                this.listDrawingData[PageCurrent + 1].redoObj = redoObj;
            } else {
                this.listDrawingData[PageCurrent - 1].undoObj = undoObj;
                this.listDrawingData[PageCurrent - 1].redoObj = redoObj;
            }

        }
        
        this.updateLocalStorage();

    },
    removeEndElementToArray: function (undoObj) {
        undoObj.stepArray.length = undoObj.stepArray.length - 1;
        undoObj.type.length = undoObj.type.length - 1;
        undoObj.act.length = undoObj.act.length - 1;
    },
    EnableUndo: function (key) {
        if (key) {
            $('#' + 'id_undo').css('opacity', '1');
            $('#' + 'id_undo').css('pointer-events', 'auto');
        } else {
            $('#' + 'id_undo').css('opacity', '0.5');
            $('#' + 'id_undo').css('pointer-events', 'none');
        }
    },
    EnableRedo: function (key) {
        if (key) {
            $('#' + 'id_redo').css('opacity', '1');
            $('#' + 'id_redo').css('pointer-events', 'auto');
        } else {
            $('#' + 'id_redo').css('opacity', '0.5');
            $('#' + 'id_redo').css('pointer-events', 'none');
        }
    },
    CheckUndoRedo: function () {
        var drawingData = this.listDrawingData[PageCurrent];
        if (drawingData != null && drawingData != undefined && drawingData.undoObj != undefined && drawingData.redoObj != undefined) {
            let undoObj = this.listDrawingData[PageCurrent].undoObj;
            let redoObj = this.listDrawingData[PageCurrent].redoObj;
            this.updateDrawingDataOnChange(undoObj, redoObj);
        }
        if (drawingData == undefined) {
            this.EnableRedo(false);
            this.EnableUndo(false);
            return;
        }

        if (drawingData.redoObj == undefined || drawingData.redoObj.act.length <= 0) {
            this.EnableRedo(false);
        } else {
            this.EnableRedo(true);
        }
        if (drawingData.undoObj == undefined || drawingData.undoObj.act.length <= 0) {
            this.EnableUndo(false);
        } else {
            this.EnableUndo(true);
        }
    },
    UndoToRedo: function (i) {
        let undoObj = this.listDrawingData[PageCurrent].undoObj;
        this.listDrawingData[PageCurrent].redoObj.act.push(undoObj.act[i]);
        this.listDrawingData[PageCurrent].redoObj.type.push(undoObj.type[i]);
        this.listDrawingData[PageCurrent].redoObj.stepArray.push(undoObj.stepArray[i]);
    },
    RedoToUndo: function (i) {
        let redoObj = this.listDrawingData[PageCurrent].redoObj;

        this.listDrawingData[PageCurrent].undoObj.act.push(redoObj.act[i]);
        this.listDrawingData[PageCurrent].undoObj.type.push(redoObj.type[i]);
        this.listDrawingData[PageCurrent].undoObj.stepArray.push(redoObj.stepArray[i]);
    },
    OnUndo: function (id) {
        this.isPaint = false;
        this.mouseStatus = "up";
        this.EnableRedo(true);
        //let redoObj = listDrawingData[PageCurrent].redoObj;
        let undoObj = this.listDrawingData[PageCurrent].undoObj;
        let promise = new Promise((resolve, reject) => {
            if (undoObj.type[undoObj.type.length - 1] == 'pen' || undoObj.type[undoObj.type.length - 1] == 'highlight' || undoObj.type[undoObj.type.length - 1] == 'eraser') {
                let globalAlpha = this.context.globalAlpha;
                let strokeStyle = this.context.strokeStyle;
                let globalCompositeOperation = this.context.globalCompositeOperation;
                let lineJoin = this.context.lineJoin;
                let lineWidth = this.context.lineWidth;


                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.context.beginPath();
                this.stage.draw();
                for (var j = 0, l = undoObj.stepArray.length - 1; j < l; j++) {
                    if (undoObj.type[j] == 'shape') {
                        continue;
                    }
                    this.context.globalAlpha = undoObj.stepArray[j].alpha;
                    this.context.strokeStyle = undoObj.stepArray[j].color;
                    this.context.globalCompositeOperation = undoObj.stepArray[j].compositeOperation;
                    this.context.lineJoin = undoObj.stepArray[j].lineJoin;
                    this.context.lineWidth = undoObj.stepArray[j].lineWidth;

                    for (var i = 0, len = undoObj.stepArray[j].posStart.length; i < len; i++) {
                        this.context.beginPath();
                        this.context.moveTo(undoObj.stepArray[j].posStart[i].x, undoObj.stepArray[j].posStart[i].y);
                        this.context.lineTo(undoObj.stepArray[j].posEnd[i].x, undoObj.stepArray[j].posEnd[i].y);
                        this.context.closePath();
                        this.context.stroke();
                        this.layer.batchDraw();
                    }

                }
                this.context.globalAlpha = globalAlpha;
                this.context.strokeStyle = strokeStyle;
                this.context.globalCompositeOperation = globalCompositeOperation;
                this.context.lineJoin = lineJoin;
                this.context.lineWidth = lineWidth;

                this.UndoToRedo(undoObj.type.length - 1);
                undoObj.stepArray.splice(undoObj.stepArray.length - 1, 1);
                undoObj.act.splice(undoObj.act.length - 1, 1);
                undoObj.type.splice(undoObj.type.length - 1, 1);
                this.stage.draw();
            } else {
                if (undoObj.act[undoObj.act.length - 1] == 'add') {
                    var i = this.layer.children.length - 1;
                    while (i >= 1) {
                        if (this.compareShape(
                            undoObj.stepArray[undoObj.stepArray.length - 1].shape,
                            this.layer.children[i])) {
                            this.layer.children[i].remove();
                            undoObj.act[i] == 'delete';
                            this.UndoToRedo(undoObj.type.length - 1);
                            undoObj.stepArray.splice(undoObj.stepArray.length - 1, 1);
                            undoObj.act.splice(undoObj.act.length - 1, 1);
                            undoObj.type.splice(undoObj.type.length - 1, 1);
                            this.stage.draw();
                            break;
                        }
                        i--;
                    }
                } else {
                    //this.layer.add(undoObj.stepArray[undoObj.stepArray.length - 1].shape);
                    this.drawShape(undoObj, undoObj.stepArray[undoObj.stepArray.length - 1].shape);
                    undoObj.act[i] == 'add';
                    this.UndoToRedo(undoObj.type.length - 1);
                    undoObj.stepArray.splice(undoObj.stepArray.length - 1, 1);
                    undoObj.act.splice(undoObj.act.length - 1, 1);
                    undoObj.type.splice(undoObj.type.length - 1, 1);
                    if (undoObj.type[undoObj.type.length - 1] == 'eraser' && undoObj.act[undoObj.type.length - 1] == 'add') { //vì là delete shape nên xóa luôn phần tử add eraser phía trước 
                        undoObj.stepArray.splice(undoObj.stepArray.length - 1, 1);
                        undoObj.act.splice(undoObj.act.length - 1, 1);
                        undoObj.type.splice(undoObj.type.length - 1, 1);
                    }
                    //this.stage.draw();
                }
                this.setOpacity(this.opacity);
            }
            this.CheckUndoRedo();
        });
    },
    OnRedo: function (id) {
        this.isPaint = false;
        this.mouseStatus = "up";
        this.EnableRedo(true);
        //let undoObj = listDrawingData[PageCurrent].undoObj;
        let redoObj = this.listDrawingData[PageCurrent].redoObj;
        let undoObj = this.listDrawingData[PageCurrent].undoObj;
        let promise = new Promise((resolve, reject) => {
            if (redoObj.type[redoObj.type.length - 1] == 'pen' || redoObj.type[redoObj.type.length - 1] == 'highlight' || redoObj.type[redoObj.type.length - 1] == 'eraser') {
                let globalAlpha = this.context.globalAlpha;
                let strokeStyle = this.context.strokeStyle;
                let globalCompositeOperation = this.context.globalCompositeOperation;
                let lineJoin = this.context.lineJoin;
                let lineWidth = this.context.lineWidth;

                var j = redoObj.stepArray.length - 1;
                this.context.globalAlpha = redoObj.stepArray[j].alpha;
                this.context.strokeStyle = redoObj.stepArray[j].color;
                this.context.globalCompositeOperation = redoObj.stepArray[j].compositeOperation;
                this.context.lineJoin = redoObj.stepArray[j].lineJoin;
                this.context.lineWidth = redoObj.stepArray[j].lineWidth;

                for (var i = 0, len = redoObj.stepArray[j].posStart.length; i < len; i++) {
                    this.context.beginPath();
                    this.context.moveTo(redoObj.stepArray[j].posStart[i].x, redoObj.stepArray[j].posStart[i].y);
                    this.context.lineTo(redoObj.stepArray[j].posEnd[i].x, redoObj.stepArray[j].posEnd[i].y);
                    this.context.closePath();
                    this.context.stroke();
                    this.layer.batchDraw();
                }
                this.context.globalAlpha = globalAlpha;
                this.context.strokeStyle = strokeStyle;
                this.context.globalCompositeOperation = globalCompositeOperation;
                this.context.lineJoin = lineJoin;
                this.context.lineWidth = lineWidth;


                //penUndoArray.push(penRedoArray[penRedoArray.length - 1]);
                //penRedoArray.splice(penRedoArray.length - 1, 1);
                this.RedoToUndo(redoObj.type.length - 1);
                redoObj.stepArray.splice(redoObj.stepArray.length - 1, 1);
                redoObj.act.splice(redoObj.act.length - 1, 1);
                redoObj.type.splice(redoObj.type.length - 1, 1);
                this.stage.draw();
            } else {
                if (redoObj.act[redoObj.act.length - 1] != 'add') {
                    var i = this.layer.children.length - 1;
                    while (i >= 1) {
                        if (this.compareShape(redoObj.stepArray[redoObj.stepArray.length - 1].shape,
                            this.layer.children[i])) {
                            this.layer.children[i].remove();
                            this.RedoToUndo(redoObj.type.length - 1);
                            redoObj.stepArray.splice(redoObj.stepArray.length - 1, 1);
                            redoObj.act.splice(redoObj.act.length - 1, 1);
                            redoObj.type.splice(redoObj.type.length - 1, 1);
                            this.stage.draw();
                            break;
                        }
                        i--;
                    }
                } else {
                    //this.layer.add(redoObj.stepArray[redoObj.stepArray.length - 1].shape);
                    this.drawShape(redoObj, redoObj.stepArray[redoObj.stepArray.length - 1].shape);
                    this.RedoToUndo(redoObj.type.length - 1);
                    redoObj.stepArray.splice(redoObj.stepArray.length - 1, 1);
                    redoObj.act.splice(redoObj.act.length - 1, 1);
                    redoObj.type.splice(redoObj.type.length - 1, 1);
                    //this.stage.draw();
                }
                this.setOpacity(this.opacity);
            }
            this.CheckUndoRedo();
        });
        //updateDrawingDataOnChange(undoObj, redoObj);

    },
    drawShape: function (undoObj, rect) {
        if (rect.radiusX == undefined) {
            var shape = new Konva.Rect(rect);
            if (rect.strokeWidth != 0) {
                shape.on('mouseenter ', () => {
                    if (this.idAcive == "eraser") {
                        if (this.mouseStatus == "down") {
                            shape.remove();
                            if (read_single_page == true && PageCurrent % 2 != 0 && PageCurrent != 1) {
                                let cenPos = $('.book-content').width();
                                shape.attrs.x = shape.attrs.x + cenPos;
                            }
                            this.listDrawingData[PageCurrent].undoObj.stepArray.push(new ShapeObj(shape));
                            this.listDrawingData[PageCurrent].undoObj.act.push('delete');
                            this.listDrawingData[PageCurrent].undoObj.type.push('shape');
                            this.CheckUndoRedo();
                            this.stage.draw();
                        }
                    }
                });
                shape.on('click', () => {
                    if (this.idAcive == "eraser") {
                        shape.remove();
                        if (read_single_page == true && PageCurrent % 2 != 0 && PageCurrent != 1) {
                            let cenPos = $('.book-content').width();
                            shape.attrs.x = shape.attrs.x + cenPos;
                        }
                        this.listDrawingData[PageCurrent].undoObj.stepArray.push(new ShapeObj(shape));
                        this.listDrawingData[PageCurrent].undoObj.act.push('delete');
                        this.listDrawingData[PageCurrent].undoObj.type.push('shape');
                        this.CheckUndoRedo();
                        this.stage.draw();
                    }
                });
            }
            else {
                shape.on('mousemove ', (e) => {
                    if (this.idAcive == "eraser") {
                        if (this.mouseStatus == "down") {
                            shape.remove();
                            if (read_single_page == true && PageCurrent % 2 != 0 && PageCurrent != 1) {
                                let cenPos = $('.book-content').width();
                                shape.attrs.x = shape.attrs.x + cenPos;
                            }
                            this.listDrawingData[PageCurrent].undoObj.stepArray.push(new ShapeObj(shape));
                            this.listDrawingData[PageCurrent].undoObj.act.push('delete');
                            this.listDrawingData[PageCurrent].undoObj.type.push('shape');
                            this.CheckUndoRedo();
                            this.stage.draw();
                        }
                    }
                });
                shape.on('click ', (e) => {
                    if (this.idAcive == "eraser") {
                        shape.remove();
                        if (read_single_page == true && PageCurrent % 2 != 0 && PageCurrent != 1) {
                            let cenPos = $('.book-content').width();
                            shape.attrs.x = shape.attrs.x + cenPos;
                        }
                        this.listDrawingData[PageCurrent].undoObj.stepArray.push(new ShapeObj(shape));
                        this.listDrawingData[PageCurrent].undoObj.act.push('delete');
                        this.listDrawingData[PageCurrent].undoObj.type.push('shape');
                        this.CheckUndoRedo();
                        this.stage.draw();
                    }
                });
            }
            this.layer.add(shape);
        }
        else {
            var oval = new Konva.Ellipse(rect);
            if (rect.strokeWidth != 0) {
                oval.on('mousemove ', (e) => {
                    if (this.idAcive == "eraser") {
                        if (this.mouseStatus == "down") {
                            oval.remove();
                            if (read_single_page == true && PageCurrent % 2 != 0 && PageCurrent != 1) {
                                let cenPos = $('.book-content').width();
                                oval.attrs.x = oval.attrs.x + cenPos;
                            }
                            this.listDrawingData[PageCurrent].undoObj.stepArray.push(new ShapeObj(oval));
                            this.listDrawingData[PageCurrent].undoObj.act.push('delete');
                            this.listDrawingData[PageCurrent].undoObj.type.push('shape');
                            this.CheckUndoRedo();
                            this.stage.draw();

                        }
                    }
                });
                oval.on('click', (e) => {
                    if (this.idAcive == "eraser") {
                        oval.remove();
                        if (read_single_page == true && PageCurrent % 2 != 0 && PageCurrent != 1) {
                            let cenPos = $('.book-content').width();
                            oval.attrs.x = oval.attrs.x + cenPos;
                        }
                        this.listDrawingData[PageCurrent].undoObj.stepArray.push(new ShapeObj(oval));
                        this.listDrawingData[PageCurrent].undoObj.act.push('delete');
                        this.listDrawingData[PageCurrent].undoObj.type.push('shape');
                        this.CheckUndoRedo();
                        this.stage.draw();


                    }
                });
            }
            else {
                oval.on('mousemove', () => {
                    if (this.idAcive == "eraser") {
                        if (this.mouseStatus == "down") {
                            oval.remove();
                            if (read_single_page == true && PageCurrent % 2 != 0 && PageCurrent != 1) {
                                let cenPos = $('.book-content').width();
                                oval.attrs.x = oval.attrs.x + cenPos;
                            }
                            this.listDrawingData[PageCurrent].undoObj.stepArray.push(new ShapeObj(oval));
                            this.listDrawingData[PageCurrent].undoObj.act.push('delete');
                            this.listDrawingData[PageCurrent].undoObj.type.push('shape');
                            this.CheckUndoRedo();
                            this.stage.draw();
                        }
                    }
                });
                oval.on('click', () => {
                    if (this.idAcive == "eraser") {
                        oval.remove();
                        if (read_single_page == true && PageCurrent % 2 != 0 && PageCurrent != 1) {
                            let cenPos = $('.book-content').width();
                            oval.attrs.x = oval.attrs.x + cenPos;
                        }
                        this.listDrawingData[PageCurrent].undoObj.stepArray.push(new ShapeObj(oval));
                        this.listDrawingData[PageCurrent].undoObj.act.push('delete');
                        this.listDrawingData[PageCurrent].undoObj.type.push('shape');
                        this.CheckUndoRedo();
                        this.stage.draw();
                    }
                });
            }
            this.layer.add(oval);
        }
    },
    
    ///color
    rgbToHex: function (r, g, b) {
        if (r > 255 || g > 255 || b > 255)
            throw "Invalid color component";
        return ((r << 16) | (g << 8) | b).toString(16);
    },
    hexToRgba: function (hex, opacity) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ?
            "rgba(" + parseInt(result[1], 16) + "," + parseInt(result[2], 16) + "," + parseInt(result[3], 16) + "," + opacity + ")" : null;
    },
    rgba2hex: function (orig) {
        var a, isPercent,
            rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
            alpha = (rgb && rgb[4] || "").trim(),
            hex = rgb ?
                (rgb[1] | 1 << 8).toString(16).slice(1) +
                (rgb[2] | 1 << 8).toString(16).slice(1) +
                (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

        if (alpha !== "") {
            a = alpha;
        } else {
            a = 01;
        }
        // multiply before convert to HEX
        a = ((a * 255) | 1 << 8).toString(16).slice(1)
        hex = hex + a;

        return hex;
    },
    updateColor: function () {
        var that = this;
        $("#popupColorDraw").find(".grid-item-color").click(function () {
            let color = $(this).css("background-color");
            that.colorSelect = color;
            $("#idPenContent").find(".tool-color .box-size").css("background-color", color);
            $("#idPenContent").find(".class-clolor-tool-bar div").css("background-color", color);

            let rbgArr = color.replace(/[^\d,]/g, '').split(',')
            let hex = "#" + ("000000" + that.rgbToHex(rbgArr[0], rbgArr[1], rbgArr[2])).slice(-6);
            $("#idTextcolor").val(hex.replace("#", ""));
        })
    },
    setColorCode: function () {
        var that = this;
        $("#idTextcolor").on('keyup', (event) => {
            let hex = "#" + event.currentTarget.value;

            if (that.isHexColor(hex)) {
                that.colorSelect = hex;
                $("#idPenContent").find(".tool-color .box-size").css("background-color", that.colorSelect);
                $("#idPenContent").find(".class-clolor-tool-bar div").css("background-color", that.colorSelect);
            }
        })
    },
    OpenPopupSize: function () {
        $("#idPenContent").find(".popup-size").toggleClass("hide-popup");
    },
    OpenPopupColor: function () {
        $("#popupColorDraw").toggleClass("hide-popup");
    },
    isHexColor: function (hexColor) {
        let regex = /^#[a-f0-9]{6}$/i;
        return regex.test(hexColor);
    },
    closePenContent: function () {
        var that = this;
        $("#idClosePenContent").click(function () {
            that.ResetMouse("arrow");
        })
    },
    setTextSize: function () {
        var that = this;
        $("#idPenContent").find(".popup-size .grid-item-size").click(function () {
            let width = $(this).find("div").css("width");
            let height = $(this).find("div").css("height");
            let border = $(this).find("div").css("border-radius");

            that.penSize = parseFloat(width);
            $("#boxSizeCurrent").css("width", width);
            $("#boxSizeCurrent").css("height", height);
            $("#boxSizeCurrent").css("border-radius", border);
            $("#sizeCurrent").text(that.penSize);
        })
    },
    toggleDrawingTool: function () {
        var that = this;
        $("#idShowHideDraw").change(function () {
            if (this.checked) {
                $(this).parent().find("span").css("text-align", "left")
                $(this).parent().find("span").text(resourcesText.show)
                $("#container").css("opacity", "1");
            } else {
                $(this).parent().find("span").css("text-align", "right")
                $(this).parent().find("span").text(resourcesText.hide)
                $("#container").css("opacity", "0");
            }
        })
    },
    getOpacityByLocalStorage: function () {
        if (typeof (Storage) !== undefined) {
            let drawingOpacity = JSON.parse(localStorage.getItem("drawingOpacity"));
            if (drawingOpacity != null && drawingOpacity != undefined) {
                if (window.location.href.includes('EBook')) {
                    if (drawingOpacity.EBook != null && drawingOpacity.EBook != undefined) {
                        if (drawingOpacity.EBook[idThemeApp] != null ||
                            drawingOpacity.EBook[idThemeApp] !== undefined) {
                            let left = drawingOpacity.EBook[idThemeApp].left;
                            let progressbar = drawingOpacity.EBook[idThemeApp].progressbar;
                            let opacity = drawingOpacity.EBook[idThemeApp].opacity;
                            $('#draggable-point').css('left', left + 'px');
                            $("#opacity-progress-bar").css("width", progressbar + "%");
                            return opacity;
                        }
                    }
                }

            }
            return 1;
        }
        else {
            Common.Alert("Alert", "Sorry! No Web Storage support...")
        }
    },
    setOpacityLocalStorage: function (left, progressbar, opacity) { //left is position left of $('#draggable-point')
        if (typeof (Storage) !== undefined) {
            if (window.location.href.includes('EBook')) {
                let drawingOpacity = JSON.parse(localStorage.getItem("drawingOpacity"));
                if (drawingOpacity == null) {
                    drawingOpacity = {};
                }
                if (drawingOpacity.EBook == undefined || drawingOpacity.EBook == null) {
                    drawingOpacity.EBook = {};
                }
                drawingOpacity.EBook[idThemeApp] = { 'left': left, 'progressbar': progressbar, 'opacity': opacity };
                localStorage.setItem("drawingOpacity", JSON.stringify(drawingOpacity));
            }
        }
        else {
            Common.Alert("Alert", "Sorry! No Web Storage support...")
        }
    },
   
};
var Account = function () {
    return this.Init();
};
Account.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;
    },
    RegisterEventSignUpForm: function () {
        var that = this;
        var form = $("#form-Register");
        form.validate();
        //form.find("#FullName").rules("add", "required");
        form.find("#Login").rules("add", "required");
        form.find("#Login").rules("add", "integer");
        //form.find("#Email").rules("add", "email");
        //form.find("#NewPassword").rules("add", "required");
        //form.find("#ConfirmPassword").rules("add", "required");
    },
    BeforeSend: function () {

        Common.ShowLoading(true);

    },
    SuccessForm: function (data) {
        Common.ShowLoading(false);

        if (data.code == 1) {
            $("#form-update-personal-info").each(function () {
                this.reset();
            });
            let user = $("#user").val();
            if (user == 0) {
                Common.ShowAlert(Account.Message.Alert, data.mess, {
                    Close: {
                        Display: true,
                        OnClick: function () {
                            //Common.Account.ShowDialogLogin();
                        }
                    }
                })
            } else {
                Common.ShowAlert(Account.Message.Alert, data.mess);
            }
        }
        else if (data.code == 2) {
            window.location.href = urlContent + "HomePage/Index";
        }
        else {
            Common.ShowAlert(Account.Message.Alert, data.mess);
            return;
        }
    },
    showForgotPasswordModal: function (dfStatus) {
        $("#forgotPasswordModal #phoneInput").show();
        $("#forgotPasswordModal #status").html(dfStatus);
        $("#forgotPasswordModal #status").css("color", "#000000");
        $("#forgotPasswordModal #pleaseCallUs").hide();
        $("#forgotPasswordModal #sentPass").hide();
        $("#forgotPasswordModal #continueBtn").show();
        $("#forgotPasswordModal #inputPhoneNumber").val("");
        $("#forgotPasswordModal").modal({ backdrop: 'static', keyboard: false });

    },
    ForgotPassword: function () {
        phoneInput = $("#forgotPasswordModal #phoneInput");
        status = $("#forgotPasswordModal #status");
        phoneValue = $("#forgotPasswordModal #inputPhoneNumber").val();
        pleaseCallUs = $("#forgotPasswordModal #pleaseCallUs");
        sentPass = $("#forgotPasswordModal #sentPass");
        continueBtn = $("#forgotPasswordModal #continueBtn");
        $.ajax({
            type: "POST",
            url: Account.Url.ForgotPassword,
            data: { 'phoneNumber': phoneValue },
            beforeSend: function () {
                Common.ShowLoading(true);
            }, success: function (result) {
                Common.ShowLoading(false);
                if (result.code == 0) {
                    $("#forgotPasswordModal #status").html(result.mess);
                }
                else if (result.code == 1) {
                    $("#forgotPasswordModal #status").html(result.mess);
                    phoneInput.hide();
                    continueBtn.hide();
                    pleaseCallUs.hide();
                    sentPass.show();
                }
                else if (result.code == 2 || result.code == 5) {
                    $("#forgotPasswordModal #status").html(result.mess);
                    phoneInput.hide();
                    continueBtn.hide();
                    sentPass.hide();
                    pleaseCallUs.show();
                }
                else {
                    $("#forgotPasswordModal #status").html(result.mess);
                }
            }
        })
    },
    BeforeSendLogin: function () {
        Common.ShowLoading(true);
    },
    SuccessFormLogin: function (data) {
        Common.ShowLoading(false);
        if (data.code == 0) {
            if (data.returnUrl == null || data.returnUrl == "") {
                window.location.href = urlContent + data.DefaultController + "/" + data.DefaultAction;
            }
            else {
                window.location.href = data.returnUrl;
            }
        }
        else if (data.code == 1) {
            $("#text-error-result").text(data.mess);
        }
        else if (data.code == 2) {
            window.location.href = urlContent + data.DefaultController + "/" + data.DefaultAction + "?Type=1&FullName=" + data.FullName + "&Phone=" + data.Phone;
        }
    },
    OnClickRadioYouAre: function (obj, idRole) {
        //if ($('input:radio[name="Role"]').is(':checked') == true) {
        //    if ($('input:radio[id="parent"]').is(':checked') == true) {
        //        $(".checkmark1 > .dot-teacher").removeClass("dot");
        //        $(".checkmark1 > .dot-student").removeClass("dot");
        //        $(".checkmark1 > .dot-parent").addClass("dot");
        //    }
        //    if ($('input:radio[id="teacher"]').is(':checked') == true) {
        //        $(".checkmark1 > .dot-student").removeClass("dot");
        //        $(".checkmark1 > .dot-parent").removeClass("dot");
        //        $(".checkmark1 > .dot-teacher").addClass("dot");
        //    }
        //    if ($('input:radio[id="student"]').is(':checked') == true) {
        //        $(".checkmark1 > .dot-teacher").removeClass("dot");
        //        $(".checkmark1 > .dot-parent").removeClass("dot");
        //        $(".checkmark1 > .dot-student").addClass("dot");
        //    }
        //}
        $(".user-position-content").removeClass("active-position");
        $(obj).addClass("active-position");
        $("#IdRole").val(idRole);
    },
    ShowDialogLogin: function () {
        var url = window.location.href;
        Common.Ajax(
            {
                type: "POST",
                url: Account.Url.ShowDialogLogin,
                dataType: "html",
                data: {
                    returnUrl: url
                }
            }, function (data) {
                $("#modal-Login .modal-body").html(data);
                $("#modal-Login").modal("show");
            }, true);
    },
    ChooseLevelInRegister: function (e) {
        var fSector = $(e).closest(".flexbox2").data("idsector");
        $("#IdSector").val(fSector);
    },
    ShowDialogLoginInContentBook: function () {
        var url = window.location.href;
        Common.Ajax(
            {
                type: "POST",
                url: Account.Url.ShowDialogLogin,
                dataType: "html",
                data: {
                    returnUrl: url
                },
            }, function (data) {
                $("#show-book-package-dialog .class-login-form").html(data);
                $("#show-book-package-dialog").modal("show");

            }, true);
    },
    BeforeSendLoadBanner: function () {
        Common.ShowLoading(true);
    },
    SuccessFormLoadBanner: function (data) {
        Common.ShowLoading(false);
    },
    SubmitFormGetBanner: function () {
        $("#form-getBannerPromotionLogin").submit();
    },
    BeforeSendRegister: function () {

        Common.ShowLoading(true);

    },
    SuccessFormRegister: function (data) {
        Common.ShowLoading(false);
        if (data.code == 2) {
            $("#form-Register").each(function () {
                this.reset();
            });
            window.location.href = urlContent + "ActiveKey";
        }
        else if (data.code == 1) {
            var html = '';
            html = html + '<div class="content-warning">';
            html = html + '<div class="box-img-warning">';
            html = html + '<img src="' + urlContent + 'Content/images/SignUp/warning.png" style="width:30%;">';
            html = html + '<span class="text-img-warning">Số điện thoại bạn dùng để đăng ký đã tồn tại trên hệ thống</span>';
            html = html + '</div>';
            html = html + '<ul class="ul-text-warning">';
            html = html + '<li>Nếu bạn có tài khoản Eduhome hãy đăng nhập</li>';
            html = html + '<li>Hoặc tiếp tục đăng ký tài khoản bằng một số điện thoại khác</li>';
            html = html + '</ul>';
            html = html + '<div class="box-btn-warning">';
            html = html + '<a href="' + urlLogin + '" class="btn-LoginWarning">Đăng nhập</a>';
            html = html + '<a href="' + urlSingUp + '" class="btn-SignUpWarning" >Đăng ký</a >';
            html = html + '</div>';
            html = html + '</div>';
            $("#content-form-Register").html(html);
        }
        else {
            Common.ShowAlert(Account.Message.Alert, data.mess);
            return;
        }

    },
};

;
var DialogPackageInContentBook = function () {
    return this.Init();
};
DialogPackageInContentBook.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;
        $("#continueBtn").unbind("click").click(function () {
            $("#form-package-code-input").submit();
        });
    },
    ShowDialogPackage: function (idGrade, idSubject, idSeries, idTheme ) {
        Common.Ajax(
            {
                type: "POST",
                url: DialogPackageInContentBook.Url.ShowDialogPackage,
                dataType: "html",
                data: {
                    idGrade: idGrade,
                    idSubject: idSubject,
                    idSeries: idSeries,
                    idTheme:idTheme
                },
            }, function (data) {
                //$("#package-dialog #dialog-package-content").html(data);
                //$("#package-dialog").modal("show");
                $("#dialog-price-package #dialog-price-package-content").html(data);
                $("#dialog-price-package").modal("show");
            }, true);
    },
    SuccessForm: function (data) {
        Common.ShowLoading(false);
        if (data.code == 0) {
            $("#form-package-code-input #status").html(data.mess);
        }
        else {
            $("#form-package-code-input #status").html(data.mess);
            $("#form-package-code-input").trigger('reset');
        }
    },
    BeforeSend: function () {
        Common.ShowLoading(true);
    },
    ShowDialogCheckCode: function (idTheme, isShow, idPackage, type, value, typeBook) {
        if (isShow == 0) {
            Common.Account.ShowDialogLogin();
        }
        else {
            Common.Ajax({
                type: "POST",
                url: BookDetail.Url.ShowDialogActive,
                cache: false,
                dataType: "html",
                data: {
                    IdTheme: idTheme,
                    IdPackage: idPackage,
                    Type: type,
                    Value: value,
                    TypeBook: typeBook
                }
            }, function (data) {
                $("#modal_CheckCode .modal-body").html(data);
                $("#modal_CheckCode").modal("show");
            });
        }
    },
};;
var BookDetail = function () {
    return this.Init();
};
BookDetail.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;
        var currentUrl = window.location.href;
        //var currentUrl = "https://eduhome.com.vn/BookDetail?idGrade=1&idSubject=1&idSeries=1&idTheme=370";
        var currentUrlFB = encodeURIComponent(currentUrl);
        
        $("#btnFBShare").attr("href", "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=" + currentUrlFB + "&display=popup&ref=plugin&src=share_button")
        $("#btnZaloShare").attr("data-href", currentUrl);

        $(".theme-review-box").click(function () {
            var title = $(this).find('.txt-theme-review-subject').text();
            var reviewContent = $(this).find('.txt-review-content').text();
            var fullName = $(this).find('.txt-reviewerFullName').text();
            var timeAgo = $(this).find('.txt-review-section-timeago').text();
            var isExistRvContent = $(this).find('.txt-review-content').height() > 0 ? true : false;
            $("#dialog-rv-title").text(title);
            reviewContent = reviewContent.split("\n").join(" ");
            if (!isExistRvContent) {
                $(".theme-review-dialog-content").addClass('hidden');
            }
            else {
                $(".theme-review-dialog-content").removeClass('hidden');
                $(".theme-review-dialog-content").css('display', 'flex');
            }
            $("#dialog-rv-content").text(reviewContent);
            $("#dialog-rv-reviewer-fullname").text(fullName);
            $("#dialog-rv-timeago").text(timeAgo);
            var starVote = $(this).find('.img-star-vote').map(function () {
                return this.innerHTML;
            }).get();
            $("#dialog-rv-star-vote").html(starVote);
            $("#dialog-detail-theme-review").modal("show");

        });

        var widthPreview = window.innerWidth * 0.36;
        $('.item-Preview').css('width', widthPreview + 'px')
        var text_p_descri_height = $(".txt-detail-introduce-paragraph").height();
        var text_p_version_height = $(".version-info-paragraph").height();
        if (text_p_descri_height > 85) {
            $(".txt-detail-introduce-paragraph").addClass('set-for-read-more');
            $('#btn-readmore-itd').removeClass('hidden')
        }
        if (text_p_version_height > 108) {
            $(".version-info-paragraph").addClass('set-for-read-more-version');
            $('#btn-readmore-ver').removeClass('hidden');
        }

        if ($('.theme-recommend').length) {
            var themeRcmnd = new Splide(".theme-recommend", {
                perPage: 5,
                perMove: 5,
                focus: 'left',
                gap: '1rem', //  gap between 2 slide
                //padding: {
                //    left: 10,
                //},
                pagination: false,
                breakpoints: {
                    400: {
                        perPage: 1,
                    },
                    640: {
                        perPage: 3,
                        gap: '3rem'
                    },
                    960: {
                        perPage: 4,
                        gap: '3rem'
                    }
                }
            }).mount();
            totalRcmndSlide = themeRcmnd.length;
            var perPageRcmnd = themeRcmnd.options.perPage;
            if (totalRcmndSlide <= perPageRcmnd) {
                $('.btn-pre-rcmnd-slide').css("display", "none");
                $('.btn-next-rcmd-slide').css("display", "none");
            }
            else {
                $('.btn-pre-rcmnd-slide').css("display", "none");
                themeRcmnd.on('move', newIndex => {
                    if (newIndex == 0) {
                        $('.btn-pre-rcmnd-slide').css("display", "none");
                        $('.btn-next-rcmd-slide').css("display", "flex");
                    }
                    else if (newIndex + perPageRcmnd >= totalRcmndSlide) {
                        $('.btn-pre-rcmnd-slide').css("display", "flex");
                        $('.btn-next-rcmd-slide').css("display", "none");
                    }
                    else {
                        $('.btn-pre-rcmnd-slide').css("display", "flex");
                        $('.btn-next-rcmd-slide').css("display", "flex");
                    }

                });
            }
        }
        if ($('.theme-review').length) {
            var themeReview = new Splide(".theme-review", {
                perPage: 2,
                perMove: 2,
                focus: 'left',
                gap: '0.5rem', //  gap between 2 slide
                pagination: false,
                breakpoints: {
                    400: {
                        perPage: 1,
                    },
                    640: {
                        perPage: 2,
                        gap: '3rem'
                    },
                    960: {
                        perPage: 2,
                        gap: '3rem'
                    }
                }
            }).mount();
            totalRvSlide = themeReview.length;
            var perPageRv = themeReview.options.perPage;
            if (totalRvSlide <= perPageRv) {
                $('.btn-pre-rv-slide').css("display", "none");
                $('.btn-next-rv-slide').css("display", "none");
            }
            else {
                $('.btn-pre-rv-slide').css("display", "none");
                themeReview.on('move', newIndex => {
                    if (newIndex == 0) {
                        $('.btn-pre-rv-slide').css("display", "none");
                        $('.btn-next-rv-slide').css("display", "flex");
                    }
                    else if (newIndex + perPageRv >= totalRvSlide) {
                        $('.btn-pre-rv-slide').css("display", "flex");
                        $('.btn-next-rv-slide').css("display", "none");
                    }
                    else {
                        $('.btn-pre-rv-slide').css("display", "flex");
                        $('.btn-next-rv-slide').css("display", "flex");
                    }

                });
            }
        }
    },
    SuccessForm: function (data) {
        Common.ShowLoading(false);
        if (data.code == 0) {
            $("#form-package-code-input #status").html(data.mess);
        }
        else {
            $("#form-package-code-input #status").html(data.mess);
            $("#form-package-code-input").trigger('reset');
        }
    },
    BeforeSend: function () {
        Common.ShowLoading(true);
    },

    //ShowDialogDetailReview: function (idx, starVote, title, reviewContent, fullName, timeAgo) {
    //    $("#dialog-rv-title").text(title);
    //    $("#dialog-rv-content").text(reviewContent);
    //    $("#dialog-rv-reviewer-fullname").text(fullName);
    //    $("#dialog-rv-timeago").text(timeAgo);
    //    var starVote = $("#box-rating-star-" + idx).map(function () {
    //        return this.innerHTML;
    //    }).get();
    //    $("#dialog-rv-star-vote").html(starVote);
    //    $("#dialog-detail-theme-review").modal("show");
    //},
    ShowMoreDetailIntroduce: function () {
        if (showMoreDes) {
            showMoreDes = false;
            $(".txt-detail-introduce-paragraph").removeClass('set-for-read-more');
            $("#btn-readmore-itd").text(resourcesText.hide);
        } else {
            showMoreDes = true;
            $(".txt-detail-introduce-paragraph").addClass('set-for-read-more');
            $("#btn-readmore-itd").text(resourcesText.read_more);
        }
    },
    ShowMoreVersionInfo: function () {
        $(".section-version-info").toggleClass("txt-show-more");
        if (showMoreVer) {
            showMoreVer = false;
            $(".version-info-paragraph").removeClass('set-for-read-more-version');
            $("#btn-readmore-ver").text(resourcesText.hide);
        } else {
            showMoreVer = true;
            $(".version-info-paragraph").addClass('set-for-read-more-version');
            $("#btn-readmore-ver").text(resourcesText.read_more);
        }
    },
    ActiveFreeApp: function (idGrade, idSubject, idSeries, idSupplement, idTheme) {
        Common.Ajax({
            type: "POST",
            url: BookDetail.Url.ActiveFreeApp,
            cache: false,
            dataType: "json",
            data: {
                idGrade: idGrade,
                idSubject: idSubject,
                idSeries: idSeries,
                idSupplement: idSupplement,
                idTheme: idTheme
            }
        }, function (data) {
            if (data) {
                Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentSuccessfulActivation);
                //var clickLog = "Common.LogUserActivity.LogUserAPI(" + idTheme + "," + 11 + "," + idSeries + "," + idSupplement + "," + ")";
                $('#btnTrial').remove();
                $('.detail-button').wrap('<div style="display: flex; align-items: center;"><a data-href="' + hrefLink + '" style="background-color: #FFB726;" class="btn_detail_app" data-onclick="Common.BookDetail.UpdateLabelDetailApp(' + idTheme + ');' + '' +'"><span class="" style="background-color: transparent; border: none; padding: 0;">' + resourcesText.preview+'</span></a></div>');

            }
            else {
                Common.ShowAlert(resourcesAlert.titleError, resourcesAlert.contentUnSuccessfulActivation);
            }
        })
    },

    ShowModalImagePreview: function (index, e) {
        $("#modal-splide").modal("show");
        var listImageTP = [];
        var lengthItemPreview = $(".section-theme-demo-image > ul > .item-Preview").length;

        for (var i = 0; i < lengthItemPreview; i++) {
            listImageTP.push({ Url: $(".section-theme-demo-image > ul > .item-Preview > div > #item_" + i + "").attr('src'), Type: $(".section-theme-demo-image > ul > .item-Preview > div > #item_" + i + "").data('type') })
        }

        for (var j = 0; j < listImageTP.length; j++) {
            if (listImageTP[j].Type == 1) {
                $("#list_images").append('<div style="height:100%" class="splide__slide"><li style="height:100%"><div class="theme-preview"> <img class="img-fluid theme-preview-img" src="' + listImageTP[j].Url + '" /></div></li></div>')
                $("#list_images_second").append('<div style="height:100%" class="splide__slide"><li style="height:100%"> <img class="img-fluid" src="' + listImageTP[j].Url + '" style="width:100%;height:100%;object-fit: contain;" /></li></div>')
            } else {
                if (j == index) {
                    $("#list_images").append('<div style="height:100%" class="splide__slide"><li style="height:100%"><div class="theme-preview"> <video controls autoplay controlsList="nodownload" class="video_Preview" src="' + listImageTP[j].Url + '"></video></div></li></div>')
                    $("#list_images_second").append('<div style="height:100%" class="splide__slide"><li style="height:100%"> <video controlsList="nodownload" src="' + listImageTP[j].Url + '" style="width:100%;height:100%;object-fit: contain;"></video></li></div>')
                }
                else {
                    $("#list_images").append('<div style="height:100%" class="splide__slide"><li style="height:100%"><div class="theme-preview"> <video controls controlsList="nodownload" class="video_Preview" src="' + listImageTP[j].Url + '"></video></div></li></div>')
                    $("#list_images_second").append('<div style="height:100%" class="splide__slide"><li style="height:100%"> <video controlsList="nodownload" src="' + listImageTP[j].Url + '" style="width:100%;height:100%;object-fit: contain;"></video></li></div>')
                }
            }
        }

        // init slider

        var secondarySlider = new Splide('#secondary-slider', {
            //fixedWidth: 100,
            //height: 60,
            //gap: 10,
            //cover: true,
            //isNavigation: true,
            //focus: 'center',
            //breakpoints: {
            //    '600': {
            //        fixedWidth: 66,
            //        height: 40,
            //    }
            //},

            //fixedWidth: '30%',
            height: '18%',
            //gap: '1%',
            perPage: 3,
            cover: true,
            isNavigation: true,
            focus: 'left',
            rewind: true,
            pagination: false,
            start: index,
            //padding: {
            //    left: 50,
            //    right: 50
            //}
        }).mount();

        var primarySlider = new Splide('#primary-slider', {
            //height: '100%',
            pagination: false,
            arrows: false,
            cover: true,
            start: index,
            perPage: 1,
        });

        primarySlider.sync(secondarySlider).mount();

        $("#primary-slider > .splide__arrows").css("display", "none");
        //$("#secondary-slider > .splide__arrows > button").css("background-color", "white");
        //$("#secondary-slider > .splide__arrows > button > svg > path").css("fill", "#0969AB");

        secondarySlider.on('move', function (e) {
            var listVideo = $(".video_Preview");
            $.each(listVideo, function (index, value) {
                value.pause();
                value.currentTime = 0;
            });

        });
    },
    GoToNextSlide: function (className) {
        $('.' + className).find('.splide__arrow--next').trigger('click');
    },
    GoToPreSlide: function (className) {
        $('.' + className).find('.splide__arrow--prev').trigger('click');
    },
    ShowDialogCheckCode: function (idTheme, isShow, idPackage, type, value, typeBook) {
        if (isShow == 0) {
            Common.Account.ShowDialogLogin();
        }
        else {
            Common.Ajax({
                type: "POST",
                url: BookDetail.Url.ShowDialogActive,
                cache: false,
                dataType: "html",
                data: {
                    IdTheme: idTheme,
                    IdPackage: idPackage,
                    Type: type,
                    Value: value,
                    TypeBook: typeBook
                }
            }, function (data) {
                $("#modal_CheckCode .modal-body").html(data);
                $("#modal_CheckCode").modal("show");
            });
        }
    },
    RedirectLogin: function (urlQuery) {
        Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentLoginForTryApp, {
            Close: { Display: true },
            Items: {
                Continue: {
                    Name: "Continue",
                    OnClick: function (target) {
                        var url = BookDetail.Url.ThemeThirdParty.replace("urlQuery=%3F", "");
                        window.location.href = window.location.protocol + "//" + window.location.host + "/Account/EnterPhone?returnUrl=" + url + "&refesh=1";
                    },
                    Value: resourcesAlert.confirmedContinue
                },
            }
        }, resourcesAlert.confirmedContinue);
    },
    UpdateLabelDetailApp: function (idTheme) {
        Common.Ajax({
            type: "POST",
            url: BookDetail.Url.UpdateLabelDetailApp,
            cache: false,
            dataType: "json",
            data: {
                idTheme: Number.parseInt(idTheme)
            }
        }, function (data) { });
    }
}


;

var Cart = function () {
    //$("#modal-Notification").on('shown.bs.modal', function () { }
    var currentLanguage = "en-US";
    return this.Init();
};
Cart.prototype = {

    Init: function (options) {
        this.RegisterEvent(options);
    },
    RegisterEvent: function (lang) {
        var that = this;
        that.currentLanguage = lang;
    },
    readCookie: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length).toString();
        }
        return null;
    },
    setCookie: function (name, value) {
        var cookie = [
            name,
            '=',
            JSON.stringify(value)
        ].join('');
        //document.cookie = cookie;
        document.cookie = cookie + "; path=/";
    },
    StoreCartCookie: function (idTheme, idGrade, idSubject, idSeries, idSupplement, typeBtn) {
        var cookieCart = this.readCookie("Cart");
        cookieCart = JSON.parse(cookieCart);

        var listCart = [];

        if (cookieCart != null) {
            if (cookieCart.length > 0) {
                for (var i = 0; i < cookieCart.length; i++) {
                    listCart.push({ "Items": { "Grade": cookieCart[i].Items.Grade, "Subject": cookieCart[i].Items.Subject, "Series": cookieCart[i].Items.Series, "IdTheme": cookieCart[i].Items.IdTheme, "Supplement": cookieCart[i].Items.Supplement } });
                }
            }
        }

        var duplicateDR = listCart.filter((item) => item.Items.IdTheme == idTheme)
        if (duplicateDR.length == 0) {
            listCart.push({ "Items": { "Grade": idGrade, "Subject": idSubject, "Series": idSeries, "IdTheme": idTheme, "Supplement": idSupplement } });
            this.setCookie("Cart", listCart);

            if (typeBtn == 1) {
                // region animation cart
                var cart = $('#cart');
                var imgtodrag = $("#avatarApp");
                imgtodrag.attr('onload', null);
                if (imgtodrag) {
                    var imgclone = imgtodrag.clone()
                        .offset({
                            top: imgtodrag.offset().top,
                            left: imgtodrag.offset().left
                        })
                        .css({
                            'opacity': '0.8',
                            'position': 'absolute',
                            'height': '150px',
                            'width': '150px',
                            'z-index': '1041'
                        })
                        .appendTo($('body'))
                        .animate({
                            'top': cart.offset().top + 10,
                            'left': cart.offset().left + 10,
                            'width': 75,
                            'height': 75
                        }, 1000, 'easeInOutExpo');

                    setTimeout(function () {
                        cart.effect("shake", {
                            times: 2
                        }, 200);
                    }, 1500);

                    imgclone.animate({
                        'width': 0,
                        'height': 0
                    }, function () {
                        $(this).detach()
                    });
                }

                // endregion
            }

            var count = parseInt($("#icon-cart").text());
            count = count + 1;
            $("#icon-cart").text(count.toString());

            if (typeBtn == 2) {
                //window.location.href = urlContent + "Cart";
                window.location.href = window.location.origin + "/Cart";
            }

        } else {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentExistedAppInCart);
        }
    },
    StoreCartCookieHomePage: function (idTheme, idGrade, idSubject, idSeries, idSupplement, index, typeBtn) {
        var cookieCart = this.readCookie("Cart");
        cookieCart = JSON.parse(cookieCart);

        var listCart = [];

        if (cookieCart != null) {
            if (cookieCart.length > 0) {
                for (var i = 0; i < cookieCart.length; i++) {
                    listCart.push({ "Items": { "Grade": cookieCart[i].Items.Grade, "Subject": cookieCart[i].Items.Subject, "Series": cookieCart[i].Items.Series, "IdTheme": cookieCart[i].Items.IdTheme, "Supplement": cookieCart[i].Items.Supplement } });
                }
            }
        }

        var duplicateDR = listCart.filter((item) => item.Items.IdTheme == idTheme)
        if (duplicateDR.length == 0) {
            listCart.push({ "Items": { "Grade": idGrade, "Subject": idSubject, "Series": idSeries, "IdTheme": idTheme, "Supplement": idSupplement } });
            this.setCookie("Cart", listCart);

            if (typeBtn == 1) {
                // region animation cart
                var cart = $('#cart');
                if (position >= 110) {
                    cart = $("#cart2");
                }
                var imgtodrag = $(".avatarApp").eq(index);
                imgtodrag.attr('onload', null);
                if (imgtodrag) {
                    var imgclone = imgtodrag.clone()
                        .offset({
                            top: imgtodrag.offset().top,
                            left: imgtodrag.offset().left
                        })
                        .css({
                            'opacity': '0.8',
                            'position': 'absolute',
                            'height': '150px',
                            'width': '150px',
                            'z-index': '1041'
                        })
                        .appendTo($('body'))
                        .animate({
                            'top': cart.offset().top + 10,
                            'left': cart.offset().left + 10,
                            'width': 75,
                            'height': 75
                        }, 1000, 'easeInOutExpo');

                    setTimeout(function () {
                        cart.effect("shake", {
                            times: 2
                        }, 200);
                    }, 1500);

                    imgclone.animate({
                        'width': 0,
                        'height': 0
                    }, function () {
                        $(this).detach()
                    });
                }

                // endregion
            }

            var count = parseInt($("#icon-cart").text());
            count = count + 1;
            $("#icon-cart").text(count.toString());
            $("#icon-cart2").text(count.toString());

            if (typeBtn == 2) {
                window.location.href = urlContent + "Cart";
            }

        } else {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentExistedAppInCart);
        }
    },
    StoreCartCookieHomePageAll: function (idTheme, idGrade, idSubject, idSeries, idSupplement, index, typeBtn) {
        var cookieCart = this.readCookie("Cart");
        cookieCart = JSON.parse(cookieCart);
        var listCart = [];
        if (cookieCart != null) {
            if (cookieCart.length > 0) {
                for (var i = 0; i < cookieCart.length; i++) {
                    listCart.push({ "Items": { "Grade": cookieCart[i].Items.Grade, "Subject": cookieCart[i].Items.Subject, "Series": cookieCart[i].Items.Series, "IdTheme": cookieCart[i].Items.IdTheme, "Supplement": cookieCart[i].Items.Supplement } });
                }
            }
        }

        var duplicateDR = listCart.filter((item) => item.Items.IdTheme == idTheme)
        if (duplicateDR.length == 0) {
            listCart.push({ "Items": { "Grade": idGrade, "Subject": idSubject, "Series": idSeries, "IdTheme": idTheme, "Supplement": idSupplement } });
            this.setCookie("Cart", listCart);

            if (typeBtn == 1) {
                // region animation cart
                var cart = $('#cart');
                if (position >= 110) {
                    cart = $("#cart2");
                }
                var imgtodrag = $(".iconApp").eq(index);
                imgtodrag.attr('onload', null);
                if (imgtodrag) {
                    var imgclone = imgtodrag.clone()
                        .offset({
                            top: imgtodrag.offset().top,
                            left: imgtodrag.offset().left
                        })
                        .css({
                            'opacity': '0.8',
                            'position': 'absolute',
                            'height': '150px',
                            'width': '150px',
                            'z-index': '1041'
                        })
                        .appendTo($('body'))
                        .animate({
                            'top': cart.offset().top + 10,
                            'left': cart.offset().left + 10,
                            'width': 75,
                            'height': 75
                        }, 1000, 'easeInOutExpo');

                    setTimeout(function () {
                        cart.effect("shake", {
                            times: 2
                        }, 200);
                    }, 1500);

                    imgclone.animate({
                        'width': 0,
                        'height': 0
                    }, function () {
                        $(this).detach()
                    });
                }

                // endregion
            }

            var count = parseInt($("#icon-cart").text());
            count = count + 1;
            $("#icon-cart").text(count.toString());
            $("#icon-cart2").text(count.toString());

            if (typeBtn == 2) {
                window.location.href = urlContent + "Cart";
            }

        } else {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentExistedAppInCart);
        }
    },
    StoreCartCookieSuggestApp: function (idTheme, idGrade, idSubject, idSeries, idSupplement, index, typeBtn) {
        var cookieCart = this.readCookie("Cart");
        cookieCart = JSON.parse(cookieCart);

        var listCart = [];

        if (cookieCart != null) {
            if (cookieCart.length > 0) {
                for (var i = 0; i < cookieCart.length; i++) {
                    listCart.push({ "Items": { "Grade": cookieCart[i].Items.Grade, "Subject": cookieCart[i].Items.Subject, "Series": cookieCart[i].Items.Series, "IdTheme": cookieCart[i].Items.IdTheme, "Supplement": cookieCart[i].Items.Supplement } });
                }
            }
        }

        var duplicateDR = listCart.filter((item) => item.Items.IdTheme == idTheme)
        if (duplicateDR.length == 0) {
            listCart.push({ "Items": { "Grade": idGrade, "Subject": idSubject, "Series": idSeries, "IdTheme": idTheme, "Supplement": idSupplement } });
            this.setCookie("Cart", listCart);

            if (typeBtn == 1) {
                // region animation cart
                var cart = $('#cart');
                if (position >= 110) {
                    cart = $("#cart2");
                }
                var imgtodrag = $(".iconApp").eq(index);
                imgtodrag.attr('onload', null);
                if (imgtodrag) {
                    var imgclone = imgtodrag.clone()
                        .offset({
                            top: imgtodrag.offset().top,
                            left: imgtodrag.offset().left
                        })
                        .css({
                            'opacity': '0.8',
                            'position': 'absolute',
                            'height': '150px',
                            'width': '150px',
                            'z-index': '1041'
                        })
                        .appendTo($('body'))
                        .animate({
                            'top': cart.offset().top + 10,
                            'left': cart.offset().left + 10,
                            'width': 75,
                            'height': 75
                        }, 1000, 'easeInOutExpo');

                    setTimeout(function () {
                        cart.effect("shake", {
                            times: 2
                        }, 200);
                    }, 1500);

                    imgclone.animate({
                        'width': 0,
                        'height': 0
                    }, function () {
                        $(this).detach()
                    });
                }

                // endregion
            }

            var count = parseInt($("#icon-cart").text());
            count = count + 1;
            $("#icon-cart").text(count.toString());
            $("#icon-cart2").text(count.toString());

            if (typeBtn == 2) {
                window.location.href = urlContent + "Cart";
            }

        } else {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentExistedAppInCart);
        }
    },
    DeleteCartCookie: function (idTheme) {
        var cookieCart = this.readCookie("Cart");
        cookieCart = JSON.parse(cookieCart);

        Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentRemoveAppInCart, {
            Close: { Display: true },
            Items: {
                Continue: {
                    Name: "Continue",
                    OnClick: function (target) {
                        for (var i = 0; i < cookieCart.length; i++) {
                            if (cookieCart[i].Items.IdTheme == idTheme) {
                                cookieCart.splice(i, 1); // delete 1 element from index 1
                            }
                        }
                        document.cookie = "Cart=" + JSON.stringify(cookieCart) + "; path = /";
                        Common.HideAlert();

                        // Check valid for promotion code after remove app in Cart (If has any promotion code)
                        var promotionStorage = localStorage.getItem("promotion");
                        if (promotionStorage != null) {
                            var json = JSON.parse(promotionStorage);
                            Common.AjaxNoLoading({
                                type: "POST",
                                url: Cart.Url.CheckPromotionCodeAfterRemovingCart,
                                cache: false,
                                dataType: "html",
                                data: {
                                    idPromotionCode: json[0].idpromotioncode,
                                    idTheme: idTheme
                                }
                            }, function (response) {
                                let jsonResponse = JSON.parse(response);
                                if (!jsonResponse.Status) {
                                    Common.Cart.RemovePromotionCodeNoAlert();
                                    Common.ShowAlert(resourcesAlert.titleAlert, jsonResponse.Message, {
                                        Items: {
                                            Continue: {
                                                Name: resourcesAlert.confirmedClose,
                                                OnClick: function (target) {
                                                    window.location.href = urlContent + "Cart";
                                                },
                                                Value: "Đóng"
                                            },
                                        }
                                    }, "Close");
                                } else {
                                    window.location.href = urlContent + "Cart";
                                }
                            }, true);
                        } else {
                            window.location.href = urlContent + "Cart";
                        }
                    },
                    Value: resourcesAlert.confirmedYes
                },
            }
        }, "Continue");
    },
    AddCart: function (idTheme, idGrade, idSubject, idSeries, idSupplement, typeBtn) {
        var listOD = [];
        listOD.push({ "Grade": idGrade, "Subject": idSubject, "Series": idSeries, "IdTheme": idTheme, "Supplement": idSupplement });

        Common.AjaxNoLoading({
            type: "POST",
            url: Cart.Url.AddCart,
            cache: false,
            dataType: "html",
            data: { ListOrderDetail: listOD }
        }, function (data) {
            var json = JSON.parse(data);
            if (json.Status) {
                if (typeBtn === 1) {
                    // region animation cart
                    var cart = $('#cart');
                    var imgtodrag = $("#avatarApp");
                    imgtodrag.attr('onload', null);
                    if (imgtodrag) {
                        var imgclone = imgtodrag.clone()
                            .offset({
                                top: imgtodrag.offset().top,
                                left: imgtodrag.offset().left
                            })
                            .css({
                                'opacity': '0.8',
                                'position': 'absolute',
                                'height': '150px',
                                'width': '150px',
                                'z-index': '1041'
                            })
                            .appendTo($('body'))
                            .animate({
                                'top': cart.offset().top + 10,
                                'left': cart.offset().left + 10,
                                'width': 75,
                                'height': 75
                            }, 1000, 'easeInOutExpo');

                        setTimeout(function () {
                            cart.effect("shake", {
                                times: 2
                            }, 200);
                        }, 1500);

                        imgclone.animate({
                            'width': 0,
                            'height': 0
                        }, function () {
                            $(this).detach()
                        });
                    }
                    // endregion
                    var count = parseInt($("#icon-cart").text());
                    count = count + 1;
                    $("#icon-cart").text(count.toString());
                    //Common.LogUserActivity.LogUser(idTheme, 7, idSeries, idSupplement);
                    Common.LogUserActivity.LogUserAPI(idTheme, 7, idSeries, idSupplement);
                }

                if (typeBtn === 2) {
                    //Common.LogUserActivity.LogUser(idTheme, 6, idSeries, idSupplement);
                    Common.LogUserActivity.LogUserAPI(idTheme, 6, idSeries, idSupplement);
                    window.location.href = urlContent + "Cart";
                }
            } else {
                Common.ShowAlert(resourcesAlert.titleAlert, json.Message);
            }
        }, true);
        //document.cookie = "Cart=" + JSON.stringify([]) + "; path = /"
    },
    AddCartHomePage: function (idTheme, idGrade, idSubject, idSeries, idSupplement, index, typeBtn) {
        var listOD = [];
        listOD.push({ "Grade": idGrade, "Subject": idSubject, "Series": idSeries, "IdTheme": idTheme, "Supplement": idSupplement });

        Common.AjaxNoLoading({
            type: "POST",
            url: Cart.Url.AddCart,
            cache: false,
            dataType: "html",
            data: { ListOrderDetail: listOD }
        }, function (data) {
            var json = JSON.parse(data);
            if (json.Status) {
                if (typeBtn === 1) {
                    // region animation cart
                    var cart = $('#cart');
                    if (position >= 110) {
                        cart = $("#cart2");
                    }
                    var imgtodrag = $(".avatarApp").eq(index);
                    imgtodrag.attr('onload', null);
                    if (imgtodrag) {
                        var imgclone = imgtodrag.clone()
                            .offset({
                                top: imgtodrag.offset().top,
                                left: imgtodrag.offset().left
                            })
                            .css({
                                'opacity': '0.8',
                                'position': 'absolute',
                                'height': '150px',
                                'width': '150px',
                                'z-index': '1041'
                            })
                            .appendTo($('body'))
                            .animate({
                                'top': cart.offset().top + 10,
                                'left': cart.offset().left + 10,
                                'width': 75,
                                'height': 75
                            }, 1000, 'easeInOutExpo');

                        setTimeout(function () {
                            cart.effect("shake", {
                                times: 2
                            }, 200);
                        }, 1500);

                        imgclone.animate({
                            'width': 0,
                            'height': 0
                        }, function () {
                            $(this).detach()
                        });
                    }
                    // endregion
                    var count = parseInt($("#icon-cart").text());
                    count = count + 1;
                    $("#icon-cart").text(count.toString());
                    $("#icon-cart2").text(count.toString());
                    //Common.LogUserActivity.LogUser(idTheme, 7, idSeries, idSupplement);
                    Common.LogUserActivity.LogUserAPI(idTheme, 7, idSeries, idSupplement);
                }

                if (typeBtn === 2) {
                    //Common.LogUserActivity.LogUser(idTheme, 6, idSeries, idSupplement);
                    Common.LogUserActivity.LogUserAPI(idTheme, 6, idSeries, idSupplement);
                    window.location.href = urlContent + "Cart";
                }
            } else {
                Common.ShowAlert(resourcesAlert.titleAlert, json.Message);
            }
        }, true);
        //document.cookie = "Cart=" + JSON.stringify([]) + "; path = /"
    },
    AddCartSuggestApp: function (idTheme, idGrade, idSubject, idSeries, idSupplement, index, typeBtn) {
        var listOD = [];
        listOD.push({ "Grade": idGrade, "Subject": idSubject, "Series": idSeries, "IdTheme": idTheme, "Supplement": idSupplement });

        Common.AjaxNoLoading({
            type: "POST",
            url: Cart.Url.AddCart,
            cache: false,
            dataType: "html",
            data: { ListOrderDetail: listOD }
        }, function (data) {
            var json = JSON.parse(data);
            if (json.Status) {
                if (typeBtn === 1) {
                    // region animation cart //fixed bug
                    var cart = $('#cart');
                    if (position >= 110) {
                        cart = $("#cart2");
                    }
                    var imgtodrag = $(".iconApp").eq(index);
                    imgtodrag.attr('onload', null);
                    if (imgtodrag) {
                        var imgclone = imgtodrag.clone()
                            .offset({
                                top: imgtodrag.offset().top,
                                left: imgtodrag.offset().left
                            })
                            .css({
                                'opacity': '0.8',
                                'position': 'absolute',
                                'height': '150px',
                                'width': '150px',
                                'z-index': '1041'
                            })
                            .appendTo($('body'))
                            .animate({
                                'top': cart.offset().top + 10,
                                'left': cart.offset().left + 10,
                                'width': 75,
                                'height': 75
                            }, 1000, 'easeInOutExpo');

                        setTimeout(function () {
                            cart.effect("shake", {
                                times: 2
                            }, 200);
                        }, 1500);

                        imgclone.animate({
                            'width': 0,
                            'height': 0
                        }, function () {
                            $(this).detach()
                        });
                    }
                    // endregion
                    var count = parseInt($("#icon-cart").text());
                    count = count + 1;
                    $("#icon-cart").text(count.toString());
                    $("#icon-cart2").text(count.toString());
                    //Common.LogUserActivity.LogUser(idTheme, 7, idSeries, idSupplement);
                    Common.LogUserActivity.LogUserAPI(idTheme, 7, idSeries, idSupplement);
                }

                if (typeBtn === 2) {
                    //Common.LogUserActivity.LogUser(idTheme, 6, idSeries, idSupplement);
                    Common.LogUserActivity.LogUserAPI(idTheme, 6, idSeries, idSupplement);
                    window.location.href = urlContent + "Cart";
                }
            } else {
                Common.ShowAlert(resourcesAlert.titleAlert, json.Message);
            }
        }, true);
        //document.cookie = "Cart=" + JSON.stringify([]) + "; path = /"
    },
    AddCartHomePageAll: function (idTheme, idGrade, idSubject, idSeries, idSupplement, index, typeBtn) {
        var listOD = [];
        listOD.push({ "Grade": idGrade, "Subject": idSubject, "Series": idSeries, "IdTheme": idTheme, "Supplement": idSupplement });

        Common.AjaxNoLoading({
            type: "POST",
            url: Cart.Url.AddCart,
            cache: false,
            dataType: "html",
            data: { ListOrderDetail: listOD }
        }, function (data) {
            var json = JSON.parse(data);
            if (json.Status) {
                if (typeBtn === 1) {
                    // region animation cart
                    var cart = $('#cart');
                    if (position >= 110) {
                        cart = $("#cart2");
                    }
                    var imgtodrag = $(".iconApp").eq(index);
                    imgtodrag.attr('onload', null);
                    if (imgtodrag) {
                        var imgclone = imgtodrag.clone()
                            .offset({
                                top: imgtodrag.offset().top,
                                left: imgtodrag.offset().left
                            })
                            .css({
                                'opacity': '0.8',
                                'position': 'absolute',
                                'height': '150px',
                                'width': '150px',
                                'z-index': '1041'
                            })
                            .appendTo($('body'))
                            .animate({
                                'top': cart.offset().top + 10,
                                'left': cart.offset().left + 10,
                                'width': 75,
                                'height': 75
                            }, 1000, 'easeInOutExpo');

                        setTimeout(function () {
                            cart.effect("shake", {
                                times: 2
                            }, 200);
                        }, 1500);

                        imgclone.animate({
                            'width': 0,
                            'height': 0
                        }, function () {
                            $(this).detach()
                        });
                    }
                    // endregion
                    var count = parseInt($("#icon-cart").text());
                    count = count + 1;
                    $("#icon-cart").text(count.toString());
                    $("#icon-cart2").text(count.toString());
                    //Common.LogUserActivity.LogUser(idTheme, 7, idSeries, idSupplement);
                    Common.LogUserActivity.LogUserAPI(idTheme, 7, idSeries, idSupplement);
                }

                if (typeBtn === 2) {
                    //Common.LogUserActivity.LogUser(idTheme, 6, idSeries, idSupplement);
                    Common.LogUserActivity.LogUserAPI(idTheme, 6, idSeries, idSupplement);
                    window.location.href = urlContent + "Cart";
                }
            } else {
                Common.ShowAlert(resourcesAlert.titleAlert, json.Message);
            }
        }, true);
        //document.cookie = "Cart=" + JSON.stringify([]) + "; path = /"
    },
    DeleteCartOrder: function (idTheme) {
        Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentRemoveAppInCart, {
            Close: { Display: true },
            Items: {
                Continue: {
                    Name: "Continue",
                    OnClick: function (target) {
                        Common.AjaxNoLoading({
                            type: "POST",
                            url: Cart.Url.DeleteCart,
                            cache: false,
                            dataType: "html",
                            data: { IdTheme: idTheme }
                        }, function (response) {
                            Common.HideAlert();
                            let jsonResponse = JSON.parse(response);
                            if (!jsonResponse.Status) {
                                Common.ShowAlert(resourcesAlert.titleAlert, jsonResponse.Message);
                            } else {
                                // Check valid for promotion code after remove app in Cart (If has any promotion code)
                                var promotionStorage = localStorage.getItem("promotion");
                                if (promotionStorage != null) {
                                    var json = JSON.parse(promotionStorage);
                                    Common.AjaxNoLoading({
                                        type: "POST",
                                        url: Cart.Url.CheckPromotionCodeAfterRemovingCart,
                                        cache: false,
                                        dataType: "html",
                                        data: {
                                            idPromotionCode: json[0].idpromotioncode,
                                            idTheme: idTheme
                                        }
                                    }, function (response) {
                                        let jsonResponse = JSON.parse(response);
                                        if (!jsonResponse.Status) {
                                            Common.Cart.RemovePromotionCodeNoAlert();
                                            Common.ShowAlert(resourcesAlert.titleAlert, jsonResponse.Message, {
                                                Items: {
                                                    Continue: {
                                                        Name: "Close",
                                                        OnClick: function (target) {
                                                            window.location.href = urlContent + "Cart";
                                                        },
                                                        Value: resourcesAlert.confirmedClose
                                                    },
                                                }
                                            }, "Close");
                                        } else {
                                            window.location.href = urlContent + "Cart";
                                        }
                                    }, true);
                                } else {
                                    window.location.href = urlContent + "Cart";
                                }
                            }
                        }, true);
                    },
                    Value: resourcesAlert.confirmedYes
                },
            }
        }, "Continue");
    },
    CheckOut: function () {
        Common.Ajax({
            type: "POST",
            url: Cart.Url.CheckOut,
            cache: false,
            dataType: "json",
            data: {}
        }, function (data) {
            //if (data == 1) {
            //    Common.ShowAlert("Alert", "Check out successfully!");
            //    $('.modal-alert').on('hidden.bs.modal', function (e) {
            //        window.location.href = window.location.href;
            //    })
            //}
            //else if (data == 2) {
            //    Common.ShowAlert("Alert", "Your cart is empty!");
            //}
            //else {
            //    Common.ShowAlert("Alert", "Check out failed!");
            //}

            if (!data.Status) {
                Common.ShowAlert(resourcesAlert.titleError, data.Message);
            } else {
                window.location.href = Cart.Url.Payment;
            }
        });

        //document.cookie = "Cart=" + JSON.stringify([]) + "; path = /"
        //window.location.href = Cart.Url.CheckOut;
    },
    ShowDialogVoucher: function () {
        let idPromotionCodeSetting = $("#promotion").attr("data-idpromotioncodesetting");
        Common.Ajax({
            type: "POST",
            url: Cart.Url.ShowDialogVoucher,
            cache: false,
            dataType: "html",
        }, function (data) {
            $("#modal-dialog-voucher").find(".modal-body").html(data);
            $('#modal-dialog-voucher .select-circle[data-idpromotioncodesetting="' + idPromotionCodeSetting + '"]').addClass('select-circle-active');

            $("#modal-dialog-voucher").modal("show");

            $("body").css("padding-right", "0px");
        });
    },
    ChooseVoucher: function (e) {
        $("div.select-circle").removeClass("select-circle-active");
        $(e).addClass("select-circle-active");
    },
    ConditionVoucher: function (idPromotionCode, flag) {
        // flag = 1 only dismiss dialog voucher detail not open dialog list voucher.
        Common.Ajax({
            type: "POST",
            url: Cart.Url.ShowDialogVoucherDetail,
            cache: false,
            dataType: "html",
            data: { idPromotionCode: idPromotionCode }
        }, function (data) {
            $("#modal-dialog-voucher").modal("hide");
            $("#modal-dialog-voucher-detail").modal("show");
            $("#modal-dialog-voucher-detail").find(".modal-body").html(data);
            $("body").css("padding-right", "0px");
            if (flag == 1) $("#btnClose").attr("onclick", "Common.Cart.ClickBtnBackToCart()")
            else $("#btnClose").attr("onclick", "Common.Cart.ClickBtnBack()")
        });
    },
    ClickBtnBack: function () {
        $("#modal-dialog-voucher-detail").modal("hide");
        $("#modal-dialog-voucher").modal("show");
    },
    ClickBtnBackToCart: function () {
        $("#modal-dialog-voucher-detail").modal("hide");
    },
    ClickBtnOK: function () {
        let countItemOD = $('div[id^=itemOD]').length;
        if (countItemOD > 0) {
            var idpromotioncode = $(".select-circle-active").data("idpromotioncode");
            var idpromotioncodesetting = $(".select-circle-active").data("idpromotioncodesetting");
            var title = $(".select-circle-active").data("title");
            var titleEn = $(".select-circle-active").data("title-en");
            var code = $(".select-circle-active").data("code");
            var fromdate = $(".select-circle-active").data("fromdate");
            var todate = $(".select-circle-active").data("todate");
            var type = $(".select-circle-active").data("type");
            var discountValue = $(".select-circle-active").data("discountvalue");
            var idplatform = $(".select-circle-active").data("idplatform");
            var listIdGiftApp = $(".select-circle-active").data("giftapp");
            //var isDisplayCode = $(".select-circle-active").data("isdisplaycode");
            var listType = $(".select-circle-active").data("listtype");
            var listDiscountValue = $(".select-circle-active").data("listdiscountvalue");
            var remainHours = $(".select-circle-active").data("remainhours");
            var remainDateString = $(".select-circle-active").data("remaining-date-string");

            if ($(".select-circle-active").length == 0) {
                //alert("Bạn chưa chọn mã giảm giá nào!");
                Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentNotChoosePromotionCode);
            }

            if (idpromotioncodesetting != undefined) {
                $(".totalDiscountMoney").val(0);

                let promotionElement = document.getElementById('promotion');
                promotionElement.innerHTML = '';

                promotionElement.setAttribute("data-idpromotioncodesetting", idpromotioncodesetting);
                promotionElement.setAttribute("data-idplatform", idplatform);

                let imgElement = document.createElement('div');
                imgElement.setAttribute("class", "img-promotion");
                imgElement.setAttribute("style", "width: 20%");

                let img = document.createElement('img');
                if (type == 2) {
                    img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion.png");
                } else if (type == 1) {
                    img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion-percent.png");
                } else if (type == 3) {
                    img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion-gift.png");
                } else {
                    img.setAttribute("src", window.location.origin + "/Content/images/Notification/icon-gift.png");
                }
                img.setAttribute("style", "width: 100%; height: auto");

                let contentElement = document.createElement('div');
                contentElement.setAttribute("class", "content-promotion");
                contentElement.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-around; padding: 0% 2%; width: 80%; background-color: #F5F5F5; font-family: 'MontserratMedium'; cursor: default; position:relative");

                let spanTitle = document.createElement('span');
                spanTitle.setAttribute("style", "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #046296");
                //spanTitle.innerHTML = title;
                if (currentLanguage === "en-US") {
                    spanTitle.innerHTML = titleEn;
                } else {
                    spanTitle.innerHTML = title;
                }
                let spanCode = document.createElement('span');
                spanCode.setAttribute("style", "color: #5C5C5C");
                //spanCode.innerHTML = "Mã: " + code;
                spanCode.innerHTML = resourcesText.code + ": " + code;

                let hr = document.createElement('div');
                hr.setAttribute("style", "border-bottom: 2px solid #DFE6EB");

                let expiredCondition = document.createElement('div');
                expiredCondition.setAttribute("style", "display: flex; justify-content: space-between; flex-direction: row; font-size: 10px");

                let spanExpired = document.createElement('span');
                spanExpired.setAttribute("style", "color: #84898C");
                //var remainHourNumbers = Number.parseInt(remainHours);
                //if (remainHourNumbers < 24) {
                //    spanExpired.innerHTML = "HSD: Sắp hết hạn còn " + remainHourNumbers + " giờ";
                //} else if (remainHourNumbers < 48) {
                //    spanExpired.innerHTML = "HSD: Sắp hết hạn còn 1 ngày";
                //} else {
                //    spanExpired.innerHTML = "HSD: Từ nay đến " + todate;
                //}
                spanExpired.innerHTML = resourcesText.expiration_date + ": " + remainDateString;

                let spanCondition = document.createElement('span');
                spanCondition.setAttribute("style", "color: #2A96D1;  cursor: pointer");
                spanCondition.setAttribute("onclick", "Common.Cart.ConditionVoucher('" + idpromotioncode + "',1)")
                //spanCondition.innerHTML = "Điều kiện";
                spanCondition.innerHTML = resourcesText.requirement;

                let btnRemoveHtml = document.createElement('div');
                btnRemoveHtml.setAttribute("style", "display: flex;position: absolute;top: -5px;right: -1%;font-size: 17px;cursor: pointer;");
                btnRemoveHtml.setAttribute("onclick", "Common.Cart.RemovePromotionCode()");

                let iconRemoveHtml = document.createElement('i');
                iconRemoveHtml.setAttribute("style", "color: red");
                iconRemoveHtml.setAttribute("class", "fa fa-times-circle");
                iconRemoveHtml.setAttribute("aria-hidden", "true");


                expiredCondition.append(spanExpired);
                expiredCondition.append(spanCondition);
                btnRemoveHtml.appendChild(iconRemoveHtml);

                imgElement.append(img);
                contentElement.append(spanTitle);

                contentElement.append(spanCode);

                contentElement.append(hr);
                contentElement.append(expiredCondition);
                contentElement.append(btnRemoveHtml);
                promotionElement.append(imgElement);
                promotionElement.append(contentElement);

                var promotionStorage = [];
                promotionStorage.push({
                    idpromotioncode: idpromotioncode,

                })
                localStorage.setItem('promotion', JSON.stringify(promotionStorage));

                //var discountAfterApplyCodePromotion = 0;
                //var totalAfterApplyCodePromotion = 0;
                //var totalMoney = $(".totalMoney").val();
                //var totalDiscountCurrent = $(".totalDiscountMoney").val();
                //var totalCurrent = $(".totalRealMoney").val();
                //if (type == 2) { // voucher VND
                //    discountAfterApplyCodePromotion = parseFloat(totalDiscountCurrent) + discountValue > totalMoney ? totalMoney : parseFloat(totalDiscountCurrent) + discountValue;
                //    totalAfterApplyCodePromotion = parseFloat(totalMoney) - discountValue <= 0 ? 0 : parseFloat(totalMoney) - discountValue;
                //} else if (type == 1) { // coupon %
                //    totalAfterApplyCodePromotion = parseFloat(totalMoney) - (parseFloat(totalMoney) * (discountValue / 100));
                //    discountAfterApplyCodePromotion = parseFloat(totalDiscountCurrent) + (parseFloat(totalMoney) - totalAfterApplyCodePromotion);
                //} else {
                //    totalAfterApplyCodePromotion = parseFloat(totalMoney);
                //}
                //$("#totalMoney").text(new Intl.NumberFormat(lang).format(parseFloat(totalMoney)) + " vnđ");
                //$("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(discountAfterApplyCodePromotion) + " vnđ");
                //$(".totalDiscountMoney").val(discountAfterApplyCodePromotion);
                //$("#totalRealMoney").text(new Intl.NumberFormat(lang).format(totalAfterApplyCodePromotion) + " vnđ");
                //$(".totalRealMoney").val(totalAfterApplyCodePromotion);

                var totalAppMoney = parseFloat($(".totalMoney").val());
                var totalAfterApplyCodePromotion = totalAppMoney;
                var discountAfterApplyCodePromotion = 0;
                if (listType != '' && listDiscountValue != '') {
                    if (listType == type) {
                        if (type == 2) {
                            //discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + discountValue > totalAppMoney ? totalAppMoney : parseFloat(discountAfterApplyCodePromotion) + discountValue;
                            discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + discountValue;
                            totalAfterApplyCodePromotion = parseFloat(totalAppMoney) - discountValue <= 0 ? 0 : parseFloat(totalAppMoney) - discountValue;
                        } else if (type == 1) {
                            totalAfterApplyCodePromotion = parseFloat(totalAppMoney) - (parseFloat(totalAppMoney) * (discountValue / 100));
                            discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + (parseFloat(totalAppMoney) - totalAfterApplyCodePromotion);
                        } else {
                            totalAfterApplyCodePromotion = parseFloat(totalMoney);
                        }
                    } else if (type != 3 && listType != 3) {
                        let listTypeArr = listType.split(' ');
                        let listDiscountValueArr = listDiscountValue.split(' ');
                        for (let i = 0; i < listTypeArr.length; i++) {
                            if (listTypeArr[i] == 1) {
                                let tmpValue = parseFloat(totalAfterApplyCodePromotion) * parseInt(listDiscountValueArr[i]) / 100;
                                discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + tmpValue;
                                totalAfterApplyCodePromotion = parseFloat(totalAfterApplyCodePromotion) - tmpValue;
                            } else {
                                totalAfterApplyCodePromotion = parseInt(totalAfterApplyCodePromotion) - parseInt(listDiscountValueArr[i]) > 0 ? parseInt(totalAfterApplyCodePromotion) - parseInt(listDiscountValueArr[i]) : 0;
                                //discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + parseInt(listDiscountValueArr[i]) > totalAppMoney ? totalAppMoney : parseFloat(discountAfterApplyCodePromotion) + parseInt(listDiscountValueArr[i]);
                                discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + parseInt(listDiscountValueArr[i]);
                            }
                        }
                    }
                }

                $("#totalMoney").text(new Intl.NumberFormat(lang).format(parseFloat(totalMoney)) + " vnđ");
                $("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(discountAfterApplyCodePromotion) + " vnđ");
                $(".totalDiscountMoney").val(discountAfterApplyCodePromotion);
                $("#totalRealMoney").text(new Intl.NumberFormat(lang).format(totalAfterApplyCodePromotion) + " vnđ");
                $(".totalRealMoney").val(totalAfterApplyCodePromotion);
                $("#modal-dialog-voucher").modal("hide");

                Common.Cart.RemoveGiftAppInListCartAppNewV2();
                Common.Cart.UpdatePromotionGiftApp(promotionStorage);
            }
        }
        else {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.content_ChossePromotionCodeWhenEmptyCart);
        }

    },
    ClickBtnApply: function () {
        let countItemOD = $('div[id^=itemOD]').length;
        if (countItemOD > 0) {
            var code = $("#txtCode").val();
            Common.Ajax({
                type: "POST",
                url: Cart.Url.ApplyCodePromotion,
                cache: false,
                dataType: "html",
                data: { code: code }
            }, function (data) {
                var json = JSON.parse(data);
                    if (!json.Status) {
                        Common.ShowAlert(resourcesAlert.titleAlert, json.Message);
                } else {
                    let milliseconds = json.Obj.ToDate.substring(6, 19);
                    let date = new Date(parseFloat(milliseconds));
                    let todate = ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '.' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '.' + date.getFullYear();
                    $(".totalDiscountMoney").val(0);

                    let promotionElement = document.getElementById('promotion');
                    promotionElement.innerHTML = '';

                    promotionElement.setAttribute("data-idpromotioncodesetting", json.Obj.IdPromotionCodeSetting);
                    promotionElement.setAttribute("data-idplatform", json.Obj.IdPlatform);

                    let imgElement = document.createElement('div');
                    imgElement.setAttribute("class", "img-promotion");
                    imgElement.setAttribute("style", "width: 20%");

                    let img = document.createElement('img');

                    if (json.Obj.ListCodeResult[0].Unit == 2) {
                        img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion.png");
                    } else if (json.Obj.ListCodeResult[0].Unit == 1) {
                        img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion-percent.png");
                    } else if (json.Obj.ListCodeResult[0].Unit == 3) {
                        img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion-gift.png");
                    } else {
                        img.setAttribute("src", window.location.origin + "/Content/images/Notification/icon-gift.png");
                    }



                    img.setAttribute("style", "width: 100%; height: auto");

                    let contentElement = document.createElement('div');
                    contentElement.setAttribute("class", "content-promotion");
                    contentElement.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-around; padding: 0% 2%; width: 80%; background-color: #F5F5F5; font-family: 'MontserratMedium'; cursor: default;position:relative");

                    let spanTitle = document.createElement('span');
                    spanTitle.setAttribute("style", "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #046296");
                    //spanTitle.innerHTML = json.Obj.Title;
                    if (currentLanguage === "en-US" && json.Obj.TitleEN !== null && json.Obj.TitleEN !== '') {
                        spanTitle.innerHTML = json.Obj.TitleEN;
                    } else {
                        spanTitle.innerHTML = json.Obj.Title;
                    }

                    let spanCode = document.createElement('span');

                    spanCode.setAttribute("style", "color: #5C5C5C");
                        //spanCode.innerHTML = "Mã: " + json.Obj.Code;
                    spanCode.innerHTML = resourcesText.code + ": " + json.Obj.Code;

                    let hr = document.createElement('div');
                    hr.setAttribute("style", "border-bottom: 2px solid #DFE6EB");

                    let expiredCondition = document.createElement('div');
                    expiredCondition.setAttribute("style", "display: flex; justify-content: space-between; flex-direction: row; font-size: 10px");

                    let spanExpired = document.createElement('span');
                    spanExpired.setAttribute("style", "color: #84898C");
                    //let remainHourNumbers = json.Obj.RemainingHours;
                    //if (remainHourNumbers < 24) {
                    //    spanExpired.innerHTML = "HSD: Sắp hết hạn còn " + remainHourNumbers + " giờ";
                    //} else if (remainHourNumbers < 48) {
                    //    spanExpired.innerHTML = "HSD: Sắp hết hạn còn 1 ngày";
                    //} else {
                    //    spanExpired.innerHTML = "HSD: Từ nay đến " + todate;
                        //}
                    spanExpired.innerHTML = resourcesText.expiration_date + ": " + json.Obj.RemainingDateString;

                    let spanCondition = document.createElement('span');
                    spanCondition.setAttribute("style", "color: #2A96D1;  cursor: pointer");
                    spanCondition.setAttribute("onclick", "Common.Cart.ConditionVoucher('" + json.Obj.IdPromotionCode + "',1)")
                        //spanCondition.innerHTML = "Điều kiện";
                    spanCondition.innerHTML = resourcesText.requirement;

                    let btnRemoveHtml = document.createElement('div');
                    btnRemoveHtml.setAttribute("style", "display: flex;position: absolute;top: -5px;right: -1%;font-size: 17px;cursor: pointer;");
                    btnRemoveHtml.setAttribute("onclick", "Common.Cart.RemovePromotionCode()");

                    let iconRemoveHtml = document.createElement('i');
                    iconRemoveHtml.setAttribute("style", "color: red");
                    iconRemoveHtml.setAttribute("class", "fa fa-times-circle");
                    iconRemoveHtml.setAttribute("aria-hidden", "true");


                    expiredCondition.append(spanExpired);
                    expiredCondition.append(spanCondition);
                    btnRemoveHtml.appendChild(iconRemoveHtml);

                    imgElement.append(img);
                    contentElement.append(spanTitle);
                    contentElement.append(spanCode);
                    contentElement.append(hr);
                    contentElement.append(expiredCondition);
                    contentElement.append(btnRemoveHtml);
                    promotionElement.append(imgElement);
                    promotionElement.append(contentElement);

                    var promotionStorage = [];
                    promotionStorage.push({
                        idpromotioncode: json.Obj.IdPromotionCode
                    });
                    localStorage.setItem('promotion', JSON.stringify(promotionStorage));

                    //var discountAfterApplyCodePromotion = 0;
                    //var totalAfterApplyCodePromotion = 0;
                    //var totalMoney = $(".totalMoney").val();
                    //var totalDiscountCurrent = $(".totalDiscountMoney").val();
                    //var totalCurrent = $(".totalRealMoney").val();
                    //var discountValue = json.Obj.ListCodeResult[0].Value;
                    //if (json.Obj.ListCodeResult[0].Unit == 2) { // voucher VND
                    //    discountAfterApplyCodePromotion = parseFloat(totalDiscountCurrent) + discountValue > totalMoney ? totalMoney : parseFloat(totalDiscountCurrent) + discountValue;
                    //    totalAfterApplyCodePromotion = parseFloat(totalMoney) - discountValue < 0 ? 0 : parseFloat(totalMoney) - discountValue;
                    //} else if (json.Obj.ListCodeResult[0].Unit == 1) { // coupon %
                    //    totalAfterApplyCodePromotion = parseFloat(totalMoney) - (parseFloat(totalMoney) * (discountValue / 100));
                    //    discountAfterApplyCodePromotion = parseFloat(totalDiscountCurrent) + (parseFloat(totalMoney) - totalAfterApplyCodePromotion);
                    //}
                    //else {
                    //    totalAfterApplyCodePromotion = parseFloat(totalMoney);
                    //}
                    //$("#totalMoney").text(new Intl.NumberFormat(lang).format(parseFloat(totalMoney)) + " vnđ");
                    //$("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(discountAfterApplyCodePromotion) + " vnđ");
                    //$(".totalDiscountMoney").val(discountAfterApplyCodePromotion);
                    //$("#totalRealMoney").text(new Intl.NumberFormat(lang).format(totalAfterApplyCodePromotion) + " vnđ");
                    //$(".totalRealMoney").val(totalAfterApplyCodePromotion);
                    //$("#modal-dialog-voucher").modal("hide");


                    var totalAppMoney = parseFloat($(".totalMoney").val());
                    var totalAfterApplyCodePromotion = totalAppMoney;
                    var discountAfterApplyCodePromotion = 0;
                    if (json.Obj.ListCodeResult != null && json.Obj.ListCodeResult.length > 0) {
                        for (let i = 0; i < json.Obj.ListCodeResult.length; i++) {
                            if (json.Obj.ListCodeResult[i].Unit == 1) {
                                let tmpValue = parseFloat(totalAfterApplyCodePromotion) * parseInt(json.Obj.ListCodeResult[i].Value) / 100;
                                discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + tmpValue;
                                totalAfterApplyCodePromotion = parseFloat(totalAfterApplyCodePromotion) - tmpValue;
                            } else {
                                totalAfterApplyCodePromotion = parseInt(totalAfterApplyCodePromotion) - parseInt(json.Obj.ListCodeResult[i].Value) > 0 ? parseInt(totalAfterApplyCodePromotion) - parseInt(json.Obj.ListCodeResult[i].Value) : 0;
                                //discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + parseInt(json.Obj.ListCodeResult[i].Value) > totalAppMoney ? totalAppMoney : parseFloat(discountAfterApplyCodePromotion) + parseInt(json.Obj.ListCodeResult[i].Value);
                                discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + parseInt(json.Obj.ListCodeResult[i].Value);
                            }
                        }
                    }

                    $("#totalMoney").text(new Intl.NumberFormat(lang).format(parseFloat(totalMoney)) + " vnđ");
                    $("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(discountAfterApplyCodePromotion) + " vnđ");
                    $(".totalDiscountMoney").val(discountAfterApplyCodePromotion);
                    $("#totalRealMoney").text(new Intl.NumberFormat(lang).format(totalAfterApplyCodePromotion) + " vnđ");
                    $(".totalRealMoney").val(totalAfterApplyCodePromotion);
                    $("#modal-dialog-voucher").modal("hide");

                    Common.Cart.RemoveGiftAppInListCartAppNewV2();
                    Common.Cart.UpdatePromotionGiftApp(promotionStorage);
                }
            });
        }
        else {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.content_ChossePromotionCodeWhenEmptyCart);
        }

    },
    OnClickBtnPayment: function (tempTotal, idAccount, name, phone, email) {
        var idPaymentMethod = $("input.payment_method_radio:checked").val();
        if (idPaymentMethod == null || idPaymentMethod == undefined || idPaymentMethod == '') {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentChoosePaymentMethod);
            //$(".payment-submit button").removeAttr('disabled')
            return;
        }

        let total = parseFloat($(".totalRealMoney").val());
        if (tempTotal == "0") {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentEmptyCart);
            //$(".payment-submit button").removeAttr('disabled')
        } else {
            if (total < 10000) {
                Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentTotalOrderLargerThan10k);
                //$(".payment-submit button").removeAttr('disabled')
            } else {
                //Common.ShowLoading(false);
                Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentCheckout, {
                    Close: { Display: true },
                    Items: {
                        Continue: {
                            Name: "Continue",
                            OnClick: function (target) {
                                if (clickSuccess == 0) {
                                    clickSuccess = 1;
                                    $(target.currentTarget).attr("disabled", "true")
                                    localStorage.removeItem("promotion");
                                    localStorage.removeItem("paymentmethod");
                                    Common.Ajax({
                                        type: "POST",
                                        url: Cart.Url.CallApiCreateOrder,
                                        cache: false,
                                        dataType: "json",
                                        data: {
                                            IdAccount: idAccount,
                                            IdDevice: null,
                                            Name: name,
                                            Phone: phone,
                                            Email: email,
                                            IdPromotionCodeSetting: $("#promotion").attr("data-idpromotioncodesetting"),
                                            IdPlatform: 2,
                                            IdPaymentMethod: idPaymentMethod
                                        }
                                    }, function (data) {
                                        //$('#modal-alert').modal('hide');
                                        //$(".payment-submit button").removeAttr('disabled');
                                        $(target.currentTarget).removeAttr('disabled');
                                        var json = data;
                                        if (json.Code == 0) {
                                            clickSuccess = 0;
                                            Common.ShowAlert(resourcesAlert.titleAlert, json.Message);
                                        } else {
                                            if (json.IdOrder != 0 && json.IdOrder != null) {
                                                //// Update new data for MyOrder
                                                //Common.Ajax({
                                                //    type: "POST",
                                                //    url: Cart.Url.RefreshMyOrder,
                                                //    cache: false,
                                                //    dataType: "html",
                                                //    data: {}
                                                //}, function (data) {
                                                //});

                                                Common.LogUserActivity.LogUserAPI(null, 8, null, null);
                                                //window.location.href = ('VnPayRedirect/account?orderId=' + json.IdOrder + '&accountId=' + idAccount + '&isWeb=1');
                                                window.location.href = ('VnPayRedirect/account?orderId=' + json.IdOrder + '&accountId=' + idAccount + '&isWeb=1' + "&method=" + idPaymentMethod + "&lang=" + data.Lang);
                                            }
                                        }
                                    });
                                }

                            },
                            Value: resourcesAlert.confirmedYes
                        },
                    }
                }, resourcesAlert.confirmedContinue);
            }
        }
    },
    
    UpdatePromotion: function (json) {
        $(".totalDiscountMoney").val(0);
        Common.Ajax({
            type: "POST",
            url: Cart.Url.GetInfoPromotionCode,
            cache: false,
            dataType: "json",
            data: { idPromotionCode: json[0].idpromotioncode }
        }, function (data) {
            if (data == 0) { //giỏ hàng rỗng hoặc không áp dụng mã khuyến mãi
                localStorage.removeItem("promotion");
            }
            else {
                let promotionElement = document.getElementById('promotion');
                promotionElement.innerHTML = '';

                promotionElement.setAttribute("data-idpromotioncode", data.IdPromotionCode);
                promotionElement.setAttribute("data-idpromotioncodesetting", data.IdPromotionCodeSetting);
                promotionElement.setAttribute("data-idplatform", data.IdPlatform);

                let imgElement = document.createElement('div');
                imgElement.setAttribute("class", "img-promotion");
                imgElement.setAttribute("style", "width: 20%");

                let img = document.createElement('img');
                //if (data.TypePromotion == 2) {
                //    img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion.png");
                //} else if (data.TypePromotion == 1) {
                //    img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion-percent.png");
                //} else if (data.TypePromotion == 3) {
                //    img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion-gift.png");
                //} else {
                //    img.setAttribute("src", window.location.origin + "/Content/images/Notification/icon-gift.png");
                //}
                if (data.ListCodeResult[0].Unit == 2) {
                    img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion.png");
                } else if (data.ListCodeResult[0].Unit == 1) {
                    img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion-percent.png");
                } else if (data.ListCodeResult[0].Unit == 3) {
                    img.setAttribute("src", window.location.origin + "/Content/images/Cart/icon-promotion-gift.png");
                } else {
                    img.setAttribute("src", window.location.origin + "/Content/images/Notification/icon-gift.png");
                }



                img.setAttribute("style", "width: 100%; height: auto");

                let contentElement = document.createElement('div');
                contentElement.setAttribute("class", "content-promotion");
                contentElement.setAttribute("style", "display: flex; flex-direction: column; justify-content: space-around; padding: 0% 2%; width: 80%; background-color: #F5F5F5; font-family: 'MontserratMedium'; cursor: default;position:relative");

                let spanTitle = document.createElement('span');
                spanTitle.setAttribute("style", "white-space: nowrap; overflow: hidden; text-overflow: ellipsis; color: #046296");
                //spanTitle.innerHTML = data.Title;
                if (currentLanguage === 'en-US' && data.TitleEN !== null && data.TitleEN !== '') {
                    spanTitle.innerHTML = data.TitleEN;
                } else {
                    spanTitle.innerHTML = data.Title;
                }

                let spanCode = document.createElement('span');
                spanCode.setAttribute("style", "color: #5C5C5C");
                //spanCode.innerHTML = "Mã: " + data.Code;
                spanCode.innerHTML = resourcesText.code + ": " + data.Code;

                let hr = document.createElement('div');
                hr.setAttribute("style", "border-bottom: 2px solid #DFE6EB");

                let expiredCondition = document.createElement('div');
                expiredCondition.setAttribute("style", "display: flex; justify-content: space-between; flex-direction: row; font-size: 10px");

                let spanExpired = document.createElement('span');
                spanExpired.setAttribute("style", "color: #84898C");
                //let remainHourNumbers = data.RemainingHours;
                //if (remainHourNumbers < 24) {
                //    spanExpired.innerHTML = "HSD: Sắp hết hạn còn " + remainHourNumbers + " giờ";
                //} else if (remainHourNumbers < 48) {
                //    spanExpired.innerHTML = "HSD: Sắp hết hạn còn 1 ngày";
                //} else {
                //    spanExpired.innerHTML = "HSD: Từ nay đến " + data.TDate;
                //}
                spanExpired.innerHTML = resourcesText.expiration_date + ": " + data.RemainingDateString;

                let spanCondition = document.createElement('span');
                spanCondition.setAttribute("style", "color: #2A96D1;  cursor: pointer");
                spanCondition.setAttribute("onclick", "Common.Cart.ConditionVoucher('" + data.IdPromotionCode + "',1)")
                //spanCondition.innerHTML = "Điều kiện";
                spanCondition.innerHTML = resourcesText.requirement;

                let btnRemoveHtml = document.createElement('div');
                btnRemoveHtml.setAttribute("style", "display: flex;position: absolute;top: -5px;right: -1%;font-size: 17px;cursor: pointer;");
                btnRemoveHtml.setAttribute("onclick", "Common.Cart.RemovePromotionCode()");

                let iconRemoveHtml = document.createElement('i');
                iconRemoveHtml.setAttribute("style", "color: red");
                iconRemoveHtml.setAttribute("class", "fa fa-times-circle");
                iconRemoveHtml.setAttribute("aria-hidden", "true");

                //comment
                expiredCondition.append(spanExpired);
                expiredCondition.append(spanCondition);
                btnRemoveHtml.appendChild(iconRemoveHtml);

                imgElement.append(img);
                contentElement.append(spanTitle);
                contentElement.append(spanCode);
                contentElement.append(hr);
                contentElement.append(expiredCondition);
                contentElement.append(btnRemoveHtml);
                promotionElement.append(imgElement);
                promotionElement.append(contentElement);

                //var discountAfterApplyCodePromotion = 0;
                //var totalAfterApplyCodePromotion = 0;
                //var totalMoney = $(".totalMoney").val();
                //var totalDiscountCurrent = $(".totalDiscountMoney").val();
                //var totalCurrent = $(".totalRealMoney").val();
                //var discountValue = data.ListCodeResult[0].Value;
                //if (data.ListCodeResult[0].Unit == 2) { // voucher VND
                //    discountAfterApplyCodePromotion = parseFloat(totalDiscountCurrent) + discountValue > totalMoney ? totalMoney : parseFloat(totalDiscountCurrent) + discountValue;
                //    totalAfterApplyCodePromotion = parseFloat(totalMoney) - discountValue < 0 ? 0 : parseFloat(totalMoney) - discountValue;
                //} else if (data.ListCodeResult[0].Unit == 1) { // coupon %
                //    totalAfterApplyCodePromotion = parseFloat(totalMoney) - (parseFloat(totalMoney) * (discountValue / 100));
                //    discountAfterApplyCodePromotion = parseFloat(totalDiscountCurrent) + (parseFloat(totalMoney) - totalAfterApplyCodePromotion);
                //}
                //else {
                //    totalAfterApplyCodePromotion = parseFloat(totalMoney);
                //}
                //$("#totalMoney").text(new Intl.NumberFormat(lang).format(parseFloat(totalMoney)) + " vnđ");
                //$("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(discountAfterApplyCodePromotion) + " vnđ");
                //$(".totalDiscountMoney").val(discountAfterApplyCodePromotion);
                //$("#totalRealMoney").text(new Intl.NumberFormat(lang).format(totalAfterApplyCodePromotion) + " vnđ");
                //$(".totalRealMoney").val(totalAfterApplyCodePromotion);
                //$("#modal-dialog-voucher").modal("hide");


                var totalAppMoney = parseFloat($(".totalMoney").val());
                var totalAfterApplyCodePromotion = totalAppMoney;
                var discountAfterApplyCodePromotion = 0;
                if (data.ListCodeResult != null && data.ListCodeResult.length > 0) {
                    for (let i = 0; i < data.ListCodeResult.length; i++) {
                        if (data.ListCodeResult[i].Unit == 1) {
                            let tmpValue = parseFloat(totalAfterApplyCodePromotion) * parseInt(data.ListCodeResult[i].Value) / 100;
                            discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + tmpValue;
                            totalAfterApplyCodePromotion = parseFloat(totalAfterApplyCodePromotion) - tmpValue;
                        } else {
                            totalAfterApplyCodePromotion = parseInt(totalAfterApplyCodePromotion) - parseInt(data.ListCodeResult[i].Value) > 0 ? parseInt(totalAfterApplyCodePromotion) - parseInt(data.ListCodeResult[i].Value) : 0;
                            //discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + parseInt(data.ListCodeResult[i].Value) > totalAppMoney ? totalAppMoney : parseFloat(discountAfterApplyCodePromotion) + parseInt(data.ListCodeResult[i].Value);
                            discountAfterApplyCodePromotion = parseFloat(discountAfterApplyCodePromotion) + parseInt(data.ListCodeResult[i].Value);
                        }
                    }
                }

                $("#totalMoney").text(new Intl.NumberFormat(lang).format(parseFloat(totalMoney)) + " vnđ");
                $("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(discountAfterApplyCodePromotion) + " vnđ");
                $(".totalDiscountMoney").val(discountAfterApplyCodePromotion);
                $("#totalRealMoney").text(new Intl.NumberFormat(lang).format(totalAfterApplyCodePromotion) + " vnđ");
                $(".totalRealMoney").val(totalAfterApplyCodePromotion);
                $("#modal-dialog-voucher").modal("hide");

                Common.Cart.RemoveGiftAppInListCartAppNewV2();
                Common.Cart.UpdatePromotionGiftApp(json);
            }
        });


    },

    UpdatePromotionGiftApp: function (json) {
        Common.Ajax({
            type: "POST",
            url: Cart.Url.GetInfoGiftAppPromotion,
            cache: false,
            dataType: "json",
            data: { idPromotionCode: json[0].idpromotioncode }
        }, function (data) {
            //if (data != null && data.ListGiftAppResult.length > 0) {
            //    Common.Cart.AddGiftAppToCartUI(data);
            //}
            if (data != null && data.GiftGradeSubjectApp != null && data.GiftGradeSubjectApp.ListGiftAppResult.length > 0) {
                //Common.Cart.AddGiftAppToCartUI(data);
                Common.Cart.AddGiftAppToCartUINewV2(data);
            }
        });
    },

    AddGiftAppToCartUI: function (data) {
        var dataApp = data.GiftGradeSubjectApp.ListGiftAppResult;
        var dataMap = data.GiftGradeSubjectApp.MapGradeSubjectGiftApp;
        var newTotalMoney = Number.parseFloat(Common.Cart.GetTotalMoneyFromPriceListApp());

        giftAppBlock = "<div style='margin-left:40px; margin-top: 5px' class='promotion-gift-block-header'>"
            + "<span style='font-weight:bold;font-size:15.77px;font-family:'MontserratSemiBold';'>Quà tặng từ mã khuyến mãi</span>"
            + "</div>";

        for (let i = 0; i < dataMap.length; i++) {
            var seriesData = dataApp.filter(x => x.IdGrade === dataMap[i].IdGrade && x.IdSubject === dataMap[i].IdSubject
                && x.IdSeries === dataMap[i].IdSerieSupplement && x.IdSupplement === 0);
            var supplementData = dataApp.filter(x => x.IdSupplement === dataMap[i].IdSerieSupplement);
            //var supplementData = dataApp.filter(x => x.IdGrade === dataMap[i].IdGrade && x.IdSubject === dataMap[i].IdSubject
            //    && x.IdSupplement === dataMap[i].IdSerieSupplement);

            var gradeName = "";
            var subjectName = "";
            var serieName = "";
            var idGrade = 0;
            var idSubject = 0;
            var idSeries = 0;
            var idSupplement = 0;
            if (seriesData.length > 0) {
                gradeName = seriesData[0].NameGrade;
                subjectName = seriesData[0].NameSubject;
                serieName = seriesData[0].NameSeries;
                idGrade = seriesData[0].IdGrade;
                idSubject = seriesData[0].IdSubject;
                idSeries = seriesData[0].IdSeries;
            } else {
                gradeName = supplementData[0].NameGrade;
                subjectName = supplementData[0].NameSubject;
                serieName = supplementData[0].NameSupplement;
                idSupplement = supplementData[0].IdSupplement;
            }

            var serieHeader = "";
            if (seriesData.length > 0) {
                serieHeader = "<div style='color:#2A96D1;margin-left: 50px;font-size:13.64px;margin-top:5px;font-weight:bold;display:inline-flex;width:100%' class='promotion-gift-block-serie'>"
                    + "<span> " + gradeName + "  >  " + subjectName + "  >  " + serieName + " </span>"
                    + "</div>";
                if (gradeName == undefined || gradeName == null || gradeName == '') {
                    serieHeader = serieHeader.replace(gradeName + "  >  ", "");
                }
                if (subjectName == undefined || subjectName == null || subjectName == '') {
                    serieHeader = serieHeader.replace(subjectName + "  >  ", "");
                }
            } else {
                serieHeader = "<div style='color:#2A96D1;margin-left: 50px;font-size:13.64px;margin-top:5px;font-weight:bold;display:inline-flex;width:100%' class='promotion-gift-block-serie'>"
                    + "<span> Ứng dụng bổ trợ  >  " + subjectName + "  >  " + serieName + " </span>"
                    + "</div>";
                if (subjectName == undefined || subjectName == null || subjectName == '') {
                    serieHeader = serieHeader.replace(subjectName + "  >  ", "");
                }
            }

            giftAppBlock += serieHeader;

            var listAppBlock = "<div style='width: 100%; margin-top: 20px;display: flex' class='promotion-gift-block-list-app'>"
                + "<div style='width:60%;float:left'>";

            for (let j = 0; j < seriesData.length; j++) {
                let itemPriceAppLength = $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] span.itemAppPrice").length;
                if (itemPriceAppLength >= 1) {
                    let itemPriceApp = $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] span.itemAppPrice:eq(0)").html()
                    let priceApp = Number.parseInt(itemPriceApp.replace('đ', '').split(".").join("").trim());
                    newTotalMoney -= priceApp;
                }

                // Hide app existed in Cart
                $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "']").hide();
                Common.Cart.RefreshSerieSupplementHeader(idGrade, idSubject, idSeries, idSupplement, seriesData[j].IdApp, true);

                let appBlock = "<div style='width:100%;background-color:white;float:left;box-shadow: 1px 3px 4px -1px #9e9e9e;margin-bottom:10px' data-idtheme='" + seriesData[j].IdApp + "'>"
                    + "<div style='width:20%;float:left;position: relative'>"
                    + "<img src='/Content/CoverAllTheme/" + seriesData[j].ImageApp + "' style='padding: 20px 20px;width:100%'>"
                    + "</div>"
                    + "<div style='width:60%;float:left;padding-top:40px;'>"
                    + "<span style='font-size:13.64px;'>" + seriesData[j].NameApp + "</span> <br>"
                    + "</div>"
                    + "<div style='width: 20%; text-align: center; float:right; padding-top:45px'>"
                    + "<div style='width:80%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.6rem;'>"
                    + "<span style='color:white;font-size:1vw;font-weight:bold;'>QUÀ TẶNG</span>"
                    + "</div>"
                    + "</div>"
                    + "</div>";
                listAppBlock += appBlock;
            }

            for (let j = 0; j < supplementData.length; j++) {

                let itemPriceAppLength = $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] span.itemAppPrice").length;
                if (itemPriceAppLength >= 1) {
                    let itemPriceApp = $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] span.itemAppPrice:eq(0)").html()
                    let priceApp = Number.parseInt(itemPriceApp.replace('đ', '').split(".").join("").trim());
                    newTotalMoney -= priceApp;
                }

                // Hide app existed in Cart
                $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "']").hide();
                Common.Cart.RefreshSerieSupplementHeader(idGrade, idSubject, idSeries, idSupplement, supplementData[j].IdApp, true);

                let appBlock = "<div style='width:100%;background-color:white;float:left;box-shadow: 1px 3px 4px -1px #9e9e9e;margin-bottom:10px' data-idtheme='" + supplementData[j].IdApp + "'>"
                    + "<div style='width:20%;float:left;position: relative'>"
                    + "<img src='/Content/CoverAllTheme/" + supplementData[j].ImageApp + "' style='padding: 20px 20px;width:100%'>"
                    + "</div>"
                    + "<div style='width:60%;float:left;padding-top:40px;'>"
                    + "<span style='font-size:13.64px;'>" + supplementData[j].NameApp + "</span> <br>"
                    + "</div>"
                    + "<div style='width: 20%; text-align: center; float:right; padding-top:45px'>"
                    + "<div style='width:80%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.6rem;'>"
                    + "<span style='color:white;font-size:1vw;font-weight:bold;'>QUÀ TẶNG</span>"
                    + "</div>"
                    + "</div>"
                    + "</div>";
                listAppBlock += appBlock;
            }

            listAppBlock += "</div>" + "</div>";
            giftAppBlock += listAppBlock;
        }

        $("div.main-cart-content").append(giftAppBlock);

        // Update new Total Money if has gift apps
        var typeUnit = 0;
        var discountValue = 0;
        if (data.ListGiftDiscount != null && data.ListGiftDiscount.length > 0) {
            typeUnit = data.ListGiftDiscount[0].Unit;
            discountValue = data.ListGiftDiscount[0].Value;
        }
        Common.Cart.UpdateNewTotalMoneyForGiftApp(newTotalMoney, typeUnit, discountValue);
    },

    AddGiftAppToCartUINew: function (data) {
        var dataApp = data.GiftGradeSubjectApp.ListGiftAppResult;
        var dataMap = data.GiftGradeSubjectApp.MapGradeSubjectGiftApp;
        var newTotalMoney = Number.parseFloat(Common.Cart.GetTotalMoneyFromPriceListApp());

        for (let i = 0; i < dataMap.length; i++) {
            var seriesData = dataApp.filter(x => x.IdGrade === dataMap[i].IdGrade && x.IdSubject === dataMap[i].IdSubject
                && x.IdSeries === dataMap[i].IdSerieSupplement && x.IdSupplement === 0);
            var supplementData = dataApp.filter(x => x.IdSupplement === dataMap[i].IdSerieSupplement);

            var gradeName = "";
            var subjectName = "";
            var serieName = "";
            var idGrade = 0;
            var idSubject = 0;
            var idSeries = 0;
            var idSupplement = 0;
            if (seriesData.length > 0) {
                gradeName = seriesData[0].NameGrade;
                subjectName = seriesData[0].NameSubject;
                serieName = seriesData[0].NameSeries;
                idGrade = seriesData[0].IdGrade;
                idSubject = seriesData[0].IdSubject;
                idSeries = seriesData[0].IdSeries;
            } else {
                gradeName = supplementData[0].NameGrade;
                subjectName = supplementData[0].NameSubject;
                serieName = supplementData[0].NameSupplement;
                idSupplement = supplementData[0].IdSupplement;
            }

            // Check and create Series/Supplement block, Series/Supplement header and Series/Supplement title if has not existed
            var serieHeader = "";
            if (seriesData.length > 0) {
                let lengthSeriesBlock = $("div#series-block").length;
                if (lengthSeriesBlock < 1) {
                    let seriesBlock = "<div class='series-supplement-block promotion-block' id='series-block'>" +
                        "<div style='margin-left:40px; margin-top: 5px' class='series-supplement-header promotion-header' id='series-header'>" +
                        "<span class='series-supplement-header' style='font-weight:bold;font-size:15.77px'>Series</span>" +
                        "</div>" +
                        "</div>";
                    $("div#list-cart-content").prepend(seriesBlock);
                }
                let lengthTitle = $("div.series-supplement-title[data-idgrade='" + idGrade + "'][data-idsubject='" + idSubject + "'][data-idseries='" + idSeries + "']").length;
                if (lengthTitle < 1) {
                    let seriesTitle = "<div class='series-supplement-title promotion-title' type-title='series' data-idgrade='" + idGrade + "' data-idsubject='" + idSubject + "' data-idseries='" + idSeries + "' " +
                        "style='color:#2A96D1;margin-left: 50px;font-size:13.64px;margin-top:5px;font-weight: bold;display:inline-flex;width:100%'>" +
                        "<span> " + gradeName + "  >  " + subjectName + "  >  " + serieName + " </span>"
                    "</div>";
                    if (gradeName == undefined || gradeName == null || gradeName == '') {
                        seriesTitle = serieHeader.replace(gradeName + "  >  ", "");
                    }
                    if (subjectName == undefined || subjectName == null || subjectName == '') {
                        seriesTitle = serieHeader.replace(subjectName + "  >  ", "");
                    }

                    let listSeriesApp = "<div style='width: 100%; margin-top: 20px;display: flex' class='list-series-supplement-app' " +
                        "data-idgrade='" + idGrade + "' data-idsubject='" + idSubject + "' data-idseries='" + idSeries + "'>" +
                        "<div style='width:60%;float:left' class='list-series-supplement-app-detail'></div>" +
                        "</div>";

                    $("div#series-block").append(seriesTitle);
                    $("div#series-block").append(listSeriesApp);
                }
            } else {
                let lengthSupplementBlock = $("div.series-supplement-block[data-idsupplement='" + idSupplement + "']").length;
                if (lengthSupplementBlock < 1) {
                    let supplementBlock = "";
                    if (serieName.toLowerCase().includes("truyện đọc")) {
                        supplementBlock += "<div class='series-supplement-block promotion-block' id='ereader-block' data-idsupplement='" + idSupplement + "'>" +
                            "<div style='margin-left:40px; margin-top: 5px' class='series-supplement-header promotion-header' id='ereader-header' data-idsupplement='" + idSupplement + "'>" +
                            "<span style='font-weight:bold;font-size:15.77px'>Ứng dụng bổ trợ truyện đọc</span>" +
                            "</div>" +
                            "<div>";
                    } else if (serieName.toLowerCase().includes("khóa học")) {
                        supplementBlock += "<div class='series-supplement-block promotion-block' id='onlinecourse-block' data-idsupplement='" + idSupplement + "'>" +
                            "<div style='margin-left:40px; margin-top: 5px' class='series-supplement-header promotion-header' id='onlinecourse-header' data-idsupplement='" + idSupplement + "'>" +
                            "<span style='font-weight:bold;font-size:15.77px'>Khóa học trực tuyến</span>" +
                            "</div>" +
                            "<div>";
                    } else {
                        supplementBlock += "<div class='series-supplement-block promotion-block' id='supplement-block' data-idsupplement='" + idSupplement + "'>" +
                            "<div style='margin-left:40px; margin-top: 5px' class='series-supplement-header promotion-header' id='supplement-header' data-idsupplement='" + idSupplement + "'>" +
                            "<span style='font-weight:bold;font-size:15.77px'>Ứng dụng bổ trợ</span>" +
                            "</div>" +
                            "</div>";
                    }
                    $("div#list-cart-content").append(supplementBlock);
                }

                let lengthTitle = $("div.series-supplement-title[data-idsupplement='" + idSupplement + "']").length;
                if (lengthTitle < 1) {
                    let supplementTitle = "<div class='series-supplement-title promotion-title' type-title='supplement' data-idsupplement='" + idSupplement + "' " +
                        "style='color:#2A96D1;margin-left: 50px;font-size:13.64px;margin-top:5px;font-weight: bold;display:inline-flex;width:100%'>" +
                        "<span> " + subjectName + "</span>" +
                        "</div>";

                    let listSupplementApp = "<div style='width: 100%; margin-top: 20px;display: flex' class='list-series-supplement-app' " +
                        "data-idsupplement='" + idSupplement + "'>" +
                        "<div style='width:60%;float:left' class='list-series-supplement-app-detail'></div>" +
                        "</div>";

                    $("div.series-supplement-block[data-idsupplement='" + idSupplement + "']").append(supplementTitle);
                    $("div.series-supplement-block[data-idsupplement='" + idSupplement + "']").append(listSupplementApp);
                }
            }



            for (let j = 0; j < seriesData.length; j++) {
                // Check if app has existed in Cart => Remove price app from total money
                let itemPriceAppLength = $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] span.itemAppPrice").length;
                if (itemPriceAppLength >= 1) {
                    let itemPriceApp = $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] span.itemAppPrice:eq(0)").html()
                    let priceApp = Number.parseInt(itemPriceApp.replace('đ', '').split(".").join("").trim());
                    newTotalMoney -= priceApp;
                }

                // Check if app has existed in Cart => Update price app to Gift label
                let lengthExistedApp = $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "']").length;
                if (lengthExistedApp > 0) {
                    $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] span.itemAppPrice").hide();
                    let giftLabelPrice = "<div class='gift-app-price-label' style='width:80%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.6rem;'>" +
                        "<span style='color:white;font-size:1vw;font-weight:bold;'>QUÀ TẶNG</span>" +
                        "</div>";
                    $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] div.app-price-block span").hide();
                    $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] div.app-price-block:last").append(giftLabelPrice);
                    continue;
                }

                // Create new div contained gift app
                let appBlock = "<div style='width:100%;background-color:white;float:left;box-shadow: 1px 3px 4px -1px #9e9e9e;margin-bottom:10px' class='promotion-app' data-idtheme='" + seriesData[j].IdApp + "'>"
                    + "<div style='width:20%;float:left;position: relative'>"
                    + "<img src='/Content/CoverAllTheme/" + seriesData[j].ImageApp + "' style='padding: 20px 20px;width:100%'>"
                    + "</div>"
                    + "<div style='width:52%;float:left;padding-top:40px;'>"
                    + "<span style='font-size:13.64px;'>" + seriesData[j].NameApp + "</span> <br>"
                    + "</div>"
                    + "<div style='width: 20%; text-align: center; float:right; padding-top:45px'>"
                    + "<div style='width:80%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.6rem;'>"
                    + "<span style='color:white;font-size:1vw;font-weight:bold;'>QUÀ TẶNG</span>"
                    + "</div>"
                    + "</div>"
                    + "</div>";
                $("div.list-series-supplement-app[data-idgrade='" + idGrade + "'][data-idsubject='" + idSubject + "'][data-idseries='" + idSeries + "'] div.list-series-supplement-app-detail").append(appBlock);
            }

            for (let j = 0; j < supplementData.length; j++) {
                // Check if app has existed in Cart => Remove price app from total money
                let itemPriceAppLength = $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] span.itemAppPrice").length;
                if (itemPriceAppLength >= 1) {
                    let itemPriceApp = $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] span.itemAppPrice:eq(0)").html()
                    let priceApp = Number.parseInt(itemPriceApp.replace('đ', '').split(".").join("").trim());
                    newTotalMoney -= priceApp;
                }

                // Check if app has existed in Cart => Update price app to Gift label
                let lengthExistedApp = $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "']").length;
                if (lengthExistedApp > 0) {
                    $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] span.itemAppPrice").hide();
                    let giftLabelPrice = "<div class='gift-app-price-label' style='width:80%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.6rem;'>" +
                        "<span style='color:white;font-size:1vw;font-weight:bold;'>QUÀ TẶNG</span>" +
                        "</div>";
                    $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] div.app-price-block span").hide();
                    $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] div.app-price-block:last").append(giftLabelPrice);
                    continue;
                }

                // Create new div contained gift app
                let appBlock = "<div style='width:100%;background-color:white;float:left;box-shadow: 1px 3px 4px -1px #9e9e9e;margin-bottom:10px' class='promotion-app' data-idtheme='" + supplementData[j].IdApp + "'>"
                    + "<div style='width:20%;float:left;position: relative'>"
                    + "<img src='/Content/CoverAllTheme/" + supplementData[j].ImageApp + "' style='padding: 20px 20px;width:100%'>"
                    + "</div>"
                    + "<div style='width:52%;float:left;padding-top:40px;'>"
                    + "<span style='font-size:13.64px;'>" + supplementData[j].NameApp + "</span> <br>"
                    + "</div>"
                    + "<div style='width: 20%; text-align: center; float:right; padding-top:45px'>"
                    + "<div style='width:80%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.6rem;'>"
                    + "<span style='color:white;font-size:1vw;font-weight:bold;'>QUÀ TẶNG</span>"
                    + "</div>"
                    + "</div>"
                    + "</div>";
                $("div.list-series-supplement-app[data-idsupplement='" + idSupplement + "'] div.list-series-supplement-app-detail").append(appBlock);
            }
        }

        // Update new Total Money if has gift apps
        //var typeUnit = 0;
        //var discountValue = 0;
        //if (data.ListGiftDiscount != null && data.ListGiftDiscount.length > 0) {
        //    typeUnit = data.ListGiftDiscount[0].Unit;
        //    discountValue = data.ListGiftDiscount[0].Value;
        //}
        //Common.Cart.UpdateNewTotalMoneyForGiftApp(newTotalMoney, typeUnit, discountValue);
        Common.Cart.UpdateNewTotalMoneyForGiftAppNew(newTotalMoney, data.ListGiftDiscount);
    },

    AddGiftAppToCartUINewV2: function (data) {
        var dataApp = data.GiftGradeSubjectApp.ListGiftAppResult;
        var dataMap = data.GiftGradeSubjectApp.MapGradeSubjectGiftApp;
        var newTotalMoney = Number.parseFloat(Common.Cart.GetTotalMoneyFromPriceListApp());

        for (let i = 0; i < dataMap.length; i++) {
            var seriesData = dataApp.filter(x => x.IdGrade === dataMap[i].IdGrade && x.IdSubject === dataMap[i].IdSubject
                && x.IdSeries === dataMap[i].IdSerieSupplement && x.IdSupplement === 0);
            var supplementData = dataApp.filter(x => x.IdSupplement === dataMap[i].IdSerieSupplement);

            var gradeName = "";
            var subjectName = "";
            var serieName = "";
            var idGrade = 0;
            var idSubject = 0;
            var idSeries = 0;
            var idSupplement = 0;
            if (seriesData.length > 0) {
                gradeName = seriesData[0].NameGrade;
                subjectName = seriesData[0].NameSubject;
                //serieName = seriesData[0].NameSeries;
                if (Common.Cart.currentLanguage === 'en-US' && seriesData[0].NameSeriesEN !== null
                    && seriesData[0].NameSeriesEN !== '') {
                    serieName = seriesData[0].NameSeriesEN;
                } else {
                    serieName = seriesData[0].NameSeries;
                }
                idGrade = seriesData[0].IdGrade;
                idSubject = seriesData[0].IdSubject;
                idSeries = seriesData[0].IdSeries;
            } else {
                gradeName = supplementData[0].NameGrade;
                subjectName = supplementData[0].NameSubject;
                //serieName = supplementData[0].NameSupplement;
                if (Common.Cart.currentLanguage === 'en-US' && supplementData[0].NameSupplementEN !== null
                    && supplementData[0].NameSupplementEN !== '') {
                    serieName = supplementData[0].NameSupplementEN;
                } else {
                    serieName = supplementData[0].NameSupplement;
                }
                idSupplement = supplementData[0].IdSupplement;
            }

            // Check and create Series/Supplement block, Series/Supplement header and Series/Supplement title if has not existed
            var serieHeader = "";
            if (seriesData.length > 0) {
                let lengthSeriesBlock = $("div#series-block").length;
                if (lengthSeriesBlock < 1) {
                    let seriesBlock = "<div class='series-supplement-block promotion-block' id='series-block' style='width: 102%;'>" +
                        "<div style='margin-top: 5px' class='series-supplement-header promotion-header' id='series-header'>" +
                        "<span class='series-supplement-header' style='font-weight:bold;font-size:15.77px;padding-left: 2.2%;'>Series</span>" +
                        "</div>" +
                        "</div>";
                    $("div#list-cart-content").prepend(seriesBlock);
                }
                let lengthTitle = $("div.series-supplement-title[data-idgrade='" + idGrade + "'][data-idsubject='" + idSubject + "'][data-idseries='" + idSeries + "']").length;
                if (lengthTitle < 1) {
                    let seriesTitle = "<div class='series-supplement-title promotion-title' type-title='series' data-idgrade='" + idGrade + "' data-idsubject='" + idSubject + "' data-idseries='" + idSeries + "' " +
                        "style='color:#2A96D1;font-size:12px;margin-top:5px;font-weight: bold;display:inline-flex;width:100%;padding-left:2.2%;padding-top:1%;'>" +
                        "<span> " + gradeName + "&nbsp;&nbsp;>&nbsp;&nbsp;" + subjectName + "&nbsp;&nbsp;>&nbsp;&nbsp;" + serieName + " </span>" +
                        "</div>";
                    if (gradeName == undefined || gradeName == null || gradeName == '') {
                        seriesTitle = serieHeader.replace(gradeName + "  >  ", "");
                    }
                    if (subjectName == undefined || subjectName == null || subjectName == '') {
                        seriesTitle = serieHeader.replace(subjectName + "  >  ", "");
                    }

                    let listSeriesApp = "<div style='width: 100%; margin-top: 10px;display: flex' class='list-series-supplement-app list-promotion-app' " +
                        "data-idgrade='" + idGrade + "' data-idsubject='" + idSubject + "' data-idseries='" + idSeries + "'>" +
                        "<div style='width:60%;float:left; background-color: white; box-shadow: 1px 3px 4px -1px #9e9e9e; padding-bottom: 5px;' class='list-series-supplement-app-detail'>" +
                        "</div>" +
                        "</div>";

                    $("div#series-block").append(seriesTitle);
                    $("div#series-block").append(listSeriesApp);
                }
            } else {
                let lengthSupplementBlock = $("div.series-supplement-block[data-idsupplement='" + idSupplement + "']").length;
                if (lengthSupplementBlock < 1) {
                    let supplementBlock = "";
                    if (serieName.toLowerCase().includes("truyện đọc")) {
                        supplementBlock += "<div class='series-supplement-block promotion-block' id='ereader-block' data-idsupplement='" + idSupplement + "' style='width: 102%;padding-top:1rem;'>" +
                            "<div style='margin-top: 5px' class='series-supplement-header promotion-header' id='ereader-header' data-idsupplement='" + idSupplement + "'>" +
                            "<span class='series-supplement-header' style='font-weight:bold;font-size:15.77px;padding-left: 2.2%;'>" + serieName + "</span>" +
                            "</div>" +
                            "<div>";
                    } else if (serieName.toLowerCase().includes("khóa học")) {
                        supplementBlock += "<div class='series-supplement-block promotion-block' id='onlinecourse-block' data-idsupplement='" + idSupplement + "' style='width: 102%;padding-top:1rem;'>" +
                            "<div style='margin-top: 5px' class='series-supplement-header promotion-header' id='onlinecourse-header' data-idsupplement='" + idSupplement + "'>" +
                            "<span class='series-supplement-header' style='font-weight:bold;font-size:15.77px;padding-left: 2.2%;'>" + serieName + "</span>" +
                            "</div>" +
                            "<div>";
                    } else {
                        supplementBlock += "<div class='series-supplement-block promotion-block' id='supplement-block' data-idsupplement='" + idSupplement + "' style='width: 102%;padding-top:1rem;'>" +
                            "<div style='margin-top: 5px' class='series-supplement-header promotion-header' id='supplement-header' data-idsupplement='" + idSupplement + "'>" +
                            "<span class='series-supplement-header' style='font-weight:bold;font-size:15.77px;padding-left: 2.2%;'>" + serieName + "</span>" +
                            "</div>" +
                            "</div>";
                    }
                    $("div#list-cart-content").append(supplementBlock);
                }

                let lengthTitle = $("div.series-supplement-title[data-idsupplement='" + idSupplement + "']").length;
                if (lengthTitle < 1) {
                    let supplementTitle = "<div class='series-supplement-title promotion-title' type-title='supplement' data-idsupplement='" + idSupplement + "' " +
                        "style='color:#2A96D1;font-size:12px;margin-top:5px;font-weight: bold;display:inline-flex;width:100%;padding-left:2.2%;padding-top:1%;'>" +
                        "<span> " + subjectName + "</span>" +
                        "</div>";

                    let listSupplementApp = "<div style='width: 100%; margin-top: 10px;display: flex' class='list-series-supplement-app list-promotion-app' " +
                        "data-idsupplement='" + idSupplement + "'>" +
                        "<div style='width:60%;float:left; background-color: white; box-shadow: 1px 3px 4px -1px #9e9e9e; padding-bottom: 5px;' class='list-series-supplement-app-detail'>" +
                        "</div>" +
                        "</div>";

                    $("div.series-supplement-block[data-idsupplement='" + idSupplement + "']").append(supplementTitle);
                    $("div.series-supplement-block[data-idsupplement='" + idSupplement + "']").append(listSupplementApp);
                }
            }

            for (let j = 0; j < seriesData.length; j++) {
                // Check if app has existed in Cart => Remove price app from total money
                let itemPriceAppLength = $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] span.itemAppPrice").length;
                if (itemPriceAppLength >= 1) {
                    let itemPriceApp = $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] span.itemAppPrice:eq(0)").html();
                    //let priceApp = Number.parseInt(itemPriceApp.replace('đ', '').split(".").join("").trim());
                    let priceAppStr = itemPriceApp.replace('đ', '').split(".").join("").trim().split(" ")[0];
                    let priceApp = Number.parseInt(priceAppStr.replace(/,/g, ''));
                    newTotalMoney -= priceApp;
                }

                // Check if app has existed in Cart => Update price app to Gift label
                let lengthExistedApp = $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "']").length;
                if (lengthExistedApp > 0) {
                    let giftLabelPrice = "<div class='gift-app-price-label' style='width: 38%; text-align: center; display: flex; align-items: center; justify-content: flex-end;'>" +
                        "<div style='width:40%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.4rem;'>" +
                        "<span style='color:white;font-size:0.9vw;font-weight:bold;'>" + resourcesText.gift.toUpperCase() + "</span>" +
                        "</div>" +
                        "</div>";
                    $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] div.app-price-block").hide();
                    $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] div.app-info a").hide();
                    $("div.itemRowApp[data-idtheme='" + seriesData[j].IdApp + "'] div.itemRowAppContent:eq(0)").append(giftLabelPrice);
                    continue;
                }

                // Create new div contained gift app
                let countItemSeries = $("div.list-series-supplement-app[data-idgrade='" + idGrade + "'][data-idsubject='" + idSubject + "'][data-idseries='" + idSeries + "'] div.itemRowAppContent").length;
                let borderTopSeries = "1px solid #c9dae7;";
                if (j == 0 && countItemSeries < 1) {
                    borderTopSeries = "none;";
                }

                let nameApp = seriesData[j].NameApp;
                if (Common.Cart.currentLanguage === 'en-US' && seriesData[j].NameAppEN !== null
                    && seriesData[j].NameAppEN !== '') {
                    nameApp = seriesData[j].NameAppEN;
                }

                let appBlock = "<div style='width:100%;float:left;padding-left:1.5%;padding-right:4%;' class='promotion-app' data-idtheme='" + seriesData[j].IdApp + "'>"
                    + "<div class='itemRowAppContent' style='display:flex;border-top:" + borderTopSeries + "'>"

                    + "<div class='app-thumbnail' style='width:11.5%;float:left;position: relative;padding: 12px 9px 12px 12px;'>"
                    + "<img src='/Content/CoverAllTheme/" + seriesData[j].ImageApp + "' style='width:100%'>"
                    + "</div>"

                    + "<div class='app-info' style='width:72%;float:left;padding-top:1rem;'>"
                    //+ "<p style='font-size:14.5px;margin:0;'>" + seriesData[j].NameApp + "</p>"
                    + "<p style='font-size:14.5px;margin:0;'>" + nameApp + "</p>"
                    + "<p style='font-size:8px;color:#6D7880;font-weight:lighter;margin-bottom:2px;'>By DTP Digital Education</p>"
                    + "</div>"

                    + "<div style='width: 38%; text-align: center; display: flex; align-items: center; justify-content: flex-end;'>"
                    + "<div style='width:40%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.4rem;'>"
                    + "<span style='color:white;font-size:0.9vw;font-weight:bold;'>" + resourcesText.gift.toUpperCase() + "</span>"
                    + "</div>"
                    + "</div>"

                    + "</div>"
                    + "</div>";
                $("div.list-series-supplement-app[data-idgrade='" + idGrade + "'][data-idsubject='" + idSubject + "'][data-idseries='" + idSeries + "'] div.list-series-supplement-app-detail").append(appBlock);
                $("div.promotion-app[data-idtheme='" + seriesData[j].IdApp + "'] p:eq(0)").css("font-family", "MontserratMedium");
                $("div.promotion-app[data-idtheme='" + seriesData[j].IdApp + "'] p:eq(1)").css("font-family", "Montserrat");
            }



            for (let j = 0; j < supplementData.length; j++) {
                // Check if app has existed in Cart => Remove price app from total money
                let itemPriceAppLength = $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] span.itemAppPrice").length;
                if (itemPriceAppLength >= 1) {
                    let itemPriceApp = $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] span.itemAppPrice:eq(0)").html();
                    //let priceApp = Number.parseInt(itemPriceApp.replace('đ', '').split(".").join("").trim());
                    let priceAppStr = itemPriceApp.replace('đ', '').split(".").join("").trim().split(" ")[0];
                    let priceApp = Number.parseInt(priceAppStr.replace(/,/g, ''));
                    newTotalMoney -= priceApp;
                }

                // Check if app has existed in Cart => Update price app to Gift label
                let lengthExistedApp = $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "']").length;
                if (lengthExistedApp > 0) {
                    let giftLabelPrice = "<div class='gift-app-price-label' style='width: 38%; text-align: center; display: flex; align-items: center; justify-content: flex-end;'>" +
                        "<div style='width:40%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.4rem;'>" +
                        "<span style='color:white;font-size:0.9vw;font-weight:bold;'>" + resourcesText.gift.toUpperCase() + "</span>" +
                        "</div>" +
                        "</div>";
                    $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] div.app-price-block").hide();
                    $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] div.app-info a").hide();
                    $("div.itemRowApp[data-idtheme='" + supplementData[j].IdApp + "'] div.itemRowAppContent:eq(0)").append(giftLabelPrice);
                    continue;
                }

                // Create new div contained gift app
                let countItemSupplement = $("div.list-series-supplement-app[data-idsupplement='" + idSupplement + "'] div.itemRowAppContent").length;
                let borderTopSupplement = "1px solid #c9dae7;";
                if (j == 0 && countItemSupplement < 1) {
                    borderTopSupplement = "none;";
                }

                let nameApp = supplementData[j].NameApp;
                if (Common.Cart.currentLanguage === 'en-US' && supplementData[j].NameAppEN !== null
                    && supplementData[j].NameAppEN !== '') {
                    nameApp = supplementData[j].NameAppEN;
                }

                let appBlock = "<div style='width:100%;float:left;padding-left:1.5%;padding-right:4%;' class='promotion-app' data-idtheme='" + supplementData[j].IdApp + "'>"
                    + "<div class='itemRowAppContent' style='display:flex;border-top:" + borderTopSupplement + "'>"

                    + "<div class='app-thumbnail' style='width:11.5%;float:left;position: relative;padding: 12px 9px 12px 12px;'>"
                    + "<img src='/Content/CoverAllTheme/" + supplementData[j].ImageApp + "' style='width:100%'>"
                    + "</div>"

                    + "<div class='app-info' style='width:72%;float:left;padding-top:1rem;'>"
                    //+ "<p style='font-size:14.5px;margin:0;'>" + supplementData[j].NameApp + "</p>"
                    + "<p style='font-size:14.5px;margin:0;'>" + nameApp + "</p>"
                    + "<p style='font-size:8px;color:#6D7880;font-weight:lighter;margin-bottom:2px;'>By DTP Digital Education</p>"
                    + "</div>"

                    + "<div style='width: 38%; text-align: center; display: flex; align-items: center; justify-content: flex-end;'>"
                    + "<div style='width:40%;background-color:#0cad7a;border-radius:10px;display:flex;justify-content:center;align-items:center;height:2.4rem;'>"
                    + "<span style='color:white;font-size:0.9vw;font-weight:bold;'>" + resourcesText.gift.toUpperCase() + "</span>"
                    + "</div>"
                    + "</div>"

                    + "</div>"
                    + "</div>";
                $("div.list-series-supplement-app[data-idsupplement='" + idSupplement + "'] div.list-series-supplement-app-detail").append(appBlock);
                $("div.promotion-app[data-idtheme='" + supplementData[j].IdApp + "'] p:eq(0)").css("font-family", "MontserratMedium");
                $("div.promotion-app[data-idtheme='" + supplementData[j].IdApp + "'] p:eq(1)").css("font-family", "Montserrat");
            }
        }

        Common.Cart.UpdateNewTotalMoneyForGiftAppNew(newTotalMoney, data.ListGiftDiscount);
    },

    RemovePromotionCode: function () {
        Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.contentRemovePromotionCode, {
            Close: { Display: true },
            Items: {
                Continue: {
                    Name: "Continue",
                    OnClick: function (target) {
                        localStorage.removeItem("promotion");
                        let ttMoney = parseFloat(totalMoney);
                        $('#promotion').html(null);
                        $('#promotion').removeAttr('data-idpromotioncode');
                        $('#promotion').removeAttr('data-idpromotioncodesetting');
                        $('#promotion').removeAttr('data-idplatform');
                        $("#totalMoney").text(new Intl.NumberFormat(lang).format(ttMoney) + " vnđ");
                        $(".totalMoney").val(ttMoney);
                        $("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(0) + " vnđ");
                        $(".totalDiscountMoney").val(0);
                        $("#totalRealMoney").text(new Intl.NumberFormat(lang).format(ttMoney) + " vnđ");
                        $(".totalRealMoney").val(ttMoney);

                        //Common.Cart.RemoveGiftAppInListCartApp();
                        Common.Cart.RemoveGiftAppInListCartAppNewV2();

                        Common.HideAlert();
                    },
                    Value: resourcesAlert.confirmedYes
                },
            }
        }, resourcesAlert.confirmedContinue);
    },

    RemovePromotionCodeNoAlert: function () {
        localStorage.removeItem("promotion");
        let ttMoney = parseFloat(totalMoney);
        $('#promotion').html(null);
        $('#promotion').removeAttr('data-idpromotioncode');
        $('#promotion').removeAttr('data-idpromotioncodesetting');
        $('#promotion').removeAttr('data-idplatform');
        $("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(0) + " vnđ");
        $(".totalDiscountMoney").val(0);
        $("#totalRealMoney").text(new Intl.NumberFormat(lang).format(ttMoney) + " vnđ");
        $(".totalRealMoney").val(ttMoney);

        //Common.Cart.RemoveGiftAppInListCartApp();
        Common.Cart.RemoveGiftAppInListCartAppNewV2();
    },

    RemoveGiftAppInListCartApp: function () {
        // Remove element about Gift App
        $("div.promotion-gift-block-header").remove();
        $("div.promotion-gift-block-serie").remove();
        $("div.promotion-gift-block-list-app").remove();

        // Redisplay apps contained in Old Gift Apps
        //$('div.itemRowApp[style*="display: none"]').show();
        Common.Cart.RefreshSerieSupplementHeader(null, null, null, null, null, false);
    },

    RemoveGiftAppInListCartAppNew: function () {
        $("div.promotion-app").remove();
        $("div.promotion-title").remove();
        $("div.promotion-header").remove();
        $("div.promotion-block").remove();

        $("div.gift-app-price-label").remove();
        $("div.itemRowApp div.app-price-block span").show();
    },

    RemoveGiftAppInListCartAppNewV2: function () {
        $("div.promotion-app").remove();
        $("div.list-promotion-app").remove();
        $("div.promotion-title").remove();
        $("div.promotion-header").remove();
        $("div.promotion-block").remove();

        $("div.gift-app-price-label").remove();
        $("div.itemRowApp div.app-info a").show();
        $("div.itemRowApp div.app-price-block").show();
    },

    UpdateNewTotalMoneyForGiftApp: function (newTotalMoney, typeUnit, discountValue) {
        $("#totalMoney").text(new Intl.NumberFormat(lang).format(newTotalMoney) + " vnđ");
        var totalDiscountMoney = 0;
        if (typeUnit == 1) {
            totalDiscountMoney = parseInt(newTotalMoney) * parseInt(discountValue) / 100;
        } else if (typeUnit == 2) {
            totalDiscountMoney = parseInt(discountValue);
        }

        if (totalDiscountMoney > newTotalMoney) {
            totalDiscountMoney = newTotalMoney;
        }

        $("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(parseFloat(totalDiscountMoney)) + " vnđ");
        $("#totalRealMoney").text(new Intl.NumberFormat(lang).format(newTotalMoney - totalDiscountMoney) + " vnđ");
    },

    UpdateNewTotalMoneyForGiftAppNew: function (newTotalMoney, ListGiftDiscount) {
        $("#totalMoney").text(new Intl.NumberFormat(lang).format(newTotalMoney) + " vnđ");
        var totalDiscountMoney = 0;
        var totalAfterApplyCodePromotion = newTotalMoney;

        if (ListGiftDiscount != null && ListGiftDiscount.length > 0) {
            for (let i = 0; i < ListGiftDiscount.length; i++) {
                if (ListGiftDiscount[i].Unit == 1) {
                    let tmpValue = parseFloat(totalAfterApplyCodePromotion) * parseInt(ListGiftDiscount[i].Value) / 100;
                    totalDiscountMoney = parseFloat(totalDiscountMoney) + tmpValue;
                    totalAfterApplyCodePromotion = parseFloat(totalAfterApplyCodePromotion) - tmpValue;
                } else {
                    totalAfterApplyCodePromotion = parseInt(totalAfterApplyCodePromotion) - parseInt(ListGiftDiscount[i].Value) > 0 ? parseInt(totalAfterApplyCodePromotion) - parseInt(ListGiftDiscount[i].Value) : 0;
                    totalDiscountMoney = parseFloat(totalDiscountMoney) + parseInt(ListGiftDiscount[i].Value);
                }
            }
        }
        $("#totalDiscountMoney").text(new Intl.NumberFormat(lang).format(parseFloat(totalDiscountMoney)) + " vnđ");
        $("#totalRealMoney").text(new Intl.NumberFormat(lang).format(totalAfterApplyCodePromotion) + " vnđ");
    },

    GetTotalMoneyFromPriceListApp: function () {
        var totalPriceMoney = 0;
        for (let i = 0; i < $("span.itemAppPrice").length; i++) {
            let itemAppPrice = $("span.itemAppPrice:eq(" + i + ")").html();
            let appPriceStr = itemAppPrice.replace('đ', '').split(".").join("").trim().split(" ")[0];
            //let appPrice = Number.parseInt(itemAppPrice.replace('đ', '').split(".").join("").trim());
            let appPrice = Number.parseInt(appPriceStr.replace(/,/g, ''));
            if (appPrice != null && appPrice != undefined) {
                totalPriceMoney += appPrice;
            }
        }
        return totalPriceMoney;
    },

    RefreshSerieSupplementHeader: function (a, b, c, d, e, f) {
        //var lengthApp = $('div.itemRowApp[style*="display: block"]').show();
        if (!f) {
            $("div.series-supplement-header:hidden").show();
            $('div.series-supplement-title:hidden').show();
            $('div.list-series-supplement-app:hidden').show();
            $('div.itemRowApp:hidden').show();
            return;
        }

        // Check any app in series - supplement is displayed if not hide block list app and hide title
        var lengthAppSeries = $('div.itemRowApp[data-idgrade=' + a + '][data-idsubject=' + b + '][data-idseries=' + c + ']:visible').length;
        if (lengthAppSeries < 1) {
            $('div.list-series-supplement-app[data-idgrade=' + a + '][data-idsubject=' + b + '][data-idseries=' + c + ']').hide();
            $('div.series-supplement-title[data-idgrade=' + a + '][data-idsubject=' + b + '][data-idseries=' + c + ']').hide();
        }
        var lenghAppSupplement = $('div.itemRowApp[data-idsupplement=' + d + ']:visible').length;
        if (lenghAppSupplement < 1) {
            $('div.list-series-supplement-app[data-idsupplement=' + d + ']').hide();
            $('div.series-supplement-title[data-idsupplement=' + d + ']').hide();
        }

        // Check any title series - supplement is displayed if not hide block header
        var lenghSeries = $('div.series-supplement-title[type-title="series"]:visible').length;
        if (lenghSeries < 1) {
            $("div.series-supplement-header#series-header").hide();
        }
        var lenghSupplement = $('div.series-supplement-title[type-title="supplement"]:visible').length;
        if (lenghSupplement < 1) {
            $("div.series-supplement-header#supplement-header").hide();
        }
        var lenghEreader = $('div.series-supplement-title[type-title="ereader"]:visible').length;
        if (lenghEreader < 1) {
            $("div.series-supplement-header#ereader-header").hide();
        }
    }
}
;
var StarRating = function () {
    return this.Init();

};
StarRating.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;

        $("#rating_one_star").click(function () {
            $("#starRating").val(1);
            Common.StarRating.SetStarForRating();
            Common.StarRating.OnHoverSecondStar();
            Common.StarRating.OnHoverThirdStar();
            Common.StarRating.OnHoverFourthStar();
            Common.StarRating.OnHoverFifthStar();
        });

        $("#rating_two_star").click(function () {
            $("#starRating").val(2);
            Common.StarRating.SetStarForRating();
            Common.StarRating.OnHoverThirdStar();
            Common.StarRating.OnHoverFourthStar();
            Common.StarRating.OnHoverFifthStar();
        });

        $("#rating_three_star").click(function () {
            $("#starRating").val(3);
            Common.StarRating.SetStarForRating();
            Common.StarRating.OnHoverFourthStar();
            Common.StarRating.OnHoverFifthStar();

        });

        $("#rating_four_star").click(function () {
            $("#starRating").val(4);
            Common.StarRating.SetStarForRating();
            Common.StarRating.OnHoverFifthStar();
        });


        $("#rating_five_star").click(function () {
            $("#starRating").val(5);
            Common.StarRating.SetStarForRating();
        });

        //$("#itemUserReviewL").click(function () {
        //    $("#listReviewSuggestL").slideToggle(function () {
        //        if ($('#listReviewSuggestL').css('display') == 'none') {

        //            $("#userCommend").css('display', 'none');
        //        }
        //        else {
        //            $("#userCommend").css('display', 'flex');

        //        }
        //    });
        //    $(this).addClass('isLiked');
        //    $("#itemUserReviewDL").removeClass('isDisliked');
        //    $("#listReviewSuggestDL").css('display','none');

        //});

        $("#itemUserReviewL").click(function () {
            $("#listReviewSuggestL").slideToggle(100, function () {
                if ($('#listReviewSuggestL').css('display') == 'none') {

                    $("#userCommend").css('display', 'none');
                }
                else {
                    $("#userCommend").css('display', 'flex');

                }
            });
            $(this).addClass('isLiked');
            $("#itemUserReviewDL").removeClass('isDisliked');
            $("#listReviewSuggestDL").css('display', 'none');
            $("#itemUserReviewL").bind('click');
        });


        $("#itemUserReviewDL").click(function () {
            $("#listReviewSuggestDL").slideToggle(100, function () {
                if ($('#listReviewSuggestDL').css('display') == 'none') {
                    $("#userCommend").css('display', 'none');
                }
                else {
                    $("#userCommend").css('display', 'flex');
                }
            });
            $(this).addClass('isDisliked');
            $("#itemUserReviewL").removeClass('isLiked');
            $("#listReviewSuggestL").css('display', 'none');
        });
        $("#btnSubmitRating").click(function () {
            var starRating = $("#starRating").val();
            var userName = $("#userFullName").val();
            var flag = 0;
            if (starRating == 0) {
                $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');
                $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');
                $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');
                $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');

                $("#input_starRating_error").removeClass("hidden");
                flag = 1;
            }
            if (userName == "" || userName == null) {
                $("#userFullName").css("border", "1px solid red");
                $("#input_fullName_error").removeClass("hidden");
                flag = 1;
            }
            if ($('#doNotShowAgain').is(":checked")) {
                $("#isNotShowAgain").val(true);
            }


            if ($("#itemUserReviewL").hasClass('isLiked')) {
                var title = $("#listReviewSuggestL .isChose").data('title');
                var idReviewTitle = $("#listReviewSuggestL .isChose").data('idrwt');
                //title = title.split("\n").join(" ");
                $("#reviewTitle").val(title);
                $("#idReviewTitle").val(idReviewTitle);
                $("#idReactionType").val(0);

            }
            else if ($("#itemUserReviewDL").hasClass('isDisliked')) {
                var title = $("#listReviewSuggestDL .isChose").data('title');
                var idReviewTitle = $("#listReviewSuggestDL .isChose").data('idrwt');
                //title = title.split("\n").join(" ");
                $("#reviewTitle").val(title);
                $("#idReviewTitle").val(idReviewTitle);
                $("#idReactionType").val(1);

            }

            if (flag == 0) {
                $("#form-dialog-star-vote").submit();
                Common.ShowLoading(true);
            }

        });
        $("#userFullName").focus(function () {
            $("#userFullName").css("border", "1px solid rgb(211, 216, 222)");
            $("#input_fullName_error").addClass("hidden");
        });
        $("#listReviewSuggestL .item_Review_Suggest").click(function () {
            $("#listReviewSuggestL .item_Review_Suggest").css("background-color", "white");
            $("#listReviewSuggestL .item_Review_Suggest").css("box-shadow", "0px 3px rgba(14, 105, 138, 0.1)");
            $("#listReviewSuggestL .item_Review_Suggest").removeClass('isChose');
            $(this).css('background', '#50b9d6');
            $(this).css('box-shadow', '0px 3px #b3f4ff');
            $(this).addClass('isChose');

        });
        $("#listReviewSuggestDL .item_Review_Suggest").click(function () {
            $("#listReviewSuggestDL .item_Review_Suggest").css("background-color", "white");
            $("#listReviewSuggestDL .item_Review_Suggest").css("box-shadow", "0px 3px rgba(14, 105, 138, 0.1)");
            $("#listReviewSuggestDL .item_Review_Suggest").removeClass('isChose');
            $(this).css('background', '#50b9d6');
            $(this).css('box-shadow', '0px 3px #b3f4ff');
            $(this).addClass('isChose');
        });
    },
    SetStarForRating: function () {
        var starRating = $("#starRating").val();
        if (starRating == 1) {
            //$("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
            //$("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
            //$("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
            //$("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png'); 
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_one_star").unbind('mouseover mouseout');
        }
        else if (starRating == 2) {
            //$("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
            //$("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
            //$("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
            //$("#rating_one_star").unbind('mouseover mouseout');
            //$("#rating_two_star").unbind('mouseover mouseout');
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_one_star").unbind('mouseover mouseout');
            $("#rating_two_star").unbind('mouseover mouseout');
        }
        else if (starRating == 3) {
            //$("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
            //$("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
            //$("#rating_one_star").unbind('mouseover mouseout');
            //$("#rating_two_star").unbind('mouseover mouseout');
            //$("#rating_three_star").unbind('mouseover mouseout');
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_one_star").unbind('mouseover mouseout');
            $("#rating_two_star").unbind('mouseover mouseout');
            $("#rating_three_star").unbind('mouseover mouseout');
        }
        else if (starRating == 4) {
            //$("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
            //$("#rating_one_star").unbind('mouseover mouseout');
            //$("#rating_two_star").unbind('mouseover mouseout');
            //$("#rating_three_star").unbind('mouseover mouseout');
            //$("#rating_four_star").unbind('mouseover mouseout');
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_one_star").unbind('mouseover mouseout');
            $("#rating_two_star").unbind('mouseover mouseout');
            $("#rating_three_star").unbind('mouseover mouseout');
            $("#rating_four_star").unbind('mouseover mouseout');

        }
        else if (starRating == 5) {
            //$("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
            //$("#rating_one_star").unbind('mouseover mouseout');
            //$("#rating_two_star").unbind('mouseover mouseout');
            //$("#rating_three_star").unbind('mouseover mouseout');
            //$("#rating_four_star").unbind('mouseover mouseout');
            //$("#rating_five_star").unbind('mouseover mouseout');
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_one_star").unbind('mouseover mouseout');
            $("#rating_two_star").unbind('mouseover mouseout');
            $("#rating_three_star").unbind('mouseover mouseout');
            $("#rating_four_star").unbind('mouseover mouseout');
            $("#rating_five_star").unbind('mouseover mouseout');
        }
    },
    OnHoverFirstStar: function () {
        //$("#rating_one_star").mouseover(function () {
        //    $(this).attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#input_starRating_error").addClass("hidden");

        //}).mouseout(function () {
        //    if ($("#starRating").val() == 0) {
        //        $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //});
        $("#rating_one_star").mouseover(function () {
            $(".rating-star").removeClass('rating-error');
            $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#input_starRating_error").addClass("hidden");

        }).mouseout(function () {
            if ($("#starRating").val() == 0) {
                $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            } else {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
        });
    },
    OnHoverSecondStar: function () {
        //$("#rating_two_star").mouseover(function () {
        //    $(this).attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');

        //    $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#input_starRating_error").addClass("hidden");
        //}).mouseout(function () {
        //    if ($("#starRating").val() == 0) {

        //        $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //    else {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //});
        $("#rating_two_star").mouseover(function () {
            $(".rating-star").removeClass('rating-error');
            $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');

            $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#input_starRating_error").addClass("hidden");
        }).mouseout(function () {
            if ($("#starRating").val() == 0) {

                $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
            else {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
        });
    },
    OnHoverThirdStar: function () {
        //$("#rating_three_star").mouseover(function () {
        //    $(this).attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#input_starRating_error").addClass("hidden");
        //}).mouseout(function () {
        //    if ($("#starRating").val() == 0) {

        //        $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //    else if ($("#starRating").val() == 1) {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }

        //    else {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }

        //});
        $("#rating_three_star").mouseover(function () {
            $(".rating-star").removeClass('rating-error');
            $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#input_starRating_error").addClass("hidden");
        }).mouseout(function () {
            if ($("#starRating").val() == 0) {

                $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
            else if ($("#starRating").val() == 1) {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }

            else {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }

        });
    },
    OnHoverFourthStar: function () {
        //$("#rating_four_star").mouseover(function () {
        //    $(this).attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    $("#input_starRating_error").addClass("hidden");
        //}).mouseout(function () {
        //    if ($("#starRating").val() == 0) {

        //        $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //    else if ($("#starRating").val() == 1) {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //    else if ($("#starRating").val() == 2) {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //    else {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }

        //});
        $("#rating_four_star").mouseover(function () {
            $(".rating-star").removeClass('rating-error');
            $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            $("#input_starRating_error").addClass("hidden");
        }).mouseout(function () {
            if ($("#starRating").val() == 0) {

                $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_five_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
            else if ($("#starRating").val() == 1) {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
            else if ($("#starRating").val() == 2) {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
            else {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }

        });
    },
    OnHoverFifthStar: function () {
        //$("#rating_five_star").mouseover(function () {
        //    $(this).attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-gold-star.png');
        //    $("#input_starRating_error").addClass("hidden");
        //}).mouseout(function () {
        //    if ($("#starRating").val() == 0) {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    } else if ($("#starRating").val() == 1) {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //    else if ($("#starRating").val() == 2) {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //    else if ($("#starRating").val() == 3) {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //        $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }
        //    else {
        //        $(this).attr('src', '/Content/images/StarVoting/ic-white-star.png');
        //    }

        //});
        $("#rating_five_star").mouseover(function () {
            $(".rating-star").removeClass('rating-error');
            $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-yellow.png');
            $("#input_starRating_error").addClass("hidden");
        }).mouseout(function () {
            if ($("#starRating").val() == 0) {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_one_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            } else if ($("#starRating").val() == 1) {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_two_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
            else if ($("#starRating").val() == 2) {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_three_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
            else if ($("#starRating").val() == 3) {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
                $("#rating_four_star").attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }
            else {
                $(this).attr('src', '/Content/images/StarVoting/icon-rating-star-grey.png');
            }

        });
    },
    ChooseReviewTitle: function (idrvt, title) {

    },
    ShowDialogSuccess: function (result) {
        Common.ShowLoading(false);
        $("#dialog-star-vote").modal('hide');
        if (result == 1) {
            $("#dialog-submit-star-vote-success").modal('show');
            var bar = new ProgressBar.Circle("#submitRatingSuccess", {
                strokeWidth: 6,
                easing: 'easeInOut',
                duration: 300,
                color: '#009e0f',
                trailColor: 'white',
                trailWidth: 0,
                svgStyle: null,
            });

            bar.animate(0.9);
            if ($("#save-success").hasClass("fadeout")) {
                setTimeout(function () {
                    $('#save-success').removeClass("fadeout").addClass("fadein");
                }, 1000);
            }
        }
        else if (result == 0) {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.content_Sorry_App_review_failed)

        }
        else if (result == 2) {
            Common.ShowAlert(resourcesAlert.titleAlert, resourcesAlert.content_You_have_already_rated_this_app)

        }
    },
    HideDialogRating: function (idTheme) {
        var doNotShowAgain = $('#doNotShowAgain').is(":checked");
        Common.Ajax({
            type: "POST",
            url: StarRating.Url.HideDialogRating,
            cache: false,
            dataType: "html",
            data: {
                idTheme: idTheme,
                doNotShowAgain: doNotShowAgain
            }
        }, function (result) {
        });
        $("#dialog-star-vote").modal('hide');
    },

    // Function using for new UI v2
    OnClickChooseReviewType: function (obj) {
        var srcImgLike = "/Content/images/StarVoting/icon-rating-like.png";
        var srcImgDislike = "/Content/images/StarVoting/icon-rating-dislike.png";
        var srcImgChosenLike = "/Content/images/StarVoting/icon-rating-like-chosen.png";
        var srcImgChosenDislike = "/Content/images/StarVoting/icon-rating-dislike-chosen.png";

        $(".choose-comment-type-button-border").removeClass("chosen")
            .removeClass("chosen-like").removeClass("chosen-dislike");
        var idType = $(obj).attr('id');
        if (idType.includes("dislike")) {
            $(obj).addClass("chosen").addClass("chosen-dislike");
            $("#img-comment-dislike").attr('src', srcImgChosenDislike);
            $("#img-comment-like").attr('src', srcImgLike);
            this.OnClickChooseReviewDisLike();
        } else {
            $(obj).addClass("chosen").addClass("chosen-like");
            $("#img-comment-like").attr('src', srcImgChosenLike);
            $("#img-comment-dislike").attr('src', srcImgDislike);
            this.OnClickChooseReviewLike();
        }
    },
    OnClickChooseReviewLike: function () {
        $("#catalog-review-like").slideToggle(100, function () {
            $("#catalog-review-dislike").hide();
            var display = $("#catalog-review-like").css('display');
            if (display.includes('block')) {
                $(".choose-not-show-dialog").addClass('chosen-type-show-dialog');
                $("#idReactionType").val(0);
            } else {
                $(".choose-not-show-dialog").removeClass('chosen-type-show-dialog');
            }
        });
    },
    OnClickChooseReviewDisLike: function () {
        $("#catalog-review-dislike").slideToggle(100, function () {
            $("#catalog-review-like").hide();
            var display = $("#catalog-review-dislike").css('display');
            if (display.includes('block')) {
                $(".choose-not-show-dialog").addClass('chosen-type-show-dialog');
                $("#idReactionType").val(1);
            } else {
                $(".choose-not-show-dialog").removeClass('chosen-type-show-dialog');
            }
        });
    },
    OnClickChooseReviewContent: function (obj) {
        $(".item-review").removeClass("chosen-review-type");
        $(obj).addClass("chosen-review-type");
        var idReviewTitle = $(obj).data('idrwt');
        var reviewText = $(obj).data('title');
        $("#idReviewTitle").val(idReviewTitle);
        $("#reviewTitle").val(reviewText);
    },
    OnClickChooseNotShowAgain: function (obj) {
        $(obj).toggleClass("disable-show");
        if ($(obj).hasClass('disable-show')) {
            $("#isNotShowAgain").val(true);
        } else {
            $("#isNotShowAgain").val(false);
        }
    },
    OnClickChangeDescription: function (obj) {
        $("#Description").val($(obj).val());
    },
    OnClickSubmitRating: function () {
        var starRating = $("#starRating").val();
        var isValid = true;
        if (starRating == 0) {
            $("#rating_one_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');
            $("#rating_two_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');
            $("#rating_three_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');
            $("#rating_four_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');
            $("#rating_five_star").attr('src', '/Content/images/StarVoting/ic-red-star.png');

            $(".rating-star").addClass('rating-error');
            $("#input_starRating_error").removeClass("hidden");
            isValid = false;
        }

        if (isValid) {
            $("#form-dialog-star-vote").submit();
            Common.ShowLoading(true);
        }
    },
    OnClickHideDialogRating: function (idTheme) {
        var doNotShowAgain = $("#isNotShowAgain").val();
        Common.Ajax({
            type: "POST",
            url: StarRating.Url.HideDialogRating,
            cache: false,
            dataType: "html",
            data: {
                idTheme: idTheme,
                doNotShowAgain: doNotShowAgain
            }
        }, function (result) {
        });
        $("#dialog-star-vote").modal('hide');
    },
};
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.ProgressBar=a()}}(function(){var a;return function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){return e(b[g][1][a]||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(b,c,d){!function(b,e){"object"==typeof d&&"object"==typeof c?c.exports=e():"function"==typeof a&&a.amd?a("shifty",[],e):"object"==typeof d?d.shifty=e():b.shifty=e()}(window,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=3)}([function(a,b,c){"use strict";(function(a){function d(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function e(a){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function g(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?f(Object(c),!0).forEach(function(b){h(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):f(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=new v,c=b.tween(a);return c.tweenable=b,c}c.d(b,"e",function(){return q}),c.d(b,"c",function(){return s}),c.d(b,"b",function(){return t}),c.d(b,"a",function(){return v}),c.d(b,"d",function(){return i});var j=c(1),k="undefined"!=typeof window?window:a,l=k.requestAnimationFrame||k.webkitRequestAnimationFrame||k.oRequestAnimationFrame||k.msRequestAnimationFrame||k.mozCancelRequestAnimationFrame&&k.mozRequestAnimationFrame||setTimeout,m=function(){},n=null,o=null,p=g({},j),q=function(a,b,c,d,e,f,g){var h=a<f?0:(a-f)/e;for(var i in b){var j=g[i],k=j.call?j:p[j],l=c[i];b[i]=l+(d[i]-l)*k(h)}return b},r=function(a,b){var c=a._attachment,d=a._currentState,e=a._delay,f=a._easing,g=a._originalState,h=a._duration,i=a._step,j=a._targetState,k=a._timestamp,l=k+e+h,m=b>l?l:b,n=h-(l-m);m>=l?(i(j,c,n),a.stop(!0)):(a._applyFilter("beforeTween"),m<k+e?(m=1,h=1,k=1):k+=e,q(m,d,g,j,h,k,f),a._applyFilter("afterTween"),i(d,c,n))},s=function(){for(var a=v.now(),b=n;b;){var c=b._next;r(b,a),b=c}},t=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",c={},d=e(b);if("string"===d||"function"===d)for(var f in a)c[f]=b;else for(var g in a)c[g]=b[g]||"linear";return c},u=function(a){if(a===n)(n=a._next)?n._previous=null:o=null;else if(a===o)(o=a._previous)?o._next=null:n=null;else{var b=a._previous,c=a._next;b._next=c,c._previous=b}a._previous=a._next=null},v=function(){function a(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,a),this._currentState=b,this._configured=!1,this._filters=[],this._timestamp=null,this._next=null,this._previous=null,c&&this.setConfig(c)}var b,c,e;return b=a,(c=[{key:"_applyFilter",value:function(a){var b=!0,c=!1,d=void 0;try{for(var e,f=this._filters[Symbol.iterator]();!(b=(e=f.next()).done);b=!0){var g=e.value[a];g&&g(this)}}catch(a){c=!0,d=a}finally{try{b||null==f.return||f.return()}finally{if(c)throw d}}}},{key:"tween",value:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,c=this._attachment,d=this._configured;return!b&&d||this.setConfig(b),this._pausedAtTime=null,this._timestamp=a.now(),this._start(this.get(),c),this.resume()}},{key:"setConfig",value:function(){var b=this,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=c.attachment,e=c.delay,f=void 0===e?0:e,h=c.duration,i=void 0===h?500:h,j=c.easing,k=c.from,l=c.promise,n=void 0===l?Promise:l,o=c.start,p=void 0===o?m:o,q=c.step,r=void 0===q?m:q,s=c.to;this._configured=!0,this._attachment=d,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=f,this._start=p,this._step=r,this._duration=i,this._currentState=g({},k||this.get()),this._originalState=this.get(),this._targetState=g({},s||this.get());var u=this._currentState;this._targetState=g({},u,{},this._targetState),this._easing=t(u,j);var v=a.filters;for(var w in this._filters.length=0,v)v[w].doesApply(this)&&this._filters.push(v[w]);return this._applyFilter("tweenCreated"),this._promise=new n(function(a,c){b._resolve=a,b._reject=c}),this._promise.catch(m),this}},{key:"get",value:function(){return g({},this._currentState)}},{key:"set",value:function(a){this._currentState=a}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=a.now(),this._isPlaying=!1,u(this),this}},{key:"resume",value:function(){if(null===this._timestamp)return this.tween();if(this._isPlaying)return this._promise;var b=a.now();return this._pausedAtTime&&(this._timestamp+=b-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===n?(n=this,o=this,function a(){n&&(l.call(k,a,1e3/60),s())}()):(this._previous=o,o._next=this,o=this),this._promise}},{key:"seek",value:function(b){b=Math.max(b,0);var c=a.now();return this._timestamp+b===0?this:(this._timestamp=c-b,this._isPlaying||r(this,c),this)}},{key:"stop",value:function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],b=this._attachment,c=this._currentState,d=this._easing,e=this._originalState,f=this._targetState;if(this._isPlaying)return this._isPlaying=!1,u(this),a?(this._applyFilter("beforeTween"),q(1,c,e,f,1,0,d),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(c,b)):this._reject(c,b),this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(b){a.setScheduleFunction(b)}},{key:"dispose",value:function(){for(var a in this)delete this[a]}}])&&d(b.prototype,c),e&&d(b,e),a}();v.setScheduleFunction=function(a){return l=a},v.formulas=p,v.filters={},v.now=Date.now||function(){return+new Date}}).call(this,c(2))},function(a,b,c){"use strict";c.r(b),c.d(b,"linear",function(){return d}),c.d(b,"easeInQuad",function(){return e}),c.d(b,"easeOutQuad",function(){return f}),c.d(b,"easeInOutQuad",function(){return g}),c.d(b,"easeInCubic",function(){return h}),c.d(b,"easeOutCubic",function(){return i}),c.d(b,"easeInOutCubic",function(){return j}),c.d(b,"easeInQuart",function(){return k}),c.d(b,"easeOutQuart",function(){return l}),c.d(b,"easeInOutQuart",function(){return m}),c.d(b,"easeInQuint",function(){return n}),c.d(b,"easeOutQuint",function(){return o}),c.d(b,"easeInOutQuint",function(){return p}),c.d(b,"easeInSine",function(){return q}),c.d(b,"easeOutSine",function(){return r}),c.d(b,"easeInOutSine",function(){return s}),c.d(b,"easeInExpo",function(){return t}),c.d(b,"easeOutExpo",function(){return u}),c.d(b,"easeInOutExpo",function(){return v}),c.d(b,"easeInCirc",function(){return w}),c.d(b,"easeOutCirc",function(){return x}),c.d(b,"easeInOutCirc",function(){return y}),c.d(b,"easeOutBounce",function(){return z}),c.d(b,"easeInBack",function(){return A}),c.d(b,"easeOutBack",function(){return B}),c.d(b,"easeInOutBack",function(){return C}),c.d(b,"elastic",function(){return D}),c.d(b,"swingFromTo",function(){return E}),c.d(b,"swingFrom",function(){return F}),c.d(b,"swingTo",function(){return G}),c.d(b,"bounce",function(){return H}),c.d(b,"bouncePast",function(){return I}),c.d(b,"easeFromTo",function(){return J}),c.d(b,"easeFrom",function(){return K}),c.d(b,"easeTo",function(){return L});var d=function(a){return a},e=function(a){return Math.pow(a,2)},f=function(a){return-(Math.pow(a-1,2)-1)},g=function(a){return(a/=.5)<1?.5*Math.pow(a,2):-.5*((a-=2)*a-2)},h=function(a){return Math.pow(a,3)},i=function(a){return Math.pow(a-1,3)+1},j=function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)},k=function(a){return Math.pow(a,4)},l=function(a){return-(Math.pow(a-1,4)-1)},m=function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},n=function(a){return Math.pow(a,5)},o=function(a){return Math.pow(a-1,5)+1},p=function(a){return(a/=.5)<1?.5*Math.pow(a,5):.5*(Math.pow(a-2,5)+2)},q=function(a){return 1-Math.cos(a*(Math.PI/2))},r=function(a){return Math.sin(a*(Math.PI/2))},s=function(a){return-.5*(Math.cos(Math.PI*a)-1)},t=function(a){return 0===a?0:Math.pow(2,10*(a-1))},u=function(a){return 1===a?1:1-Math.pow(2,-10*a)},v=function(a){return 0===a?0:1===a?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*--a))},w=function(a){return-(Math.sqrt(1-a*a)-1)},x=function(a){return Math.sqrt(1-Math.pow(a-1,2))},y=function(a){return(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},z=function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},A=function(a){var b=1.70158;return a*a*((b+1)*a-b)},B=function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},C=function(a){var b=1.70158;return(a/=.5)<1?a*a*((1+(b*=1.525))*a-b)*.5:.5*((a-=2)*a*((1+(b*=1.525))*a+b)+2)},D=function(a){return-1*Math.pow(4,-8*a)*Math.sin((6*a-1)*(2*Math.PI)/2)+1},E=function(a){var b=1.70158;return(a/=.5)<1?a*a*((1+(b*=1.525))*a-b)*.5:.5*((a-=2)*a*((1+(b*=1.525))*a+b)+2)},F=function(a){var b=1.70158;return a*a*((b+1)*a-b)},G=function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},H=function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},I=function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?2-(7.5625*(a-=1.5/2.75)*a+.75):a<2.5/2.75?2-(7.5625*(a-=2.25/2.75)*a+.9375):2-(7.5625*(a-=2.625/2.75)*a+.984375)},J=function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},K=function(a){return Math.pow(a,4)},L=function(a){return Math.pow(a,.25)}},function(a,b){var c;c=function(){return this}();try{c=c||new Function("return this")()}catch(a){"object"==typeof window&&(c=window)}a.exports=c},function(a,b,c){"use strict";function d(a){return parseInt(a,16)}function e(a){var b=a._currentState;[b,a._originalState,a._targetState].forEach(B),a._tokenData=E(b)}function f(a){var b=a._currentState,c=a._originalState,d=a._targetState,e=a._easing,f=a._tokenData;K(e,f),[b,c,d].forEach(function(a){return F(a,f)})}function g(a){var b=a._currentState,c=a._originalState,d=a._targetState,e=a._easing,f=a._tokenData;[b,c,d].forEach(function(a){return J(a,f)}),L(e,f)}function h(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function i(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?h(Object(c),!0).forEach(function(b){j(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):h(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(a){return function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}}(a)||function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function m(a,b){var c=b.get(a);if(!c)throw new TypeError("attempted to get private field on non-instance");return c.get?c.get.call(a):c.value}function n(a,b,c,d,e,f){var g,h,i=0,j=0,k=0,l=0,m=0,n=0,o=function(a){return((i*a+j)*a+k)*a},p=function(a){return(3*i*a+2*j)*a+k},q=function(a){return a>=0?a:0-a};return i=1-(k=3*b)-(j=3*(d-b)-k),l=1-(n=3*c)-(m=3*(e-c)-n),g=a,h=function(a){return 1/(200*a)}(f),function(a){return((l*a+m)*a+n)*a}(function(a,b){var c,d,e,f,g,h;for(e=a,h=0;h<8;h++){if(f=o(e)-a,q(f)<b)return e;if(g=p(e),q(g)<1e-6)break;e-=f/g}if((e=a)<(c=0))return c;if(e>(d=1))return d;for(;c<d;){if(f=o(e),q(f-a)<b)return e;a>f?c=e:d=e,e=.5*(d-c)+c}return e}(g,h))}c.r(b);var o={};c.r(o),c.d(o,"doesApply",function(){return M}),c.d(o,"tweenCreated",function(){return e}),c.d(o,"beforeTween",function(){return f}),c.d(o,"afterTween",function(){return g});var p,q,r=c(0),s=/(\d|-|\.)/,t=/([^\-0-9.]+)/g,u=/[0-9.-]+/g,v=(p=u.source,q=/,\s*/.source,new RegExp("rgb\\(".concat(p).concat(q).concat(p).concat(q).concat(p,"\\)"),"g")),w=/^.*\(/,x=/#([0-9]|[a-f]){3,6}/gi,y=function(a,b){return a.map(function(a,c){return"_".concat(b,"_").concat(c)})},z=function(a){return"rgb(".concat((b=a,3===(b=b.replace(/#/,"")).length&&(b=(b=b.split(""))[0]+b[0]+b[1]+b[1]+b[2]+b[2]),[d(b.substr(0,2)),d(b.substr(2,2)),d(b.substr(4,2))]).join(","),")");var b},A=function(a,b,c){var d=b.match(a),e=b.replace(a,"VAL");return d&&d.forEach(function(a){return e=e.replace("VAL",c(a))}),e},B=function(a){for(var b in a){var c=a[b];"string"==typeof c&&c.match(x)&&(a[b]=A(x,c,z))}},C=function(a){var b=a.match(u).map(Math.floor);return"".concat(a.match(w)[0]).concat(b.join(","),")")},D=function(a){return a.match(u)},E=function(a){var b,c,d={};for(var e in a){var f=a[e];"string"==typeof f&&(d[e]={formatString:(b=f,c=void 0,c=b.match(t),c?(1===c.length||b.charAt(0).match(s))&&c.unshift(""):c=["",""],c.join("VAL")),chunkNames:y(D(f),e)})}return d},F=function(a,b){var c=function(c){D(a[c]).forEach(function(d,e){return a[b[c].chunkNames[e]]=+d}),delete a[c]};for(var d in b)c(d)},G=function(a,b){var c={};return b.forEach(function(b){c[b]=a[b],delete a[b]}),c},H=function(a,b){return b.map(function(b){return a[b]})},I=function(a,b){return b.forEach(function(b){return a=a.replace("VAL",+b.toFixed(4))}),a},J=function(a,b){for(var c in b){var d=b[c],e=d.chunkNames,f=d.formatString,g=I(f,H(G(a,e),e));a[c]=A(v,g,C)}},K=function(a,b){var c=function(c){var d=b[c].chunkNames,e=a[c];if("string"==typeof e){var f=e.split(" "),g=f[f.length-1];d.forEach(function(b,c){return a[b]=f[c]||g})}else d.forEach(function(b){return a[b]=e});delete a[c]};for(var d in b)c(d)},L=function(a,b){for(var c in b){var d=b[c].chunkNames,e=a[d[0]];a[c]="string"==typeof e?d.map(function(b){var c=a[b];return delete a[b],c}).join(" "):e}},M=function(a){var b=a._currentState;return Object.keys(b).some(function(a){return"string"==typeof b[a]})},N=new r.a,O=r.a.filters,P=function(a,b,c,d){var e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,f=i({},a),g=Object(r.b)(a,d);for(var h in N._filters.length=0,N.set({}),N._currentState=f,N._originalState=a,N._targetState=b,N._easing=g,O)O[h].doesApply(N)&&N._filters.push(O[h]);N._applyFilter("tweenCreated"),N._applyFilter("beforeTween");var j=Object(r.e)(c,f,a,b,1,e,g);return N._applyFilter("afterTween"),j},Q=function(){function a(){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,a),R.set(this,{writable:!0,value:[]});for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];c.forEach(this.add.bind(this))}var b,c,d;return b=a,(c=[{key:"add",value:function(a){return m(this,R).push(a),a}},{key:"remove",value:function(a){var b=m(this,R).indexOf(a);return~b&&m(this,R).splice(b,1),a}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return m(this,R).some(function(a){return a.isPlaying()})}},{key:"play",value:function(){return m(this,R).forEach(function(a){return a.tween()}),this}},{key:"pause",value:function(){return m(this,R).forEach(function(a){return a.pause()}),this}},{key:"resume",value:function(){return m(this,R).forEach(function(a){return a.resume()}),this}},{key:"stop",value:function(a){return m(this,R).forEach(function(b){return b.stop(a)}),this}},{key:"tweenables",get:function(){return k(m(this,R))}},{key:"promises",get:function(){return m(this,R).map(function(a){return a._promise})}}])&&l(b.prototype,c),d&&l(b,d),a}(),R=new WeakMap,S=function(a,b,c,d,e){var f=function(a,b,c,d){return function(e){return n(e,a,b,c,d,1)}}(b,c,d,e);return f.displayName=a,f.x1=b,f.y1=c,f.x2=d,f.y2=e,r.a.formulas[a]=f},T=function(a){return delete r.a.formulas[a]};c.d(b,"processTweens",function(){return r.c}),c.d(b,"Tweenable",function(){return r.a}),c.d(b,"tween",function(){return r.d}),c.d(b,"interpolate",function(){return P}),c.d(b,"Scene",function(){return Q}),c.d(b,"setBezierFunction",function(){return S}),c.d(b,"unsetBezierFunction",function(){return T}),r.a.filters.token=o}])})},{}],2:[function(a,b,c){var d=a("./shape"),e=a("./utils"),f=function(a,b){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,d.apply(this,arguments)};f.prototype=new d,f.prototype.constructor=f,f.prototype._pathString=function(a){var b=a.strokeWidth;a.trailWidth&&a.trailWidth>a.strokeWidth&&(b=a.trailWidth);var c=50-b/2;return e.render(this._pathTemplate,{radius:c,"2radius":2*c})},f.prototype._trailString=function(a){return this._pathString(a)},b.exports=f},{"./shape":7,"./utils":9}],3:[function(a,b,c){var d=a("./shape"),e=a("./utils"),f=function(a,b){this._pathTemplate=b.vertical?"M {center},100 L {center},0":"M 0,{center} L 100,{center}",d.apply(this,arguments)};f.prototype=new d,f.prototype.constructor=f,f.prototype._initializeSvg=function(a,b){var c=b.vertical?"0 0 "+b.strokeWidth+" 100":"0 0 100 "+b.strokeWidth;a.setAttribute("viewBox",c),a.setAttribute("preserveAspectRatio","none")},f.prototype._pathString=function(a){return e.render(this._pathTemplate,{center:a.strokeWidth/2})},f.prototype._trailString=function(a){return this._pathString(a)},b.exports=f},{"./shape":7,"./utils":9}],4:[function(a,b,c){b.exports={Line:a("./line"),Circle:a("./circle"),SemiCircle:a("./semicircle"),Square:a("./square"),Path:a("./path"),Shape:a("./shape"),utils:a("./utils")}},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./square":8,"./utils":9}],5:[function(a,b,c){var d=a("shifty"),e=a("./utils"),f=d.Tweenable,g={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},h=function a(b,c){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");c=e.extend({delay:0,duration:800,easing:"linear",from:{},to:{},step:function(){}},c);var d;d=e.isString(b)?document.querySelector(b):b,this.path=d,this._opts=c,this._tweenable=null;var f=this.path.getTotalLength();this.path.style.strokeDasharray=f+" "+f,this.set(0)};h.prototype.value=function(){var a=this._getComputedDashOffset(),b=this.path.getTotalLength(),c=1-a/b;return parseFloat(c.toFixed(6),10)},h.prototype.set=function(a){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(a);var b=this._opts.step;if(e.isFunction(b)){var c=this._easing(this._opts.easing);b(this._calculateTo(a,c),this._opts.shape||this,this._opts.attachment)}},h.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},h.prototype.animate=function(a,b,c){b=b||{},e.isFunction(b)&&(c=b,b={});var d=e.extend({},b),g=e.extend({},this._opts);b=e.extend(g,b);var h=this._easing(b.easing),i=this._resolveFromAndTo(a,h,d);this.stop(),this.path.getBoundingClientRect();var j=this._getComputedDashOffset(),k=this._progressToOffset(a),l=this;this._tweenable=new f,this._tweenable.tween({from:e.extend({offset:j},i.from),to:e.extend({offset:k},i.to),duration:b.duration,delay:b.delay,easing:h,step:function(a){l.path.style.strokeDashoffset=a.offset;var c=b.shape||l;b.step(a,c,b.attachment)}}).then(function(a){e.isFunction(c)&&c()}).catch(function(a){throw console.error("Error in tweening:",a),a})},h.prototype._getComputedDashOffset=function(){var a=window.getComputedStyle(this.path,null);return parseFloat(a.getPropertyValue("stroke-dashoffset"),10)},h.prototype._progressToOffset=function(a){var b=this.path.getTotalLength();return b-a*b},h.prototype._resolveFromAndTo=function(a,b,c){return c.from&&c.to?{from:c.from,to:c.to}:{from:this._calculateFrom(b),to:this._calculateTo(a,b)}},h.prototype._calculateFrom=function(a){return d.interpolate(this._opts.from,this._opts.to,this.value(),a)},h.prototype._calculateTo=function(a,b){return d.interpolate(this._opts.from,this._opts.to,a,b)},h.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(!0),this._tweenable=null)},h.prototype._easing=function(a){return g.hasOwnProperty(a)?g[a]:a},b.exports=h},{"./utils":9,shifty:1}],6:[function(a,b,c){var d=a("./shape"),e=a("./circle"),f=a("./utils"),g=function(a,b){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,d.apply(this,arguments)};g.prototype=new d,g.prototype.constructor=g,g.prototype._initializeSvg=function(a,b){a.setAttribute("viewBox","0 0 100 50")},g.prototype._initializeTextContainer=function(a,b,c){a.text.style&&(c.style.top="auto",c.style.bottom="0",a.text.alignToBottom?f.setStyle(c,"transform","translate(-50%, 0)"):f.setStyle(c,"transform","translate(-50%, 50%)"))},g.prototype._pathString=e.prototype._pathString,g.prototype._trailString=e.prototype._trailString,b.exports=g},{"./circle":2,"./shape":7,"./utils":9}],7:[function(a,b,c){var d=a("./path"),e=a("./utils"),f="Object is destroyed",g=function a(b,c){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=e.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},c,!0),e.isObject(c)&&void 0!==c.svgStyle&&(this._opts.svgStyle=c.svgStyle),e.isObject(c)&&e.isObject(c.text)&&void 0!==c.text.style&&(this._opts.text.style=c.text.style);var f,g=this._createSvgView(this._opts);if(!(f=e.isString(b)?document.querySelector(b):b))throw new Error("Container does not exist: "+b);this._container=f,this._container.appendChild(g.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&e.setStyles(g.svg,this._opts.svgStyle),this.svg=g.svg,this.path=g.path,this.trail=g.trail,this.text=null;var h=e.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new d(g.path,h),e.isObject(this._opts.text)&&null!==this._opts.text.value&&this.setText(this._opts.text.value)}};g.prototype.animate=function(a,b,c){if(null===this._progressPath)throw new Error(f);this._progressPath.animate(a,b,c)},g.prototype.stop=function(){if(null===this._progressPath)throw new Error(f);void 0!==this._progressPath&&this._progressPath.stop()},g.prototype.pause=function(){if(null===this._progressPath)throw new Error(f);void 0!==this._progressPath&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()},g.prototype.resume=function(){if(null===this._progressPath)throw new Error(f);void 0!==this._progressPath&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()},g.prototype.destroy=function(){if(null===this._progressPath)throw new Error(f);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},g.prototype.set=function(a){if(null===this._progressPath)throw new Error(f);this._progressPath.set(a)},g.prototype.value=function(){if(null===this._progressPath)throw new Error(f);return void 0===this._progressPath?0:this._progressPath.value()},g.prototype.setText=function(a){if(null===this._progressPath)throw new Error(f);null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),e.isObject(a)?(e.removeChildren(this.text),this.text.appendChild(a)):this.text.innerHTML=a},g.prototype._createSvgView=function(a){var b=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(b,a);var c=null;(a.trailColor||a.trailWidth)&&(c=this._createTrail(a),b.appendChild(c));var d=this._createPath(a);return b.appendChild(d),{svg:b,path:d,trail:c}},g.prototype._initializeSvg=function(a,b){a.setAttribute("viewBox","0 0 100 100")},g.prototype._createPath=function(a){var b=this._pathString(a);return this._createPathElement(b,a)},g.prototype._createTrail=function(a){var b=this._trailString(a),c=e.extend({},a);return c.trailColor||(c.trailColor="#eee"),c.trailWidth||(c.trailWidth=c.strokeWidth),c.color=c.trailColor,c.strokeWidth=c.trailWidth,c.fill=null,this._createPathElement(b,c)},g.prototype._createPathElement=function(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("d",a),c.setAttribute("stroke",b.color),c.setAttribute("stroke-width",b.strokeWidth),b.fill?c.setAttribute("fill",b.fill):c.setAttribute("fill-opacity","0"),c},g.prototype._createTextContainer=function(a,b){var c=document.createElement("div");c.className=a.text.className;var d=a.text.style;return d&&(a.text.autoStyleContainer&&(b.style.position="relative"),e.setStyles(c,d),d.color||(c.style.color=a.color)),this._initializeTextContainer(a,b,c),c},g.prototype._initializeTextContainer=function(a,b,c){},g.prototype._pathString=function(a){throw new Error("Override this function for each progress bar")},g.prototype._trailString=function(a){throw new Error("Override this function for each progress bar")},g.prototype._warnContainerAspectRatio=function(a){if(this.containerAspectRatio){var b=window.getComputedStyle(a,null),c=parseFloat(b.getPropertyValue("width"),10),d=parseFloat(b.getPropertyValue("height"),10);e.floatEquals(this.containerAspectRatio,c/d)||(console.warn("Incorrect aspect ratio of container","#"+a.id,"detected:",b.getPropertyValue("width")+"(width)","/",b.getPropertyValue("height")+"(height)","=",c/d),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},b.exports=g},{"./path":5,"./utils":9}],8:[function(a,b,c){var d=a("./shape"),e=a("./utils"),f=function(a,b){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",d.apply(this,arguments)};f.prototype=new d,f.prototype.constructor=f,f.prototype._pathString=function(a){var b=100-a.strokeWidth/2;return e.render(this._pathTemplate,{width:b,strokeWidth:a.strokeWidth,halfOfStrokeWidth:a.strokeWidth/2})},f.prototype._trailString=function(a){var b=100-a.strokeWidth/2;return e.render(this._trailTemplate,{width:b,strokeWidth:a.strokeWidth,halfOfStrokeWidth:a.strokeWidth/2,startMargin:a.strokeWidth/2-a.trailWidth/2})},b.exports=f},{"./shape":7,"./utils":9}],9:[function(a,b,c){function d(a,b,c){a=a||{},b=b||{},c=c||!1;for(var e in b)if(b.hasOwnProperty(e)){var f=a[e],g=b[e];c&&l(f)&&l(g)?a[e]=d(f,g,c):a[e]=g}return a}function e(a,b){var c=a;for(var d in b)if(b.hasOwnProperty(d)){var e=b[d],f="\\{"+d+"\\}",g=new RegExp(f,"g");c=c.replace(g,e)}return c}function f(a,b,c){for(var d=a.style,e=0;e<p.length;++e){d[p[e]+h(b)]=c}d[b]=c}function g(a,b){m(b,function(b,c){null!==b&&void 0!==b&&(l(b)&&!0===b.prefix?f(a,c,b.value):a.style[c]=b)})}function h(a){return a.charAt(0).toUpperCase()+a.slice(1)}function i(a){return"string"==typeof a||a instanceof String}function j(a){return"function"==typeof a}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a){return!k(a)&&("object"==typeof a&&!!a)}function m(a,b){for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];b(d,c)}}function n(a,b){return Math.abs(a-b)<q}function o(a){for(;a.firstChild;)a.removeChild(a.firstChild)}var p="Webkit Moz O ms".split(" "),q=.001;b.exports={extend:d,render:e,setStyle:f,setStyles:g,capitalize:h,isString:i,isFunction:j,isObject:l,forEachObject:m,floatEquals:n,removeChildren:o}},{}]},{},[4])(4)});
//# sourceMappingURL=progressbar.min.js.map;
var Memo = function () {
    this.backgroundColor = 'ffffff';
    this.textColor = '231f20';
    this.fontSize = 14;
    this.memoListPerPage = [];
    this.deleteMode = false;
    this.topText = 50;
    this.leftText = 50;
    this.indexText = 0;
    this.quillCurrent = '';
    this.indexTextSelect = 0;
    this.lengthTextSelect = 0;
    this.registerEvent();
}
Memo.prototype = {
    registerEvent: function () {
        let that = this;

        // get memo background color and edit it at memoListPerPage
        $('#popupColorBgMemo').find('.grid-item-color').click(function (event) {
            let color = event.currentTarget.style.backgroundColor;
            that.backgroundColor = color;
            that.setDefaultBackground(color);
            let hex = that.rgb2hex(color);

            $("#idTextColorBgMemo").val(hex.replace("#", ''));
            if (that.quillCurrent != '') {
                let editorMemoId = that.quillCurrent.container.id;
                let memoId = $(`#${editorMemoId}`).parent().attr('id');
                if (that.memoListPerPage[PageCurrent].find(memo => memo.id == memoId)) {
                    $("#" + memoId).find(".ql-editor").css("background-color", that.backgroundColor);
                    that.memoListPerPage[PageCurrent].map(function (memo) {
                        if (memo.id == memoId) {
                            memo.backgroundColor = that.backgroundColor;
                            Memo.updateLocalStorage();
                        }
                    });
                }

            }
        });
        $("#idTextColorBgMemo").on('keyup', function (event) {
            let hex = "#" + event.currentTarget.value;
            if (that.isHexColor(hex)) {
                that.backgroundColor = hex;
                $("#idMemo").find("#colorBgMemo").css("background-color", that.backgroundColor);
                $("#popupColorBgMemo").find(".class-clolor-tool-bar div").css("background-color", that.backgroundColor);

                if (that.quillCurrent != '') {
                    $("#" + that.quillCurrent.container.id).find(".ql-editor").css("background-color", that.backgroundColor);
                }
            }
        });
        $("#idShowHideMemo").change(function () {
            if (this.checked) {
                $(this).parent().find("span").css("text-align", "left")
                $(this).parent().find("span").text(resourcesText.show)
                $(".form_text").css("display", "block");
            } else {
                $(this).parent().find("span").css("text-align", "right")
                $(this).parent().find("span").text(resourcesText.hide)
                $(".form_text").css("display", "none");
            }
        });
        $("#popupColorTextMemo").find(".grid-item-color").click(function (event) {
            let color = event.currentTarget.style.backgroundColor;
            that.textColor = color;
            $("#idMemo").find("#colorTextMemo").css("background-color", color);
            $("#popupColorTextMemo").find(".class-clolor-tool-bar div").css("background-color", color);

            let hex = that.rgb2hex(color);

            $("#idTextColorTextMemo").val(hex.replace("#", ""));
            if (that.quillCurrent != '') {
                that.quillCurrent.formatText(that.indexTextSelect, that.lengthTextSelect, 'color', color);
            }
        });
        $("#idTextColorTextMemo").on('keyup', function (event) {
            let hex = "#" + event.currentTarget.value;
            if (that.isHexColor(hex)) {
                that.textColor = hex;
                $("#idMemo").find("#colorTextMemo").css("background-color", that.textColor);
                $("#popupColorTextMemo").find(".class-clolor-tool-bar div").css("background-color", that.textColor);
                if (that.quillCurrent != '') {
                    that.quillCurrent.formatText(that.indexTextSelect, that.lengthTextSelect, 'color', that.textColor);
                }
            }
        });
        //set and get memo font size and edit it at memoListPerPage
        $("#popupFontSizeMemo span").click(function () {
            Memo.fontSize = $(this).data("value");
            that.setFontSize(Memo.fontSize);
            if (that.quillCurrent != '') {
                let editorMemoId = that.quillCurrent.container.id;
                let memoId = $(`#${editorMemoId}`).parent().attr('id');
                if (that.memoListPerPage[PageCurrent].find(memo => memo.id == memoId)) {
                    that.quillCurrent.formatText(that.indexTextSelect, that.lengthTextSelect, 'size', that.fontSize + "px");
                    that.memoListPerPage[PageCurrent].map(function (memo) {
                        if (memo.id == memoId) {
                            memo.size = that.fontSize;
                            Memo.updateLocalStorage();
                        }
                    });
                }
            }
        });

        document.getElementById('btnAddMemo').addEventListener('click', function () { that.addMemo(false) }, false);
        document.getElementById('fontSizeMemo').addEventListener('click', this.openFontSize);
        document.getElementById('colorBgMemo').addEventListener('click', this.openBackgroundColor);
        document.getElementById('btnDeleteMemo').addEventListener('click', this.toggleDeleteMode.bind(this, document.getElementById('btnDeleteMemo')));
        document.getElementById('colorTextMemo').addEventListener('click', this.openTextColor);
        this.setDefaultLocalStorage();
        this.setDefaultBackground(this.backgroundColor);
    },
    openBackgroundColor() {
        $("#idMemo").find("#popupColorBgMemo").toggleClass("hide-popup");
    },
    openTextColor() {
        $("#idMemo").find("#popupColorTextMemo").toggleClass("hide-popup");
    },
    openFontSize() {
        $("#idMemo").find("#popupFontSizeMemo").toggleClass("hide-popup");
    },
    toggleDeleteMode: function (target) {
        this.deleteMode = !this.deleteMode;
        this.switchMode(target, this.deleteMode);
    },
    switchMode(target, mode) {
        //mode == true ? target.setAttribute('src', this.on) : target.setAttribute('src', this.off);
        if (mode == true) {
            $('#btnDeleteMemo').addClass('active');
            $('#btnDeleteMemo').find('div').addClass('active');
        }
        else {
            $('#btnDeleteMemo').removeClass('active');
            $('#btnDeleteMemo').find('div').removeClass('active');
        }
    },
    addMemo: function (fromStorage = false, pageCurrent = PageCurrent, index = this.indexText++, id = `content-container${index}`, top = this.topText++, left = this.leftText++, fontSize = this.fontSize, textColor = this.textColor, backgroundColor = this.backgroundColor, text = '', classes = '') {
        if (Memo.leftText >= 80) {
            Memo.leftText = 50;
        }
        if (Memo.topText >= 80) {
            Memo.topText = 50;
        }
        let that = this;
        let html = `
        <div class="content-container ${classes}" id="content-container` + index + `" style="top:` + top + `%; left: ` + left + `%; data-d =` + index + `">
            <div class="content-container-a" id="content-container-a` + index + `" style=""> </div>
            <div class="editor-container" id="editor-container` + index + `"></div>
        </div>`;

        $(".form_text").append(html);

        let size = Quill.import('attributors/style/size');
        size.whitelist = ['12px', '13px', '14px', '15px', '16px', '17px', '18px', '19px', '20px', '21px', '22px', '23px', '24px', '25px', '26px'];
        Quill.register(size, true);
        let quill = new Quill('#editor-container' + index, {
            modules: {
                toolbar: false
            },
            theme: 'bubble'
        });
        quill.format('background', backgroundColor);
        quill.format('size', fontSize + "px");
        quill.format('color', textColor);

        quill.container.firstChild.innerHTML = text; // set text with color 

        let element = document.getElementById(id);
        let editor = element.querySelectorAll('.editor-container')[0];

        editor.style.backgroundColor = backgroundColor;

        element.addEventListener('mousedown', function (event) {
            that.quillCurrent = quill;
        })

        quill.on('selection-change', function (range, oldRange, source) {
            if (range) {
                that.indexTextSelect = range.index;
                that.lengthTextSelect = range.length;
                let v = that.quillCurrent.getFormat(that.indexTextSelect, that.lengthTextSelect);
                if (v != undefined && v != null) {
                    if (v.size != undefined && v.size.toString().length < 5) {
                        var value = v.size.toString().substring(0, 2);

                        $("#popupFontSizeMemo").find("#s" + value).addClass("font-size-active")
                        $("#fontSizeValue").text(value);
                    } else {
                        $("#popupFontSizeMemo span").removeClass("font-size-active");
                        $("#fontSizeValue").text("");
                    }
                }
            }
        });
        // get Text and edit memo at memoListPerPage
        quill.on('text-change', function () {
            that.memoListPerPage[pageCurrent].map(function (memo) {
                if (memo.id === id) {
                    //memo.text = that.quillCurrent.getText();
                    memo.text = quill.container.firstChild.innerHTML;
                    that.updateLocalStorage();
                }
            });
        });

        //bind event click in order to delete memo when delete mode is on
        document.getElementById(id).addEventListener('click', this.memoClickListener);

        this.quillCurrent = quill;

        this.dragText(element);

        if (fromStorage == false) {
            this.setFontSize(fontSize);
            if (this.deleteMode == true) {
                this.toggleDeleteMode(document.getElementById('btnDeleteMemo'), false)
            }
            this.addMemoToListPerPage(pageCurrent, index, id, top, left, this.fontSize, this.textColor, this.backgroundColor, text);
        }
    },
    addMemoToListPerPage: function (pageCurrent, index, id, top, left, fontSize, textColor, backgroundColor, text) {
        if (Memo.memoListPerPage[pageCurrent] == undefined) {
            Memo.memoListPerPage[pageCurrent] = [];
        }
        Memo.memoListPerPage[pageCurrent].push({
            index: index,
            id: id,
            top: top,
            left: left,
            fontSize: fontSize,
            textColor: textColor,
            backgroundColor: backgroundColor,
            text: text
        });
        this.updateLocalStorage();
    },
    dragText: function (element) {
        let that = this;
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        let xpercent = 0;
        let ypercent = 0;
        let flipbook = document.getElementById('flipbook');
        let id = element.getAttribute('id');
        let elementRec = element.getBoundingClientRect();

        if (element.querySelectorAll('.content-container-a').length > 0) {
            element.querySelectorAll('.content-container-a')[0].onmousedown = dragMouseDown;
        } else {
            element.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            var x = (element.offsetLeft - pos1);
            var y = (element.offsetTop - pos2);
            let flipbookRec = flipbook.getBoundingClientRect();

            //prevent memo box overflow 
            let max_left = $('.book-content').position().left;
            let max_top = $('.book-content').position().top;
            let content_width = (window.innerWidth - $('.book-content').width()) / 2;
            let max_right = window.innerWidth - content_width - element.offsetWidth;
            let max_bottom = window.innerHeight - flipbookRec.y - element.offsetHeight;

            if (x < max_left) x = max_left;
            if (y < max_top) y = max_top;


            if (x > max_right)
            {
                x = max_right;
            }
            if (y > max_bottom)
            {
                y = max_bottom;

            } 
            let widthPixelPerPercent = window.innerWidth / 100;
            let heightPixelPerPercent = window.innerHeight / 100;
            xpercent = x / widthPixelPerPercent;
            ypercent = y / heightPixelPerPercent;

            element.style.left = xpercent + "%";
            element.style.top = ypercent + "%";
        }
        // get last position of memo and edit it at memoListPerPage
        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
            Memo.memoListPerPage[PageCurrent].map(function (memo) {
                if (memo.id === id) {
                    memo.top = ypercent;
                    memo.left = xpercent;
                    that.updateLocalStorage();
                }
            });
        }

    },
    setDefaultBackground: function (backgroundColor) {
        $('#idMemo').find('#colorBgMemo').css('background-color', backgroundColor);
        $('#popupColorBgMemo').find('.class-clolor-tool-bar div').css('background-color', backgroundColor);
    },
    setFontSize: function (size) {
        $("#popupFontSizeMemo span").removeClass("font-size-active");
        $("#s" + size).addClass("font-size-active");
        $("#fontSizeValue").text(size);
    },
    memoClickListener: function (event) {
        if (Memo.deleteMode == true && Memo.memoListPerPage[PageCurrent] != undefined && Memo.memoListPerPage[PageCurrent].length > 0) {
            let id = event.currentTarget.id;
            let index = Memo.findMemoIndexById(id, PageCurrent);
            if (index != -1) {
                $(`#${id}`).remove();
                Memo.memoListPerPage[PageCurrent].splice(index, 1);
                Memo.updateLocalStorage();
            }
        }
    },
    findMemoIndexById: function (id, pageCurrent) {
        for (let i = 0; i < this.memoListPerPage[pageCurrent].length; i++) {
            if (this.memoListPerPage[pageCurrent][i].id == id) { return i; }
        }
        return -1;
    },
    isHexColor: function (hexColor) {
        let regex = /^#[a-f0-9]{6}$/i;
        return regex.test(hexColor);
    },
    rgb2hex: function (rgb) {
        if (rgb.search("rgb") == -1) {
            return rgb;
        } else {
            rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }
    },
    getLocalStorage: function () {
        if (typeof (Storage) !== undefined) {
            let memos = localStorage.getItem('memos');
            if (memos !== null) { return JSON.parse(memos); }
        }
        return null;
    },
    setDefaultLocalStorage: function () {
        if (typeof (Storage) !== undefined) {
            let memos = this.getLocalStorage();
            if (memos !== null && memos[idThemeApp] !== null && memos[idThemeApp] != undefined) {
                let memo = memos[idThemeApp];
                this.indexText = memo.indexText;
                this.topText = memo.topText;
                this.leftText = memo.leftText;
                this.backgroundColor = memo.backgroundColor;
                this.fontSize = memo.fontSize;
                this.textColor = memo.textColor;
                this.memoListPerPage = memo.memoListPerPage;
                for (let page = 1; page < this.memoListPerPage.length; page++) {
                    if (this.memoListPerPage[page] == null) { continue; }
                    let classes = '';
                    if (page != PageCurrent) { classes = 'content-hide'; } // hide memos that are not on page current
                    for (let i = 0; i < this.memoListPerPage[page].length; i++) {
                        let memo = this.memoListPerPage[page][i];
                        this.addMemo(true, page, memo.index, memo.id, memo.top, memo.left, memo.fontSize, memo.textColor, memo.backgroundColor, memo.text, classes);
                    }
                }
            }

        }
        else {
            Common.Alert("Alert", "Sorry! No Web Storage support...")
        }
    },
    updateLocalStorage: function () {
        if (typeof (Storage) !== undefined) {
            let memos = this.getLocalStorage();
            if (memos == null) {
                memos = {};
            }
            memos[idThemeApp] = this.duplicateMemo();
            var text = JSON.stringify(memos);
            localStorage.setItem('memos', text);
        }
    },
    duplicateMemo: function () {
        let memo = {};
        memo.indexText = this.indexText;
        memo.topText = this.topText;
        memo.leftText = this.leftText;
        memo.backgroundColor = this.backgroundColor;
        memo.fontSize = this.fontSize;
        memo.textColor = this.textColor;
        memo.memoListPerPage = this.memoListPerPage;
        return memo;
    },
}
;
var Bookmark = function () {
    this.bookmarkList = [];
    this.bookmarkPriority = 1;
    this.registerEvent();
}
Bookmark.prototype = {
    registerEvent: function () {
        document.getElementById('idOnClickBookmark').addEventListener('click', this.onClickBookmark.bind(null, this), false);
        document.getElementById('idCloseBookmark').addEventListener('click', this.closeBookmark);
        this.setDefaultLocalStorage();
        this.delegateEvent('#bookmark-list', 'grid-page', 'click', this.gotoPageByBookmark);
        this.delegateEvent('#bookmark-list', 'bookmark-remove', 'click', this.removeBookmark);
    },
    onClickBookmark: function (that) {
        document.getElementById('idBgBookmark').classList.remove('content-hide');
        var idPageEven = 0, idPageOdd = 0, indexEven = 0, indexOdd = 0, folderNameEven = '', folderNameOdd = '';

        var page = PageCurrentThumbnail;
        idPageEven = document.getElementById('idPage_' + page).value;
        indexEven = page;
        folderNameEven = document.getElementById('img-page-' + page).getAttribute('src');

        if (page % 2 == 0) {
            if ($("#idPage_" + (page + 1)).val() != undefined) {
                idPageOdd = document.getElementById('idPage_' + (page + 1)).value;
                indexOdd = page + 1;
                folderNameOdd = document.getElementById('img-page-' + (page + 1)).getAttribute('src');
            }
        }
        else if (page % 2 != 0 && page != 1) {
            idPageOdd = document.getElementById('idPage_' + (page - 1)).value;
            indexOdd = page - 1;
            folderNameOdd = document.getElementById('img-page-' + (page - 1)).getAttribute('src');
        }

        // if page bookmark doesn't exist
        if (that.checkBookmark(idPageEven) === -1 || that.checkBookmark(idPageOdd) === -1) {
            if (page % 2 == 0) {
                if (that.checkBookmark(idPageEven) === -1) {
                    that.addBookmark(idPageEven, indexEven, folderNameEven);
                }
                if (that.checkBookmark(idPageOdd) === -1) {
                    if (page != 1 && idPageOdd != 0) that.addBookmark(idPageOdd, indexOdd, folderNameOdd);
                }
            } else {
                if (that.checkBookmark(idPageOdd) === -1) {
                    if (page != 1 && idPageOdd != 0) that.addBookmark(idPageOdd, indexOdd, folderNameOdd);
                }
                if (that.checkBookmark(idPageEven) === -1) {
                    that.addBookmark(idPageEven, indexEven, folderNameEven);
                }
            }

            that.updateTemplate();
            that.updateLocalStorage();
        }

        var items = $('.grid-page');
        $(".grid-page").removeClass("img-bookmark-active");
        if (page % 2 == 0) {
            let n = page + 1;
            items.filter(function () {
                return $(this).data('index') === page;
            }).addClass('img-bookmark-active');
            items.filter(function () {
                return $(this).data('index') === n;
            }).addClass('img-bookmark-active');
        } else {
            let p = page - 1;
            items.filter(function () {
                return $(this).data('index') === page;
            }).addClass('img-bookmark-active');
            items.filter(function () {
                return $(this).data('index') === p;
            }).addClass('img-bookmark-active');
        }
    },
    addBookmark: function (idPage, index, src) {
        let bookmark = { idPage: idPage, index: index, src: src, priority: this.bookmarkPriority++ };
        this.bookmarkList.push(bookmark);
    },
    updateTemplate: function () {
        let bookmarkListElement = document.getElementById('bookmark-list');
        bookmarkListElement.innerHTML = '';
        let length = this.bookmarkList.length

        // sort list bookmark by index
        this.bookmarkList.sort(function (a, b) {
            return a.index - b.index;
        });

        for (let i = 0; i < length; i++) {

            let gridThumbnail = document.createElement('div');
            gridThumbnail.setAttribute('class', 'grid-bookmark');

            let img = document.createElement('img');
            img.setAttribute('class', 'grid-page');
            img.setAttribute('data-index', this.bookmarkList[i].index);
            img.setAttribute('src', this.bookmarkList[i].src);



            let thumbnailInfo = document.createElement('div');
            thumbnailInfo.setAttribute('class', 'bookmark-info');

            let page = document.createElement('p');
            page.innerHTML = 'Page ' + this.bookmarkList[i].index;

            let bookmarkRemove = document.createElement('img');
            bookmarkRemove.setAttribute('class', 'bookmark-remove');
            bookmarkRemove.setAttribute('src', window.location.origin + '/Content/images/Amanda/header-close.png');
            bookmarkRemove.setAttribute('data-idPage', this.bookmarkList[i].idPage);

            thumbnailInfo.append(page);
            gridThumbnail.append(img);
            gridThumbnail.append(thumbnailInfo);
            gridThumbnail.append(bookmarkRemove);

            bookmarkListElement.append(gridThumbnail);
        }
    },
    removeBookmark: function (currentTarget) {
        // delete bookmark from bookmarkList by bookmark idPage
        let idPage = currentTarget.getAttribute('data-idPage');
        let position = this.checkBookmark(idPage);
        if (position > -1) {
            this.bookmarkList.splice(position, 1);
            this.updateTemplate();
            this.updateLocalStorage();
        }
    },
    gotoPageByBookmark: function (currentTarget) {
        let index = currentTarget.getAttribute('data-index');
        $("#flipbook").turn("page", index);
        isZoom = true;
        $(".book-content").trigger("click");
        this.closeBookmark();
        document.getElementById('btnMenu').click();
        //hide cover whenever it opens
        if (!document.getElementById('idContentListTheme').classList.contains('content-hide')) {
            document.getElementById('imgMenuContent').click();
        }
        Common.updateImagePageClass();

    },
    closeBookmark: function () {
        $('#idBgBookmark').addClass('content-hide');
    },
    checkBookmark: function (idPage) {
        let position = this.bookmarkList.findIndex(object => object.idPage == idPage);
        return position;
    },
    getLocalStorage: function () {
        if (typeof (Storage) !== undefined) {
            let bookmarks = localStorage.getItem('bookmarks');
            if (bookmarks !== null) { return JSON.parse(bookmarks); }
        }
        return null;
    },
    setDefaultLocalStorage: function () {
        if (typeof (Storage) !== undefined) {
            if (JSON.parse(localStorage.getItem("bookmarks")) == null) {
                var bookmark = {};
                localStorage.setItem("bookmarks", JSON.stringify(bookmark))
            }

            var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

            if (window.location.href.includes('EBook')) {
                if (bookmarks.EBook == undefined) {
                    bookmarks.EBook = {};
                    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
                }
                if (bookmarks.EBook[idThemeApp] != null || bookmarks.EBook[idThemeApp] !== undefined) {
                    let bookmark = bookmarks.EBook[idThemeApp];
                    this.bookmarkPriority = bookmark.bookmarkPriority;
                    this.bookmarkList = bookmark.bookmarkList;
                    this.updateTemplate();
                }
            }
        }
        else {
            Common.Alert("Alert", "Sorry! No Web Storage support...")
        }
    },
    updateLocalStorage: function () {
        if (typeof (Storage) !== undefined) {
            let bookmarks = this.getLocalStorage();
            if (bookmarks == null) {
                bookmarks = []
            };
            if (window.location.href.includes('EBook')) {
                var bookmark = JSON.parse(localStorage.getItem("bookmarks"));
                bookmark.EBook[idThemeApp] = this.duplicateBookmark();
                localStorage.setItem('bookmarks', JSON.stringify(bookmark));
            }
        }
    },
    duplicateBookmark: function () {
        let bookmark = {};
        bookmark.bookmarkPriority = this.bookmarkPriority;
        bookmark.bookmarkList = this.bookmarkList;
        return bookmark;
    },
    delegateEvent: function (from, to, eventName, func) {
        let that = this;
        let currentTarget = document.querySelector(from);
        let targets = currentTarget.getElementsByClassName(to);
        currentTarget.addEventListener(eventName, function (event) {
            let target = event.target;
            let length = targets.length;
            for (let i = 0; i < length; i++) {
                if (target && target === targets[i]) {
                    return func.call(that, target, event);
                }
            }

        });
    },

    refreshNewLocalStorageBookMark: function (idTheme, listNewIdPage) {
        var bookMarkObj = JSON.parse(localStorage.getItem("bookmarks"));
        var EBookObj = bookMarkObj.EBook;
        if (EBookObj[idTheme] != null && EBookObj[idTheme] != undefined) {
            var themeObj = EBookObj[idTheme];
            try {
                var themeListBookMark = themeObj.bookmarkList;
                var newThemeListBookMark = themeListBookMark.filter(x => {
                    return listNewIdPage.some(y => y === x.idPage);
                });

                bookMarkObj.EBook[idTheme].bookmarkList = newThemeListBookMark;
                localStorage.setItem('bookmarks', JSON.stringify(bookMarkObj));
            } catch (error) {
                var logError = error;
            }

        }

        this.registerEvent();
    }
};
