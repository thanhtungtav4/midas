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
        y: -50,
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

  // ===== Chạy GSAP sau khi page load xong =====
  window.addEventListener("load", () => {
    initGSAP();
    ScrollTrigger.refresh();
  });
}
