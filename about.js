// Simple i18n for the About page + dynamic age
(function(){
  const dict = {
    pt: {
      'nav.home': 'Home',
      'nav.about': 'Sobre',
      'nav.experience': 'Experiências',
      'nav.skills': 'Habilidades',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contato',
      'aboutPage.title': 'Um pouco mais sobre mim',
      'aboutPage.subtitle': '',
      'aboutPage.sectionHeading': 'Quem eu sou',
      'aboutPage.info.nameLabel': 'Nome',
      'aboutPage.info.ageLabel': 'Idade',
      'aboutPage.info.cityLabel': 'Cidade',
      'aboutPage.info.cityValue': 'São José dos Campos, Brasil',
      'aboutPage.info.emailLabel': 'Email',
      'aboutPage.info.linkedinLabel': 'LinkedIn',
      'aboutPage.bio1': 'Meu nome é Matheus Verissimo Gonzalez, tenho 18 anos e moro em São José dos Campos, SP. Sempre gostei de tecnologia. Quando eu era criança, já criava aplicativos com o MIT App Inventor, e desde então sempre me interessei muito. Na UNIVAP, cursei ensino médio técnico em Informática, tive contato com programação web, bancos de dados, redes, hardware, computação gráfica e POO, além de participar de maratonas de programação e feiras técnicas, onde aprendi a trabalhar em equipe e a utilidade do Git.',
      'aboutPage.bio2': 'Tive a oportunidade de morar 7 meses em Vancouver, no Canadá, onde conclui um diploma em Web Development. Lá, aprofundei minhas habilidades em front-end (HTML, CSS, JavaScript, React, Vue, Tailwind) e back-end (Node.js, Django, PHP, APIs REST, bancos de dados), além de aprender metodologias ágeis como Scrum e alcançar fluência no inglês.Tive a oportunidade de morar 7 meses em Vancouver, no Canadá, onde conclui um diploma em Web Development. Lá, aprofundei minhas habilidades em front-end (HTML, CSS, JavaScript, React, Vue, Tailwind) e back-end (Node.js, Django, PHP, APIs REST, bancos de dados), além de aprender metodologias ágeis como Scrum e alcançar fluência no inglês.',
      'aboutPage.ctaProjects': 'Ver projetos',
      'aboutPage.ctaContact': 'Falar comigo',
      'aboutPage.ctaLinkedIn': 'LinkedIn'
    },
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.experience': 'Experiences',
      'nav.skills': 'Skills',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'aboutPage.title': 'A little more about me',
      'aboutPage.subtitle': 'Here you can find some personal information, a brief overview of my journey and how to reach me.',
      'aboutPage.sectionHeading': 'Who I am',
      'aboutPage.info.nameLabel': 'Name',
      'aboutPage.info.ageLabel': 'Age',
      'aboutPage.info.cityLabel': 'City',
      'aboutPage.info.cityValue': 'São José dos Campos, Brazil',
      'aboutPage.info.emailLabel': 'Email',
      'aboutPage.info.linkedinLabel': 'LinkedIn',
      'aboutPage.bio1': 'My name is Matheus Verissimo Gonzalez, I am 18 years old and I live in São José dos Campos, SP. I have always liked technology. When I was a child, I used to create applications with MIT App Inventor, and since then I have always been very interested. At UNIVAP, I completed a technical high school in Informatics, where I had contact with web programming, databases, networks, hardware, computer graphics, and OOP, in addition to participating in programming marathons and technical fairs, where I learned how to work in a team and the usefulness of Git.',
      'aboutPage.bio2': 'I had the opportunity to live for 7 months in Vancouver, Canada, where I completed a diploma in Web Development. There, I deepened my skills in front-end (HTML, CSS, JavaScript, React, Vue, Tailwind) and back-end (Node.js, Django, PHP, REST APIs, databases), as well as learning agile methodologies such as Scrum and achieving fluency in English.',
      'aboutPage.bio3': 'In addition, I work within the Salesforce ecosystem, where I hold the Platform Foundations certification and I am preparing for the Platform Developer I. I also completed the full Salesforce development course on Udemy, with more than 15 practical projects. I have experience with Apex, SOQL, Lightning Web Components (LWC), Flow Builder, and Service Cloud, applying best practices such as bulkification, unit testing, and attention to Governor Limits. On Trailhead, I have already earned more than 30 badges and 25,000 points.',
      'aboutPage.bio4': 'Today, I am a full-stack developer with hands-on experience in large and innovative projects using APIs. I am seeking opportunities both as a Salesforce Developer, applying my knowledge on the platform, and as a Full-Stack Developer, leveraging my solid background in front-end, back-end, and integrations to deliver complete and scalable solutions.',     
      'aboutPage.ctaProjects': 'See projects',
      'aboutPage.ctaContact': 'Contact me',
      'aboutPage.ctaLinkedIn': 'LinkedIn'
    }
  };

  function apply(lang) {
    const d = dict[lang] || dict.pt;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (d[key]) el.textContent = d[key];
    });
  }

  function setLang(lang){
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
    apply(lang);
  }

  function initAge(){
    const el = document.getElementById('ageValue');
    if(!el) return;
    const birth = el.getAttribute('data-birthdate');
    if(!birth) return;
    const b = new Date(birth);
    if(isNaN(b.getTime())) return;
    const today = new Date();
    let age = today.getFullYear() - b.getFullYear();
    const m = today.getMonth() - b.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < b.getDate())) age--;
    el.textContent = String(age);
  }


  document.addEventListener('DOMContentLoaded', () => {
    // Lang from query param or default to pt
    const params = new URLSearchParams(window.location.search);
    const lang = params.get('lang') || 'pt';
    apply(lang);

    // Language select (dropdown)
    const select = document.getElementById('lang-select');
    if (select) {
      select.value = lang;
      select.addEventListener('change', (e) => setLang(e.target.value));
    }

    const ptBtn = document.getElementById('lang-pt');
    const enBtn = document.getElementById('lang-en');
    if(ptBtn) ptBtn.addEventListener('click', () => setLang('pt'));
    if(enBtn) enBtn.addEventListener('click', () => setLang('en'));

    // Fill current year in footer
    const yearSpan = document.getElementById('yearSpan');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    initAge();
  });
})();
