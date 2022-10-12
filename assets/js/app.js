const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const nav = document.querySelector('.image');
const image = document.querySelectorAll('.image img')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// let slider_maindish = tns({
//   container:".my-slider",
//   "slideBy": 1,
//   "speed": 400,
//   "nav": false,
//   controlsContainer:"#controls",
//   prevButton:".prev-maindish",
//   nextButton: ".next-maindish"  
//   responsive{
//     1600: {
//       items: 4,
//       gutter: 20
//     },
//     1024: {
//       items: 3,
//       gutter:20
//     },
//     768{
//       items:2,
//       gutter: 20
//     },
//     480:{
//       item:1,
//       gutter: 20
//     }
//   }
// })
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.next-bnt')];
const preBtn = [...document.querySelectorAll('.prev-bnt')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})