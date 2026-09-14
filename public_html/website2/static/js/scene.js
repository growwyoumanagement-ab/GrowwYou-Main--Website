/**
 * scene.js — Three.js Core Engine
 * Manages the WebGL renderer, camera, post-processing, and ambient starfield.
 */

class SceneEngine {
    constructor() {
        this.canvas = document.getElementById('webgl-canvas');
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.clock = new THREE.Clock();
        this.mouse = { x: 0, y: 0, nx: 0, ny: 0 };
        this.quality = 'high'; // 'high', 'medium', 'low'
        this.isReady = false;
        this.animationCallbacks = [];
        this.resizeCallbacks = [];
    }

    init() {
        this.detectQuality();
        this.createScene();
        this.createCamera();
        this.createRenderer();
        this.createStarfield();
        this.createAmbientLights();
        this.bindEvents();
        this.isReady = true;
    }

    detectQuality() {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL).toLowerCase();
                if (renderer.includes('intel') || renderer.includes('mali') || renderer.includes('adreno')) {
                    this.quality = 'low';
                } else if (renderer.includes('radeon') || renderer.includes('geforce')) {
                    this.quality = 'high';
                } else {
                    this.quality = 'medium';
                }
            }
        }
        // Mobile check
        if (window.innerWidth < 768) {
            this.quality = 'low';
        }
    }

    createScene() {
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x050508, 0.0008);
    }

    createCamera() {
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            2000
        );
        this.camera.position.set(0, 0, 100);
    }

    createRenderer() {
        const pixelRatio = this.quality === 'high' ? Math.min(window.devicePixelRatio, 2) :
                           this.quality === 'medium' ? Math.min(window.devicePixelRatio, 1.5) : 1;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: this.quality !== 'low',
            alpha: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(pixelRatio);
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;
    }

    createStarfield() {
        const count = this.quality === 'high' ? 3000 :
                     this.quality === 'medium' ? 1500 : 800;

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            // Distribute in a large sphere
            const radius = 200 + Math.random() * 800;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);

            // Subtle color variation — mostly white with hints of cyan/violet
            const colorChoice = Math.random();
            if (colorChoice < 0.1) {
                colors[i3] = 0.0; colors[i3 + 1] = 0.9; colors[i3 + 2] = 1.0; // cyan
            } else if (colorChoice < 0.2) {
                colors[i3] = 0.55; colors[i3 + 1] = 0.36; colors[i3 + 2] = 0.96; // violet
            } else {
                const w = 0.7 + Math.random() * 0.3;
                colors[i3] = w; colors[i3 + 1] = w; colors[i3 + 2] = w;
            }

            sizes[i] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 1.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.starfield = new THREE.Points(geometry, material);
        this.scene.add(this.starfield);
    }

    createAmbientLights() {
        // Very dim ambient
        const ambient = new THREE.AmbientLight(0x111122, 0.3);
        this.scene.add(ambient);

        // Point lights that will be animated per chapter
        this.lightCyan = new THREE.PointLight(0x00f0ff, 0, 200);
        this.lightCyan.position.set(50, 50, 50);
        this.scene.add(this.lightCyan);

        this.lightViolet = new THREE.PointLight(0x8b5cf6, 0, 200);
        this.lightViolet.position.set(-50, -30, 30);
        this.scene.add(this.lightViolet);

        this.lightGold = new THREE.PointLight(0xfbbf24, 0, 150);
        this.lightGold.position.set(0, 60, -20);
        this.scene.add(this.lightGold);
    }

    onAnimate(callback) {
        this.animationCallbacks.push(callback);
    }

    onResize(callback) {
        this.resizeCallbacks.push(callback);
    }

    bindEvents() {
        window.addEventListener('resize', () => this.handleResize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            this.mouse.nx = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.ny = -(e.clientY / window.innerHeight) * 2 + 1;
        });
    }

    handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);

        this.resizeCallbacks.forEach(cb => cb(width, height));
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const delta = this.clock.getDelta();
        const elapsed = this.clock.getElapsedTime();

        // Slowly rotate starfield
        if (this.starfield) {
            this.starfield.rotation.y += 0.00005;
            this.starfield.rotation.x += 0.00002;
        }

        // Subtle camera sway based on mouse
        if (this.camera) {
            this.camera.position.x += (this.mouse.nx * 2 - this.camera.position.x) * 0.01;
            this.camera.position.y += (this.mouse.ny * 1.5 - this.camera.position.y) * 0.01;
        }

        // Run all animation callbacks
        this.animationCallbacks.forEach(cb => cb(delta, elapsed));

        this.renderer.render(this.scene, this.camera);
    }

    start() {
        this.animate();
    }

    // Chapter-specific light transitions
    setChapterLighting(chapter) {
        const configs = {
            0: { cyan: 0.3, violet: 0.1, gold: 0 },
            1: { cyan: 0.2, violet: 0.5, gold: 0.1 },
            2: { cyan: 0.8, violet: 0.2, gold: 0 },
            3: { cyan: 0.1, violet: 0.4, gold: 0.3 },
            4: { cyan: 0.3, violet: 0.6, gold: 0 },
            5: { cyan: 0.2, violet: 0.1, gold: 0.8 },
            6: { cyan: 0.5, violet: 0.5, gold: 0.3 },
            7: { cyan: 0.2, violet: 0.2, gold: 0.6 },
            8: { cyan: 0.4, violet: 0.4, gold: 0.1 }
        };

        const config = configs[chapter] || configs[0];

        if (typeof gsap !== 'undefined') {
            gsap.to(this.lightCyan, { intensity: config.cyan, duration: 1.5, ease: 'power2.out' });
            gsap.to(this.lightViolet, { intensity: config.violet, duration: 1.5, ease: 'power2.out' });
            gsap.to(this.lightGold, { intensity: config.gold, duration: 1.5, ease: 'power2.out' });
        }
    }
}

// Export
window.SceneEngine = SceneEngine;
