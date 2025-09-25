# Portfolio Page – Matheus Gonzalez

Modern, animated personal portfolio built with HTML, CSS and vanilla JavaScript. Designed to impress with cyber/3D visuals, GSAP intro, Matrix rain, interactive particles, and smooth scroll animations.

## Highlights
- GSAP-powered intro with 3D laptop boot overlay
- Cyber Matrix rain background and particles
- Responsive layout and mobile navigation
- Skills bars with animated percentage and neon theme
- Language switcher (EN/PT) with instant i18n updates
- Floating contact button and easy-to-find contact info
- EmailJS integration for the contact form
- Downloadable resume per language (curriculo.pdf / resume.pdf)

## Getting Started
Open index.html in a browser. No build is required.

If hosting locally with a static server, place all files in the web root.

## Project Structure
- index.html – Page content and sections
- style.css – Styles and responsive rules
- script.js – Animations, i18n, effects, and interactions
- assets/ – Icons and images
- curriculo.pdf – Resume (Portuguese)
- resume.pdf – Resume (English)

## Language Switching
- Use the 🇧🇷 or 🇺🇸 buttons in the navbar
- URL param ?lang=pt or ?lang=en is set without reload
- All elements with data-i18n update instantly

## Download Resume
- Button: "Download CV" in the Hero section
- Downloads resume.pdf for EN and curriculo.pdf for PT automatically

## Contact Form
- EmailJS is used; update keys in index.html if needed

## Teacher Requirements Mapping
1. Contact info: Contact section with email, location, and floating FAB
2. Bio/About: About section with description and stats
3. Relevant experience: Experience timeline with roles and dates
4. Context: Each role includes description, tech stack, and timing; projects include descriptions and tech
5. Relevant skills: Skills section with animated bars
6. Personal projects: Featured Projects section
7. Documented source code: This README and commented script.js
8. Education: Education & Certifications section
9. Social profiles: GitHub / LinkedIn / Instagram links
10. Awards/recognition: Education cards include awards and achievements
11. Your photo: Hero profile image
12. Downloadable resume: Download CV button wired

## Notes
- This site uses GSAP and Lucide via CDN
- Adjust content and data-i18n strings as needed in script.js
