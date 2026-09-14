/**
 * typography.js — Kinetic Typography Engine
 * Handles text reveal animations, glitch effects, and kinetic text transitions.
 */

class TypographyEngine {
    constructor() {
        this.observers = [];
        this.glitchInterval = null;
        this.countersAnimated = new Set();
    }

    init() {
        this.setupTextReveals();
        this.setupGlitchEffects();
        this.setupCounterAnimations();
    }

    // ── Text Reveal Animations ──────────────────────────────────────────────
    setupTextReveals() {
        // Use GSAP ScrollTrigger for text animations
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        // Chapter numbers
        gsap.utils.toArray('.chapter-number').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, x: -20 },
                {
                    opacity: 0.8,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Chapter titles with a draw-in effect
        gsap.utils.toArray('.chapter-title').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 40, skewY: 3 },
                {
                    opacity: 1,
                    y: 0,
                    skewY: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Subtitles + intros
        gsap.utils.toArray('.chapter-subtitle, .chapter-intro').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Story blocks (fade-up)
        gsap.utils.toArray('[data-animate="fade-up"]').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: i * 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Scale-in elements (milestones)
        gsap.utils.toArray('[data-animate="scale-in"]').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, scale: 0.6, y: 20 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Holographic card reveals
        gsap.utils.toArray('[data-animate="hologram-in"]').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, y: 60, rotateX: 15 },
                {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 1,
                    delay: i * 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Phone mockup float-in
        gsap.utils.toArray('[data-animate="float-in"]').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, y: 80, rotateY: -10 },
                {
                    opacity: 1,
                    y: 0,
                    rotateY: 0,
                    duration: 1.2,
                    delay: i * 0.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Gallery portal-in
        gsap.utils.toArray('[data-animate="portal-in"]').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, y: 60, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1,
                    delay: i * 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Orbit-in for service nodes
        gsap.utils.toArray('[data-animate="orbit-in"]').forEach(el => {
            const i = parseInt(el.style.getPropertyValue('--i') || '0');
            const total = parseInt(el.style.getPropertyValue('--total') || '6');
            const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
            const radius = 140;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            gsap.fromTo(el,
                { opacity: 0, scale: 0 },
                {
                    opacity: 1,
                    scale: 1,
                    x: x,
                    y: y,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: 'back.out(2)',
                    scrollTrigger: {
                        trigger: el.closest('.services-orbit'),
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Counter cards
        gsap.utils.toArray('[data-animate="counter-up"]').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse',
                        onEnter: () => this.animateCounter(el)
                    }
                }
            );
        });

        // Slide-in (case studies)
        gsap.utils.toArray('[data-animate="slide-in"]').forEach((el, i) => {
            gsap.fromTo(el,
                { opacity: 0, x: -40 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    delay: i * 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Section titles
        gsap.utils.toArray('.section-title, .gallery-subsection-title').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Contact form reveal
        gsap.utils.toArray('[data-animate="form-reveal"]').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.3,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Connect text
        gsap.utils.toArray('.connect-text').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Finale text
        gsap.utils.toArray('.text-draw-large').forEach(el => {
            gsap.fromTo(el,
                { opacity: 0, scale: 0.9 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 90%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });
    }

    // ── Glitch Effect ───────────────────────────────────────────────────────
    setupGlitchEffects() {
        const glitchText = document.querySelector('.glitch-text');
        if (!glitchText) return;

        // Periodic glitch
        this.triggerGlitch(glitchText);
        this.glitchInterval = setInterval(() => {
            this.triggerGlitch(glitchText);
        }, 5000 + Math.random() * 3000);
    }

    triggerGlitch(element) {
        element.classList.add('glitching');
        setTimeout(() => {
            element.classList.remove('glitching');
        }, 300);
    }

    // ── Counter Animation ───────────────────────────────────────────────────
    setupCounterAnimations() {
        // Handled via ScrollTrigger callbacks
    }

    animateCounter(card) {
        const valueEl = card.querySelector('.stat-value');
        if (!valueEl || this.countersAnimated.has(valueEl)) return;

        this.countersAnimated.add(valueEl);

        const target = parseFloat(valueEl.dataset.target) || 0;
        const prefix = valueEl.dataset.prefix || '';
        const suffix = valueEl.dataset.suffix || '';

        const obj = { val: 0 };
        gsap.to(obj, {
            val: target,
            duration: 2,
            ease: 'power2.out',
            onUpdate: () => {
                const formatted = target >= 10 ? Math.round(obj.val) : obj.val.toFixed(0);
                valueEl.textContent = prefix + formatted + suffix;
            }
        });
    }

    // ── Hero Entry Animation ────────────────────────────────────────────────
    playHeroEntrance() {
        const tl = gsap.timeline({ delay: 0.3 });

        // Void title
        tl.to('.void-title', {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
        });

        // Subtitle line
        tl.add(() => {
            document.querySelector('.void-subtitle-line')?.classList.add('expanded');
        }, '-=0.5');

        // Subtitle text
        tl.to('.void-subtitle', {
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.3');

        // Tagline
        tl.to('.void-tagline', {
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.5');

        // Show scroll indicator
        tl.add(() => {
            document.getElementById('scroll-indicator')?.classList.add('visible');
        }, '-=0.3');

        // Show chapter nav
        tl.add(() => {
            document.getElementById('chapter-nav')?.classList.add('visible');
        }, '-=0.3');

        return tl;
    }

    destroy() {
        if (this.glitchInterval) {
            clearInterval(this.glitchInterval);
        }
    }
}

window.TypographyEngine = TypographyEngine;
