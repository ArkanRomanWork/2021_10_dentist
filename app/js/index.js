$(document).ready(function () {
/*slider in block about*/
    $('.js-slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-slider-nav',
        adaptiveHeight: true,
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
/*slider for block-reviews*/
    $('.js-slider-wrapper-video-review').slick({
        dots: true,
        arrows: false,
    });
    /*slider for maps*/
    $('.js-map-slider-wrapper').slick({
        slidesToShow: 3,
        dots: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    /*slider for first cards*/
    $('.js-first-card-slider-wrapper').slick({
        slidesToShow: 3,
        dots: false,
        arrows: false,
        responsive: [

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

/*scrool to section*/
    $('.js-menu-item').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });

});

/*modal-window*/
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

// const btnBurger = document.querySelector('.burger-button-js');
// const burgerMenuBox = document.querySelector('.burger-wrapper-js');
// const burgerOverlay = document.querySelector('.burger-overlay-js');
// const burgerClose = document.querySelector('.burger-close-button-js')
// const burgerMenuLens = document.querySelector('.link-lens-js');
// const burgerMenuMore = document.querySelector('.burger-menu-more-wrapper');
// const burgerMenuMain = document.querySelector('.burger-menu-main-wrapper');
// const burgerBack = document.querySelector('.button-back-js');
// //show burger menu
// btnBurger.addEventListener('click', () => {
//     burgerMenuMore.classList.remove("burger-visible-block");
//     burgerMenuMain.classList.remove("burger-hidden");
//     burgerMenuBox.classList.add("burger-visible");
// });
// //close burger menu
// burgerOverlay.addEventListener('click', () => {
//     burgerMenuBox.classList.remove("burger-visible");
// });
// burgerClose.addEventListener('click', () => {
//     burgerMenuBox.classList.remove("burger-visible");
// });
// //hide menu in burger
// burgerMenuLens.addEventListener('click', () => {
//     burgerMenuMore.classList.add("burger-visible-block");
//     burgerMenuMain.classList.add("burger-hidden");
// });
// //button back in burger
// burgerBack.addEventListener('click', () => {
//     burgerMenuMore.classList.remove("burger-visible-block");
//     burgerMenuMain.classList.remove("burger-hidden");
// });