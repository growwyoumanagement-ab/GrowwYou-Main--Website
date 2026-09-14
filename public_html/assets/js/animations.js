// Advanced Animation Controller
class AnimationController {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupParallaxEffects();
        this.setupHoverEffects();
        this.setupLoadingAnimations();
        this.setupTypewriterEffect();
        this.setupCounterAnimations();
    }

    // Scroll-triggered animations
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add scroll animation classes - DISABLED
                    // if (element.classList.contains('animate-on-scroll')) {
                    //     element.classList.add('scroll-animate');
                    // }
                    
                    // Stagger child animations - DISABLED
                    // if (element.classList.contains('stagger-children')) {
                    //     const children = element.children;
                    //     Array.from(children).forEach((child, index) => {
                    //         setTimeout(() => {
                    //             child.classList.add('animate-scale-in');
                    //         }, index * 100);
                    //     });
                    // }
                    
                    observer.unobserve(element);
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.animate-on-scroll, .stagger-children').forEach(el => {
            observer.observe(el);
        });
    }

    // Parallax scrolling effects
    setupParallaxEffects() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                element.style.transform = `translateY(${rate}px)`;
            });
        });
    }

    // Enhanced hover effects
    setupHoverEffects() {
        // Magnetic effect for buttons
        document.querySelectorAll('.btn-primary').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = '';
            });
        });

        // Tilt effect for cards
        document.querySelectorAll('.service-card, .feature-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }

    // Loading animations
    setupLoadingAnimations() {
        // Animate elements when page loads
        window.addEventListener('load', () => {
            // Add loaded class to body
            document.body.classList.add('loaded');
            
            // Animate navigation - DISABLED
            // const navItems = document.querySelectorAll('.nav-link');
            // navItems.forEach((item, index) => {
            //     setTimeout(() => {
            //         item.classList.add('animate-fade-in');
            //     }, index * 100);
            // });
            
            // Animate hero content
            setTimeout(() => {
                const heroTitle = document.querySelector('.hero-title');
                const heroSubtitle = document.querySelector('.hero-subtitle');
                const heroBtn = document.querySelector('.hero-btn');
                
                // Hero animations disabled to prevent slide effects
                // if (heroTitle) heroTitle.classList.add('animate-fade-in');
                // if (heroSubtitle) heroSubtitle.classList.add('animate-fade-in', 'animate-delay-200');
                // if (heroBtn) heroBtn.classList.add('animate-bounce-in', 'animate-delay-400');
            }, 500);
        });
    }

    // Typewriter effect
    setupTypewriterEffect() {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        typewriterElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            element.style.borderRight = '2px solid var(--primary)';
            
            let i = 0;
            const timer = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(timer);
                    // Blinking cursor effect
                    setInterval(() => {
                        element.style.borderRight = element.style.borderRight === 'none' 
                            ? '2px solid var(--primary)' 
                            : 'none';
                    }, 500);
                }
            }, 100);
        });
    }

    // Counter animations
    setupCounterAnimations() {
        const counters = document.querySelectorAll('.counter');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.getAttribute('data-target'));
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps
                    
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }
                        counter.textContent = Math.floor(current);
                    }, 16);
                    
                    observer.unobserve(counter);
                }
            });
        });
        
        counters.forEach(counter => observer.observe(counter));
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AnimationController();
    
    // Animation classes disabled to prevent slide effects
    // setTimeout(() => {
    //     // Add stagger animation to service grids
    //     document.querySelectorAll('.service-features-grid, .services-grid').forEach(grid => {
    //         grid.classList.add('stagger-children');
    //     });
    //     
    //     // Add scroll animations to sections
    //     document.querySelectorAll('section').forEach(section => {
    //         section.classList.add('animate-on-scroll');
    //     });
    // }, 100);
});

// Cursor trail effect (optional)
if (window.innerWidth > 768) {
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Create cursor trail
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(57, 255, 20, 0.3), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
    `;
    document.body.appendChild(trail);
    
    function animateTrail() {
        trailX += (mouseX - trailX) * 0.1;
        trailY += (mouseY - trailY) * 0.1;
        
        trail.style.left = trailX - 10 + 'px';
        trail.style.top = trailY - 10 + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}
