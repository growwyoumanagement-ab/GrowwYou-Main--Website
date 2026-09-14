/**
 * interactions.js — User Interaction Handler
 * Custom cursor, hover effects, contact form, project modal, and micro-interactions.
 */

class InteractionManager {
    constructor() {
        this.cursor = null;
        this.cursorDot = null;
        this.cursorRing = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.cursorX = 0;
        this.cursorY = 0;
        this.dotX = 0;
        this.dotY = 0;
        this.isTouch = false;
        this.modal = null;
        this.projectData = null;
    }

    init() {
        this.isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.loadProjectData();
        this.setupCursor();
        this.setupHoverEffects();
        this.setupContactForm();
        this.setupModal();
        this.setupKeyboardNav();
    }

    // ── Custom Cursor ───────────────────────────────────────────────────────
    setupCursor() {
        if (this.isTouch) return;

        this.cursor = document.getElementById('custom-cursor');
        this.cursorDot = document.querySelector('.cursor-dot');
        this.cursorRing = document.querySelector('.cursor-ring');

        if (!this.cursor) return;

        window.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        window.addEventListener('mousedown', () => {
            this.cursor.classList.add('clicking');
        });

        window.addEventListener('mouseup', () => {
            this.cursor.classList.remove('clicking');
        });

        this.animateCursor();
    }

    animateCursor() {
        if (!this.cursor) return;

        // Dot follows mouse directly
        this.dotX += (this.mouseX - this.dotX) * 0.5;
        this.dotY += (this.mouseY - this.dotY) * 0.5;

        // Ring follows with delay
        this.cursorX += (this.mouseX - this.cursorX) * 0.12;
        this.cursorY += (this.mouseY - this.cursorY) * 0.12;

        if (this.cursorDot) {
            this.cursorDot.style.transform = `translate(${this.dotX - 4}px, ${this.dotY - 4}px)`;
        }
        if (this.cursorRing) {
            this.cursorRing.style.transform = `translate(${this.cursorX - 20}px, ${this.cursorY - 20}px)`;
        }

        requestAnimationFrame(() => this.animateCursor());
    }

    // ── Hover Effects ───────────────────────────────────────────────────────
    setupHoverEffects() {
        if (this.isTouch) return;

        // All interactive elements
        const hoverables = document.querySelectorAll(
            'a, button, .project-card, .phone-mockup, .gallery-frame, ' +
            '.milestone, .stat-card, .case-card, .social-satellite, ' +
            '.service-node, .submit-btn, .nav-dot'
        );

        hoverables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor?.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor?.classList.remove('hovering');
            });
        });

        // Tilt effect on project cards
        document.querySelectorAll('.project-card, .gallery-frame').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                card.style.transform = `
                    perspective(800px)
                    rotateY(${x * 8}deg)
                    rotateX(${-y * 8}deg)
                    translateY(-8px)
                    scale(1.02)
                `;

                // Move glow position
                const glow = card.querySelector('.card-glow');
                if (glow) {
                    glow.style.background = `
                        radial-gradient(
                            circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%,
                            rgba(0, 240, 255, 0.15),
                            rgba(139, 92, 246, 0.08),
                            transparent 70%
                        )
                    `;
                    glow.style.opacity = '1';
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                const glow = card.querySelector('.card-glow');
                if (glow) {
                    glow.style.opacity = '0';
                }
            });
        });

        // Phone mockup 3D tilt
        document.querySelectorAll('.phone-frame').forEach(phone => {
            const parent = phone.closest('.phone-mockup');
            if (!parent) return;

            parent.addEventListener('mousemove', (e) => {
                const rect = parent.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;

                phone.style.transform = `
                    perspective(600px)
                    rotateY(${x * 15}deg)
                    rotateX(${-y * 10}deg)
                    scale(1.05)
                `;
            });

            parent.addEventListener('mouseleave', () => {
                phone.style.transform = '';
            });
        });
    }

    // ── Load Project Data ───────────────────────────────────────────────────
    async loadProjectData() {
        try {
            const response = await fetch('/api/projects');
            this.projectData = await response.json();
        } catch (e) {
            console.warn('Could not load project data for modal:', e);
            this.projectData = null;
        }
    }

    // ── Project Modal ───────────────────────────────────────────────────────
    setupModal() {
        this.modal = document.getElementById('project-modal');
        if (!this.modal) return;

        const closeBtn = this.modal.querySelector('.modal-close');
        const backdrop = this.modal.querySelector('.modal-backdrop');

        // Open modal on card click
        document.querySelectorAll('[data-project-id]').forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't open modal if clicking a link
                if (e.target.closest('a')) return;
                const projectId = card.dataset.projectId;
                this.openModal(projectId);
            });
        });

        // Close modal
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }
        if (backdrop) {
            backdrop.addEventListener('click', () => this.closeModal());
        }
    }

    openModal(projectId) {
        if (!this.modal || !this.projectData) return;

        // Find the project in our data
        let project = null;
        const categories = ['saas', 'mobile', 'websites', 'portfolios'];
        for (const cat of categories) {
            if (Array.isArray(this.projectData[cat])) {
                project = this.projectData[cat].find(p => p.id === projectId);
                if (project) break;
            }
        }

        if (!project) return;

        // Populate modal
        const title = this.modal.querySelector('.modal-title');
        const desc = this.modal.querySelector('.modal-description');
        const tech = this.modal.querySelector('.modal-tech');
        const link = this.modal.querySelector('.modal-link');

        if (title) title.textContent = project.title;
        if (desc) desc.textContent = project.description;
        if (link) link.href = project.url;

        // Build Image Carousel
        const visual = this.modal.querySelector('.modal-visual');
        if (visual) {
            visual.innerHTML = ''; // clear previous
            const images = project.images || (project.image ? [project.image] : []);
            
            if (images.length > 0) {
                const carousel = document.createElement('div');
                carousel.className = 'modal-carousel';
                
                const dotsContainer = document.createElement('div');
                dotsContainer.className = 'modal-dots';
                
                images.forEach((imgSrc, idx) => {
                    // Slide
                    const slide = document.createElement('div');
                    slide.className = 'modal-slide';
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.loading = 'lazy';
                    slide.appendChild(img);
                    carousel.appendChild(slide);
                    
                    // Dot
                    if (images.length > 1) {
                        const dot = document.createElement('div');
                        dot.className = `modal-dot ${idx === 0 ? 'active' : ''}`;
                        dotsContainer.appendChild(dot);
                    }
                });
                
                visual.appendChild(carousel);
                if (images.length > 1) {
                    visual.appendChild(dotsContainer);
                    
                    // Arrows
                    const prevBtn = document.createElement('button');
                    prevBtn.className = 'modal-arrow prev';
                    prevBtn.innerHTML = '❮';
                    prevBtn.onclick = () => carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
                    
                    const nextBtn = document.createElement('button');
                    nextBtn.className = 'modal-arrow next';
                    nextBtn.innerHTML = '❯';
                    nextBtn.onclick = () => carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
                    
                    visual.appendChild(prevBtn);
                    visual.appendChild(nextBtn);
                    
                    // Sync dots on scroll
                    carousel.addEventListener('scroll', () => {
                        const scrollLeft = carousel.scrollLeft;
                        const width = carousel.offsetWidth;
                        const activeIndex = Math.round(scrollLeft / width);
                        
                        const dots = dotsContainer.querySelectorAll('.modal-dot');
                        dots.forEach((dot, idx) => {
                            dot.classList.toggle('active', idx === activeIndex);
                        });
                    }, { passive: true });
                }
            }
        }

        if (tech) {
            tech.innerHTML = '';
            (project.tech_stack || []).forEach(t => {
                const span = document.createElement('span');
                span.className = 'tech-tag';
                span.textContent = t;
                tech.appendChild(span);
            });
        }

        // Show modal
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Pause Lenis scroll if available
        if (window.storyController) {
            window.storyController.pauseScroll();
        }
    }

    closeModal() {
        if (!this.modal) return;

        this.modal.classList.remove('active');
        document.body.style.overflow = '';

        if (window.storyController) {
            window.storyController.resumeScroll();
        }
    }

    // ── Contact Form ────────────────────────────────────────────────────────
    setupContactForm() {
        const form = document.getElementById('contact-form');
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('.submit-btn');
            const statusEl = document.getElementById('form-status');
            const btnText = submitBtn?.querySelector('.btn-text');

            // Get form data
            const formData = {
                name: form.querySelector('#contact-name')?.value?.trim(),
                email: form.querySelector('#contact-email')?.value?.trim(),
                subject: form.querySelector('#contact-subject')?.value?.trim() || 'No subject',
                message: form.querySelector('#contact-message')?.value?.trim()
            };

            // Basic validation
            if (!formData.name || !formData.email || !formData.message) {
                this.showFormStatus(statusEl, 'Please fill in all required fields.', 'error');
                return;
            }

            // Loading state
            if (btnText) btnText.textContent = 'Sending...';
            if (submitBtn) submitBtn.disabled = true;

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    this.showFormStatus(statusEl, result.message, 'success');
                    form.reset();

                    // Celebrate with particles
                    if (typeof gsap !== 'undefined' && submitBtn) {
                        gsap.fromTo(submitBtn, 
                            { scale: 1 },
                            { scale: 1.1, duration: 0.2, yoyo: true, repeat: 1 }
                        );
                    }
                } else {
                    this.showFormStatus(statusEl, result.error || 'Something went wrong.', 'error');
                }
            } catch (err) {
                this.showFormStatus(statusEl, 'Network error. Please try again.', 'error');
            } finally {
                if (btnText) btnText.textContent = 'Send Message';
                if (submitBtn) submitBtn.disabled = false;
            }
        });
    }

    showFormStatus(el, message, type) {
        if (!el) return;
        el.textContent = message;
        el.className = 'form-status ' + type;

        // Auto-hide after 5 seconds
        setTimeout(() => {
            el.className = 'form-status';
            el.textContent = '';
        }, 5000);
    }

    // ── Keyboard Navigation ─────────────────────────────────────────────────
    setupKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            // Escape closes modal
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
}

window.InteractionManager = InteractionManager;
