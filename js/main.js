import initHeader from "./modules/header.js";
import initHero from "./modules/hero.js";
import initTestimonial from "./modules/testimonial.js";
import initMap from "./modules/map.js";
import initComment from "./modules/comment.js";
import initDoService from "./modules/do-service.js";

document.addEventListener("DOMContentLoaded", () => {
  getCurrentYear();
  initHeader();
  initHero();
  initComment();
  initTestimonial();
  initMap();
  initDoService();
});

function getCurrentYear() {
  const currentYearElement = document.getElementById("current-year");
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;
}
