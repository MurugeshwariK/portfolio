/* ============================================================
   ANIMATION.JS — Certification modal & misc scroll-based FX
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Certificate modal (certifications.html) ---------- */
  const certCards = document.querySelectorAll('.cert-card');
  const modal = document.querySelector('.cert-modal');

  if (certCards.length && modal) {
    const modalImg = modal.querySelector('.cert-modal-img img');
    const modalTitle = modal.querySelector('.cert-modal-title');
    const modalIssuer = modal.querySelector('.cert-modal-issuer');
    const closeBtn = modal.querySelector('.cert-close');

    function openModal(card) {
      const img = card.querySelector('.cert-thumb img');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalTitle.textContent = card.dataset.title || '';
      modalIssuer.textContent = card.dataset.issuer || '';
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      modal.classList.remove('open');
      document.body.style.overflow = '';
    }

    certCards.forEach(card => {
      card.addEventListener('click', () => openModal(card));
    });
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  /* ---------- Timeline / staggered children reveal ---------- */
  document.querySelectorAll('[data-stagger]').forEach(group => {
    Array.from(group.children).forEach((child, i) => {
      child.classList.add('reveal');
      child.style.transitionDelay = `${i * 0.12}s`;
    });
  });

});
