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

const copyEmailButton = document.querySelector('[data-copy-email]');
if (copyEmailButton) {
  copyEmailButton.addEventListener('click', async () => {
    const email = copyEmailButton.dataset.copyEmail;
    const status = document.querySelector('#copy-email-status');
    let copied = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
        copied = true;
      }
    } catch (_) { /* Try the fallback when clipboard permission is unavailable. */ }
    if (!copied) {
      const field = document.createElement('textarea');
      field.value = email;
      field.readOnly = true;
      field.style.position = 'fixed';
      field.style.left = '-9999px';
      document.body.appendChild(field);
      field.select();
      try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
      field.remove();
      copyEmailButton.focus();
    }
    status.textContent = copied ? '已复制邮箱' : '复制失败，请手动选择并复制邮箱';
  });
}
