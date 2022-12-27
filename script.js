burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightnav = document.querySelector('.right-nav-btn');

burger.addEventListener('click' , ()=> {
  navList.classList.toggle('v-class');
  rightnav.classList.toggle('v-class');
  navbar.classList.toggle('h-nav');
});

const swiper = new Swiper('.swiper', {
      autoplay : {
       delay: 3000,
       displayOnInterction: false,
      },
      
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});