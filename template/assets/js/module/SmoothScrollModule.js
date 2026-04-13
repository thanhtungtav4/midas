export default function SmoothScrollModule() {
  SmoothScroll({
    // Scrolling Core
    animationTime: 600, // [ms]
    stepSize: 110, // [px]

    // Acceleration
    accelerationDelta: 50, // 50
    accelerationMax: 3, // 3

    // Keyboard Settings
    keyboardSupport: true, // option
    arrowScroll: 50, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,

    // Other
    touchpadSupport: false, // ignore touchpad by default
    fixedBackground: true,
    excluded: "",
  });
  // const nativeScrollSelectors = [".taste-content", ".m-content"];

  // nativeScrollSelectors.forEach((selector) => {
  //   document.querySelectorAll(selector).forEach((element) => {
  //     element.addEventListener(
  //       "wheel",
  //       (event) => {
  //         event.stopPropagation();
  //       },
  //       { passive: true },
  //     );
  //   });
  // });

  const handleClick = (e) => {
    const link = e.currentTarget;
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (!targetElement) return;

    e.preventDefault();

    // Hàm scroll thông minh
    const smoothScrollTo = (element) => {
      // Nếu element đang ẩn, chờ nó hiện rồi mới scroll
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            observer.disconnect(); // Ngừng quan sát sau khi scroll
          }
        });
      });

      observer.observe(element);

      // Fallback sau 300ms nếu IntersectionObserver không trigger
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        observer.disconnect();
      }, 300);
    };

    smoothScrollTo(targetElement);
  };
  handleClick();
}
