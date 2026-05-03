const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--menu-closed')) {
    navMain.classList.remove('main-nav--menu-closed');
    navMain.classList.add('main-nav--menu-opened');
  } else {
    navMain.classList.add('main-nav--menu-closed');
    navMain.classList.remove('main-nav--menu-opened');
  }
});
