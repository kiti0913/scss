jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on("click", 'a[href*="#"]', function () {
    const speed = 500;
    const adjusterPC = -159;
    const adjusterSP = -62;
    let links = $(this).attr("href");
    let targetY = $(links === "#" || links === "" ? "html" : links);
    let positionPC = targetY.offset().top + adjusterPC;
    let positionSP = targetY.offset().top + adjusterSP;
    if (window.matchMedia("(min-width: 768px)").matches) {
      $("body,html").animate(
        {
          scrollTop: positionPC,
        },
        speed,
        "swing"
      );
      return false;
    } else {
      $("body,html").animate(
        {
          scrollTop: positionSP,
        },
        speed,
        "swing"
      );
      return false;
    }
  });

  // フォーム スタイル付与
  $(function () {
    if (location.pathname.indexOf("consultant/consultant2/") >= 0) {
      $("html").css("scrollBehavior", "auto");
    } else if (location.pathname.indexOf("contact") >= 0) {
      $("html").css("scrollBehavior", "auto");
    } else if (location.pathname.indexOf("contact/confirm/") >= 0) {
      $("html").css("scrollBehavior", "auto");
    }
  });

  // お問い合わせフォーム遷移
  $(window).on("load", function () {
    if (location.pathname.indexOf("contact/") >= 0) {
      var target = $("html").offset().top;
      $("html,body").scrollTop(target);
      return false;
    }
  });

  // お問い合わせフォーム遷移
  $(window).on("load", function () {
    if (location.pathname.indexOf("contact/confirm/") >= 0) {
      var target = $("html").offset().top;
      $("html,body").scrollTop(target);
      return false;
    }
  });

  // 就活相談フォーム遷移
  $(window).on("load", function () {
    if (location.pathname.indexOf("consultant/consultant2/") >= 0) {
      var hash = $(location).attr("hash", "consultant2");
      var target = $(hash).offset().top;
      $("html,body").scrollTop(target);
      return false;
    }
  });

  $(function () {
    // slick Report制御
    $("#sliderReport").slick({
      autoplaySpeed: 2000,
      centerMode: false,
      centerPadding: "0",
      slidesToShow: 3,
      speed: 400,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  $(function () {
    // slick Column制御
    $("#sliderColumn").slick({
      autoplaySpeed: 2000,
      centerMode: false,
      centerPadding: "0",
      slidesToShow: 3,
      speed: 400,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });

  $(function () {
    // インタビュー記事SPもっと見るボタン
    if (window.matchMedia("(max-width: 768px)").matches) {
      $(".interview-archive__content").slice(2, 8).addClass("is-hidden");
      $(".btn__vm").click(function () {
        $(".interview-archive__content").slice(2, 8).removeClass("is-hidden");
        $(".btn__vm").hide();
      });
    }
  });

  $(function ($) {
    // selectの先頭文字の色を変更
    const Target = $(".is-empty");
    $(Target).on("change", function () {
      if ($(Target).val() !== "") {
        $(this).removeClass("is-empty");
      } else {
        $(this).addClass("is-empty");
      }
    });
  });

  $(window).scroll(function () {
    // SPの画面下部ボタン表示
    if ($(window).scrollTop() > 120) {
      $(".mobile-bottom").addClass("scroll");
    } else {
      $(".mobile-bottom").removeClass("scroll");
    }
  });

  $(function () {
    // パンクズリストカスタマイズ
    $(".breadcrumbs").wrapInner("<div class='container breadcrumbs__inner' />");
  });

  $(function () {
    window.onscroll = function () {
      var check = window.pageYOffset; //現在のスクロール地点
      var docHeight = $(document).height(); //ドキュメントの高さ
      var dispHeight = $(window).height(); //表示領域の高さ

      if (check > docHeight - dispHeight - 60) {
        //判別式
        $(".mobile-bottom").toggleClass("scroll");
      }
    };
  });
});

const jsHamburger = document.getElementById("jsHam");
const body = document.body;
const spHeaderMenu = document.getElementById("js-global-menu");

jsHamburger.addEventListener("click", function () {
  // hamburgerメニュー開閉
  body.classList.toggle("body__fixed");
  if (this.getAttribute("aria-expanded") == "false") {
    this.setAttribute("aria-expanded", "true");
    spHeaderMenu.classList.add("visible");
    spHeaderMenu.getAttribute("aria-hidden", "false");
  } else {
    this.setAttribute("aria-expanded", "false");
    spHeaderMenu.classList.remove("visible");
    spHeaderMenu.getAttribute("aria-hidden", "true");
  }
});

!(function () {
  // 360px未満のデバイスのレスポンシブ対応
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 360
        ? "width=device-width,initial-scale=1"
        : "width=360";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();
