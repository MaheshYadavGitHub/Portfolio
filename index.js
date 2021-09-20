"use strict";

const toggleBtn = document.querySelector(".navbar i");
const navbarLinks = document.querySelector(".navbar-links");
const navbarCloseBtn = document.querySelector(".navbar .fa-close");

const navbarDisplay = () => {
  navbarLinks.classList.toggle("active");
  navbarCloseBtn.classList.toggle("active");
  toggleBtn.classList.toggle("disabled");
};

toggleBtn.addEventListener("click", navbarDisplay);
navbarCloseBtn.addEventListener("click", navbarDisplay);
