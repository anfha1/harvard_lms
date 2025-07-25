/* Minification failed. Returning unminified contents.
(43,58-59): run-time error JS1195: Expected expression: >
(56,22-23): run-time error JS1195: Expected expression: )
(61,9-10): run-time error JS1002: Syntax error: }
(62,70-71): run-time error JS1195: Expected expression: )
(62,72-73): run-time error JS1004: Expected ';': {
(64,10-11): run-time error JS1195: Expected expression: )
(66,28-29): run-time error JS1195: Expected expression: )
(66,30-31): run-time error JS1004: Expected ';': {
(68,6-7): run-time error JS1195: Expected expression: ,
(69,27-28): run-time error JS1195: Expected expression: )
(69,29-30): run-time error JS1004: Expected ';': {
(71,6-7): run-time error JS1195: Expected expression: ,
(72,35-36): run-time error JS1004: Expected ';': {
(86,6-7): run-time error JS1195: Expected expression: ,
(87,39-40): run-time error JS1004: Expected ';': {
(108,6-7): run-time error JS1195: Expected expression: ,
(109,37-38): run-time error JS1004: Expected ';': {
(111,6-7): run-time error JS1195: Expected expression: ,
(112,36-37): run-time error JS1004: Expected ';': {
(114,6-7): run-time error JS1195: Expected expression: ,
 */
/*! AdminLTE app.js
 * ================
 * Main JS application file for AdminLTE v2. This file
 * should be included in all pages. It controls some layout
 * options and implements exclusive AdminLTE plugins.
 *
 * @Author  Almsaeed Studio
 * @Support <http://www.almsaeedstudio.com>
 * @Email   <support@almsaeedstudio.com>
 * @version 2.3.0
 * @license MIT <http://opensource.org/licenses/MIT>
 */
function _init(){"use strict";$.AdminLTE.layout={activate:function(){var a=this;a.fix(),a.fixSidebar(),$(window,".wrapper").resize(function(){a.fix(),a.fixSidebar()})},fix:function(){var a=$(".main-header").outerHeight()+$(".main-footer").outerHeight(),b=$(window).height(),c=$(".sidebar").height();if($("body").hasClass("fixed"))$(".content-wrapper, .right-side").css("min-height",b-$(".main-footer").outerHeight());else{var d;b>=c?($(".content-wrapper, .right-side").css("min-height",b-a),d=b-a):($(".content-wrapper, .right-side").css("min-height",c),d=c);var e=$($.AdminLTE.options.controlSidebarOptions.selector);"undefined"!=typeof e&&e.height()>d&&$(".content-wrapper, .right-side").css("min-height",e.height())}},fixSidebar:function(){return $("body").hasClass("fixed")?("undefined"==typeof $.fn.slimScroll&&window.console&&window.console.error("Error: the fixed layout requires the slimscroll plugin!"),void($.AdminLTE.options.sidebarSlimScroll&&"undefined"!=typeof $.fn.slimScroll&&($(".sidebar").slimScroll({destroy:!0}).height("auto"),$(".sidebar").slimscroll({height:$(window).height()-$(".main-header").height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})))):void("undefined"!=typeof $.fn.slimScroll&&$(".sidebar").slimScroll({destroy:!0}).height("auto"))}},$.AdminLTE.pushMenu={activate:function(a){var b=$.AdminLTE.options.screenSizes;$(a).on("click",function(a){a.preventDefault(),$(window).width()>b.sm-1?$("body").hasClass("sidebar-collapse")?$("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu"):$("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").hasClass("sidebar-open")?$("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").addClass("sidebar-open").trigger("expanded.pushMenu")}),$(".content-wrapper").click(function(){$(window).width()<=b.sm-1&&$("body").hasClass("sidebar-open")&&$("body").removeClass("sidebar-open")}),($.AdminLTE.options.sidebarExpandOnHover||$("body").hasClass("fixed")&&$("body").hasClass("sidebar-mini"))&&this.expandOnHover()},expandOnHover:function(){var a=this,b=$.AdminLTE.options.screenSizes.sm-1;$(".main-sidebar").hover(function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-collapse")&&$(window).width()>b&&a.expand()},function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-expanded-on-hover")&&$(window).width()>b&&a.collapse()})},expand:function(){$("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")},collapse:function(){$("body").hasClass("sidebar-expanded-on-hover")&&$("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")}},$.AdminLTE.tree=function(a){var b=this,c=$.AdminLTE.options.animationSpeed;$(document).on("click",a+" li a",function(a){var d=$(this),e=d.next();if(e.is(".treeview-menu")&&e.is(":visible"))e.slideUp(c,function(){e.removeClass("menu-open")}),e.parent("li").removeClass("active");else if(e.is(".treeview-menu")&&!e.is(":visible")){var f=d.parents("ul").first(),g=f.find("ul:visible").slideUp(c);g.removeClass("menu-open");var h=d.parent("li");e.slideDown(c,function(){e.addClass("menu-open"),f.find("li.active").removeClass("active"),h.addClass("active"),b.layout.fix()})}e.is(".treeview-menu")&&a.preventDefault()})},$.AdminLTE.controlSidebar={activate:function(){var a=this,b=$.AdminLTE.options.controlSidebarOptions,c=$(b.selector),d=$(b.toggleBtnSelector);d.on("click",function(d){d.preventDefault(),c.hasClass("control-sidebar-open")||$("body").hasClass("control-sidebar-open")?a.close(c,b.slide):a.open(c,b.slide)});var e=$(".control-sidebar-bg");a._fix(e),$("body").hasClass("fixed")?a._fixForFixed(c):$(".content-wrapper, .right-side").height()<c.height()&&a._fixForContent(c)},open:function(a,b){b?a.addClass("control-sidebar-open"):$("body").addClass("control-sidebar-open")},close:function(a,b){b?a.removeClass("control-sidebar-open"):$("body").removeClass("control-sidebar-open")},_fix:function(a){var b=this;$("body").hasClass("layout-boxed")?(a.css("position","absolute"),a.height($(".wrapper").height()),$(window).resize(function(){b._fix(a)})):a.css({position:"fixed",height:"auto"})},_fixForFixed:function(a){a.css({position:"fixed","max-height":"100%",overflow:"auto","padding-bottom":"50px"})},_fixForContent:function(a){$(".content-wrapper, .right-side").css("min-height",a.height())}},$.AdminLTE.boxWidget={selectors:$.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,icons:$.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,animationSpeed:$.AdminLTE.options.animationSpeed,activate:function(a){var b=this;a||(a=document),$(a).on("click",b.selectors.collapse,function(a){a.preventDefault(),b.collapse($(this))}),$(a).on("click",b.selectors.remove,function(a){a.preventDefault(),b.remove($(this))})},collapse:function(a){var b=this,c=a.parents(".box").first(),d=c.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer");c.hasClass("collapsed-box")?(a.children(":first").removeClass(b.icons.open).addClass(b.icons.collapse),d.slideDown(b.animationSpeed,function(){c.removeClass("collapsed-box")})):(a.children(":first").removeClass(b.icons.collapse).addClass(b.icons.open),d.slideUp(b.animationSpeed,function(){c.addClass("collapsed-box")}))},remove:function(a){var b=a.parents(".box").first();b.slideUp(this.animationSpeed)}}}if("undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery");$.AdminLTE={},$.AdminLTE.options={navbarMenuSlimscroll:!0,navbarMenuSlimscrollWidth:"3px",navbarMenuHeight:"200px",animationSpeed:500,sidebarToggleSelector:"[data-toggle='offcanvas']",sidebarPushMenu:!0,sidebarSlimScroll:!0,sidebarExpandOnHover:!1,enableBoxRefresh:!0,enableBSToppltip:!0,BSTooltipSelector:"[data-toggle='tooltip']",enableFastclick:!0,enableControlSidebar:!0,controlSidebarOptions:{toggleBtnSelector:"[data-toggle='control-sidebar']",selector:".control-sidebar",slide:!0},enableBoxWidget:!0,boxWidgetOptions:{boxWidgetIcons:{collapse:"fa-minus",open:"fa-plus",remove:"fa-times"},boxWidgetSelectors:{remove:'[data-widget="remove"]',collapse:'[data-widget="collapse"]'}},directChat:{enable:!0,contactToggleSelector:'[data-widget="chat-pane-toggle"]'},colors:{lightBlue:"#3c8dbc",red:"#f56954",green:"#00a65a",aqua:"#00c0ef",yellow:"#f39c12",blue:"#0073b7",navy:"#001F3F",teal:"#39CCCC",olive:"#3D9970",lime:"#01FF70",orange:"#FF851B",fuchsia:"#F012BE",purple:"#8E24AA",maroon:"#D81B60",black:"#222222",gray:"#d2d6de"},screenSizes:{xs:480,sm:768,md:992,lg:1200}},$(function(){"use strict";$("body").removeClass("hold-transition"),"undefined"!=typeof AdminLTEOptions&&$.extend(!0,$.AdminLTE.options,AdminLTEOptions);var a=$.AdminLTE.options;_init(),$.AdminLTE.layout.activate(),$.AdminLTE.tree(".sidebar"),a.enableControlSidebar&&$.AdminLTE.controlSidebar.activate(),a.navbarMenuSlimscroll&&"undefined"!=typeof $.fn.slimscroll&&$(".navbar .menu").slimscroll({height:a.navbarMenuHeight,alwaysVisible:!1,size:a.navbarMenuSlimscrollWidth}).css("width","100%"),a.sidebarPushMenu&&$.AdminLTE.pushMenu.activate(a.sidebarToggleSelector),a.enableBSToppltip&&$("body").tooltip({selector:a.BSTooltipSelector}),a.enableBoxWidget&&$.AdminLTE.boxWidget.activate(),a.enableFastclick&&"undefined"!=typeof FastClick&&FastClick.attach(document.body),a.directChat.enable&&$(document).on("click",a.directChat.contactToggleSelector,function(){var a=$(this).parents(".direct-chat").first();a.toggleClass("direct-chat-contacts-open")}),$('.btn-group[data-toggle="btn-toggle"]').each(function(){var a=$(this);$(this).find(".btn").on("click",function(b){a.find(".btn.active").removeClass("active"),$(this).addClass("active"),b.preventDefault()})})}),function(a){"use strict";a.fn.boxRefresh=function(b){function c(a){a.append(f),e.onLoadStart.call(a)}function d(a){a.find(f).remove(),e.onLoadDone.call(a)}var e=a.extend({trigger:".refresh-btn",source:"",onLoadStart:function(a){return a},onLoadDone:function(a){return a}},b),f=a('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>');return this.each(function(){if(""===e.source)return void(window.console&&window.console.log("Please specify a source first - boxRefresh()"));var b=a(this),f=b.find(e.trigger).first();f.on("click",function(a){a.preventDefault(),c(b),b.find(".box-body").load(e.source,function(){d(b)})})})}}(jQuery),function(a){"use strict";a.fn.activateBox=function(){a.AdminLTE.boxWidget.activate(this)}}(jQuery),function(a){"use strict";a.fn.todolist=function(b){var c=a.extend({onCheck:function(a){return a},onUncheck:function(a){return a}},b);return this.each(function(){"undefined"!=typeof a.fn.iCheck?(a("input",this).on("ifChecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onCheck.call(b)}),a("input",this).on("ifUnchecked",function(){var b=a(this).parents("li").first();b.toggleClass("done"),c.onUncheck.call(b)})):a("input",this).on("change",function(){var b=a(this).parents("li").first();b.toggleClass("done"),a("input",b).is(":checked")?c.onCheck.call(b):c.onUncheck.call(b)})})}}(jQuery);;
var GiftNotification = function () {
    return this.Init();
};

GiftNotification.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;
        $("#modal-GiftNotification").on('shown.bs.modal', function () {
            var slideGiftResult = $("#slideGiftResult");
            if (slideGiftResult[0] != undefined) {
                var listSlideGift = new Splide(slideGiftResult[0], {
                    height: '75%',
                    perPage: 1,
                    perMove: 1,
                    //type: 'loop',
                    //focus: 'left',
                    pagination: false,
                }).mount();
                totalSlide = listSlideGift.length;
                var perPage = listSlideGift.options.perPage;
                if (totalSlide <= perPage) {
                    $('.btn-pre-slide').addClass('hidden');
                    $('.btn-next-slide').addClass('hidden');
                }
                else {
                    $('.btn-pre-slide').addClass('hidden');
                    (listSlideGift).on('move', newIndex => {
                        if (newIndex == 0) {
                            $('.btn-pre-slide').addClass('hidden');
                            $('.btn-next-slide').removeClass('hidden');
                        }
                        else if (newIndex + perPage >= totalSlide) {
                            $('.btn-pre-slide').removeClass('hidden');
                            $('.btn-next-slide').addClass('hidden');
                        }
                        else {
                            $('.btn-pre-slide').removeClass('hidden');
                            $('.btn-next-slide').removeClass('hidden');
                        }
                    });
                }
            }
            var idGiftPackage = $("#IdGiftPackage").val();
            Common.GiftNotification.ReceiveGiftPackage(idGiftPackage);
        });
        $("#modal-GiftNotification").on('hidden.bs.modal', function () {
            window.location.reload();
        });
    },
    SuccessForm: function () {
        Common.ShowLoading(false);
    },
    BeforeSend: function () {
        Common.ShowLoading(true);
    },
    CheckEventGift: function (id) {
        Common.Ajax({
            type: "POST",
            url: GiftNotification.Url.CheckEventGift,
            dataType: "html",
            data: { IdAccount: id },
        }, function (data) {
            var a = data;
            if (data != "") {
                $("#modal-GiftNotification .modal-body").html(data);
                $("#modal-GiftNotification").modal("show");

            }
        }, false);
    },
    ReceiveGiftPackage: function (id) {
        Common.AjaxNoLoading({
            type: "POST",
            url: GiftNotification.Url.ReceiveGiftPackage,
            cache: false,
            dataType: "json",
            data: { IdGiftPackage: id },
        }, function (data) {
            //if (data == 1) {
            //    Common.ShowAlert("Thông báo", "Bạn đã nhận quà thành công! Vui lòng đến ứng dụng của bạn, để sử dụng!");
            //}
            //else if (data == 2) {
            //    Common.ShowAlert("Thông báo", "Vui lòng đăng nhập để nhận quà!");
            //}
            //else if (data == 3) {
            //    Common.ShowAlert("Thông báo", "Bạn đã nhận gói quà này rồi!");
            //}
            //else {
            //    Common.ShowAlert("Thông báo", "Có lỗi xảy ra! Vui lòng liên hệ admin");
            //}
        }, true);
    },
    GoToNextSlide: function (divId) {
        $('#' + divId).find('.splide__arrow--next').trigger('click');
    },
    GoToPreSlide: function (divId) {
        $('#' + divId).find('.splide__arrow--prev').trigger('click');
    },
};
;
var ChangeLanguage = function () {
    return this.Init();
};

ChangeLanguage.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;
        $('.item-lang').click(function () {
            var langchoose = ' <span style="display:inline-flex;align-items:center;">' + $(this).html() + '<span class="glyphicon glyphicon-triangle-bottom icon-show-lang"></span></span>';
            $('#language-selected').empty();
            $('#language-selected').append(langchoose);
            $("#list-language-select").removeClass("show");
            var lang = $(this).data("val");
            Common.ChangeLanguage.Language(lang);
        })
        $(document).mouseup(function (e) {
            var container = $("#list-language-select");

            // If the target of the click isn't the container
            if (!container.is(e.target) && e.target.id !== 'choose-lang') {
                container.removeClass('show');
            }
        });
    },
    SubmitForm: function () {
        //$("#form").submit();
    },
    SuccessForm: function () {
        Common.ShowLoading(false);
    },
    BeforeSend: function () {
        Common.ShowLoading(true);
    },
    CheckLanguageCookie: function () {
        $.ajax({
            type: "POST",
            url: ChangeLanguage.Url.CheckLanguageCookie,
            success: function (result) {
                if (result == false) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        $.getJSON('https://geoip-db.com/json/')
                            .done(function (location) {
                                if (location.country_name == 'Vietnam') {
                                    var lang = "vi-VN";
                                    Common.ChangeLanguage.Language(lang);
                                } else {
                                    var lang = "en-US"; // Tạm thời để auto vi-VN (chỗ này đúng phải là: "en-US")
                                    Common.ChangeLanguage.Language(lang);
                                }
                                //if (location.country_name != 'Vietnam') {
                                //    var lang = "en-US";
                                //    Common.ChangeLanguage.Language(lang);
                                //}
                            });
                    }, function () {
                            var lang = "vi-VN";
                            Common.ChangeLanguage.Language(lang);
                    });
                }
            },
            error: function (req, status, error) {
                console.log('error');
            }
        })
    },
    Language: function (lang) {
        $.ajax({
            type: "POST",
            url: ChangeLanguage.Url.ChangeLanguage,
            data: { 'key': lang },
            success: function (result) {
                if (result == 1) {
                    location.reload();
                }
            },
            error: function (req, status, error) {
                console.log('error');
            }
        })
    },
};;
var BannerAdvertisement = function () {
    return this.Init();

};
BannerAdvertisement.prototype = {
    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;

    },
    SuccessForm: function () {
        Common.ShowLoading(false);
        if (hasBanner == 1) {
            $('#banner-advertisement').css('transform', 'translate(0, 0)');
            $('svg circle').css('animation', 'countdown ' + countdown + 's linear infinite forwards');
            $('#icon-close').css('transform', 'translate(0, 0)');
            var countdownNumberEl = document.getElementById('countdown-number');

            countdownNumberEl.textContent = countdown;

            intervalCountDown = setInterval(function () {
                countdown = --countdown;
                countdownNumberEl.textContent = countdown;
                if (countdown == 0) {
                    clearInterval(intervalCountDown);
                    $('svg circle').css('animation', 'none');
                    $('#banner-advertisement').css('transform', 'translate(120px, 0)');
                    $('#box-iconavs').css('transform', 'translate(0, 0)');
                    $('#icon-close').css('transform', 'translate(20px, 0)');
                    countdown = countdownOrgin;
                }
            }, 1000);
        }

    },
    BeforeSend: function () {
        Common.ShowLoading(true);
    },
    SubmitForm: function () {
        $("#form-search-BannerAdvertisement").submit();
    },
    ShowBannerAdvertisement: function () {
        $('#banner-advertisement').css('transform', 'translate(0, 0)');
        $('svg circle').css('animation', 'countdown ' + countdown + 's linear infinite forwards');
        $('#box-iconavs').css('transform', 'translate(50px, 0)');
        $('#icon-close').css('transform', 'translate(0, 0)');
        var countdownNumberEl = document.getElementById('countdown-number');

        countdownNumberEl.textContent = countdown;

        intervalCountDown = setInterval(function () {
            countdown = --countdown;
            countdownNumberEl.textContent = countdown;
            if (countdown == 0) {
                clearInterval(intervalCountDown);
                $('svg circle').css('animation', 'none');
                $('#banner-advertisement').css('transform', 'translate(120px, 0)')
                $('#box-iconavs').css('transform', 'translate(0, 0)')
                $('#icon-close').css('transform', 'translate(20px, 0)');
                countdown = countdownOrgin;
            }
        }, 1000);
    },
    CloseBanner: function () {
        clearInterval(intervalCountDown);
        $('svg circle').css('animation', 'none');
        $('#banner-advertisement').css('transform', 'translate(120px, 0)');
        $('#box-iconavs').css('transform', 'translate(0, 0)');
        $('#icon-close').css('transform', 'translate(20px, 0)');
        countdown = countdownOrgin;
    },
    RedirectAppDetail: function (id) {
        window.location.href = (urlAppDetail + "?idTheme=" + id);
    },
    RedirectToAppContent: function (idTheme) {
        Common.Ajax({
            type: "POST",
            url: BannerAdvertisement.Url.RedirectToAppContent,
            dataType: "json",
            data: {
                idTheme: idTheme
            }
        }, function (data) {
            if (data != null) {
                if (data.mess != null) {
                    Common.ShowAlert("Thông báo", data.mess);
                    return false;
                }
                var url = window.location.protocol + "//" + window.location.host + '/';
                if (data.Type == 1) {
                    url = url + 'EReader?IdGrade=' + data.GradeId + '&IdSubject=' + data.SubjectId + '&IdSeries=' + data.SeriesId + '&IdTheme=' + data.ThemeId + '&idSupplement=' + data.SupplementId;
                }
                else if (data.Type == 2) {
                    url = url + 'Ebook?IdGrade=' + data.GradeId + '&IdSubject=' + data.SubjectId + '&IdSeries=' + data.SeriesId + '&IdTheme=' + data.ThemeId + '&idSupplement=' + data.SupplementId;
                }
                else if (data.Type == 3) {
                    url = url + 'DHATheme?IdGrade=' + data.GradeId + '&IdSubject=' + data.SubjectId + '&IdSeries=' + data.SeriesId + '&IdTheme=' + data.ThemeId + '&idSupplement=' + data.SupplementId;
                }
                else if (data.Type == 4) {
                    if (data.Template == 2) {
                        url = url + 'AmandaTheme?idGrade=' + data.GradeId + '&idSubject=' + data.SubjectId + '&idSeries=' + data.SeriesId + '&idtheme=' + data.ThemeId + '&idLevel=' + data.LevelId + '&idSupplement=' + data.SupplementId;
                    }

                    else if (data.Template == 3) {
                        url = url + 'AmandaThemeHCM?idGrade=' + data.GradeId + '&idSubject=' + data.SubjectId + '&idSeries=' + data.SeriesId + '&idtheme=' + data.ThemeId + '&idLevel=' + data.LevelId + '&idSupplement=' + data.SupplementId;
                    }
                    else if (data.Template == 4) {
                        url = url + 'ISWTextBook?idGrade=' + data.GradeId + '&idSubject=' + data.SubjectId + '&idSeries=' + data.SeriesId + '&idtheme=' + data.ThemeId + '&idLevel=' + data.LevelId + '&idSupplement=' + data.SupplementId;
                    }
                    else if (data.Template == 6) {
                        url = url + 'DCRPracticeTest?IdGrade=' + data.GradeId + '&IdSubject=' + data.SubjectId + '&IdSeries=' + data.SeriesId + '&IdTheme=' + data.ThemeId + '&IdSupplement=' + data.SupplementId;
                    }
                    else {
                        url = url + 'DCRTheme?IdGrade=' + data.GradeId + '&IdSubject=' + data.SubjectId + '&IdSeries=' + data.SeriesId + '&IdTheme=' + data.ThemeId + '&IdSupplement=' + data.SupplementId;
                    }

                }
                else if (data.Type == 5) {
                    url = url + 'ITSTheme?idGrade=' + data.GradeId + '&idSubject=' + data.SubjectId + '&idSeries=' + data.SeriesId + '&idTheme=' + data.ThemeId + '&idLevel=' + data.LevelId + '&idSupplement=' + data.SupplementId;
                }
                else if (data.Type == 6) {
                    url = url + 'EWBTheme?idGrade=' + data.GradeId + '&idSubject=' + data.SubjectId + '&idSeries=' + data.SeriesId + '&idTheme=' + data.ThemeId + '&idLevel=' + data.LevelId + '&idSupplement=' + data.SupplementId;
                }
                else if (data.Type == 7) {
                    url = url + 'ESBTheme?idGrade=' + data.GradeId + '&idSubject=' + data.SubjectId + '&idSeries=' + data.SeriesId + '&idTheme=' + data.ThemeId + '&idLevel=' + data.LevelId + '&idSupplement=' + data.SupplementId;
                }
                else if (data.Type == 8) {
                    url = url + 'ClassCDTheme?idGrade=' + data.GradeId + '&idSubject=' + data.SubjectId + '&idSeries=' + data.SeriesId + '&idTheme=' + data.ThemeId + '&idSupplement=' + data.SupplementId;
                }
                else if (data.Type == 9 || data.Type == 13) {
                    url = url + 'BookDetail/ThemeThirdParty?idGrade=' + data.GradeId + '&idSubject=' + data.SubjectId + '&idSeries=' + data.SeriesId + '&idSupplement=' + data.SupplementId + '&idTheme=' + data.ThemeId;
                }
                else if (data.Type == 10) {

                    url = url + 'PPTTheme?IdGrade=' + data.GradeId + '&IdSubject=' + data.SubjectId + '&IdSeries=' + data.SeriesId + '&IdTheme=' + data.ThemeId + '&idSupplement=' + data.SupplementId;
                }
                else if (data.Type == 11) {

                    url = url + 'ThemeVideo?IdGrade=' + data.GradeId + '&IdSubject=' + data.SubjectId + '&IdSeries=' + data.SeriesId + '&IdTheme=' + data.ThemeId + '&idSupplement=' + data.SupplementId;
                }
                else if (data.Type == 12) {

                    url = url + 'OnlineCourseTheme?IdGrade=' + data.GradeId + '&IdSubject=' + data.SubjectId + '&IdSeries=' + data.SeriesId + '&IdTheme=' + data.ThemeId + '&idSupplement=' + data.SupplementId;
                }

                //window.open(url, '_blank');
                window.location.href = (url);
            }
            else {
                Common.ShowAlert("Error", "Xin lỗi! Đã có sự cố xảy ra!")
            }

        }, true);
    },
};
var LogUserActivity = function () {
    return this.Init();
};
LogUserActivity.prototype = {

    Init: function (options) {
        this.RegisterEvent();
    },
    RegisterEvent: function () {
        var that = this;
    },
    LogUser: function (idbook, idScreen, idSeries, idSupplement) {
        Common.AjaxNoLoading({
            type: "POST",
            url: LogUserActivity.Url.LogUserActivity,
            dataType: "json",
            data: {
                idbook: idbook,
                idScreen: idScreen,
                idSeries: idSeries,
                idSupplement: idSupplement
            },
        }, function (data) {
        }, true);
    },
    LogUserAPI: function (idbook, idScreen, idSeries, idSupplement) {
        let date = new Date();
        let item = {
            data: [
                {
                    idAccount: userId,
                    idDevice: "",
                    timeStamp: date,
                    idBook: idbook,
                    appVersion: "",
                    systemInfor: "",
                    screenId: idScreen,
                    seriesId: idSeries,
                    supplementId: idSupplement,
                    idPlatform: 2
                }
            ]
        };
        const ItemJSON = JSON.stringify(item);

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "/api/loguseractivity/create-many-async",
            "method": "POST",
            "headers": {
                "authorization": "Bearer YWRtaW46UFRVREBMb2dNU0AxMjM0NQ==",
                "content-type": "application/json",
            },
            "processData": false,
            "data": ItemJSON
        }

        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    },
    LogUserActivityInModule: function (controllerName, idbook, idSeries, idSupplement) {
        var isOpenAppFromNotification = Common.getCookie('IsOpenAppFromNotification');
        if (isOpenAppFromNotification != "" && isOpenAppFromNotification == "true") {
            Common.setCookie('IsOpenAppFromNotification', '', 0);
            return;
        }
        if (window.performance.navigation.type == 1) {//on reload page
            return;
        }
        controllerName = controllerName.toLowerCase();
        switch (controllerName) {
            case "amandatheme":
            case "amandathemehcm":
            case "classcdtheme":
            case "dcrpracticetest":
            case "dcrtheme":
            case "dhatheme":
            case "ebook":
            case "ereader":
            case "esbtheme":
            case "ewbtheme":
            case "iswtextbook":
            case "itstheme":
            case "lessonvideo":
            case "onlinecoursetheme":
            case "ppttheme":
            case "practicetest":
            case "themevideo":
            case "thirdpartyguid":
                console.log('idbook----------', idbook);
                console.log('idSeries----------', idSeries);
                console.log('idSupplement----------', idSupplement);
                console.log('controller Name: ', controllerName);
                Common.LogUserActivity.LogUserAPI(idbook, 11, idSeries, idSupplement);
                break;
            default:
                break;
        }
    },
}
;
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.ProgressBar=a()}}(function(){var a;return function(){function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){return e(b[g][1][a]||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}return a}()({1:[function(b,c,d){!function(b,e){"object"==typeof d&&"object"==typeof c?c.exports=e():"function"==typeof a&&a.amd?a("shifty",[],e):"object"==typeof d?d.shifty=e():b.shifty=e()}(window,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=3)}([function(a,b,c){"use strict";(function(a){function d(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function e(a){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a})(a)}function f(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function g(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?f(Object(c),!0).forEach(function(b){h(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):f(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},b=new v,c=b.tween(a);return c.tweenable=b,c}c.d(b,"e",function(){return q}),c.d(b,"c",function(){return s}),c.d(b,"b",function(){return t}),c.d(b,"a",function(){return v}),c.d(b,"d",function(){return i});var j=c(1),k="undefined"!=typeof window?window:a,l=k.requestAnimationFrame||k.webkitRequestAnimationFrame||k.oRequestAnimationFrame||k.msRequestAnimationFrame||k.mozCancelRequestAnimationFrame&&k.mozRequestAnimationFrame||setTimeout,m=function(){},n=null,o=null,p=g({},j),q=function(a,b,c,d,e,f,g){var h=a<f?0:(a-f)/e;for(var i in b){var j=g[i],k=j.call?j:p[j],l=c[i];b[i]=l+(d[i]-l)*k(h)}return b},r=function(a,b){var c=a._attachment,d=a._currentState,e=a._delay,f=a._easing,g=a._originalState,h=a._duration,i=a._step,j=a._targetState,k=a._timestamp,l=k+e+h,m=b>l?l:b,n=h-(l-m);m>=l?(i(j,c,n),a.stop(!0)):(a._applyFilter("beforeTween"),m<k+e?(m=1,h=1,k=1):k+=e,q(m,d,g,j,h,k,f),a._applyFilter("afterTween"),i(d,c,n))},s=function(){for(var a=v.now(),b=n;b;){var c=b._next;r(b,a),b=c}},t=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"linear",c={},d=e(b);if("string"===d||"function"===d)for(var f in a)c[f]=b;else for(var g in a)c[g]=b[g]||"linear";return c},u=function(a){if(a===n)(n=a._next)?n._previous=null:o=null;else if(a===o)(o=a._previous)?o._next=null:n=null;else{var b=a._previous,c=a._next;b._next=c,c._previous=b}a._previous=a._next=null},v=function(){function a(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,a),this._currentState=b,this._configured=!1,this._filters=[],this._timestamp=null,this._next=null,this._previous=null,c&&this.setConfig(c)}var b,c,e;return b=a,(c=[{key:"_applyFilter",value:function(a){var b=!0,c=!1,d=void 0;try{for(var e,f=this._filters[Symbol.iterator]();!(b=(e=f.next()).done);b=!0){var g=e.value[a];g&&g(this)}}catch(a){c=!0,d=a}finally{try{b||null==f.return||f.return()}finally{if(c)throw d}}}},{key:"tween",value:function(){var b=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,c=this._attachment,d=this._configured;return!b&&d||this.setConfig(b),this._pausedAtTime=null,this._timestamp=a.now(),this._start(this.get(),c),this.resume()}},{key:"setConfig",value:function(){var b=this,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=c.attachment,e=c.delay,f=void 0===e?0:e,h=c.duration,i=void 0===h?500:h,j=c.easing,k=c.from,l=c.promise,n=void 0===l?Promise:l,o=c.start,p=void 0===o?m:o,q=c.step,r=void 0===q?m:q,s=c.to;this._configured=!0,this._attachment=d,this._isPlaying=!1,this._pausedAtTime=null,this._scheduleId=null,this._delay=f,this._start=p,this._step=r,this._duration=i,this._currentState=g({},k||this.get()),this._originalState=this.get(),this._targetState=g({},s||this.get());var u=this._currentState;this._targetState=g({},u,{},this._targetState),this._easing=t(u,j);var v=a.filters;for(var w in this._filters.length=0,v)v[w].doesApply(this)&&this._filters.push(v[w]);return this._applyFilter("tweenCreated"),this._promise=new n(function(a,c){b._resolve=a,b._reject=c}),this._promise.catch(m),this}},{key:"get",value:function(){return g({},this._currentState)}},{key:"set",value:function(a){this._currentState=a}},{key:"pause",value:function(){if(this._isPlaying)return this._pausedAtTime=a.now(),this._isPlaying=!1,u(this),this}},{key:"resume",value:function(){if(null===this._timestamp)return this.tween();if(this._isPlaying)return this._promise;var b=a.now();return this._pausedAtTime&&(this._timestamp+=b-this._pausedAtTime,this._pausedAtTime=null),this._isPlaying=!0,null===n?(n=this,o=this,function a(){n&&(l.call(k,a,1e3/60),s())}()):(this._previous=o,o._next=this,o=this),this._promise}},{key:"seek",value:function(b){b=Math.max(b,0);var c=a.now();return this._timestamp+b===0?this:(this._timestamp=c-b,this._isPlaying||r(this,c),this)}},{key:"stop",value:function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],b=this._attachment,c=this._currentState,d=this._easing,e=this._originalState,f=this._targetState;if(this._isPlaying)return this._isPlaying=!1,u(this),a?(this._applyFilter("beforeTween"),q(1,c,e,f,1,0,d),this._applyFilter("afterTween"),this._applyFilter("afterTweenEnd"),this._resolve(c,b)):this._reject(c,b),this}},{key:"isPlaying",value:function(){return this._isPlaying}},{key:"setScheduleFunction",value:function(b){a.setScheduleFunction(b)}},{key:"dispose",value:function(){for(var a in this)delete this[a]}}])&&d(b.prototype,c),e&&d(b,e),a}();v.setScheduleFunction=function(a){return l=a},v.formulas=p,v.filters={},v.now=Date.now||function(){return+new Date}}).call(this,c(2))},function(a,b,c){"use strict";c.r(b),c.d(b,"linear",function(){return d}),c.d(b,"easeInQuad",function(){return e}),c.d(b,"easeOutQuad",function(){return f}),c.d(b,"easeInOutQuad",function(){return g}),c.d(b,"easeInCubic",function(){return h}),c.d(b,"easeOutCubic",function(){return i}),c.d(b,"easeInOutCubic",function(){return j}),c.d(b,"easeInQuart",function(){return k}),c.d(b,"easeOutQuart",function(){return l}),c.d(b,"easeInOutQuart",function(){return m}),c.d(b,"easeInQuint",function(){return n}),c.d(b,"easeOutQuint",function(){return o}),c.d(b,"easeInOutQuint",function(){return p}),c.d(b,"easeInSine",function(){return q}),c.d(b,"easeOutSine",function(){return r}),c.d(b,"easeInOutSine",function(){return s}),c.d(b,"easeInExpo",function(){return t}),c.d(b,"easeOutExpo",function(){return u}),c.d(b,"easeInOutExpo",function(){return v}),c.d(b,"easeInCirc",function(){return w}),c.d(b,"easeOutCirc",function(){return x}),c.d(b,"easeInOutCirc",function(){return y}),c.d(b,"easeOutBounce",function(){return z}),c.d(b,"easeInBack",function(){return A}),c.d(b,"easeOutBack",function(){return B}),c.d(b,"easeInOutBack",function(){return C}),c.d(b,"elastic",function(){return D}),c.d(b,"swingFromTo",function(){return E}),c.d(b,"swingFrom",function(){return F}),c.d(b,"swingTo",function(){return G}),c.d(b,"bounce",function(){return H}),c.d(b,"bouncePast",function(){return I}),c.d(b,"easeFromTo",function(){return J}),c.d(b,"easeFrom",function(){return K}),c.d(b,"easeTo",function(){return L});var d=function(a){return a},e=function(a){return Math.pow(a,2)},f=function(a){return-(Math.pow(a-1,2)-1)},g=function(a){return(a/=.5)<1?.5*Math.pow(a,2):-.5*((a-=2)*a-2)},h=function(a){return Math.pow(a,3)},i=function(a){return Math.pow(a-1,3)+1},j=function(a){return(a/=.5)<1?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)},k=function(a){return Math.pow(a,4)},l=function(a){return-(Math.pow(a-1,4)-1)},m=function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},n=function(a){return Math.pow(a,5)},o=function(a){return Math.pow(a-1,5)+1},p=function(a){return(a/=.5)<1?.5*Math.pow(a,5):.5*(Math.pow(a-2,5)+2)},q=function(a){return 1-Math.cos(a*(Math.PI/2))},r=function(a){return Math.sin(a*(Math.PI/2))},s=function(a){return-.5*(Math.cos(Math.PI*a)-1)},t=function(a){return 0===a?0:Math.pow(2,10*(a-1))},u=function(a){return 1===a?1:1-Math.pow(2,-10*a)},v=function(a){return 0===a?0:1===a?1:(a/=.5)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*--a))},w=function(a){return-(Math.sqrt(1-a*a)-1)},x=function(a){return Math.sqrt(1-Math.pow(a-1,2))},y=function(a){return(a/=.5)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},z=function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},A=function(a){var b=1.70158;return a*a*((b+1)*a-b)},B=function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},C=function(a){var b=1.70158;return(a/=.5)<1?a*a*((1+(b*=1.525))*a-b)*.5:.5*((a-=2)*a*((1+(b*=1.525))*a+b)+2)},D=function(a){return-1*Math.pow(4,-8*a)*Math.sin((6*a-1)*(2*Math.PI)/2)+1},E=function(a){var b=1.70158;return(a/=.5)<1?a*a*((1+(b*=1.525))*a-b)*.5:.5*((a-=2)*a*((1+(b*=1.525))*a+b)+2)},F=function(a){var b=1.70158;return a*a*((b+1)*a-b)},G=function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},H=function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},I=function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?2-(7.5625*(a-=1.5/2.75)*a+.75):a<2.5/2.75?2-(7.5625*(a-=2.25/2.75)*a+.9375):2-(7.5625*(a-=2.625/2.75)*a+.984375)},J=function(a){return(a/=.5)<1?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},K=function(a){return Math.pow(a,4)},L=function(a){return Math.pow(a,.25)}},function(a,b){var c;c=function(){return this}();try{c=c||new Function("return this")()}catch(a){"object"==typeof window&&(c=window)}a.exports=c},function(a,b,c){"use strict";function d(a){return parseInt(a,16)}function e(a){var b=a._currentState;[b,a._originalState,a._targetState].forEach(B),a._tokenData=E(b)}function f(a){var b=a._currentState,c=a._originalState,d=a._targetState,e=a._easing,f=a._tokenData;K(e,f),[b,c,d].forEach(function(a){return F(a,f)})}function g(a){var b=a._currentState,c=a._originalState,d=a._targetState,e=a._easing,f=a._tokenData;[b,c,d].forEach(function(a){return J(a,f)}),L(e,f)}function h(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function i(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{};b%2?h(Object(c),!0).forEach(function(b){j(a,b,c[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):h(Object(c)).forEach(function(b){Object.defineProperty(a,b,Object.getOwnPropertyDescriptor(c,b))})}return a}function j(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function k(a){return function(a){if(Array.isArray(a)){for(var b=0,c=new Array(a.length);b<a.length;b++)c[b]=a[b];return c}}(a)||function(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function m(a,b){var c=b.get(a);if(!c)throw new TypeError("attempted to get private field on non-instance");return c.get?c.get.call(a):c.value}function n(a,b,c,d,e,f){var g,h,i=0,j=0,k=0,l=0,m=0,n=0,o=function(a){return((i*a+j)*a+k)*a},p=function(a){return(3*i*a+2*j)*a+k},q=function(a){return a>=0?a:0-a};return i=1-(k=3*b)-(j=3*(d-b)-k),l=1-(n=3*c)-(m=3*(e-c)-n),g=a,h=function(a){return 1/(200*a)}(f),function(a){return((l*a+m)*a+n)*a}(function(a,b){var c,d,e,f,g,h;for(e=a,h=0;h<8;h++){if(f=o(e)-a,q(f)<b)return e;if(g=p(e),q(g)<1e-6)break;e-=f/g}if((e=a)<(c=0))return c;if(e>(d=1))return d;for(;c<d;){if(f=o(e),q(f-a)<b)return e;a>f?c=e:d=e,e=.5*(d-c)+c}return e}(g,h))}c.r(b);var o={};c.r(o),c.d(o,"doesApply",function(){return M}),c.d(o,"tweenCreated",function(){return e}),c.d(o,"beforeTween",function(){return f}),c.d(o,"afterTween",function(){return g});var p,q,r=c(0),s=/(\d|-|\.)/,t=/([^\-0-9.]+)/g,u=/[0-9.-]+/g,v=(p=u.source,q=/,\s*/.source,new RegExp("rgb\\(".concat(p).concat(q).concat(p).concat(q).concat(p,"\\)"),"g")),w=/^.*\(/,x=/#([0-9]|[a-f]){3,6}/gi,y=function(a,b){return a.map(function(a,c){return"_".concat(b,"_").concat(c)})},z=function(a){return"rgb(".concat((b=a,3===(b=b.replace(/#/,"")).length&&(b=(b=b.split(""))[0]+b[0]+b[1]+b[1]+b[2]+b[2]),[d(b.substr(0,2)),d(b.substr(2,2)),d(b.substr(4,2))]).join(","),")");var b},A=function(a,b,c){var d=b.match(a),e=b.replace(a,"VAL");return d&&d.forEach(function(a){return e=e.replace("VAL",c(a))}),e},B=function(a){for(var b in a){var c=a[b];"string"==typeof c&&c.match(x)&&(a[b]=A(x,c,z))}},C=function(a){var b=a.match(u).map(Math.floor);return"".concat(a.match(w)[0]).concat(b.join(","),")")},D=function(a){return a.match(u)},E=function(a){var b,c,d={};for(var e in a){var f=a[e];"string"==typeof f&&(d[e]={formatString:(b=f,c=void 0,c=b.match(t),c?(1===c.length||b.charAt(0).match(s))&&c.unshift(""):c=["",""],c.join("VAL")),chunkNames:y(D(f),e)})}return d},F=function(a,b){var c=function(c){D(a[c]).forEach(function(d,e){return a[b[c].chunkNames[e]]=+d}),delete a[c]};for(var d in b)c(d)},G=function(a,b){var c={};return b.forEach(function(b){c[b]=a[b],delete a[b]}),c},H=function(a,b){return b.map(function(b){return a[b]})},I=function(a,b){return b.forEach(function(b){return a=a.replace("VAL",+b.toFixed(4))}),a},J=function(a,b){for(var c in b){var d=b[c],e=d.chunkNames,f=d.formatString,g=I(f,H(G(a,e),e));a[c]=A(v,g,C)}},K=function(a,b){var c=function(c){var d=b[c].chunkNames,e=a[c];if("string"==typeof e){var f=e.split(" "),g=f[f.length-1];d.forEach(function(b,c){return a[b]=f[c]||g})}else d.forEach(function(b){return a[b]=e});delete a[c]};for(var d in b)c(d)},L=function(a,b){for(var c in b){var d=b[c].chunkNames,e=a[d[0]];a[c]="string"==typeof e?d.map(function(b){var c=a[b];return delete a[b],c}).join(" "):e}},M=function(a){var b=a._currentState;return Object.keys(b).some(function(a){return"string"==typeof b[a]})},N=new r.a,O=r.a.filters,P=function(a,b,c,d){var e=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,f=i({},a),g=Object(r.b)(a,d);for(var h in N._filters.length=0,N.set({}),N._currentState=f,N._originalState=a,N._targetState=b,N._easing=g,O)O[h].doesApply(N)&&N._filters.push(O[h]);N._applyFilter("tweenCreated"),N._applyFilter("beforeTween");var j=Object(r.e)(c,f,a,b,1,e,g);return N._applyFilter("afterTween"),j},Q=function(){function a(){!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,a),R.set(this,{writable:!0,value:[]});for(var b=arguments.length,c=new Array(b),d=0;d<b;d++)c[d]=arguments[d];c.forEach(this.add.bind(this))}var b,c,d;return b=a,(c=[{key:"add",value:function(a){return m(this,R).push(a),a}},{key:"remove",value:function(a){var b=m(this,R).indexOf(a);return~b&&m(this,R).splice(b,1),a}},{key:"empty",value:function(){return this.tweenables.map(this.remove.bind(this))}},{key:"isPlaying",value:function(){return m(this,R).some(function(a){return a.isPlaying()})}},{key:"play",value:function(){return m(this,R).forEach(function(a){return a.tween()}),this}},{key:"pause",value:function(){return m(this,R).forEach(function(a){return a.pause()}),this}},{key:"resume",value:function(){return m(this,R).forEach(function(a){return a.resume()}),this}},{key:"stop",value:function(a){return m(this,R).forEach(function(b){return b.stop(a)}),this}},{key:"tweenables",get:function(){return k(m(this,R))}},{key:"promises",get:function(){return m(this,R).map(function(a){return a._promise})}}])&&l(b.prototype,c),d&&l(b,d),a}(),R=new WeakMap,S=function(a,b,c,d,e){var f=function(a,b,c,d){return function(e){return n(e,a,b,c,d,1)}}(b,c,d,e);return f.displayName=a,f.x1=b,f.y1=c,f.x2=d,f.y2=e,r.a.formulas[a]=f},T=function(a){return delete r.a.formulas[a]};c.d(b,"processTweens",function(){return r.c}),c.d(b,"Tweenable",function(){return r.a}),c.d(b,"tween",function(){return r.d}),c.d(b,"interpolate",function(){return P}),c.d(b,"Scene",function(){return Q}),c.d(b,"setBezierFunction",function(){return S}),c.d(b,"unsetBezierFunction",function(){return T}),r.a.filters.token=o}])})},{}],2:[function(a,b,c){var d=a("./shape"),e=a("./utils"),f=function(a,b){this._pathTemplate="M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",this.containerAspectRatio=1,d.apply(this,arguments)};f.prototype=new d,f.prototype.constructor=f,f.prototype._pathString=function(a){var b=a.strokeWidth;a.trailWidth&&a.trailWidth>a.strokeWidth&&(b=a.trailWidth);var c=50-b/2;return e.render(this._pathTemplate,{radius:c,"2radius":2*c})},f.prototype._trailString=function(a){return this._pathString(a)},b.exports=f},{"./shape":7,"./utils":9}],3:[function(a,b,c){var d=a("./shape"),e=a("./utils"),f=function(a,b){this._pathTemplate=b.vertical?"M {center},100 L {center},0":"M 0,{center} L 100,{center}",d.apply(this,arguments)};f.prototype=new d,f.prototype.constructor=f,f.prototype._initializeSvg=function(a,b){var c=b.vertical?"0 0 "+b.strokeWidth+" 100":"0 0 100 "+b.strokeWidth;a.setAttribute("viewBox",c),a.setAttribute("preserveAspectRatio","none")},f.prototype._pathString=function(a){return e.render(this._pathTemplate,{center:a.strokeWidth/2})},f.prototype._trailString=function(a){return this._pathString(a)},b.exports=f},{"./shape":7,"./utils":9}],4:[function(a,b,c){b.exports={Line:a("./line"),Circle:a("./circle"),SemiCircle:a("./semicircle"),Square:a("./square"),Path:a("./path"),Shape:a("./shape"),utils:a("./utils")}},{"./circle":2,"./line":3,"./path":5,"./semicircle":6,"./shape":7,"./square":8,"./utils":9}],5:[function(a,b,c){var d=a("shifty"),e=a("./utils"),f=d.Tweenable,g={easeIn:"easeInCubic",easeOut:"easeOutCubic",easeInOut:"easeInOutCubic"},h=function a(b,c){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");c=e.extend({delay:0,duration:800,easing:"linear",from:{},to:{},step:function(){}},c);var d;d=e.isString(b)?document.querySelector(b):b,this.path=d,this._opts=c,this._tweenable=null;var f=this.path.getTotalLength();this.path.style.strokeDasharray=f+" "+f,this.set(0)};h.prototype.value=function(){var a=this._getComputedDashOffset(),b=this.path.getTotalLength(),c=1-a/b;return parseFloat(c.toFixed(6),10)},h.prototype.set=function(a){this.stop(),this.path.style.strokeDashoffset=this._progressToOffset(a);var b=this._opts.step;if(e.isFunction(b)){var c=this._easing(this._opts.easing);b(this._calculateTo(a,c),this._opts.shape||this,this._opts.attachment)}},h.prototype.stop=function(){this._stopTween(),this.path.style.strokeDashoffset=this._getComputedDashOffset()},h.prototype.animate=function(a,b,c){b=b||{},e.isFunction(b)&&(c=b,b={});var d=e.extend({},b),g=e.extend({},this._opts);b=e.extend(g,b);var h=this._easing(b.easing),i=this._resolveFromAndTo(a,h,d);this.stop(),this.path.getBoundingClientRect();var j=this._getComputedDashOffset(),k=this._progressToOffset(a),l=this;this._tweenable=new f,this._tweenable.tween({from:e.extend({offset:j},i.from),to:e.extend({offset:k},i.to),duration:b.duration,delay:b.delay,easing:h,step:function(a){l.path.style.strokeDashoffset=a.offset;var c=b.shape||l;b.step(a,c,b.attachment)}}).then(function(a){e.isFunction(c)&&c()}).catch(function(a){throw console.error("Error in tweening:",a),a})},h.prototype._getComputedDashOffset=function(){var a=window.getComputedStyle(this.path,null);return parseFloat(a.getPropertyValue("stroke-dashoffset"),10)},h.prototype._progressToOffset=function(a){var b=this.path.getTotalLength();return b-a*b},h.prototype._resolveFromAndTo=function(a,b,c){return c.from&&c.to?{from:c.from,to:c.to}:{from:this._calculateFrom(b),to:this._calculateTo(a,b)}},h.prototype._calculateFrom=function(a){return d.interpolate(this._opts.from,this._opts.to,this.value(),a)},h.prototype._calculateTo=function(a,b){return d.interpolate(this._opts.from,this._opts.to,a,b)},h.prototype._stopTween=function(){null!==this._tweenable&&(this._tweenable.stop(!0),this._tweenable=null)},h.prototype._easing=function(a){return g.hasOwnProperty(a)?g[a]:a},b.exports=h},{"./utils":9,shifty:1}],6:[function(a,b,c){var d=a("./shape"),e=a("./circle"),f=a("./utils"),g=function(a,b){this._pathTemplate="M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",this.containerAspectRatio=2,d.apply(this,arguments)};g.prototype=new d,g.prototype.constructor=g,g.prototype._initializeSvg=function(a,b){a.setAttribute("viewBox","0 0 100 50")},g.prototype._initializeTextContainer=function(a,b,c){a.text.style&&(c.style.top="auto",c.style.bottom="0",a.text.alignToBottom?f.setStyle(c,"transform","translate(-50%, 0)"):f.setStyle(c,"transform","translate(-50%, 50%)"))},g.prototype._pathString=e.prototype._pathString,g.prototype._trailString=e.prototype._trailString,b.exports=g},{"./circle":2,"./shape":7,"./utils":9}],7:[function(a,b,c){var d=a("./path"),e=a("./utils"),f="Object is destroyed",g=function a(b,c){if(!(this instanceof a))throw new Error("Constructor was called without new keyword");if(0!==arguments.length){this._opts=e.extend({color:"#555",strokeWidth:1,trailColor:null,trailWidth:null,fill:null,text:{style:{color:null,position:"absolute",left:"50%",top:"50%",padding:0,margin:0,transform:{prefix:!0,value:"translate(-50%, -50%)"}},autoStyleContainer:!0,alignToBottom:!0,value:null,className:"progressbar-text"},svgStyle:{display:"block",width:"100%"},warnings:!1},c,!0),e.isObject(c)&&void 0!==c.svgStyle&&(this._opts.svgStyle=c.svgStyle),e.isObject(c)&&e.isObject(c.text)&&void 0!==c.text.style&&(this._opts.text.style=c.text.style);var f,g=this._createSvgView(this._opts);if(!(f=e.isString(b)?document.querySelector(b):b))throw new Error("Container does not exist: "+b);this._container=f,this._container.appendChild(g.svg),this._opts.warnings&&this._warnContainerAspectRatio(this._container),this._opts.svgStyle&&e.setStyles(g.svg,this._opts.svgStyle),this.svg=g.svg,this.path=g.path,this.trail=g.trail,this.text=null;var h=e.extend({attachment:void 0,shape:this},this._opts);this._progressPath=new d(g.path,h),e.isObject(this._opts.text)&&null!==this._opts.text.value&&this.setText(this._opts.text.value)}};g.prototype.animate=function(a,b,c){if(null===this._progressPath)throw new Error(f);this._progressPath.animate(a,b,c)},g.prototype.stop=function(){if(null===this._progressPath)throw new Error(f);void 0!==this._progressPath&&this._progressPath.stop()},g.prototype.pause=function(){if(null===this._progressPath)throw new Error(f);void 0!==this._progressPath&&this._progressPath._tweenable&&this._progressPath._tweenable.pause()},g.prototype.resume=function(){if(null===this._progressPath)throw new Error(f);void 0!==this._progressPath&&this._progressPath._tweenable&&this._progressPath._tweenable.resume()},g.prototype.destroy=function(){if(null===this._progressPath)throw new Error(f);this.stop(),this.svg.parentNode.removeChild(this.svg),this.svg=null,this.path=null,this.trail=null,this._progressPath=null,null!==this.text&&(this.text.parentNode.removeChild(this.text),this.text=null)},g.prototype.set=function(a){if(null===this._progressPath)throw new Error(f);this._progressPath.set(a)},g.prototype.value=function(){if(null===this._progressPath)throw new Error(f);return void 0===this._progressPath?0:this._progressPath.value()},g.prototype.setText=function(a){if(null===this._progressPath)throw new Error(f);null===this.text&&(this.text=this._createTextContainer(this._opts,this._container),this._container.appendChild(this.text)),e.isObject(a)?(e.removeChildren(this.text),this.text.appendChild(a)):this.text.innerHTML=a},g.prototype._createSvgView=function(a){var b=document.createElementNS("http://www.w3.org/2000/svg","svg");this._initializeSvg(b,a);var c=null;(a.trailColor||a.trailWidth)&&(c=this._createTrail(a),b.appendChild(c));var d=this._createPath(a);return b.appendChild(d),{svg:b,path:d,trail:c}},g.prototype._initializeSvg=function(a,b){a.setAttribute("viewBox","0 0 100 100")},g.prototype._createPath=function(a){var b=this._pathString(a);return this._createPathElement(b,a)},g.prototype._createTrail=function(a){var b=this._trailString(a),c=e.extend({},a);return c.trailColor||(c.trailColor="#eee"),c.trailWidth||(c.trailWidth=c.strokeWidth),c.color=c.trailColor,c.strokeWidth=c.trailWidth,c.fill=null,this._createPathElement(b,c)},g.prototype._createPathElement=function(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg","path");return c.setAttribute("d",a),c.setAttribute("stroke",b.color),c.setAttribute("stroke-width",b.strokeWidth),b.fill?c.setAttribute("fill",b.fill):c.setAttribute("fill-opacity","0"),c},g.prototype._createTextContainer=function(a,b){var c=document.createElement("div");c.className=a.text.className;var d=a.text.style;return d&&(a.text.autoStyleContainer&&(b.style.position="relative"),e.setStyles(c,d),d.color||(c.style.color=a.color)),this._initializeTextContainer(a,b,c),c},g.prototype._initializeTextContainer=function(a,b,c){},g.prototype._pathString=function(a){throw new Error("Override this function for each progress bar")},g.prototype._trailString=function(a){throw new Error("Override this function for each progress bar")},g.prototype._warnContainerAspectRatio=function(a){if(this.containerAspectRatio){var b=window.getComputedStyle(a,null),c=parseFloat(b.getPropertyValue("width"),10),d=parseFloat(b.getPropertyValue("height"),10);e.floatEquals(this.containerAspectRatio,c/d)||(console.warn("Incorrect aspect ratio of container","#"+a.id,"detected:",b.getPropertyValue("width")+"(width)","/",b.getPropertyValue("height")+"(height)","=",c/d),console.warn("Aspect ratio of should be",this.containerAspectRatio))}},b.exports=g},{"./path":5,"./utils":9}],8:[function(a,b,c){var d=a("./shape"),e=a("./utils"),f=function(a,b){this._pathTemplate="M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}",this._trailTemplate="M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}",d.apply(this,arguments)};f.prototype=new d,f.prototype.constructor=f,f.prototype._pathString=function(a){var b=100-a.strokeWidth/2;return e.render(this._pathTemplate,{width:b,strokeWidth:a.strokeWidth,halfOfStrokeWidth:a.strokeWidth/2})},f.prototype._trailString=function(a){var b=100-a.strokeWidth/2;return e.render(this._trailTemplate,{width:b,strokeWidth:a.strokeWidth,halfOfStrokeWidth:a.strokeWidth/2,startMargin:a.strokeWidth/2-a.trailWidth/2})},b.exports=f},{"./shape":7,"./utils":9}],9:[function(a,b,c){function d(a,b,c){a=a||{},b=b||{},c=c||!1;for(var e in b)if(b.hasOwnProperty(e)){var f=a[e],g=b[e];c&&l(f)&&l(g)?a[e]=d(f,g,c):a[e]=g}return a}function e(a,b){var c=a;for(var d in b)if(b.hasOwnProperty(d)){var e=b[d],f="\\{"+d+"\\}",g=new RegExp(f,"g");c=c.replace(g,e)}return c}function f(a,b,c){for(var d=a.style,e=0;e<p.length;++e){d[p[e]+h(b)]=c}d[b]=c}function g(a,b){m(b,function(b,c){null!==b&&void 0!==b&&(l(b)&&!0===b.prefix?f(a,c,b.value):a.style[c]=b)})}function h(a){return a.charAt(0).toUpperCase()+a.slice(1)}function i(a){return"string"==typeof a||a instanceof String}function j(a){return"function"==typeof a}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a){return!k(a)&&("object"==typeof a&&!!a)}function m(a,b){for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];b(d,c)}}function n(a,b){return Math.abs(a-b)<q}function o(a){for(;a.firstChild;)a.removeChild(a.firstChild)}var p="Webkit Moz O ms".split(" "),q=.001;b.exports={extend:d,render:e,setStyle:f,setStyles:g,capitalize:h,isString:i,isFunction:j,isObject:l,forEachObject:m,floatEquals:n,removeChildren:o}},{}]},{},[4])(4)});
//# sourceMappingURL=progressbar.min.js.map;
