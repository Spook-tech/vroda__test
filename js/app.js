const screenSize = window.screen.width;
const line = document.querySelector('#line');
const scrollBtn = document.querySelector('#to-top');
document.body.addEventListener('click', (e) => {
  const target = e.target;
  
  if (target.classList.contains('reviews__show-more-btn')){
    document.querySelector('.reviews__row').classList.remove('hidden');
  }

  if(target.id = "to-top"){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
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


// Анимация тоника
let lastScrollTop = 0;
const tonicImg = document.querySelector('.tonic img');
let imgPosition = 0;
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
  

  // Кнопка вверх
  if (scrolled > 100){
    scrollBtn.classList.add('active');
  }else{
    scrollBtn.classList.remove('active');
  }
});

// Переход по клику
let menuLinks = document.querySelectorAll("[data-goto]");
console.log(menuLinks);
if (menuLinks.length > 0){
   menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener("click", onMenuLinkClick)
   });

   function onMenuLinkClick(event){
      const menuLink = event.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector(".header").offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         })
         event.preventDefault();
      }
   }
}