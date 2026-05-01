/* ============================================
   PORTFOLIO SCROLLYTELLING — DELFINA
   Stack: Vanilla JS + GSAP + ScrollTrigger
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Wait for GSAP to load ────────────────────
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded yet');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // ─────────────────────────────────────────────
  // 1. CUSTOM CURSOR
  // ─────────────────────────────────────────────
  const cursor     = document.getElementById('cursor');
  const cursorRing = document.getElementById('cursor-ring');

  const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

  if (isTouchDevice) {
    cursor.style.display = 'none';
    cursorRing.style.display = 'none';
  } else {
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;

    window.addEventListener('mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(cursor, { x: mouseX, y: mouseY });
    });

    // Smooth ring follow
    (function animateRing() {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      gsap.set(cursorRing, { x: ringX, y: ringY });
      requestAnimationFrame(animateRing);
    })();
  }

  // ─────────────────────────────────────────────
  // 2. HERO ENTRANCE ANIMATION
  // ─────────────────────────────────────────────
  const heroTl = gsap.timeline({ delay: 0.2 });

  heroTl
    .to('#hero-eyebrow', {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      from: { opacity: 0, y: 20 }
    })
    .to('#hero-name', {
      opacity: 1, duration: 1, ease: 'power4.out'
    }, '-=0.4')
    .to('#hero-tagline', {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      from: { opacity: 0, y: 20 }
    }, '-=0.5')
    .to('#scroll-hint', {
      opacity: 1, duration: 0.6, ease: 'power2.out'
    }, '-=0.2');

  // Name split animation
  const isMobile = window.innerWidth <= 900;
  gsap.fromTo('#hero-name',
    { skewX: isMobile ? 0 : -4, opacity: 0, scale: isMobile ? 0.92 : 1 },
    { skewX: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power4.out', delay: 0.4 }
  );

  // ─────────────────────────────────────────────
  // 3. HORIZONTAL SCROLL — FEATURED PROJECTS
  // ─────────────────────────────────────────────
  const track   = document.getElementById('featured-track');
  const wrapper = document.getElementById('featured-track-wrapper');
  const section = document.getElementById('featured');

  function setupHorizontalScroll() {
    if (!track || !section) return;
    if (window.innerWidth <= 900) return; // skip on mobile

    const scrollDist = track.scrollWidth - window.innerWidth;
    
    // Timeline para controlar el movimiento + aire al inicio y al final
    const horizontalTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1.2,
        start: 'top top',
        end: () => '+=' + (scrollDist + 800), // Total de aire (inicio + fin)
        invalidateOnRefresh: true,
      }
    });

    // 1. Quédate quieto al inicio (para leer "Proyectos reales")
    horizontalTl.to({}, { duration: 0.4 });

    // 2. Movimiento horizontal + Rotación hacia ADELANTE
    horizontalTl.to(track, {
      x: -scrollDist,
      ease: 'none'
    }, 'move');

    horizontalTl.to('.logo-star', {
      rotation: 360,
      ease: 'none'
    }, 'move');

    // 3. Quédate quieto al final (para leer "Labs & Experimentos")
    horizontalTl.to({}, { duration: 0.3 });
  }

  setupHorizontalScroll();

  // ─────────────────────────────────────────────
  // 3b. MOBILE VERTICAL REVEALS — Featured
  // ─────────────────────────────────────────────
  function setupMobileReveal() {
    if (window.innerWidth > 900) return;

    const items = document.querySelectorAll(
      '.featured__intro-slide, .project-slide'
    );

    items.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          }
        }
      );
    });
  }

  setupMobileReveal();

  // Rotación — desktop: -180° en todo el scroll vertical
  //           mobile: 360° continuo atado a la sección featured
  if (window.innerWidth > 900) {
    gsap.to('.logo-star', {
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1
      },
      rotation: -180,
      ease: 'none'
    });
  } else {
    gsap.to('.logo-star', {
      scrollTrigger: {
        trigger: '#featured',
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1.5,
      },
      rotation: 360,
      ease: 'none'
    });
  }

  window.addEventListener('resize', () => {
    ScrollTrigger.getAll().forEach(t => t.kill());
    gsap.set(track, { clearProps: 'x' });
    gsap.set('.logo-star', { clearProps: 'rotation' });
    setupHorizontalScroll();
    setupMobileReveal();
    initRevealAnimations();
  });

  // ─────────────────────────────────────────────
  // 4. SCROLL REVEAL — EXPERIMENTS & CONTACT
  // ─────────────────────────────────────────────
  function initRevealAnimations() {
    // Experiments header
    gsap.fromTo('.experiments__header',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.experiments__header',
          start: 'top 85%',
        }
      }
    );

    // Experiment cards — trigger individual por card
    document.querySelectorAll('.exp-card').forEach((card) => {
      gsap.fromTo(card,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
          }
        }
      );
    });

    // Sobre mí — título + rows
    gsap.fromTo('.sobre-mi__title',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: '.sobre-mi', start: 'top 80%' }
      }
    );

    document.querySelectorAll('.sobre-mi__row').forEach((row) => {
      gsap.fromTo(row,
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 90%' }
        }
      );
    });

    // Contact title
    gsap.fromTo('.contact__title',
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: {
          trigger: '.contact',
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo('.contact__sub, .contact__btn',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.contact__content',
          start: 'top 75%',
        }
      }
    );
  }

  initRevealAnimations();

  // ─────────────────────────────────────────────
  // 5. MARQUEE PAUSE ON HOVER
  // ─────────────────────────────────────────────
  const marqueeTrack = document.querySelector('.marquee__track');
  if (marqueeTrack) {
    marqueeTrack.addEventListener('mouseenter', () => {
      marqueeTrack.style.animationPlayState = 'paused';
    });
    marqueeTrack.addEventListener('mouseleave', () => {
      marqueeTrack.style.animationPlayState = 'running';
    });
  }

  // ─────────────────────────────────────────────
  // 6. HERO PARALLAX on scroll
  // ─────────────────────────────────────────────
  gsap.to('.blob--violet', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  gsap.to('.blob--coral', {
    yPercent: -20,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });

  gsap.to('.hero__content', {
    yPercent: 25,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: '60% top',
      scrub: true,
    }
  });

  // ─────────────────────────────────────────────
  // 7. NAV scroll class
  // ─────────────────────────────────────────────
  const nav = document.querySelector('.nav');
  ScrollTrigger.create({
    start: 80,
    onEnter:     () => nav.classList.add('scrolled'),
    onLeaveBack: () => nav.classList.remove('scrolled'),
  });

  // ─────────────────────────────────────────────
  // 8. HASH ANCHOR HANDLING
  // ─────────────────────────────────────────────
  if (window.location.hash) {
    const hash = window.location.hash;
    const target = document.querySelector(hash);
    
    if (target) {
      setTimeout(() => {
        ScrollTrigger.refresh();
        const yOffset = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }, 700);
    }
  }

});
