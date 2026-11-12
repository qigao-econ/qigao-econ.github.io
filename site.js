const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-menu');

function setMenuOpen(open) {
  menu.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 681px)').addEventListener('change', event => {
  if (event.matches) setMenuOpen(false);
});
