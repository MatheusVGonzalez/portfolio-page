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
  // Expanded detailed data (mirrors main page richness)
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
  },
  'word-shuffle': {
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
  card.className = 'project-card large generated';
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
  const staticMode = document.querySelectorAll('#allProjectsGrid .project-card').length > 0 && !document.querySelector('#allProjectsGrid .project-card.generated');
  if (staticMode){
    updateStaticCardsLanguage(lang);
  } else {
    renderProjects(document.querySelector('.filter-btn.active')?.dataset.filter || 'all');
  }
  // Refresh modal content if open
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

// Update static cards language (title + short description) without re-rendering DOM
function updateStaticCardsLanguage(lang){
  document.querySelectorAll('#allProjectsGrid .project-card').forEach(card => {
    const key = card.getAttribute('data-project');
    if (!key || !projectData[key]) return;
    const data = projectData[key][lang];
    if (data){
      const titleEl = card.querySelector('.project-title');
      const descEl = card.querySelector('.project-description');
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.short;
    }
  });
}

document.addEventListener('DOMContentLoaded', initExtendedProjects);
