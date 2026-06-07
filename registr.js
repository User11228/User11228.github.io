const ADMIN_EMAIL = 'admin@workhunt.kz';
const ADMIN_PASS = 'admin2026';

let currentRole = 'seeker';

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem('users') || '[]');
    } catch (error) {
        return [];
    }
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function toggleForm(type) {
    const isLogin = type === 'login';
    const isReg = type === 'reg';

    document.getElementById('login-form').style.display = isLogin ? 'grid' : 'none';
    document.getElementById('reg-form').style.display = isReg ? 'grid' : 'none';
    document.getElementById('forgot-form').style.display = 'none';
    document.getElementById('auth-content').style.display = 'block';
    document.getElementById('success-msg').style.display = 'none';

    document.getElementById('tab-login').classList.toggle('active', isLogin);
    document.getElementById('tab-reg').classList.toggle('active', isReg);
}

function setRole(role) {
    currentRole = role;
    const isEmployer = role === 'employer';

    document.getElementById('role-seeker').classList.toggle('active', !isEmployer);
    document.getElementById('role-employer').classList.toggle('active', isEmployer);
    document.getElementById('employer-fields').style.display = isEmployer ? 'block' : 'none';
}

function showSuccess(message) {
    document.getElementById('auth-content').style.display = 'none';
    document.getElementById('success-text').innerHTML = message;
    document.getElementById('success-msg').style.display = 'grid';
}

function handleLogin() {
    const email = document.getElementById('l-email').value.trim().toLowerCase();
    const pass = document.getElementById('l-pass').value.trim();

    if (!email || !pass) {
        alert('Введите email и пароль.');
        return;
    }

    if (email === ADMIN_EMAIL && pass === ADMIN_PASS) {
        sessionStorage.setItem('wh_admin_logged', 'true');
        localStorage.setItem('wh_current_user', JSON.stringify({
            name: 'Администратор',
            role: 'admin',
            email: ADMIN_EMAIL,
            isLogged: true
        }));
        window.location.href = 'admin.html';
        return;
    }

    const users = getUsers();
    const user = users.find(item => (item.email || '').toLowerCase() === email && item.pass === pass);

    if (!user) {
        alert('Неверный email или пароль.');
        return;
    }

    localStorage.setItem('wh_current_user', JSON.stringify({
        name: user.name,
        role: user.role,
        company: user.company || '',
        email: user.email,
        isLogged: true
    }));

    window.location.href = 'dashboard.html';
}

function handleRegister() {
    const name = document.getElementById('r-name').value.trim();
    const email = document.getElementById('r-email').value.trim().toLowerCase();
    const pass = document.getElementById('r-pass').value;
    const company = document.getElementById('r-company').value.trim();
    const emailError = document.getElementById('email-error');

    if (!name || !email || pass.length < 6) {
        alert('Заполните имя, email и пароль. Пароль должен быть не короче 6 символов.');
        return;
    }

    if (currentRole === 'employer' && !company) {
        alert('Для работодателя укажите название компании.');
        return;
    }

    if (email === ADMIN_EMAIL) {
        alert('Этот email зарезервирован для администратора.');
        return;
    }

    const users = getUsers();
    const isEmailTaken = users.some(item => (item.email || '').toLowerCase() === email);

    if (isEmailTaken) {
        emailError.style.display = 'block';
        alert('Этот email уже зарегистрирован.');
        return;
    }

    emailError.style.display = 'none';

    const newUser = {
        name,
        email,
        pass,
        role: currentRole,
        company: currentRole === 'employer' ? company : ''
    };

    users.push(newUser);
    saveUsers(users);

    localStorage.setItem('wh_current_user', JSON.stringify({
        name,
        role: currentRole,
        company: newUser.company,
        email,
        isLogged: true
    }));

    showSuccess('Регистрация прошла успешно. Теперь можно перейти в личный кабинет.');
}

function handleResetPassword() {
    const email = document.getElementById('f-email').value.trim().toLowerCase();

    if (!email) {
        alert('Введите email.');
        return;
    }

    const users = getUsers();
    const userExists = users.some(item => (item.email || '').toLowerCase() === email) || email === ADMIN_EMAIL;

    if (!userExists) {
        alert('Пользователь с таким email не найден.');
        return;
    }

    showSuccess(`Ссылка для восстановления отправлена на <strong style="color:var(--primary)">${email}</strong>.`);
}

document.addEventListener('DOMContentLoaded', () => {
    const forgotLink = document.getElementById('forgot-password-link');

    if (forgotLink) {
        forgotLink.addEventListener('click', (event) => {
            event.preventDefault();
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('reg-form').style.display = 'none';
            document.getElementById('forgot-form').style.display = 'grid';
            document.getElementById('tab-login').classList.remove('active');
            document.getElementById('tab-reg').classList.remove('active');
        });
    }

    const params = new URLSearchParams(window.location.search);
    if (params.get('tab') === 'registr' || params.get('tab') === 'reg') {
        toggleForm('reg');
    }
});
