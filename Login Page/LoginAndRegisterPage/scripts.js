document.querySelector('.login-form').style.display = 'block';
document.querySelector('.register-form').style.display = 'none';

document.getElementById('register-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.register-form').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.login-form').style.display = 'block';
    document.querySelector('.register-form').style.display = 'none';
});
