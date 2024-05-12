// MENU
const menuNav = document.querySelector('.menu-nav');
const menuNavToggle = document.querySelector('.menu-nav__toggle');

menuNav.classList.remove('menu-nav-nojs');

menuNav.classList.add('menu-nav--closed');

menuNavToggle.addEventListener('click', () => {
  if (menuNav.classList.contains('menu-nav--closed')) {
    menuNav.classList.remove('menu-nav--closed');
    menuNav.classList.add('menu-nav--opened');
  } else {
    menuNav.classList.add('menu-nav--closed');
    menuNav.classList.remove('menu-nav--opened');
  }
});
