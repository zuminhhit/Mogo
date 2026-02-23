import initHeader from "./modules/header.js";
import initHero from "./modules/hero.js";
import initTestimonial from "./modules/testimonial.js";
import initMap from "./modules/map.js";

document.addEventListener("DOMContentLoaded", () => {
  getCurrentYear();
  initHeader();
  initHero();
  initTestimonial();
  initMap();
});

function getCurrentYear() {
  const currentYearElement = document.getElementById("current-year");
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;
}
