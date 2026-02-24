function commentSlider() {
  const track = document.querySelector(".Comment-viewport-track");
  const slides = document.querySelectorAll(".Comment-viewport-track-slide");
  const btnPrev = document.querySelector(".js-comment-arw-prev");
  const btnNext = document.querySelector(".js-comment-arw-next");

  if (!track || slides.length <= 1) return;

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.classList.add("is-clone");
  lastClone.classList.add("is-clone");

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = track.querySelectorAll(".Comment-viewport-track-slide");

  let currentIndex = 1;
  const slideWidth = 100;

  track.style.transform = `translateX(-${slideWidth * currentIndex}%)`;

  function setTransition(enable = true) {
    track.style.transition = enable ? "transform 0.5s ease" : "none";
  }

  function moveTo(index) {
    setTransition(true);
    track.style.transform = `translateX(-${slideWidth * index}%)`;
    currentIndex = index;
  }

  btnNext?.addEventListener("click", () => {
    if (currentIndex >= allSlides.length - 1) return;
    moveTo(currentIndex + 1);
  });

  btnPrev?.addEventListener("click", () => {
    if (currentIndex <= 0) return;
    moveTo(currentIndex - 1);
  });

  track.addEventListener("transitionend", () => {
    if (allSlides[currentIndex].classList.contains("is-clone")) {
      setTransition(false);

      if (currentIndex === allSlides.length - 1) {
        currentIndex = 1;
      }

      if (currentIndex === 0) {
        currentIndex = allSlides.length - 2;
      }

      track.style.transform = `translateX(-${slideWidth * currentIndex}%)`;
    }
  });
}

export default function initComment() {
  commentSlider();
}
