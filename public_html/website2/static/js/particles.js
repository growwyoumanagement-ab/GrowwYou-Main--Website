/**
 * particles.js — GPU-Accelerated Particle System
 * Creates dynamic particle formations that respond to scroll and cursor.
 */

class ParticleSystem {
    constructor(scene, camera, quality) {
        this.scene = scene;
        this.camera = camera;
        this.quality = quality || 'high';
        this.particles = null;
        this.particleCount = this.quality === 'high' ? 2000 :
                             this.quality === 'medium' ? 1000 : 500;
        this.mouse = { x: 0, y: 0 };
        this.currentFormation = 'random';
        this.morphProgress = 0;
        this.targetPositions = null;
        this.originalPositions = null;
        this.velocities = null;
    }

    init() {
        this.createParticles();
        this.bindMouse();
    }

    createParticles() {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(this.particleCount * 3);
        const colors = new Float32Array(this.particleCount * 3);
        const sizes = new Float32Array(this.particleCount);
        this.velocities = new Float32Array(this.particleCount * 3);
        this.originalPositions = new Float32Array(this.particleCount * 3);
        this.targetPositions = new Float32Array(this.particleCount * 3);

        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;

            // Start in a scattered formation
            positions[i3] = (Math.random() - 0.5) * 200;
            positions[i3 + 1] = (Math.random() - 0.5) * 200;
            positions[i3 + 2] = (Math.random() - 0.5) * 100;

            this.originalPositions[i3] = positions[i3];
            this.originalPositions[i3 + 1] = positions[i3 + 1];
            this.originalPositions[i3 + 2] = positions[i3 + 2];

            this.targetPositions[i3] = positions[i3];
            this.targetPositions[i3 + 1] = positions[i3 + 1];
            this.targetPositions[i3 + 2] = positions[i3 + 2];

            this.velocities[i3] = (Math.random() - 0.5) * 0.02;
            this.velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
            this.velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

            // Cyan to violet gradient
            const t = Math.random();
            colors[i3] = t * 0.55;       // R
            colors[i3 + 1] = 0.36 + t * 0.6;  // G
            colors[i3 + 2] = 0.96 + t * 0.04;  // B

            sizes[i] = Math.random() * 3 + 1;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 2,
            vertexColors: true,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        this.particles = new THREE.Points(geometry, material);
        this.scene.add(this.particles);
    }

    bindMouse() {
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        });
    }

    // Formation: Sphere
    formSphere(radius = 40) {
        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = radius * (0.8 + Math.random() * 0.4);

            this.targetPositions[i3] = r * Math.sin(phi) * Math.cos(theta);
            this.targetPositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            this.targetPositions[i3 + 2] = r * Math.cos(phi);
        }
        this.currentFormation = 'sphere';
    }

    // Formation: Helix/DNA
    formHelix(radius = 20, height = 80) {
        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;
            const t = i / this.particleCount;
            const angle = t * Math.PI * 8;
            const strand = i % 2 === 0 ? 1 : -1;

            this.targetPositions[i3] = Math.cos(angle) * radius * strand;
            this.targetPositions[i3 + 1] = (t - 0.5) * height;
            this.targetPositions[i3 + 2] = Math.sin(angle) * radius * strand;
        }
        this.currentFormation = 'helix';
    }

    // Formation: Grid/Matrix
    formGrid(size = 80) {
        const side = Math.ceil(Math.pow(this.particleCount, 1/3));
        const spacing = size / side;

        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;
            const x = (i % side) * spacing - size / 2;
            const y = (Math.floor(i / side) % side) * spacing - size / 2;
            const z = Math.floor(i / (side * side)) * spacing - size / 2;

            this.targetPositions[i3] = x;
            this.targetPositions[i3 + 1] = y;
            this.targetPositions[i3 + 2] = z;
        }
        this.currentFormation = 'grid';
    }

    // Formation: Wave
    formWave(width = 100, depth = 50) {
        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;
            const x = (Math.random() - 0.5) * width;
            const z = (Math.random() - 0.5) * depth;
            const y = Math.sin(x * 0.1) * Math.cos(z * 0.1) * 15;

            this.targetPositions[i3] = x;
            this.targetPositions[i3 + 1] = y;
            this.targetPositions[i3 + 2] = z;
        }
        this.currentFormation = 'wave';
    }

    // Formation: Scatter (explosion)
    formScatter(range = 150) {
        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;
            this.targetPositions[i3] = (Math.random() - 0.5) * range;
            this.targetPositions[i3 + 1] = (Math.random() - 0.5) * range;
            this.targetPositions[i3 + 2] = (Math.random() - 0.5) * range * 0.5;
        }
        this.currentFormation = 'scatter';
    }

    // Formation: Vortex / Tornado
    formVortex(radius = 30, height = 80) {
        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;
            const t = i / this.particleCount;
            const angle = t * Math.PI * 12;
            const r = radius * (1 - t * 0.7) + Math.random() * 5;
            const y = (t - 0.5) * height;

            this.targetPositions[i3] = Math.cos(angle) * r;
            this.targetPositions[i3 + 1] = y;
            this.targetPositions[i3 + 2] = Math.sin(angle) * r;
        }
        this.currentFormation = 'vortex';
    }

    // Set colors based on chapter
    setChapterColors(chapter) {
        if (!this.particles) return;

        const colors = this.particles.geometry.attributes.color;
        const colorSets = {
            0: { r: [0, 0.2], g: [0.8, 1.0], b: [0.9, 1.0] },      // Cyan
            1: { r: [0.3, 0.6], g: [0.1, 0.4], b: [0.8, 1.0] },      // Violet/blue
            2: { r: [0, 0.1], g: [0.8, 1.0], b: [0.9, 1.0] },        // Bright cyan
            3: { r: [0.8, 1.0], g: [0.2, 0.5], b: [0.5, 0.8] },      // Magenta
            4: { r: [0.4, 0.7], g: [0.2, 0.5], b: [0.8, 1.0] },      // Purple
            5: { r: [0.9, 1.0], g: [0.7, 0.9], b: [0.1, 0.3] },      // Gold
            6: { r: [0, 0.5], g: [0.5, 1.0], b: [0.8, 1.0] },        // Cyan-violet mix
            7: { r: [0.8, 1.0], g: [0.8, 1.0], b: [0.1, 0.3] },      // Warm gold/yellow
            8: { r: [0.1, 0.3], g: [0.2, 0.6], b: [0.8, 1.0] }         // Deep blue/Indigo
        };

        const set = colorSets[chapter] || colorSets[0];

        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;
            colors.array[i3] = set.r[0] + Math.random() * (set.r[1] - set.r[0]);
            colors.array[i3 + 1] = set.g[0] + Math.random() * (set.g[1] - set.g[0]);
            colors.array[i3 + 2] = set.b[0] + Math.random() * (set.b[1] - set.b[0]);
        }
        colors.needsUpdate = true;
    }

    update(delta, elapsed) {
        if (!this.particles) return;

        const positions = this.particles.geometry.attributes.position;
        const pos = positions.array;
        const lerp = 0.02; // Smoothing factor

        for (let i = 0; i < this.particleCount; i++) {
            const i3 = i * 3;

            // Lerp toward target
            pos[i3] += (this.targetPositions[i3] - pos[i3]) * lerp;
            pos[i3 + 1] += (this.targetPositions[i3 + 1] - pos[i3 + 1]) * lerp;
            pos[i3 + 2] += (this.targetPositions[i3 + 2] - pos[i3 + 2]) * lerp;

            // Add subtle organic movement
            pos[i3] += Math.sin(elapsed + i * 0.01) * 0.02;
            pos[i3 + 1] += Math.cos(elapsed * 0.8 + i * 0.015) * 0.02;
            pos[i3 + 2] += Math.sin(elapsed * 0.5 + i * 0.02) * 0.01;

            // Mouse attraction (subtle)
            const dx = this.mouse.x * 50 - pos[i3];
            const dy = this.mouse.y * 50 - pos[i3 + 1];
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 60) {
                const force = (60 - dist) / 60 * 0.005;
                pos[i3] += dx * force;
                pos[i3 + 1] += dy * force;
            }
        }

        positions.needsUpdate = true;

        // Slowly rotate the whole particle system
        this.particles.rotation.y += 0.0003;
    }

    setFormationForChapter(chapter) {
        switch(chapter) {
            case 0: this.formScatter(200); break;
            case 1: this.formSphere(50); break;
            case 2: this.formGrid(80); break;
            case 3: this.formHelix(25, 80); break;
            case 4: this.formVortex(35, 80); break;
            case 5: this.formWave(120, 60); break;
            case 6: this.formGrid(60); break;  // The Collective
            case 7: this.formWave(80, 40); break; // Testimonials
            case 8: this.formSphere(60); break;   // Connect
        }
        this.setChapterColors(chapter);
    }
}

window.ParticleSystem = ParticleSystem;
