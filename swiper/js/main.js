$(document).ready(function() {
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    effect: 'cube',
    cube: {
      shadow: false,
      slideShadows: false
    },

    // If we need pagination
    pagination: '.swiper-pagination',

    // Navigation arrows
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  });

  new WOW().init();

  mySwiper.on('transitionStart', function() {
    $('.wow').removeClass('wow');
  });

  mySwiper.on('slideChangeStart', function() {
    $('.swiper-slide-active img').addClass('wow');
    new WOW().init();
  });

});
