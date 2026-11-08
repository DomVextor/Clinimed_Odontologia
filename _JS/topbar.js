/* Mantem o cabecalho em pilula fixo, sem prender a faixa superior.
   A barra (40px) rola normalmente; o menu retorna a sua posicao habitual. */
(() => {
  const root = document.documentElement;
  let lastOffset = -1;
  const syncTopbarOffset = () => {
    const offset = Math.max(0, 40 - (window.scrollY || 0));
    if (offset === lastOffset) return;
    root.style.setProperty("--clinic-topbar-offset", `${offset}px`);
    lastOffset = offset;
  };
  syncTopbarOffset();
  window.addEventListener("scroll", syncTopbarOffset, { passive: true });
  window.addEventListener("pageshow", syncTopbarOffset);
})();
