const slides = document.querySelectorAll('.slider__inner-wrapper');
const prevBtn = document.querySelector('.slider__button--prev');
const nextBtn = document.querySelector('.slider__button--next');
const dots = document.querySelectorAll('.slider__dot');
const slider = document.querySelector('.slider');

let currentSlide = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.toggle('is-active', index === currentSlide);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('slider__dot--active', index === currentSlide);
  });

  // блокировка кнопок
  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;

  // смена background-color
  slider.classList.remove(
    'slider--flat-white',
    'slider--lavender',
    'slider--tripple-espresso'
  );

  if (slides[currentSlide].classList.contains('slider__inner-wrapper--flat-white')) {
    slider.classList.add('slider--flat-white');
  }

  if (slides[currentSlide].classList.contains('slider__inner-wrapper--lavender')) {
    slider.classList.add('slider--lavender');
  }

  if (slides[currentSlide].classList.contains('slider__inner-wrapper--tripple-espresso')) {
    slider.classList.add('slider--tripple-espresso');
  }
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
