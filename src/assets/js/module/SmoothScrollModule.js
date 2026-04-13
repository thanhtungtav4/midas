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
}
