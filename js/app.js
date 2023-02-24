const screenSize = window.screen.width;

document.body.addEventListener('click', (e) => {
  const target = e.target;
  
  if (target.classList.contains('reviews__show-more-btn')){
    document.querySelector('.reviews__row').classList.remove('hidden');
  }
});


const swiper = new Swiper('.reviews-swiper', {
  spaceBetween: 30,


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
