export default function GsapModule() {
  gsap.registerPlugin(ScrollTrigger);
  function initGSAP() {
    const isMobile = window.innerWidth < 768;

    // if (!isMobile) {
    //   // ScrollTrigger.batch(".js-text", {
    //   //   start: "top 80%",
    //   //   onEnter: (batch) =>
    //   //     gsap.from(batch, {
    //   //       y: 20,
    //   //       opacity: 0,
    //   //       scale: 0.95,
    //   //       duration: 0.6,
    //   //       ease: "power2.out",
    //   //       stagger: 0.05,
    //   //       immediateRender: false, // 👈 QUAN TRỌNG
    //   //     }),
    //   // });

    // }
    function fadeInBox1() {
      const elements = gsap.utils.toArray(".js-text");
      if (!elements.length) return;
      gsap.set(elements, {
        y: 60, // di chuyển rõ ràng hơn từ dưới lên
        scale: 0.96,
        autoAlpha: 0,
        force3D: true,
        willChange: "transform, opacity", // báo GPU tối ưu
      });

      ScrollTrigger.batch(elements, {
        interval: 0.06, // khoảng cách giữa các batch (thử 0.06 - 0.12)
        batchMax: 6, // tối đa animate cùng lúc → giảm lag khi scroll nhanh
        start: "top 75%", // trigger sớm hơn một chút
        end: "bottom 15%",
        invalidateOnRefresh: true,

        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.025, // stagger mượt bên trong batch
          });
        },

        onEnterBack: (batch) => {
          gsap.to(batch, {
            y: 0,
            scale: 1,
            autoAlpha: 1,
            duration: 0.55,
            ease: "power2.out",
            stagger: 0.015,
          });
        },

        onLeaveBack: (batch) => {
          gsap.to(batch, {
            y: 60,
            scale: 0.96,
            autoAlpha: 0,
            duration: 0.45,
            ease: "power2.in",
            stagger: 0.015,
          });
        },
        // onLeave: (batch) => { ... }   // bỏ comment nếu muốn fade out khi scroll xuống xa
      });

      ScrollTrigger.refresh();
    }
    fadeInBox1();

    // // 👇 đảm bảo layout đúng sau khi init
    // setTimeout(() => {
    //   ScrollTrigger.refresh(true);
    // }, 200);
  }

  function initTimelineItem() {
    const items = document.querySelectorAll(".c-timeline_item");

    items.forEach((item) => {
      const center = item.querySelector(".cc-align_center");
      const circle = item.querySelector(".timeline_circle");
      if (!center || !circle) return;

      ScrollTrigger.create({
        trigger: item,
        // start: "top center",
        // end: "bottom center",
        // scrub: true,
        start: "top 2%",
        end: "bottom 0%",
        scrub: 0.5,

        onUpdate: (self) => {
          const progress = self.progress;

          center.style.setProperty("--progress", progress * 100 + "%");
          circle.style.setProperty("--dotY", progress * 100 + "%");
        },

        onEnter: () => item.classList.add("is-active"),
        onEnterBack: () => item.classList.add("is-active"),
        onLeave: () => item.classList.remove("is-active"),
        onLeaveBack: () => item.classList.remove("is-active"),
      });
    });
  }
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      // =======================
      // 👉 MỞ PARENT BỊ ẨN
      // =======================
      let parent = target;
      const hiddenParents = [];

      while (parent) {
        const style = getComputedStyle(parent);

        if (style.display === "none") {
          hiddenParents.push(parent);
          parent.style.display = "block";
        }

        parent = parent.parentElement;
      }

      // =======================
      // 👉 ĐỢI LAYOUT UPDATE
      // =======================
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          // =======================
          // 👉 TÍNH OFFSET CHUẨN
          // =======================
          const header = document.querySelector(".js-header");
          const headerOffset = header ? header.offsetHeight : 100;

          const y =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerOffset;

          // =======================
          // 👉 SCROLL
          // =======================
          window.scrollTo({
            top: y,
            behavior: "smooth",
          });

          // =======================
          // 👉 RESTORE DISPLAY
          // =======================
          let lastY = window.scrollY;
          let stableFrames = 0;

          const finishScroll = () => {
            hiddenParents.forEach((el) => {
              el.style.display = "none";
            });
            ScrollTrigger.refresh();
          };

          const watchScrollEnd = () => {
            const currentY = window.scrollY;

            if (Math.abs(currentY - lastY) < 2) {
              stableFrames += 1;
            } else {
              stableFrames = 0;
              lastY = currentY;
            }

            if (stableFrames >= 8) {
              finishScroll();
              return;
            }

            requestAnimationFrame(watchScrollEnd);
          };

          requestAnimationFrame(watchScrollEnd);
        });
      });
    });
  });
  window.addEventListener("load", () => {
    initGSAP();
    initTimelineItem();
    ScrollTrigger.refresh();
  });
}
