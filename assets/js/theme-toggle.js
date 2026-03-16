const root = document.documentElement;
const btn = document.getElementById('theme-toggle');
const label = btn ? btn.querySelector('.toggle-label') : null;

function setTheme(theme) {
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (label) label.textContent = theme === 'dark' ? '☀️' : '🌙';
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

if (btn) {
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}