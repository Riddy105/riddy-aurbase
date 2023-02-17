"use strict";
const pageBtns = document.querySelector(".page-btns");
const pageBtn = document.querySelectorAll(".page-btn");
pageBtns.addEventListener("click", (e) => {
  if (e.target.classList.contains("page-btn")) {
    pageBtn.forEach((btn) => btn.classList.remove("active-page"));
    e.target.classList.add("active-page");
  }
});
