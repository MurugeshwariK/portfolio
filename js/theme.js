/* ============================================================
   THEME.JS — Small presentational utilities
   (kept separate so palette / theme-level tweaks live in one place)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Auto-update footer year ---------- */
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Graceful image fallback ---------- */
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function handler() {
      this.style.background = 'var(--card)';
      this.removeEventListener('error', handler);
    }, { once: true });
  });

});
