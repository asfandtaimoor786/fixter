let slideIndex = 1;
showSlides(slideIndex);
let btn_next = document.getElementsByClassName('swiper-button-next');
let btn_prev = document.getElementsByClassName('swiper-button-prev');
(button = btn_next), btn_prev;
// Next/previous controls
function button(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('swiper-slide');
  let dots = document.getElementsByClassName('fas');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
// }
