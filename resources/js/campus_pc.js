
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
  direction: 'horizontal',
  slidesPerView: 1,
  loop: false,
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