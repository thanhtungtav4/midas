export default function TabModule() {
  // ===== SELECT =====
  const faqLists = document.querySelectorAll(".js-faq-list");

  // ===== SLIDE =====
  function slideUp(el, duration = 300) {
    if (el.classList.contains("animating")) return;
    el.classList.add("animating");

    let done = false;

    el.style.height = el.scrollHeight + "px";
    el.offsetHeight;

    el.style.transition = `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    el.style.height = "0";
    el.style.overflow = "hidden";

    const clean = () => {
      if (done) return;
      done = true;

      el.style.display = "none";
      el.style.height = "";
      el.style.transition = "";
      el.style.overflow = "";
      el.classList.remove("animating");
    };

    el.addEventListener("transitionend", clean, { once: true });
    setTimeout(clean, duration + 50);
  }

  // =====
  function slideDown(el, duration = 300) {
    if (el.classList.contains("animating")) return;
    el.classList.add("animating");

    let done = false;

    el.style.display = "block";
    const height = el.scrollHeight;

    el.style.height = "0";
    el.style.overflow = "hidden";

    el.offsetHeight;

    el.style.transition = `height ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
    el.style.height = height + "px";

    const clean = () => {
      if (done) return;
      done = true;

      el.style.height = "";
      el.style.transition = "";
      el.style.overflow = "";
      el.classList.remove("animating");
    };

    el.addEventListener("transitionend", clean, { once: true });
    setTimeout(clean, duration + 50);
  }

  // ===== SET FIRST ACTIVE =====
  if (faqLists.length) {
    faqLists.forEach((list) => {
      const items = list.querySelectorAll(".js-faq-item");

      if (items.length) {
        const first = items[0];
        first.classList.add("is-active");

        const content = first.querySelector(".js-faq-content");
        if (content) content.style.display = "block";
      }
    });
  }

  // ===== SET ICON HEIGHT =====
  function setFaqIconHeight() {
    document.querySelectorAll(".js-faq-item").forEach((item) => {
      const title = item.querySelector(".faq-tt");
      const icon = item.querySelector(".faq-icon");

      if (title && icon) {
        icon.style.height = title.offsetHeight + "px";
      }
    });
  }

  window.addEventListener("load", setFaqIconHeight);
  window.addEventListener("resize", setFaqIconHeight);

  // ===== CLICK =====
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-faq-head, .faq-tt");
    if (!btn) return;

    const item = btn.closest(".js-faq-item");
    const list = btn.closest(".js-faq-list");

    if (!item || !list) return;

    // 🚫 block spam click
    if (item.classList.contains("animating")) return;

    const items = list.querySelectorAll(".js-faq-item");
    const content = item.querySelector(".js-faq-content");

    if (!content) return;

    // ===== LOCK =====
    items.forEach((el) => el.classList.add("animating"));

    // ===== CLOSE OTHERS =====
    items.forEach((el) => {
      if (el !== item) {
        el.classList.remove("is-active");
        const c = el.querySelector(".js-faq-content");
        if (c) slideUp(c);
      }
    });

    // ===== TOGGLE CURRENT =====
    if (!item.classList.contains("is-active")) {
      item.classList.add("is-active");
      slideDown(content);
    } else {
      item.classList.remove("is-active");
      slideUp(content);
    }

    // ===== UNLOCK =====
    setTimeout(() => {
      items.forEach((el) => el.classList.remove("animating"));
    }, 350);

    // ===== UPDATE HEIGHT =====
    setTimeout(setFaqIconHeight, 350);
  });
}
