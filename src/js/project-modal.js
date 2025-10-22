// /src/js/project-modal.js
(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);

  /* ------------------------------------------------------------------ *
   * i18n helpers
   * ------------------------------------------------------------------ */
  const safeGet = (obj, path) => {
    if (!path || typeof path !== "string") return undefined;
    return path
      .split(".")
      .reduce((acc, k) => (acc && acc[k] != null ? acc[k] : undefined), obj);
  };

  function currentLang() {
    const raw = (document.documentElement.lang || 'pt').toLowerCase().trim();
    const primary = raw.split('-')[0];        
    const alias = { jp: 'ja' };               
    return alias[raw] || alias[primary] || primary || 'pt';
  }

  function t(key) {
    const lang = currentLang();
    const dict =
      (window.translations &&
        (window.translations[lang] || window.translations.pt)) ||
      {};
    // usa a get global se existir; senão usa safeGet local
    const g = typeof window.get === "function" ? window.get : safeGet;
    return g(dict, key);
  }

  function ta(key) {
    const v = t(key);
    return Array.isArray(v) ? v : [];
  }

  /* ------------------------------------------------------------------ *
   * UI render helpers
   * ------------------------------------------------------------------ */
  function renderTech(container, techs) {
    if (!container) return;
    container.innerHTML = "";
    (techs || []).forEach((tk) => {
      const span = document.createElement("span");
      span.className = "badge"; // estilo vem do seu CSS (project-modal.css)
      span.textContent = tk;
      container.appendChild(span);
    });
  }

  function renderList(ul, items = []) {
    if (!ul) return;
    ul.innerHTML = "";
    items.forEach((i) => {
      const li = document.createElement("li");
      li.textContent = i;
      ul.appendChild(li);
    });
  }

  /* ------------------------------------------------------------------ *
   * Core: preencher modal usando lang.js + PROJECTS neutro
   * ------------------------------------------------------------------ */
  function fillProjectModal(id) {
    const data = window.PROJECTS?.[id];
    if (!data) return false;

    const modalEl = $("#projectModal");
    if (!modalEl) return false;

    const base = `projects.${id}.modal`;
    const fallbackTitle = t(`projects.${id}.title`) || "Projeto";

    // Título do modal
    $("#projectModalLabel", modalEl).textContent = t(`${base}.title`) || fallbackTitle;

    // Capa
    const img = $("#pm-cover", modalEl);
    if (img) {
        img.src = data.coverSrc || "";
        img.alt = t(`${base}.coverAlt`) || fallbackTitle;
    }
    const cap = $("#pm-caption", modalEl);
    if (cap) cap.textContent = t(`${base}.coverCaption`) || "";

    // Títulos das seções (tente por ID; senão, caia no NodeList)
    const ctxTitle = $("#pm-title-contexto", modalEl) || modalEl.querySelectorAll(".pm-section-title")[0];
    const desTitle = $("#pm-title-desafios", modalEl) || modalEl.querySelectorAll(".pm-section-title")[1];
    const aprTitle = $("#pm-title-aprendizados", modalEl) || modalEl.querySelectorAll(".pm-section-title")[2];
    if (ctxTitle) ctxTitle.textContent = t(`${base}.sections.contexto`) || "Contexto";
    if (desTitle) desTitle.textContent = t(`${base}.sections.desafios`) || "Principais desafios";
    if (aprTitle) aprTitle.textContent = t(`${base}.sections.aprendizados`) || "Aprendizados";

    const asideTitle = $("#pm-title-tech", modalEl) || $(".pm-aside-title", modalEl);
    if (asideTitle) asideTitle.textContent = t(`${base}.sections.tecnologias`) || "Tecnologias";

    // Conteúdo textual
    $("#pm-contexto", modalEl).textContent = t(`${base}.content.contexto`) || "";
    renderList($("#pm-desafios", modalEl), ta(`${base}.content.desafios`));
    renderList($("#pm-aprendizados", modalEl), ta(`${base}.content.aprendizados`));

    // Tech chips (do catálogo neutro)
    renderTech($("#pm-tech", modalEl), data.tech);

    // Botões (mantém ícones; troca só os labels)
    const demo = $("#pm-demo", modalEl);
    const repo = $("#pm-repo", modalEl);
    const demoLabel = $("#pm-demo-label", modalEl);
    const repoLabel = $("#pm-repo-label", modalEl);

    if (demoLabel) demoLabel.textContent = t(`${base}.sections.demoBtn`) || "Abrir demo";
    if (repoLabel) repoLabel.textContent = t(`${base}.sections.repoBtn`) || "Ver repositório";

    if (demo) {
        if (data.links?.demo) { demo.href = data.links.demo; demo.classList.remove("disabled"); }
        else { demo.removeAttribute("href"); demo.classList.add("disabled"); }
    }
    if (repo) {
        if (data.links?.repo) { repo.href = data.links.repo; repo.classList.remove("disabled"); }
        else { repo.removeAttribute("href"); repo.classList.add("disabled"); }
    }

    // Rodapé traduzido
    const esc = $("#pm-esc-hint", modalEl);
    const closeBtn = $("#pm-close-btn", modalEl);
    const closeLabel = $("#pm-close-label", modalEl);
    if (esc) esc.textContent = t(`ui.escCloses`) || "ESC fecha";
    if (closeBtn) closeBtn.setAttribute("aria-label", t(`a11y.close`) || "Fechar");
    if (closeLabel) closeLabel.textContent = t(`ui.close`) || "Fechar";

    // Recria ícones (lucide) após mexer no DOM
    if (window.lucide?.createIcons) window.lucide.createIcons();

    return true;
  }


  /* ------------------------------------------------------------------ *
   * Abertura/fechamento + deep-link
   * ------------------------------------------------------------------ */
  function openById(id, bsModal) {
    if (!fillProjectModal(id)) return;
    const url = new URL(location.href);
    url.searchParams.set("project", id);
    history.pushState({ project: id }, "", url);
    bsModal.show();
  }

  function initModal() {
    const modalEl = $("#projectModal");
    if (!modalEl) return;

    const bsModal = new bootstrap.Modal(modalEl, { focus: true });

    // Abrir por clique
    document.querySelectorAll(".js-open-project").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.getAttribute("data-project");
        openById(id, bsModal);
      });
    });

    // Fechar: limpa URL
    modalEl.addEventListener("hidden.bs.modal", () => {
      const url = new URL(location.href);
      url.searchParams.delete("project");
      history.pushState({}, "", url);
    });

    // Abrir via URL (?project=foo)
    const initial = new URLSearchParams(location.search).get("project");
    if (initial && window.PROJECTS?.[initial]) {
      openById(initial, bsModal);
    }

    // Voltar/avançar do navegador
    window.addEventListener("popstate", () => {
      const p = new URLSearchParams(location.search).get("project");
      if (p && window.PROJECTS?.[p]) {
        fillProjectModal(p);
        bsModal.show();
      } else {
        bsModal.hide();
      }
    });

    /* -------------------------------------------------------------- *
     * Observa mudança de idioma (<html lang="..">) e re-renderiza
     * se o modal estiver aberto e houver ?project=...
     * -------------------------------------------------------------- */
    const mo = new MutationObserver(() => {
      const opened = modalEl.classList.contains("show");
      const pid = new URLSearchParams(location.search).get("project");
      if (opened && pid) fillProjectModal(pid);
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    });
  }

  document.addEventListener("DOMContentLoaded", initModal);
  document.addEventListener("app:languagechange", () => {
    const id = new URLSearchParams(location.search).get("project");
    const modalEl = document.getElementById("projectModal");
    if (id && modalEl?.classList.contains("show")) {
      fillProjectModal(id); // re-preenche com o novo idioma
    }
  });
})();
