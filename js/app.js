const screenSize = window.screen.width;
const line = document.querySelector('#line');

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
let animated = false;
window.addEventListener("scroll", function() {
  let scrolled = window.pageYOffset;
  const scrollSpread = 15;
  
  let st = window.pageYOffset || document.documentElement.scrollTop;
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
  

  if (!animated){
    if (offset(line).top-1000 <= scrolled){
      new Vivus('line', {start: 'autostart', type: 'oneByOne', duration: 1500});
      animated = true;
    }  
  }
});

// Анимация при скролле
let elements = document.querySelectorAll(".to__anim");
let html = document.querySelector('html');


function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}