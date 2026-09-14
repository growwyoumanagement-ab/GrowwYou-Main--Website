/**
 * story.js — Story / Chapter Controller
 * Manages scroll-based chapter transitions, scroll-jacking,
 * and coordinates scene changes between all engines.
 */

class StoryController {
    constructor() {
        this.chapters = [];
        this.currentChapter = 0;
        this.previousChapter = -1;
        this.scrollProgress = 0;
        this.lenis = null;
        this.chapterCallbacks = [];
        this.isTransitioning = false;
    }

    init() {
        this.chapters = Array.from(document.querySelectorAll('.chapter'));
        this.setupSmoothScroll();
        this.setupScrollTracking();
        this.setupChapterNav();
    }

    // ── Smooth Scroll (Lenis) ───────────────────────────────────────────────
    setupSmoothScroll() {
        if (typeof Lenis === 'undefined') {
            console.warn('Lenis not loaded, using native scroll');
            return;
        }

        this.lenis = new Lenis({
            duration: 1.4,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 1.5,
            infinite: false
        });

        // Connect Lenis to GSAP's ticker
        if (typeof gsap !== 'undefined') {
            gsap.ticker.add((time) => {
                this.lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        } else {
            // Fallback RAF loop
            const raf = (time) => {
                this.lenis.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
        }

        // Connect Lenis to ScrollTrigger
        if (typeof ScrollTrigger !== 'undefined') {
            this.lenis.on('scroll', ScrollTrigger.update);
        }
    }

    // ── Scroll Tracking & Chapter Detection ─────────────────────────────────
    setupScrollTracking() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        gsap.registerPlugin(ScrollTrigger);

        // Track each chapter's visibility
        this.chapters.forEach((chapter, index) => {
            ScrollTrigger.create({
                trigger: chapter,
                start: 'top center',
                end: 'bottom center',
                onEnter: () => this.setActiveChapter(index),
                onEnterBack: () => this.setActiveChapter(index)
            });
        });

        // Overall scroll progress
        ScrollTrigger.create({
            trigger: '#story-container',
            start: 'top top',
            end: 'bottom bottom',
            onUpdate: (self) => {
                this.scrollProgress = self.progress;
            }
        });

        // Hide scroll indicator after scrolling
        ScrollTrigger.create({
            trigger: '#story-container',
            start: 'top top-=100',
            onEnter: () => {
                document.getElementById('scroll-indicator')?.classList.remove('visible');
            },
            onLeaveBack: () => {
                document.getElementById('scroll-indicator')?.classList.add('visible');
            }
        });
    }

    // ── Chapter Navigation Dots ─────────────────────────────────────────────
    setupChapterNav() {
        const navDots = document.querySelectorAll('.nav-dot');

        navDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const chapterIndex = parseInt(dot.dataset.chapter);
                const targetChapter = this.chapters[chapterIndex];

                if (targetChapter) {
                    if (this.lenis) {
                        this.lenis.scrollTo(targetChapter, {
                            offset: 0,
                            duration: 2,
                            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
                        });
                    } else {
                        targetChapter.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }

    // ── Set Active Chapter ──────────────────────────────────────────────────
    setActiveChapter(index) {
        if (index === this.currentChapter) return;

        this.previousChapter = this.currentChapter;
        this.currentChapter = index;

        // Update nav dots
        document.querySelectorAll('.nav-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        // Fire chapter change callbacks
        this.chapterCallbacks.forEach(cb => cb(index, this.previousChapter));
    }

    // ── Register chapter change callback ────────────────────────────────────
    onChapterChange(callback) {
        this.chapterCallbacks.push(callback);
    }

    // ── Get current scroll progress within a chapter ────────────────────────
    getChapterProgress(chapterIndex) {
        if (!this.chapters[chapterIndex]) return 0;

        const chapter = this.chapters[chapterIndex];
        const rect = chapter.getBoundingClientRect();
        const vh = window.innerHeight;

        // 0 when chapter top is at viewport bottom, 1 when chapter bottom is at viewport top
        const progress = (vh - rect.top) / (vh + rect.height);
        return Math.max(0, Math.min(1, progress));
    }

    // ── Scroll to specific chapter ──────────────────────────────────────────
    scrollToChapter(index) {
        const targetChapter = this.chapters[index];
        if (!targetChapter) return;

        if (this.lenis) {
            this.lenis.scrollTo(targetChapter, { duration: 2 });
        } else {
            targetChapter.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // ── Pause / Resume Scroll ───────────────────────────────────────────────
    pauseScroll() {
        if (this.lenis) this.lenis.stop();
    }

    resumeScroll() {
        if (this.lenis) this.lenis.start();
    }

    destroy() {
        if (this.lenis) {
            this.lenis.destroy();
        }
    }
}

window.StoryController = StoryController;
