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
  }

  window.addEventListener("load", () => {
    initMatchHeight();
  });
}
