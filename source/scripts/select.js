const wrapper = document.querySelector('.sorting');
const select = document.getElementById('select-control');

// срабатывает до открытия селекта, каждый раз, даже если элемент уже в фокусе
select.addEventListener('mousedown', () => {
  wrapper.classList.add('open');
});

// срабатывает, когда пользователь выбрал другой option
select.addEventListener('change', () => {
  wrapper.classList.remove('open');
});

// клик вне селекта
document.addEventListener('click', (e) => {
  if (!wrapper.contains(e.target)) {
    wrapper.classList.remove('open');
  }
});
