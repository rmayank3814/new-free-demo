(function($) {
    "use strict";

    $(function() {
        var header = $(".start-style");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 5) {
                header.removeClass('start-style ').addClass("scroll-on sticky-header bg-light ");

            } else {
                header.removeClass("scroll-on sticky-header bg-light ").addClass('start-style ');
            }
        });
        $(window).on('load', function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 5) {
                header.removeClass('start-style ').addClass("scroll-on sticky-header bg-light ");

            } else {
                header.removeClass("scroll-on sticky-header bg-light ").addClass('start-style ');
            }
        });
    });

    $(document).ready(function() {
        var checkScrollBar = function() {
            $('.nav-link').css({
                color: $(this).scrollTop() >= 5 ?
                    '#6c757d' : '#000'
            })
        }
        $(window).on('load resize scroll', checkScrollBar)
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $(".top-bar").addClass("sticky-top");
        } else {
            $(".top-bar").removeClass("sticky-top");
        }
    });


    //Animation

    $(document).ready(function() {
        $('body.hero-anime').removeClass('hero-anime');
    });

    //Menu On Hover

    $('body').on('mouseenter mouseleave', '.nav-item', function(e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function() {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

    //Switch light/dark

    $("#switch").on('click', function() {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $("#switch").removeClass("switched");
        } else {
            $("body").addClass("dark");
            $("#switch").addClass("switched");
        }
    });

})(jQuery);

var $body = $('body');

$body.on('click', '[data-dropdown-toggle]', (event) => {
    event.preventDefault();
    var $button = $(event.target),
        $data = $(event.target).data('dropdownToggle'),
        $dropdown = '#' + $data;

    $('.dropdown-menu:not(' + $dropdown + ')').hide();
    $('button:not(' + $data + ')').removeClass('active');
    $($dropdown).toggle();
    $($button).toggleClass("active");

});





/*scroll to top*/
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 100);
    });
}