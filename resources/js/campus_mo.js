// 스와이프
var swiper = new Swiper(".sec1_mySwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var tabItem = $('.sec4_con .swiper_btn li');
var mySwiper = new Swiper('.sec4_mySwiper', {
  spaceBetween: 0,
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  on: {
    slideChange: function () {
      var n = this.activeIndex;
      changeTab(n);
    }
  }
})
//tab    silde
tabItem.click(function () {
  var ind = $(this).index();
  changeTab(ind);
  mySwiper.slideTo(ind);
})
//tab
function changeTab(index) {
  tabItem.removeClass('active').eq(index).addClass('active');
}



var galleryTop = new Swiper('.gallery-top', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
	 		loop: true,
			loopedSlides: 10
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 4,
    //   centeredSlides: true,
      slidesPerView: '3.4',
      touchRatio: 0.2,
      slideToClickedSlide: true,
			loop: true,
			loopedSlides: 10
    });
    galleryTop.controller.control = galleryThumbs;
    galleryThumbs.controller.control = galleryTop;


