(() => {
  const flagByLang = {
    pt: 'fi-br',
    en: 'fi-gb',
    es: 'fi-es',
    ja: 'fi-jp',
  };

  const btns = [
    document.getElementById('langDropdownDesktop'),
    document.getElementById('langDropdownMobile'),
  ].filter(Boolean);

  function updateButtonUI(lang) {
    const flagClass = flagByLang[lang] || flagByLang.pt;
    btns.forEach(btn => {
      const flag = btn.querySelector('.lang-flag');
      const label = btn.querySelector('.lang-label');
      if (flag) flag.className = `fi ${flagClass} lang-flag`;
      if (label) label.textContent = lang.toUpperCase();
    });
  }

  function setLang(lang) {
    const allowed = Object.keys(flagByLang);
    const safe = allowed.includes(lang) ? lang : 'pt';
    localStorage.setItem('lang', safe);
    updateButtonUI(safe);
    if (typeof window.applyLanguage === 'function') {
      window.applyLanguage(safe);
    }
  }

  const offcanvasEl = document.getElementById('mobileNav');
  const dropdownBtn = document.getElementById('langDropdownMobile');
  if (offcanvasEl && dropdownBtn) {
    let lockOffcanvas = false;

    dropdownBtn.addEventListener('click', (e) => e.stopPropagation());

    dropdownBtn.addEventListener('show.bs.dropdown', () => { lockOffcanvas = true; });
    dropdownBtn.addEventListener('hide.bs.dropdown', () => { lockOffcanvas = false; });
    offcanvasEl.addEventListener('hide.bs.offcanvas', (e) => {
      if (lockOffcanvas) e.preventDefault();
    });
  }

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.dropdown-item[data-lang]');
    if (!item) return;

    e.preventDefault();
    const lang = item.getAttribute('data-lang');
    setLang(lang);

    const dropdown = item.closest('.dropdown');
    const toggle = dropdown?.querySelector('[data-bs-toggle="dropdown"]');
    if (toggle && window.bootstrap?.Dropdown) {
      window.bootstrap.Dropdown.getOrCreateInstance(toggle).hide();
    }
  }, true);

  setLang(localStorage.getItem('lang') || 'pt');
})();
