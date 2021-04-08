import { Swiper, Parallax, Mousewheel, Controller } from 'swiper';
Swiper.use([Parallax, Mousewheel, Controller])

document.addEventListener('DOMContentLoaded', () => {
  const swiperImg = new Swiper('.slider-img', {
    loop: false,
    speed: 2400,
    parallax: true,
    mousewheel: {
      invert: true
    }
  });

  const swiperText = new Swiper('.slider-text', {
    loop: false,
    speed: 2400,
    mousewheel: {
      invert: true
    }
  });

  swiperImg.controller.control = swiperText;
  swiperText.controller.control = swiperImg;
})
