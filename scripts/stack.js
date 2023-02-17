"use strict";
const container = document.querySelector(".stacks-container");
const inputEl = document.querySelector(".search-field");
const stacks = [
  {
    title: "iOS Swift",
    logo: "../src/assets/icons/iOS swift.png",
  },
  {
    title: "Figma",
    logo: "../src/assets/icons/Figma.png",
  },
  {
    title: "Android",
    logo: "../src/assets/icons/Android.png",
  },
  {
    title: "Photoshop",
    logo: "../src/assets/icons/Photoshop.png",
  },
  {
    title: "Java",
    logo: "../src/assets/icons/java.png",
  },
  {
    title: "Adobe",
    logo: "../src/assets/icons/adobe.png",
  },
  {
    title: "Flutter",
    logo: "../src/assets/icons/flutter.png",
  },
  {
    title: "Illustrator",
    logo: "../src/assets/icons/illustrator.png",
  },
  {
    title: "PHP",
    logo: "../src/assets/icons/PHP.png",
  },
  {
    title: "Sketch",
    logo: "../src/assets/icons/sketch.png",
  },
  {
    title: "Laravel",
    logo: "../src/assets/icons/laravel.png",
  },
  {
    title: "Zbrush",
    logo: "../src/assets/icons/zbrush.png",
  },
  {
    title: "Node.Js",
    logo: "../src/assets/icons/Node.png",
  },
  {
    title: "Indesign",
    logo: "../src/assets/icons/indesign.png",
  },
  {
    title: "Python",
    logo: "../src/assets/icons/python.png",
  },
  {
    title: "Invision",
    logo: "../src/assets/icons/invision.png",
  },
  {
    title: "AWS",
    logo: "../src/assets/icons/aws.png",
  },
  {
    title: "Webflow",
    logo: "../src/assets/icons/webflow.png",
  },
  {
    title: "DevOps",
    logo: "../src/assets/icons/devops.png",
  },
  {
    title: "Protopie",
    logo: "../src/assets/icons/protopie.png",
  },
  {
    title: "GCP",
    logo: "../src/assets/icons/gcp.png",
  },
  {
    title: "Frame.io",
    logo: "../src/assets/icons/frame.png",
  },
  {
    title: "TypeScript",
    logo: "../src/assets/icons/typescript.png",
  },
  {
    title: "Craft",
    logo: "../src/assets/icons/craft.png",
  },
  {
    title: "Go",
    logo: "../src/assets/icons/go.png",
  },
  {
    title: "Zeplin",
    logo: "../src/assets/icons/zeplin.png",
  },
  {
    title: "Java Script",
    logo: "../src/assets/icons/javascript.png",
  },
  {
    title: "Procreate",
    logo: "../src/assets/icons/procreate.png",
  },
  {
    title: "Visual studio",
    logo: "../src/assets/icons/visual-studio.png",
  },
  {
    title: "Pixlr",
    logo: "../src/assets/icons/pixlr.png",
  },
  {
    title: "HTML",
    logo: "../src/assets/icons/html.png",
  },
  {
    title: "Krita",
    logo: "../src/assets/icons/Krita.png",
  },
  {
    title: "Kotlin",
    logo: "../src/assets/icons/kotlin.png",
  },
  {
    title: "Marvel",
    logo: "../src/assets/icons/marvel.png",
  },
  {
    title: "Data Eng",
    logo: "../src/assets/icons/Data-Eng.png",
  },
  {
    title: "Corel Draw",
    logo: "../src/assets/icons/corel-draw.png",
  },
  {
    title: "Firebase",
    logo: "../src/assets/icons/firebase.png",
  },
  {
    title: "Proto",
    logo: "../src/assets/icons/proto.png",
  },
  {
    title: "React",
    logo: "../src/assets/icons/react.png",
  },
  {
    title: "Pixel",
    logo: "../src/assets/icons/pixels.png",
  },
];
stacks.forEach((stack) => {
  const html = `<a href="#" class="stack">
  <div
    class=" flex justify-around items-center w-full md:w-28 h-12 shadow-custom3"
  >
    <img src="${stack.logo}" alt="${stack.title}" />
    <p class="text-xs md:text-base stack-title">${stack.title}</p>
  </div>
</a>`;
  container.insertAdjacentHTML("beforeend", html);
});

const stackEl = document.querySelectorAll(".stack");
const stackTitle = document.querySelectorAll(".stack-title");

inputEl.addEventListener("input", (e) => {
  stackEl.forEach((stack) => (stack.style.display = `block`));
  stackEl.forEach((stack, index) => {
    const searchText = e.target.value?.toLowerCase();
    const stackName = stackTitle[index].textContent.toLowerCase();
    if (!stackName.includes(searchText)) {
      stack.style.display = `none`;
    }
  });
});
