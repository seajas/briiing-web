(function ($) {
    'use strict';

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    var isAndroid = navigator.userAgent.toLowerCase().indexOf("android") > -1;
    var isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    if (!window.matchMedia("(min-width: 992px)").matches) {
        if (isAndroid != isIOS) {
            $('.download-container').addClass('text-center');
            $('.appstore-link').width('auto');
            $('.appstore-link').css('padding-left', '10%');
            $('.appstore-link').css('padding-right', '10%');
            $('.mobile').addClass('hidden');
            $('.browser').addClass('hidden');
        } else {
            $('.mobile').removeClass('hidden');
        }
    } else {
        $('.mobile').removeClass('hidden');
        $('.browser').removeClass('hidden');
    }
    
    $('#copyright-year').text(new Date().getFullYear());

    new WOW().init();
})(jQuery);
