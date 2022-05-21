import validation from './validation.js';
const formLogin = document.querySelector('.form-login-cus');
const password = document.getElementById('password-cus');
const email = document.getElementById('email-cus');
formLogin.addEventListener('submit', function (e) {
  e.preventDefault();
  let checkEmpty = validation.checkRequired([email, password]);
  let checkEmailInvalid = validation.checkEmail(email);
  if (checkEmpty && checkEmailInvalid) formLogin.submit();
});
