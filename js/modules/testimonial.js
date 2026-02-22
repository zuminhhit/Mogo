function testimonialSlider() {
	const track = document.querySelector('.Testimonial-track');
  const slides = document.querySelectorAll('.Testimonial-slide');
  const btnPrev = document.querySelector('.Testimonial-arrow--prev');
  const btnNext = document.querySelector('.Testimonial-arrow--next');

  if (!track || slides.length === 0) return;

  let currentIndex = 0;
  const totalSlides = slides.length;

  function updateSlide() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  btnNext?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
  });

  btnPrev?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();
  });
}


export default function initTestimonial() {
	testimonialSlider();
}