export default function InfiniteslideModule() {
  const width = window.innerWidth;
  if ($(".scroll1").length) {
    $(".scroll1").infiniteslide({
      speed: 50,
    });
  }
  if ($(".scroll1").length) {
    if (width < 768) {
      $(".scroll2").infiniteslide({
        speed: 50,
      });
    }
  }
}
