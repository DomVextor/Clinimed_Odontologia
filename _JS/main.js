const treatments = {
  ortodontia: {
    number: "01",
    name: "Ortodontia",
    description: "Planejamento para alinhar o sorriso e acompanhar cada fase do tratamento com proximidade.",
  },
  implantes: {
    number: "02",
    name: "Implantes dentários",
    description: "Avaliação individual e planejamento reabilitador para recuperar função, segurança e conforto.",
  },
  clareamento: {
    number: "03",
    name: "Clareamento",
    description: "Um cuidado estético planejado para valorizar o sorriso com acompanhamento profissional.",
  },
  facetas: {
    number: "04",
    name: "Facetas e lentes",
    description: "Planejamento estético atento à harmonia, à proporção e à naturalidade do seu sorriso.",
  },
  endodontia: {
    number: "05",
    name: "Endodontia",
    description: "Diagnóstico cuidadoso e tratamento de canal com foco na preservação do dente.",
  },
  harmonizacao: {
    number: "06",
    name: "Harmonização orofacial",
    description: "Procedimentos planejados para equilibrar traços e valorizar a expressão de forma individualizada.",
  },
  protese: {
    number: "07",
    name: "Prótese dentária",
    description: "Soluções reabilitadoras planejadas para devolver conforto, função e confiança ao sorrir.",
  },
  periodontia: {
    number: "08",
    name: "Periodontia",
    description: "Prevenção e tratamento da saúde gengival como base para um sorriso equilibrado.",
  },
  restauracao: {
    number: "09",
    name: "Restauração",
    description: "Recuperação cuidadosa da forma e da função dos dentes com planejamento individual.",
  },
  infantil: {
    number: "10",
    name: "Odontopediatria",
    description: "Acompanhamento acolhedor para criar uma relação positiva com o cuidado desde a infância.",
  },
  cirurgias: {
    number: "11",
    name: "Cirurgias",
    description: "Avaliação completa, orientação clara e acompanhamento em cada etapa do procedimento.",
  },
};

const treatmentRows = document.querySelectorAll(".treatment-row[data-treatment]");
const treatmentName = document.querySelector("#treatment-name");
const treatmentDescription = document.querySelector("#treatment-description");
const treatmentNumber = document.querySelector(".treatment-current-number");
const treatmentCopy = document.querySelector(".treatment-copy");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fundo da seção inicial: recepção e consultórios, um por segundo.
const heroSlides = [...document.querySelectorAll(".hero-slide")];
let activeHeroSlide = 0;
let heroSlideshowTimer;

const advanceHeroSlide = () => {
  const nextIndex = (activeHeroSlide + 1) % heroSlides.length;
  const nextSlide = heroSlides[nextIndex];

  // Aguarda a próxima foto carregar para nunca exibir um fundo vazio.
  if (!nextSlide.complete || !nextSlide.naturalWidth) return;

  heroSlides[activeHeroSlide].classList.remove("is-active");
  nextSlide.classList.add("is-active");
  activeHeroSlide = nextIndex;
};

const syncHeroSlideshow = () => {
  window.clearInterval(heroSlideshowTimer);
  if (heroSlides.length > 1 && !reduceMotion && !document.hidden) {
    heroSlideshowTimer = window.setInterval(advanceHeroSlide, 1000);
  }
};

document.addEventListener("visibilitychange", syncHeroSlideshow);
syncHeroSlideshow();
let treatmentTimer;

treatmentRows.forEach((row) => {
  row.addEventListener("click", () => {
    const treatment = treatments[row.dataset.treatment];
    if (!treatment) return;

    treatmentRows.forEach((item) => {
      const isCurrent = item === row;
      item.classList.toggle("is-active", isCurrent);
      item.setAttribute("aria-pressed", String(isCurrent));
    });

    window.clearTimeout(treatmentTimer);
    treatmentCopy.classList.add("is-updating");

    treatmentTimer = window.setTimeout(() => {
      treatmentNumber.textContent = treatment.number;
      treatmentName.textContent = treatment.name;
      treatmentDescription.textContent = treatment.description;
      requestAnimationFrame(() => treatmentCopy.classList.remove("is-updating"));
    }, reduceMotion ? 0 : 90);
  });
});

const treatmentToggle = document.querySelector("#treatment-toggle");
const treatmentMore = document.querySelector("#treatment-more");

treatmentToggle?.addEventListener("click", () => {
  const willOpen = treatmentMore.hidden;
  treatmentToggle.setAttribute("aria-expanded", String(willOpen));
  treatmentToggle.querySelector("span:first-child").textContent = willOpen
    ? "Mostrar menos tratamentos"
    : "Ver todos os tratamentos";
  treatmentToggle.querySelector("span:last-child").textContent = willOpen ? "−" : "+";

  if (reduceMotion) {
    treatmentMore.hidden = !willOpen;
    treatmentMore.style.height = willOpen ? "auto" : "0";
    treatmentMore.style.opacity = willOpen ? "1" : "0";
    return;
  }

  if (willOpen) {
    treatmentMore.hidden = false;
    treatmentMore.style.height = "0";
    treatmentMore.style.opacity = "0";
    requestAnimationFrame(() => {
      treatmentMore.style.height = `${treatmentMore.scrollHeight}px`;
      treatmentMore.style.opacity = "1";
    });
    window.setTimeout(() => { treatmentMore.style.height = "auto"; }, 200);
  } else {
    treatmentMore.style.height = `${treatmentMore.scrollHeight}px`;
    requestAnimationFrame(() => {
      treatmentMore.style.height = "0";
      treatmentMore.style.opacity = "0";
    });
    window.setTimeout(() => { treatmentMore.hidden = true; }, 200);
  }
});

const revealSelectors = [
  ".treatment-nav-wrap",
  ".treatment-feature",
  ".about-gallery",
  ".about-copy",
  ".team-intro",
  ".specialty-board",
  ".testimonial-mark",
  ".testimonial-copy",
  ".testimonial-side",
  ".section-heading-row",
  ".article-featured",
  ".article-list",
  ".contact-copy",
  ".contact-details",
];

const revealElements = document.querySelectorAll(revealSelectors.join(","));
revealElements.forEach((element, index) => {
  element.classList.add("reveal-on-scroll");
  element.style.setProperty("--reveal-delay", `${(index % 3) * 60}ms`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -10%", threshold: 0.12 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const navLinks = document.querySelectorAll(".r-nav-links a");
const observedSections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`);
    });
  }, { rootMargin: "-20% 0px -60%", threshold: [0, .2, .6] });

  observedSections.forEach((section) => navObserver.observe(section));
}

const floatingWhatsApp = document.querySelector(".floating-whatsapp");
const updateFloatingWhatsApp = () => {
  floatingWhatsApp?.classList.toggle("is-visible", window.scrollY > window.innerHeight * .55);
};
window.addEventListener("scroll", updateFloatingWhatsApp, { passive: true });
updateFloatingWhatsApp();

const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenuClose = document.querySelector(".mobile-menu-close");

const setMobileMenu = (open) => {
  mobileMenu?.classList.toggle("is-open", open);
  mobileMenu?.setAttribute("aria-hidden", String(!open));
  if (mobileMenu) mobileMenu.inert = !open;
  mobileMenuToggle?.setAttribute("aria-expanded", String(open));
  mobileMenuToggle?.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  document.documentElement.classList.toggle("menu-open", open);

  if (open) {
    window.setTimeout(() => mobileMenuClose?.focus(), reduceMotion ? 0 : 160);
  } else {
    mobileMenuToggle?.focus({ preventScroll: true });
  }
};

mobileMenuToggle?.addEventListener("click", () => setMobileMenu(true));
mobileMenuClose?.addEventListener("click", () => setMobileMenu(false));
mobileMenu?.addEventListener("click", (event) => {
  if (event.target === mobileMenu || event.target.closest("nav a")) setMobileMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (!mobileMenu?.classList.contains("is-open")) return;

  if (event.key === "Escape") {
    setMobileMenu(false);
    return;
  }

  if (event.key !== "Tab") return;
  const focusable = [...mobileMenu.querySelectorAll("a[href], button:not([disabled])")];
  const first = focusable[0];
  const last = focusable.at(-1);

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last?.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first?.focus();
  }
});

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
