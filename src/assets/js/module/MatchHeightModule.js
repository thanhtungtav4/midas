export default function MatchHeightModule() {
  function initMatchHeight() {
    //========== start Metric Card =======
    const metricCard = document.querySelectorAll(".metric-card");
    if (!metricCard.length) return;
    const maxHeightOfMetricCard = Math.max(
      ...Array.from(metricCard).map((el) => el.offsetHeight),
    );
    metricCard.forEach((el) => {
      el.style.minHeight = maxHeightOfMetricCard + "px";
    });
    //========== end Metric Card =======
    //========== start Metric Card =======
    const serviceTt = document.querySelectorAll(".services-tt");
    if (!serviceTt.length) return;
    const maxHeightOfServiceTt = Math.max(
      ...Array.from(serviceTt).map((el) => el.offsetHeight),
    );
    serviceTt.forEach((el) => {
      el.style.minHeight = maxHeightOfServiceTt + "px";
    });
    //========== end Metric Card =======
    //========== start Metric Card =======
    const reasonCard = document.querySelectorAll(".reason-card");
    if (!reasonCard.length) return;
    const maxHeightOfReasonCard = Math.max(
      ...Array.from(reasonCard).map((el) => el.offsetHeight),
    );
    reasonCard.forEach((el) => {
      el.style.minHeight = maxHeightOfReasonCard + "px";
    });
    //========== end Metric Card =======

    //========== start faq =======
    function setFaqIconHeight() {
      const items = document.querySelectorAll(".js-faq-item");
      // console.log(items);
      items.forEach((item) => {
        const title = item.querySelector(".faq-tt");
        const icon = item.querySelector(".faq-icon");

        if (!title || !icon) return;

        const height = title.offsetHeight;

        icon.style.minHeight = height + "px";
      });
    }
    setFaqIconHeight();
    //========== end faq =======

    //========== start businessCards =======
    function businessCards() {
      const businessCards = document.querySelectorAll(
        ".services .business-card .mona-content",
      );

      if (!businessCards.length) return;

      function getLineHeight(el) {
        const style = window.getComputedStyle(el);
        let lineHeight = style.lineHeight;

        // nếu line-height = "normal" → fallback
        if (lineHeight === "normal") {
          const fontSize = parseFloat(style.fontSize);
          return fontSize * 1.4;
        }

        return parseFloat(lineHeight);
      }

      function getCollapsedHeight(el) {
        const lineHeight = getLineHeight(el);

        // mobile: 2 dòng, desktop: 5 dòng
        const lines = window.innerWidth < 768 ? 3 : 5;

        return lineHeight * lines;
      }

      function initCards() {
        businessCards.forEach((el) => {
          const fullHeight = el.scrollHeight;

          el.dataset.fullHeight = fullHeight;

          const collapsedHeight = getCollapsedHeight(el);

          el.style.height = collapsedHeight + "px";
          el.style.overflow = "hidden";
        });
      }

      initCards();

      window.addEventListener("resize", () => {
        initCards();
      });

      // hover
      businessCards.forEach((el) => {
        const parent = el.parentElement;

        parent.addEventListener("mouseenter", () => {
          // if (window.innerWidth < 768) return;

          el.style.height = el.dataset.fullHeight + "px";
        });

        parent.addEventListener("mouseleave", () => {
          el.style.height = getCollapsedHeight(el) + "px";
        });
      });
    }
    businessCards();

    //========== end businessCards =======
    function projectCard() {
      const projectCard = document.querySelectorAll(
        ".projects .project-card__body .tt-sub",
      );
      if (!projectCard.length) return;
      const maxHeightOfProjectCard = Math.max(
        ...Array.from(projectCard).map((el) => el.offsetHeight),
      );
      projectCard.forEach((el) => {
        el.style.minHeight = maxHeightOfProjectCard + "px";
      });
      const projectCard1 = document.querySelectorAll(
        ".projects .project-card__body .mona-content",
      );
      if (!projectCard1.length) return;
      const maxHeightOfProjectCard1 = Math.max(
        ...Array.from(projectCard1).map((el) => el.offsetHeight),
      );
      projectCard1.forEach((el) => {
        el.style.minHeight = maxHeightOfProjectCard1 + "px";
      });
    }
    projectCard();
    function projectCard1() {
      const projectCard = document.querySelectorAll(
        ".testimonials .project-card__body",
      );
      if (!projectCard.length) return;
      const maxHeightOfProjectCard = Math.max(
        ...Array.from(projectCard).map((el) => el.offsetHeight),
      );
      projectCard.forEach((el) => {
        el.style.minHeight = maxHeightOfProjectCard + "px";
      });
    }
    projectCard1();
    function projectCard2() {
      const projectCard = document.querySelectorAll(".press-article__content");
      if (!projectCard.length) return;
      const maxHeightOfProjectCard = Math.max(
        ...Array.from(projectCard).map((el) => el.offsetHeight),
      );
      projectCard.forEach((el) => {
        el.style.minHeight = maxHeightOfProjectCard + "px";
      });
    }
    projectCard2();
    function projectCard3() {
      const projectCard = document.querySelectorAll(
        ".fields .business-card .business-tt",
      );
      if (!projectCard.length) return;
      const maxHeightOfProjectCard = Math.max(
        ...Array.from(projectCard).map((el) => el.offsetHeight),
      );
      projectCard.forEach((el) => {
        el.style.minHeight = maxHeightOfProjectCard + "px";
      });
    }
    projectCard3();

    function projectCard4() {
      const projectCard = document.querySelectorAll(".domain-tt");
      if (!projectCard.length) return;
      const maxHeightOfProjectCard = Math.max(
        ...Array.from(projectCard).map((el) => el.offsetHeight),
      );
      projectCard.forEach((el) => {
        el.style.minHeight = maxHeightOfProjectCard + "px";
      });
    }
    projectCard4();
  }

  window.addEventListener("load", () => {
    initMatchHeight();
  });
}
