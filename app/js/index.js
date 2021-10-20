$(document).ready(function () {
/*slider in block about*/
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

    /*slider for cards in block-stock*/
    $('.js-stock-card-slider-wrapper').slick({
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

/*scrool to section and hide burger after click on item*/
    $('.js-menu-item').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
        $('.burger-wrapper-js').removeClass("burger-visible");
    });

    jQuery(function($){
        $("input[type='tel']").mask("+7(999) 999-99-99");
    });
});

/*modal-window*/
let modal = document.getElementById("myModal");
let modalMap = document.querySelectorAll('.js-modal-review');
let btn = document.querySelector(".block1-button");
let playReview = document.querySelectorAll(".js-play");
let span = document.getElementsByClassName("close")[0];
// let spanMap = document.getElementsByClassName("close-map")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

playReview.forEach((item) => {
    item.addEventListener('click', function () {
            let currentItem = this.getAttribute('data-review');
            modalMap.forEach((el) => {
                if(el.getAttribute('data-review') === currentItem) {
                    el.style.display = "block";
                }
        })
    })
})

span.onclick = function() {
    modal.style.display = "none";
}
// spanMap.onclick = function() {
//     modalMap.style.display = "none";
// }
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    modalMap.forEach((el) => {
        if(event.target === el) {
            el.style.display = "none";

        }
    })
}
/*burger-menu*/
const btnBurger = document.querySelector('.burger-button-js');
const burgerMenuBox = document.querySelector('.burger-wrapper-js');
const burgerOverlay = document.querySelector('.burger-overlay-js');
const burgerClose = document.querySelector('.burger-close-button-js')
const burgerMenuMain = document.querySelector('.burger-menu-main-wrapper');
//show burger menu
btnBurger.addEventListener('click', () => {
    burgerMenuMain.classList.remove("burger-hidden");
    burgerMenuBox.classList.add("burger-visible");
});
//close burger menu
burgerOverlay.addEventListener('click', () => {
    burgerMenuBox.classList.remove("burger-visible");
});
burgerClose.addEventListener('click', () => {
    burgerMenuBox.classList.remove("burger-visible");
});
/*burger-menu-end*/