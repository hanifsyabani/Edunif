// navbar
const navLink = document.querySelectorAll('.nav-link li a');
navLink.forEach(Links=>{
  Links.addEventListener('click',()=>{
    document.querySelector('.active')?.classList.remove('active');
    Links.classList.add('active');
  });
});

// hamburger
const hamburger = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav-link');

hamburger.onclick=(e)=>{ 
  nav.classList.toggle('show');
  e.preventDefault();
}
// klik luar element
document.addEventListener('click', function(e){
  if(!nav.contains(e.target)&&!hamburger.contains(e.target)){
    nav.classList.remove('show');
  }
});

// swiper
var swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centerSlide : true,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});



  



