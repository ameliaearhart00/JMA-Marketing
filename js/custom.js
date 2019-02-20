(function($) {
  // Init Wow
  wow = new WOW({
    animateClass: "animated",
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on("click", function() {
    $(".navbar-collapse.collapse").removeClass("in");
  });

  // Navigation scrolls
  $(".navbar-nav li a").bind("click", function(event) {
    $(".navbar-nav li").removeClass("active");
    $(this)
      .closest("li")
      .addClass("active");
    var $anchor = $(this);
    var nav = $($anchor.attr("href"));
    if (nav.length) {
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top
          },
          1500,
          "easeInOutExpo"
        );

      event.preventDefault();
    }
  });

  // About section scroll
  $(".overlay-detail a").on("click", function(event) {
    event.preventDefault();
    var hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      900,
      function() {
        window.location.hash = hash;
      }
    );
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  //testimonial
  jQuery(".testimonials-slider").flexslider({
    animation: "slide",
    directionNav: true,
    controlNav: true,
    pauseOnHover: true,
    slideshowSpeed: 4000,
    direction: "horizontal" //Direction of slides
  });

  if (Modernizr.mq("screen and (max-width:1024px)")) {
    jQuery("body").toggleClass("body");
  } else {
    var s = skrollr.init({
      mobileDeceleration: 1,
      edgeStrategy: "set",
      forceHeight: true,
      smoothScrolling: true,
      smoothScrollingDuration: 300,
      easing: {
        WTF: Math.random,
        inverted: function(p) {
          return 1 - p;
        }
      }
    });
  }
  //scroll menu
  jQuery(".appear").appear();
  jQuery(".appear").on("appear", function(data) {
    var id = $(this).attr("id");
    jQuery(".nav li").removeClass("active");
    jQuery(".nav a[href='#" + id + "']")
      .parent()
      .addClass("active");
  });

  // Testimonials Slider
  $(".bxslider").bxSlider({
    adaptiveHeight: true,
    mode: "fade"
  });
})(jQuery);
