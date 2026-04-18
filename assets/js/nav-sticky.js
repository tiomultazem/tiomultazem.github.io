document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav');
  const sentinel = document.querySelector('#nav-sentinel');

  if (!nav || !sentinel) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the sentinel is not visible (scrolled past), it means the nav is stuck
      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
        nav.classList.add('is-stuck');
      } else {
        nav.classList.remove('is-stuck');
      }
    });
  }, {
    threshold: [0]
  });

  observer.observe(sentinel);
});
