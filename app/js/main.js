/* global $ */

$(document).ready(function () {
    /* Sticky header */
    function stickyHeader() {
        const scroll = $(window).scrollTop();
        const header = $('.header');
        if (scroll >= 89) {
            header.addClass('_fixed');
        } else {
            header.removeClass('_fixed');
        }
    }

    stickyHeader();
    $(window).scroll(function () {
        stickyHeader();
    });

    /* Fancy box */
    Fancybox.bind('[data-fancybox="gallery"]', {
        Thumbs: false,
        Toolbar: false,

        Image: {
            zoom: false,
            click: false,
            wheel: "slide",
        },
    });

    /* Banner slider */
    if ($('.js-banner-slider')) {
        new Swiper('.js-banner-slider', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }

    /* Slider */
    if ($('.js-slider')) {
        new Swiper('.js-slider', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            freeMode: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    /* Gallery */
    if ($('.gallery')) {
        const thumbs = new Swiper('.js-gallery-thumb', {
            spaceBetween: 30,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: "vertical",
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        new Swiper('.js-gallery', {
            slidesPerView: 1,
            loop: true,
            thumbs: {
                swiper: thumbs,
            },
        });
    }

    /* Nav mobile button*/
    $('.js-nav-btn').click(function () {
        $(this).toggleClass('_active');
        $('.js-nav-body').toggleClass('_active');
        $('.js-header').toggleClass('_active');
        $('body').toggleClass('locked');
    });

    /* Tabs */
    $('.js-tab-btn').click(function (e) {
        e.preventDefault();
        const $btn = $(e.currentTarget);
        $('.js-tab-btn').removeClass('_active');
        $('.js-tab-content').removeClass('_active');
        const $contentId = $btn.attr('id');
        $btn.addClass('_active');
        $("[data-content-tab='" + $contentId + "']").addClass('_active');
    });

    function checkHash() {
        if (window.location.hash) {
            const wndHash = window.location.hash;
            $('.tabs__btn').removeClass('_active');
            $('.tabs__content').removeClass('_active');
            $(wndHash).addClass('_active');
            $("[data-content-tab='" + wndHash.replace("#", "") + "']").addClass('_active');
        }
    }

    checkHash();

    $('.js-footer-link').click(function () {
        window.location.href = $(this).attr('href');
        checkHash();
    });

    /* Project links mobile */

    let tapped = false
    $('.js-project-link').on("touchstart", function (e) {
        const $link = $(e.currentTarget);
        if (!tapped) {
            tapped = setTimeout(function () {
                tapped = null;
                $('.js-project-link').removeClass('_hover');
                $link.addClass('_hover');
            }, 300);
        } else {
            clearTimeout(tapped);
            tapped = null;
            $('.js-project-link').removeClass('_hover');
            window.location.href = $(this).attr('href');
        }
        return false;
    });
    $('.js-project-link').on("touchmove", function () {
        $('.js-project-link').removeClass('_hover');
        return true;
    });

    /* Map */
    if ($('.js-map').length > 0) {
        google.maps.event.addDomListener(window, 'load', initializeMap());
    }

    /* Form  */
    $('.js-submit').click(function () {
        const phoneFieldVal = $('.js-phone-field').val();
        const mailFieldVal = $('.js-email-field').val();
        $('.js-message').empty();

        if (!phoneFieldVal && !mailFieldVal) {
            $('.js-message').append("<span class='error'>Введите телефон или email</span>");
        }
    });

    $('.js-form').validate({
        rules: {
            name: 'required',
            message: 'required',
            email: {
                email: true
            }
        },
        messages: {
            name: 'Введите имя',
            message: 'Введите сообщение',
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});

function initializeMap() {
    const map = new google.maps.Map(document.getElementById('js-map'), {
        zoom: 14,
        center: {lat: 55.8184866, lng: 37.3664167},
        mapTypeControl: false,
        streetViewControl: false,
        rotateControl: false,
        clickableIcons: false,
        fullscreenControl: {position: google.maps.ControlPosition.RIGHT_TOP},
        disableDefaultUI: true,
        zoomControl: false,
        options: {
            gestureHandling: 'cooperative',
        }
    });
    new google.maps.Marker({
        position: {lat: 55.8184866, lng: 37.3664167},
        map,
        title: "",
    });
}
