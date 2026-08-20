(function () {
  if (typeof anime === 'undefined') return;

  // Animate hero elements on load
  anime({
    targets: '.hero-badge',
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 800,
    easing: 'easeOutExpo'
  });

  anime({
    targets: '.hero h1',
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000,
    delay: 200,
    easing: 'easeOutExpo'
  });

  anime({
    targets: '.hero p',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 800,
    delay: 400,
    easing: 'easeOutExpo'
  });

  // Stagger section cards
  anime({
    targets: '.section-card',
    opacity: [0, 1],
    translateY: [40, 0],
    duration: 800,
    delay: anime.stagger(150, { start: 600 }),
    easing: 'easeOutExpo'
  });

  // Stagger info cards
  anime({
    targets: '.info-card',
    opacity: [0, 1],
    translateY: [30, 0],
    scale: [0.95, 1],
    duration: 600,
    delay: anime.stagger(80, { start: 300 }),
    easing: 'easeOutExpo'
  });

  // Animate controls grid
  anime({
    targets: '.control-group',
    opacity: [0, 1],
    translateX: [-20, 0],
    duration: 500,
    delay: anime.stagger(60, { start: 200 }),
    easing: 'easeOutExpo'
  });

  // Animate playground area
  anime({
    targets: '.playground-area',
    opacity: [0, 1],
    scale: [0.98, 1],
    duration: 800,
    delay: 400,
    easing: 'easeOutExpo'
  });

  // Animate code output
  anime({
    targets: '.code-output',
    opacity: [0, 1],
    translateY: [20, 0],
    duration: 600,
    delay: 500,
    easing: 'easeOutExpo'
  });

  // Animate resource cards (stagger)
  anime({
    targets: '.resource-card',
    opacity: [0, 1],
    translateY: [30, 0],
    scale: [0.95, 1],
    duration: 600,
    delay: anime.stagger(60, { start: 200 }),
    easing: 'easeOutExpo'
  });

  // Animate resource category headers
  anime({
    targets: '.resource-category h3',
    opacity: [0, 1],
    translateX: [-15, 0],
    duration: 500,
    delay: anime.stagger(100, { start: 100 }),
    easing: 'easeOutExpo'
  });

  // Animate navbar links on load
  anime({
    targets: '.navbar-links li',
    opacity: [0, 1],
    translateY: [-10, 0],
    duration: 400,
    delay: anime.stagger(80, { start: 100 }),
    easing: 'easeOutExpo'
  });
})();
