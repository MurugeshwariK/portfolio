/* ============================================================
   TYPEWRITER.JS — Rotates roles in the hero section
   Only cycles between: "Software Developer" and "AI Engineer"
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('typewriter-role');
  if (!el) return;

  const roles = ['Software Developer', 'AI Engineer'];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const TYPE_SPEED = 85;
  const DELETE_SPEED = 45;
  const HOLD_TIME = 1400;

  function tick() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = currentRole.slice(0, charIndex);
      if (charIndex === currentRole.length) {
        deleting = true;
        return setTimeout(tick, HOLD_TIME);
      }
    } else {
      charIndex--;
      el.textContent = currentRole.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? DELETE_SPEED : TYPE_SPEED);
  }

  tick();
});
