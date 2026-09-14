/**
 * main.js — Application Orchestrator
 * Initializes all engines, manages the loading sequence,
 * and coordinates the frame-by-frame render loop.
 */

(function () {
    'use strict';

    // ── Global References ───────────────────────────────────────────────────
    let sceneEngine;
    let particleSystem;
    let morphingEngine;
    let typographyEngine;
    let storyController;
    let interactionManager;

    // ── Loading Manager ─────────────────────────────────────────────────────
    const LoadingManager = {
        el: document.getElementById('loading-screen'),
        percentage: document.querySelector('.loader-percentage'),
        barFill: document.querySelector('.loader-bar-fill'),
        ringFill: document.querySelector('.loader-ring-fill'),
        progress: 0,
        steps: [
            { label: 'Initializing WebGL...', weight: 20 },
            { label: 'Creating particle systems...', weight: 20 },
            { label: 'Building 3D geometries...', weight: 20 },
            { label: 'Loading typography engine...', weight: 15 },
            { label: 'Setting up interactions...', weight: 15 },
            { label: 'Launching experience...', weight: 10 }
        ],

        setProgress(value) {
            this.progress = Math.min(100, value);

            if (this.percentage) {
                this.percentage.textContent = Math.round(this.progress);
            }
            if (this.barFill) {
                this.barFill.style.width = this.progress + '%';
            }
            if (this.ringFill) {
                // SVG ring: circumference = 2 * PI * 45 ≈ 283
                const offset = 283 - (283 * this.progress / 100);
                this.ringFill.style.strokeDashoffset = offset;
            }
        },

        async stepThrough(stepIndex) {
            const step = this.steps[stepIndex];
            if (!step) return;

            const label = document.querySelector('.loader-label');
            if (label) label.textContent = step.label;

            // Calculate cumulative progress
            let cumulative = 0;
            for (let i = 0; i < stepIndex; i++) {
                cumulative += this.steps[i].weight;
            }

            // Animate progress
            const start = cumulative;
            const end = cumulative + step.weight;
            const duration = 200 + Math.random() * 300;
            const startTime = performance.now();

            return new Promise(resolve => {
                const tick = (now) => {
                    const elapsed = now - startTime;
                    const t = Math.min(1, elapsed / duration);
                    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
                    this.setProgress(start + (end - start) * eased);

                    if (t < 1) {
                        requestAnimationFrame(tick);
                    } else {
                        resolve();
                    }
                };
                requestAnimationFrame(tick);
            });
        },

        hide() {
            if (this.el) {
                this.el.classList.add('hidden');
                // Remove from DOM after transition
                setTimeout(() => {
                    if (this.el && this.el.parentNode) {
                        this.el.style.display = 'none';
                    }
                }, 1000);
            }
        }
    };

    // ── Initialization Sequence ─────────────────────────────────────────────
    async function initialize() {
        try {
            // Step 1: WebGL Scene
            await LoadingManager.stepThrough(0);
            sceneEngine = new SceneEngine();
            sceneEngine.init();

            // Step 2: Particle System
            await LoadingManager.stepThrough(1);
            particleSystem = new ParticleSystem(
                sceneEngine.scene,
                sceneEngine.camera,
                sceneEngine.quality
            );
            particleSystem.init();

            // Step 3: Morphing geometries
            await LoadingManager.stepThrough(2);
            morphingEngine = new MorphingEngine(
                sceneEngine.scene,
                sceneEngine.quality
            );
            morphingEngine.init();

            // Step 4: Typography
            await LoadingManager.stepThrough(3);
            typographyEngine = new TypographyEngine();
            typographyEngine.init();

            // Step 5: Interactions
            await LoadingManager.stepThrough(4);
            interactionManager = new InteractionManager();
            interactionManager.init();

            // Step 6: Story Controller + Final hookup
            await LoadingManager.stepThrough(5);
            storyController = new StoryController();
            storyController.init();

            // Expose globally for inter-module access
            window.storyController = storyController;

            // Wire up chapter transitions
            wireChapterTransitions();

            // Register animation callbacks
            registerAnimationCallbacks();

            // Set initial chapter lighting + particles
            sceneEngine.setChapterLighting(0);
            particleSystem.setFormationForChapter(0);
            morphingEngine.morphToChapter(0);

            // Start render loop
            sceneEngine.start();

            // Hide loading screen, play hero entrance
            LoadingManager.setProgress(100);

            await delay(400);
            LoadingManager.hide();

            await delay(600);
            typographyEngine.playHeroEntrance();

        } catch (error) {
            console.error('Initialization error:', error);
            // Graceful fallback — hide loading screen anyway
            LoadingManager.setProgress(100);
            LoadingManager.hide();
        }
    }

    // ── Wire Chapter Transitions ────────────────────────────────────────────
    function wireChapterTransitions() {
        storyController.onChapterChange((chapter, prevChapter) => {
            // Update 3D scene lighting
            sceneEngine.setChapterLighting(chapter);

            // Morph particles to new formation
            particleSystem.setFormationForChapter(chapter);

            // Morph the central geometry
            morphingEngine.morphToChapter(chapter);

            // Ambient background color shift (subtle)
            updateBodyAmbient(chapter);
        });
    }

    // ── Register Frame Animation Callbacks ──────────────────────────────────
    function registerAnimationCallbacks() {
        // Particle updates
        sceneEngine.onAnimate((delta, elapsed) => {
            particleSystem.update(delta, elapsed);
        });

        // Morphing mesh updates
        sceneEngine.onAnimate((delta, elapsed) => {
            morphingEngine.update(delta, elapsed);
        });

        // Parallax camera reaction to scroll progress
        sceneEngine.onAnimate((delta, elapsed) => {
            if (storyController) {
                const progress = storyController.scrollProgress;
                // Move camera slightly along Z based on scroll
                const targetZ = 100 - progress * 60;
                sceneEngine.camera.position.z +=
                    (targetZ - sceneEngine.camera.position.z) * 0.02;

                // Very subtle rotation based on scroll
                sceneEngine.camera.rotation.z =
                    Math.sin(progress * Math.PI * 2) * 0.01;
            }
        });
    }

    // ── Ambient Body Color ──────────────────────────────────────────────────
    function updateBodyAmbient(chapter) {
        const colors = {
            0: '#050508',
            1: '#05050f',
            2: '#050a0b',
            3: '#08050a',
            4: '#06050c',
            5: '#0a0805',
            6: '#050808',
            7: '#080a0a',
            8: '#040409'
        };

        const color = colors[chapter] || colors[0];
        document.body.style.transition = 'background-color 2s ease';
        document.body.style.backgroundColor = color;
    }

    // ── Utility ─────────────────────────────────────────────────────────────
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // ── Boot ────────────────────────────────────────────────────────────────
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }

})();
