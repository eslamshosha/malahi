let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {
  if ($(window).width() >= 991) {
    sal({
      once: true,
    });
  } else {
    sal({
      disabled: true,
    });
  }
  //scroll down button to about us section
  $("#scroll-to-about-section").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about-us").offset().top - 40,
      },
      1000
    );
  });
  //phone size menu onclick
  $("#menu-id").click(function (e) {
    e.preventDefault();
    $(".navgition").toggleClass("reset-left");
    $("body").toggleClass("overflow");
    $(".menu-bars").toggleClass("open-bars");
  });
  // $(".nav-head .close-btn").click(function () {
  //   $(".navgition").removeClass("reset-left");
  //   $(".menu-bars .bars").toggleClass("open-bars");
  //   $("body").removeClass("overflow");
  // });

  //fixed nav3
  $stickyVision = $(".second-vision");
  $stickySecondLogo = $(".second-logo");
  $stickyNav = $(".top-header");
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $stickyNav.addClass("fixed-nav", 500);
      $stickySecondLogo.addClass("active");
      $stickyVision.addClass("active");
    } else {
      $stickyNav.removeClass("fixed-nav", 500);
      $stickySecondLogo.removeClass("active");
      $stickyVision.removeClass("active");
    }
    if (scroll == 0) {
      $stickyNav.removeClass("fixed-nav", 500);
      $stickySecondLogo.removeClass("active");
      $stickyVision.removeClass("active");
    }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).on("scroll load", function () {
    var scroll = $(window).scrollTop();
    if (lastScroll - scroll > 0) {
      $stickyheader.addClass("fixed-header", { duration: 1000 });
    } else {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
    lastScroll = scroll;
    if (scroll == 0) {
      $stickyheader.removeClass("fixed-header", { duration: 500 });
    }
  });
  if ($(window).width() <= 1199) {
    //slide down menu
    $(".btn-div").click(function (e) {
      e.preventDefault();
      $(this).siblings(".cats-div").slideToggle(400);
      $(".btn-div").not(this).siblings(".cats-div").slideUp(400);
      if ($(window).width() <= 1199) {
        $(this).toggleClass("active");
      }
    });
    $(".overlay-box").click(function () {
      $(".cats-div").slideToggle(400);
    });
  }
  /************************************ Clients Slider ************************************/
  var clientsSwiper = new Swiper(".clients-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        spaceBetween: 10,
        slidesPerView: 3.3,
        centeredSlides: true,
      },
      480: {
        spaceBetween: 15,
        slidesPerView: 3.5,
        centeredSlides: true,
      },
      767: {
        spaceBetween: 20,
        slidesPerView: 5,
      },
      992: {
        spaceBetween: 20,
        slidesPerView: 5.5,
      },
      1199: {
        spaceBetween: 20,
        slidesPerView: 6.515,
      },
    },
    navigation: {
      nextEl: ".clients-section .swiper-btn-next",
      prevEl: ".clients-section .swiper-btn-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  //////////// parallax
  const sceneExists =
    document.getElementsByClassName("quality-img-cont").length > 0;
  if (sceneExists) {
    if ($(window).width() > 992) {
      var scene = $("#scene").get(0);
      var parallaxInstance = new Parallax(scene);
    }
  }
  //////////// parallax
  const parallaxTriggerExists =
    document.getElementsByClassName("parallaxTrigger").length > 0;
  if (parallaxTriggerExists) {
    if ($(window).width() > 992) {
      var slides = document.getElementsByClassName("parallaxTrigger");
      var x = [];
      var y = [];
      for (var i = 1; i <= slides.length; i++) {
        x[i] = $("#scene" + i).get(0);
        y[i] = new Parallax(x[i]);
      }
    }
  }

  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
    $(".nav-foot-header").addClass("footer-accordion");
    $(".nav-foot").addClass("footer-panel");
  }
  $(".footer-accordion").click(function () {
    var x = $(this).siblings().prop("scrollHeight") + 15 + "px";
    $(".footer-accordion").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("max-height") == "0px") {
      $(this).siblings().css("max-height", x);
      $(this).siblings(".nav-foot").css("padding-top", "15px");
    } else {
      $(this).siblings().css("max-height", "0");
      $(this).siblings(".nav-foot").css("padding-top", "0");
    }

    $(".footer-accordion").not(this).siblings().css("max-height", "0");
    $(".footer-accordion")
      .not(this)
      .siblings(".nav-foot")
      .css("padding-top", "0");
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  $(this).scrollTop() >= 500
    ? $(".arrow-top").fadeIn(300)
    : $(".arrow-top").fadeOut(300);

  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(300)
      : $(".arrow-top").fadeOut(300);
  });
  //scroll down button to about us section
  $("#scroll-to-about-section").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("#about-us").offset().top - 40,
      },
      1000
    );
  });
  ///////// **team-section** /////////
  var teamSlider = new Swiper(".team-section .swiper", {
    autoplay: true,
    pagination: {
      el: ".team-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".team-slider .swiper-btn-next",
      prevEl: ".team-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
  ///////// **news-section** /////////
  var newsSlider = new Swiper(".news-slider .swiper", {
    autoplay: true,
    pagination: {
      el: ".news-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".news-slider .swiper-btn-next",
      prevEl: ".news-slider .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  const selectExists =
    document.getElementsByClassName("select_input").length > 0;
  if (selectExists) {
    const $select2 = $(".select_input");
    $select2.select2();
  }
  lazyLoad();
});
//lazy load

function lazyLoad() {
  const images = document.querySelectorAll(".lazy-img");

  const optionsLazyLoad = {
    //  rootMargin: '-50px',
    // threshold: 1
  };

  const imageObserver = new IntersectionObserver(function (enteries) {
    enteries.forEach(function (entery) {
      if (!entery.isIntersecting) {
        return;
      } else {
        preloadImage(entery.target);
        imageObserver.unobserve(entery.target);
      }
    });
  }, optionsLazyLoad);

  images.forEach(function (image) {
    imageObserver.observe(image);
  });
}

function preloadImage(img) {
  img.src = img.getAttribute("data-src");
  img.onload = function () {
    img.parentElement.classList.remove("loading-img");
    img.parentElement.classList.add("loaded-img");
    // img.parentElement.parentElement.classList.add("lazy-head-img");
  };
}

//file input
$(".custom-file-upload .upload-change").change(function () {
  let file_val;
  if ($(this).val() == "") {
    file_val = $(".file-txt").data("title");
  } else {
    file_val = $(this).prop("files")[0].name;
  }
  $(this).next().html(file_val);
});
