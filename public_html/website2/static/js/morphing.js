/**
 * morphing.js — Geometric Morphing Engine
 * Creates abstract 3D shapes that morph between forms as chapters change.
 */

class MorphingEngine {
    constructor(scene, quality) {
        this.scene = scene;
        this.quality = quality || 'high';
        this.meshes = [];
        this.currentChapter = 0;
        this.morphTargets = {};
        this.group = new THREE.Group();
        this.scene.add(this.group);
    }

    init() {
        this.createChapterGeometries();
    }

    createChapterGeometries() {
        // Create a central morphing object for each chapter
        const detail = this.quality === 'high' ? 3 : this.quality === 'medium' ? 2 : 1;

        // Main morphing mesh — starts as icosahedron
        const geometry = new THREE.IcosahedronGeometry(12, detail);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00f0ff,
            emissive: 0x001a1f,
            specular: 0x444444,
            shininess: 60,
            transparent: true,
            opacity: 0.15,
            wireframe: true,
            side: THREE.DoubleSide
        });

        this.mainMesh = new THREE.Mesh(geometry, material);
        this.mainMesh.position.set(60, 0, -20);
        this.group.add(this.mainMesh);

        // Inner solid version (subtle fill)
        const solidMaterial = new THREE.MeshPhongMaterial({
            color: 0x8b5cf6,
            emissive: 0x0a0020,
            transparent: true,
            opacity: 0.03,
            side: THREE.DoubleSide
        });

        this.innerMesh = new THREE.Mesh(
            new THREE.IcosahedronGeometry(11, detail),
            solidMaterial
        );
        this.innerMesh.position.copy(this.mainMesh.position);
        this.group.add(this.innerMesh);

        // Floating accent rings
        this.rings = [];
        for (let i = 0; i < 3; i++) {
            const ringGeo = new THREE.TorusGeometry(16 + i * 6, 0.15, 8, 64);
            const ringMat = new THREE.MeshBasicMaterial({
                color: i === 0 ? 0x00f0ff : i === 1 ? 0x8b5cf6 : 0xfbbf24,
                transparent: true,
                opacity: 0.08,
                side: THREE.DoubleSide
            });
            const ring = new THREE.Mesh(ringGeo, ringMat);
            ring.position.copy(this.mainMesh.position);
            ring.rotation.x = Math.PI * 0.3 * i;
            ring.rotation.y = Math.PI * 0.2 * i;
            this.group.add(ring);
            this.rings.push(ring);
        }
    }

    // Morph the main mesh geometry based on chapter
    morphToChapter(chapter) {
        this.currentChapter = chapter;
        const detail = this.quality === 'high' ? 3 : this.quality === 'medium' ? 2 : 1;

        let targetGeometry;
        let targetColor;
        let targetEmissive;
        let targetPosition = { x: 60, y: 0, z: -20 };
        let targetScale = 1;

        switch (chapter) {
            case 0: // Void — icosahedron
                targetGeometry = new THREE.IcosahedronGeometry(12, detail);
                targetColor = 0x00f0ff;
                targetEmissive = 0x001a1f;
                targetPosition = { x: 60, y: 0, z: -20 };
                targetScale = 1;
                break;

            case 1: // Genesis — sphere (origin)
                targetGeometry = new THREE.SphereGeometry(14, 32, 32);
                targetColor = 0x8b5cf6;
                targetEmissive = 0x100030;
                targetPosition = { x: 55, y: 10, z: -30 };
                targetScale = 1.2;
                break;

            case 2: // Builder — box/cube (structured)
                targetGeometry = new THREE.BoxGeometry(18, 18, 18, 4, 4, 4);
                targetColor = 0x00f0ff;
                targetEmissive = 0x002030;
                targetPosition = { x: 65, y: -5, z: -25 };
                targetScale = 1;
                break;

            case 3: // Mobile — torus knot (complex)
                targetGeometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
                targetColor = 0xec4899;
                targetEmissive = 0x200015;
                targetPosition = { x: 50, y: 5, z: -15 };
                targetScale = 1.1;
                break;

            case 4: // Web — dodecahedron (interconnected)
                targetGeometry = new THREE.DodecahedronGeometry(14, detail);
                targetColor = 0x8b5cf6;
                targetEmissive = 0x0f0025;
                targetPosition = { x: 60, y: 0, z: -20 };
                targetScale = 1.15;
                break;

            case 5: // Amplifier — octahedron (sharp, powerful)
                targetGeometry = new THREE.OctahedronGeometry(15, detail);
                targetColor = 0xfbbf24;
                targetEmissive = 0x201500;
                targetPosition = { x: 55, y: -10, z: -25 };
                targetScale = 1.3;
                break;

            case 6: // Collective — torus (loop, connection)
                targetGeometry = new THREE.TorusGeometry(14, 5, 16, 50);
                targetColor = 0x00f0ff;
                targetEmissive = 0x001520;
                targetPosition = { x: 50, y: 0, z: -10 };
                targetScale = 1;
                break;
                
            case 7: // Voices of Success — ring geometry
                targetGeometry = new THREE.RingGeometry(1, 15, 32);
                targetColor = 0xfbbf24;
                targetEmissive = 0x100030;
                targetPosition = { x: 60, y: 0, z: -20 };
                targetScale = 1.1;
                break;
                
            case 8: // Connect — knot
                targetGeometry = new THREE.TorusKnotGeometry(12, 1.5, 64, 8);
                targetColor = 0xec4899;
                targetEmissive = 0x200015;
                targetPosition = { x: 55, y: -5, z: -15 };
                targetScale = 1;
                break;

            default:
                return;
        }

        // Animate using GSAP
        if (typeof gsap !== 'undefined') {
            // Morph mesh color
            gsap.to(this.mainMesh.material.color, {
                r: new THREE.Color(targetColor).r,
                g: new THREE.Color(targetColor).g,
                b: new THREE.Color(targetColor).b,
                duration: 1.5,
                ease: 'power2.out'
            });

            gsap.to(this.mainMesh.material.emissive, {
                r: new THREE.Color(targetEmissive).r,
                g: new THREE.Color(targetEmissive).g,
                b: new THREE.Color(targetEmissive).b,
                duration: 1.5,
                ease: 'power2.out'
            });

            // Animate position
            gsap.to(this.mainMesh.position, {
                x: targetPosition.x,
                y: targetPosition.y,
                z: targetPosition.z,
                duration: 2,
                ease: 'power3.out'
            });

            gsap.to(this.innerMesh.position, {
                x: targetPosition.x,
                y: targetPosition.y,
                z: targetPosition.z,
                duration: 2,
                ease: 'power3.out'
            });

            // Scale morph
            gsap.to(this.mainMesh.scale, {
                x: targetScale,
                y: targetScale,
                z: targetScale,
                duration: 1.5,
                ease: 'elastic.out(1, 0.5)'
            });

            gsap.to(this.innerMesh.scale, {
                x: targetScale,
                y: targetScale,
                z: targetScale,
                duration: 1.5,
                ease: 'elastic.out(1, 0.5)'
            });

            // Rings reposition
            this.rings.forEach((ring, i) => {
                gsap.to(ring.position, {
                    x: targetPosition.x,
                    y: targetPosition.y,
                    z: targetPosition.z,
                    duration: 2 + i * 0.2,
                    ease: 'power3.out'
                });
            });
        }

        // Swap geometry with a subtle transition
        this.swapGeometry(targetGeometry);
    }

    swapGeometry(newGeometry) {
        // Quick scale-down, swap, scale-up
        if (typeof gsap !== 'undefined') {
            const tl = gsap.timeline();
            tl.to(this.mainMesh.scale, {
                x: 0.01, y: 0.01, z: 0.01,
                duration: 0.3,
                ease: 'power2.in',
                onComplete: () => {
                    this.mainMesh.geometry.dispose();
                    this.mainMesh.geometry = newGeometry;
                }
            });
            tl.to(this.mainMesh.scale, {
                x: 1, y: 1, z: 1,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)'
            });
        } else {
            this.mainMesh.geometry.dispose();
            this.mainMesh.geometry = newGeometry;
        }
    }

    update(delta, elapsed) {
        if (!this.mainMesh) return;

        // Gentle rotation
        this.mainMesh.rotation.x += 0.002;
        this.mainMesh.rotation.y += 0.003;

        this.innerMesh.rotation.x -= 0.001;
        this.innerMesh.rotation.y -= 0.002;

        // Ring orbits
        this.rings.forEach((ring, i) => {
            ring.rotation.x += 0.001 * (i + 1);
            ring.rotation.y += 0.002 * (i + 1);
            ring.rotation.z += 0.0005 * (i + 1);

            // Pulsing opacity
            ring.material.opacity = 0.05 + Math.sin(elapsed * 0.5 + i * 2) * 0.03;
        });

        // Breathing scale
        const breathe = 1 + Math.sin(elapsed * 0.3) * 0.02;
        this.mainMesh.scale.x *= breathe;
        this.mainMesh.scale.y *= breathe;

        // Wireframe opacity pulse
        this.mainMesh.material.opacity = 0.12 + Math.sin(elapsed * 0.5) * 0.05;
    }
}

window.MorphingEngine = MorphingEngine;
