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

    //Giỏ hàng start
    $('.header__shoping-cart').click(function(){
      $('.cart-sidebar').addClass('active');
      $('.overlay').addClass('active');
    });
    $('.cart-close, .overlay').click(function(){
      $('.cart-sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    });
    //Giỏ hàng end

  });