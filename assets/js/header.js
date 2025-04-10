$(document).ready(function () {
    var $headerMid = $('#headerMid'); // hoặc $('.header__mid') nếu dùng class
    var headerTopHeight = $('.header__top').outerHeight();

    $(window).on('scroll', function () {
      if ($(window).scrollTop() >= headerTopHeight) {
        $headerMid.addClass('fixed');
      } else {
        $headerMid.removeClass('fixed');
      }
    });
  });