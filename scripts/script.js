`use strict`;

const slides = document.querySelectorAll(`.slide`);
const navEl = document.querySelector(`nav`);
const btnEl = document.querySelector(`.mobile-btn`);
const bodyEl = document.querySelector(`body`);
const arrowRight = document.querySelector(`.arrow-right`);
const arrowLeft = document.querySelector(`.arrow-left`);
const reviews = document.querySelectorAll(`.review`);
btnEl.addEventListener(`click`, () => {
  navEl.classList.toggle(`nav-open`);
  bodyEl.classList.toggle(`fixed`);
  bodyEl.classList.toggle(`w-full`); // overflow-y-hidden, h-screen
});

// IMPLEMENTING HERO SECTION CAROUSEL
let count = 0;
let maxSlides = slides.length;
const sliderFunction = () => {
  if (count == maxSlides) {
    count = 0;
  }
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${110 * (index - count)}%)`;
  });
  count++;
};
sliderFunction();
setInterval(sliderFunction, 5000);

let counter = 1;
const nextSlide = () => {
  if (counter === reviews.length) {
    counter = 0;
  }
  reviews.forEach((review, index) => {
    review.style.transform = `translateX(-${105 * counter}%)`;
  });
  counter++;
};
const prevSlide = () => {
  counter--;

  reviews.forEach((review, index) => {
    review.style.transform = `translateX(-${110 * counter}%)`;
  });
};
arrowRight.addEventListener("click", nextSlide);
arrowLeft.addEventListener("click", prevSlide);
