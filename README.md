# Portfolio – Matheus Gonzalez

Animated, bilingual portfolio built with HTML, CSS, and vanilla JavaScript. Cyber UI with GSAP intro, Matrix rain, particles, smooth animations, and an accessible UX.

## Highlights
- Bilingual (EN/PT) with instant i18n and persistence across pages (query param + localStorage)
- Multi-page: Home, dedicated About page, and extended Projects page with filters and modal details
- Hero focus on Salesforce + Full‑Stack with compact tech chips
- Accessible CV dropdown with 3 options: EN combined + 2 PT versions
- GSAP intro (3D laptop boot) and animated sections on scroll
- Project cards with video hover preview and detailed modal
- Responsive design, mobile nav, and floating contact button
- EmailJS-powered contact form
- Performance/SEO polish: lazy images, preload metadata for videos, rel=noopener, meta tags

## Getting Started
Open index.html in your browser. No build step required.

For local hosting, serve the folder with any static server.

## Structure
- index.html — Home (hero, experience, skills, education, featured projects, contact)
- about.html — Dedicated About page (bio, personal info, CTAs)
- projects.html — Extended Projects (filters, static cards + modal)
- style.css — Global styles and components (nav, hero, dropdowns, modals)
- script.js — Home behaviors: animations, i18n, CV menu, modal, link lang propagation
- about.js — About page i18n + dynamic age and lang propagation
- projects.js — Projects page i18n, filters, modal, link lang propagation
- assets/ — Images, icons, and videos
- resume.pdf — English resume (Salesforce + Web combined)
- curriculo.pdf — Portuguese resume (Web Dev)
- salesforce-cv-pt.pdf — Portuguese resume (Salesforce)

## Language Switching (EN/PT)
- Navbar language selector updates the page instantly
- The current language is stored in the URL (?lang=en|pt) and in localStorage
- Internal links are automatically rewritten to carry the current language, so navigation keeps the same locale
- All elements with data-i18n update without a full reload

## CV Download (Dropdown)
- In the hero, use the CV dropdown to choose one of the PDFs:
	- Resume — English (Salesforce + Web) → `resume.pdf`
	- Salesforce — Portuguese → `salesforce-cv-pt.pdf`
	- Web Developer — Portuguese → `curriculo.pdf`

## Contact Form
- EmailJS integration; update your service/template IDs in `index.html` if needed

## Accessibility & UX
- Keyboard support for menus and modals (ESC closes)
- Focus outlines for interactive elements
- Readable language dropdown on dark theme
- External links use rel="noopener"

## Notes
- GSAP and Lucide icons are loaded via CDN
- Adjust content and translations in `script.js`, `about.js`, and `projects.js`
