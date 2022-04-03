//ẩn hiện modal
const listActions = document.querySelectorAll('.header-top-link');
const modals = document.querySelectorAll('.header-top-modal');

const removeAllClassShowModal = (modals) => {
  modals.forEach((item) => {
    if (item.classList.contains('header-top-modal-show'))
      item.classList.remove('header-top-modal-show');
  });
};

listActions.forEach((item) => {
  item.addEventListener('click', (e) => {
    let parent = item.parentElement;
    let modalShow = parent.querySelector('.header-top-modal');
    if (modalShow.classList.contains('header-top-modal-show'))
      modalShow.classList.remove('header-top-modal-show');
    else {
      removeAllClassShowModal(modals);
      modalShow.classList.add('header-top-modal-show');
    }
  });
});

const btnResetPassword = document.getElementById('modal-reset-password');
const modalResetPassword = document.querySelector('.reset-password-box');
const btnBackLogin = document.getElementById('modal-back-login');
const modalLogin = document.querySelector('.header-top-login-box');

//hiện form quên mật khẩu
btnResetPassword.addEventListener('click', (e) => {
  modalLogin.classList.remove('header-top-modal-show');
  modalResetPassword.classList.add('header-top-modal-show');
});
//trở về đăng nhập
btnBackLogin.addEventListener('click', (e) => {
  modalLogin.classList.add('header-top-modal-show');
  modalResetPassword.classList.remove('header-top-modal-show');
});

//chuyển hướng vào giỏ hàng &thanh toán
let btnViewCart = document.querySelector('.box-view-cart');
btnViewCart.addEventListener('click', (e) => {
  window.location = 'http://localhost:5501/cart.html';
});

let btnViewCheckout = document.querySelector('.box-make-payment');
btnViewCheckout.addEventListener('click', (e) => {
  window.location = 'http://localhost:5501/checkout.html';
});

//validation form

//validation form
