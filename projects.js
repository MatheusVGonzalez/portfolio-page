// Extended Projects Page Logic

// Minimal i18n subset reuse (fallback to main site keys if needed)
const projectsI18n = {
  en: {
    'projects.viewAll': 'VIEW ALL PROJECTS',
    'projects.extendedSubtitle': 'Explore a broader collection of experiments, full-stack builds, study projects and prototypes.',
    'filter.all': 'All',
    'filter.fullstack': 'Full Stack',
    'filter.frontend': 'Frontend',
    'filter.backend': 'Backend',
    'filter.salesforce': 'Salesforce',
    'filter.experiments': 'Experiments'
  },
  pt: {
    'projects.viewAll': 'VER TODOS OS PROJETOS',
    'projects.extendedSubtitle': 'Explore uma coleção maior de experimentos, builds full-stack, projetos de estudo e protótipos.',
    'filter.all': 'Todos',
    'filter.fullstack': 'Full Stack',
    'filter.frontend': 'Frontend',
    'filter.backend': 'Backend',
    'filter.salesforce': 'Salesforce',
    'filter.experiments': 'Experimentos'
  }
};

// Master list of projects (add more easily)
const allProjects = [
  {
    key: 'car-deals-cms',
    title: 'CarDeals CMS',
    type: 'fullstack',
    tags: ['PHP','MySQL','Security'],
    img: 'assets/projeto1.png',
    video: 'assets/projeto1.mp4',
    desc: {
      en: 'CMS for car dealerships with RBAC, inventory CRUD, purchase flow and audit logs.',
      pt: 'CMS para concessionárias com controle de acesso, CRUD de carros, fluxo de compra e auditoria.'
    }
  },
  {
    key: 'crypto-dashboard',
    title: 'CryptoDashboard',
    type: 'fullstack',
    tags: ['React','Node','API'],
    img: 'assets/projeto2.png',
    video: 'assets/projeto2.mp4',
    desc: {
      en: 'Real-time crypto prices, charts, auth, virtual balance & news integration.',
      pt: 'Preços de cripto em tempo real, gráficos, autenticação, saldo virtual e notícias.'
    }
  },
  {
    key: 'word-shuffle',
    title: 'Word Shuffle',
    type: 'salesforce',
    tags: ['Apex','Aura','Events'],
    img: 'assets/projeto3.png',
    video: 'assets/projeto3.mp4',
    desc: {
      en: 'Salesforce Lightning word puzzle with difficulty modes and game history.',
      pt: 'Jogo de palavras Lightning com modos de dificuldade e histórico de partidas.'
    }
  },
  // Placeholder additional examples
  {
    key: 'portfolio-v1',
    title: 'Portfolio v1',
    type: 'frontend',
    tags: ['HTML','CSS','JS'],
    img: 'assets/projeto1.png',
    video: '',
    desc: {
      en: 'First iteration of my personal portfolio with basic animations.',
      pt: 'Primeira versão do meu portfólio com animações básicas.'
    }
  },
  {
    key: 'api-microservice',
    title: 'API Microservice',
    type: 'backend',
    tags: ['Node','Express','REST'],
    img: 'assets/projeto2.png',
    video: '',
    desc: {
      en: 'Lightweight REST microservice with caching & rate limiting.',
      pt: 'Microserviço REST leve com cache e rate limiting.'
    }
  }
];

const filtersOrder = ['filter.all','filter.fullstack','filter.frontend','filter.backend','filter.salesforce','filter.experiments'];

function getLang(){
  const param = new URLSearchParams(window.location.search).get('lang');
  const htmlLang = document.documentElement.lang.startsWith('pt') ? 'pt':'en';
  return param || htmlLang || 'en';
}

function applyProjectsTranslations(lang){
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = projectsI18n[lang] && projectsI18n[lang][key];
    if (val) el.textContent = val;
  });
}

function buildFilters(lang){
  const container = document.getElementById('projectsFilters');
  if (!container) return;
  container.innerHTML='';
  filtersOrder.forEach(key => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = key.split('.')[1]; // after 'filter.'
    btn.setAttribute('data-i18n', key);
    btn.textContent = projectsI18n[lang][key];
    container.appendChild(btn);
  });
  // Activate first
  const first = container.querySelector('.filter-btn');
  if (first) first.classList.add('active');
}

function filteredProjects(filter){
  if (!filter || filter === 'all') return allProjects;
  if (filter === 'experiments') return allProjects.filter(p => p.type === 'experiments');
  return allProjects.filter(p => p.type === filter);
}

function createProjectCard(p, lang){
  const card = document.createElement('div');
  card.className = 'project-card large';
  card.setAttribute('data-project', p.key);
  card.innerHTML = `
    <div class="project-image">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      ${p.video ? `<video class='project-video' muted preload='metadata' src='${p.video}'></video>`: ''}
      <div class="project-overlay">
        <div class="project-content">
          <h3 class="project-title">${p.title}</h3>
          <p class="project-description">${p.desc[lang]}</p>
          <div class="project-tech">${p.tags.map(t=>`<span class='tech-tag'>${t}</span>`).join('')}</div>
        </div>
      </div>
    </div>`;
  // Hover preview
  const video = card.querySelector('video.project-video');
  if (video) {
    let hoverTimer;
    card.addEventListener('mouseenter', () => {
      // small delay to avoid accidental flicker
      hoverTimer = setTimeout(() => {
        card.classList.add('previewing');
        try { video.currentTime = 0; } catch(e) {}
        const playPromise = video.play();
        if (playPromise) playPromise.catch(()=>{});
      }, 120);
    });
    card.addEventListener('mouseleave', () => {
      clearTimeout(hoverTimer);
      card.classList.remove('previewing');
      try { video.pause(); } catch(e) {}
    });
    video.addEventListener('error', () => {
      card.classList.remove('previewing');
      // ensure image is visible
      const img = card.querySelector('img');
      if (img) img.style.visibility = 'visible';
    });
  }
  card.addEventListener('click', () => {
    // Navigate back to main page with hash & query to open modal? Could implement later.
    window.location.href = `index.html#projects`;
  });
  return card;
}

function renderProjects(filter){
  const lang = getLang();
  const grid = document.getElementById('allProjectsGrid');
  if (!grid) return;
  grid.innerHTML='';
  filteredProjects(filter).forEach(p => grid.appendChild(createProjectCard(p, lang)));
}

function initExtendedProjects(){
  const lang = getLang();
  applyProjectsTranslations(lang);
  buildFilters(lang);
  renderProjects('all');
  document.getElementById('yearSpan').textContent = new Date().getFullYear();
  document.getElementById('projectsFilters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
  // Language buttons
  document.getElementById('lang-pt').addEventListener('click', ()=>switchLang('pt'));
  document.getElementById('lang-en').addEventListener('click', ()=>switchLang('en'));
}

function switchLang(lang){
  const params = new URLSearchParams(window.location.search);
  params.set('lang', lang);
  const newUrl = window.location.pathname + '?' + params.toString();
  window.history.replaceState({}, '', newUrl);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR':'en';
  applyProjectsTranslations(lang);
  // re-render projects to update descriptions
  renderProjects(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
}

document.addEventListener('DOMContentLoaded', initExtendedProjects);
