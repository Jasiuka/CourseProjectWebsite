"use strict";

const header = document.querySelector(".header");
const sectionHero = document.querySelector(".section-hero");
const mobileButtonMenu = document.querySelector(".btn-mobile-nav");
const mainNav = document.querySelector(".main-nav");
const body = document.body;

/************************** */
/* ----STICKY NAV----- */
/* ************************** */

const headerHeight = header.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) body.classList.add("sticky");
  else body.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
headerObserver.observe(sectionHero);

/************************** */
/* ----MOBILE BUTTON ----- */
/* ************************** */

mobileButtonMenu.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// close mobile menu when clicked on link

mainNav.addEventListener("click", function (event) {
  // event.preventDefault(); // removes css scroll
  const click = event.target.classList.contains("main-nav-link");
  if (!click) return;
  header.classList.toggle("nav-open");
});
