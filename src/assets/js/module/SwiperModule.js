import handleIntersectionModule from "./handleIntersectionModule";

export default function SwiperModule() {
  function initSwiperForElement(cl) {
    const elment = document.querySelectorAll(cl);
    if (!elment.length) return;
    elment.forEach(function (el) {
      const swiperEl = el.querySelector(".swiper");
      const paginationEl = el.querySelector(".swiper-pagination");

      if (!swiperEl || !paginationEl) return;
      if (swiperEl.classList.contains("swiper-initialized")) return;
      new Swiper(swiperEl, {
        slidesPerView: "auto",
        pagination: {
          el: paginationEl,
          clickable: true,
        },
      });
    });
  }
  initSwiperForElement(".js-result");
  initSwiperForElement(".js-projects");
  initSwiperForElement(".js-testimonial");
  initSwiperForElement(".js-press");
  if (
    document.querySelector(".results-thumb") &&
    document.querySelector(".results-gallery")
  ) {
    const swiperResultsThumb = new Swiper(".results-thumb .swiper", {
      loop: true,
      slidesPerView: "auto",
      freeMode: true,
      watchSlidesProgress: true,
      speed: 800,
    });
    const swiperResultsGallery = new Swiper(".results-gallery .swiper", {
      loop: true,
      navigation: {
        nextEl: ".results-gallery .swiper-navigation .next",
        prevEl: ".results-gallery .swiper-navigation .prev",
      },
      thumbs: {
        swiper: swiperResultsThumb,
      },
    });
  }
  if (document.querySelector(".pricing-slider")) {
    const pricingSlider = new Swiper(".pricing-slider .swiper", {
      loop: true,
      speed: 800,
      slidesPerView: "auto",
      pagination: {
        el: ".pricing-slider .swiper-pagination",
        type: "progressbar",
      },
    });
  }
  if (document.querySelector(".js-rules-slider")) {
    const rulesSlider = new Swiper(".js-rules-slider .swiper", {
      loop: true,
      speed: 800,
      slidesPerView: "auto",
      navigation: {
        nextEl: ".js-rules-slider .swiper-navigation .next",
        prevEl: ".js-rules-slider .swiper-navigation .prev",
      },
    });
  }
}
