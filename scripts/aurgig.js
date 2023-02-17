"use strict";
const weekBtns = document.querySelector(".week-btns");
const weekBtn = document.querySelectorAll(".week-btn");
const submitBtn = document.querySelector(".submit-btn");
const MODALOVERLAY = document.querySelector(".modal-overlay");
const overlayEl = document.querySelector(".overlay");
const backBtn = document.querySelector(".back-btn");

weekBtns.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("week-btn")) {
    weekBtn.forEach((btn) => {
      btn.classList.remove("active-week");
    });
    e.target.classList.add("active-week");
  }
});

const openModal = (e) => {
  e.preventDefault();
  MODALOVERLAY.classList.add("show");
};
const closeModal = () => {
  MODALOVERLAY.classList.remove("show");
};

submitBtn.addEventListener("click", openModal);
backBtn.addEventListener("click", closeModal);
overlayEl.addEventListener("click", closeModal);
