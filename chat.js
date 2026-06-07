// ============================================
// ДАННЫЕ
// ============================================

/*
  Список диалогов.
  В реальном проекте это пришло бы с сервера.
  Здесь храним в памяти + частично в localStorage.
*/
var DIALOGS = [
  {
    id: 1,
    company:   'Kaspi.kz',
    logo:      'KZ',
    color:     '#C8FA5A',
    vacancy:   'Senior Frontend Developer',
    salary:    'от 600 000 ₸',
    location:  'Алматы',
    status:    'viewed',        // статус отклика
    online:    true,
    lastTime:  '14:32',
    unread:    2,
    contact:   'Дамир Жумабаев (HR)',
    about:     'Крупнейший финтех-банк Казахстана. 15 000+ сотрудников.',
    site:      'kaspi.kz'
  },
  {
    id: 2,
    company:   'Kolesa Group',
    logo:      'KG',
    color:     '#8B5CF6',
    vacancy:   'Product Designer',
    salary:    'от 400 000 ₸',
    location:  'Алматы / Remote',
    status:    'approved',
    online:    true,
    lastTime:  '12:10',
    unread:    0,
    contact:   'Айгерим Смаилова (HR)',
    about:     'Автомобильная платформа №1 в Казахстане.',
    site:      'kolesa.kz'
  },
  {
    id: 3,
    company:   'Chocofamily',
    logo:      'CF',
    color:     '#F97316',
    vacancy:   'iOS Developer (Swift)',
    salary:    'от 700 000 ₸',
    location:  'Remote',
    status:    'new',
    online:    false,
    lastTime:  'Вчера',
    unread:    0,
    contact:   'Берик Сейткали (Tech Lead)',
    about:     'E-commerce группа. Chocofood, Chocolife и другие сервисы.',
    site:      'chocofamily.kz'
  },
  {
    id: 4,
    company:   'Freedom Finance',
    logo:      'FF',
    color:     '#60A5FA',
    vacancy:   'Data Analyst',
    salary:    '300–500 000 ₸',
    location:  'Астана',
    status:    'rejected',
    online:    false,
    lastTime:  'Пн',
    unread:    0,
    contact:   'Нурия Касенова (HR)',
    about:     'Международная финансовая группа.',
    site:      'ffin.kz'
  },
  {
    id: 5,
    company:   'Halyk Bank',
    logo:      'HB',
    color:     '#34D399',
    vacancy:   'HR Business Partner',
    salary:    '350–450 000 ₸',
    location:  'Алматы',
    status:    'viewed',
    online:    true,
    lastTime:  '10:05',
    unread:    1,
    contact:   'Салтанат Ержан (HR Director)',
    about:     'Крупнейший банк Казахстана. 8000+ сотрудников.',
    site:      'halykbank.kz'
  }
];

/*
  История сообщений для каждого диалога.
  Ключ = id диалога, значение = массив сообщений.
  Формат сообщения:
    { id, from: 'me'|'other', text, time, status: 'sent'|'delivered'|'read', type: 'text'|'system'|'vacancy' }
*/
var MESSAGES = {
  1: [
    { id: 1,  from: 'system', text: 'Вы откликнулись на вакансию Senior Frontend Developer', time: '10 янв' },
    { id: 2,  from: 'other',  text: 'Добрый день! Спасибо за отклик на вакансию Frontend Developer. Вас рассмотрели и хотели бы пригласить на собеседование.', time: '10:15', status: 'read' },
    { id: 3,  from: 'me',     text: 'Здравствуйте! Очень рад получить ваш ответ. Когда вам удобно провести встречу?', time: '10:22', status: 'read' },
    { id: 4,  from: 'other',  text: 'Мы могли бы встретиться в среду или четверг, с 14:00 до 17:00. Вам какое время удобнее?', time: '10:45', status: 'read' },
    { id: 5,  from: 'me',     text: 'Среда в 15:00 будет отлично! Это будет онлайн или в офисе?', time: '11:02', status: 'read' },
    { id: 6,  from: 'other',  text: 'В офисе, по адресу пр. Аль-Фараби 17/1, БЦ "Нурлы Тау". Пропуск оформим заранее — напишите ваше полное имя и номер удостоверения.', time: '11:20', status: 'read' },
    { id: 7,  from: 'me',     text: 'Алия Нурова, УД 123456789. Спасибо!', time: '11:25', status: 'read' },
    { id: 8,  from: 'other',  text: 'Отлично, принято! До встречи в среду.', time: '11:28', status: 'read' },
    { id: 9,  from: 'other',  text: 'Кстати, подготовьте примеры ваших работ на React — будем смотреть вместе с тимлидом.', time: '14:30', status: 'read' },
    { id: 10, from: 'other',  text: 'И ещё: есть ли у вас опыт работы с TypeScript в крупных проектах?', time: '14:32', status: 'delivered' }
  ],
  2: [
    { id: 1,  from: 'system', text: 'Ваш отклик одобрен', time: '8 янв' },
    { id: 2,  from: 'other',  text: 'Привет! Поздравляем, ваше резюме прошло отбор. Хотим предложить вам работу Product Designer.', time: '09:00', status: 'read' },
    { id: 3,  from: 'me',     text: 'Отлично! Расскажите подробнее об условиях.', time: '09:15', status: 'read' },
    { id: 4,  from: 'other',  text: 'Зарплата от 400 000 ₸, гибкий график, частичная удалённая работа. Классная команда из 5 дизайнеров!', time: '09:30', status: 'read' },
    { id: 5,  from: 'me',     text: 'Звучит интересно. Когда планируется выход?', time: '09:42', status: 'read' },
    { id: 6,  from: 'other',  text: 'Можем обсудить дату — от 1 февраля или позже, как вам удобно.', time: '12:10', status: 'read' }
  ],
  3: [
    { id: 1,  from: 'system', text: 'Вы откликнулись на вакансию iOS Developer (Swift)', time: '5 янв' },
    { id: 2,  from: 'me',     text: 'Добрый день! Откликаюсь на вакансию iOS Developer. Имею 3 года опыта в Swift, есть 5 приложений в App Store.', time: '15:00', status: 'read' },
    { id: 3,  from: 'other',  text: 'Привет! Посмотрели ваше резюме, выглядит интересно. Пришлите ссылки на ваши приложения в App Store?', time: '16:30', status: 'read' },
    { id: 4,  from: 'me',     text: 'Конечно! Вот ссылки: apps.apple.com/app1, apps.apple.com/app2. Ещё 3 приложения в корпоративных аккаунтах.', time: '16:45', status: 'delivered' }
  ],
  4: [
    { id: 1,  from: 'system', text: 'Вы откликнулись на вакансию Data Analyst', time: '3 янв' },
    { id: 2,  from: 'other',  text: 'Здравствуйте! К сожалению, после рассмотрения вашего резюме мы решили продолжить поиск других кандидатов. Спасибо за интерес к нашей компании.', time: '14:00', status: 'read' },
    { id: 3,  from: 'me',     text: 'Спасибо за ответ. Было бы полезно узнать, каких навыков мне не хватало?', time: '14:20', status: 'read' },
    { id: 4,  from: 'other',  text: 'Нам нужен был кандидат с опытом Tableau и Power BI. Удачи в поиске!', time: '15:05', status: 'read' }
  ],
  5: [
    { id: 1,  from: 'system', text: 'Вы откликнулись на вакансию HR Business Partner', time: 'Сегодня' },
    { id: 2,  from: 'other',  text: 'Добрый день! Ваш отклик получили, изучаем резюме. Есть вопрос: у вас есть опыт работы с системой 1С:ЗУП?', time: '10:05', status: 'delivered' }
  ]
};

// Текущий открытый диалог
var currentDialogId = null;

// Прикреплённые файлы (для текущего черновика)
var attachedFiles = [];

// Счётчик id для новых сообщений
var nextMsgId = 1000;


// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

function init() {
  // Имя пользователя из localStorage
  var raw = localStorage.getItem('wh_current_user');
  var name = 'Пользователь';
  if (raw) {
    try {
      var u = JSON.parse(raw);
      name = u.name || u.email || name;
    } catch(e) {}
  }

  // Если нет — берём из резюме
  if (name === 'Пользователь') {
    var resumeRaw = localStorage.getItem('wh_resume');
    if (resumeRaw) {
      try {
        var r = JSON.parse(resumeRaw);
        if (r.name) name = r.name;
      } catch(e) {}
    }
  }

  document.getElementById('header-name').textContent = name;
  document.getElementById('header-ava').textContent  = name[0].toUpperCase();

  // Нарисовать список диалогов
  renderDialogsList(DIALOGS);

  // Если в URL есть ?dialog=ID — открыть сразу
  var params  = new URLSearchParams(location.search);
  var dialogId = parseInt(params.get('dialog'));
  if (dialogId) {
    openDialog(dialogId);
  }
}


// ============================================
// СПИСОК ДИАЛОГОВ
// ============================================

// Нарисовать все диалоги
function renderDialogsList(dialogs) {
  var container = document.getElementById('dialogs-list');

  if (dialogs.length === 0) {
    container.innerHTML =
      '<div style="padding:24px 18px;text-align:center;color:var(--muted);font-size:13px">'
      + 'Диалоги не найдены'
      + '</div>';
    return;
  }

  container.innerHTML = dialogs.map(function(d) {
    // Последнее сообщение для превью
    var msgs    = MESSAGES[d.id] || [];
    var lastMsg = msgs[msgs.length - 1];
    var preview = lastMsg
      ? (lastMsg.from === 'me' ? 'Вы: ' : '') + lastMsg.text.slice(0, 40) + (lastMsg.text.length > 40 ? '...' : '')
      : 'Нет сообщений';

    var isSelected = d.id === currentDialogId;

    return '<div class="dialog-item' + (isSelected ? ' selected' : '') + '"'
      + ' id="dialog-item-' + d.id + '"'
      + ' onclick="openDialog(' + d.id + ')">'

      // Аватар
      + '<div class="company-ava" style="background:' + d.color + '">'
      + d.logo
      + (d.online ? '<div class="online-dot"></div>' : '')
      + '</div>'

      // Инфо
      + '<div class="dialog-info">'
      + '<div class="dialog-name">' + d.company + '</div>'
      + '<div class="dialog-preview' + (d.unread > 0 ? ' unread' : '') + '">' + preview + '</div>'
      + '</div>'

      // Время и счётчик
      + '<div class="dialog-right">'
      + '<div class="dialog-time">' + d.lastTime + '</div>'
      + (d.unread > 0 ? '<div class="unread-badge">' + d.unread + '</div>' : '')
      + '</div>'

      + '</div>';
  }).join('');
}

// Поиск по диалогам
function filterDialogs(query) {
  var q = query.toLowerCase().trim();
  if (!q) {
    renderDialogsList(DIALOGS);
    return;
  }
  var filtered = DIALOGS.filter(function(d) {
    return d.company.toLowerCase().includes(q)
        || d.vacancy.toLowerCase().includes(q);
  });
  renderDialogsList(filtered);
}


// ============================================
// ОТКРЫТЬ ДИАЛОГ
// ============================================

function openDialog(id) {
  currentDialogId = id;

  var dialog = DIALOGS.find(function(d) { return d.id === id; });
  if (!dialog) return;

  // Сбросить счётчик непрочитанных
  dialog.unread = 0;

  // Подсветить выбранный диалог
  document.querySelectorAll('.dialog-item').forEach(function(el) {
    el.classList.remove('selected');
  });
  var item = document.getElementById('dialog-item-' + id);
  if (item) item.classList.add('selected');

  // Показать шапку чата
  var header = document.getElementById('chat-header');
  header.style.display = 'flex';
  document.getElementById('chat-header-ava').textContent    = dialog.logo;
  document.getElementById('chat-header-ava').style.background = dialog.color;
  document.getElementById('chat-header-name').textContent   = dialog.company;
  document.getElementById('chat-header-vacancy').textContent = dialog.vacancy;
  document.getElementById('chat-header-status').textContent = dialog.online ? 'онлайн' : 'офлайн';
  document.getElementById('chat-header-status').style.color = dialog.online ? 'var(--teal)' : 'var(--muted)';

  // Скрыть пустой экран, показать сообщения и ввод
  document.getElementById('empty-chat').style.display    = 'none';
  document.getElementById('messages-area').style.display = 'flex';
  document.getElementById('input-area').style.display    = 'block';

  // Нарисовать сообщения
  renderMessages(id);

  // Заполнить правую панель
  renderInfoPanel(dialog);

  // Обновить список диалогов (убрать счётчик)
  renderDialogsList(DIALOGS);

  // Фокус на поле ввода
  document.getElementById('msg-input').focus();
}


// ============================================
// СООБЩЕНИЯ
// ============================================

// Нарисовать все сообщения в диалоге
function renderMessages(dialogId) {
  var msgs      = MESSAGES[dialogId] || [];
  var container = document.getElementById('messages-area');
  var html      = '';
  var prevFrom  = null;
  var prevDay   = null;

  msgs.forEach(function(msg, i) {
    // Разделитель дня
    var day = msg.time.includes(':') ? 'Сегодня' : msg.time;
    if (day !== prevDay) {
      html += '<div class="day-divider">' + day + '</div>';
      prevDay = day;
    }

    if (msg.type === 'system' || msg.from === 'system') {
      // Системное сообщение
      html += '<div class="system-msg">' + msg.text + '</div>';
      prevFrom = null;

    } else {
      // Начало новой группы (от другого отправителя)
      var isNewGroup = msg.from !== prevFrom;

      if (isNewGroup) {
        if (prevFrom !== null) html += '</div>'; // закрыть предыдущую группу
        html += '<div class="msg-group from-' + msg.from + '">';

        // Имя отправителя (только у "other")
        if (msg.from === 'other') {
          var dialog = DIALOGS.find(function(d) { return d.id === dialogId; });
          html += '<div class="msg-sender">' + (dialog ? dialog.contact : '') + '</div>';
        }
      }

      // Пузырь
      html += '<div class="bubble">' + escapeHtml(msg.text) + '</div>';

      // Время + статус
      var timeHtml = msg.time.includes(':') ? msg.time : '';
      var statusHtml = '';
      if (msg.from === 'me' && msg.status) {
        var statusIcon = msg.status === 'read' ? 'read' : msg.status === 'delivered' ? 'sent' : 'sent';
        var statusClass = msg.status === 'read' ? 'read' : '';
        statusHtml = '<span class="msg-status ' + statusClass + '">' + statusIcon + '</span>';
      }
      html += '<div class="bubble-time">' + timeHtml + ' ' + statusHtml + '</div>';

      prevFrom = msg.from;
    }
  });

  if (prevFrom !== null) html += '</div>'; // закрыть последнюю группу

  container.innerHTML = html;

  // Прокрутить вниз
  container.scrollTop = container.scrollHeight;
}

// Экранирование HTML (безопасность)
function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}


// ============================================
// ОТПРАВКА СООБЩЕНИЯ
// ============================================

function sendMessage() {
  if (!currentDialogId) return;

  var input = document.getElementById('msg-input');
  var text  = input.value.trim();

  if (!text && attachedFiles.length === 0) return;

  // Создать объект сообщения
  var now = new Date();
  var timeStr = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

  var msg = {
    id:     ++nextMsgId,
    from:   'me',
    text:   text || 'Прикрепленный файл',
    time:   timeStr,
    status: 'sent'
  };

  // Добавить в массив
  if (!MESSAGES[currentDialogId]) {
    MESSAGES[currentDialogId] = [];
  }
  MESSAGES[currentDialogId].push(msg);

  // Очистить поле
  input.value = '';
  input.style.height = 'auto';
  clearAttachments();

  // Перерисовать сообщения
  renderMessages(currentDialogId);

  // Обновить превью в списке диалогов
  var dialog = DIALOGS.find(function(d) { return d.id === currentDialogId; });
  if (dialog) {
    dialog.lastTime = timeStr;
    renderDialogsList(DIALOGS);
    // Восстановить выделение
    var item = document.getElementById('dialog-item-' + currentDialogId);
    if (item) item.classList.add('selected');
  }

  // Симуляция: статус "delivered" через 1 секунду
  setTimeout(function() {
    msg.status = 'delivered';
    renderMessages(currentDialogId);
  }, 1000);

  // Симуляция: ответ от работодателя через 2–4 секунды
  simulateReply(currentDialogId);
}

// Нажатие Enter — отправить, Shift+Enter — новая строка
function handleKeydown(e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}

// Автоизменение высоты textarea
function autoResize(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}


// ============================================
// СИМУЛЯЦИЯ ОТВЕТА РАБОТОДАТЕЛЯ
// ============================================

var DEMO_REPLIES = [
  'Спасибо за сообщение! Уточним и вернёмся к вам.',
  'Хорошо, принято 👍',
  'Отличный вопрос! Давайте обсудим подробнее на встрече.',
  'Понял вас. Могу ли я задать уточняющий вопрос?',
  'Ваша кандидатура нам очень интересна.',
  'Мы уже рассматриваем ваше предложение.',
  'Договорились! Ждём вас в указанное время.',
  'Спасибо за оперативность!'
];

function simulateReply(dialogId) {
  var dialog = DIALOGS.find(function(d) { return d.id === dialogId; });
  if (!dialog || !dialog.online) return; // офлайн — не отвечает

  var delay = 2000 + Math.random() * 2000; // 2–4 секунды

  // Показать "печатает..."
  setTimeout(function() {
    if (currentDialogId !== dialogId) return;
    var typing = document.getElementById('typing-indicator');
    document.getElementById('typing-name').textContent = dialog.contact + ' печатает...';
    typing.style.display = 'flex';

    // Скрыть и добавить сообщение
    setTimeout(function() {
      typing.style.display = 'none';
      if (currentDialogId !== dialogId) return;

      var replyText = DEMO_REPLIES[Math.floor(Math.random() * DEMO_REPLIES.length)];
      var now = new Date();
      var timeStr = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

      // Обновить статус моего последнего сообщения на "read"
      var msgs = MESSAGES[dialogId];
      if (msgs) {
        for (var i = msgs.length - 1; i >= 0; i--) {
          if (msgs[i].from === 'me') {
            msgs[i].status = 'read';
            break;
          }
        }
      }

      MESSAGES[dialogId].push({
        id:     ++nextMsgId,
        from:   'other',
        text:   replyText,
        time:   timeStr,
        status: 'read'
      });

      renderMessages(dialogId);

      // Обновить превью
      dialog.lastTime = timeStr;
      renderDialogsList(DIALOGS);
      var item = document.getElementById('dialog-item-' + dialogId);
      if (item) item.classList.add('selected');

    }, 1200);
  }, delay);
}


// ============================================
// ПРИКРЕПЛЕНИЕ ФАЙЛОВ
// ============================================

function attachFile() {
  // Создаём скрытый input[type=file] и кликаем
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = '.pdf,.doc,.docx,.jpg,.png';
  fileInput.multiple = true;

  fileInput.onchange = function() {
    var files = Array.from(fileInput.files);
    files.forEach(function(file) {
      attachedFiles.push(file.name);
    });
    renderAttachments();
  };

  fileInput.click();
}

function renderAttachments() {
  var preview = document.getElementById('attach-preview');

  if (attachedFiles.length === 0) {
    preview.classList.remove('visible');
    preview.innerHTML = '';
    return;
  }

  preview.classList.add('visible');
  preview.innerHTML = attachedFiles.map(function(name, i) {
    return '<div class="attach-chip">'
      + 'Файл: ' + name
      + '<span class="attach-chip-remove" onclick="removeAttach(' + i + ')">x</span>'
      + '</div>';
  }).join('');
}

function removeAttach(index) {
  attachedFiles.splice(index, 1);
  renderAttachments();
}

function clearAttachments() {
  attachedFiles = [];
  renderAttachments();
}


// ============================================
// ПРАВАЯ ПАНЕЛЬ: ИНФОРМАЦИЯ О КОМПАНИИ
// ============================================

function renderInfoPanel(dialog) {
  var statusLabels = {
    new:      ['Отправлен', 'status-new'],
    viewed:   ['Просмотрен', 'status-viewed'],
    approved: ['Одобрен', 'status-approved'],
    rejected: ['Отклонен', 'status-rejected']
  };

  var status = statusLabels[dialog.status] || statusLabels['new'];

  var templates = [
    'Здравствуйте! Есть ли возможность обсудить условия?',
    'Можете рассказать подробнее о задачах на этой позиции?',
    'Когда удобно провести интервью?',
    'Спасибо за ответ! Готов(а) к следующему этапу.'
  ];

  document.getElementById('info-panel').innerHTML =
    // Компания
    '<div class="info-section">'
    + '<div class="info-section-title">Компания</div>'
    + '<div class="company-big-ava" style="background:' + dialog.color + '">' + dialog.logo + '</div>'
    + '<div class="company-big-name">' + dialog.company + '</div>'
    + '<div class="company-big-meta">'
    + dialog.about + '<br>'
    + '<span style="color:var(--blue)">Сайт: ' + dialog.site + '</span>'
    + '</div>'
    + '</div>'

    // Вакансия
    + '<div class="info-section">'
    + '<div class="info-section-title">Вакансия</div>'
    + '<div class="vacancy-info-card">'
    + '<div class="vi-title">' + dialog.vacancy + '</div>'
    + '<div class="vi-salary">' + dialog.salary + '</div>'
    + '<div class="vi-meta">' + dialog.location + '</div>'
    + '</div>'
    + '</div>'

    // Статус отклика
    + '<div class="info-section">'
    + '<div class="info-section-title">Статус отклика</div>'
    + '<span class="status-badge ' + status[1] + '">' + status[0] + '</span>'
    + '</div>'

    // Контакт
    + '<div class="info-section">'
    + '<div class="info-section-title">Контакт</div>'
    + '<div style="font-size:13px;font-weight:600;margin-bottom:3px">' + dialog.contact + '</div>'
    + '<div style="font-size:12px;color:var(--muted)">'
    + (dialog.online
        ? '<span style="color:var(--teal)">● онлайн</span>'
        : '<span style="color:var(--muted)">● офлайн</span>')
    + '</div>'
    + '</div>'

    // Быстрые шаблоны
    + '<div class="info-section">'
    + '<div class="info-section-title">Быстрые ответы</div>'
    + templates.map(function(t) {
        return '<button class="template-btn" onclick="useTemplate(\'' + t.replace(/'/g, "\\'") + '\')">'
          + t
          + '</button>';
      }).join('')
    + '</div>';
}

// Вставить шаблон в поле ввода
function useTemplate(text) {
  var input = document.getElementById('msg-input');
  input.value = text;
  input.focus();
  autoResize(input);
}

// Скрыть/показать правую панель
function toggleInfoPanel() {
  var panel = document.getElementById('info-panel');
  panel.style.display = panel.style.display === 'none' ? 'flex' : 'none';
  panel.style.flexDirection = 'column';
}


// ============================================
// УВЕДОМЛЕНИЕ (TOAST)
// ============================================

function toast(message) {
  var el = document.getElementById('toast');
  el.textContent = message;
  el.classList.add('show');
  setTimeout(function() { el.classList.remove('show'); }, 2500);
}


// ============================================
// ЗАПУСК
// ============================================

init();
