/* global $ */

$(document).ready(function() {
    /* Banner slider */
    if($(".js-banner-slider")) {
        new Swiper(".js-banner-slider", {
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    /* Slider */
    if($(".js-slider")) {
        new Swiper(".js-slider", {
            slidesPerView: 'auto',
            spaceBetween: 30,
            freeMode: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    /* Nav mobile button*/
    $('.js-nav-btn').click(function() {
        $(this).toggleClass('_active');
        $('.js-nav-body').toggleClass('_active');
        $('.js-header').toggleClass('_active');
        $('body').toggleClass('locked');
    });

    /* Tabs */
    $('.js-tab-btn').click(function(e) {
        e.preventDefault();
        const $btn = $(e.currentTarget);
        $('.js-tab-btn').removeClass('_active');
        $('.js-tab-content').removeClass('_active');
        const $contentId = $btn.attr('data-tab');
        $btn.addClass('_active');
        $("[data-content-tab='" + $contentId + "']").addClass('_active');
    });
});
