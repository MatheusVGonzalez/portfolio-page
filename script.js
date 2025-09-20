// Matrix Rain Effect
function initMatrixRain(options = {}) {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");
    
    const fontSize = options.fontSize || 10;
    const columns = canvas.width / fontSize;
    
    const drops = [];
    for (let x = 0; x < columns; x++) {
        drops[x] = 1;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.06)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = 'rgba(0,255,136,0.65)';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(draw, options.intervalMs || 45);
}

// Add scan animation to CSS
const scanStyle = document.createElement('style');
scanStyle.textContent = `
    @keyframes scan {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
    }
`;
document.head.appendChild(scanStyle);

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        background: var(--bg-dark);
        border: 2px solid var(--primary-color);
        border-radius: 10px;
        color: var(--primary-color);
        font-family: 'Orbitron', monospace;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        box-shadow: 0 0 20px var(--glow-color);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}
// Add particle fade animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(particleStyle);

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Download Resume function
function downloadResume() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || 'pt';
    let file = 'curriculo.pdf'; // padrão português
    if (lang === 'en') {
        file = 'resume.pdf'; // arquivo em inglês
    }
    const a = document.createElement('a');
    a.href = file;
    a.download = file;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Animate numbers on scroll
function animateNumbers() {
    const numbers = document.querySelectorAll('.stat-number');
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            number.textContent = Math.floor(current);
        }, 16);
    });
}

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
        const progress = bar.querySelector('.skill-progress');
        const percentLabel = bar.querySelector('.skill-percent');
        const percent = parseInt(progress.getAttribute('data-percent'));
        let current = 0;
        progress.style.width = '0%';
        percentLabel.textContent = '0%';

        const interval = setInterval(() => {
            if (current < percent) {
                current++;
                progress.style.width = current + '%';
                percentLabel.textContent = current + '%';
            } else {
                clearInterval(interval);
                progress.style.width = percent + '%';
                percentLabel.textContent = percent + '%';
            }
        }, 12); // velocidade da animação
    });
}

// Scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Parallax effect for hero section
function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.particles, .grid-overlay');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect
function initTypingEffect() {
    const titleName = document.querySelector('.title-name');
    const originalText = titleName.textContent;
    
    // Wait for loading screen to finish
    setTimeout(() => {
        typeWriter(titleName, originalText, 150);
    }, 2500);
}

// Particle system for background
function createParticles() {
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary-color);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${5 + Math.random() * 10}s linear infinite;
            opacity: ${0.3 + Math.random() * 0.7};
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes particleFloat {
        0% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    emailjs.sendForm('service_qf24x5d', 'template_sf0ys76', this)
        .then(() => {
            alert('✅ Message sent successfully!');
            this.reset();
        }, (error) => {
            alert('❌ Failed to send message. Please try again later.');
            console.error(error);
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
});

// Navbar background on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(5, 5, 5, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 136, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger specific animations
            if (entry.target.classList.contains('about-stats')) {
                animateNumbers();
            }
            if (entry.target.classList.contains('skills-grid')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Matrix Rain (mais leve)
    initMatrixRain({ opacity: 0.06, intervalMs: 45, fontSize: 10 });
    
    // Initialize Enhanced Cursor Trail
    createCursorTrail();
    
    // Add fade-in class to elements
    const animateElements = document.querySelectorAll('.timeline-item, .project-card, .education-card, .skill-item');
    animateElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Initialize particle system
    createParticles();
    
    // Initialize typing effect
    initTypingEffect();
    
    // Add scroll event listeners
    window.addEventListener('scroll', () => {
        handleScrollAnimations();
        handleParallax();
        handleNavbarScroll();
    });
    
    // Initial call for scroll animations
    handleScrollAnimations();
    handleNavbarScroll();
    
    // GSAP intro: laptop 3D boot, depois revela site
    try {
        if (window.gsap) {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' }});
            // Preparação de elementos
            const overlay = document.getElementById('intro-overlay');
            const screen = document.querySelector('.laptop-screen');
            const bootLines = document.querySelectorAll('.boot-line');
            // Abre a tela
            tl.to(screen, { rotateX: 0, duration: 1.2, transformOrigin: 'bottom center' });
            // Escreve linhas
            tl.to(bootLines, { opacity: 1, y: 0, stagger: 0.2, duration: 1.5 }, '-=0.4');
            // Flash de pronto
            tl.to('.boot-line.ok', { scale: 1.04, duration: 0.2, yoyo: true, repeat: 1 });
            // Espera e some overlay
            tl.to(overlay, { opacity: 0, duration: 0.6, pointerEvents: 'none' });
            tl.set(overlay, { display: 'none' });

            // Animações de entrada seção hero
            gsap.from('.hero .hero-text > *', { y: 30, opacity: 0, stagger: 0.12, duration: 0.8, delay: 0.2 });
            gsap.from('.hero .profile-container', { y: 20, opacity: 0, duration: 0.8, delay: 0.4 });

            // Storytelling no scroll
            gsap.registerPlugin(ScrollTrigger);
            const sections = [
                { sel: '#about .about-content', y: 40 },
                { sel: '#experience .timeline', y: 40 },
                { sel: '#skills .skills-container', y: 40 },
                { sel: '#projects .projects-grid', y: 40 },
                { sel: '#contact .contact-container', y: 40 },
            ];
            sections.forEach(s => {
                gsap.from(s.sel, {
                    y: s.y, opacity: 0, duration: 0.8,
                    scrollTrigger: { trigger: s.sel, start: 'top 80%' }
                });
            });
            // Permitir fechar overlay clicando/teclas
            const dismiss = () => {
                gsap.to(overlay, { opacity: 0, duration: 0.4, onComplete: () => overlay.style.display = 'none' });
                window.removeEventListener('keydown', onKey);
                overlay.removeEventListener('click', dismiss);
            };
            const onKey = (e) => { if (e.key === 'Enter' || e.key === ' ') dismiss(); };
            overlay.addEventListener('click', dismiss);
            window.addEventListener('keydown', onKey);
        }
    } catch (e) {}
});

// Cursor trail effect
function createCursorTrail() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: var(--primary-color);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.7;
        mix-blend-mode: screen;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
}

// Initialize cursor trail
document.addEventListener('DOMContentLoaded', createCursorTrail);

// Add some interactive effects
document.addEventListener('DOMContentLoaded', () => {
    // Lucide icons init safeguard
    if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons();
    }
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click ripple effect
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation to CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search (if implemented)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Add search functionality here
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    handleScrollAnimations();
    handleParallax();
    handleNavbarScroll();
}, 16)); // ~60fps

// Add some Easter eggs
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // Konami code activated!
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        // Add rainbow animation
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        // Reset after 5 seconds
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
        
        konamiCode = [];
    }
});

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Add glitch effect to logo on hover
    const logo = document.querySelector('.nav-logo');
    logo.addEventListener('mouseenter', () => {
        logo.style.animation = 'glitch 0.3s ease-in-out';
    });
    
    logo.addEventListener('animationend', () => {
        logo.style.animation = '';
    });
    
    // Add glitch animation
    const glitchStyle = document.createElement('style');
    glitchStyle.textContent = `
        @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(-2px, -2px); }
            60% { transform: translate(2px, 2px); }
            80% { transform: translate(2px, -2px); }
            100% { transform: translate(0); }
        }
    `;
    document.head.appendChild(glitchStyle);
});

// Add some dynamic content updates
setInterval(() => {
    const now = new Date();
    const timeString = now.toLocaleTimeString('pt-BR');
    
    // Update some dynamic content if needed
    const dynamicElements = document.querySelectorAll('[data-dynamic]');
    dynamicElements.forEach(element => {
        const type = element.getAttribute('data-dynamic');
        switch(type) {
            case 'time':
                element.textContent = timeString;
                break;
            case 'date':
                element.textContent = now.toLocaleDateString('pt-BR');
                break;
        }
    });
}, 1000);

// Add some accessibility improvements
document.addEventListener('DOMContentLoaded', () => {
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '2px solid var(--primary-color)';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = '';
            element.style.outlineOffset = '';
        });
    });
    
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Pular para o conteúdo';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary-color);
        color: var(--bg-dark);
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10000;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
});

document.getElementById('lang-pt').addEventListener('click', () => {
    window.location.search = '?lang=pt';
});
document.getElementById('lang-en').addEventListener('click', () => {
    window.location.search = '?lang=en';
});

// Exemplo simples de tradução (você pode expandir com um objeto de traduções)
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || 'pt';
    if (lang === 'en') {
        document.querySelector('.logo-text').textContent = 'Matheus Gonzalez';
        document.querySelector('.nav-link[href="#home"]').textContent = 'Home';
        document.querySelector('.nav-link[href="#about"]').textContent = 'About';
        document.querySelector('.nav-link[href="#experience"]').textContent = 'Experiences';
        document.querySelector('.nav-link[href="#skills"]').textContent = 'Skills';
        document.querySelector('.nav-link[href="#projects"]').textContent = 'Projects';
        document.querySelector('.nav-link[href="#contact"]').textContent = 'Contact';
        // Adicione outras traduções conforme necessário...
    } else {
        document.querySelector('.logo-text').textContent = 'Matheus Gonzalez';
        document.querySelector('.nav-link[href="#home"]').textContent = 'Início';
        document.querySelector('.nav-link[href="#about"]').textContent = 'Sobre';
        document.querySelector('.nav-link[href="#experience"]').textContent = 'Experiência';
        document.querySelector('.nav-link[href="#skills"]').textContent = 'Habilidades';
        document.querySelector('.nav-link[href="#projects"]').textContent = 'Projetos';
        document.querySelector('.nav-link[href="#contact"]').textContent = 'Contato';
        // Adicione outras traduções conforme necessário...
    }
});
