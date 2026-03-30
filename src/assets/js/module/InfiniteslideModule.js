// export default function InfiniteslideModule() {
//   // function initInfiniteScroll(el) {
//   //   let pos = 0;
//   //   const speed = 0.5;
//   //   // clone 1 lần duy nhất
//   //   el.innerHTML += el.innerHTML;
//   //   function loop() {
//   //     pos -= speed;
//   //     el.style.transform = `translateX(${pos}px)`;
//   //     if (Math.abs(pos) >= el.scrollWidth / 2) {
//   //       pos = 0;
//   //     }
//   //     requestAnimationFrame(loop);
//   //   }
//   //   loop();
//   // }
//   // // ===== scroll1 =====
//   // const scroll1 = document.querySelectorAll(".scroll1");
//   // if (scroll1.length) {
//   //   scroll1.forEach((el) => {
//   //     initInfiniteScroll(el);
//   //   });
//   // }
//   // // ===== only mobile =====
//   // const width = window.innerWidth;
//   // if (width < 768) {
//   //   const scroll2 = document.querySelectorAll(".scroll2");
//   //   if (scroll2.length) {
//   //     scroll2.forEach((el) => {
//   //       initInfiniteScroll(el);
//   //     });
//   //   }
//   // }
// }
export default function InfiniteslideModule() {
  $(".scroll1").infiniteslide({
    speed: 50,
  });
  const width = window.innerWidth;
  if (width < 768) {
    $(".scroll2").infiniteslide({
      speed: 50,
    });
  }
}
