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
  // handleIntersectionModule(
  //   "js-result",
  //   (el) => {
  //     initSwiperForElement(el);
  //   },
  //   {
  //     threshold: 0.1,
  //     rootMargin: "0px 0px 100px 0px",
  //   },
  // );
}
