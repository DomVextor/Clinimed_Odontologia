(() => {
  const filters = [...document.querySelectorAll('[data-treatment-filter]')];
  const cards = [...document.querySelectorAll('[data-treatment-category]')];
  const status = document.getElementById('tx-filter-status');
  if (!filters.length || !cards.length) return;

  function applyFilter(category, announce = true) {
    let visible = 0;
    for (const card of cards) {
      const show = category === 'todos' || card.dataset.treatmentCategory === category;
      card.hidden = !show;
      if (show) visible += 1;
    }
    for (const button of filters) {
      button.setAttribute('aria-pressed', String(button.dataset.treatmentFilter === category));
    }
    if (status) {
      status.textContent = `${visible} ${visible === 1 ? 'tratamento disponível' : 'tratamentos disponíveis'} nesta seleção.`;
      status.setAttribute('aria-live', announce ? 'polite' : 'off');
    }
  }

  filters.forEach((button) => {
    button.addEventListener('click', () => applyFilter(button.dataset.treatmentFilter));
  });

  applyFilter('todos', false);

  // Links diretos para uma especialidade continuam visíveis mesmo após filtrar.
  window.addEventListener('hashchange', () => {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target && target.matches('[data-treatment-category]') && target.hidden) {
      applyFilter('todos');
      target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  });
})();
