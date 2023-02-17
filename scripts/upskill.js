"use strict";
const toggleCourseEl = document.querySelectorAll(".toggle-course");
const courseBlockEl = document.querySelectorAll(".course-block");
const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".modal-close-btn");
const MODALOVERLAY = document.querySelector(".modal-overlay");
const applyNowBtns = document.querySelectorAll(".apply-now");

// IMPLEMENTING COURSE-DETAILS OPENING FEATURE ON UPSKILL PAGE
toggleCourseEl.forEach((course, index) => {
  course.addEventListener("click", () => {
    courseBlockEl[index].classList.toggle("course-open");
  });
});

// MODAL BOX POP-UP AND HIDE FEATURE

const closeModal = () => {
  MODALOVERLAY.classList.remove("show");
};
const openModal = () => {
  MODALOVERLAY.classList.add("show");
};
// OPEN MODAL
applyNowBtns.forEach((btn) => {
  const link = btn.children[0];
  link.addEventListener("click", (e) => e.preventDefault()); // To prevent the link inside the button from making the page jump to the top.

  btn.addEventListener("click", openModal);
});
// CLOSE MODAL
overlayEl.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);
