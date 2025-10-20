/* =========================================================
 * app.js — Portfólio Bryan (versão simplificada e limpa)
 * =========================================================
 *  1) Lucide icons
 *  2) Atualização do ano no footer
 *  3) Validação Bootstrap
 *  4) Animações simples de entrada (reveal)
 *  5) Fechamento automático do offcanvas (mobile)
 * =======================================================*/


/* ===================================
 * 1) Lucide icons
 * =================================== */
document.addEventListener('DOMContentLoaded', () => {
  try { window.lucide?.createIcons(); } catch (e) { console.warn('Lucide:', e); }

  updateFooterYear();
  initBootstrapValidation();
  initReveal();
  initOffcanvasAutoClose();
});


/* ===================================
 * 2) Atualização do ano no footer
 * =================================== */
function updateFooterYear() {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}


/* ===================================
 * 3) Validação de formulários (Bootstrap)
 * =================================== */
function initBootstrapValidation() {
  const forms = document.querySelectorAll('.needs-validation');
  forms.forEach(form => {
    form.addEventListener('submit', evt => {
      if (!form.checkValidity()) {
        evt.preventDefault();
        evt.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });
}


/* ===================================
 * 4) Animações Reveal simples e clean
 * =================================== */
function initReveal() {
  const targets = document.querySelectorAll(`
    header .hero-card,
    #sobre .container > *,
    #projetos .project-card,
    #habilidades .chip,
    #formacao-experiencia .fx-card,
    #contato form,
    #contato .p-4
  `);

  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

  targets.forEach(el => io.observe(el));
}


/* ===================================
 * 5) Offcanvas (fecha ao clicar)
 * =================================== */
function initOffcanvasAutoClose() {
  const off = document.getElementById('mobileNav');
  if (!off || !window.bootstrap?.Offcanvas) return;
  off.querySelectorAll('a.nav-link, .btn').forEach(a => {
    a.addEventListener('click', () => {
      const inst = bootstrap.Offcanvas.getInstance(off)
        || bootstrap.Offcanvas.getOrCreateInstance(off);
      inst?.hide();
    });
  });
}
