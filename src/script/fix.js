import "../styles/fix.scss";
import "./b.js"

import { Swiper, Pagination, Autoplay ,Navigation } from "swiper";

Swiper.use([Pagination, Autoplay, Navigation]);




const swiper1 = new Swiper("#swiper1", {
  // autoplay: {
  //   delay: 5000,
  //   stopOnLastSlide: false,
  //   disableOnInteraction: false
  // },
  observer: true,
  observeParents: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  navigation: {
    prevEl: '.css-H-qM1',
    nextEl: '.css-sV21-',
  },
  loop:true,
});

const swiper2 = new Swiper("#swiper2", {


  loop:true,
});

swiper1.on("slideChange", () => {
  const idx = swiper1.activeIndex;
  swiper2.slideTo(idx);
})


