new window.helpFunctions.swiper.Swiper('.swiper.gallery-7-1__slider', {
  modules: [window.helpFunctions.swiper.Navigation, window.helpFunctions.swiper.Autoplay],
  navigation: {
    prevEl: '.gallery-7-1__slider-btn_prev',
    nextEl: '.gallery-7-1__slider-btn_next',
  },
  autoplay: {
    delay: 5000,
  },
  speed: 1000,
  slidesPerView: 1.112,
  spaceBetween: 12,
  keyboard: true,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    [window.helpFunctions.breakpointsMin.md]: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
  },
});
