const slides = document.querySelectorAll('.slider__wrapper');
const prevBtn = document.querySelector('.slider__button--prev');
const nextBtn = document.querySelector('.slider__button--next');
const dots = document.querySelectorAll('.slider__dot');

let currentSlide = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('slider__dot--active', index === currentSlide);
  });

  // блокировка кнопок
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

// кнопки навигации
prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlider();
  }
});

// пагинация
dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    currentSlide = Number(dot.dataset.slide);
    updateSlider();
  });
});

updateSlider();
