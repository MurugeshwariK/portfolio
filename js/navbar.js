/* ============================================================
   NAVBAR.JS — Mobile menu toggle
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    toggle.setAttribute('aria-expanded', isOpen);

    // swap icon between menu / x
    toggle.innerHTML = isOpen
      ? '<i data-lucide="x" class="icon"></i>'
      : '<i data-lucide="menu" class="icon"></i>';
    if (window.lucide) lucide.createIcons();
  });

  // Close menu when a link is clicked (mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.innerHTML = '<i data-lucide="menu" class="icon"></i>';
      if (window.lucide) lucide.createIcons();
    });
  });
});
