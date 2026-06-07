const LS_KEY = 'wh_current_user';
const el = (id) => document.getElementById(id);

//  Безопасное чтение базы из LocalStorage
function getSafeData(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Ошибка чтения ${key}, возвращен пустой массив.`, error);
    return [];
  }
}

function normalizeSkillList(value) {
  if (Array.isArray(value)) return value.map(String).map(s => s.trim()).filter(Boolean);
  return String(value || '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
}

function normalizeSkillText(value) {
  return normalizeSkillList(value).join(', ');
}

const KNOWN_SKILLS = [
  ['HTML', ['html', 'верстка']],
  ['CSS', ['css', 'scss', 'адаптив']],
  ['JavaScript', ['javascript', 'js']],
  ['TypeScript', ['typescript', 'ts']],
  ['React', ['react']],
  ['Vue', ['vue']],
  ['Angular', ['angular']],
  ['Node.js', ['node.js', 'nodejs', 'node js']],
  ['Python', ['python', 'питон']],
  ['Flask', ['flask']],
  ['Django', ['django']],
  ['SQL', ['sql', 'база данных', 'базы данных']],
  ['API', ['api']],
  ['Git', ['git']],
  ['Figma', ['figma']],
  ['UI', ['ui', 'интерфейс']],
  ['UX', ['ux', 'исследован']],
  ['Photoshop', ['photoshop']],
  ['Swift', ['swift']],
  ['SwiftUI', ['swiftui', 'swift ui']],
  ['UIKit', ['uikit']],
  ['Power BI', ['power bi', 'bi-систем']],
  ['Excel', ['excel']],
  ['SMM', ['smm']],
  ['Marketing', ['marketing', 'маркетинг', 'реклам']]
];

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getJobSkillList(job) {
  const directSkills = normalizeSkillList(job.skills);
  if (directSkills.length) return directSkills;

  const details = job.details || {};
  const text = [
    job.title,
    job.category,
    job.description,
    details.experience,
    ...(Array.isArray(details.intro) ? details.intro : []),
    ...(Array.isArray(details.offers) ? details.offers : []),
    ...(Array.isArray(details.duties) ? details.duties : [])
  ].join(' ').toLowerCase();

  return KNOWN_SKILLS
    .filter(([, aliases]) => aliases.some(alias => text.includes(alias)))
    .map(([skill]) => skill);
}

function getJobById(id) {
  return getSafeData('wh_jobs').find(j => Number(j.id) === Number(id));
}

function saveJobs(jobs) {
  localStorage.setItem('wh_jobs', JSON.stringify(jobs));
}

function getCandidateResume(email) {
  return getSafeData(`resume_${email}`);
}

function getCandidatePool(vacancyId) {
  const replies = getSafeData('wh_replies')
    .filter(r => Number(r.jobId || r.vacancyId) === Number(vacancyId))
    .map(r => {
      const email = r.email || r.userEmail || r.candidateEmail || '';
      const resume = getCandidateResume(email);
      return {
        name: r.name || r.userName || r.candidateName || resume.name || 'Соискатель',
        email,
        skills: r.skills || r.userSkills || resume.skills || '',
        cover: r.cover || r.coverLetter || resume.bio || '',
        source: 'Отклик'
      };
    });

  const fromUsers = getSafeData('users')
    .filter(u => ['seeker', 'applicant', 'candidate'].includes(u.role) && u.email)
    .map(u => {
      const resume = getCandidateResume(u.email);
      return {
        name: resume.name || u.name || 'Соискатель',
        email: u.email || '',
        skills: resume.skills || '',
        cover: resume.bio || '',
        source: 'Резюме'
      };
    });

  const byEmail = new Map();
  [...replies, ...fromUsers].forEach(candidate => {
    const key = candidate.email || `${candidate.name}-${candidate.source}`;
    if (!byEmail.has(key)) byEmail.set(key, candidate);
  });
  return [...byEmail.values()];
}

let STATE = { user: null, role: null };

const MOCK_VACANCIES = [
  { id: 1, title: 'Junior Frontend-разработчик', company: 'WebStyle Studio', skills: 'html, css, javascript, git', salary: 'от 300 000 ₸', description: 'Ищем начинающего верстальщика для поддержки коммерческих сайтов. Знание JS обязательно.' },
  { id: 2, title: 'Python / Flask backend разработчик', company: 'CyberTech', skills: 'python, flask, sql, git, api', salary: 'от 550 000 ₸', description: 'Разработка архитектурных решений, интеграция внешних API и проектирование баз данных.' },
  { id: 3, title: 'Веб-дизайнер / UI Инженер', company: 'iTrends Agency', skills: 'figma, ui, ux, photoshop', salary: 'от 280 000 ₸', description: 'Создание адаптивных интерфейсов, проектирование пользовательских путей и UX-тесты.' }
];

document.addEventListener('DOMContentLoaded', init);

function init() {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) {
    alert('Ошибка авторизации. Доступ запрещен.');
    window.location.href = 'registr.html';
    return;
  }

  STATE.user = JSON.parse(raw);
  STATE.role = STATE.user.role;

  if (!STATE.user.isLogged) {
    window.location.href = 'registr.html';
    return;
  }

  setupInterfaceByRole();
  loadUserSettings();
  calculateDashboardStats();
  
  // Открываем вкладку по умолчанию независимо
  showTab('main', document.querySelector('.sidebar-nav .nav-item'));
}

function setupInterfaceByRole() {
  el('user-name').textContent = STATE.user.name || 'Пользователь';
  el('user-role').textContent = STATE.role === 'employer' ? 'Работодатель' : 'Соискатель';
  if (el('welcome-name')) el('welcome-name').textContent = STATE.user.name || 'Пользователь';

  if (STATE.role === 'employer') {
    if (el('nav-v')) el('nav-v').style.display = 'block';
    if (el('nav-r')) el('nav-r').style.display = 'block';
    if (el('nav-cv')) el('nav-cv').style.display = 'none';
    
    renderEmployerVacancies();
    renderEmployerReplies();
  } else {
    if (el('nav-v')) el('nav-v').style.display = 'none';
    if (el('nav-r')) el('nav-r').style.display = 'block';
    if (el('nav-cv')) el('nav-cv').style.display = 'block';
    
    renderMockVacancies();
    renderCandidateReplies();
    loadCandidateResume();
  }
}

//  РАЗДЕЛЬНОЕ ПЕРЕКЛЮЧЕНИЕ ВКЛАДОК
window.showTab = function(tabId, element) {
  const sections = document.querySelectorAll('.tab-content');
  sections.forEach(s => s.classList.remove('active'));

  const target = el(`tab-${tabId}`);
  if (target) target.classList.add('active');

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  if (element) element.classList.add('active');
};

function calculateDashboardStats() {
  const jobs = getSafeData('wh_jobs');
  const replies = getSafeData('wh_replies');

  if (STATE.role === 'employer') {
    const myJobs = jobs.filter(j => j.employerEmail === STATE.user.email);
    const myJobsIds = myJobs.map(j => j.id);
    const myReplies = replies.filter(r => myJobsIds.includes(Number(r.jobId)) || myJobsIds.includes(Number(r.vacancyId)));

    if (el('stat-card-1-title')) el('stat-card-1-title').textContent = 'Активные вакансии';
    if (el('stat-card-1-val')) el('stat-card-1-val').textContent = myJobs.length;

    if (el('stat-card-2-title')) el('stat-card-2-title').textContent = 'Всего откликов';
    if (el('stat-card-2-val')) el('stat-card-2-val').textContent = myReplies.length;

    if (el('stat-card-3-title')) el('stat-card-3-title').textContent = 'Индекс активности';
    if (el('stat-card-3-val')) el('stat-card-3-val').textContent = myJobs.length > 0 ? 'Высокий' : 'Низкий';
  } else {
    const myReplies = replies.filter(r => r.candidateEmail === STATE.user.email || r.email === STATE.user.email || r.userEmail === STATE.user.email);
    
    if (el('stat-card-1-title')) el('stat-card-1-title').textContent = 'Отправлено откликов';
    if (el('stat-card-1-val')) el('stat-card-1-val').textContent = myReplies.length;

    if (el('stat-card-2-title')) el('stat-card-2-title').textContent = 'Статус резюме';
    const resume = localStorage.getItem(`resume_${STATE.user.email}`);
    if (el('stat-card-2-val')) el('stat-card-2-val').textContent = resume ? 'Активно' : 'Не создано';

    if (el('stat-card-3-title')) el('stat-card-3-title').textContent = 'Приглашения';
    if (el('stat-card-3-val')) el('stat-card-3-val').textContent = '0';
  }
}

function renderMockVacancies() {
  const container = el('mock-vacancies-list');
  if (!container) return;
  
  container.innerHTML = MOCK_VACANCIES.map(vac => `
    <div style="background:var(--bg3); border:1px solid var(--line); border-radius:10px; padding:20px; margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:10px; flex-wrap:wrap;">
        <div>
          <h4 style="color:#fff; font-size:16px; margin-bottom:2px;">${vac.title}</h4>
          <div style="color:var(--muted); font-size:13px;">${vac.company}</div>
        </div>
        <div style="color:var(--accent); font-weight:700; font-family:'Syne', sans-serif;">${vac.salary}</div>
      </div>
      <p style="color:var(--text); font-size:13px; opacity:0.8; margin-top:8px;">${vac.description}</p>
      <p style="color:var(--muted); font-size:12px; margin-top:6px;">Навыки: ${vac.skills}</p>
    </div>
  `).join('');
}

function renderEmployerVacancies() {
  const container = el('employer-vacancies-list');
  if (!container) return;

  const allJobs = getSafeData('wh_jobs');
  const myJobs = allJobs.filter(j => j.employerEmail === STATE.user.email);

  if (myJobs.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--muted); padding:40px 0;">Вы еще не создали ни одной вакансии.</p>`;
    return;
  }

  container.innerHTML = myJobs.map(job => `
    <div class="dashboard-card" style="background:var(--bg3); border:1px solid var(--line); padding:20px; border-radius:12px; margin-bottom:16px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px;">
        <div>
          <h4 style="font-family:'Syne', sans-serif; font-size:18px; color:#fff; margin-bottom:4px;">${job.title}</h4>
          <p style="color:var(--muted); font-size:13px; margin-bottom:8px;">${job.company || 'Моя компания'} • ${job.location || 'Локация'} • <span style="color:var(--accent); font-weight:600;">${job.salary}</span></p>
          <p style="color:var(--text); font-size:13px; opacity:0.8; max-width:600px;">${job.description || 'Описание отсутствует.'}</p>
          ${getJobSkillList(job).length ? `<p style="margin-top:8px; font-size:12px; color:var(--muted)">Искомые навыки: <strong style="color:#fff">${escapeHtml(getJobSkillList(job).join(', '))}</strong></p>` : ''}
        </div>
        <div style="display:flex; gap:8px; flex-direction:column; min-width:140px;">
          <button class="form-input" style="background:rgba(255,255,255,0.05); color:#fff; border:1px solid var(--line); cursor:pointer; font-weight:600; text-align:center;" onclick="editVacancy(${job.id})">Изменить</button>
          <button class="btn-auto" onclick="runAutoSelect(${job.id})">Автоподбор</button>
          <button class="form-input" style="background:transparent; color:var(--red); border:1px solid rgba(251,113,133,0.2); cursor:pointer; font-weight:600; text-align:center;" onclick="deleteVacancy(${job.id})">Удалить</button>
        </div>
      </div>
    </div>
  `).join('');
}

// АВТОПОДБОР КАНДИДАТОВ С СОРТИРОВКОЙ ПО СОВПАДЕНИЮ НАВЫКОВ
window.runAutoSelect = function(vacancyId) {
  const allJobs = getSafeData('wh_jobs');
  let job = allJobs.find(j => Number(j.id) === Number(vacancyId)) || MOCK_VACANCIES.find(j => Number(j.id) === Number(vacancyId));
  
  if (!job) {
    alert('Вакансия не найдена!');
    return;
  }

  const candidates = getCandidatePool(vacancyId);

  if (candidates.length === 0) {
    alert('Пока нет кандидатов или резюме для подбора.');
    return;
  }

  const requiredSkillNames = getJobSkillList(job);
  const vacancySkills = requiredSkillNames.map(s => s.toLowerCase());

  candidates.forEach(candidate => {
    const candidateSkills = normalizeSkillList(candidate.skills).map(s => s.toLowerCase());
    if (!candidateSkills.length || !vacancySkills.length) {
      candidate.matchScore = 0;
      candidate.matchedSkills = [];
      return;
    }
    const matchedSkills = [];
    requiredSkillNames.forEach((skillName, index) => {
      const vSkill = vacancySkills[index];
      if (candidateSkills.some(cSkill => cSkill.includes(vSkill) || vSkill.includes(cSkill))) {
        matchedSkills.push(skillName);
      }
    });
    candidate.matchedSkills = matchedSkills;
    candidate.matchScore = Math.round((matchedSkills.length / vacancySkills.length) * 100);
  });

  candidates.sort((a, b) => b.matchScore - a.matchScore);
  openMatchModal(job.title, candidates, requiredSkillNames);
};

function openMatchModal(title, candidates, requiredSkills) {
  const exist = el('auto-match-modal');
  if (exist) exist.remove();

  const overlay = document.createElement('div');
  overlay.id = 'auto-match-modal';
  overlay.className = 'modal-overlay';
  
  let listHtml = '';
  candidates.forEach((c, i) => {
    let color = c.matchScore >= 70 ? 'var(--accent)' : (c.matchScore >= 40 ? 'var(--purple)' : 'var(--red)');
    const matchedHtml = c.matchedSkills.length
      ? `<p class="match-line">Совпало: <strong>${escapeHtml(c.matchedSkills.join(', '))}</strong></p>`
      : `<p class="match-line">Совпадений по навыкам пока нет</p>`;
    listHtml += `
      <div class="match-card" style="border-left-color:${color};">
        <div class="match-head">
          <div><span class="match-rank">#${i + 1}</span><strong>${escapeHtml(c.name || 'Соискатель')}</strong> <span class="match-email">${escapeHtml(c.email || '')}</span></div>
          <div class="match-score" style="background:${color};">${c.matchScore}%</div>
        </div>
        <p class="match-line">Источник: <strong>${escapeHtml(c.source || 'Профиль')}</strong></p>
        <p class="match-line">Навыки: <strong>${escapeHtml(normalizeSkillText(c.skills) || 'не указаны')}</strong></p>
        ${matchedHtml}
        ${c.cover ? `<p class="match-cover">${escapeHtml(c.cover)}</p>` : ''}
      </div>
    `;
  });

  overlay.innerHTML = `
    <div class="modal-box">
      <button class="modal-close-btn" onclick="document.getElementById('auto-match-modal').remove()">x</button>
      <h3 class="modal-title">Анализ совпадения навыков</h3>
      <p class="modal-sub">Вакансия: <span>${escapeHtml(title)}</span></p>
      <p class="modal-sub">Требования: <span>${escapeHtml(requiredSkills.join(', ') || 'навыки не указаны')}</span></p>
      ${requiredSkills.length ? '' : '<p class="modal-note">Добавьте навыки в вакансии, чтобы подбор стал точнее.</p>'}
      <div class="match-list">${listHtml}</div>
    </div>
  `;
  document.body.appendChild(overlay);
}

window.editVacancy = function(id) {
  const allJobs = getSafeData('wh_jobs');
  const job = allJobs.find(j => Number(j.id) === Number(id));
  if (!job) return;

  const exist = el('vacancy-editor-modal');
  if (exist) exist.remove();

  const overlay = document.createElement('div');
  overlay.id = 'vacancy-editor-modal';
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <button class="modal-close-btn" onclick="closeVacancyEditor()">x</button>
      <h3 class="modal-title">Редактировать вакансию</h3>
      <div class="form-grid">
        <div class="form-group">
          <label class="form-label">Название</label>
          <input class="form-input" id="edit-job-title" value="${escapeHtml(job.title)}">
        </div>
        <div class="form-group">
          <label class="form-label">Зарплата</label>
          <input class="form-input" id="edit-job-salary" value="${escapeHtml(job.salary)}">
        </div>
        <div class="form-group">
          <label class="form-label">Локация</label>
          <input class="form-input" id="edit-job-location" value="${escapeHtml(job.location || '')}">
        </div>
        <div class="form-group">
          <label class="form-label">Формат</label>
          <select class="form-input" id="edit-job-type">
            <option value="full" ${job.type === 'full' ? 'selected' : ''}>Офис / полная занятость</option>
            <option value="remote" ${job.type === 'remote' ? 'selected' : ''}>Удаленно</option>
            <option value="part" ${job.type === 'part' ? 'selected' : ''}>Частичная занятость</option>
          </select>
        </div>
      </div>
      <div class="form-group" style="margin-top:16px;">
        <label class="form-label">Ключевые навыки для автоподбора</label>
        <input class="form-input" id="edit-job-skills" value="${escapeHtml(getJobSkillList(job).join(', '))}" placeholder="React, JavaScript, Figma">
      </div>
      <div class="form-group" style="margin-top:16px;">
        <label class="form-label">Описание</label>
        <textarea class="form-input form-textarea" id="edit-job-description">${escapeHtml(job.description || '')}</textarea>
      </div>
      <div class="modal-actions">
        <button class="modal-secondary-btn" onclick="closeVacancyEditor()">Отмена</button>
        <button class="modal-primary-btn" onclick="saveVacancyEditor(${Number(job.id)})">Сохранить</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
};

window.closeVacancyEditor = function() {
  const modal = el('vacancy-editor-modal');
  if (modal) modal.remove();
};

window.saveVacancyEditor = function(id) {
  const allJobs = getSafeData('wh_jobs');
  const job = allJobs.find(j => Number(j.id) === Number(id));
  if (!job) return;

  const title = el('edit-job-title').value.trim();
  const salary = el('edit-job-salary').value.trim();
  const location = el('edit-job-location').value.trim();
  const type = el('edit-job-type').value;
  const description = el('edit-job-description').value.trim();
  const skills = normalizeSkillList(el('edit-job-skills').value);

  if (!title || !salary || !location) {
    alert('Заполните название, зарплату и локацию.');
    return;
  }

  job.title = title;
  job.salary = salary;
  job.location = location;
  job.type = type;
  job.remote = type === 'remote';
  job.skills = skills;
  job.description = description || job.description || `Требуется специалист на позицию ${title}.`;

  saveJobs(allJobs);
  closeVacancyEditor();
  renderEmployerVacancies();
  renderEmployerReplies();
  calculateDashboardStats();
};

window.deleteVacancy = function(id) {
  if (!confirm('Удалить вакансию безвозвратно?')) return;
  let allJobs = getSafeData('wh_jobs');
  saveJobs(allJobs.filter(j => Number(j.id) !== Number(id)));
  renderEmployerVacancies();
  calculateDashboardStats();
};

function renderEmployerReplies() {
  const container = el('employer-replies-list');
  if (!container) return;

  const jobs = getSafeData('wh_jobs');
  const myJobsIds = jobs.filter(j => j.employerEmail === STATE.user.email).map(j => j.id);
  const replies = getSafeData('wh_replies').filter(r => myJobsIds.includes(Number(r.jobId)) || myJobsIds.includes(Number(r.vacancyId)));

  if (replies.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--muted); padding:20px 0;">Входящих откликов пока нет.</p>`;
    return;
  }

  container.innerHTML = replies.map(r => `
    <div class="dashboard-card" style="border-left: 3px solid var(--purple); background:var(--bg3); padding:16px; margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; margin-bottom:6px; flex-wrap:wrap; gap:6px;">
        <div><strong style="color:#fff;">${r.name || r.userName}</strong> <span style="color:var(--muted); font-size:13px;">(${r.email || r.userEmail})</span></div>
        <span style="font-size:11px; background:rgba(139,92,246,0.1); color:var(--purple); padding:2px 6px; border-radius:4px;">ID вакансии: ${r.jobId || r.vacancyId}</span>
      </div>
      <p style="font-size:13px; color:var(--text);"><strong>Навыки соискателя:</strong> ${r.skills || r.userSkills || 'Не указаны'}</p>
      ${r.cover ? `<p style="font-size:13px; color:var(--muted); font-style:italic; margin-top:6px; background:rgba(0,0,0,0.1); padding:6px; border-radius:4px;">"${r.cover}"</p>` : ''}
    </div>
  `).join('');
}

function renderCandidateReplies() {
  const container = el('candidate-replies-list');
  if (!container) return;

  const replies = getSafeData('wh_replies').filter(r => r.candidateEmail === STATE.user.email || r.email === STATE.user.email || r.userEmail === STATE.user.email);

  if (replies.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:var(--muted); padding:20px 0;">Вы еще никуда не откликались.</p>`;
    return;
  }

  container.innerHTML = replies.map(r => `
    <div class="dashboard-card" style="background:var(--bg3); padding:16px; margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
        <div>
          <h5 style="color:#fff; font-size:15px;">Отклик на вакансию (ID: ${r.jobId || r.vacancyId})</h5>
          <p style="color:var(--muted); font-size:13px;">Отправлено с профиля: ${r.name || r.userName}</p>
        </div>
        <span style="font-size:12px; background:rgba(200,250,90,0.1); color:var(--accent); padding:4px 10px; border-radius:20px;">На рассмотрении</span>
      </div>
    </div>
  `).join('');
}

function loadCandidateResume() {
  const saved = localStorage.getItem(`resume_${STATE.user.email}`);
  if (saved) {
    const cv = JSON.parse(saved);
    if (el('cv-name')) el('cv-name').value = cv.name || '';
    if (el('cv-title')) el('cv-title').value = cv.title || '';
    if (el('cv-skills')) el('cv-skills').value = cv.skills || '';
    if (el('cv-bio')) el('cv-bio').value = cv.bio || '';
  } else {
    if (el('cv-name')) el('cv-name').value = STATE.user.name || '';
  }
}

window.saveResume = function() {
  const name = el('cv-name').value.trim();
  const title = el('cv-title').value.trim();
  const skills = el('cv-skills').value.trim();
  const bio = el('cv-bio').value.trim();

  if (!name || !title) {
    alert('Пожалуйста, заполните ФИО и желаемую должность!');
    return;
  }

  localStorage.setItem(`resume_${STATE.user.email}`, JSON.stringify({ name, title, skills, bio }));
  alert('Резюме сохранено!');
  calculateDashboardStats();
};

function loadUserSettings() {
  if (el('set-name')) el('set-name').value = STATE.user.name || '';
  if (el('set-email')) el('set-email').value = STATE.user.email || '';

  if (STATE.role === 'employer') {
    if (el('settings-employer-fields')) el('settings-employer-fields').style.display = 'block';
    if (el('set-company')) el('set-company').value = STATE.user.company || '';
    if (el('set-industry')) el('set-industry').value = STATE.user.industry || '';
  }
}

window.saveSettings = function() {
  const name = el('set-name').value.trim();
  if (!name) { alert('Имя не может быть пустым!'); return; }

  STATE.user.name = name;
  if (STATE.role === 'employer') {
    STATE.user.company = el('set-company') ? el('set-company').value.trim() : '';
    STATE.user.industry = el('set-industry') ? el('set-industry').value.trim() : '';
  }

  localStorage.setItem(LS_KEY, JSON.stringify(STATE.user));

  let users = getSafeData('users');
  const idx = users.findIndex(u => u.email === STATE.user.email);
  if (idx !== -1) {
    users[idx].name = name;
    if (STATE.role === 'employer') {
      users[idx].company = STATE.user.company;
      users[idx].industry = STATE.user.industry;
    }
    localStorage.setItem('users', JSON.stringify(users));
  }

  alert('Настройки обновлены!');
  setupInterfaceByRole();
};

window.deleteAccount = function() {
  if (!confirm('Удалить личный кабинет окончательно?')) return;
  let users = getSafeData('users').filter(u => u.email !== STATE.user.email);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.removeItem(LS_KEY);
  window.location.href = 'registr.html';
};

window.logout = function() {
  localStorage.removeItem(LS_KEY);
  window.location.href = 'registr.html';
};
