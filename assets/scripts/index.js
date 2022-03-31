// let formLogin = document.querySelector('.header-top-login-box');
// let fromResetPassword = document.querySelector('.reset-password-box');

// let btnResetPassword = document.getElementById('modal-reset-password');
// let btnBackLogin = document.getElementById('modal-back-login');

// let headerModal = document.querySelectorAll('.header-top-modal');
// let a = document.getElementById('app');
// btnResetPassword.addEventListener('click', (e) => {
//   formLogin.style.display = 'none';
//   fromResetPassword.style.display = 'block';
// });

// btnBackLogin.addEventListener('click', (e) => {
//   formLogin.style.display = 'block';
//   fromResetPassword.style.display = 'none';
// });

let btnMinus = document.querySelectorAll('.button-minus');
let btnAdd = document.querySelectorAll('.button-add');
let amout = document.querySelectorAll('.input-amout');
let totalMoney = document.querySelectorAll('.total-money');
let priceProducts = document.querySelectorAll('.info-price');

// const TotalMoney = () => {
//   let total = 0;
//   priceProducts.forEach((money) => {
//     let price = parseInt(
//       money.textContent.slice(0, money.textContent.length - 1)
//     );
//     total += price;
//   });
//   console.log(total);
// };

for (let i = 0; i < btnMinus.length; i++) {
  let priceProduct = priceProducts[i].textContent;
  let price = parseInt(priceProduct.slice(0, priceProduct.length - 1));
  btnMinus[i].addEventListener('click', (e) => {
    let currentVal = amout[i].value;
    if (currentVal > 1) {
      // TotalMoney();
      let newVal = currentVal - 1;
      amout[i].value = newVal;
      totalMoney[i].innerHTML = `${newVal * price} ₫`;
    }
  });
  btnAdd[i].addEventListener('click', (e) => {
    // TotalMoney();
    let currentVal = amout[i].value;
    let newVal = parseInt(currentVal) + 1;
    amout[i].value = newVal;
    totalMoney[i].innerHTML = `${newVal * price} ₫`;
  });
}
