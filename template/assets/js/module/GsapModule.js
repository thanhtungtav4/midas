export default function GsapModule() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  function initGSAP() {
    // ===== Register plugins =====

    // ===== Scroll Smoother (smooth scroll + parallax effects) =====

    const isMobile = window.innerWidth < 768;

    // if (!isMobile) {
    //   const smoother = ScrollSmoother.create({
    //     smooth: 2,
    //     effects: true,
    //     smoothTouch: 0.1,
    //     scrub: 0.4,
    //     normalizeScroll: true,
    //   });
    // }

    // ===== Text fade-in khi scroll (scroll lên xuống đều chạy) =====
    if (!isMobile) {
      gsap.utils.toArray(".js-text").forEach((el, i) => {
        gsap.from(el, {
          y: 0,
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          ease: "circ.out",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
          },
        });
      });
    }
  }

  function initTimelineItem() {
    const items = document.querySelectorAll(".c-timeline_item");

    items.forEach((item) => {
      const center = item.querySelector(".cc-align_center");
      const circle = item.querySelector(".timeline_circle");

      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        // scrub: true,
        scrub: 0.5,

        onUpdate: (self) => {
          const progress = self.progress;

          center.style.setProperty("--progress", progress * 100 + "%");
          circle.style.setProperty("--dotY", progress * 100 + "%");
        },

        onEnter: () => item.classList.add("is-active"),
        onLeaveBack: () => item.classList.remove("is-active"),
      });
    });
  }
  // function getHeaderHeight() {
  //   const header = document.querySelector(".header");
  //   return header ? header.offsetHeight : 0;
  // }

  // document.addEventListener("click", (e) => {
  //   const link = e.target.closest('a[href^="#"]');
  //   if (!link) return;

  //   const id = link.getAttribute("href");
  //   if (!id || id === "#") return;

  //   const target = document.querySelector(id);
  //   if (!target) return;

  //   e.preventDefault();

  //   gsap.to(window, {
  //     duration: 1,
  //     scrollTo: {
  //       y: target,
  //       offsetY: 300,
  //     },
  //     ease: "power2.out",
  //   });
  // });
  window.addEventListener("load", () => {
    initGSAP();
    initTimelineItem();
    ScrollTrigger.refresh();
  });
}
