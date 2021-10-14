$(document).ready(function () {

    $('.js-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-slider-nav',
        // adaptiveHeight: true,
    });
    $('.js-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.js-slider-for',
        arrows: false,
        dots: true,
        centerMode: false,
        focusOnSelect: true
    });

    $('.js-slider-wrapper-video-review').slick({
        dots: true,
        arrows: false,
    });
    $('.js-map-slider-wrapper').slick({
        slidesToShow: 3,
        dots: false,
        arrows: false,
        responsive: [
            // {
            //     breakpoint: 2000,
            //     settings: {
            //         "unslick",
            //     }
            //
            // },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.js-menu-item').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });


    // $(".js-popup").fancybox({
  //   touch: false,
  //
  //   // Try to focus on the first focusable element after opening
  //   autoFocus: true,
  //   // Put focus back to active element after closing
  //   backFocus: true,
  //   // Do not let user to focus on element outside modal content
  //   trapFocus: true
  //
  // });


  //
  //$('.js-clients-slider').slick({
  //    autoplay: false,
  //    autoplaySpeed: 3000,
  //    slidesToShow: 5,
  //        slidesToScroll: 1,
  //        responsive: [
  //        {
  //            breakpoint: 1200,
  //            settings: {
  //                slidesToShow: 3,
  //                slidesToScroll: 1
  //            }
  //        },
  //        {
  //            breakpoint: 991,
  //            settings: {
  //                slidesToShow: 2,
  //                slidesToScroll: 1
  //            }
  //        },
  //        {
  //            breakpoint: 768,
  //            settings: {
  //                slidesToShow: 1,
  //                slidesToScroll: 1
  //            }
  //        }
  //    ],
  //    arrows:true,
  //    dots:true
  //});


  // $('.js-nav-btn').on('click', function (e) {
  //   e.preventDefault();
  //   $('.js-nav-content').slideToggle(300);
  // });
  // $('.js-dropdown-btn').on('click', function (e) {
  //   e.preventDefault();
  //   $(this).siblings('.js-dropdown-content').slideToggle(300);
  // });
  //
  //
  // if ($('.js-mask-phone').length > 0) {
  //   $(".js-mask-phone").inputmask("8(999) 999-99-99");
  // }


  //if (window.outerWidth < 991){
  //    $(".header__nav").appendTo(".header__top");
  //}


});

// Получить модальный
let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btn = document.querySelector(".block1-button");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}