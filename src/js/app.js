/* =========================================================
 * app.js — Portfólio Bryan (versão simplificada e limpa)
 * =========================================================
 *  1) Lucide icons
 *  2) Atualização do ano no footer
 *  3) Validação Bootstrap
 *  4) Animações simples de entrada (reveal)
 *  5) Offcanvas: fechar ao clicar em links (mas ignorar seletor de idioma)
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

(() => {
  const offcanvasEl = document.getElementById('mobileNav');
  const dropdownBtn = document.getElementById('langDropdownMobile');
  if (!offcanvasEl || !dropdownBtn) return;

  dropdownBtn.addEventListener('click', (e) => e.stopPropagation());

  let lockOffcanvas = false;
  dropdownBtn.addEventListener('show.bs.dropdown', () => { lockOffcanvas = true; });
  dropdownBtn.addEventListener('hide.bs.dropdown', () => { lockOffcanvas = false; });

  offcanvasEl.addEventListener('hide.bs.offcanvas', (e) => {
    if (lockOffcanvas) e.preventDefault();
  });
})();

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
 * 5) Offcanvas (fecha ao clicar em links válidos)
 *    - Ignora o seletor de idioma e seus itens
 * =================================== */
function initOffcanvasAutoClose() {
  const off = document.getElementById('mobileNav');
  if (!off || !window.bootstrap?.Offcanvas) return;

  off.querySelectorAll('a.nav-link, .btn').forEach(el => {
    if (el.closest('.language-dropdown-mobile')) return;
    el.addEventListener('click', () => {
      const inst = bootstrap.Offcanvas.getInstance(off)
        || bootstrap.Offcanvas.getOrCreateInstance(off);
      inst?.hide();
    });
  });
}
