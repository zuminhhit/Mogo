import initHeader from "./modules/header.js";
import initHero from "./modules/hero.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initHero();
  getCurrentYear();
});

function getCurrentYear() {
  const currentYearElement = document.getElementById("current-year");
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;
}