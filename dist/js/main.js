/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* global $ */
$(document).ready(function () {
  /* Sticky header */
  function stickyHeader() {
    var scroll = $(window).scrollTop();
    var header = $('.header');

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
      wheel: "slide"
    }
  });
  /* Banner slider */

  if ($('.js-banner-slider')) {
    new Swiper('.js-banner-slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
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
        prevEl: '.swiper-button-prev'
      }
    });
  }
  /* Gallery */


  if ($('.gallery')) {
    var thumbs = new Swiper('.js-gallery-thumb', {
      spaceBetween: 30,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: "vertical",
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
    new Swiper('.js-gallery', {
      slidesPerView: 1,
      loop: true,
      thumbs: {
        swiper: thumbs
      }
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
    var $btn = $(e.currentTarget);
    $('.js-footer-link').removeClass('_active');
    $('.js-tab-btn').removeClass('_active');
    $('.js-tab-content').removeClass('_active');
    var $contentId = $btn.attr('id');
    $btn.addClass('_active');
    $("[data-content-tab='" + $contentId + "']").addClass('_active');
    $("[data-header-link='" + $contentId + "']").addClass('_active');
  });

  function checkHash() {
    if (window.location.hash) {
      var wndHash = window.location.hash;
      $('.tabs__btn').removeClass('_active');
      $('.js-footer-link').removeClass('_active');
      $('.tabs__content').removeClass('_active');
      $(wndHash).addClass('_active');
      $("[data-content-tab='" + wndHash.replace("#", "") + "']").addClass('_active');
      $("[data-header-link='" + wndHash.replace("#", "") + "']").addClass('_active');
      $('.js-nav-btn').removeClass('_active');
      $('.js-nav-body').removeClass('_active');
      $('.js-header').removeClass('_active');
      $('body').removeClass('locked');
    }
  }

  checkHash();
  $('.js-footer-link').click(function () {
    window.location.href = $(this).attr('href');
    checkHash();
  });
  /* Project links mobile */

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('.js-project-link').click(function (e) {
      e.preventDefault();
      var $link = $(e.currentTarget);
      $('.js-project-link').removeClass('_hover');
      $link.addClass('_hover');
    });
    $('.js-project-more-link').click(function (e) {
      window.location.href = $(this).attr('href');
    });
  }
  /* Map */


  if ($('.js-map').length > 0) {
    google.maps.event.addDomListener(window, 'load', initializeMap());
  }
  /* Form  */


  $('.js-submit').click(function () {
    var phoneFieldVal = $('.js-phone-field').val();
    var mailFieldVal = $('.js-email-field').val();
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
      message: 'Введите сообщение'
    },
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
});

function initializeMap() {
  var map = new google.maps.Map(document.getElementById('js-map'), {
    zoom: 14,
    center: {
      lat: 55.8184866,
      lng: 37.3664167
    },
    mapTypeControl: false,
    streetViewControl: false,
    rotateControl: false,
    clickableIcons: false,
    fullscreenControl: {
      position: google.maps.ControlPosition.RIGHT_TOP
    },
    disableDefaultUI: true,
    zoomControl: false,
    options: {
      gestureHandling: 'cooperative'
    }
  });
  new google.maps.Marker({
    position: {
      lat: 55.8184866,
      lng: 37.3664167
    },
    map: map,
    title: ""
  });
}

/***/ })
/******/ ]);