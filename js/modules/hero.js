let _slides = document.querySelectorAll(".js-toggle-slider");
let _pages = document.querySelectorAll(".js-move-page");
let _prevBtn = document.querySelector(".js-hero-prev");
let _nextBtn = document.querySelector(".js-hero-next");
let _heroHold = document.querySelector(".js-hold-slider");
let current = 0;
let autoSlide;

function updateSlide(index) {
  _slides.forEach((slide) => slide.classList.remove("is-active"));
  _pages.forEach((page) => page.classList.remove("is-active"));

  _slides[index].classList.add("is-active");
  _pages[index].classList.add("is-active");

  current = index;
}

function nextSlide() {
  let next = (current + 1) % _slides.length;
  updateSlide(next);
}

function prevSlide() {
  let prev = (current - 1 + _slides.length) % _slides.length;
  updateSlide(prev);
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

export default function initHero() {
  _nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  _prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  _pages.forEach((page, index) => {
    page.addEventListener("click", () => {
      updateSlide(index);
      resetAutoSlide();
    });
  });

  _heroHold.addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
  });

  _heroHold.addEventListener("mouseleave", () => {
    startAutoSlide();
  });

  startAutoSlide();
}
