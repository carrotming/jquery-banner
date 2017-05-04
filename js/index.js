
(function ($, window, undefined) {
    $.fn.myBanner = function (option) {
        var settings = $.extend(
            [{width: 800, height: 500, zIndex: 7, opacity: 1, left: 0, top: 300},
                {width: 700, height: 400, zIndex: 6, opacity: 0.8, left: 300, top: 200},
                {width: 600, height: 300, zIndex: 3, opacity: 0.6, left: 400, top: 120},
                {width: 500, height: 200, zIndex: 1, opacity: 0.4, left: 0, top: 0},
                {width: 600, height: 300, zIndex: 3, opacity: 0.6, left: -400, top: 120},
                {width: 700, height: 400, zIndex: 6, opacity: 0.8, left: -300, top: 200},
                {simple: true}]
            , option)
        var $prev = $('#prev');
        var $next = $('#next');
        var $oUl1 = $(this);
        var $aLi = $oUl1.children();
        var flag = true;
        var myBanner = {
            init: function () {
                var self = this;
                if (settings.simple) {
                    myBanner.hover(settings.simple)
                } else {
                    myBanner.hover(settings.simple)
                }
                myBanner.layout();
                myBanner.click();
            },
            hover: function (simple) {
                $aLi.each(function (key, value) {
                    if (simple) {
                        $(value).mouseover(function () {
                            $prev.show();
                            $next.show();
                        })
                        $(value).mouseout(function () {
                            $prev.hide();
                            $next.hide();
                        })
                    } else {
                        $prev.show();
                        $next.show();
                    }
                });
            },
            layout: function () {
                $aLi.each(function (key, value) {
                    $(value).animate({
                        width: settings[key].width,
                        height: settings[key].height,
                        zIndex: settings[key].zIndex,
                        left: settings[key].left,
                        top: settings[key].top,
                        opacity: settings[key].opacity
                    }, function () {
                        flag = true;
                    })
                })
            },
            click: function () {
                $prev.click(function () {
                    if (flag) {
                        flag = false;
                        settings.push(settings.shift());
                        myBanner.layout();
                    }
                });
                $next.click(function () {
                    if (flag) {
                        flag = false;
                        settings.unshift(settings.pop());
                        myBanner.layout();
                    }
                })
            },
        };
        myBanner.init();
    }


})(jQuery, window);

