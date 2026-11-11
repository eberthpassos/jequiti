(function () {
  const toggles = document.querySelectorAll("[data-menu-toggle]");

  toggles.forEach((button) => {
    const menu = document.getElementById(button.getAttribute("aria-controls"));
    if (!menu) return;

    const icon = button.querySelector(".menu-icon");
    const setOpen = (open) => {
      button.setAttribute("aria-expanded", String(open));
      button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      menu.classList.toggle("is-open", open);
      if (icon) icon.textContent = open ? "×" : "☰";
    };

    button.addEventListener("click", () => {
      setOpen(button.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        button.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (button.getAttribute("aria-expanded") !== "true") return;
      if (!menu.contains(event.target) && !button.contains(event.target)) setOpen(false);
    });

    window.addEventListener("resize", () => {
      if (window.matchMedia("(min-width: 821px)").matches) setOpen(false);
    });
  });
})();
