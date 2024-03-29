function getWindowHeight() {
    var myWidth = 0,
        myHeight = 0;
    if (typeof(window.innerWidth) == 'number') {
        myHeight = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        myHeight = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        myHeight = document.body.clientHeight;
    }
    return myHeight
}

function appearBox(element, element_top, bottom_of_window) {
    var buffer = element.outerHeight() / 2;
    if (bottom_of_window > element_top + buffer) {
        setTimeout(function() {
            if (jQuery('.cssanimations').length) {
                element.removeClass('trigger');
            } else {
                element.removeClass('trigger').animate({
                    'opacity': '1'
                }, element.data('speed'));
            }
        }, element.data('delay'));
    }
}
(function($) {
    $(window).load(function() {
        if (!device.mobile() && !device.tablet()) {
            $('.lazy-load-box.trigger').each(function(i) {
                var element_offset = $(this).offset();
                var element_top = element_offset.top;
                var bottom_of_window = $(window).scrollTop() + getWindowHeight();
                appearBox($(this), element_top, bottom_of_window);
            });
            $(window).scroll(function() {
                $('.lazy-load-box.trigger').each(function(i) {
                    var element_offset = $(this).offset(),
                        element_top = element_offset.top,
                        bottom_of_window = $(window).scrollTop() + getWindowHeight();
                    appearBox($(this), element_top, bottom_of_window);
                });
            });
        } else {
            $('.lazy-load-box').each(function(i) {
                $(this).removeClass('trigger').css('opacity', '1');
            });
        }
    });
})(jQuery);