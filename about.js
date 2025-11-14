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
      'aboutPage.bio1': 'Meu nome é Matheus Verissimo Gonzalez, tenho 18 anos e sou Desenvolvedor e Consultor Salesforce. Atualmente moro em São José dos Campos, SP, e sempre fui apaixonado por tecnologia. Desde criança criava aplicativos no MIT App Inventor, o que despertou meu interesse por programação. Durante o ensino médio técnico em Informática na UNIVAP, tive contato com desenvolvimento web, bancos de dados, redes, hardware, computação gráfica e POO, além de participar de maratonas de programação e feiras técnicas, onde aprendi a trabalhar em equipe e usar Git na prática. Hoje, sigo minha carreira focada no ecossistema Salesforce.',
      'aboutPage.bio2': 'Atualmente atuo na C3C Software como Consultor e Desenvolvedor Salesforce, trabalhando com Apex, SOQL, Triggers, Lightning Web Components (LWC), Flow Builder, integrações REST e modelagem de dados. Contribuo com automações, desenvolvimento de componentes reutilizáveis, implementação de regras de negócio, análise de requisitos e integração de sistemas, sempre seguindo boas práticas como bulkification, Governor Limits e testes unitários. Sou certificado em Salesforce Platform Foundations, Trailhead Ranger (50.000+ pontos, 100+ badges e 5+ superbadges) e estou em preparação para a certificação Platform Developer I.',
  'aboutPage.bio3': 'Antes de ingressar no ecossistema Salesforce, desenvolvi 1+ anos de experiência profissional em full-stack developer. Morei 7 meses em Vancouver, no Canadá, onde concluí um diploma em Web Development, aprimorando minhas habilidades em front-end (HTML, CSS, JavaScript, React, Vue, Tailwind) e back-end (Node.js, Django, PHP, APIs REST, bancos de dados), além de aprender metodologias ágeis como Scrum e alcançar fluência em inglês. Essa base técnica em desenvolvimento web complementa meu trabalho atual, me permitindo construir soluções mais completas, escaláveis e bem estruturadas dentro da plataforma Salesforce.',
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
      'aboutPage.bio1': 'My name is Matheus Verissimo Gonzalez, I am 18 years old and a Salesforce Developer & Consultant. I currently live in São José dos Campos, Brazil, and I’ve always been passionate about technology. As a kid, I built apps using MIT App Inventor, which sparked my interest in programming. During my technical high school program in Informatics at UNIVAP, I worked with web development, databases, networking, hardware, graphics, and OOP. I also participated in programming competitions and technical fairs, where I learned teamwork and the importance of version control using Git. Today, my career is focused on the Salesforce ecosystem.',
      'aboutPage.bio2': 'I currently work at C3C Software as a Salesforce Consultant and Developer, working with Apex, SOQL, Triggers, Lightning Web Components (LWC), Flow Builder, REST integrations, and data modeling. I contribute to process automation, reusable component development, business logic implementation, requirement analysis, and system integrations—always following best practices such as bulkification, Governor Limits, and unit testing. I am Salesforce Platform Foundations certified, a Trailhead Ranger (50,000+ points, 100+ badges, and 5+ superbadges), and currently preparing for the Platform Developer I certification.',
  'aboutPage.bio3': 'Before specializing in Salesforce, I built a solid background in full-stack development. I lived for 7 months in Vancouver, Canada, where I completed a Web Development diploma and improved my skills in front-end (HTML, CSS, JavaScript, React, Vue, Tailwind) and back-end (Node.js, Django, PHP, REST APIs, databases), as well as agile methodologies such as Scrum. This experience also helped me achieve fluency in English. My full-stack foundation strengthens my work in the Salesforce ecosystem, allowing me to build more complete, scalable, and well-structured solutions.',     
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
    try { localStorage.setItem('lang', lang); } catch(_) {}
    apply(lang);
    updateLinksWithLang(lang);
  }

  function updateLinksWithLang(lang){
    const anchors = document.querySelectorAll('a[href]');
    anchors.forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      if (href.startsWith('#')) return;
      if (!href.includes('.html')) return;
      const [pathAndQuery, hash] = href.split('#');
      const [path, query] = pathAndQuery.split('?');
      const params = new URLSearchParams(query || '');
      params.set('lang', lang);
      const newHref = `${path}?${params.toString()}${hash ? `#${hash}` : ''}`;
      a.setAttribute('href', newHref);
    });
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
  // Lang from query param, else localStorage, else default 'en'
  const params = new URLSearchParams(window.location.search);
  let lang = params.get('lang');
  if (!lang) { try { lang = localStorage.getItem('lang'); } catch(_) {} }
  if (!lang) lang = 'en';
    apply(lang);
  updateLinksWithLang(lang);

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
