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

const cvFiles = {
  en: { prefix: 'en', language: 'English', label: 'English CV preview, two pages', status: 'Showing the English CV.' },
  zh: { prefix: 'zh', language: 'Chinese', label: 'Chinese CV preview, two pages', status: 'Showing the Chinese CV.' }
};
const preview = document.querySelector('#cv-preview');
const languageButtons = document.querySelectorAll('[data-cv]');
languageButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.getAttribute('aria-pressed') === 'true') return;
    const cv = cvFiles[button.dataset.cv];
    preview.querySelectorAll('img').forEach((page, index) => {
      page.src = `assets/cv-preview/${cv.prefix}-${index + 1}.png`;
      page.alt = `${cv.language} CV, page ${index + 1} of 2`;
    });
    preview.scrollTop = 0;
    preview.setAttribute('aria-label', cv.label);
    languageButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#preview-status').textContent = cv.status;
  });
});
