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
        // Avoid re-animating on repeated intersections
        if (bar.dataset.animated === 'true') return;

        const progress = bar.querySelector('.skill-progress');
        if (!progress) return;

        let percentLabel = bar.querySelector('.skill-percent');
        if (!percentLabel) {
            percentLabel = document.createElement('span');
            percentLabel.className = 'skill-percent';
            percentLabel.textContent = '0%';
            bar.appendChild(percentLabel);
        }

        const target = parseInt(progress.getAttribute('data-percent'));
        const percent = isNaN(target) ? 0 : Math.max(0, Math.min(100, target));

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
                bar.dataset.animated = 'true';
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
    if (!titleName) return;
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

    // Subtle 3D tilt interactions
    const tiltify = (el, strength = 12) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const onMove = (e) => {
            const dx = (e.clientX - cx) / rect.width;
            const dy = (e.clientY - cy) / rect.height;
            el.style.transform = `rotateX(${(-dy * strength).toFixed(2)}deg) rotateY(${(dx * strength).toFixed(2)}deg)`;
        };
        const onLeave = () => {
            el.style.transform = 'rotateX(0deg) rotateY(0deg)';
        };
        el.addEventListener('mousemove', onMove);
        el.addEventListener('mouseleave', onLeave);
    };
    // Only apply tilt to profile (disable on project cards to keep preview readable)
    const profile = document.querySelector('.profile-container');
    if (profile) tiltify(profile, 8);

    // Floating contact action button
    if (!document.querySelector('.contact-fab')) {
        const fab = document.createElement('button');
        fab.className = 'contact-fab';
        fab.innerHTML = '<i class="fas fa-paper-plane"></i>';
        fab.title = 'Contact';
        fab.addEventListener('click', () => scrollToSection('contact'));
        document.body.appendChild(fab);
    }
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

    // Project video hover previews
    document.querySelectorAll('.project-card').forEach(card => {
        const img = card.querySelector('.project-image img');
        const video = card.querySelector('.project-video');
        if (!video) return;

        // Ensure video is muted for autoplay policies
        video.muted = true;
        video.loop = true;

        // Log video source for debugging
        console.log(`Video source for card: ${video.src}`);

        // Add error listener to detect loading issues
        video.addEventListener('error', () => {
            console.error(`Error loading video: ${video.src}`);
        });

        // Hover behaviors
        card.addEventListener('mouseenter', () => {
            card.classList.add('previewing');
            video.style.display = 'block';
            const playPromise = video.play();
            if (playPromise && playPromise.catch) {
                playPromise.catch((error) => {
                    console.error(`Autoplay error for video: ${video.src}`, error);
                });
            }
        });
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
            video.style.display = 'none';
            card.classList.remove('previewing');
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
    setLanguage('pt');
});
document.getElementById('lang-en').addEventListener('click', () => {
    setLanguage('en');
});

// i18n translations
const i18n = {
    en: {
        'overlay.enter': 'Enter',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experiences',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.hello': "HELLO, I'M",
        'hero.name': 'DEVELOPER',
        'hero.role': 'FULL-STACK DEVELOPER',
        'hero.subtitle': 'Transforming ideas into extraordinary digital experiences',
        'hero.cta': 'GET IN TOUCH',
        'hero.download': 'DOWNLOAD CV',
        'hero.photoAlt': 'Professional profile photo of Matheus Gonzalez',
        'about.title': 'ABOUT ME',
        'about.description': 'Full Stack Web Developer with 1+ year experience in front-end and back-end development, specialized in building scalable applications, API integrations, and modern web solutions. Proficient in React, Node.js, Django, PHP, MySQL, and MongoDB. Additionally, Salesforce Certified with hands-on experience in Apex, SOQL, and LWC, bringing extra expertise in CRM customization and automation.',
        'about.years': 'Years of Experience',
        'about.projects': 'Completed Projects',
        'about.techs': 'Technologies Mastered',
        'exp.title': 'PROFESSIONAL EXPERIENCE',
        'skills.title': 'TECHNICAL SKILLS',
        'edu.title': 'EDUCATION & CERTIFICATIONS',
        'projects.title': 'FEATURED PROJECTS',
    'projects.viewAll': 'VIEW ALL PROJECTS',
        'contact.title': 'GET IN TOUCH',
        'contact.email': 'Email',
        'contact.location': 'Location',
        'form.name': 'Name',
        'form.email': 'Email',
        'form.subject': 'Subject',
        'form.message': 'Message',
        'form.send': 'SEND MESSAGE',
    },
    pt: {
        'overlay.enter': 'Entrar',
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.experience': 'Experiências',
        'nav.skills': 'Habilidades',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contato',
        'hero.hello': 'OLÁ, EU SOU',
        'hero.name': 'DESENVOLVEDOR',
        'hero.role': 'DESENVOLVEDOR FULL-STACK',
        'hero.subtitle': 'Transformando ideias em experiências digitais extraordinárias',
        'hero.cta': 'FALE COMIGO',
        'hero.download': 'BAIXAR CV',
    'hero.photoAlt': 'Foto profissional de perfil de Matheus Gonzalez',
        'about.title': 'SOBRE MIM',
        'about.description': 'Desenvolvedor Web Full Stack com 1+ ano de experiência em front-end e back-end, especializado em aplicações escaláveis, integrações de APIs e soluções web modernas. Domínio em React, Node.js, Django, PHP, MySQL e MongoDB. Certificação Salesforce com experiência prática em Apex, SOQL e LWC, trazendo expertise em customização e automação de CRM.',
        'about.years': 'Anos de Experiência',
        'about.projects': 'Projetos Concluídos',
        'about.techs': 'Tecnologias Dominadas',
        'exp.title': 'EXPERIÊNCIA PROFISSIONAL',
        'skills.title': 'HABILIDADES TÉCNICAS',
        'edu.title': 'EDUCAÇÃO & CERTIFICAÇÕES',
        'projects.title': 'PROJETOS EM DESTAQUE',
    'projects.viewAll': 'VER TODOS OS PROJETOS',
        'contact.title': 'ENTRE EM CONTATO',
        'contact.email': 'Email',
        'contact.location': 'Localização',
        'form.name': 'Nome',
        'form.email': 'Email',
        'form.subject': 'Assunto',
        'form.message': 'Mensagem',
        'form.send': 'ENVIAR MENSAGEM',
    }
};

function applyTranslations(lang) {
    const dict = i18n[lang] || i18n.pt;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });
    // Alt texts
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        const key = el.getAttribute('data-i18n-alt');
        if (dict[key] !== undefined) {
            el.setAttribute('alt', dict[key]);
        }
    });
}

function setLanguage(lang) {
    // Update URL param without reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
    applyTranslations(lang);
}

// Apply on load
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || 'en';
    applyTranslations(lang);
});

// Project modal data + logic
const projectData = {
  'car-deals-cms': {
    repo: 'https://github.com/MatheusVGonzalez/Car-Deals-',
    live: '',
    tags: ['PHP', 'MySQL', 'MVC', 'Security'],
    en: {
      title: 'CarDeals CMS',
      short: 'A secure CMS for car dealerships with role-based access, car inventory CRUD, purchase flow and audit logging.',
      sections: [
        { heading: 'Overview', type: 'p', body: 'CarDeals CMS is a content management system for car dealerships built with vanilla PHP and MySQL. It lets administrators manage cars and users while customers browse and purchase vehicles through a simple responsive interface.' },
        { heading: 'Features', type: 'list', items: [
          'User Authentication with password hashing',
          'Role-Based Access (Admin, Editor, Viewer)',
          'Car Management CRUD with image uploads',
          'Purchase flow with pre-filled user data',
          'Audit Logging of critical actions',
          'Friendly Error Handling + logging',
          'Security: input sanitization & prepared statements',
          'Responsive, minimal UI'
        ]},
        { heading: 'Folder Structure', type: 'pre', code: `Car-Deals-/\n├── classes/         # Core PHP classes (Car, User, Audit, Database)\n├── config.php       # App configuration\n├── public/          # Public HTTP root\n│   ├── CRUDCars/    # Car CRUD operations\n│   ├── CRUDUsers/   # User CRUD operations\n│   ├── css/         # Styles\n│   ├── uploads/     # Uploaded car images\n│   ├── dashboard.php\n│   ├── index.php\n│   ├── login.php\n│   ├── logout.php\n│   ├── register.php\n├── README.md        # Documentation` },
        { heading: 'Requirements', type: 'list', items: [ 'PHP 7.4+', 'MySQL 5.7+', 'Apache/Nginx', 'Writable public/uploads folder' ]},
        { heading: 'Setup', type: 'list', items: [ 'Clone repository to server', 'Create MySQL database named cms', 'Configure credentials in config.php', 'Ensure public/uploads is writable', 'Register first user via /register.php' ]},
        { heading: 'Usage', type: 'list', items: [ 'Register & login', 'Admins: manage users & cars', 'Editors: add/edit cars', 'Viewers: browse & purchase', 'All actions logged (audit)' ]},
        { heading: 'Security', type: 'list', items: [ 'Password hashing', 'Prepared statements', 'Input sanitization', 'Role-based access control' ]},
        { heading: 'SQL Schema', type: 'pre', code: `CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(255) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  password VARCHAR(255) NOT NULL,\n  role ENUM('admin','editor','viewer') NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE cars (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  brand VARCHAR(255) NOT NULL,\n  model VARCHAR(255) NOT NULL,\n  year YEAR NOT NULL,\n  price DECIMAL(10,2) NOT NULL,\n  mileage INT,\n  description TEXT,\n  image VARCHAR(255),\n  status ENUM('Available','Sold','Reserved'),\n  created_by INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (created_by) REFERENCES users(id)\n);\n\nCREATE TABLE audit_logs (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  user_id INT,\n  action VARCHAR(255),\n  entity VARCHAR(255),\n  entity_id INT,\n  details TEXT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n);` }
      ]
    },
    pt: {
      title: 'CarDeals CMS',
      short: 'CMS seguro para concessionárias com acesso baseado em papéis, CRUD de carros, fluxo de compra e auditoria.',
      sections: [
        { heading: 'Visão Geral', type: 'p', body: 'CarDeals CMS é um sistema de gestão para concessionárias feito em PHP puro e MySQL. Permite administradores gerenciar carros e usuários enquanto clientes navegam e compram veículos em uma interface simples e responsiva.' },
        { heading: 'Funcionalidades', type: 'list', items: [
          'Autenticação com hash de senhas',
          'Controle de Acesso por Papel (Admin, Editor, Viewer)',
          'CRUD de Carros com upload de imagens',
          'Fluxo de Compra com dados do usuário pré-preenchidos',
          'Registro (Audit) de ações críticas',
          'Tratamento de Erros amigável + logs',
          'Segurança: sanitização e prepared statements',
          'Interface responsiva e simples'
        ]},
        { heading: 'Estrutura de Pastas', type: 'pre', code: `Car-Deals-/\n├── classes/         # Classes principais (Car, User, Audit, Database)\n├── config.php       # Configuração\n├── public/          # Raiz pública\n│   ├── CRUDCars/    # CRUD de carros\n│   ├── CRUDUsers/   # CRUD de usuários\n│   ├── css/         # Estilos\n│   ├── uploads/     # Imagens dos carros\n│   ├── dashboard.php\n│   ├── index.php\n│   ├── login.php\n│   ├── logout.php\n│   ├── register.php\n├── README.md        # Documentação` },
        { heading: 'Requisitos', type: 'list', items: [ 'PHP 7.4+', 'MySQL 5.7+', 'Apache/Nginx', 'Pasta public/uploads gravável' ]},
        { heading: 'Setup', type: 'list', items: [ 'Clonar o repositório', 'Criar banco cms', 'Configurar credenciais em config.php', 'Garantir permissão de escrita em uploads', 'Registrar primeiro usuário em /register.php' ]},
        { heading: 'Uso', type: 'list', items: [ 'Registrar e fazer login', 'Admins: gerenciam usuários e carros', 'Editores: adicionam/ editam carros', 'Visitantes: navegam e compram', 'Todas ações auditadas' ]},
        { heading: 'Segurança', type: 'list', items: [ 'Hash de senhas', 'Prepared statements', 'Sanitização de entrada', 'Controle de acesso por papéis' ]},
        { heading: 'SQL', type: 'pre', code: `CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  name VARCHAR(255) NOT NULL,\n  email VARCHAR(255) UNIQUE NOT NULL,\n  password VARCHAR(255) NOT NULL,\n  role ENUM('admin','editor','viewer') NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE cars (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  brand VARCHAR(255) NOT NULL,\n  model VARCHAR(255) NOT NULL,\n  year YEAR NOT NULL,\n  price DECIMAL(10,2) NOT NULL,\n  mileage INT,\n  description TEXT,\n  image VARCHAR(255),\n  status ENUM('Available','Sold','Reserved'),\n  created_by INT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (created_by) REFERENCES users(id)\n);\n\nCREATE TABLE audit_logs (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  user_id INT,\n  action VARCHAR(255),\n  entity VARCHAR(255),\n  entity_id INT,\n  details TEXT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE\n);` }
      ]
    }
  },
  'crypto-dashboard': {
    repo: 'https://github.com/MatheusVGonzalez/CryptoDashboard',
    live: '',
    tags: ['React', 'Node.js', 'Express', 'Chart.js', 'API'],
    en: {
      title: 'CryptoDashboard',
      short: 'Full-stack crypto tracking app: real-time prices, charts, news, virtual balance and authentication.',
      sections: [
        { heading: 'Overview', type: 'p', body: 'CryptoDashboard is a full-stack cryptocurrency tracking application that lets users register, login, explore 50+ coins, view interactive charts, manage a virtual balance and read live crypto news.' },
        { heading: 'Tech Stack', type: 'list', items: [ 'Frontend: React, React Router, Axios, Chart.js', 'APIs: CoinGecko (prices), CryptoPanic (news widget)', 'Backend: Node.js, Express', 'Storage: JSON file (users)' ]},
        { heading: 'Features', type: 'list', items: [ 'Authentication (localStorage persistence)', 'Real-time coin list + search/filter', 'Interactive historical price charts (Chart.js)', 'Virtual balance: simulate adding funds', 'Live news widget integration', 'Typing animation on landing', 'Smart caching to lower API calls' ]},
        { heading: 'Getting Started', type: 'list', items: [ 'Clone repo', 'Open two terminals', 'Backend: cd backend && npm install && node server.js', 'Frontend: cd frontend && npm install && npm start', 'Open http://localhost:3000' ]},
        { heading: 'File Structure', type: 'pre', code: `cryptodashboard/\n├── backend/\n│   ├── server.js\n│   └── package.json\n├── frontend/\n│   ├── src/ (components, pages, services)\n│   ├── public/\n│   └── package.json\n└── README.md` },
        { heading: 'Roadmap', type: 'list', items: [ 'JWT auth instead of localStorage', 'Portfolio allocation charts', 'Watchlist & alerts', 'Deployment (Vercel + Render)' ]}
      ]
    },
    pt: {
      title: 'CryptoDashboard',
      short: 'Aplicação full-stack para acompanhar criptos: preços em tempo real, gráficos, notícias, saldo virtual e autenticação.',
      sections: [
        { heading: 'Visão Geral', type: 'p', body: 'CryptoDashboard é uma aplicação full-stack que permite usuários registrarem, fazer login, explorar 50+ moedas, ver gráficos interativos, gerenciar um saldo virtual e ler notícias de cripto em tempo real.' },
        { heading: 'Stack Tecnológico', type: 'list', items: [ 'Frontend: React, React Router, Axios, Chart.js', 'APIs: CoinGecko (preços), CryptoPanic (notícias)', 'Backend: Node.js, Express', 'Storage: arquivo JSON (usuários)' ]},
        { heading: 'Funcionalidades', type: 'list', items: [ 'Autenticação (persistência via localStorage)', 'Lista de moedas com busca/filtro em tempo real', 'Gráficos históricos (Chart.js)', 'Saldo virtual: simulação de fundos', 'Widget de notícias ao vivo', 'Animação de digitação na home', 'Caching inteligente para reduzir chamadas' ]},
        { heading: 'Primeiros Passos', type: 'list', items: [ 'Clonar repositório', 'Abrir dois terminais', 'Backend: cd backend && npm install && node server.js', 'Frontend: cd frontend && npm install && npm start', 'Abrir http://localhost:3000' ]},
        { heading: 'Estrutura de Pastas', type: 'pre', code: `cryptodashboard/\n├── backend/\n│   ├── server.js\n│   └── package.json\n├── frontend/\n│   ├── src/ (componentes, páginas, serviços)\n│   ├── public/\n│   └── package.json\n└── README.md` },
        { heading: 'Próximos Passos', type: 'list', items: [ 'JWT auth ao invés de localStorage', 'Gráficos de alocação de portfólio', 'Watchlist & alertas', 'Deploy (Vercel + Render)' ]}
      ]
    }
  }
    , 'word-shuffle': {
        repo: 'https://github.com/MatheusVGonzalez/Word-Shuffle-Aura-Game',
        live: '',
        tags: ['Salesforce', 'Apex', 'Aura', 'Lightning', 'Events'],
        en: {
            title: 'Word Shuffle (Salesforce)',
            short: 'Interactive word puzzle Lightning component with difficulty modes, Apex logic, event-driven UI, and persistent game history.',
            sections: [
                { heading: 'Overview', type: 'p', body: 'Word Shuffle is a Lightning Aura based mini-game embedded in the Salesforce Service App Home Tab. Users receive a shuffled word and must guess the correct one within limited attempts depending on difficulty.' },
                { heading: 'Where It Runs', type: 'list', items: [ 'Service App → Home Tab (Lightning Experience)', 'Packaged as a Lightning App Builder component', 'Accessible inside Service Console workflow' ]},
                { heading: 'Game Features', type: 'list', items: [ 'Displays shuffled target word + remaining moves', '3 Difficulty Modes: Easy / Medium / Hard', 'Dynamic shuffle & new game creation', 'Real-time game log (number, mode, date, result)', 'Event-driven updates between nested components', 'Persisted history via custom objects / metadata' ]},
                { heading: 'Technologies Used', type: 'list', items: [ 'Apex Classes (game engine, word provider, persistence)', 'Lightning Aura Components (UI composition)', 'Component Events (child → parent communication)', 'Lightning App Builder (embedding)', 'Custom Objects / Metadata (history storage)' ]},
                { heading: 'How to Play', type: 'list', items: [ 'Open Service App → Home Tab', 'Select difficulty mode', 'Click Start New Game', 'Enter guesses until solved or attempts end', 'Track results in right-hand game log' ]},
                { heading: 'Apex Core Logic (Sample)', type: 'pre', code: `public with sharing class WordShuffleController {\n    @AuraEnabled(cacheable=true)\n    public static String startNewGame(String mode){\n        // Select random word based on mode length/difficulty\n        Game__c g = GameService.newGame(mode);\n        return g.Shuffled_Word__c;\n    }\n    @AuraEnabled\n    public static GameResultDTO submitGuess(Id gameId, String guess){\n        return GameService.processGuess(gameId, guess);\n    }\n}` },
                { heading: 'Component Structure', type: 'pre', code: `aura/\n├── wordShuffle/\n│   ├── wordShuffle.cmp        # Parent container (mode select + board + history)\n│   ├── wordShuffleController.js\n│   ├── wordShuffleHelper.js\n│   ├── wordShuffle.css\n│   ├── wordShuffleRenderer.js (optional)\n├── guessBoard/                # Input + shuffled word display\n├── gameHistory/               # Right panel history list\n├── difficultySelector/        # Mode buttons (fires events)\n├── events/\n│   ├── ModeChange.evt         # User selected new mode\n│   ├── GameUpdated.evt        # Guess submitted / state change\n` },
                { heading: 'Data Model', type: 'pre', code: `Custom Object: Game__c\nFields: Mode__c (Picklist), Original_Word__c, Shuffled_Word__c, Attempts_Used__c, Max_Attempts__c, Result__c (Picklist), Started_On__c (DateTime)\n\nCustom Metadata: Word_Set__mdt (Word__c, Difficulty__c)` },
                { heading: 'Events Flow', type: 'list', items: [ 'difficultySelector fires ModeChange → parent starts game', 'guessBoard submits guess → Apex → returns state', 'Parent fires GameUpdated → history refreshes', 'History component re-queries latest Game__c records' ]},
                { heading: 'Future Improvements', type: 'list', items: [ 'Convert to LWC for performance', 'Add timer per game', 'Multi-user leaderboard', 'Lightning Message Service for broader context', 'Deploy as unlocked package' ]}
            ]
        },
        pt: {
            title: 'Word Shuffle (Salesforce)',
            short: 'Jogo de palavras embaralhadas em Lightning com modos de dificuldade, lógica Apex, eventos e histórico persistente.',
            sections: [
                { heading: 'Visão Geral', type: 'p', body: 'Word Shuffle é um mini jogo em Lightning Aura embutido na Home do App de Service no Salesforce. O usuário recebe uma palavra embaralhada e precisa descobrir a correta dentro de tentativas limitadas conforme a dificuldade.' },
                { heading: 'Onde Roda', type: 'list', items: [ 'Service App → Aba Home (Lightning Experience)', 'Empacotado como componente para Lightning App Builder', 'Acessível dentro do fluxo do Service Console' ]},
                { heading: 'Recursos do Jogo', type: 'list', items: [ 'Mostra palavra embaralhada + tentativas restantes', '3 Modos: Easy / Medium / Hard', 'Criação dinâmica de novo jogo', 'Log em tempo real (número, modo, data, resultado)', 'Atualizações via eventos entre componentes', 'Histórico persistido (objetos / metadata)' ]},
                { heading: 'Tecnologias Utilizadas', type: 'list', items: [ 'Classes Apex (engine, provedor de palavras, persistência)', 'Componentes Lightning Aura (UI)', 'Eventos de Componente (comunicação)', 'Lightning App Builder (embed)', 'Objetos / Metadata Personalizados (histórico)' ]},
                { heading: 'Como Jogar', type: 'list', items: [ 'Abrir Service App → Aba Home', 'Selecionar modo de dificuldade', 'Clicar em Start New Game', 'Digitar palpites até acertar ou acabar tentativas', 'Acompanhar resultados no log à direita' ]},
                { heading: 'Lógica Apex (Exemplo)', type: 'pre', code: `public with sharing class WordShuffleController {\n    @AuraEnabled(cacheable=true)\n    public static String startNewGame(String mode){\n        // Seleciona palavra aleatória por dificuldade\n        Game__c g = GameService.newGame(mode);\n        return g.Shuffled_Word__c;\n    }\n    @AuraEnabled\n    public static GameResultDTO submitGuess(Id gameId, String guess){\n        return GameService.processGuess(gameId, guess);\n    }\n}` },
                { heading: 'Estrutura de Componentes', type: 'pre', code: `aura/\n├── wordShuffle/\n│   ├── wordShuffle.cmp        # Contêiner pai (modo + board + histórico)\n│   ├── wordShuffleController.js\n│   ├── wordShuffleHelper.js\n│   ├── wordShuffle.css\n│   ├── wordShuffleRenderer.js (opcional)\n├── guessBoard/                # Entrada + exibição palavra\n├── gameHistory/               # Painel histórico à direita\n├── difficultySelector/        # Botões de modo (dispara eventos)\n├── events/\n│   ├── ModeChange.evt         # Modo selecionado\n│   ├── GameUpdated.evt        # Palpite / mudança estado\n` },
                { heading: 'Modelo de Dados', type: 'pre', code: `Objeto Personalizado: Game__c\nCampos: Mode__c (Picklist), Original_Word__c, Shuffled_Word__c, Attempts_Used__c, Max_Attempts__c, Result__c (Picklist), Started_On__c (DateTime)\n\nCustom Metadata: Word_Set__mdt (Word__c, Difficulty__c)` },
                { heading: 'Fluxo de Eventos', type: 'list', items: [ 'difficultySelector dispara ModeChange → pai inicia jogo', 'guessBoard envia palpite → Apex → retorna estado', 'Pai dispara GameUpdated → histórico atualiza', 'Histórico reconsulta registros Game__c recentes' ]},
                { heading: 'Melhorias Futuras', type: 'list', items: [ 'Migrar para LWC', 'Adicionar timer por jogo', 'Leaderboard multi-usuário', 'Lightning Message Service para contexto amplo', 'Deploy como pacote unlocked' ]}
            ]
        }
    }
        , 'dog-memory-game': {
            repo: 'https://github.com/MatheusVGonzalez/js-mini-app-2',
            live: '',
            tags: ['HTML','CSS','JavaScript','Canvas','Game'],
            en: {
                title: 'Dog Memory Adventure',
                short: 'Memory card game with a cute dog, lives, levels and animated health progression.',
                sections: [
                    { heading: 'Overview', type: 'p', body: 'An interactive memory card game where you match food-themed cards while keeping your dog healthy. Each mistake costs a life; correct matches restore health. Clear all pairs across increasing rounds to guide the dog safely home.' },
                    { heading: 'Gameplay', type: 'list', items: [ 'Flip two cards to find a matching pair', 'Matched pair: dog heals / gains progress', 'Mismatch: lose a life (dog gets hurt animation)', 'Clear all pairs → next round / level', 'Finish required rounds to win the level' ]},
                    { heading: 'Difficulty Levels', type: 'list', items: [ 'Easy (⭐): Fewer pairs and 1 round', 'Medium (⭐⭐): More pairs + 2 rounds', 'Hard (⭐⭐⭐): Highest pairs + 3+ rounds' ]},
                    { heading: 'Life & Progress System', type: 'list', items: [ 'Lives visually represented by dog health animation', 'Hearts / status bar updates on each action', 'Progress bar toward doghouse per completed round', 'Game over if lives reach zero', 'Victory screen when final round cleared' ]},
                    { heading: 'Tech Stack', type: 'list', items: [ 'HTML structure and semantic containers', 'CSS animations & state styling', 'JavaScript for deck generation & shuffle (Fisher–Yates)', 'Canvas / DOM hybrid for dog sprite + effects', 'Modular state machine (idle, hurt, heal, win, lose)' ]},
                    { heading: 'Core Shuffle Logic (Snippet)', type: 'pre', code: `function shuffle(deck){\n  for(let i=deck.length-1;i>0;i--){\n    const j=Math.floor(Math.random()*(i+1));\n    [deck[i],deck[j]]=[deck[j],deck[i]];\n  }\n  return deck;\n}` },
                    { heading: 'Future Improvements', type: 'list', items: [ 'Sound effects & background music toggle', 'Timed challenge mode', 'Persistent high scores (localStorage)', 'Adaptive difficulty (dynamic lives)', 'Mobile haptics feedback' ]}
                ]
            },
            pt: {
                title: 'Aventura da Memória do Cachorro',
                short: 'Jogo da memória com um cachorro fofo, vidas, níveis e progressão animada de saúde.',
                sections: [
                    { heading: 'Visão Geral', type: 'p', body: 'Um jogo interativo de memória onde você combina cartas de comida mantendo o cachorro saudável. Cada erro custa uma vida; acertos recuperam saúde. Limpe todos os pares em rodadas crescentes para levar o cachorro em segurança para casa.' },
                    { heading: 'Jogabilidade', type: 'list', items: [ 'Vire duas cartas para achar o par', 'Par correto: cachorro se cura / ganha progresso', 'Erro: perde uma vida (animação de dano)', 'Limpe todos os pares → próxima rodada / nível', 'Complete as rodadas necessárias para vencer' ]},
                    { heading: 'Níveis de Dificuldade', type: 'list', items: [ 'Fácil (⭐): Menos pares e 1 rodada', 'Médio (⭐⭐): Mais pares + 2 rodadas', 'Difícil (⭐⭐⭐): Mais pares + 3+ rodadas' ]},
                    { heading: 'Sistema de Vidas & Progresso', type: 'list', items: [ 'Vidas representadas por animação de saúde do cachorro', 'Corações / barra de status atualiza a cada ação', 'Barra de progresso até a casinha por rodada concluída', 'Game over se vidas chegam a zero', 'Tela de vitória no fim da última rodada' ]},
                    { heading: 'Stack Tecnológico', type: 'list', items: [ 'HTML semântico', 'CSS animações e estados', 'JavaScript para geração e embaralhamento de baralho (Fisher–Yates)', 'Canvas / DOM híbrido para sprite do cachorro + efeitos', 'Máquina de estados modular (idle, hurt, heal, win, lose)' ]},
                    { heading: 'Lógica de Embaralhar (Trecho)', type: 'pre', code: `function shuffle(deck){\n  for(let i=deck.length-1;i>0;i--){\n    const j=Math.floor(Math.random()*(i+1));\n    [deck[i],deck[j]]=[deck[j],deck[i]];\n  }\n  return deck;\n}` },
                    { heading: 'Melhorias Futuras', type: 'list', items: [ 'Efeitos sonoros e música de fundo', 'Modo desafio com tempo', 'High scores persistentes (localStorage)', 'Dificuldade adaptativa (vidas dinâmicas)', 'Feedback háptico em mobile' ]}
                ]
            }
        }
        , 'dream-car-site': {
            repo: 'https://github.com/MatheusVGonzalez/FinalProject1M',
            live: '',
            tags: ['HTML5','CSS3','Responsive','UI/UX'],
            en: {
                title: 'Dream Car Website',
                short: 'Responsive multi-page dream car showcase with customization, gallery, FAQ & contact.',
                sections: [
                    { heading: 'About the Project', type: 'p', body: 'A creative responsive site to present and “sell” my dream car. Built to practice semantic HTML, responsive layouts and clean UI patterns.' },
                    { heading: 'Pages Included', type: 'list', items: [ 'Home (hero, specs, highlights)', 'Customization (configure pseudo purchase)', 'About page', 'Contact & FAQ page', 'Gallery page', '404 error page' ]},
                    { heading: 'Purpose', type: 'p', body: 'Strengthened front-end fundamentals: advanced selectors, accessibility focus states, responsive breakpoints, animations and Git workflow.' },
                    { heading: 'Technologies Used', type: 'list', items: [ 'HTML5 semantic structure', 'CSS3 (flexbox & grid)', 'Media queries & responsive typography', 'Accessible nav & focus management', 'Organized file structure & Git versioning' ]},
                    { heading: 'How to Run', type: 'pre', code: `git clone git@github.com:MatheusVGonzalez/FinalProject1M.git\ncd FinalProject1M\nopen index.html` },
                    { heading: 'Future Ideas', type: 'list', items: [ 'JS configurator (color / wheels)', 'Dark mode toggle', 'Deploy to GitHub Pages', 'Form validation & backend hook', 'Image optimization & Lighthouse tuning' ]}
                ]
            },
            pt: {
                title: 'Site Carro dos Sonhos',
                short: 'Site responsivo multi-páginas do carro dos sonhos com customização, galeria, FAQ e contato.',
                sections: [
                    { heading: 'Sobre o Projeto', type: 'p', body: 'Site responsivo criativo para apresentar e “vender” meu carro dos sonhos. Construído para praticar HTML semântico, layouts responsivos e padrões de UI limpos.' },
                    { heading: 'Páginas Incluídas', type: 'list', items: [ 'Home (hero, specs, destaques)', 'Customização (configuração / pseudo compra)', 'Página Sobre', 'Contato & FAQ', 'Galeria', 'Página 404' ]},
                    { heading: 'Objetivo', type: 'p', body: 'Reforçar fundamentos de front-end: seletores avançados, acessibilidade (focus), breakpoints responsivos, animações e fluxo com Git.' },
                    { heading: 'Tecnologias Utilizadas', type: 'list', items: [ 'Estrutura semântica HTML5', 'CSS3 (flexbox & grid)', 'Media queries & tipografia responsiva', 'Navegação acessível & estados de foco', 'Estrutura organizada + versionamento Git' ]},
                    { heading: 'Como Executar', type: 'pre', code: `git clone git@github.com:MatheusVGonzalez/FinalProject1M.git\ncd FinalProject1M\nabrir index.html` },
                    { heading: 'Ideias Futuras', type: 'list', items: [ 'Configurador em JS (cor / rodas)', 'Toggle dark mode', 'Publicar no GitHub Pages', 'Validação de formulário & backend', 'Otimização de imagens & Lighthouse' ]}
                ]
            }
        }
        , 'grocery-store-system': {
            repo: 'https://github.com/MatheusVGonzalez/grocery-django',
            live: '',
            tags: ['Django','Python','SQLite','Bootstrap','RBAC'],
            en: {
                title: 'Grocery Store Management',
                short: 'Django grocery store platform with customer shopping flow and staff product & basket review.',
                sections: [
                    { heading: 'Overview', type: 'p', body: 'A role-based Django 5 application separating customer shopping experience from staff administrative control. Customers browse products, build baskets and track purchases; staff manage inventory, review baskets and approve purchases.' },
                    { heading: 'Customer Features', type: 'list', items: [ 'Registration & authentication', 'Browse product catalog with price & created date', 'Add / remove products from basket', 'Adjust quantities before submission', 'View purchase history (approved baskets)' ]},
                    { heading: 'Staff Features', type: 'list', items: [ 'Create & edit products (name, price, timestamps)', 'List & filter pending baskets', 'Approve or deny baskets (status workflow)', 'View customers & their purchase history', 'Full administrative oversight' ]},
                    { heading: 'Technology Stack', type: 'list', items: [ 'Backend: Django 5.2.6 (Python 3.13)', 'DB: SQLite3 (easily swappable)', 'Frontend: HTML + Bootstrap', 'Auth: Django built-in auth system', 'Environment: Virtualenv' ]},
                    { heading: 'Core Models', type: 'pre', code: `class Product(models.Model):\n    name = models.CharField(max_length=120)\n    price = models.DecimalField(max_digits=10, decimal_places=2)\n    created_at = models.DateTimeField(auto_now_add=True)\n    updated_at = models.DateTimeField(auto_now=True)\n\nclass Basket(models.Model):\n    customer = models.ForeignKey(User, on_delete=models.CASCADE)\n    status = models.CharField(choices=[('pending','Pending'),('approved','Approved'),('denied','Denied')], max_length=20, default='pending')\n    reviewer = models.ForeignKey(User, related_name='reviewed', null=True, blank=True, on_delete=models.SET_NULL)\n    created_at = models.DateTimeField(auto_now_add=True)\n\nclass BasketItem(models.Model):\n    basket = models.ForeignKey(Basket, on_delete=models.CASCADE)\n    product = models.ForeignKey(Product, on_delete=models.CASCADE)\n    quantity = models.PositiveIntegerField(default=1)\n\nclass PurchaseHistory(models.Model):\n    basket = models.OneToOneField(Basket, on_delete=models.CASCADE)\n    purchased_at = models.DateTimeField(auto_now_add=True)` },
                    { heading: 'Project Structure', type: 'pre', code: `grocery_store/\n├── manage.py\n├── grocery_store/ (settings, urls, wsgi)\n├── store/ (models, views, forms, admin, urls, migrations)\n├── templates/\n│   ├── registration/ (login, register)\n│   ├── customer/\n│   ├── products/\n│   └── staff/\n└── db.sqlite3` },
                    { heading: 'Installation & Setup', type: 'list', items: [ 'git clone <repo>', 'cd grocery_store', 'python -m venv grocery_store_env', 'Activate virtualenv', 'pip install django==5.2.6 sqlparse asgiref tzdata', 'python manage.py migrate', 'python manage.py createsuperuser (optional)', 'python manage.py runserver' ]},
                    { heading: 'URL Patterns', type: 'list', items: [ '/', '/register/', '/login/', '/logout/', '/products/', '/products/<id>/', '/add-to-basket/', '/basket/', '/purchase-history/', '/staff/products/add/', '/staff/products/<id>/update/', '/staff/baskets/', '/staff/baskets/<id>/review/', '/staff/customers/', '/staff/customers/<id>/' ]},
                    { heading: 'Usage Flow', type: 'list', items: [ 'Customer registers & logs in', 'Adds products to basket then submits', 'Staff reviews pending basket', 'If approved → recorded in purchase history', 'Customer can track historical purchases' ]},
                    { heading: 'Future Improvements', type: 'list', items: [ 'Email notifications on basket approval', 'Pagination & search for products', 'Switch to Postgres for production', 'Docker / docker-compose setup', 'API endpoints (DRF) for SPA or mobile client' ]}
                ]
            },
            pt: {
                title: 'Gestão de Mercearia',
                short: 'Plataforma Django com fluxo de compras para clientes e revisão de cestas/produtos pelo staff.',
                sections: [
                    { heading: 'Visão Geral', type: 'p', body: 'Aplicação Django 5 com controle de acesso por perfil separando a experiência do cliente da interface administrativa. Clientes navegam produtos, montam cestas e acompanham compras; staff gerencia inventário e aprova cestas.' },
                    { heading: 'Recursos para Clientes', type: 'list', items: [ 'Registro e autenticação', 'Listagem de produtos com preço e data', 'Adicionar / remover produtos da cesta', 'Ajustar quantidades antes de enviar', 'Histórico de compras aprovadas' ]},
                    { heading: 'Recursos para Staff', type: 'list', items: [ 'Criar e editar produtos', 'Listar cestas pendentes', 'Aprovar ou negar cestas', 'Visualizar clientes e histórico', 'Supervisão administrativa total' ]},
                    { heading: 'Stack Tecnológico', type: 'list', items: [ 'Backend: Django 5.2.6 (Python 3.13)', 'Banco: SQLite3', 'Frontend: HTML + Bootstrap', 'Auth: sistema nativo Django', 'Ambiente: Virtualenv' ]},
                    { heading: 'Modelos Principais', type: 'pre', code: `class Product(models.Model):\n    name = models.CharField(max_length=120)\n    price = models.DecimalField(max_digits=10, decimal_places=2)\n    created_at = models.DateTimeField(auto_now_add=True)\n    updated_at = models.DateTimeField(auto_now=True)\n\nclass Basket(models.Model):\n    customer = models.ForeignKey(User, on_delete=models.CASCADE)\n    status = models.CharField(choices=[('pending','Pending'),('approved','Approved'),('denied','Denied')], max_length=20, default='pending')\n    reviewer = models.ForeignKey(User, related_name='reviewed', null=True, blank=True, on_delete=models.SET_NULL)\n    created_at = models.DateTimeField(auto_now_add=True)\n\nclass BasketItem(models.Model):\n    basket = models.ForeignKey(Basket, on_delete=models.CASCADE)\n    product = models.ForeignKey(Product, on_delete=models.CASCADE)\n    quantity = models.PositiveIntegerField(default=1)\n\nclass PurchaseHistory(models.Model):\n    basket = models.OneToOneField(Basket, on_delete=models.CASCADE)\n    purchased_at = models.DateTimeField(auto_now_add=True)` },
                    { heading: 'Estrutura do Projeto', type: 'pre', code: `grocery_store/\n├── manage.py\n├── grocery_store/ (settings, urls, wsgi)\n├── store/ (models, views, forms, admin, urls, migrations)\n├── templates/\n│   ├── registration/ (login, register)\n│   ├── customer/\n│   ├── products/\n│   └── staff/\n└── db.sqlite3` },
                    { heading: 'Instalação & Setup', type: 'list', items: [ 'git clone <repo>', 'cd grocery_store', 'python -m venv grocery_store_env', 'Ativar virtualenv', 'pip install django==5.2.6 sqlparse asgiref tzdata', 'python manage.py migrate', 'python manage.py createsuperuser (opcional)', 'python manage.py runserver' ]},
                    { heading: 'URLs', type: 'list', items: [ '/', '/register/', '/login/', '/logout/', '/products/', '/products/<id>/', '/add-to-basket/', '/basket/', '/purchase-history/', '/staff/products/add/', '/staff/products/<id>/update/', '/staff/baskets/', '/staff/baskets/<id>/review/', '/staff/customers/', '/staff/customers/<id>/' ]},
                    { heading: 'Fluxo de Uso', type: 'list', items: [ 'Cliente registra e faz login', 'Adiciona produtos na cesta e envia', 'Staff revisa cestas pendentes', 'Se aprovada → entra no histórico', 'Cliente acompanha compras passadas' ]},
                    { heading: 'Melhorias Futuras', type: 'list', items: [ 'Emails de aprovação de cesta', 'Paginação e busca de produtos', 'Migrar para Postgres em produção', 'Configuração Docker', 'API (DRF) para SPA ou mobile' ]}
                ]
            }
        }
                , 'inventory-system': {
                        repo: 'https://github.com/MatheusVGonzalez/InventorySysPY',
                        live: '',
                        tags: ['Python','CLI','File I/O','Persistence'],
                        en: {
                                title: 'Inventory Management System',
                                short: 'Python CLI to add, list, update, remove products and save inventory to file.',
                                sections: [
                                    { heading: 'Overview', type: 'p', body: 'Lightweight Python terminal application for managing a simple product inventory stored in memory and persisted to inventory.txt on exit.' },
                                    { heading: 'Features', type: 'list', items: [ 'Add products (name, category, brand, qty, price)', 'View full inventory listing', 'Update quantity or price', 'Remove products', 'Persist data to text file on exit' ]},
                                    { heading: 'Project Structure', type: 'pre', code: `inventory_system/\n├── main.py          # Entry point & menu loop\n├── inventory.txt    # Generated on exit (data persistence)\n└── README.md` },
                                    { heading: 'How to Run', type: 'list', items: [ 'git clone https://github.com/MatheusVGonzalez/inventory-system', 'cd inventory-system', 'python main.py', 'Choose menu options 1-5' ]},
                                    { heading: 'Example Usage', type: 'pre', code: `1. Add Item\n2. View Inventory\n3. Update Item\n4. Remove Item\n5. Exit\nSelect: 1\nName: Headset\nCategory: Electronics\nBrand: Razer\nQuantity: 2\nPrice: 699.99` },
                                    { heading: 'Notes', type: 'list', items: [ 'Data in memory until exit', 'Simple text serialization', 'No external dependencies', 'Easy to extend to JSON/SQLite/GUI' ]},
                                    { heading: 'Future Improvements', type: 'list', items: [ 'JSON or SQLite backend', 'Search & filter by category', 'Unit tests (pytest)', 'CSV export', 'Tkinter or Flask UI' ]}
                                ]
                        },
                        pt: {
                                title: 'Sistema de Inventário',
                                short: 'CLI em Python para adicionar, listar, atualizar e remover produtos salvando em arquivo.',
                                sections: [
                                    { heading: 'Visão Geral', type: 'p', body: 'Aplicação de terminal em Python para gerenciar um inventário simples. Mantém dados em memória e persiste em inventory.txt ao sair.' },
                                    { heading: 'Funcionalidades', type: 'list', items: [ 'Adicionar produtos (nome, categoria, marca, qtd, preço)', 'Listar inventário completo', 'Atualizar quantidade ou preço', 'Remover produtos', 'Persistir em arquivo texto ao sair' ]},
                                    { heading: 'Estrutura do Projeto', type: 'pre', code: `inventory_system/\n├── main.py          # Loop & menu principal\n├── inventory.txt    # Gerado ao sair (persistência)\n└── README.md` },
                                    { heading: 'Como Executar', type: 'list', items: [ 'git clone https://github.com/MatheusVGonzalez/inventory-system', 'cd inventory-system', 'python main.py', 'Usar opções 1-5' ]},
                                    { heading: 'Exemplo de Uso', type: 'pre', code: `1. Adicionar Item\n2. Ver Inventário\n3. Atualizar Item\n4. Remover Item\n5. Sair\nSeleção: 1\nNome: Headset\nCategoria: Eletrônicos\nMarca: Razer\nQuantidade: 2\nPreço: 699.99` },
                                    { heading: 'Notas', type: 'list', items: [ 'Dados em memória até sair', 'Serialização simples em texto', 'Sem dependências externas', 'Fácil evoluir para JSON/SQLite/GUI' ]},
                                    { heading: 'Melhorias Futuras', type: 'list', items: [ 'Backend JSON ou SQLite', 'Busca & filtro por categoria', 'Testes (pytest)', 'Exportar CSV', 'Interface Tkinter ou Flask' ]}
                                ]
                        }
                }
};

function openProjectModal(key) {
  const modal = document.getElementById('project-modal');
  if (!modal || !projectData[key]) return;
  const lang = document.documentElement.lang.startsWith('pt') ? 'pt' : 'en';
  const data = projectData[key][lang];
  modal.querySelector('.project-modal-title').textContent = data.title;
  modal.querySelector('.project-modal-description').textContent = data.short;
  const tagsEl = modal.querySelector('.project-modal-tags');
  tagsEl.innerHTML = '';
  projectData[key].tags.forEach(t => {
    const span = document.createElement('span');
    span.className = 'tech-tag';
    span.textContent = t;
    tagsEl.appendChild(span);
  });
  const sectionsEl = modal.querySelector('.project-modal-sections');
  sectionsEl.innerHTML = '';
  data.sections.forEach(sec => {
    const wrapper = document.createElement('div');
    wrapper.className = 'project-modal-section';
    const h = document.createElement('h4');
    h.textContent = sec.heading;
    wrapper.appendChild(h);
    if (sec.type === 'p') {
      const p = document.createElement('p');
      p.textContent = sec.body;
      wrapper.appendChild(p);
    } else if (sec.type === 'list') {
      const ul = document.createElement('ul');
      sec.items.forEach(item => { const li = document.createElement('li'); li.textContent = item; ul.appendChild(li); });
      wrapper.appendChild(ul);
    } else if (sec.type === 'pre') {
      const pre = document.createElement('pre');
      pre.textContent = sec.code;
      wrapper.appendChild(pre);
    }
    sectionsEl.appendChild(wrapper);
  });
  const repoLink = modal.querySelector('.project-modal-link.repo');
  repoLink.textContent = lang === 'pt' ? 'Código (GitHub)' : 'Source (GitHub)';
  repoLink.href = projectData[key].repo || '#';
  const liveLink = modal.querySelector('.project-modal-link.live');
  if (projectData[key].live) {
    liveLink.style.display = '';
    liveLink.textContent = lang === 'pt' ? 'Demo Ao Vivo' : 'Live Demo';
    liveLink.href = projectData[key].live;
  } else {
    liveLink.style.display = 'none';
  }
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  if (e.target.matches('[data-close]')) { closeProjectModal(); }
});

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectModal(); });

// Attach project card click
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');
  if (cards[0] && !cards[0].getAttribute('data-project')) cards[0].setAttribute('data-project', 'car-deals-cms');
  if (cards[1]) cards[1].setAttribute('data-project', 'crypto-dashboard');
    if (cards[2]) cards[2].setAttribute('data-project', 'word-shuffle');
  cards.forEach(card => {
    card.addEventListener('click', (evt) => {
      // Prevent triggering when clicking links
      if (evt.target.closest('a')) return;
      const key = card.getAttribute('data-project');
      if (key) openProjectModal(key);
    });
  });
});
