"use strict";

const toggleBtns = document.querySelectorAll(".toggle-btn");
const continentsEl = document.querySelector(".continent-container");
const continentBtns = document.querySelectorAll(".continent-btn");
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");
const reviewsEl = document.querySelectorAll(".review");

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let input = e.currentTarget.previousElementSibling;
    input.type = input.type == "password" ? "text" : "password";
  });
});

// IMPLEMENTING SWITCH OF CONTINENT REVIEWS ON REVIEW PAGE, THE EVENT LISTENER IS ATTACHED TO THE PARENT OF ALL THE BUTTONS AND NOT THE INDIVIDUAL
// BUTTONS USING A LOOP IN ORDER TO OPTIMIZE PERFORMANCE. WE LEVERAGE EVENT DELEGATION AND HANDLE THE EVENT ON THE COMMON PARENT ON ALL THE BUTTONS.
// WE THEN PERFORM OUR INTENDED ACTION IF THE TARGET CONTAINS 'continent-btn' CLASS WHICH INVARIABLY MEANS ONLY WHEN WE CLICK ON A BUTTON AND
// NOT ANYTHING ELSE.
continentsEl.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (button.classList.contains("continent-btn")) {
    continentBtns.forEach((btn) => btn.classList.remove("active-continent"));
    button.classList.add("active-continent");
  }
});

// IMPLEMEMNTING REVIEW CARDS SLIDER ON REVIEW PAGE
let slide = 1;

rightBtn.addEventListener("click", () => {
  if (slide == reviewsEl.length) {
    slide = 0;
  }
  reviewsEl.forEach((review, index) => {
    review.style.transform = `translateX(-${115 * slide}%)`;
  });
  slide++;
});

leftBtn.addEventListener("click", () => {
  slide--;
  console.log(slide);

  reviews.forEach((review, index) => {
    review.style.transform = `translateX(-${105 * slide}%)`;
  });
});
