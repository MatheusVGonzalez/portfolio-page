// Extended Projects Page Logic

// Minimal i18n subset reuse (fallback to main site keys if needed)
const projectsI18n = {
  en: {
    'projects.viewAll': 'VIEW ALL PROJECTS',
    'projects.extendedSubtitle': 'Explore a broader collection of experiments, full-stack builds, study projects and prototypes.',
    'projects.source': 'Source (GitHub)',
    'projects.live': 'Live Demo',
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
    'projects.source': 'Código (GitHub)',
    'projects.live': 'Demo Ao Vivo',
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

// Detailed project data (mirrors main page). Add more as needed.
const projectData = {
  'car-deals-cms': {
    repo: 'https://github.com/MatheusVGonzalez/Car-Deals-',
    live: '',
    tags: ['PHP','MySQL','MVC','Security'],
    en: {
      title: 'CarDeals CMS',
      short: 'Secure CMS with role-based access, car inventory CRUD, purchase flow and auditing.',
      sections: [
        { heading: 'Overview', type: 'p', body: 'A lightweight PHP/MySQL CMS for dealerships enabling user roles, car inventory management and tracked purchase requests.' },
        { heading: 'Features', type: 'list', items: ['Role-based access','Password hashing','Car CRUD + uploads','Purchase flow','Audit log','Prepared statements','Responsive UI']}
      ]
    },
    pt: {
      title: 'CarDeals CMS',
      short: 'CMS seguro com papéis, CRUD de carros, fluxo de compra e auditoria.',
      sections: [
        { heading: 'Visão Geral', type: 'p', body: 'Sistema PHP/MySQL para concessionárias com papéis de usuário, gestão de carros e controle de ações.' },
        { heading: 'Funcionalidades', type: 'list', items: ['Acesso por papéis','Hash de senhas','CRUD de carros + upload','Fluxo de compra','Log de auditoria','Prepared statements','Interface responsiva']}
      ]
    }
  },
  'crypto-dashboard': {
    repo: 'https://github.com/yourusername/cryptodashboard',
    live: '',
    tags: ['React','Node.js','API','Chart.js'],
    en: { title:'CryptoDashboard', short:'Crypto tracker with auth, charts and news.', sections:[ { heading:'Overview', type:'p', body:'Full-stack app for tracking coins, charts, virtual balance and news aggregation.' } ] },
    pt: { title:'CryptoDashboard', short:'Rastreamento de criptos com auth, gráficos e notícias.', sections:[ { heading:'Visão Geral', type:'p', body:'Aplicação full-stack para acompanhar moedas, gráficos, saldo virtual e notícias.' } ] }
  },
  'word-shuffle': {
    repo: 'https://github.com/yourusername/word-shuffle-salesforce',
    live: '',
    tags: ['Salesforce','Apex','Aura','Events'],
    en: { title:'Word Shuffle', short:'Salesforce Lightning word puzzle with difficulty modes and history.', sections:[ { heading:'Overview', type:'p', body:'Aura component game embedded in Service App: guess the shuffled word within limited attempts.' } ] },
    pt: { title:'Word Shuffle', short:'Jogo Lightning com modos e histórico.', sections:[ { heading:'Visão Geral', type:'p', body:'Componente Aura no Service App: descubra a palavra embaralhada em tentativas limitadas.' } ] }
  }
};

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
      ${p.video ? `<video class='project-video' muted playsinline preload='auto' src='${p.video}'></video>`: ''}
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
    openProjectModal(p.key);
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
  // If static cards exist (matching index format) we skip dynamic rendering
  const staticCards = document.querySelectorAll('#allProjectsGrid .project-card');
  if (staticCards.length > 0){
    // Attach hover video behavior similar to index (play on hover, pause on leave)
    staticCards.forEach(card => {
      const video = card.querySelector('video.project-video');
      if (video){
        video.muted = true; // ensure autoplay allowed
        card.addEventListener('mouseenter', ()=>{ 
          try { 
            card.classList.add('previewing');
            video.currentTime = 0; 
              video.style.display = 'block';
            const p = video.play(); 
            if (p) p.catch(()=>{ /* ignore */ }); 
          } catch(e){} 
        });
        card.addEventListener('mouseleave', ()=>{ 
          try { 
            video.pause(); 
            video.currentTime = 0; 
              video.style.display = 'none';
            card.classList.remove('previewing');
          } catch(e){} 
        });
      }
      // Modal open on click (ignore direct link clicks)
      card.addEventListener('click', (e)=>{
        if (e.target.closest('a')) return; // allow link navigation
        const key = card.getAttribute('data-project');
        if (key) openProjectModal(key);
      });
    });
    // Hide filters toolbar since not needed in static mode
    const filtersBar = document.getElementById('projectsFilters');
    if (filtersBar) filtersBar.style.display = 'none';
  } else {
    // Fallback dynamic rendering (if user removes static markup)
    buildFilters(lang);
    renderProjects('all');
    // Attach filter click handler only in dynamic mode
    document.getElementById('projectsFilters').addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  }
  const yearEl = document.getElementById('yearSpan');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  // Language buttons
  document.getElementById('lang-pt').addEventListener('click', ()=>switchLang('pt'));
  document.getElementById('lang-en').addEventListener('click', ()=>switchLang('en'));

  // Close handlers
  document.addEventListener('click', (e)=>{ if(e.target.matches('[data-close]')) closeProjectModal(); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeProjectModal(); });
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
  // If modal is open, refresh its content
  const modal = document.getElementById('project-modal');
  if (modal && modal.classList.contains('active')) {
    const currentKey = modal.getAttribute('data-current-project');
    if (currentKey) openProjectModal(currentKey);
  }
}

// Modal logic (similar to index)
function openProjectModal(key){
  const modal = document.getElementById('project-modal');
  if (!modal || !projectData[key]) return;
  const lang = getLang();
  const data = projectData[key][lang];
  modal.setAttribute('data-current-project', key);
  modal.querySelector('.project-modal-title').textContent = data.title;
  modal.querySelector('.project-modal-description').textContent = data.short;
  const tagsEl = modal.querySelector('.project-modal-tags');
  tagsEl.innerHTML='';
  projectData[key].tags.forEach(t=>{ const span=document.createElement('span'); span.className='tech-tag'; span.textContent=t; tagsEl.appendChild(span); });
  const sectionsEl = modal.querySelector('.project-modal-sections');
  sectionsEl.innerHTML='';
  data.sections.forEach(sec => {
    const wrap = document.createElement('div'); wrap.className='project-modal-section';
    const h = document.createElement('h4'); h.textContent = sec.heading; wrap.appendChild(h);
    if (sec.type==='p'){ const p=document.createElement('p'); p.textContent=sec.body; wrap.appendChild(p);} else if(sec.type==='list'){ const ul=document.createElement('ul'); sec.items.forEach(i=>{ const li=document.createElement('li'); li.textContent=i; ul.appendChild(li); }); wrap.appendChild(ul);} else if(sec.type==='pre'){ const pre=document.createElement('pre'); pre.textContent=sec.code; wrap.appendChild(pre);} 
    sectionsEl.appendChild(wrap);
  });
  const repoLink = modal.querySelector('.project-modal-link.repo');
  repoLink.textContent = projectsI18n[lang]['projects.source'];
  repoLink.href = projectData[key].repo || '#';
  const liveLink = modal.querySelector('.project-modal-link.live');
  if (projectData[key].live){
    liveLink.style.display='';
    liveLink.textContent = projectsI18n[lang]['projects.live'];
    liveLink.href = projectData[key].live;
  } else { liveLink.style.display='none'; }
  modal.classList.add('active');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}

function closeProjectModal(){
  const modal = document.getElementById('project-modal');
  if(!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

document.addEventListener('DOMContentLoaded', initExtendedProjects);
