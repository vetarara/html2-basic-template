const MIN = 0;
const MAX = 1000;
const STEP = 50;

const slider = document.getElementById('slider');
const inputMin = document.getElementById('min');
const inputMax = document.getElementById('max');

// UI: пусто = placeholder
inputMin.value = '';
inputMax.value = '900';

noUiSlider.create(slider, {
  start: [0, 900],
  connect: true,
  range: {
    min: MIN,
    max: MAX
  },
  step: STEP,
});

slider.noUiSlider.on('update', (values, handle) => {
  const value = Math.round(values[handle]);

  if (handle === 0) {
    // важно: НЕ писать 0 в инпут, оставляем пустым
    inputMin.value = value === 0 ? '' : value;
  } else {
    inputMax.value = value;
  }
});

function syncSliderFromInputs() {
  let min = inputMin.value === '' ? 0 : Number(inputMin.value);
  let max = inputMax.value === '' ? MAX : Number(inputMax.value);

  if (min < MIN) {
    min = MIN;
  }
  if (max > MAX) {
    max = MAX;
  }

  if (min > max) {
    min = max;
  }

  slider.noUiSlider.set([min, max]);
}

inputMin.addEventListener('change', syncSliderFromInputs);
inputMax.addEventListener('change', syncSliderFromInputs);

slider.noUiSlider.disable();
slider.noUiSlider.enable();
