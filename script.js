// Базовые демо-вакансии. Загружаются в LocalStorage только ОДИН раз
const DEFAULT_JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Kaspi.kz',
    employerEmail: 'kaspi@mail.com',
    logo: 'KZ',
    location: 'Алматы',
    address: 'Алматы, проспект Назарбаева, 240',
    type: 'full',
    remote: false,
    salary: 'от 600 000 ₸',
    salaryDetails: 'от 600 000 до 1 000 000 ₸ за месяц, на руки',
    date: 'Сегодня',
    badges: ['new','hot'],
    color: '#C8FA5A',
    category: 'IT',
    description: 'Разработка и оптимизация ключевых сервисов. Работа со стеком JS/TS.',
    details: {
      payout: '2 раза в месяц',
      experience: '3-6 лет',
      employment: 'Полная занятость',
      contract: 'Трудовой договор',
      schedule: '5/2',
      hours: 'Гибкое начало дня',
      format: 'Офис или гибрид',
      views: 18,
      published: 'Вакансия опубликована 6 июня 2026 в Алматы',
      intro: [
        'Продуктовая команда развивает клиентские сервисы WorkHunt и внутренние инструменты.',
        'Нужен разработчик, который любит чистый интерфейс, понятную архитектуру и быстрые релизы.'
      ],
      offers: [
        'Работа над высоконагруженными пользовательскими интерфейсами',
        'Современный стек: JavaScript, TypeScript, React',
        'Ежемесячные выплаты и прозрачная система грейдов',
        'Гибкий график и возможность гибридного формата',
        'Сильная команда разработки и дизайн-система',
        'Оплата обучения и участие в профильных конференциях'
      ],
      duties: [
        'Разработка новых экранов и компонентов',
        'Оптимизация производительности клиентской части',
        'Участие в проектировании архитектуры фронтенда',
        'Взаимодействие с дизайнерами, аналитиками и backend-командой'
      ]
    }
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Kolesa Group',
    employerEmail: 'kolesa@mail.com',
    logo: 'KG',
    location: 'Алматы / Remote',
    address: 'Алматы, улица Шевченко, 165Б',
    type: 'remote',
    remote: true,
    salary: 'от 400 000 ₸',
    salaryDetails: 'от 400 000 до 750 000 ₸ за месяц, на руки',
    date: 'Вчера',
    badges: ['remote'],
    color: '#A78BFA',
    category: 'Design',
    description: 'Проектирование пользовательских сценариев. UI/UX исследования.',
    details: {
      payout: 'ежемесячно',
      experience: '1-3 года',
      employment: 'Полная занятость',
      contract: 'Трудовой договор',
      schedule: 'гибкий',
      hours: 'Дневные смены, 8 часов',
      format: 'Удаленно или гибрид',
      views: 11,
      published: 'Вакансия опубликована 5 июня 2026 в Алматы',
      intro: [
        'Команда ищет дизайнера продукта, который умеет превращать сложные сценарии в простые интерфейсы.',
        'Будете работать с исследованиями, CJM, прототипами и готовыми макетами для разработки.'
      ],
      offers: [
        'Продуктовые задачи с заметным влиянием на пользователей',
        'Доступ к исследованиям, аналитике и обратной связи клиентов',
        'Зрелая дизайн-система и поддержка дизайн-команды',
        'Гибкий график и возможность удаленной работы',
        'Обучение, менторство и регулярные дизайн-ревью'
      ],
      duties: [
        'Проектирование пользовательских сценариев',
        'Создание интерактивных прототипов',
        'Проведение UX-исследований и анализ метрик',
        'Передача макетов в разработку и контроль качества реализации'
      ]
    }
  },
  {
    id: 3,
    title: 'Data Analyst',
    company: 'Freedom Finance',
    employerEmail: 'freedom@mail.com',
    logo: 'FF',
    location: 'Астана',
    address: 'Астана, проспект Кабанбай Батыра, 15А',
    type: 'full',
    remote: false,
    salary: '300-500 000 ₸',
    salaryDetails: 'от 300 000 до 500 000 ₸ за месяц, на руки',
    date: '2 дня назад',
    badges: [],
    color: '#60A5FA',
    category: 'Finance',
    description: 'Сбор и анализ бизнес-метрик, построение дашбордов в BI-системах.',
    details: {
      payout: '2 раза в месяц',
      experience: '1-3 года',
      employment: 'Полная занятость',
      contract: 'Трудовой договор',
      schedule: '5/2',
      hours: 'Дневные смены, 8 часов',
      format: 'Офис',
      views: 9,
      published: 'Вакансия опубликована 4 июня 2026 в Астане',
      intro: [
        'Финансовая команда усиливает аналитику продуктов и клиентских операций.',
        'Нужен специалист, который уверенно работает с данными и умеет объяснять выводы бизнесу.'
      ],
      offers: [
        'Работа с большими массивами финансовых данных',
        'Современные BI-инструменты и понятные процессы',
        'Стабильная занятость и официальное оформление',
        'Профессиональный рост внутри аналитической команды',
        'Участие в продуктовых и операционных решениях'
      ],
      duties: [
        'Сбор, очистка и проверка данных',
        'Построение дашбордов и регулярных отчетов',
        'Поиск точек роста через продуктовые метрики',
        'Подготовка аналитических выводов для руководителей направлений'
      ]
    }
  },
  {
    id: 4,
    title: 'Маркетолог / SMM',
    company: 'Magnum',
    employerEmail: 'magnum@mail.com',
    logo: 'MG',
    location: 'Алматы',
    address: 'Алматы, проспект Райымбека, 212А',
    type: 'full',
    remote: false,
    salary: 'от 250 000 ₸',
    salaryDetails: 'от 250 000 до 420 000 ₸ за месяц, на руки',
    date: '3 дня назад',
    badges: [],
    color: '#F97316',
    category: 'Marketing',
    description: 'Управление рекламными кампаниями торговой сети, ведение контент-плана.',
    details: {
      payout: 'ежемесячно',
      experience: '1-3 года',
      employment: 'Полная занятость',
      contract: 'Трудовой договор',
      schedule: '5/2',
      hours: 'Дневные смены, 8 часов',
      format: 'Офис',
      views: 7,
      published: 'Вакансия опубликована 3 июня 2026 в Алматы',
      intro: [
        'Маркетинговая команда ищет специалиста для развития digital-коммуникаций и соцсетей.',
        'Будете вести контент, запускать активности и анализировать эффективность кампаний.'
      ],
      offers: [
        'Работа с известным брендом и большой аудиторией',
        'Разнообразные задачи: SMM, промо, контент, аналитика',
        'Официальное оформление и стабильная зарплата',
        'Возможность предлагать и запускать собственные идеи',
        'Команда дизайнеров, копирайтеров и бренд-менеджеров рядом'
      ],
      duties: [
        'Ведение контент-плана и публикаций',
        'Запуск рекламных кампаний в digital-каналах',
        'Анализ охватов, конверсий и вовлеченности',
        'Подготовка отчетов и предложений по улучшению коммуникаций'
      ]
    }
  },
  {
    id: 5,
    title: 'iOS Developer (Swift)',
    company: 'Chocofamily',
    employerEmail: 'choco@mail.com',
    logo: 'CF',
    location: 'Remote',
    address: 'Удаленная работа',
    type: 'remote',
    remote: true,
    salary: 'от 700 000 ₸',
    salaryDetails: 'от 700 000 до 1 200 000 ₸ за месяц, на руки',
    date: '4 дня назад',
    badges: ['remote','new'],
    color: '#34D399',
    category: 'IT',
    description: 'Создание новых фич на чистом Swift / SwiftUI. Написание чистого кода.',
    details: {
      payout: '2 раза в месяц',
      experience: '3-6 лет',
      employment: 'Полная занятость',
      contract: 'Трудовой договор',
      schedule: 'гибкий',
      hours: 'Дневные смены, 8 часов',
      format: 'Удаленно',
      views: 14,
      published: 'Вакансия опубликована 2 июня 2026',
      intro: [
        'Мобильная команда развивает iOS-приложение для ежедневных пользовательских сценариев.',
        'Нужен разработчик, который уверенно пишет на Swift и любит аккуратную архитектуру.'
      ],
      offers: [
        'Работа над продуктом с большой активной аудиторией',
        'Swift, SwiftUI, UIKit и современные практики разработки',
        'Удаленный формат и гибкий график',
        'Код-ревью, технические обсуждения и рост внутри команды',
        'Оплата профессионального обучения'
      ],
      duties: [
        'Разработка новых экранов и пользовательских сценариев',
        'Поддержка и рефакторинг существующего iOS-кода',
        'Интеграция с API и аналитическими событиями',
        'Участие в планировании релизов и улучшении качества приложения'
      ]
    }
  }
];

// Проверяем наличие базы
if (!localStorage.getItem('wh_jobs')) {
  localStorage.setItem('wh_jobs', JSON.stringify(DEFAULT_JOBS));
}

let JOBS = JSON.parse(localStorage.getItem('wh_jobs') || '[]');
let currentCategory = 'all';
let currentType = 'all';

JOBS = enrichJobs(JOBS);
localStorage.setItem('wh_jobs', JSON.stringify(JOBS));

document.addEventListener('DOMContentLoaded', () => {
  setupAdvancedSearch();
  renderJobs(JOBS);
  updateCounters();
  checkAuthStatusBar();
  setupPostLinkProtection();
});

function checkAuthStatusBar() {
  const authZone = document.getElementById('auth-zone');
  const currentUser = JSON.parse(localStorage.getItem('wh_current_user'));

  if (currentUser && currentUser.isLogged) {
    const letter = currentUser.name ? currentUser.name.charAt(0).toUpperCase() : 'U';
    authZone.innerHTML = `
      <a href="dashboard.html" class="nav-user-avatar" title="Перейти в личный кабинет" style="width:40px; height:40px; border-radius:50%; background:var(--accent); color:#000; display:flex; align-items:center; justify-content:center; font-family:'Syne', sans-serif; font-weight:800; text-decoration:none; border:2px solid rgba(255,255,255,0.1);">
        ${letter}
      </a>
    `;
  }
}

function setupPostLinkProtection() {
  const postLink = document.getElementById('nav-post-link');
  const postSection = document.getElementById('post-section');
  const currentUser = JSON.parse(localStorage.getItem('wh_current_user'));

  if (currentUser && currentUser.isLogged && currentUser.role !== 'employer') {
    if (postLink) postLink.parentElement.style.display = 'none';
    if (postSection) postSection.style.display = 'none';
  }

  if (postLink) {
    postLink.addEventListener('click', (event) => {
      event.preventDefault();
      if (currentUser && currentUser.isLogged) {
        if (postSection) postSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = 'registr.html';
      }
    });
  }
}

function enrichJobs(jobs) {
  const defaultsById = new Map(DEFAULT_JOBS.map(job => [job.id, job]));
  return jobs.map(job => {
    const defaultJob = defaultsById.get(job.id);
    if (defaultJob) {
      return {
        ...defaultJob,
        ...job,
        details: {
          ...defaultJob.details,
          ...(job.details || {})
        }
      };
    }
    return {
      ...job,
      salaryDetails: job.salaryDetails || job.salary || 'Зарплата обсуждается на собеседовании',
      address: job.address || job.location || 'Адрес уточняется',
      details: {
        ...buildDefaultDetails(job),
        ...(job.details || {})
      }
    };
  });
}

function buildDefaultDetails(job) {
  return {
    payout: 'по договоренности',
    experience: job.experience || 'Опыт не указан',
    employment: job.type === 'remote' ? 'Удаленная занятость' : 'Полная занятость',
    contract: 'По договоренности',
    schedule: job.type === 'remote' ? 'гибкий' : '5/2',
    hours: 'Уточняется у работодателя',
    format: job.remote ? 'Удаленно' : 'Офис',
    views: Math.max(3, Math.floor(Math.random() * 18) + 3),
    published: `Вакансия опубликована ${job.date || 'сегодня'}${job.location ? ` в ${job.location}` : ''}`,
    intro: [
      job.description || `Требуется специалист на позицию ${job.title}.`,
      'Подробности по задачам, условиям и этапам отбора можно уточнить у работодателя.'
    ],
    offers: [
      'Стабильная работа в развивающейся компании',
      'Понятные задачи и поддержка команды',
      'Своевременные выплаты',
      'Возможность профессионального роста'
    ],
    duties: [
      'Выполнение рабочих задач по направлению вакансии',
      'Соблюдение внутренних стандартов компании',
      'Взаимодействие с командой и руководителем'
    ]
  };
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderList(items, className = '') {
  return (items || []).map(item => `<li class="${className}">${escapeHtml(item)}</li>`).join('');
}

function getFieldValue(id) {
  const field = document.getElementById(id);
  return field ? field.value.trim() : '';
}

function getTextareaLines(id) {
  return getFieldValue(id)
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);
}

function clearField(id) {
  const field = document.getElementById(id);
  if (field) field.value = '';
}

function normalizeText(value) {
  return String(value || '').toLowerCase().replace(/ё/g, 'е');
}

function extractCity(location) {
  const value = String(location || '').trim();
  if (!value) return '';
  const firstPart = value.split('/')[0].split(',')[0].trim();
  return firstPart.toLowerCase() === 'remote' ? 'Remote' : firstPart;
}

function parseSalaryValue(job) {
  const text = `${job.salaryDetails || ''} ${job.salary || ''}`;
  const numbers = text.match(/\d[\d\s]*/g);
  if (!numbers) return 0;
  return Math.max(...numbers.map(num => Number(num.replace(/\s/g, '')) || 0));
}

function formatMoney(value) {
  return `${Number(value || 0).toLocaleString('ru-RU')} ₸`;
}

function getSelectedFilter(id) {
  const field = document.getElementById(id);
  return field ? field.value : 'all';
}

function setupAdvancedSearch() {
  populateCityFilter();
  updateSalaryFilterLabel();
  updateFilterResultCount(JOBS.length);
}

function populateCityFilter() {
  const citySelect = document.getElementById('filter-city');
  if (!citySelect) return;

  const currentValue = citySelect.value || 'all';
  const cities = [...new Set(JOBS.map(job => extractCity(job.location)).filter(Boolean))]
    .sort((a, b) => a.localeCompare(b, 'ru'));

  citySelect.innerHTML = '<option value="all">Все города</option>'
    + cities.map(city => `<option value="${escapeHtml(city)}">${escapeHtml(city)}</option>`).join('');

  if (cities.includes(currentValue)) {
    citySelect.value = currentValue;
  }
}

function updateFilterResultCount(count) {
  const el = document.getElementById('filter-result-count');
  if (!el) return;
  el.textContent = count === JOBS.length
    ? 'Показаны все вакансии'
    : `Найдено вакансий: ${count}`;
}

window.toggleAdvancedSearch = function() {
  const panel = document.getElementById('advanced-panel');
  const icon = document.getElementById('advanced-toggle-icon');
  if (!panel) return;
  panel.classList.toggle('open');
  if (icon) icon.textContent = panel.classList.contains('open') ? '−' : '+';
};

window.updateSalaryFilterLabel = function() {
  const range = document.getElementById('filter-salary');
  const label = document.getElementById('salary-filter-value');
  if (!range || !label) return;
  label.textContent = formatMoney(range.value);
};

window.resetAdvancedFilters = function() {
  [
    'filter-city',
    'filter-experience',
    'filter-payout',
    'filter-employment',
    'filter-contract',
    'filter-schedule',
    'filter-hours',
    'filter-format'
  ].forEach(id => {
    const field = document.getElementById(id);
    if (field) field.value = 'all';
  });

  const salary = document.getElementById('filter-salary');
  if (salary) salary.value = 0;

  updateSalaryFilterLabel();
  renderJobs(getFilteredJobs());
};

// Рендеринг карточек на главной (со скрытием кнопки для работодателя)
function renderJobs(jobsArray) {
  const container = document.getElementById('jobs-container');
  if (!container) return;
  container.innerHTML = '';

  if (jobsArray.length === 0) {
    container.innerHTML = `<div class="no-results">По вашему запросу вакансий не найдено.</div>`;
    return;
  }

  const currentUser = JSON.parse(localStorage.getItem('wh_current_user'));
  const isEmployer = currentUser && currentUser.isLogged && currentUser.role === 'employer';

  jobsArray.forEach(job => {
    const card = document.createElement('div');
    card.className = 'job-card';
    
    let badgesHtml = '';
    if (job.badges && job.badges.length > 0) {
      badgesHtml = job.badges.map(b => `<span class="badge ${b}">${b.toUpperCase()}</span>`).join('');
    }

    const applyBtnHtml = isEmployer 
      ? `<span style="color:var(--muted); font-size:12px; font-weight:600;">Режим просмотра</span>` 
      : `<button class="apply-btn" onclick="openModal(${job.id})">Откликнуться</button>`;
    const details = job.details || buildDefaultDetails(job);

    card.innerHTML = `
      <div class="job-card-hdr">
        <div class="comp-logo" style="background:${job.color || '#fff'}">${escapeHtml(job.logo || 'WH')}</div>
        <div>
          <h3 class="job-title">${escapeHtml(job.title)}</h3>
          <p class="job-comp">${escapeHtml(job.company)} &nbsp;•&nbsp; <span style="color:var(--muted)">${escapeHtml(job.location)}</span></p>
        </div>
      </div>
      <div class="job-summary">
        <strong>${escapeHtml(job.salaryDetails || job.salary)}</strong>
        <span>Выплаты: ${escapeHtml(details.payout)}</span>
        <span>Опыт работы: ${escapeHtml(details.experience)}</span>
        <span>${escapeHtml(details.employment)} · График: ${escapeHtml(details.schedule)}</span>
        <span>Формат работы: ${escapeHtml(details.format)}</span>
        <em>Сейчас эту вакансию смотрят ${escapeHtml(details.views)} человека</em>
      </div>
      <p class="job-desc">${escapeHtml(job.description || 'Описание отсутствует.')}</p>
      <div class="job-card-ftr">
        <div class="job-salary">${escapeHtml(job.salary)}</div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="color:var(--muted); font-size:13px">${escapeHtml(job.date)}</span>
          <button class="details-btn" onclick="openJobDetails(${job.id})">Подробнее</button>
          ${applyBtnHtml}
        </div>
      </div>
      <div class="card-badges">${badgesHtml}</div>
    `;
    container.appendChild(card);
  });
}

function getFilteredJobs() {
  const searchVal = document.getElementById('search-input') ? document.getElementById('search-input').value.toLowerCase().trim() : '';
  const selectedCity = getSelectedFilter('filter-city');
  const selectedExperience = normalizeText(getSelectedFilter('filter-experience'));
  const selectedPayout = normalizeText(getSelectedFilter('filter-payout'));
  const selectedEmployment = normalizeText(getSelectedFilter('filter-employment'));
  const selectedContract = normalizeText(getSelectedFilter('filter-contract'));
  const selectedSchedule = normalizeText(getSelectedFilter('filter-schedule'));
  const selectedHours = normalizeText(getSelectedFilter('filter-hours'));
  const selectedFormat = normalizeText(getSelectedFilter('filter-format'));
  const minSalary = Number(document.getElementById('filter-salary')?.value || 0);

  const filtered = JOBS.filter(job => {
    const details = {
      ...buildDefaultDetails(job),
      ...(job.details || {})
    };
    const searchable = normalizeText([
      job.title,
      job.company,
      job.location,
      job.description,
      details.experience,
      details.payout,
      details.employment,
      details.contract,
      details.schedule,
      details.hours,
      details.format
    ].join(' '));

    const matchesSearch = !searchVal || searchable.includes(normalizeText(searchVal));
    const matchesCategory = (currentCategory === 'all' || job.category === currentCategory);
    const matchesType = (currentType === 'all' || job.type === currentType);
    const matchesCity = selectedCity === 'all' || normalizeText(extractCity(job.location)) === normalizeText(selectedCity);
    const matchesSalary = minSalary === 0 || parseSalaryValue(job) >= minSalary;
    const matchesExperience = selectedExperience === 'all' || normalizeText(details.experience).includes(selectedExperience);
    const matchesPayout = selectedPayout === 'all' || normalizeText(details.payout).includes(selectedPayout);
    const matchesEmployment = selectedEmployment === 'all' || normalizeText(details.employment).includes(selectedEmployment);
    const matchesContract = selectedContract === 'all' || normalizeText(details.contract).includes(selectedContract);
    const matchesSchedule = selectedSchedule === 'all' || normalizeText(details.schedule).includes(selectedSchedule);
    const matchesHours = selectedHours === 'all' || normalizeText(details.hours).includes(selectedHours);
    const matchesFormat = selectedFormat === 'all' || normalizeText(details.format).includes(selectedFormat);

    return matchesSearch
      && matchesCategory
      && matchesType
      && matchesCity
      && matchesSalary
      && matchesExperience
      && matchesPayout
      && matchesEmployment
      && matchesContract
      && matchesSchedule
      && matchesHours
      && matchesFormat;
  });

  updateFilterResultCount(filtered.length);
  return filtered;
}

window.handleFilter = function() { renderJobs(getFilteredJobs()); };
window.selectCategory = function(catName) { currentCategory = catName; renderJobs(getFilteredJobs()); };
window.filterType = function(type) {
  currentType = type;
  document.querySelectorAll('.filters .filter-badge').forEach(b => b.classList.remove('active'));
  if(type === 'all' && document.getElementById('f-all')) document.getElementById('f-all').classList.add('active');
  if(type === 'full' && document.getElementById('f-full')) document.getElementById('f-full').classList.add('active');
  if(type === 'remote' && document.getElementById('f-remote')) document.getElementById('f-remote').classList.add('active');
  renderJobs(getFilteredJobs());
};

function updateCounters() {
  if(document.getElementById('count-all')) document.getElementById('count-all').textContent = `${JOBS.length} вакансий`;
  if(document.getElementById('count-it')) document.getElementById('count-it').textContent = `${JOBS.filter(j => j.category === 'IT').length} вакансий`;
  if(document.getElementById('count-design')) document.getElementById('count-design').textContent = `${JOBS.filter(j => j.category === 'Design').length} вакансий`;
  if(document.getElementById('count-finance')) document.getElementById('count-finance').textContent = `${JOBS.filter(j => j.category === 'Finance').length} вакансий`;
  if(document.getElementById('count-marketing')) document.getElementById('count-marketing').textContent = `${JOBS.filter(j => j.category === 'Marketing').length} вакансий`;
}

window.openJobDetails = function(id) {
  const job = JOBS.find(j => j.id === id);
  const modal = document.getElementById('job-detail-modal');
  const body = document.getElementById('job-detail-body');
  if (!job || !modal || !body) return;

  const details = {
    ...buildDefaultDetails(job),
    ...(job.details || {})
  };

  body.innerHTML = `
    <section class="detail-hero">
      <div class="detail-company-row">
        <div class="comp-logo detail-logo" style="background:${job.color || '#fff'}">${escapeHtml(job.logo || 'WH')}</div>
        <div>
          <div class="detail-company">${escapeHtml(job.company)}</div>
          <div class="detail-location">${escapeHtml(job.location)}</div>
        </div>
      </div>
      <h2>${escapeHtml(job.title)}</h2>
      <p class="detail-salary">${escapeHtml(job.salaryDetails || job.salary)}</p>
      <div class="detail-facts">
        <span>Выплаты: ${escapeHtml(details.payout)}</span>
        <span>Опыт работы: ${escapeHtml(details.experience)}</span>
        <span>${escapeHtml(details.employment)}</span>
        <span>Оформление: ${escapeHtml(details.contract)}</span>
        <span>График: ${escapeHtml(details.schedule)}</span>
        <span>Рабочие часы: ${escapeHtml(details.hours)}</span>
        <span>Формат работы: ${escapeHtml(details.format)}</span>
      </div>
      <p class="detail-views">Сейчас эту вакансию смотрят ${escapeHtml(details.views)} человека</p>
      <div class="detail-actions">
        <button class="apply-submit" onclick="closeJobDetails(); openModal(${job.id})">Откликнуться</button>
        <button class="detail-contact-btn" onclick="location.href='chat.html'">Контакты</button>
      </div>
    </section>

    <section class="detail-section">
      ${(details.intro || []).map(text => `<p>${escapeHtml(text)}</p>`).join('')}
    </section>

    <section class="detail-section">
      <h3>Мы предлагаем:</h3>
      <ul class="detail-list">${renderList(details.offers, 'check')}</ul>
    </section>

    <section class="detail-section">
      <h3>Обязанности:</h3>
      <ul class="detail-list simple">${renderList(details.duties)}</ul>
    </section>

    <section class="detail-section">
      <h3>Где предстоит работать</h3>
      <p class="detail-address">${escapeHtml(job.address || job.location || 'Адрес уточняется')}</p>
      <div class="detail-map">
        <div class="map-grid"></div>
        <div class="map-pin"></div>
        <span class="map-label">${escapeHtml(job.location || 'WorkHunt')}</span>
      </div>
      <a class="map-link" href="https://yandex.kz/maps/?text=${encodeURIComponent(job.address || job.location || job.company)}" target="_blank" rel="noopener">Показать на большой карте</a>
      <p class="detail-published">${escapeHtml(details.published)}</p>
    </section>
  `;

  modal.classList.add('active');
};

window.closeJobDetails = function() {
  const modal = document.getElementById('job-detail-modal');
  if (modal) modal.classList.remove('active');
};

window.openModal = function(id) {
  const currentUser = JSON.parse(localStorage.getItem('wh_current_user'));
  if (!currentUser || !currentUser.isLogged) {
    alert('Для отправки отклика необходимо войти в систему!');
    window.location.href = 'registr.html';
    return;
  }

  const job = JOBS.find(j => j.id === id);
  if(!job) return;

  document.getElementById('modal-job-id').value = job.id;
  document.getElementById('modal-title').textContent = `Отклик на: ${job.title}`;
  document.getElementById('modal-sub').textContent = `Компания: ${job.company} | ${job.salary}`;
  
  document.getElementById('apply-name').value = currentUser.name || '';
  document.getElementById('apply-email').value = currentUser.email || '';
  
  const userResume = JSON.parse(localStorage.getItem(`resume_${currentUser.email}`) || localStorage.getItem(`wh_resume_${currentUser.email}`) || '{}');
  if (document.getElementById('apply-skills')) document.getElementById('apply-skills').value = userResume.skills || '';
  if (document.getElementById('apply-cover')) {
    let extraInfo = '';
    if(userResume.experience) extraInfo += `Опыт: ${userResume.experience}\n`;
    if(userResume.education) extraInfo += `Образование: ${userResume.education}\n`;
    document.getElementById('apply-cover').value = extraInfo;
  }

  document.getElementById('modal').classList.add('active');
};

window.closeModal = function() {
  document.getElementById('modal').classList.remove('active');
  document.getElementById('apply-success').style.display = 'none';
};

window.submitApplication = function() {
  const jobId = document.getElementById('modal-job-id').value;
  const name = document.getElementById('apply-name').value.trim();
  const email = document.getElementById('apply-email').value.trim();
  const skills = document.getElementById('apply-skills') ? document.getElementById('apply-skills').value.trim() : '';
  const coverLetter = document.getElementById('apply-cover') ? document.getElementById('apply-cover').value.trim() : '';

  if (!name || !email) {
    alert('Пожалуйста, укажите имя и контактный Email!');
    return;
  }

  const targetJob = JOBS.find(j => j.id == jobId);
  if (!targetJob) return;

  let allReplies = JSON.parse(localStorage.getItem('wh_replies') || '[]');
  
  // Подтягиваем полное резюме, чтобы работало сравнение
  const userResume = JSON.parse(localStorage.getItem(`resume_${email}`) || localStorage.getItem(`wh_resume_${email}`) || '{}');

  const newReply = {
    id: Date.now(),
    jobId: targetJob.id,
    title: targetJob.title,
    company: targetJob.company,
    employerEmail: targetJob.employerEmail || '',
    userName: name,
    userEmail: email,
    userSkills: skills || 'Не указаны',
    name: name,
    email: email,
    candidateEmail: email,
    skills: skills || 'Не указаны',
    experience: userResume.experience || '',
    education: userResume.education || '',
    cover: coverLetter,
    status: 'pending', 
    date: 'Сегодня'
  };

  allReplies.push(newReply);
  localStorage.setItem('wh_replies', JSON.stringify(allReplies));

  document.getElementById('apply-success').style.display = 'block';
  setTimeout(() => { closeModal(); }, 1800);
};

// ПУБЛИКАЦИЯ ВАКАНСИИ (С автозаполнением компании)
window.handleCreateJob = function() {
  const currentUser = JSON.parse(localStorage.getItem('wh_current_user'));
  if (!currentUser || currentUser.role !== 'employer') {
    alert('Только работодатели могут публиковать вакансии.');
    return;
  }

  const title = getFieldValue('p-title');
  const salary = getFieldValue('p-salary');
  const location = getFieldValue('p-location');
  const companyFromForm = getFieldValue('p-company');
  const category = document.getElementById('p-category') ? document.getElementById('p-category').value : 'IT';
  const type = document.getElementById('p-type') ? document.getElementById('p-type').value : 'full';
  const description = getFieldValue('p-desc');
  const salaryDetails = getFieldValue('p-salary-details') || salary;
  const payout = getFieldValue('p-payout');
  const employment = getFieldValue('p-employment');
  const contract = getFieldValue('p-contract');
  const schedule = getFieldValue('p-schedule');
  const hours = getFieldValue('p-hours');
  const format = getFieldValue('p-format');
  const address = getFieldValue('p-address') || location;
  const offers = getTextareaLines('p-offers');
  const duties = getTextareaLines('p-duties');
  
  // Автоматические поля
  const company = companyFromForm || currentUser.company || 'Компания не указана';
  const experience = getFieldValue('p-experience') || 'Опыт не указан';

  if (!title || !salary || !location) {
    alert('Пожалуйста, заполните Название, Зарплату и Локацию!');
    return;
  }

  const finalDesc = description || `Требуется специалист на позицию ${title}. Опыт: ${experience}. Подробности на собеседовании.`;
  const defaultDetails = buildDefaultDetails({
    title,
    company,
    location,
    salary,
    type,
    remote: type === 'remote',
    experience,
    description: finalDesc,
    date: 'Сегодня'
  });

  const newJob = {
    id: Date.now(),
    title: title,
    company: company,
    employerEmail: currentUser.email,
    logo: company.substring(0, 2).toUpperCase(),
    location: location,
    address: address,
    type: type,
    experience: experience,
    remote: (type === 'remote'),
    salary: salary,
    salaryDetails: salaryDetails,
    date: 'Сегодня',
    badges: ['new'],
    color: '#8B5CF6',
    category: category,
    description: finalDesc,
    details: {
      ...defaultDetails,
      payout: payout || defaultDetails.payout,
      experience: experience || defaultDetails.experience,
      employment: employment || defaultDetails.employment,
      contract: contract || defaultDetails.contract,
      schedule: schedule || defaultDetails.schedule,
      hours: hours || defaultDetails.hours,
      format: format || defaultDetails.format,
      intro: [finalDesc],
      offers: offers.length ? offers : defaultDetails.offers,
      duties: duties.length ? duties : defaultDetails.duties
    }
  };

  let currentJobsInStorage = JSON.parse(localStorage.getItem('wh_jobs') || '[]');
  currentJobsInStorage.unshift(newJob);
  localStorage.setItem('wh_jobs', JSON.stringify(currentJobsInStorage));

  JOBS = currentJobsInStorage;
  populateCityFilter();
  renderJobs(getFilteredJobs());
  updateCounters();

  const sMsg = document.getElementById('post-success');
  if (sMsg) {
    sMsg.style.display = 'block';
    setTimeout(() => { sMsg.style.display = 'none'; }, 4000);
  }

  // Сброс полей
  [
    'p-title',
    'p-company',
    'p-salary',
    'p-location',
    'p-salary-details',
    'p-payout',
    'p-experience',
    'p-employment',
    'p-contract',
    'p-schedule',
    'p-hours',
    'p-format',
    'p-address',
    'p-desc',
    'p-offers',
    'p-duties'
  ].forEach(clearField);
};
