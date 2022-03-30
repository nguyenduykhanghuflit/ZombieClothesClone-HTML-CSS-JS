let formLogin = document.querySelector('.header-top-login-box');
let fromResetPassword = document.querySelector('.reset-password-box');

let btnResetPassword = document.getElementById('modal-reset-password');
let btnBackLogin = document.getElementById('modal-back-login');

let headerModal = document.querySelectorAll('.header-top-modal');
let a = document.getElementById('app');
btnResetPassword.addEventListener('click', (e) => {
  formLogin.style.display = 'none';
  fromResetPassword.style.display = 'block';
});

btnBackLogin.addEventListener('click', (e) => {
  formLogin.style.display = 'block';
  fromResetPassword.style.display = 'none';
});

if (fromResetPassword.style.display == 'block') {
  alert('dang block');
}

// if (formLogin.style.display == 'block') {
//   a.addEventListener(click, (e) => {
//     formLogin.style.display = 'none';
//   });
// }
