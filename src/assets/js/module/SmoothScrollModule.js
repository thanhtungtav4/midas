export default function SmoothScroll() {
  SmoothScroll({
    animationTime: 300, // [ms]
    stepSize: 110, // [px]
    accelerationDelta: 50, // 50
    accelerationMax: 3, // 3
    keyboardSupport: true, // option
    arrowScroll: 50, // [px]
    pulseAlgorithm: true,
    pulseScale: 4,
    pulseNormalize: 1,
    touchpadSupport: false, // ignore touchpad by default
    fixedBackground: true,
    excluded: "",
  });
}
