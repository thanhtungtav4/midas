export default function GsapModule() {
  function initGSAP() {
    // ===== Register plugins =====
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // ===== Scroll Smoother (smooth scroll + parallax effects) =====
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    });

    // ===== Text fade-in khi scroll (scroll lên xuống đều chạy) =====
    gsap.utils.toArray(".js-text").forEach((el, i) => {
      gsap.from(el, {
        y: -60,
        opacity: 0,
        duration: 1,
        stagger: 0.1, // delay theo từng section
        // delay: i * 0.1, // stagger đơn giản
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          // toggleActions: "play reverse play reverse", // scroll xuống + scroll lên đều animate
        },
      });
    });

    // ===== Refresh ScrollTrigger sau khi load (quan trọng với Smooth Scroll) ====
    // =================== start process ===========
    const progressBars = document.querySelectorAll(".c-timeline_progress");

    // =================== end process ===========
  }
  // function timeline() {
  //   gsap.utils.toArray(".c-timeline_item").forEach((item) => {
  //     gsap.from(item, {
  //       opacity: 0,
  //       y: 50,
  //       duration: 0.6,
  //       ease: "power2.out",

  //       scrollTrigger: {
  //         trigger: item,
  //         start: "top 25%",
  //         // toggleActions: "play reverse play reverse",

  //         onEnter: () => item.classList.add("is-active"),
  //         onLeaveBack: () => item.classList.remove("is-active"),
  //       },
  //     });
  //   });
  // }

  function initTimelineItem() {
    const items = document.querySelectorAll(".c-timeline_item");

    items.forEach((item) => {
      const center = item.querySelector(".cc-align_center");
      const circle = item.querySelector(".timeline_circle");

      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        scrub: true,

        onUpdate: (self) => {
          const progress = self.progress; // 0 → 1

          // line chạy
          center.style.setProperty("--progress", progress * 100 + "%");

          // dot chạy theo line
          circle.style.setProperty("--dotY", progress * 100 + "%");
        },

        onEnter: () => item.classList.add("is-active"),
        onLeaveBack: () => item.classList.remove("is-active"),
      });
    });
  }

  window.addEventListener("load", () => {
    initGSAP();
    initTimelineItem();
    ScrollTrigger.refresh();
  });
}
