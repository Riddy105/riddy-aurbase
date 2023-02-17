"use strict";
const faqBlocks = document.querySelectorAll(".faq-block");

// IMPLEMENTING FAQs
faqBlocks.forEach((faqBlock, index) => {
  faqBlock.addEventListener("click", () => {
    faqBlock.classList.toggle("faq-open");
  });
});
