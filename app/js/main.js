/* global $ */

$(document).ready(function() {
    if($(".js-banner-slider")) {
        new Swiper(".js-banner-slider", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    $('.js-nav-btn').click(function() {
        $(this).toggleClass('_active');
        $('.js-nav-body').toggleClass('_active');
        $('.js-header').toggleClass('_active');
        $('body').toggleClass('locked');
    });
});
