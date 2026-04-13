export default function MenuModule() {
  //========= start show hide header mobile ===========
  const jsbar = document.querySelector(".js-bar");
  const jsHeader = document.querySelector(".js-header-nav");
  if (!jsbar || !jsHeader) return;
  jsbar.addEventListener("click", function () {
    this.classList.toggle("is-active");
    jsHeader.classList.toggle("is-active");
    // if (this.classList.contains("is-active")) {
    //   body.style.overflow = "hidden";
    // } else {
    //   body.style.overflow = "hidden auto";
    // }
  });

  //========= end show hide header mobile ===========

  if (window.innerWidth < 768) {
    console.log("test");
    $(".menu-item-has-children").click(function (e) {
      let target = $(e.target);
      // console.log(target);
      if (!target.is("> a")) {
        e.preventDefault();

        $(this).toggleClass("is-active");
        $(this).children(".sub-menu").stop().slideToggle();
      }
    });
  }

  //========= start show hide header pc ===========

  let header = document.querySelector(".js-header");
  if (!header) return;

  // hide/show header khi scroll
  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      // header.classList.add("is-hidden");
    } else {
      // header.classList.remove("is-hidden");
    }
    if (currentScroll > 100) {
      header.classList.add("is-fixed");
    } else {
      header.classList.remove("is-fixed");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  //========= end show hide header pc ===========
  // $(window).scroll(function () {
  //   if ($(document).scrollTop() > 100) {
  //     $(".sticky-bar_main").addClass("is-active");
  //   } else {
  //     $(".sticky-bar_main").removeClass("is-active");
  //   }
  // });
  // $(".js-scroll-top").on("click", function () {
  //   $("html, body").animate({ scrollTop: 0 });
  // });

  //============== window scrolling progress bar =======
  $(document).on("scroll resize", function () {
    var $d = $(document),
      $w = $(window);
    $("#scroll-bar").width(
      ($d.scrollTop() / ($d.height() - $w.height())) * 100 + "%",
    );
  });
}
