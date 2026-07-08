/* ============================================================
   CONTACT.JS — Contact form validation & submit feedback
   Note: front-end only demo (no backend). Wire up a form
   endpoint (e.g. Formspree) in the fetch() call below to make
   this fully functional.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const statusEl = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');

  function showStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = `form-status ${type}`;
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !subject || !message) {
      showStatus('Please fill in every field before sending.', 'error');
      return;
    }
    if (!isValidEmail(email)) {
      showStatus('Please enter a valid email address.', 'error');
      return;
    }

    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';

    // Simulated send — replace with a real endpoint (Formspree, EmailJS, etc.)
    setTimeout(() => {
      showStatus(`Thanks ${name.split(' ')[0]}! Your message has been noted — I'll reply soon.`, 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 900);
  });
});
