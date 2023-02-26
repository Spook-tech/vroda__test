const screenSize = window.screen.width;


document.body.addEventListener('click', (e) => {
  const target = e.target;
  
  if (target.classList.contains('reviews__show-more-btn')){
    document.querySelector('.reviews__row').classList.remove('hidden');
  }
});


const swiper = new Swiper('.reviews-swiper', {
  spaceBetween: 30,

  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    771: {
      slidesPerView: 1,
      spaceBetween: 20
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
});

var lastScrollTop = 0;

const tonicImg = document.querySelector('.tonic img');
let imgPosition = 0;
window.addEventListener("scroll", function() {
  const scrollSpread = 15;

  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // Скролл вниз
    imgPosition++;

    imgPosition = imgPosition > scrollSpread ? 0 : imgPosition;
  } else if (st < lastScrollTop) {
    // Скролл вверх
    imgPosition--;

    imgPosition = imgPosition < -scrollSpread ? 0 : imgPosition;
  } 
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

  tonicImg.style.transform = `translate3d(0, ${imgPosition}px, 0)`;

});