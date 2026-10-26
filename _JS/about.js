// Microinterações progressivas da página Quem Somos.
// Sem JavaScript (ou com movimento reduzido), todo o conteúdo permanece visível.
(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const revealItems = Array.from(document.querySelectorAll('[data-about-reveal]'));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('ab-visible');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    for (const item of revealItems) {
      item.classList.add('ab-pending');
      observer.observe(item);
    }
  }

  const parallaxImages = Array.from(document.querySelectorAll('[data-about-parallax]'));
  if (!parallaxImages.length) return;

  let ticking = false;
  const updateParallax = () => {
    const viewportHeight = window.innerHeight || 800;
    for (const image of parallaxImages) {
      const frame = image.parentElement.getBoundingClientRect();
      if (frame.bottom < -100 || frame.top > viewportHeight + 100) continue;
      const center = frame.top + frame.height / 2;
      const progress = (center - viewportHeight / 2) / viewportHeight;
      const shift = Math.max(-12, Math.min(12, -progress * 22));
      image.style.setProperty('--ab-parallax', `${shift.toFixed(1)}px`);
    }
    ticking = false;
  };

  const scheduleParallax = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(updateParallax);
  };

  window.addEventListener('scroll', scheduleParallax, { passive: true });
  window.addEventListener('resize', scheduleParallax);
  scheduleParallax();
})();
