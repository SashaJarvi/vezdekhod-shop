import { Swiper, Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation } from 'swiper';
Swiper.use([Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation])

document.addEventListener('DOMContentLoaded', () => {
  const swiperImg = new Swiper('.slider-img', {
    loop: false,
    speed: 2400,
    parallax: true,
    mousewheel: {
      invert: true
    },
  });

  const swiperText = new Swiper('.slider-text', {
    loop: false,
    speed: 2400,
    mousewheel: {
      invert: true
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    }
  });

  swiperImg.controller.control = swiperText;
  swiperText.controller.control = swiperImg;
})
