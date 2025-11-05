(() => {
  const form = document.getElementById('contactForm');
  const btn  = document.getElementById('submitBtn');

  const popup      = document.getElementById('miniPopup');
  const popupCard  = popup.querySelector('.mini-popup__card');
  const popupIcon  = document.getElementById('miniPopupIcon');
  const popupTitle = document.getElementById('miniPopupTitle');
  const popupDesc  = document.getElementById('miniPopupDesc');
  const popupClose = document.getElementById('miniPopupClose');

  // usa o lang atual do <html lang="...">, com fallback para 'pt'
  const currentLang = () => document.documentElement.getAttribute('lang') || 'pt';
  const tr = (key, fallback) => {
    try {
      const dict = window.translations?.[currentLang()] || window.translations?.pt;
      const val = (typeof window.get === 'function') ? window.get(dict, key) : undefined;
      return (typeof val === 'string' && val.trim() !== '') ? val : fallback;
    } catch { return fallback; }
  };

  let hideTimer;

  function setLoading(loading) {
    if (!btn) return;
    if (loading) {
      btn.setAttribute('disabled', 'disabled');
      btn.dataset._html = btn.innerHTML;
      btn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        <span>${tr('form.sending', 'Enviando...')}</span>
      `;
    } else {
      btn.removeAttribute('disabled');
      if (btn.dataset._html) btn.innerHTML = btn.dataset._html;
    }
  }

  function showPopup({ type = 'success', title, desc }) {
    popupCard.setAttribute('data-state', type);
    popupIcon.setAttribute('data-lucide', type === 'success' ? 'check-circle-2' : 'alert-triangle');

    const defaultTitle = (type === 'success')
      ? tr('popup.success.title', 'Mensagem enviada!')
      : tr('popup.error.title',   'Algo deu errado');

    const defaultDesc = (type === 'success')
      ? tr('popup.success.message', 'Obrigado por entrar em contato. Vou responder em breve.')
      : tr('popup.error.message',   'Tente novamente em alguns instantes.');

    popupTitle.textContent = title ?? defaultTitle;
    popupDesc.textContent  = desc  ?? defaultDesc;

    // aria-label traduzido para o botão (o HTML deve ter data-i18n-attr="aria-label")
    popupClose.setAttribute('aria-label', tr('popup.closeLabel', 'Fechar popup'));

    // reidrata ícones Lucide
    if (window.lucide && typeof lucide.createIcons === 'function') {
      lucide.createIcons();
    }

    popup.hidden = false;
    popup.setAttribute('aria-hidden', 'false');
    popupCard.focus();

    clearTimeout(hideTimer);
    hideTimer = setTimeout(hidePopup, 4500);
  }

  function hidePopup() {
    popup.setAttribute('aria-hidden', 'true');
    clearTimeout(hideTimer);

    setTimeout(() => {
        popup.hidden = true;
    }, 380);
  }

  popupClose.addEventListener('click', hidePopup);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !popup.hidden) hidePopup();
  });
  popup.addEventListener('click', (e) => {
    if (e.target === popup) hidePopup();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (res.ok) {
        form.reset();
        form.classList.remove('was-validated');
        showPopup({ type: 'success' });
      } else {
        let msg = tr('popup.error.message', 'Tente novamente em alguns instantes.');
        try {
          const json = await res.json();
          if (json.errors?.length) msg = json.errors.map(e => e.message).join(' ');
        } catch (_) {}
        showPopup({
          type: 'error',
          title: tr('popup.error.title', 'Algo deu errado'),
          desc: msg
        });
      }
    } catch (err) {
      showPopup({
        type: 'error',
        title: tr('popup.error.title', 'Algo deu errado'),
        desc: tr('errors.connection', 'Erro de conexão. Por favor, verifique sua internet e tente novamente.')
      });
    } finally {
      setLoading(false);
    }
  });

  // primeira hidratação dos ícones
  if (window.lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }

  // se o idioma mudar via setAppLanguage, o showPopup já pega o lang atual
  document.addEventListener('app:languagechange', () => {});
})();
