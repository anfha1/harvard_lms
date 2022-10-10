<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>@yield('title', config('app.name', 'Fai'))</title>
        <link href="/UI/jquery-ui/styles.css" rel="stylesheet"/>
        <link href="/UI/bootstrap/css/styles.css" rel="stylesheet"/>
        <link href="/Content/styles.css" rel="stylesheet"/>
        <link href="/Content/themes/regular/css.css" rel="stylesheet"/>
        <link href="/Content/themes/regular/loading.css" rel="stylesheet"/>
        <link href="/UI/slider/css/styles.css" rel="stylesheet"/>

        <!-- Font Awesome -->
        <link href="/Content/LayoutPaymentReturn/styles.css" rel="stylesheet"/>
        <script src="/bundles/jquery/javascripts.js"></script>
        <script src="/UI/jquery-ui/js/javascripts.js"></script>
        <script src="/UI/microsoft/ajax/javascripts.js"></script>
        <script src="/UI/bootstrap/js/javascripts.js"></script>
        <script src="/UI/slimScroll/javascripts.js"></script>
        <script src="/Script/common/js/javascripts.js"></script>
        <link href="/Content/LayoutBook/styles.css" rel="stylesheet"/>
        <script src="/Script/LayoutBook/javascripts.js"></script>

        <link href="/Content/EBook/styles.css" rel="stylesheet"/>
        <script src="/Script/EBook/javascripts.js"></script>
        <script src="https://cdn.rawgit.com/magicien/undo-canvas/v0.1.3/undo-canvas.js"></script>
        <script src="https://unpkg.com/konva@4.0.4/konva.min.js"></script>
        <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
        <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>

        <style>
            .class-timer {
                height: 100px;
                background-color: white;
                width:auto;
                position: absolute;
                resize: both;
                display: none;
            }

            .content-timer {
                background-image: url(/Content/images/ITS/box_control_timer.png);
                justify-content:space-around;

            }
            .class-minute {
                background-image: url(/Content/images/ITS/box_timer.png)
            }

            .class-second {
                background-image: url(/Content/images/ITS/box_timer.png)
            }
            #idTimerStart {
                background-image: linear-gradient(to bottom, #e8e8e8 76%, #8f8f8f 102%);
                color: #333;
                background-color:unset;
            }

            #idTimerStart.active {
                background-image: linear-gradient(to bottom,rgba(0, 0, 0,0.3) 11%, rgb(0 0 0 / 60%) 102%);
                color: white;
                background-color: unset;
            }
            #idTimerStart_content {
                background-image: linear-gradient(to bottom, #e8e8e8 85%, #8f8f8f 102%);
                box-shadow: 0px 4px 7px 0px #fff inset;
                background-color: unset;
            }

            #idTimerStart_content.active {
                background-image: linear-gradient(rgb(102 86 86 / 34%) 28%, rgba(0, 0, 0, 0.6) 102%);
                box-shadow: none;
                background-color: unset;
            }
            #idTimerStop {
                background-image: linear-gradient(to bottom, #e8e8e8 76%, #8f8f8f 102%);
                color: #333;
                background-color: unset;
            }

            #idTimerStop.active {
                background-image: linear-gradient(to bottom,rgba(0, 0, 0,0.3) 11%, rgb(0 0 0 / 60%) 102%);
                color: white;
                background-color: unset;
            }

            #idTimerStop_content {
                background-image: linear-gradient(to bottom, #e8e8e8 85%, #8f8f8f 102%);
                box-shadow: 0px 4px 7px 0px #fff inset;
                background-color: unset;
            }

            #idTimerStop_content.active {
                background-image: linear-gradient(rgb(102 86 86 / 34%) 28%, rgba(0, 0, 0, 0.6) 102%);
                box-shadow: none;
                background-color: unset;
            }
            #idTimerReset {
                background-image: linear-gradient(to bottom, #e8e8e8 76%, #8f8f8f 102%);
                color: #333;
                background-color: unset;
            }

            #idTimerReset.active {
                background-image: linear-gradient(to bottom,rgba(0, 0, 0,0.3) 11%, rgb(0 0 0 / 60%) 102%);
                color: white;
                background-color: unset;
            }

            #idTimerReset_content {
                background-image: linear-gradient(to bottom, #e8e8e8 85%, #8f8f8f 102%);
                box-shadow: 0px 4px 7px 0px #fff inset;
                background-color: unset;
            }

            #idTimerReset_content.active {
                background-image: linear-gradient(rgb(102 86 86 / 34%) 28%, rgba(0, 0, 0, 0.6) 102%);
                box-shadow: none;
                background-color: unset;
            }
            #submitRatingSuccess {
                margin: 20px;
                width: 100px;
                height: 100px;
            }

            svg {
                stroke-linecap: round;
                transform: rotate( 70deg );
            }

            #save-success {
                transition: opacity 0.4s ease-in-out;
            }

            .fadein, .fadeout {
                opacity: 0;
            }

            .fadein {
                opacity: 1;
            }

            #btnDeleteMemo_content {
                background-image: linear-gradient(to bottom, #e8e8e8 76%, #8f8f8f 102%);
                box-shadow: 0px 4px 7px 0px #fff inset;
            }

            #btnDeleteMemo_content.active {
                background-image: linear-gradient(rgb(102 86 86 / 34%) 28%, rgba(0, 0, 0, 0.6) 102%);
                box-shadow: none;
            }

            #btnDeleteMemo {
                background-image: linear-gradient(to bottom, #e8e8e8 76%, #8f8f8f 102%);
                color: #333;
            }

            #btnDeleteMemo.active {
                background-image: linear-gradient(to bottom,rgba(0, 0, 0,0.3) 11%, rgb(0 0 0 / 60%) 102%);
                color: white;
            }

            .trigger-activity-btn {
                cursor: pointer;
                height: 20%;
                width: auto;
                position: absolute;
                left: 0;
                top: 50%;
                z-index: 101;
            }

            .trigger-content-btn {
                cursor: pointer;
                height: 17%;
                width: auto;
                position: absolute;
                left: 69px;
                top: 15%;
                z-index: 101;
            }
            #flipbook {
                height: 100%;
                transition: margin-left 0.25s ease-out;
                width: 100%;
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
            #flipbook .page {
                height: 100%;
                width: 100%;
                background-color: white;
            }
            #flipbook .page img {
                max-width: 100%;
                height: 100%;
            }

            /*css memo for ebook*/
            .ql-editor {
                max-width: 150px;
            }
            .content-container-a {
                max-width: none
            }
        </style>
    </head>
    <body>
        <header></header>

        <content id="content-book" style="display:none; align-items:center; justify-content:center; overflow:hidden; height:100vh; min-height: 100vh; flex-direction:column; position:relative; background:url(/Content/images/bgebook.png); background-size: cover; background-position: bottom center;">
            <div class="book-content pb-3" style="position: absolute; display: flex; justify-content: center; align-items: center; width: 100%;padding:0">
                <img id="activity-trigger" class="trigger-activity-btn content-hide" src="/Content/images/Amanda/activity-btn.png" onclick="Common.EReaderThemeIndex.triggerActivityBtn()">
                <div class="bg-zoom" id="bg-zoom" style=" width:100%; overflow: hidden;">
                    <div id="flipbook" id-theme="1093">
                        @yield('content'))
                    </div>
                </div>
                <img id="imgPrevious" class="pre-next hidden" src="/Content/images/Amanda/ic-circle-next.png" style="z-index:100;left:-20px;top:75%;" />
                <img id="imgNext" data-idtheme="1093" class="pre-next" src="/Content/images/Amanda/ic-circle-next.png" style="transform: rotate(180deg);z-index:100;right:-20px;top:75%;" />
            </div>

            <div id="container" style="background-color: transparent; 	position: absolute; top:50%; left:50%; transform: translate(-50%,-50%);"></div>

            <div class="form_text" style="z-index:98"></div>

            <div class="class-top-content">
                <a href="/" class="class-img-menu-top">
                    <img class="img-menu" style="height:70%;margin-bottom:6px;" src="/Content/images/Amanda/logo.png" />
                </a>
                <span class="brick"></span>
                <div class="class-img-menu-top" id="idOnClickReadingMode" onclick="OnClickReadingMode()">
                    <img class="img-menu" src="/Content/images/Amanda/ic-one-page.png" />
                    <span>Xem một trang</span>
                </div>
                <span class="brick"></span>
                <div class="class-img-menu-top" id="idOnClickZoom" hidden onclick="OnClickZoom()">
                    <img class="img-menu" src="/Content/images/Amanda/ic-zoom.png" />
                    <span>Thu ph&#243;ng</span>
                </div>
                <span class="brick"></span>
                <div class="class-img-menu-top" id="idOnClickThumbnail" onclick="OnClickThumbnail()">
                    <img class="img-menu" src="/Content/images/Amanda/ic-thumbnail.png" />
                    <span>Xem trước</span>
                </div>
                <span class="brick"></span>
                <div class="class-img-menu-top" id="idOnClickDrawing" onclick="Common.drawingTool.OnClickDraw()">
                    <img class="img-menu" src="/Content/images/Amanda/ic-drawing.png" />
                    <span>Thanh vẽ</span>
                </div>
                <span class="brick"></span>
                <div class="class-img-menu-top" id="idOnClickMemo" onclick="OnClickMemo()">
                    <img class="img-menu" src="/Content/images/Amanda/ic-memo.png" />
                    <span>Ghi ch&#250;</span>
                </div>
                <span class="brick"></span>
                <div class="class-img-menu-top" id="idOnClickBookmark">
                    <img class="img-menu" src="/Content/images/Amanda/ic-bookmark.png" />
                    <span>Đ&#225;nh dấu trang</span>
                </div>
                <span class="brick"></span>
                <div class="class-img-menu-top" id="idOnclickTimer" onclick="OnClickTimer()">
                    <img class="img-menu" src="/Content/images/Amanda/ic-timer.png" />
                    <span>Hẹn giờ</span>
                </div>

                <img id="btnMenu" src="/Content/images/Amanda/btn-menu.png" />
            </div>

            <div class="class-pen-content" id="idPenContent" style="z-index:100;">
                <div id="idPenContentheader" style="height:10px; width:100%;background-color:red; cursor:move">
                    <div style="width:100%; height:10px;background-color:gray"></div>
                </div>
                <div style="width:100%;padding-left:10px; padding-right:10px; height:40px;display:flex;justify-content:space-between;align-items:center; position:relative;">
                    <span style="font-size: 18px;font-weight:bold; left:0; padding-right:5px;white-space:nowrap">Thanh vẽ</span>
                    <div style="width:100%;height:100%; display:flex; flex-direction:row;justify-content:center;">
                        <div id="idPenContentmove" style="height:100%;cursor:move; background-color:transparent; width:100%;"></div>
                        <div style="height:100%; display:flex; justify-content:center;align-items:center;">
                            <div id="id_undo" onclick="Common.drawingTool.OnUndo(this.id)" class="div-undo-redo-round">
                                <div class="div-undo-redo">
                                    <span style="margin-right: 5px;font-size: 11px;white-space:nowrap">ho&#224;n t&#225;c</span>
                                    <i class="fa fa-undo" aria-hidden="true" style="font-size: 20px;"></i>
                                </div>
                            </div>
                            <div id="id_redo" onclick="Common.drawingTool.OnRedo(this.id)" class="div-undo-redo-round">
                                <div class="div-undo-redo">
                                    <span style="margin-left: 5px;font-size: 11px;white-space:nowrap">l&#224;m lại</span>
                                    <i class="fa fa-repeat" aria-hidden="true" style="font-size: 20px;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img id="idClosePenContent" onclick="Common.drawingTool.OnClickCloseDraw()" style="cursor:pointer;margin-left:5px; height:22px;" src="/Content/images/ITS/header-close.png" />
                </div>
                <div class="class-tool-draw" style="">
                    <div class="class-acticon-draw" id="arrow" onclick="Common.drawingTool.ResetMouse(this.id)" style="background-position-y:0;"></div>
                    <div class="class-acticon-draw" id="pen" onclick="Common.drawingTool.OnPen(this.id)" style="background-position-y:-25px;"></div>
                    <div class="class-acticon-draw" id="highlight" onclick="Common.drawingTool.OnHighLight(this.id)" style="background-position-y:-50px;"></div>
                    <div class="class-separate"></div>
                    <div class="class-acticon-draw" id="eraser" onclick="Common.drawingTool.OnEraserDraw(this.id)" style="background-position-y:-75px;"></div>
                    <div class="class-acticon-draw" id="delete_draw" onclick="Common.drawingTool.DeleteDraw(this.id)" style="background-position-y:-100px;"></div>
                    <div class="class-separate"></div>
                    <div style="display:flex; flex-direction:column; margin-left:3px; margin-right:5px; font-weight:bold; line-height: 1;">
                        <text>vẽ</text>
                        <text>h&#236;nh</text>
                    </div>
                    <div class="class-acticon-draw" id="draw_in_circle" onclick="Common.drawingTool.DrawShape(this.id)" style="background-position-y:-125px;"></div>
                    <div class="class-acticon-draw" id="draw_in_rect" onclick="Common.drawingTool.DrawShape(this.id)" style="background-position-y:-150px;"></div>
                    <div class="class-acticon-draw" id="draw_out_circle" onclick="Common.drawingTool.DrawShape(this.id)" style="background-position-y:-175px;"></div>
                    <div class="class-acticon-draw" id="draw_out_rect" onclick="Common.drawingTool.DrawShape(this.id)" style="background-position-y:-200px;"></div>
                </div>

                <div class="class-tool-draw-property" style="position:relative;">
                    <div class="class-tool-draw-property-left">
                        <span>K&#237;ch thước</span>
                        <div onclick="Common.drawingTool.OpenPopupSize()" style="display:flex; justify-content:center; align-items:center; flex-direction:row; margin-top:2px; width:100%;">
                            <div class="box-size" style="border-bottom-right-radius:0; border-top-right-radius:0;">
                                <div id="boxSizeCurrent" style="width: 6px; height:6px; border-radius: 3px;background-color:black; position:absolute; top:50%; left:50%; transform:translate(-50%, -50%)"></div>
                            </div>
                            <div class="box-size" style="border-bottom-left-radius:0; border-top-left-radius:0;">
                                <span id="sizeCurrent" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%)">6</span>
                                <img src="/Content/images/ITS/arrow-right-bottom.png" style="width:15px; position:absolute; bottom:-2px; right:-2px" />
                            </div>
                        </div>
                        <div class="popup-size popup-tool hide-popup" style="">
                            <div class="grid-item-size">
                                <div style="height:4px; width:4px;border-radius:2px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:5px; width:5px;border-radius:2.5px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:6px; width:6px;border-radius:3px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:7px; width:7px;border-radius:3.5px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:8px; width:8px;border-radius:4px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:9px; width:9px;border-radius:4.5px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:10px; width:10px;border-radius:5px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:11px; width:11px;border-radius:5.5px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:12px; width:12px;border-radius:6px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:13px; width:13px;border-radius:6.5px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:14px; width:14px;border-radius:7px;"></div>
                            </div>
                            <div class="grid-item-size">
                                <div style="height:15px; width:15px;border-radius:7.5px;"></div>
                            </div>
                        </div>
                    </div>

                    <div class="class-tool-draw-property-right" style="position:relative;">
                        <div class="tool-color" style=" display:flex; flex-direction:column; justify-content:center;font-weight:bold; align-items:center; height:100%; width:25%;">
                            <span>M&#224;u vẽ</span>
                            <div class="box-size" onclick="Common.drawingTool.OpenPopupColor()" style="background-color:#231f20;border-radius:3px; box-shadow: 0px 0px 2px 0px #666666;">
                                <img src="/Content/images/ITS/arrow-right-bottom.png" style="width:15px; position:absolute; bottom:-2px; right:-2px" />

                            </div>
                        </div>
                        <div class="popup-color popup-tool hide-popup" id="popupColorDraw" style="">
                            <div class="class-clolor-tool-bar" style="height:22px; display:flex;flex-direction:row;align-items: center; justify-content:flex-start;">
                                <div style="height:20px; width: 20px;background-color:#231f20;margin-right:3px; box-shadow: 0px 0px 1px 0px #666666;">

                                </div>
                                <span>#</span>
                                <input id="idTextcolor" type="text" style="border:0;padding-left:3px; padding-right:5px;font-size:12px; box-shadow:inset 2px 2px 0px 0px #c2c2c2;    width: 88px;" />

                            </div>
                            <div class="class-list-color">
                                <div class="grid-item-color" style="background-color:#ffffff">
                                </div>
                                <div class="grid-item-color" style="background-color:#231f20">
                                </div>
                                <div class="grid-item-color" style="background-color:#ed1c24">
                                </div>
                                <div class="grid-item-color" style="background-color:#fff200">
                                </div>
                                <div class="grid-item-color" style="background-color:#00a651">
                                </div>
                                <div class="grid-item-color" style="background-color:#1c75bc">
                                </div>
                                <div class="grid-item-color" style="background-color:#262262">
                                </div>
                                <div class="grid-item-color" style="background-color:#9e1f63">
                                </div>
                                <div class="grid-item-color" style="background-color:#594a42">
                                </div>
                                <div class="grid-item-color" style="background-color:#FF594A">
                                </div>
                                <div class="grid-item-color" style="background-color:#00aeef">
                                </div>
                                <div class="grid-item-color" style="background-color:#f7941e">
                                </div>
                            </div>
                        </div>
                        <div class="tool-visiable-opacity" style="display:flex;padding-right:10px; flex-direction:column; justify-content:center; align-items:flex-end; height:100%; width:75%;">
                            <div class="show">
                                <label class="switch-show-hide">
                                    <input id="idShowHideDraw" class="toggle-show-hide" checked type="checkbox">
                                    <span class="slider-show-hide round">hiện</span>
                                </label>
                            </div>
                            <div class="opacity">
                                <div class="opacity-content">
                                    <span style="margin-top:-3px;padding-right:5px; padding-left:5px;text-transform:lowercase">Độ s&#225;ng</span>
                                    <div id="opacity-player-container" style="">
                                        <div class="opacity-progress" id="opacity-progress">
                                            <div id="draggable-point" style="left:100%;position:absolute;" class="draggable ui-widget-content">
                                                <div id="opacity-progress-handle"></div>
                                            </div>
                                            <div id="opacity-progress-bar" class="bar" style="width:100%">
                                            </div>
                                        </div>
                                    </div>
                                    <div id="posX"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="class-timer" id="idTimer" style="z-index:101;">
                <div id="idTimerheader" style="height:10px; width:100%;background-color:red; cursor:move">
                    <div style="width:100%; height:10px;background-color:gray"></div>
                </div>
                <div style="width:100%;padding-left:10px; padding-right:10px; height:35px;display:flex;justify-content:space-between;align-items:center; position:relative;">
                    <span style="font-size: 18px;font-weight:bold; left:0; padding-right:5px;white-space:nowrap">Hẹn giờ</span>
                    <div id="idTimermove"  style="width:100%;height:100%; cursor:move;"></div>
                    <img id="idCloseTimer" onclick="OnClickCloseTimer()" style="cursor:pointer; margin-left:5px; height:22px;" src="/Content/images/ITS/header-close.png" />
                </div>
                <div style="width:100%;height:42px; display:flex; justify-content:space-between;align-items:center; flex-direction: row;">
                    <div class="content-timer">
                        <div class="class-minute">
                            <div style="height:100%;margin-left:2px;  display:flex;justify-content:center; align-items:center;">
                                <span id="idMinute" style="font-size:20px; font-weight:bold;">1</span>
                            </div>
                            <div style="height:100%;margin-left:5px;margin-right:5px; display:flex;justify-content:center;align-items:center; flex-direction:column">
                                <img id="idIncreaseMinute" onclick="OnIncreaseMinute()" src="/Content/images/ITS/ic_change_up.png" />
                                <img id="idDecreaseMinute" onclick="OnDecreaseMinute()" src="/Content/images/ITS/ic_change_down.png" />
                            </div>
                        </div>
                        <div style="display:flex;justify-content:center;align-items:flex-end; height:100%; padding-right:5px;">
                            <span style="text-transform:lowercase">Ph&#250;t</span>
                        </div>
                        <div class="class-second">
                            <div style="height:100%;margin-left:2px;  display:flex;justify-content:center; align-items:center;">
                                <span id="idSecond" style="font-size:20px; font-weight:bold;">59</span>
                            </div>

                            <div style="height:100%;margin-left:5px;margin-right:5px; display:flex;justify-content:center;align-items:center; flex-direction:column">
                                <img id="idIncreaseSecond" onclick="OnIncreaseSecond()" src="/Content/images/ITS/ic_change_up.png" />
                                <img id="idDecreaseSecond" onclick="OnDecreaseSecond()" src="/Content/images/ITS/ic_change_down.png" />

                            </div>
                        </div>
                        <div style="display:flex;justify-content:center;align-items:flex-end; height:100%; padding-right:5px;">
                            <span style="text-transform:lowercase">Gi&#226;y</span>
                        </div>
                    </div>
                    <div class="content-timer content-timer-button" style="width:auto;padding:0 3px">
                        <div id="idTimerStart" onclick="OnClickStartTimer()" data-enable="1" style="display: flex;height: 61.3%;cursor: pointer;pointer-events: auto;padding: 1px;justify-content: center;align-items: center;border-radius: 3px;font-weight: bold;margin:0 2px 0 3px">
                            <div id="idTimerStart_content" style="align-items:center;border-radius: 3px;display: flex;justify-content: center;height: 100%;transition: background .5s ease;width: 100%;padding: 5px;">
                                <span style="margin-right: 3px;font-size: 10px;white-space:nowrap">BẮT ĐẦU</span>
                                <i class="fa fa-play" aria-hidden="true" style="font-size:14px"></i>
                            </div>
                        </div>
                        <div id="idTimerStop" onclick="OnClickStopTimer()" data-enable="0" style="display: flex;height: 61.3%;cursor: pointer;pointer-events: auto;padding: 1px;justify-content: center;align-items: center;border-radius: 3px;font-weight: bold;margin:0 2px">
                            <div id="idTimerStop_content" style="align-items:center;border-radius: 3px;display: flex;justify-content: center;height: 100%;transition: background .5s ease;width: 100%;padding: 5px;">
                                <span style="margin-right: 3px;font-size: 10px;white-space:nowrap">DỪNG</span>
                                <i class="fa fa-stop" aria-hidden="true" style="font-size:14px"></i>
                            </div>
                        </div>
                        <div id="idTimerReset" onclick="OnClickResetTimer()" data-enable="1" style="display: flex;height: 61.3%;cursor: pointer;pointer-events: auto;padding: 1px;justify-content: center;align-items: center;border-radius: 3px;font-weight: bold;margin:0 2px">
                            <div id="idTimerReset_content" style="align-items:center;border-radius: 3px;display: flex;justify-content: center;height: 100%;transition: background .5s ease;width: 100%;padding: 5px;">
                                <span style="margin-right: 3px;font-size: 10px;white-space:nowrap">ĐẶT LẠI</span>
                                <i class="fa fa-repeat" aria-hidden="true" style="font-size:14px;transform:rotate(180deg)"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="class-memo" id="idMemo" style="z-index:99;">
                <div id="idMemoheader" style="height:10px; width:100%;background-color:red; cursor:move">
                    <div style="width:100%; height:10px;background-color:gray"></div>
                </div>
                <div style="width:100%;padding-left:10px; padding-right:10px; height:35px;display:flex;justify-content:space-between;align-items:center; position:relative;">
                    <span style="font-size: 18px;font-weight:bold; left:0; padding-right:5px;white-space:nowrap">Ghi ch&#250;</span>
                    <div id="idMemomove" style="width:100%;height:100%; cursor:move;"></div>
                    <div class="show">
                        <label class="switch-show-hide">
                            <input id="idShowHideMemo" class="toggle-show-hide" checked type="checkbox">
                            <span class="slider-show-hide round">Hiện</span>
                        </label>
                    </div>
                    <img id="idCloseMemo" onclick="OnClickCloseMemo()" style="cursor:pointer; margin-left:5px; height:22px;" src="/Content/images/Amanda/header-close.png" />
                </div>
                <div style="width:100%;height:42px; padding-left:10px; padding-right:10px;">
                    <div class="memu-in-memo">
                        <div id="btnAddMemo" style="display: flex;height: 68.3%;cursor: pointer;pointer-events: auto;padding: 1px;justify-content: center;align-items: center;border-radius: 3px;font-weight: bold;background-image: linear-gradient(to bottom, #e8e8e8 76%, #8f8f8f 102%);">
                            <div style="align-items:center;border-radius: 3px;display: flex;justify-content: center;height: 100%;transition: background .5s ease;width: 100%;box-shadow: 0px 4px 7px 0px #fff inset;background-image: linear-gradient(to bottom, #e8e8e8 76%, #8f8f8f 102%);padding: 5px;">
                                <img src="/Content/images/ITS/list_page.png" style="width:100%;height:16px">
                                <span style="margin-left: 5px;font-size: 13px;">th&#234;m</span>
                            </div>
                        </div>
                        <div id="btnDeleteMemo" style="display: flex;height: 68.3%;cursor: pointer;pointer-events: auto;padding: 1px;justify-content: center;align-items: center;border-radius: 3px;font-weight: bold;">
                            <div id="btnDeleteMemo_content" style="align-items:center;border-radius: 3px;display: flex;justify-content: center;height: 100%;transition: background .5s ease;width: 100%;padding: 5px;">
                                <i class="fa fa-trash" aria-hidden="true" style="font-size: 20px;"></i>
                                <span style="margin-left: 5px;font-size: 13px;">x&#243;a</span>
                            </div>
                        </div>
                        <div style="position:relative;margin-left:5px; margin-right:5px;">
                            <div class="tool-color" style="display:flex; flex-direction:row; justify-content:center;font-weight:bold; align-items:center; height:100%;">
                                <span style="padding-right:5px;">M&#224;u nền</span>
                                <div class="box-size" id="colorBgMemo" style="background-color:#ffffff;border-radius:3px; box-shadow: 0px 0px 2px 0px #666666;">
                                    <img src="/Content/images/Amanda/arrow-right-bottom.png" style="width:15px; position:absolute; bottom:-2px; right:-2px" />
                                </div>
                            </div>
                            <div class="popup-color popup-tool hide-popup" id="popupColorBgMemo" style="top:110%;">
                                <div class="class-clolor-tool-bar" style="height:22px; display:flex;flex-direction:row;align-items: center; justify-content:flex-start;">
                                    <div style="height:20px; width: 20px;background-color:#231f20;margin-right:3px; box-shadow: 0px 0px 1px 0px #666666;"></div>
                                    <span>#</span>
                                    <input id="idTextColorBgMemo" type="text" style="border:0;padding-left:3px; padding-right:5px;font-size:12px; box-shadow:inset 2px 2px 0px 0px #c2c2c2; width: 88px;" />
                                </div>
                                <div class="class-list-color">
                                    <div class="grid-item-color" style="background-color:#ffffff"></div>
                                    <div class="grid-item-color" style="background-color:#231f20"></div>
                                    <div class="grid-item-color" style="background-color:#ed1c24"></div>
                                    <div class="grid-item-color" style="background-color:#fff200"></div>
                                    <div class="grid-item-color" style="background-color:#00a651"></div>
                                    <div class="grid-item-color" style="background-color:#1c75bc"></div>
                                    <div class="grid-item-color" style="background-color:#262262"></div>
                                    <div class="grid-item-color" style="background-color:#9e1f63"></div>
                                    <div class="grid-item-color" style="background-color:#594a42"></div>
                                    <div class="grid-item-color" style="background-color:#FF594A"></div>
                                    <div class="grid-item-color" style="background-color:#00aeef"></div>
                                    <div class="grid-item-color" style="background-color:#f7941e"></div>
                                </div>
                            </div>
                        </div>

                        <img id="imgFontSize" style="height:51%;" src="/Content/images/Amanda/img_fontsize_memo.png" />
                        <div style="position:relative;margin-left:5px; margin-right:5px;height:100%;cursor:pointer; display: flex;justify-content: center;align-items: center; " id="fontSizeMemo">
                            <div style="background-color:#f4f4f4;display:flex;justify-content:center;align-items:center;border-radius:5px; border:1px solid #999999; height:60%; ">
                                <span id="fontSizeValue" style="width:32px;text-align:center">
                                    12
                                </span>
                                <div style="background-color:#cccccc;display:flex;justify-content:center; align-items:center; height:100%; width:25px;border-bottom-right-radius:5px; border-top-right-radius:5px;">
                                    <img style="width: 10px;" src="/Content/images/Amanda/dropdown.png" />

                                </div>
                            </div>

                            <div class="popup-fontsize popup-tool hide-popup" id="popupFontSizeMemo" style="">
                                <span id="s12" data-value="12">12</span>
                                <span id="s13" data-value="13">13</span>
                                <span id="s14" data-value="14">14</span>
                                <span id="s15" data-value="15">15</span>
                                <span id="s16" data-value="16">16</span>
                                <span id="s17" data-value="17">17</span>
                                <span id="s18" data-value="18">18</span>
                                <span id="s19" data-value="19">19</span>
                                <span id="s20" data-value="20">20</span>
                                <span id="s21" data-value="21">21</span>
                                <span id="s22" data-value="22">22</span>
                                <span id="s23" data-value="23">23</span>
                                <span id="s24" data-value="24">24</span>
                                <span id="s25" data-value="25">25</span>
                                <span id="s26" data-value="26">26</span>
                            </div>
                        </div>
                        <div style="position:relative;margin-left:5px; margin-right:5px;">
                            <div class="tool-color" style="display:flex; flex-direction:row; justify-content:center;font-weight:bold; align-items:center; height:100%;">
                                <div class="box-size" id="colorTextMemo" style="background-color:#231f20;border-radius:3px; box-shadow: 0px 0px 2px 0px #666666;">
                                    <img src="/Content/images/Amanda/arrow-right-bottom.png" style="width:15px; position:absolute; bottom:-2px; right:-2px" />
                                </div>
                            </div>
                            <div class="popup-color popup-tool hide-popup" id="popupColorTextMemo" style="top:110%;">
                                <div class="class-clolor-tool-bar" style="height:22px; display:flex;flex-direction:row;align-items: center; justify-content:flex-start;">
                                    <div style="height:20px; width: 20px;background-color:#231f20;margin-right:3px; box-shadow: 0px 0px 1px 0px #666666;"></div>
                                    <span>#</span>
                                    <input id="idTextColorTextMemo" type="text" style="border:0;padding-left:3px; padding-right:5px;font-size:12px; box-shadow:inset 2px 2px 0px 0px #c2c2c2;    width: 88px;" />
                                </div>
                                <div class="class-list-color">
                                    <div class="grid-item-color" style="background-color:#ffffff"></div>
                                    <div class="grid-item-color" style="background-color:#231f20"></div>
                                    <div class="grid-item-color" style="background-color:#ed1c24"></div>
                                    <div class="grid-item-color" style="background-color:#fff200"></div>
                                    <div class="grid-item-color" style="background-color:#00a651"></div>
                                    <div class="grid-item-color" style="background-color:#1c75bc"></div>
                                    <div class="grid-item-color" style="background-color:#262262"></div>
                                    <div class="grid-item-color" style="background-color:#9e1f63"></div>
                                    <div class="grid-item-color" style="background-color:#594a42"></div>
                                    <div class="grid-item-color" style="background-color:#FF594A"></div>
                                    <div class="grid-item-color" style="background-color:#00aeef"></div>
                                    <div class="grid-item-color" style="background-color:#f7941e"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="idViewPopup" style="position:absolute;top:0; left:0; width:100%; height:100%;background: rgba(0,0,0,0.6);display:none;z-index:103;">
                <img id="viewPopupClose" style="position:absolute; z-index:100;cursor:pointer;" src="/Content/images/Amanda/header-close.png" />
                <iframe id="iframeMain" src="" style="border:0; overflow:hidden;position:absolute; top: 50%; left: 50%; transform:translate(-50% , -50%);"></iframe>
            </div>

            <div class="bg-thumbnail content-hide" id="idBgThumbnail" style="overflow:hidden">
                <div class="thumbnail-header" style="background-image:url(/Content/images/Amanda/menu-thumbnail.png)">
                    <img class="thumbnail-close" id="idCloseThumbnail" onclick="OnClickCloseThumbnail()" src="/Content/images/Amanda/header-close.png" />
                </div>
                <div class="grid-thumbnail-container">
                    @yield('thumbnail'))
                </div>
            </div>

            <div class="bg-bookmark content-hide" id="idBgBookmark">
                <div class="bookmark-header" style="background-image:url(/Content/images/Amanda/menu-thumbnail.png)">
                    <img class="bookmark-close" id="idCloseBookmark" src="/Content/images/Amanda/header-close.png" />
                </div>
                <div class="grid-bookmark-container" id="bookmark-list">
                </div>
            </div>

            <form action="/Banner/GetBannerAdvertisement" data-ajax="true" data-ajax-begin="Common.BannerAdvertisement.BeforeSend" data-ajax-method="POST" data-ajax-mode="replace" data-ajax-success="Common.BannerAdvertisement.SuccessForm" data-ajax-update="#banner-advertisement" id="form-search-BannerAdvertisement" method="post">
                <div class="hidden">
                    <input id="IdApp" name="IdApp" type="hidden" value="1093" />
                </div>
            </form>
            <div id="banner-advertisement"></div>
            <div id="box-iconavs" onclick="Common.BannerAdvertisement.ShowBannerAdvertisement()">
                <img src="/Content/images/AVS/icon-avs.png" style="width:100%;height:auto;" />
            </div>
        </content>

        <link href="/Content/Avs/styles.css" rel="stylesheet"/>
        <script>
            const currentLanguage = "vi-VN";

            const resourcesAlert = {
                titleInform: "Lời nhắn",
                titleError: "Lỗi",
                titleAlert: "Thông báo",

                confirmedYes: "Đồng ý",
                confirmedClose: "Đóng",
                confirmedContinue: "Tiếp tục",

                contentComingSoon:"Nội dung này sẽ có trong thời gian sắp tới!",
                contentThisContentWillBeAvailableAtALaterDate:"Nội dung này sẽ có trong thời gian sắp tới!",
                contentExistedAppInCart: "Sản phẩm đã tồn tại trong giỏ hàng",
                contentRemoveAppInCart: "Bạn có chắc chắn muốn xóa khỏi giỏ hàng?",
                contentRemovePromotionCode: "Bạn có chắc chắn muốn xóa mã khuyến mãi?",
                contentTotalOrderLargerThan10k: "Đơn hàng tối thiểu phải là 10,000 đồng",
                contentCheckout: "Bạn có chắc chắn muốn thanh toán?",
                contentChoosePaymentMethod: "Bạn cần chọn phương thức thanh toán",
                contentEmptyCart: "Bạn không có sản phẩm nào trong giỏ hàng",
                contentNotChoosePromotionCode: "Bạn chưa chọn mã giảm giá nào!",
                contentRequiredName: "Tên của bạn không được để trống!",
                contentRequiredEmail: "Email không được để trống",
                contentRequiredMessage: "Tin nhắn không được để trống",
                contentThankForContact: "Cảm ơn bạn đã liên hệ với chúng tôi. Chúng tôi sẽ có phản hồi trong thời gian sớm nhất.",
                contentRequiredKey: "Key không được để trống!",
                contentInvalidFormatKey: "Key không đúng định dạng",
                contentInvalidLenghKey: "Key không được vượt quá 16 kí tự!",
                contentReviewEreader: "Nào cùng nhau đánh giá. Nhấn đồng ý để bắt đầu kiểm tra",
                contentAgainQuestionEreader: "Bạn vừa thực hiện xong bài đánh giá. Nếu muốn thử lại lần nữa, vui lòng nhấn đồng ý để tải lại trang",
                contentCompleteCurrentQuestionEreader: "Vui lòng hoàn thành câu hỏi hiện tại!",
                contentSuccessfulActivation: "Kích hoạt thành công",
                contentUnSuccessfulActivation: "Kích hoạt không thành công, vui lòng thử lại.",
                contentLoginForTryApp: "Vui lòng đăng nhập để dùng thử ứng dụng này",
                contentNotChooseTrack: "Bạn chưa chọn track!",
                contentNoWebStorageSupport: "Xin lỗi! trình duyệt này không hỗ trợ lưu dữ liệu cục bộ",
                content_You_have_already_rated_this_app: "Bạn đã đánh giá ứng dụng này rồi!",
                content_Sorry_App_review_failed: "Đánh giá ứng dụng không thành công!",
                content_ChossePromotionCodeWhenEmptyCart: "Mã khuyến mãi không sử dụng được khi giỏ hàng rỗng. Vui lòng thêm sản phẩm vào giỏ hàng!",
                contentUpdateSuccessfully:"Cập nhật thành công!",
                content_Do_you_want_to_delete_this:"Bạn có chắc chắn muốn xóa không?",
                content_Successfully_deleted:"Xóa thành công!",
                content_Cannot_find_link_to_delete:"Không tìm thấy link cần xóa!",
                content_Invalid_link:"Đường dẫn link không hợp lệ",
                content_Link_updated_successfully:"Cập nhật link thành công!",
                content_New_url_must_be_saved_to_open_link:"URL mới phải lưu để mở liên kết!",
                content_Added_link_not_found:"Không tìm thấy link đã thêm!",
                content_An_error_has_occurred:"Có lỗi xảy ra!",
                content_The_validation_code_has_been_sent_before_Please_enter_validation_code_or_sent_after:"Mã xác thực đã được gởi trước đó, vui lòng nhập mã xác thực hoặc gởi lại sau:",
                content_Please_log_in_again_after:"Vui lòng đăng nhập lại sau:",
                content_The_link_has_been_copied:"Đường link đã được sao chép!",
            };

            const resourcesText = {
                code: "Mã",
                expiration_date: "HSD",
                requirement: "Điều kiện",
                checkup: "Kiểm tra",
                preview: "Xem ngay",
                see_more: "Xem thêm",
                read_more: "Đọc thêm",
                hide: "Ẩn",
                show: "Hiện",
                gift: "Quà tặng",
                success: "Thành công",
                fail: "Thất bại",
                all: "Tất cả",
                true: "Đúng",
                false: "Sai",
            }
            const resourcesEreader = {
                double: "Xem hai trang",
                single: "Xem một trang",
                sentence_highlight: "Tô đậm câu",
                word_highlight: "Tô đậm từ",
                repeat_sentence: "Lặp lại câu",
                home: "Trang chủ",
                auto_play: "Tự động chuyển trang",
                manual: "Bình thường",
                play: "Phát",
                pause: "Tạm dừng",
            }
            $(document).ready(function () {
                dragElement($("#idPenContent")[0]);
                Common.drawingTool = new Drawing();
                //Common.drawingTool.reDrawOnCurrentPage();
                Common.drawingTool.registerEventForOpacity();
                Common.drawingTool.updateColor();
                Common.drawingTool.setColorCode();
                Common.drawingTool.closePenContent();
                Common.drawingTool.setTextSize();
                Common.drawingTool.toggleDrawingTool();

            })
            //if ($("#save-success").hasClass("fadein")) {
            //    setTimeout(function () {
            //        $('#save-success').removeClass("fadein").addClass("fadeout");
            //    }, 1000);
            //}
            var height = window.innerHeight - 60;
            var width = window.innerWidth - 60;
            var PageCurrent = $("#idLevelTheme").val();
            var PageCurrentThumbnail = 1;
            var toolPriority = 100;
            var idLevelTheme = 0;
            var idThemeApp = 1093;
            $(document).ready(function () {
                dragElement($("#idTimer")[0]);
                $("#idCloseTimer").click(function () {
                    OnClickResetTimer()
                })
            })


            var urlContent = '/';
            var Timer;
            function OnClickStartTimer() {
                let en = $("#idTimerStart").data("enable");
                if (en == 1) {//k start
                    //$("#idTimerStart").attr("src", urlContent+"Content/images/ITS/btn_start_b.png")
                    $("#idTimerStart").addClass('active');
                    $("#idTimerStart_content").addClass('active');
                    $("#idTimerStart").data("enable", "0")

                    //$("#idTimerStop").attr("src", urlContent + "Content/images/ITS/btn_stop_w.png")
                    $("#idTimerStop").removeClass('active');
                    $("#idTimerStop_content").removeClass('active');
                    $("#idTimerStop").data("enable", "1")


                        Timer = setInterval(function () {
                            let min = parseInt($("#idMinute").text());
                            let sec = parseInt($("#idSecond").text());
                            if (min <= 0 && sec <= 0) {
                                OnClickStopTimer();
                            alert("Đã hết thời gian!");
                            } else {
                                if (min != "NaN" && sec != "NaN") {
                                    if (min > 0 || sec > 0) {
                                        sec--;
                                        if ((sec <= 0) && (min <= 0)) {
                                            OnClickStopTimer();
                                            alert("Đã hết thời gian!");
                                        } else {
                                            if (sec < 0) {
                                                min--;
                                                sec = 59;
                                            }
                                        }
                                        $("#idMinute").text(min);
                                        $("#idSecond").text(sec)
                                    } else if (min <= 0 && sec <= 0) {
                                        OnClickStopTimer();
                                        alert("Đã hết thời gian!");
                                    }
                                } else {
                                    $("#idMinute").text("0")
                                    $("#idSecond").text("59")
                                }
                            }
                        }, 1000);


                    //$("#idTimerReset").attr("src", "Content/Content/images/ITS/btn_reset_b.png")
                    //$("#idTimerReset").data("enable", "0")
                } else {
                    //$("#" + id).attr("src", "Content/Content/images/ITS/btn_start_w.png")
                    //$("#" + id).data("enable", "1")

                    //$("#idTimerStop").attr("src", "Content/Content/images/ITS/btn_stop_b.png")
                    //$("#idTimerStop").data("enable", "0")

                    //$("#idTimerReset").attr("src", "Content/Content/images/ITS/btn_reset_b.png")
                    //$("#idTimerReset").data("enable", "0")
                }
            }
            function OnClickStopTimer() {
                clearInterval(Timer);
                let en = $("#idTimerStop").data("enable");
                if (en == 1) {
                    //$("#idTimerStop").attr("src", urlContent + "Content/images/ITS/btn_stop_b.png")
                    $("#idTimerStop").data("enable", "0")
                    $("#idTimerStop").addClass('active');
                    $("#idTimerStop_content").addClass('active');
                    //$("#idTimerReset").attr("src", "Content/Content/images/ITS/btn_reset_w.png")
                    //$("#idTimerReset").data("enable", "1")

                    //$("#idTimerStart").attr("src", urlContent + "Content/images/ITS/btn_start_w.png")
                    $("#idTimerStart").removeClass('active');
                    $("#idTimerStart_content").removeClass('active');
                    $("#idTimerStart").data("enable", "1")

                } else {
                    //$("#" + id).attr("src", "Content/Content/images/ITS/btn_stop_w.png")
                    //$("#" + id).data("enable", "1")
                }
            }
            function OnClickResetTimer() {

                //$("#idTimerStop").attr("src", urlContent + "Content/images/ITS/btn_stop_b.png")
                $("#idTimerStop").removeClass('active');
                $("#idTimerStop_content").removeClass('active');
                $("#idTimerStop").data("enable", "0")
                //$("#idTimerStart").attr("src", urlContent + "Content/images/ITS/btn_start_w.png")
                $("#idTimerStart").removeClass('active');
                $("#idTimerStart_content").removeClass('active');
                $("#idTimerStart").data("enable", "1")

                clearInterval(Timer);
                $("#idMinute").text("0");
                $("#idSecond").text("59");

            }
            function OnIncreaseMinute() {
                let min = parseInt($("#idMinute").text())
                if (min != "NaN") {
                    if (min < 0) {
                        min = 0;
                    } else if (min >= 59) {
                        min = 0;
                    } else {

                        min++;
                    }
                } else {
                    min = 0;
                }
                $("#idMinute").text(min)
            }
            function OnDecreaseMinute() {
                let min = parseInt($("#idMinute").text())
                if (min != "NaN") {
                    if (min <= 0) {
                        min = 59;
                    } else {
                        min--;
                    }
                } else {
                    min = 0;
                }
                $("#idMinute").text(min)
            }
            function OnIncreaseSecond() {
                let sec = parseInt($("#idSecond").text())
                if (sec != "NaN") {
                    if (sec < 0) {
                        sec = 0;
                    } else if (sec >= 59) {
                        sec = 0;
                    } else {

                        sec++;
                    }
                } else {
                    sec = 0;
                }
                $("#idSecond").text(sec)
            }
            function OnDecreaseSecond() {
                let sec = parseInt($("#idSecond").text())
                if (sec != "NaN") {
                    if (sec <= 0) {
                        sec = 59;
                    } else {
                        sec--;
                    }
                } else {
                    sec = 0;
                }
                $("#idSecond").text(sec)
            }
            var Memo = new Memo();
            $(document).ready(function () {
                Memo.on = '/Content/images/Amanda/btn_delete_memo_b.png';
                Memo.off = '/Content/images/Amanda/btn_delete_memo_w.png'
                dragElement($("#idMemo")[0]);
            });

            function gotoPageByThumbnail(index) {
                $('#flipbook').turn('stop');
                $("#flipbook").turn("page", index);
                OnClickCloseThumbnail();
                $("#btnMenu").trigger("click");
                Common.updateImagePageClass();
                if(!$("#idContentListTheme").hasClass("content-hide")){
                    $("#imgMenuContent").trigger("click");
                }
                isZoom = true;
                $(".book-content").trigger("click");
                Common.updateImagePageClass();
            }
            function OnClickCloseThumbnail() {
                $("#idBgThumbnail").addClass('content-hide');
            }
            $(document).ready(function () {
                $(".grid-page").hover(function () {
                    $(this).css("opacity", "1");
                }, function () {
                    $(this).css("opacity", "0.7");
                });

            })

            var Bookmark = new Bookmark();
            $(document).ready(function () {
                $(".grid-page").hover(function () {
                    $(this).css("opacity", "1");
                }, function () {
                    $(this).css("opacity", "0.7");
                });

            })

            var urlContent = '/';
            var listAudio = $();
            var interval;

            var widthScreen = $(window).width();
            var heightScreen = $(window).height();
            var currentPage = 0;
            var height_display = 0;
            var flag = 1;
            var IdTheme = 1093;
            var IdGrade = 3;
            var IdSubject = 5;
            var IdSeries =  130;
            var isLogin = 0;
            var isActive = 0;
            var listDrawingData = [];
            var urlImage = "@yield('fistimg')";

            $(document).ready(function () {
                Common.EReaderThemeIndex = new EReaderThemeIndex();
                EReaderThemeIndex.Url = {};
                EReaderThemeIndex.Url.GotoSlide = '/AmandaSlide';
                EReaderThemeIndex.Url.UpdateUsageHistory = '/EBook/UpdateUsageHistory';
                EReaderThemeIndex.Url.GetEBookFile = '/GetEBookFile';
                EReaderThemeIndex.Url.ShowDialogStarRating = '/Ebook/GetInfoToShowDialogRating';

                Common.Account = new Account();
                Account.Url = {};
                Account.Url.ForgotPassword = '/Account/ForgotPassword';
                Account.Url.ShowDialogLogin = '/Account/ShowDialogLogin';

                Common.Cart = new Cart();
                Cart.Url = {};
                Cart.Url.AddCart = '/Cart/AddCart';

                Common.DialogPackageInContentBook = new DialogPackageInContentBook();
                DialogPackageInContentBook.Url = {};
                DialogPackageInContentBook.Url.ShowDialogPackage = '/BookDetail/ShowDialogPackage';

                Common.BookDetail = new BookDetail();
                BookDetail.Url = {};
                BookDetail.Url.ShowDialogActive = '/BookDetail/ShowDialogActive';

                setTimeout(function () {
                    $("#btnMenu").trigger("click");
                }, 6500)
                $("#imgNext").css("opacity", "0");

                if ((widthScreen / heightScreen) > 1.65) {
                    //$("#flipbook").turn("size", heightScreen * 0.9 * ((widthImage) / heightImage) * 2, heightScreen * 0.9);
                    //$('.book-content').css('width', heightScreen * 0.9 * (widthImage / heightImage) * 2);
                }

                    if (false == true) {
                        Common.EReaderThemeIndex.ShowDialogStarRating(IdTheme);
                }
                //$(".bg-zoom").css('overflow', 'unset');
                $("#idOnClickZoom").trigger("click");
                $("#idOnClickZoom").hide();
            });

            //zoom
            var zoomActive = false;
            var zooming = 0;
            var isZoom = false;
            let linkico = urlContent + "Content/images/Amanda/zoom.ico"
            function OnClickZoom() {
                if (zoomActive) {
                    zoomActive = false;
                    $("#idOnClickZoom img").attr("src", urlContent + "Content/images/Amanda/ic-zoom.png")
                    $('.book-content').css('cursor', 'default');
                    $('.ui-draggable').draggable({ disabled: true });
                } else {
                    zoomActive = true;
                    $("#idOnClickZoom img").attr("src", urlContent+"Content/images/Amanda/ic-zoom-active.png")
                    $('.book-content').css('cursor', 'url("' + linkico + '") 4 7, auto');
                    if (zooming == 1) {
                        $('.ui-draggable').draggable({ disabled: false });
                    }
                }
            }

            //thumbnail
            function OnClickThumbnail() {
                $("#idBgThumbnail").removeClass('content-hide')
                $(".grid-page").removeClass("img-thumbnail-active");
                //$("#imgThumbnail" + PageCurrent).addClass("img-thumbnail-active");
                //var PageCurrentNext = PageCurrent - 1;
                //$("#imgThumbnail" + PageCurrentNext).addClass("img-thumbnail-active");

                if (PageCurrentThumbnail % 2 == 0) {
                    let n = PageCurrentThumbnail + 1;
                    $("#imgThumbnail" + PageCurrentThumbnail).addClass("img-thumbnail-active");
                    $("#imgThumbnail" + n).addClass("img-thumbnail-active");
                } else {
                    let p = PageCurrentThumbnail - 1;
                    $("#imgThumbnail" + PageCurrentThumbnail).addClass("img-thumbnail-active");
                    $("#imgThumbnail" + p).addClass("img-thumbnail-active");
                }

            }

            //memo
            function OnClickMemo() {

                if ($("#idMemo").css("display") == "none") {

                    $("#idOnClickMemo img").attr("src", urlContent + "Content/images/Amanda/ic-memo-active.png")

                    $("#idMemo").css("top", 65 + "px");
                    $("#idMemo").css("left", 600 + "px");

                    $("#idMemo").css("display", "block");
                    $("#idMemo").css('z-index', toolPriority++);
                } else {
                    OnClickCloseMemo();
                }
            }
            function OnClickCloseMemo() {
                Memo.deleteMode = false;
                Memo.switchMode(document.getElementById('btnDeleteMemo'), false); // turn off delete mode when close, see at _Memo.cshtml
                $("#idOnClickMemo img").attr("src", urlContent + "Content/images/Amanda/ic-memo.png");

                $("#idMemo").css("display", "none");
            }

            //timer
            function OnClickTimer() {

                if ($("#idTimer").css("display") == "none") {

                    $("#idOnclickTimer img").attr("src", urlContent + "Content/images/Amanda/ic-timer-active.png")

                    $("#idTimer").css("top", 65 + "px");
                    $("#idTimer").css("left", 700 + "px");
                    OnClickResetTimer();
                    $("#idTimer").css("display", "block");
                    $("#idTimer").css('z-index', toolPriority++);
                } else {
                    OnClickCloseTimer();
                }
            }
            function OnClickCloseTimer() {
                $("#idOnclickTimer img").attr("src", urlContent + "Content/images/Amanda/ic-timer.png")
                $("#idTimer").css("display", "none");
            }
            function dragElement(elmnt) {
                var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

                if (document.getElementById(elmnt.id + "header")) {
                    // if present, the header is where you move the DIV from:
                    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;

                } else {
                    // otherwise, move the DIV from anywhere inside the DIV:
                    elmnt.onmousedown = dragMouseDown;
                }
                if (document.getElementById(elmnt.id + "move")) {
                    // if present, the header is where you move the DIV from:
                    document.getElementById(elmnt.id + "move").onmousedown = dragMouseDown;

                } else {
                    // otherwise, move the DIV from anywhere inside the DIV:
                    elmnt.onmousedown = dragMouseDown;
                }


                function dragMouseDown(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag;
                }

                function elementDrag(e) {
                    e = e || window.event;
                    e.preventDefault();
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    // set the element's new position:
                    var x = (elmnt.offsetTop - pos2);
                    var y = (elmnt.offsetLeft - pos1);
                    if (x < 0) x = 0;
                    if (y < 0) y = 0;
                    if (y > window.innerWidth - elmnt.offsetWidth) y = window.innerWidth - elmnt.offsetWidth;
                    if (x > window.innerHeight - elmnt.offsetHeight) x = window.innerHeight - elmnt.offsetHeight;
                    elmnt.style.top = x + "px";
                    elmnt.style.left = y + "px";
                }

                function closeDragElement() {
                    /* stop moving when mouse button is released:*/
                    document.onmouseup = null;
                    document.onmousemove = null;
                }

            }
            //reading mode
            var read_single_page = false;
            function OnClickReadingMode() {
                isZoom = true;
                $(".book-content").trigger("click");
                if (read_single_page) {
                    read_single_page = false;
                    $("#idOnClickReadingMode img").attr("src", urlContent + "Content/images/Amanda/ic-one-page.png")
                    $('.book-content').css('cursor', 'default');
                    $("div#idOnClickReadingMode > span").text('Xem một trang');
                } else {
                    read_single_page = true;
                    $("#idOnClickReadingMode img").attr("src", urlContent + "Content/images/Amanda/ic-two-page.png")
                    $("div#idOnClickReadingMode > span").text('Xem hai trang');
                }
                Common.EReaderThemeIndex.ChangeReadingMode();
            }

            var urlContent = '/';
            var userId = '';
            var type = false == true ? 1 : 0;
            $(document).ready(function () {
                Common.ChangeLanguage = new ChangeLanguage();
                ChangeLanguage.Url = {};
                ChangeLanguage.Url.ChangeLanguage = '/Base/WriteLangCookie';
                ChangeLanguage.Url.CheckLanguageCookie = '/Base/CheckLangCookie';

                //location
                Common.ChangeLanguage.CheckLanguageCookie();
                Common.GiftNotification = new GiftNotification();
                GiftNotification.Url = {};
                GiftNotification.Url.CheckEventGift = '/GiftPackage/CheckEventGift';
                GiftNotification.Url.ReceiveGiftPackage = '/GiftPackage/ReceiveGiftPackage';

                Common.BannerAdvertisement = new BannerAdvertisement();
                Common.LogUserActivity = new LogUserActivity();
                var idbook = '' || '1093';
                var idSeries = '' || '130';
                var idSupplement = '' || '0';
                Common.LogUserActivity.LogUserActivityInModule('ebook', idbook, idSeries, idSupplement);

                $("#content-book").fadeIn(800);
                $("#content-book").css('display', 'flex');
                Common.BannerAdvertisement.SubmitForm();
                console.log(Common.EReaderThemeIndex)
                setTimeout(() => {
                    if (Common.EReaderThemeIndex) {
                        Common.EReaderThemeIndex.changePositionBtnNext();
                        $("#imgNext").css("opacity", "1");
                    }
                }, 500);

                Common.DisableRightClickTag('#content-book');
            });
        </script>
    </body>
</html>
