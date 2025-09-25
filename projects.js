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
  {
    key: 'dog-memory-game',
    title: 'Dog Memory Adventure',
    type: 'frontend',
    tags: ['HTML','CSS','JS'],
    img: 'assets/projeto4.png',
    video: 'assets/projeto4.mp4',
    desc: {
      en: 'Memory card game with levels, dog health system and animated progression.',
      pt: 'Jogo da memória com níveis, sistema de vidas do cachorro e progressão animada.'
    }
  },
  {
    key: 'dream-car-site',
    title: 'Dream Car Website',
    type: 'frontend',
    tags: ['HTML5','CSS3','Responsive'],
    img: 'assets/projeto5.png',
    video: 'assets/projeto5.mp4',
    desc: {
      en: 'Responsive multi-page dream car showcase (customization, gallery, FAQ, contact).',
      pt: 'Site responsivo multi-páginas do carro dos sonhos (customização, galeria, FAQ, contato).'
    }
  },
  {
    key: 'grocery-store-system',
    title: 'Grocery Store Management',
    type: 'fullstack',
    tags: ['Django','SQLite','Bootstrap'],
    img: 'assets/projeto6.png',
    video: 'assets/projeto6.mp4',
    desc: {
      en: 'Django app with customer baskets, staff product management and approval workflow.',
      pt: 'Aplicação Django com cestas de clientes, gestão de produtos e fluxo de aprovação.'
    }
  },
  {
    key: 'inventory-system',
    title: 'Inventory Management System',
    type: 'backend',
    tags: ['Python','CLI','File I/O'],
    img: 'assets/projeto7.png',
    video: 'assets/projeto7.mp4',
    desc: {
      en: 'Python CLI app to manage inventory (add, view, update, remove, save to file).',
      pt: 'Aplicação CLI em Python para gerenciar inventário (adicionar, listar, atualizar, remover, salvar em arquivo).'
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
      short: 'Python terminal app to add, list, update, remove products and persist inventory to a text file.',
      sections: [
        { heading: 'Overview', type: 'p', body: 'A lightweight Python CLI application for managing a simple product inventory. Data lives in memory during runtime and is saved to inventory.txt when exiting.' },
        { heading: 'Features', type: 'list', items: [
          'Add new products (name, category, brand, quantity, price)',
          'View full inventory in a formatted list',
          'Update product quantity or price',
          'Remove products by name/id',
          'Persist data to inventory.txt on exit'
        ]},
        { heading: 'Project Structure', type: 'pre', code: `inventory_system/\n├── main.py          # Core program loop & menu\n├── inventory.txt    # Saved data after exit (auto-created)\n└── README.md` },
        { heading: 'How to Run', type: 'list', items: [
          'git clone https://github.com/MatheusVGonzalez/inventory-system',
          'cd inventory-system',
          'python main.py',
          'Use menu options 1–5'
        ]},
        { heading: 'Example Menu', type: 'pre', code: `1. Add Item\n2. View Inventory\n3. Update Item\n4. Remove Item\n5. Exit\nSelect an option: 1\nEnter Product Name: Headset\nEnter Category (Electronics, Home, Office): Electronics\nEnter Brand Name: Razer\nEnter Quantity: 2\nEnter Price: 699.99` },
        { heading: 'Notes', type: 'list', items: [
          'In-memory store until option 5 (Exit)',
          'Writes plain text file (simple parsing)',
          'Designed for quick extension (JSON / SQLite)',
          'No external dependencies'
        ]},
        { heading: 'Future Improvements', type: 'list', items: [
          'Switch to JSON or SQLite persistence',
          'Add search & category filters',
          'Unit tests (pytest)',
          'Export to CSV',
          'Add simple GUI (Tkinter) or web UI (Flask)'
        ]}
      ]
    },
    pt: {
      title: 'Sistema de Inventário',
      short: 'Aplicação de terminal em Python para adicionar, listar, atualizar e remover produtos salvando em arquivo.',
      sections: [
        { heading: 'Visão Geral', type: 'p', body: 'Aplicação CLI em Python para gerenciar um inventário simples de produtos. Os dados ficam em memória durante a execução e são salvos em inventory.txt ao sair.' },
        { heading: 'Funcionalidades', type: 'list', items: [
          'Adicionar produtos (nome, categoria, marca, quantidade, preço)',
          'Listar inventário completo',
          'Atualizar quantidade ou preço',
          'Remover produtos por nome/id',
          'Persistir dados em inventory.txt ao sair'
        ]},
        { heading: 'Estrutura do Projeto', type: 'pre', code: `inventory_system/\n├── main.py          # Loop principal & menu\n├── inventory.txt    # Dados salvos (gerado ao sair)\n└── README.md` },
        { heading: 'Como Executar', type: 'list', items: [
          'git clone https://github.com/MatheusVGonzalez/inventory-system',
          'cd inventory-system',
          'python main.py',
          'Usar opções 1–5 no menu'
        ]},
        { heading: 'Exemplo de Menu', type: 'pre', code: `1. Adicionar Item\n2. Ver Inventário\n3. Atualizar Item\n4. Remover Item\n5. Sair\nSelecione: 1\nNome: Headset\nCategoria (Eletrônicos, Casa, Escritório): Eletrônicos\nMarca: Razer\nQuantidade: 2\nPreço: 699.99` },
        { heading: 'Notas', type: 'list', items: [
          'Armazenamento em memória até escolher Sair (5)',
          'Grava arquivo texto simples',
          'Pronto para evoluir para JSON / SQLite',
          'Sem dependências externas'
        ]},
        { heading: 'Melhorias Futuras', type: 'list', items: [
          'Migrar para JSON ou SQLite',
          'Adicionar busca e filtros por categoria',
          'Criar testes (pytest)',
          'Exportar para CSV',
          'Adicionar GUI (Tkinter) ou interface web (Flask)'
        ]}
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
