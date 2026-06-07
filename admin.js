// Проверка входа администратора
const LANG_KEY = 'wh_admin_lang';
let currentLang = localStorage.getItem(LANG_KEY) || 'ru';

const I18N = {
  en: {
    'Дашборд': 'Dashboard', 'Вакансии': 'Jobs', 'Кандидаты': 'Candidates', 'Отклики': 'Applications',
    'Главное': 'Main', 'Управление': 'Management', 'Добавить вакансию': 'Add job',
    'Компании': 'Companies', 'Аналитика': 'Analytics', 'Настройки': 'Settings',
    'Администратор': 'Administrator', 'Быстрый поиск...': 'Quick search...', 'Уведомления': 'Notifications',
    'Открыть сайт': 'Open site', 'Сайт': 'Site', 'Активных вакансий': 'Active jobs',
    'Кандидатов': 'Candidates', 'Откликов': 'Applications', 'Трудоустроено': 'Hired',
    'Активность (отклики / вакансии)': 'Activity (applications / jobs)', 'За месяц': 'Month',
    'По категориям': 'By category', 'Последние вакансии': 'Recent jobs', 'Все →': 'All →',
    'Последние события': 'Recent activity', 'Управление вакансиями': 'Job management',
    'Всего 8 вакансий': '8 jobs total', 'Всего 12 откликов': '12 applications total',
    '↑ +2 за неделю': '↑ +2 this week', '↑ +3 за неделю': '↑ +3 this week',
    '↑ +5 сегодня': '↑ +5 today', '↑ +1 на этой неделе': '↑ +1 this week',
    '↑ +18% к прошлому месяцу': '↑ +18% vs last month', '↓ -0.4% к прошлому': '↓ -0.4% vs previous',
    '↑ Быстрее на 3 дня': '↑ 3 days faster', '↑ +340 за неделю': '↑ +340 this week',
    'Добавить': 'Add', 'Все': 'All', 'Активные': 'Active', 'На проверке': 'Pending',
    'Закрытые': 'Closed', 'Поиск по названию...': 'Search by title...', 'База резюме соискателей': 'Candidate resume database',
    'Дизайн': 'Design', 'Маркетинг': 'Marketing', 'Финансы': 'Finance', 'Новые': 'New',
    'На рассмотрении': 'In review', 'Одобрено': 'Approved', 'Отклонено': 'Rejected',
    'Заполните все поля и опубликуйте': 'Fill in all fields and publish', 'Название вакансии *': 'Job title *',
    'Компания *': 'Company *', 'Город / Локация *': 'City / Location *', 'Тип занятости': 'Employment type',
    'Полная занятость': 'Full time', 'Удалённая работа': 'Remote work', 'Частичная занятость': 'Part time',
    'Стажировка': 'Internship', 'Зарплата': 'Salary', 'Категория': 'Category',
    'IT и разработка': 'IT and development', 'Юриспруденция': 'Legal', 'Продажи': 'Sales',
    'Email для откликов *': 'Application email *', 'Статус': 'Status', 'Активная': 'Active',
    'Закрыта': 'Closed', 'Навыки (через запятую)': 'Skills (comma-separated)', 'Описание вакансии': 'Job description',
    'Опубликовать вакансию': 'Publish job', 'Очистить форму': 'Clear form',
    'Зарегистрированные работодатели': 'Registered employers', 'Сводные данные платформы': 'Platform summary',
    'Просмотры вакансий': 'Job views', 'Конверсия в отклик': 'Application conversion',
    'Среднее время закрытия': 'Average closing time', 'Новых пользователей': 'New users',
    'Топ вакансий по просмотрам': 'Top jobs by views', 'Отклики по дням (последние 7 дней)': 'Applications by day (last 7 days)',
    'Трафик по городам': 'Traffic by city', 'Управление платформой': 'Platform management',
    'Основные настройки': 'Main settings', 'Название сайта': 'Site name', 'Описание': 'Description',
    'Email поддержки': 'Support email', 'Телефон': 'Phone', 'Сохранить': 'Save',
    'Данные администратора': 'Administrator details', 'Имя': 'Name', 'Новый пароль': 'New password',
    'Подтвердить пароль': 'Confirm password', 'Обновить': 'Update', 'Удалить вакансию?': 'Delete job?',
    'Это действие нельзя отменить. Вакансия будет удалена навсегда.': 'This action cannot be undone. The job will be deleted permanently.',
    'Отмена': 'Cancel', 'Удалить': 'Delete', 'Вакансия': 'Job', 'Добавить кандидата': 'Add candidate',
    'Заполните профиль соискателя': 'Fill in candidate profile', 'Имя *': 'Name *', 'Юридическое': 'Legal',
    'Настройки сохранены': 'Settings saved', 'Данные обновлены': 'Data updated', 'Полная': 'Full time',
    'Удалённо': 'Remote', 'Частичная': 'Part time', 'Договорная': 'Negotiable', 'Только что': 'Just now',
    'Сегодня': 'Today', 'Вчера': 'Yesterday', 'Найдено': 'Found', 'вакансий': 'jobs',
    'откликов': 'applications', 'просмотров': 'views', 'Вакансии не найдены': 'No jobs found',
    'Отклики не найдены': 'No applications found', 'Откликов ещё нет': 'No applications yet',
    'Ред.': 'Edit', 'Просмотр': 'View', 'Редактировать': 'Edit', 'Написать': 'Message',
    'Кандидат': 'Candidate', 'Дата': 'Date', 'Действия': 'Actions', 'Изменить статус': 'Change status',
    'Новый': 'New', 'Рассмотрение': 'In review',
    'Заполните обязательные поля': 'Fill in required fields', 'Вакансия обновлена': 'Job updated',
    'Вакансия опубликована!': 'Job published!', 'Вакансия удалена': 'Job deleted',
    'Введите имя кандидата': 'Enter candidate name', 'Кандидат добавлен': 'Candidate added',
    'Кандидат удалён': 'Candidate deleted', 'Статус обновлён: ': 'Status updated: ',
    'Email отправлен компании': 'Email sent to company', 'Компания удалена': 'Company deleted',
    'Компания': 'Company', 'Тип': 'Type', 'Просмотры': 'Views'
  },
  kk: {
    'Дашборд': 'Бақылау', 'Вакансии': 'Вакансиялар', 'Кандидаты': 'Үміткерлер', 'Отклики': 'Өтінімдер',
    'Главное': 'Негізгі', 'Управление': 'Басқару', 'Добавить вакансию': 'Вакансия қосу',
    'Компании': 'Компаниялар', 'Аналитика': 'Талдау', 'Настройки': 'Баптаулар',
    'Администратор': 'Әкімші', 'Быстрый поиск...': 'Жылдам іздеу...', 'Уведомления': 'Хабарламалар',
    'Открыть сайт': 'Сайтты ашу', 'Сайт': 'Сайт', 'Активных вакансий': 'Белсенді вакансиялар',
    'Кандидатов': 'Үміткерлер', 'Откликов': 'Өтінімдер', 'Трудоустроено': 'Жұмысқа орналасты',
    'Активность (отклики / вакансии)': 'Белсенділік (өтінімдер / вакансиялар)', 'За месяц': 'Ай бойынша',
    'По категориям': 'Санаттар бойынша', 'Последние вакансии': 'Соңғы вакансиялар', 'Все →': 'Барлығы →',
    'Последние события': 'Соңғы оқиғалар', 'Управление вакансиями': 'Вакансияларды басқару',
    'Всего 8 вакансий': 'Барлығы 8 вакансия', 'Всего 12 откликов': 'Барлығы 12 өтінім',
    '↑ +2 за неделю': '↑ +2 апта ішінде', '↑ +3 за неделю': '↑ +3 апта ішінде',
    '↑ +5 сегодня': '↑ +5 бүгін', '↑ +1 на этой неделе': '↑ +1 осы аптада',
    '↑ +18% к прошлому месяцу': '↑ +18% өткен аймен салыстырғанда', '↓ -0.4% к прошлому': '↓ -0.4% алдыңғымен салыстырғанда',
    '↑ Быстрее на 3 дня': '↑ 3 күнге жылдамырақ', '↑ +340 за неделю': '↑ +340 апта ішінде',
    'Добавить': 'Қосу', 'Все': 'Барлығы', 'Активные': 'Белсенді', 'На проверке': 'Тексерісте',
    'Закрытые': 'Жабық', 'Поиск по названию...': 'Атауы бойынша іздеу...', 'База резюме соискателей': 'Үміткерлер түйіндеме базасы',
    'Дизайн': 'Дизайн', 'Маркетинг': 'Маркетинг', 'Финансы': 'Қаржы', 'Новые': 'Жаңа',
    'На рассмотрении': 'Қаралуда', 'Одобрено': 'Мақұлданды', 'Отклонено': 'Қабылданбады',
    'Заполните все поля и опубликуйте': 'Барлық өрістерді толтырып, жариялаңыз', 'Название вакансии *': 'Вакансия атауы *',
    'Компания *': 'Компания *', 'Город / Локация *': 'Қала / Орналасу *', 'Тип занятости': 'Жұмыс түрі',
    'Полная занятость': 'Толық жұмыс', 'Удалённая работа': 'Қашықтан жұмыс', 'Частичная занятость': 'Жартылай жұмыс',
    'Стажировка': 'Тағылымдама', 'Зарплата': 'Жалақы', 'Категория': 'Санат',
    'IT и разработка': 'IT және әзірлеу', 'Юриспруденция': 'Құқық', 'Продажи': 'Сату',
    'Email для откликов *': 'Өтінімдер email-ы *', 'Статус': 'Мәртебе', 'Активная': 'Белсенді',
    'Закрыта': 'Жабық', 'Навыки (через запятую)': 'Дағдылар (үтір арқылы)', 'Описание вакансии': 'Вакансия сипаттамасы',
    'Опубликовать вакансию': 'Вакансияны жариялау', 'Очистить форму': 'Форманы тазалау',
    'Зарегистрированные работодатели': 'Тіркелген жұмыс берушілер', 'Сводные данные платформы': 'Платформа жиынтығы',
    'Просмотры вакансий': 'Вакансия қаралымдары', 'Конверсия в отклик': 'Өтінім конверсиясы',
    'Среднее время закрытия': 'Орташа жабылу уақыты', 'Новых пользователей': 'Жаңа пайдаланушылар',
    'Топ вакансий по просмотрам': 'Қаралым бойынша үздік вакансиялар', 'Отклики по дням (последние 7 дней)': 'Күндер бойынша өтінімдер (соңғы 7 күн)',
    'Трафик по городам': 'Қалалар бойынша трафик', 'Управление платформой': 'Платформаны басқару',
    'Основные настройки': 'Негізгі баптаулар', 'Название сайта': 'Сайт атауы', 'Описание': 'Сипаттама',
    'Email поддержки': 'Қолдау email-ы', 'Телефон': 'Телефон', 'Сохранить': 'Сақтау',
    'Данные администратора': 'Әкімші деректері', 'Имя': 'Аты', 'Новый пароль': 'Жаңа құпиясөз',
    'Подтвердить пароль': 'Құпиясөзді растау', 'Обновить': 'Жаңарту', 'Удалить вакансию?': 'Вакансияны жою керек пе?',
    'Это действие нельзя отменить. Вакансия будет удалена навсегда.': 'Бұл әрекетті қайтару мүмкін емес. Вакансия біржола жойылады.',
    'Отмена': 'Болдырмау', 'Удалить': 'Жою', 'Вакансия': 'Вакансия', 'Добавить кандидата': 'Үміткер қосу',
    'Заполните профиль соискателя': 'Үміткер профилін толтырыңыз', 'Имя *': 'Аты *', 'Юридическое': 'Құқықтық',
    'Настройки сохранены': 'Баптаулар сақталды', 'Данные обновлены': 'Деректер жаңартылды', 'Полная': 'Толық',
    'Удалённо': 'Қашықтан', 'Частичная': 'Жартылай', 'Договорная': 'Келісім бойынша', 'Только что': 'Жаңа ғана',
    'Сегодня': 'Бүгін', 'Вчера': 'Кеше', 'Найдено': 'Табылды', 'вакансий': 'вакансия',
    'откликов': 'өтінім', 'просмотров': 'қаралым', 'Вакансии не найдены': 'Вакансиялар табылмады',
    'Отклики не найдены': 'Өтінімдер табылмады', 'Откликов ещё нет': 'Өтінімдер әлі жоқ',
    'Ред.': 'Өңдеу', 'Просмотр': 'Көру', 'Редактировать': 'Өңдеу', 'Написать': 'Жазу',
    'Кандидат': 'Үміткер', 'Дата': 'Күні', 'Действия': 'Әрекеттер', 'Изменить статус': 'Мәртебені өзгерту',
    'Новый': 'Жаңа', 'Рассмотрение': 'Қаралуда',
    'Заполните обязательные поля': 'Міндетті өрістерді толтырыңыз', 'Вакансия обновлена': 'Вакансия жаңартылды',
    'Вакансия опубликована!': 'Вакансия жарияланды!', 'Вакансия удалена': 'Вакансия жойылды',
    'Введите имя кандидата': 'Үміткер атын енгізіңіз', 'Кандидат добавлен': 'Үміткер қосылды',
    'Кандидат удалён': 'Үміткер жойылды', 'Статус обновлён: ': 'Мәртебе жаңартылды: ',
    'Email отправлен компании': 'Компанияға email жіберілді', 'Компания удалена': 'Компания жойылды',
    'Компания': 'Компания', 'Тип': 'Түрі', 'Просмотры': 'Қаралымдар'
  }
};

function t(key) {
  return currentLang === 'ru' ? key : (I18N[currentLang]?.[key] || key);
}

function setupLanguage() {
  const select = document.getElementById('language-select');
  if (select) select.value = currentLang;
  document.documentElement.lang = currentLang === 'kk' ? 'kk' : currentLang;
  applyStaticTranslations();
  if (currentLang !== 'ru') rerenderAdmin();
}

function applyStaticTranslations() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => {
    const raw = node.nodeValue;
    const trimmed = raw.trim();
    if (!trimmed) return;
    if (!node.__i18nKey && (I18N.en[trimmed] || I18N.kk[trimmed])) node.__i18nKey = trimmed;
    if (node.__i18nKey) node.nodeValue = raw.replace(trimmed, t(node.__i18nKey));
  });
  document.querySelectorAll('[placeholder]').forEach((el) => {
    const value = el.placeholder.trim();
    if (!el.dataset.i18nPlaceholder && (I18N.en[value] || I18N.kk[value])) el.dataset.i18nPlaceholder = value;
    if (el.dataset.i18nPlaceholder) el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[title]').forEach((el) => {
    const value = el.title.trim();
    if (!el.dataset.i18nTitle && (I18N.en[value] || I18N.kk[value])) el.dataset.i18nTitle = value;
    if (el.dataset.i18nTitle) el.title = t(el.dataset.i18nTitle);
  });
}

function rerenderAdmin() {
  renderDashboard();
  renderJobsTable();
  renderCandidates();
  renderApplications();
  renderCompanies();
  renderAnalytics();
  applyStaticTranslations();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === 'kk' ? 'kk' : lang;
  rerenderAdmin();
}

document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('wh_admin_logged') !== 'true') {
    alert('Доступ запрещен! Используйте форму входа администратора.');
    window.location.href = 'registr.html';
    return;
  }
  initializeAdminData();
  renderDashboard();
  renderJobsTable();
  renderCandidates();
  renderApplications();
  renderCompanies();
  renderAnalytics();
  setupLanguage();
});

// Инициализация данных администратора
function initializeAdminData() {
  // Загружаем реальные вакансии
  const defaultJobs = [
    { id: 1, title: 'Senior Frontend Developer', company: 'Kaspi.kz', employerEmail: 'kaspi@mail.com', logo: 'KZ', location: 'Алматы', type: 'full', remote: false, salary: 'от 600 000 ₸', date: 'Сегодня', badges: ['new','hot'], color: '#C8FA5A', category: 'IT', status: 'active', views: 245, description: 'Разработка и оптимизация ключевых сервисов. Работа со стеком JS/TS.' },
    { id: 2, title: 'Product Designer', company: 'Kolesa Group', employerEmail: 'kolesa@mail.com', logo: 'KG', location: 'Алматы / Remote', type: 'remote', remote: true, salary: 'от 400 000 ₸', date: 'Вчера', badges: ['remote'], color: '#A78BFA', category: 'Design', status: 'active', views: 182, description: 'Проектирование пользовательских сценариев. UI/UX исследования.' },
    { id: 3, title: 'Data Analyst', company: 'Freedom Finance', employerEmail: 'freedom@mail.com', logo: 'FF', location: 'Астана', type: 'full', remote: false, salary: '300–500 000 ₸', date: '2 дня назад', badges: [], color: '#60A5FA', category: 'Finance', status: 'active', views: 95, description: 'Сбор и анализ бизнес-метрик, построение дашбордов в BI-системах.' },
    { id: 4, title: 'Маркетолог / SMM', company: 'Magnum', employerEmail: 'magnum@mail.com', logo: 'MG', location: 'Алматы', type: 'full', remote: false, salary: 'от 250 000 ₸', date: '3 дня назад', badges: [], color: '#F97316', category: 'Marketing', status: 'active', views: 124, description: 'Управление рекламными кампаниями торговой сети, ведение контент-плана.' },
    { id: 5, title: 'iOS Developer (Swift)', company: 'Chocofamily', employerEmail: 'choco@mail.com', logo: 'CF', location: 'Remote', type: 'remote', remote: true, salary: 'от 700 000 ₸', date: '4 дня назад', badges: ['remote','new'], color: '#34D399', category: 'IT', status: 'active', views: 318, description: 'Создание новых фич на чистом Swift / SwiftUI. Написание чистого кода.' }
  ];
  
  if (!localStorage.getItem('wh_jobs')) {
    localStorage.setItem('wh_jobs', JSON.stringify(defaultJobs));
  }

  JOBS = readStorage('wh_jobs', defaultJobs).map(normalizeJob);
  USERS = readStorage('users', []);
  seedRealDemoData();
  USERS = readStorage('users', []);
  REPLIES = readStorage('wh_replies', []);
  APPLICATIONS = REPLIES.map(normalizeApplication);
  RESUMES = buildCandidates();
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn(`Не удалось прочитать ${key}`, error);
    return fallback;
  }
}

function persistAdminData() {
  localStorage.setItem('wh_jobs', JSON.stringify(JOBS));
  localStorage.setItem('wh_replies', JSON.stringify(APPLICATIONS.map(app => ({
    id: app.id,
    jobId: app.jobId,
    title: app.job,
    company: app.company,
    name: app.name,
    email: app.email,
    skills: app.skills,
    cover: app.cover,
    status: app.status,
    date: app.date,
  }))));
}

function normalizeJob(job) {
  const company = job.company || 'WorkHunt';
  return {
    ...job,
    logo: job.logo || company.substring(0, 2).toUpperCase(),
    status: job.status || 'active',
    views: Number(job.views || Math.floor(80 + Math.random() * 260)),
    date: job.date || 'Сегодня',
    skills: Array.isArray(job.skills)
      ? job.skills
      : String(job.skills || '').split(',').map(s => s.trim()).filter(Boolean),
  };
}

function normalizeApplication(reply) {
  const job = JOBS.find(j => Number(j.id) === Number(reply.jobId || reply.vacancyId));
  const statusMap = { pending: 'new', accepted: 'approved', declined: 'rejected' };
  return {
    id: reply.id || Date.now(),
    name: reply.name || reply.userName || reply.candidateName || 'Кандидат',
    email: reply.email || reply.userEmail || reply.candidateEmail || '',
    skills: reply.skills || reply.userSkills || '',
    cover: reply.cover || reply.coverLetter || '',
    job: reply.job || reply.title || job?.title || 'Вакансия',
    company: reply.company || job?.company || '',
    jobId: Number(reply.jobId || reply.vacancyId || job?.id || 0),
    status: statusMap[reply.status] || reply.status || 'new',
    date: reply.date || 'Сегодня',
  };
}

function seedRealDemoData() {
  if (USERS.length === 0) {
    localStorage.setItem('users', JSON.stringify([
      { name: 'Алия Нурланова', email: 'aliya@mail.com', pass: '123456', role: 'seeker' },
      { name: 'Данияр Сейсенов', email: 'daniyar@mail.com', pass: '123456', role: 'seeker' },
      { name: 'Мария Ким', email: 'maria@mail.com', pass: '123456', role: 'seeker' },
      { name: 'Kaspi HR', email: 'kaspi@mail.com', pass: '123456', role: 'employer', company: 'Kaspi.kz' },
      { name: 'Kolesa HR', email: 'kolesa@mail.com', pass: '123456', role: 'employer', company: 'Kolesa Group' },
    ]));
    USERS = readStorage('users', []);
  }

  if (!localStorage.getItem('resume_aliya@mail.com')) {
    localStorage.setItem('resume_aliya@mail.com', JSON.stringify({
      name: 'Алия Нурланова',
      title: 'Frontend Developer',
      skills: 'React, JavaScript, TypeScript, CSS',
      bio: '2 года опыта в продуктовой разработке и адаптивной верстке.'
    }));
  }
  if (!localStorage.getItem('resume_daniyar@mail.com')) {
    localStorage.setItem('resume_daniyar@mail.com', JSON.stringify({
      name: 'Данияр Сейсенов',
      title: 'Data Analyst',
      skills: 'SQL, Python, Power BI, Excel',
      bio: 'Анализ данных, дашборды и продуктовые метрики.'
    }));
  }
  if (!localStorage.getItem('resume_maria@mail.com')) {
    localStorage.setItem('resume_maria@mail.com', JSON.stringify({
      name: 'Мария Ким',
      title: 'Product Designer',
      skills: 'Figma, UX Research, UI, Prototyping',
      bio: 'Проектирование интерфейсов для веб и мобильных продуктов.'
    }));
  }

  if (readStorage('wh_replies', []).length === 0) {
    const demoReplies = [
      { id: 101, jobId: 1, title: 'Senior Frontend Developer', company: 'Kaspi.kz', name: 'Алия Нурланова', email: 'aliya@mail.com', skills: 'React, JavaScript, TypeScript, CSS', cover: 'Готова обсудить задачи команды и показать портфолио.', status: 'new', date: 'Сегодня' },
      { id: 102, jobId: 2, title: 'Product Designer', company: 'Kolesa Group', name: 'Мария Ким', email: 'maria@mail.com', skills: 'Figma, UX Research, UI, Prototyping', cover: 'Есть опыт в продуктовых исследованиях и дизайн-системах.', status: 'review', date: 'Вчера' },
      { id: 103, jobId: 3, title: 'Data Analyst', company: 'Freedom Finance', name: 'Данияр Сейсенов', email: 'daniyar@mail.com', skills: 'SQL, Python, Power BI, Excel', cover: 'Могу собрать отчетность и метрики для финансового продукта.', status: 'approved', date: '2 дня назад' },
    ];
    localStorage.setItem('wh_replies', JSON.stringify(demoReplies));
  }
}

function buildCandidates() {
  const colors = ['#C8FA5A', '#34D399', '#818CF8', '#A78BFA', '#F97316', '#60A5FA', '#FBBF24', '#FB7185'];
  const byEmail = new Map();

  USERS.filter(u => u.role === 'seeker' || u.role === 'applicant').forEach((user, index) => {
    const resume = readStorage(`resume_${user.email}`, {});
    const skills = resume.skills || 'JavaScript, SQL';
    byEmail.set(user.email, {
      id: user.email ? user.email.hashCode() : Date.now() + index,
      name: resume.name || user.name || 'Кандидат',
      email: user.email,
      category: detectCategory(skills, resume.title),
      skills: String(skills).split(',').map(s => s.trim()).filter(Boolean),
      color: colors[index % colors.length],
    });
  });

  APPLICATIONS.forEach((app, index) => {
    if (!app.email || byEmail.has(app.email)) return;
    byEmail.set(app.email, {
      id: app.email.hashCode(),
      name: app.name,
      email: app.email,
      category: detectCategory(app.skills, app.job),
      skills: String(app.skills || '').split(',').map(s => s.trim()).filter(Boolean),
      color: colors[(index + 3) % colors.length],
    });
  });

  return [...byEmail.values()];
}

function detectCategory(skills = '', title = '') {
  const text = `${skills} ${title}`.toLowerCase();
  if (text.includes('figma') || text.includes('design') || text.includes('ui') || text.includes('ux')) return 'Design';
  if (text.includes('sql') || text.includes('finance') || text.includes('analyst') || text.includes('power bi')) return 'Finance';
  if (text.includes('marketing') || text.includes('smm')) return 'Marketing';
  if (text.includes('hr')) return 'HR';
  return 'IT';
}

// Хеш функция для генерации ID
if (!String.prototype.hashCode) {
  String.prototype.hashCode = function() {
    let hash = 0;
    for (let i = 0; i < this.length; i++) {
      const char = this.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  };
}

// Глобальные переменные для данных
let JOBS = [];
let REPLIES = [];
let USERS = [];
let RESUMES = [];
let APPLICATIONS = [];

let editingJobId = null; // ID вакансии при редактировании

// Выход из панели администратора
function doLogout() {
  sessionStorage.removeItem('wh_admin_logged');
  const currentUser = readStorage('wh_current_user', null);
  if (currentUser && currentUser.role === 'admin') {
    localStorage.removeItem('wh_current_user');
  }
  window.location.href = 'registr.html';
}

const PAGE_TITLES = {
  dashboard: 'Дашборд', jobs: 'Вакансии', candidates: 'Кандидаты',
  applications: 'Отклики', 'add-job': 'Добавить вакансию',
  companies: 'Компании', analytics: 'Аналитика', settings: 'Настройки',
};

function showPage(id, el) {
  // Скрыть все страницы
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  // Показать нужную
  document.getElementById('page-' + id).classList.add('active');
  if (el) el.classList.add('active');
  document.getElementById('topbar-title').textContent = t(PAGE_TITLES[id] || id);
  // Сбросить режим редактирования при переходе на добавление
  if (id === 'add-job' && !editingJobId) {
    document.getElementById('add-job-title').textContent = t('Добавить вакансию');
  }
}


function renderDashboard() {
  // Счётчики
  document.getElementById('stat-jobs').textContent = JOBS.filter(j => j.status === 'active').length;
  const candidatesStat = document.getElementById('stat-candidates');
  if (candidatesStat) candidatesStat.textContent = RESUMES.length;
  document.getElementById('stat-apps').textContent = APPLICATIONS.length;

  // Таблица последних вакансий
  const tbody = JOBS.slice(0, 5).map(j => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:10px">
        <div class="job-logo-sm" style="color:${logoColor(j.logo)}">${j.logo}</div>
        <div><div style="font-size:13px;font-weight:600">${j.title}</div>
        <div style="font-size:11px;color:var(--muted)">${j.company}</div></div>
      </div></td>
      <td><span class="status-badge status-${j.status}">${statusLabel(j.status)}</span></td>
      <td style="font-size:12px;color:var(--muted)">${j.date}</td>
    </tr>
  `).join('');
  document.getElementById('dash-jobs-table').innerHTML = `<thead><tr>
    <th>${t('Вакансия')}</th><th>${t('Статус')}</th><th>${t('Дата')}</th>
  </tr></thead><tbody>${tbody}</tbody>`;

  // Лента событий
  const events = [
    { icon:'WH', bg:'rgba(200,250,90,0.12)', text:'<b>Новый отклик</b> на Senior Frontend Developer от Алексея Морозова', time:'5 минут назад' },
    { icon:'OK', bg:'rgba(52,211,153,0.12)',  text:'Вакансия <b>iOS Developer</b> одобрена и опубликована', time:'32 минуты назад' },
    { icon:'CV', bg:'rgba(139,92,246,0.12)', text:'Новый кандидат <b>Жансая Ержан</b> зарегистрировался', time:'1 час назад' },
    { icon:'JOB', bg:'rgba(249,115,22,0.12)', text:'Вакансия <b>HR Business Partner</b> получила 5 откликов', time:'2 часа назад' },
    { icon:'CO', bg:'rgba(96,165,250,0.12)', text:'Компания <b>KPMG Kazakhstan</b> разместила новую вакансию', time:'3 часа назад' },
  ];
  document.getElementById('activity-feed').innerHTML = events.map(e => `
    <div class="activity-item">
      <div class="activity-icon" style="background:${e.bg}">${e.icon}</div>
      <div class="activity-body">
        <div class="activity-text">${e.text}</div>
        <div class="activity-time">${e.time}</div>
      </div>
    </div>
  `).join('');

  // Бар-чарт (7 дней)
  const chartData = [12, 8, 20, 15, 24, 18, 30];
  const days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
  const max = Math.max(...chartData);
  document.getElementById('chart-bars').innerHTML = chartData.map((v, i) => `
    <div class="bar-wrap">
      <div class="bar" style="height:${(v/max)*100}%"></div>
      <div class="bar-label">${days[i]}</div>
    </div>
  `).join('');
}


let jobAdminFilter = 'all';
let jobAdminSearch = '';

function renderJobsTable() {
  let list = JOBS;
  if (jobAdminFilter !== 'all') list = list.filter(j => j.status === jobAdminFilter);
  if (jobAdminSearch) list = list.filter(j =>
    j.title.toLowerCase().includes(jobAdminSearch) ||
    j.company.toLowerCase().includes(jobAdminSearch)
  );

  document.getElementById('jobs-count-text').textContent = `${t('Найдено')} ${list.length} ${t('вакансий')}`;
  document.getElementById('jobs-nav-count').textContent = JOBS.length;

  const rows = list.map(j => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:12px">
        <div class="job-logo-sm" style="color:${logoColor(j.logo)}">${j.logo}</div>
        <div><div style="font-size:14px;font-weight:600">${j.title}</div>
        <div style="font-size:12px;color:var(--muted)">${j.company} · ${j.location}</div></div>
      </div></td>
      <td style="font-size:13px">${j.salary}</td>
      <td><span class="status-badge status-${j.status}">${statusLabel(j.status)}</span></td>
      <td style="font-size:12px;color:var(--muted)">${j.views} </td>
      <td style="font-size:12px;color:var(--muted)">${j.date}</td>
      <td>
        <button class="tbl-action" onclick="editJob(${j.id})">${t('Ред.')}</button>
        <button class="tbl-action" onclick="viewJob(${j.id})">${t('Просмотр')}</button>
        <button class="tbl-action danger" onclick="confirmDelete(${j.id})">${t('Удалить')}</button>
      </td>
    </tr>
  `).join('');

  document.getElementById('jobs-table').innerHTML = `
    <thead><tr>
      <th>${t('Вакансия')}</th><th>${t('Зарплата')}</th><th>${t('Статус')}</th>
      <th>${t('Просмотры')}</th><th>${t('Дата')}</th><th>${t('Действия')}</th>
    </tr></thead>
    <tbody>${rows || `<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--muted)">${t('Вакансии не найдены')}</td></tr>`}</tbody>
  `;
}

function filterJobsAdmin(type, el) {
  jobAdminFilter = type;
  document.querySelectorAll('#page-jobs .filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderJobsTable();
}

function searchJobsAdmin(val) {
  jobAdminSearch = val.toLowerCase();
  renderJobsTable();
}


function saveJob() {
  const title    = document.getElementById('f-title').value.trim();
  const company  = document.getElementById('f-company').value.trim();
  const location = document.getElementById('f-location').value.trim();
  const email    = document.getElementById('f-email').value.trim();

  if (!title || !company || !location || !email) {
    showToast(t('Заполните обязательные поля'), 'error'); return;
  }

  const skillsRaw = document.getElementById('f-skills').value;
  const skills = skillsRaw ? skillsRaw.split(',').map(s => s.trim()).filter(Boolean) : [];

  if (editingJobId) {
    // Обновить существующую
    const idx = JOBS.findIndex(j => j.id === editingJobId);
    JOBS[idx] = {
      ...JOBS[idx],
      title, company, location, skills,
      type:     document.getElementById('f-type').value,
      salary:   document.getElementById('f-salary').value || 'Договорная',
      category: document.getElementById('f-category').value,
      status:   document.getElementById('f-status').value,
      employerEmail: email,
      description: document.getElementById('f-desc').value.trim() || JOBS[idx].description,
    };
    showToast(t('Вакансия обновлена'), 'success');
    editingJobId = null;
  } else {
    // Добавить новую
    const newJob = {
      id: Date.now(),
      title, company, location, skills,
      logo:     company.substring(0,2).toUpperCase(),
      employerEmail: email,
      type:     document.getElementById('f-type').value,
      salary:   document.getElementById('f-salary').value || t('Договорная'),
      category: document.getElementById('f-category').value,
      status:   document.getElementById('f-status').value,
      date:     t('Только что'),
      views:    0,
      description: document.getElementById('f-desc').value.trim(),
    };
    JOBS.unshift(newJob);
    showToast(t('Вакансия опубликована!'), 'success');
  }

  resetJobForm();
  persistAdminData();
  renderJobsTable();
  renderDashboard();
}

function editJob(id) {
  const j = JOBS.find(x => x.id === id);
  editingJobId = id;
  document.getElementById('add-job-title').textContent = t('Редактировать');
  // Заполнить форму
  document.getElementById('f-title').value    = j.title;
  document.getElementById('f-company').value  = j.company;
  document.getElementById('f-location').value = j.location;
  document.getElementById('f-salary').value   = j.salary;
  document.getElementById('f-email').value    = j.employerEmail || '';
  document.getElementById('f-skills').value   = (j.skills || []).join(', ');
  document.getElementById('f-desc').value     = j.description || '';
  document.getElementById('f-type').value     = j.type;
  document.getElementById('f-category').value = j.category;
  document.getElementById('f-status').value   = j.status;
  // Перейти на страницу
  showPage('add-job', document.querySelectorAll('.nav-item')[4]);
}

function viewJob(id) {
  const j = JOBS.find(x => x.id === id);
  document.getElementById('jm-title').textContent = j.title;
  document.getElementById('jm-sub').textContent = j.company + ' · ' + j.location + ' · ' + j.salary;
  const apps = APPLICATIONS.filter(a => Number(a.jobId) === Number(j.id) || a.job === j.title);
  document.getElementById('jm-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">
      ${metaCell(t('Статус'), `<span class="status-badge status-${j.status}">${statusLabel(j.status)}</span>`)}
      ${metaCell(t('Тип'), typeLabel(j.type))}
      ${metaCell(t('Категория'), t(j.category))}
      ${metaCell(t('Просмотры'), j.views)}
    </div>
    <div style="margin-bottom:16px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:8px">${t('Навыки (через запятую)')}</div>
      <div style="display:flex;flex-wrap:wrap;gap:6px">${(j.skills||[]).map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
    </div>
    <div style="margin-bottom:16px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:8px">${t('Отклики')} (${apps.length})</div>
      ${apps.length ? apps.map(a=>`
        <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line)">
          <div><div style="font-size:13px;font-weight:600">${a.name}</div><div style="font-size:11px;color:var(--muted)">${a.email}</div></div>
          <span class="status-badge status-${a.status}">${appStatusLabel(a.status)}</span>
        </div>`).join('') : `<div style="color:var(--muted);font-size:13px">${t('Откликов ещё нет')}</div>`}
    </div>
    <div style="display:flex;gap:8px;margin-top:16px">
      <button class="btn btn-primary" onclick="editJob(${j.id}); closeJobModal()">${t('Редактировать')}</button>
      <button class="btn btn-danger" onclick="closeJobModal(); confirmDelete(${j.id})">${t('Удалить')}</button>
    </div>
  `;
  document.getElementById('job-modal').classList.add('open');
}

function metaCell(label, value) {
  return `<div style="background:var(--bg4);border-radius:8px;padding:12px 14px">
    <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:4px">${label}</div>
    <div style="font-size:14px;font-weight:600">${value}</div>
  </div>`;
}

function closeJobModal() { document.getElementById('job-modal').classList.remove('open'); }

function resetJobForm() {
  editingJobId = null;
  document.getElementById('add-job-title').textContent = t('Добавить вакансию');
  ['f-title','f-company','f-location','f-salary','f-email','f-skills'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('f-desc').value = '';
  document.getElementById('f-type').value = 'full';
  document.getElementById('f-category').value = 'IT';
  document.getElementById('f-status').value = 'active';
}


let deleteTargetId = null;

function confirmDelete(id) {
  const j = JOBS.find(x => x.id === id);
  deleteTargetId = id;
  document.getElementById('confirm-text').textContent = `${t('Вакансия')} "${j.title}" ${currentLang === 'en' ? 'will be deleted permanently.' : currentLang === 'kk' ? 'біржола жойылады.' : 'будет удалена навсегда.'}`;
  document.getElementById('confirm-ok-btn').onclick = () => {
    JOBS = JOBS.filter(x => x.id !== id);
    persistAdminData();
    closeConfirm();
    renderJobsTable();
    renderDashboard();
    showToast(t('Вакансия удалена'), 'error');
  };
  document.getElementById('confirm-modal').classList.add('open');
}
function closeConfirm() { document.getElementById('confirm-modal').classList.remove('open'); }

let candidatesFilter = '';

function renderCandidates() {
  const list = candidatesFilter
    ? RESUMES.filter(r => r.category === candidatesFilter)
    : RESUMES;

  document.getElementById('candidates-grid').innerHTML = list.map(r => `
    <div class="cand-card">
      <div class="cand-avatar" style="background:${r.color}">${r.name.charAt(0)}</div>
      <div class="cand-name">${r.name}</div>
      <div class="cand-role">${r.category}</div>
      <div class="cand-skills">${r.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}</div>
      <div class="cand-actions">
        <button class="btn btn-secondary" style="padding:7px 12px;font-size:12px">${t('Написать')}</button>
        <button class="btn btn-danger" style="padding:7px 12px;font-size:12px" onclick="deleteCandidate(${r.id})">${t('Удалить')}</button>
      </div>
    </div>
  `).join('');
}

function filterCandidates(cat, el) {
  candidatesFilter = cat;
  document.querySelectorAll('#page-candidates .filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderCandidates();
}

function openAddCandidateModal() {
  document.getElementById('cn-name').value = '';
  document.getElementById('cn-skills').value = '';
  document.getElementById('cand-modal').classList.add('open');
}

function saveCandidate() {
  const name = document.getElementById('cn-name').value.trim();
  const skillsRaw = document.getElementById('cn-skills').value;
  if (!name) { showToast(t('Введите имя кандидата'), 'error'); return; }
  const COLORS = ['#C8FA5A','#34D399','#818CF8','#A78BFA','#F97316','#60A5FA','#FBBF24','#FB7185'];
  RESUMES.push({
    id: Date.now(),
    name,
    category: document.getElementById('cn-category').value,
    skills: skillsRaw ? skillsRaw.split(',').map(s => s.trim()).filter(Boolean) : [],
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  });
  document.getElementById('cand-modal').classList.remove('open');
  renderCandidates();
  showToast(t('Кандидат добавлен'), 'success');
}

function deleteCandidate(id) {
  RESUMES = RESUMES.filter(r => r.id !== id);
  renderCandidates();
  showToast(t('Кандидат удалён'), 'error');
}


let appsFilter = 'all';

function renderApplications() {
  const list = appsFilter === 'all'
    ? APPLICATIONS
    : APPLICATIONS.filter(a => a.status === appsFilter);

  document.getElementById('apps-count-text').textContent = `${t('Найдено')} ${list.length} ${t('откликов')}`;
  const newCount = APPLICATIONS.filter(a => a.status === 'new').length;
  document.getElementById('apps-nav-count').textContent = newCount;

  const rows = list.map(a => `
    <tr>
      <td><div style="font-size:13px;font-weight:600">${a.name}</div>
          <div style="font-size:11px;color:var(--muted)">${a.email}</div></td>
      <td><div style="font-size:13px">${a.job}</div>
          <div style="font-size:11px;color:var(--muted)">${a.company}</div></td>
      <td><span class="status-badge status-${a.status}">${appStatusLabel(a.status)}</span></td>
      <td style="font-size:12px;color:var(--muted)">${a.date}</td>
      <td>
        <select onchange="changeAppStatus(${a.id}, this.value)"
          style="background:var(--bg4);border:1px solid var(--line2);border-radius:6px;padding:5px 8px;color:var(--text);font-size:12px;outline:none;cursor:pointer">
          <option value="new"      ${a.status==='new'      ?'selected':''}>${t('Новый')}</option>
          <option value="review"   ${a.status==='review'   ?'selected':''}>${t('Рассмотрение')}</option>
          <option value="approved" ${a.status==='approved' ?'selected':''}>${t('Одобрено')}</option>
          <option value="rejected" ${a.status==='rejected' ?'selected':''}>${t('Отклонено')}</option>
        </select>
      </td>
    </tr>
  `).join('');

  document.getElementById('apps-table').innerHTML = `
    <thead><tr>
      <th>${t('Кандидат')}</th><th>${t('Вакансия')}</th><th>${t('Статус')}</th><th>${t('Дата')}</th><th>${t('Изменить статус')}</th>
    </tr></thead>
    <tbody>${rows || `<tr><td colspan="5" style="text-align:center;padding:24px;color:var(--muted)">${t('Отклики не найдены')}</td></tr>`}</tbody>
  `;
}

function filterApps(type, el) {
  appsFilter = type;
  document.querySelectorAll('#page-applications .filter-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderApplications();
}

function changeAppStatus(id, status) {
  const app = APPLICATIONS.find(a => a.id === id);
  app.status = status;
  persistAdminData();
  renderApplications();
  showToast(t('Статус обновлён: ') + appStatusLabel(status), 'success');
}

function renderCompanies() {
  // Динамически вычисляем компании из загруженных вакансий
  const COMPANIES = [...new Set(JOBS.map(j => j.company).filter(Boolean))].map((c, i) => ({
    name: c,
    logo: JOBS.find(j => j.company === c)?.logo || 'C',
    jobs: JOBS.filter(j => j.company === c).length,
    apps: REPLIES.filter(r => {
        const jobIds = JOBS.filter(j => j.company === c).map(j => j.id);
        return jobIds.includes(Number(r.jobId));
    }).length,
    status: 'active',
  }));

  const rows = COMPANIES.map((c) => `
    <tr>
      <td><div style="display:flex;align-items:center;gap:12px">
        <div class="job-logo-sm" style="color:${logoColor(c.logo)}">${c.logo}</div>
        <div style="font-size:14px;font-weight:600">${c.name}</div>
      </div></td>
      <td style="font-size:13px">${c.jobs} ${t('вакансий')}</td>
      <td style="font-size:13px">${c.apps} ${t('откликов')}</td>
      <td><span class="status-badge status-${c.status}">${statusLabel(c.status)}</span></td>
      <td>
        <button class="tbl-action" onclick="showToast('${t('Email отправлен компании')} ${c.name}','success')">${t('Написать')}</button>
        <button class="tbl-action danger" onclick="showToast('${t('Компания удалена')}','error')">${t('Удалить')}</button>
      </td>
    </tr>
  `).join('');

  document.getElementById('companies-table').innerHTML = `
    <thead><tr>
      <th>${t('Компания')}</th><th>${t('Вакансии')}</th><th>${t('Отклики')}</th><th>${t('Статус')}</th><th>${t('Действия')}</th>
    </tr></thead>
    <tbody>${rows}</tbody>
  `;
}


function renderAnalytics() {
  // Топ вакансий
  const sorted = [...JOBS].sort((a,b) => b.views - a.views).slice(0,5);
  const maxViews = sorted[0].views;
  document.getElementById('analytics-top-jobs').innerHTML = sorted.map(j => `
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px">
        <span><b>${j.title}</b> · ${j.company}</span>
        <span style="color:var(--muted)">${j.views} ${t('просмотров')}</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar" style="width:${(j.views/maxViews)*100}%;background:var(--accent)"></div>
      </div>
    </div>
  `).join('');

  // Чарт откликов
  const data = [5, 12, 8, 19, 14, 22, 18];
  const days = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];
  const max = Math.max(...data);
  document.getElementById('analytics-chart').innerHTML = data.map((v,i) => `
    <div class="bar-wrap">
      <div class="bar" style="height:${(v/max)*100}%"></div>
      <div class="bar-label">${days[i]}</div>
    </div>
  `).join('');

  // Города
  const cities = [
    { name:'Алматы', pct:54, color:'var(--accent)' },
    { name:'Астана', pct:24, color:'var(--accent2)' },
    { name:'Remote', pct:14, color:'var(--blue)' },
    { name:'Прочие', pct:8,  color:'var(--accent3)' },
  ];
  document.getElementById('city-stats').innerHTML = cities.map(c => `
    <div style="margin-bottom:14px">
      <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:5px">
        <span>${c.name}</span><span style="font-weight:700">${c.pct}%</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar" style="width:${c.pct}%;background:${c.color}"></div>
      </div>
    </div>
  `).join('');
}


function globalSearch(val) {
  if (!val.trim()) return;
  jobAdminSearch = val.toLowerCase();
  renderJobsTable();
  showPage('jobs', document.querySelectorAll('.nav-item')[1]);
}

function showToast(msg, type = 'success') {
  const wrap = document.getElementById('toasts');
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = msg;
  wrap.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'slideOut .3s ease forwards';
    setTimeout(() => t.remove(), 300);
  }, 3000);
}
function statusLabel(s) {
  return { active:t('Активная'), pending:t('На проверке'), closed:t('Закрыта') }[s] || s;
}
function appStatusLabel(s) {
  return { new:t('Новый'), review:t('Рассмотрение'), approved:t('Одобрено'), rejected:t('Отклонено') }[s] || s;
}
function typeLabel(type) {
  return { full:t('Полная'), remote:t('Удалённо'), part:t('Частичная'), internship:t('Стажировка') }[type] || type;
}
function logoColor(logo) {
  const map = { KZ:'#C8FA5A', KG:'#A78BFA', FF:'#60A5FA', MG:'#F97316', CF:'#34D399', HB:'#FBBF24', AI:'#818CF8', KP:'#FB7185' };
  return map[logo] || '#8A8880';
}


document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});  
