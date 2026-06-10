// GSAP Initialization
gsap.registerPlugin(ScrollTrigger);

/* =========================
   HERO ANIMATION
========================= */
gsap.from(".hero-subtitle", {
  y: 30,
  opacity: 0,
  duration: 1
});

gsap.from(".hero-left h1", {
  y: 60,
  opacity: 0,
  duration: 1,
  delay: 0.2
});

gsap.from(".hero-description", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.4
});

gsap.from(".hero-buttons", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.6
});

gsap.from(".hero-right", {
  x: 80,
  opacity: 0,
  duration: 1.2,
  delay: 0.3
});

/* =========================
   SECTION ANIMATIONS
========================= */
gsap.utils.toArray(".section-header").forEach((header) => {
  gsap.from(header, {
    scrollTrigger: {
      trigger: header,
      start: "top 85%"
    },
    y: 40,
    opacity: 0,
    duration: 1
  });
});

/* =========================
   CARD ANIMATIONS
========================= */
gsap.utils.toArray(
  ".skill-card, .project-card, .about-card, .timeline-card"
).forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 90%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  });
});

/* =========================
   FLOATING UI ANIMATION
========================= */
gsap.to(".floating-ui", {
  y: -12,
  duration: 2,
  repeat: -1,
  yoyo: true,
  stagger: 0.2,
  ease: "power1.inOut"
});

/* =========================
   VANILLA TILT
========================= */
VanillaTilt.init(document.querySelectorAll(".tilt"), {
  max: 6,
  speed: 300,
  glare: false,
  scale: 1.02
});


/* ==========================================================================
   CERTIFICATE IMMERSIVE POPUP WINDOW MODAL LOGIC (VERIFIED)
   ========================================================================== */
const activeOverlayContainer = document.getElementById('certModal');
const designImageTarget = document.getElementById('modalImgTarget');
const systemCloseButton = document.getElementById('modalCloseBtn');
const activeCardTriggers = document.querySelectorAll('.cert-clickable-card');

// Open Modal Sequence Action
activeCardTriggers.forEach(cardItem => {
  cardItem.addEventListener('click', (e) => {
    // Stop any conflicting native bubble captures
    e.stopPropagation();

    const certificateSourceUrl = cardItem.getAttribute('data-cert-img');
    
    // Inject image path directly into source container
    if (certificateSourceUrl) {
      designImageTarget.setAttribute('src', certificateSourceUrl);
    }
    
    // Smoothly reveal background wrapper elements onto view space
    activeOverlayContainer.classList.add('is-active');
    
    // Prevent backdrop text layout shifting when modal functions are open
    document.body.style.overflow = 'hidden';
  });
});

// Close Modal Function Routine
const triggerCloseRoutine = () => {
  activeOverlayContainer.classList.remove('is-active');
  document.body.style.overflow = '';
  
  // Clean source file frame string instantly after opacity vanishes
  setTimeout(() => {
    designImageTarget.setAttribute('src', '');
  }, 400);
};

// Bind execution sequences onto close actions
if (systemCloseButton) {
  systemCloseButton.addEventListener('click', (e) => {
    e.stopPropagation();
    triggerCloseRoutine();
  });
}

// Dismiss modal if user clicks outside on the empty overlay curtain
if (activeOverlayContainer) {
  activeOverlayContainer.addEventListener('click', (event) => {
    if (event.target === activeOverlayContainer) {
      triggerCloseRoutine();
    }
  });
}

// Escape key dismissal support for power users
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activeOverlayContainer.classList.contains('is-active')) {
    triggerCloseRoutine();
  }
});

/* =========================
   ACTIVE NAVBAR
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* =========================
   BUTTON HOVER EFFECT
========================= */
const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.04,
      duration: 0.3
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3
    });
  });
});

console.log("Portfolio Loaded Successfully 🚀");