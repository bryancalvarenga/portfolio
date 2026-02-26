document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();

    const key = "theme";

    const getPreferred = () =>
      localStorage.getItem(key) ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const setTheme = (theme) => {
      document.documentElement.setAttribute("data-bs-theme", theme);
      localStorage.setItem(key, theme);

      const icon = theme === "dark" ? "moon" : "sun";

      // Atualiza ícones dentro dos botões
      const btns = [document.getElementById("themeToggle"), document.getElementById("themeToggleDesktop")].filter(Boolean);
      btns.forEach((btn) => (btn.innerHTML = `<i data-lucide="${icon}"></i>`));

      lucide.createIcons();
    };

    setTheme(getPreferred());

    const toggle = () => {
      const current = document.documentElement.getAttribute("data-bs-theme") || "dark";
      setTheme(current === "dark" ? "light" : "dark");
    };

    document.getElementById("themeToggle")?.addEventListener("click", toggle);
    document.getElementById("themeToggleDesktop")?.addEventListener("click", toggle);
  });