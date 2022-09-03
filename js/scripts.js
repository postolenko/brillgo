function getHeaderParams() {
  if(bodyWidth <= 900) {
    topCoord = $(".header_top").height();    
    if($(document).scrollTop() > topCoord) {
      $(".resp_header_height").height($(".resp_header").height());
      $(".resp_header").addClass("fixed");
      $("#resp_nav").css({
        "height" : $(window).height() + "px"
      });
    } else {
      $(".resp_header").removeClass("fixed");
      $("#resp_nav").css({
        "height" : $(window).height() - $(".resp_header_height").offset().top + "px"
      });
    }
  } else {
    $(".resp_header_height").css({
      "height" : "auto"
    });
    $("#resp_nav").css({
        "height" : "auto"
      });
  }
}

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).resize(function() {
  getHeaderParams();
});

$(document).scroll(function() {
  getHeaderParams();
});

$(document).ready(function() {

    getHeaderParams();

    if( $(".slider").length > 0 ) {
      $('.slider').on('init', function(event, slick, currentSlide){
        i = 0;
        $('.slider').find(".slide").each(function() {
          i++;
          $(this).attr("data-fancybox", "slider_1_"+i);
        });
      });

      $(".slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 4,
          slidesToScroll: 2,
          // fade: true,
          responsive: [
              {
                breakpoint: 1050,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
    }

    // ----------------

    $(".tab_link").click(function(e) {
      parent = $(this).closest(".tab_list");
      parent.find(".tab_link").removeClass("active");
      $(this).addClass("active");
    });

    // ----------------

    $("#callbackBtn").on("click", function(e) {
      e.preventDefault();
      $("#tab_1").trigger("click");
      parent = $(this).closest(".tabs_wrapp");
      parent.find(".tab_link").removeClass("active");
      $("[for='tab_1']").addClass("active");
    });

    $("#callbackBtn_2").on("click", function(e) {
      e.preventDefault();
      $("#tab_3").trigger("click");
      parent = $(this).closest(".tabs_wrapp");
      parent.find(".tab_link").removeClass("active");
      $("[for='tab_3']").addClass("active");
    });

    $("#callbackBtn_3").on("click", function(e) {
      e.preventDefault();
      $("#tab_5").trigger("click");
      parent = $(this).closest(".tabs_wrapp");
      parent.find(".tab_link").removeClass("active");
      $("[for='tab_5']").addClass("active");
    });

    // ----------------

    if( $(".slider_2").length > 0 ) {
      
      $('.slider_2').on('init', function(event, slick, currentSlide){
        i = 0;
        $('.slider_2').find(".slide_2").each(function() {
          i++;
          $(this).attr("data-fancybox", "slider_2_"+i);
        });
      });

      $(".slider_2").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 4,
          slidesToScroll: 2,
          // fade: true,
          responsive: [
              {
                breakpoint: 1124,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 540,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
    }

    // ----------------

    if( $(".testimonial_slider").length > 0 ) {
      
      $('.testimonial_slider').on('init', function(event, slick, currentSlide){
        i = 0;
        $('.testimonial_slider').find(".testimonial_thumb").each(function() {
          i++;
          $(this).attr("data-fancybox", "testimonial_"+i);
        });
      });

      $(".testimonial_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 3,
          slidesToScroll: 1,
          // fade: true,
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 680,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
      });
    }

    // ---------------

    $("[data-popup-link]").on("click", function(e) {
        e.preventDefault();
        popupName = $(this).attr("data-popup-link");
        div = document.createElement('div');
        div.style.overflowY = 'scroll';
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        scrollWidth = div.offsetWidth - div.clientWidth;
        document.body.removeChild(div);
        $("body").addClass("fixed");
        $("body").css({
            "position" : "fixed",
            "top" :  -$(document).scrollTop() + "px",
            "overflow" : "hidden",
            "right" : 0,
            "left" : 0,
            "bottom" : 0,
            "padding-right" : scrollWidth + "px"
        });
        $(".popup_bg").fadeIn(300);
        $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(".close_popup, .popup_bg").on("click", function(e) {
        e.preventDefault();
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").attr("style", "");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").removeClass("fixed");
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 ) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").attr("style", "");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").removeClass("fixed");
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // ---------------

    $("[data-popup-link = 'popup_3']").on("click", function() {
      programName = $(this).attr("data-program");
      $("#programNameInput").val(programName);
      $("#programName").text(programName);
    });

    // --------------

    $(".respmenubtn").click(function(e) {
      e.preventDefault();
      if( $("#resp_nav").is(":hidden") ) {
          $("#resp_nav").fadeIn(300);
          $(this).addClass("active");
      } else {
          $("#resp_nav").fadeOut(300);
          $(this).removeClass("active");
      }
    });

    $(".close_nav").click(function(e) {
      e.preventDefault();
      $("#resp_nav").fadeOut(300);
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
                $("#resp_nav").fadeOut(300);
                $(".respmenubtn").removeClass("active");
        }
    });

    // ----------------

    $('.main_nav a[href^="#"], a[href="#home"]').on('click', function (e) {
      e.preventDefault();
      var hrefAttr = $(this).attr("href");
      if( hrefAttr.length > 0 && hrefAttr != "#" ) {
          $('html, body').stop().animate({
              'scrollTop': $(hrefAttr).offset().top+2
          }, 500);
      }
      if($("#resp_nav").is(":visible") && bodyWidth <= 767) {
        $("#resp_nav").fadeOut(300);
        $(".respmenubtn").removeClass("active");
      }
    });

    // ---------------

    Fancybox.bind('[data-fancybox]', {
      helpers: {
            media: true
        },
        youtube: {
            autoplay: 1
        }
    });

});