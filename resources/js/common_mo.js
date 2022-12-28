//   sce1 Swiper
var swiper = new Swiper(".sec1_mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



//   sec4, sce5 Swiper
var swiper = new Swiper(".sec4_mySwiper, .sec5_mySwiper", {
    centeredSlides:	false,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    breakpoints: { 
        372: {slidesPerView: 1.1,},
        389: {slidesPerView: 1.15,},
        404: {slidesPerView: 1.2,},
        421: {slidesPerView: 1.25,},
        438: {slidesPerView: 1.3,},
        453: {slidesPerView: 1.35,},
        470: {slidesPerView: 1.4,},
        488: {slidesPerView: 1.45,},
        526: {slidesPerView: 1.6,},
        571: {slidesPerView: 1.7,},
        592: {slidesPerView: 1.8,spaceBetween: 12.4,}
    },
});

