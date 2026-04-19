const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const emailError = document.getElementById('emailError');
const confirmError = document.getElementById('confirmError');
const btnRegister = document.getElementById('btnRegister');
const form = document.getElementById('registerForm');

const rules = {
    length: document.getElementById('ruleLength'),
    upper: document.getElementById('ruleUpper'),
    lower: document.getElementById('ruleLower'),
    number: document.getElementById('ruleNumber'),
    special: document.getElementById('ruleSpecial')
};

function validateEmail() {
    const value = email.value.trim();
    if (value === '') {
        email.classList.remove('valid', 'invalid');
        emailError.classList.remove('show');
        return false;
    }
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(value)) {
        email.classList.remove('valid');
        email.classList.add('invalid');
        emailError.textContent = 'Informe um e-mail válido';
        emailError.classList.add('show');
        return false;
    }
    email.classList.remove('invalid');
    email.classList.add('valid');
    emailError.classList.remove('show');
    return true;
}

function validatePassword() {
    const value = password.value;
    const checks = {
        length: value.length >= 8,
        upper: /[A-Z]/.test(value),
        lower: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)
    };

    for (const key in checks) {
        if (checks[key]) {
            rules[key].classList.add('met');
        } else {
            rules[key].classList.remove('met');
        }
    }

    const allMet = Object.values(checks).every(Boolean);

    if (value === '') {
        password.classList.remove('valid', 'invalid');
    } else if (allMet) {
        password.classList.remove('invalid');
        password.classList.add('valid');
    } else {
        password.classList.remove('valid');
        password.classList.add('invalid');
    }

    return allMet;
}

function validateConfirmPassword() {
    const value = confirmPassword.value;
    if (value === '') {
        confirmPassword.classList.remove('valid', 'invalid');
        confirmError.classList.remove('show');
        return false;
    }
    if (value !== password.value) {
        confirmPassword.classList.remove('valid');
        confirmPassword.classList.add('invalid');
        confirmError.textContent = 'As senhas não coincidem';
        confirmError.classList.add('show');
        return false;
    }
    confirmPassword.classList.remove('invalid');
    confirmPassword.classList.add('valid');
    confirmError.classList.remove('show');
    return true;
}

function updateButton() {
    const emailOk = validateEmail();
    const passOk = validatePassword();
    const confirmOk = validateConfirmPassword();
    btnRegister.disabled = !(emailOk && passOk && confirmOk);
}

email.addEventListener('input', updateButton);
password.addEventListener('input', function () {
    updateButton();
    if (confirmPassword.value !== '') {
        validateConfirmPassword();
    }
});
confirmPassword.addEventListener('input', updateButton);

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!btnRegister.disabled) {
        document.getElementById('modalOverlay').classList.add('show');
    }
});

document.getElementById('modalClose').addEventListener('click', function () {
    document.getElementById('modalOverlay').classList.remove('show');
});

document.getElementById('modalOverlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('show');
    }
});

window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('modalOverlay').classList.add('show');
});
