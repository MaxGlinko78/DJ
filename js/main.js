"use strict";

let headerLink = document.querySelectorAll(".items a"),
  ind = document.querySelector(".indicator");

headerLink.forEach((item) => {
  item.addEventListener("click", (e) => {
    moveInd(e.target);
  });
});

function moveInd(el) {
  ind.style.width = `${el.offsetWidth}px `;
  ind.style.left = `${el.offsetLeft}px `;
}

// const headerNav = document.querySelector(".header-nav");

// console.log(headerNav);

// headerNav.addEventListener("click", (items) => {
//   const target = items.target;

//   target.classList.add("active");
// });
