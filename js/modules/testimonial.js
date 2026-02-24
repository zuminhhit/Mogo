function testimonialSlider() {
  const track = document.querySelector(".Testimonial-viewport-track");
  const slides = Array.from(
    document.querySelectorAll(".Testimonial-viewport-track-slide"),
  );
  const btnPrev = document.querySelector(".js-testimonial-arw-prev");
  const btnNext = document.querySelector(".js-testimonial-arw-next");

  if (!track || slides.length === 0) return;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.classList.add("is-clone");
  lastClone.classList.add("is-clone");

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const slideCount = slides.length;

  let currentIndex = 1;
  let isAnimating = false;
  const slideWidth = 100;
  const DURATION = 400;

  function move(withTransition = true) {
    track.style.transition = withTransition
      ? `transform ${DURATION}ms ease`
      : "none";
    track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }

  move(false);

  btnNext?.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex++;
    move(true);

    if (currentIndex === slideCount + 1) {
      setTimeout(() => {
        currentIndex = 1;
        move(false);
      }, DURATION);
    }

    setTimeout(() => {
      isAnimating = false;
    }, DURATION);
  });

  btnPrev?.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex--;
    move(true);

    if (currentIndex === 0) {
      setTimeout(() => {
        currentIndex = slideCount;
        move(false);
      }, DURATION);
    }

    setTimeout(() => {
      isAnimating = false;
    }, DURATION);
  });
}

export default function initTestimonial() {
  testimonialSlider();
}
