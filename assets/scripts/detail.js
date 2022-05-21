//--------------------------DETAIL-----------------------------

//---xử lý chọn size---
let btnSizes = document.querySelectorAll('.detail-size .size'); //mấy cái nút size
let btnAddCart = document.querySelector('.detail-button-add-cart');

const removeAllSizeActive = (btnSizes) => {
  btnSizes.forEach((size) => {
    if (size.classList.contains('size-active'))
      size.classList.remove('size-active');
  });
};

for (let i = 0; i < btnSizes.length; i++) {
  btnSizes[i].addEventListener('click', (e) => {
    removeAllSizeActive(btnSizes);
    btnSizes[i].classList.add('size-active');
  });
}

const getSize = () => {
  let selectSize = null;
  btnSizes.forEach((size) => {
    if (size.classList.contains('size-active'))
      selectSize = size.textContent.trim();
  });
  return selectSize;
};

let price = document.querySelector('.total-money').textContent;

//thêm vào giỏ hàng
btnAddCart.addEventListener('click', (e) => {
  let size = getSize();
  if (size != null) {
    let img = document.querySelector('#imagebox').src;
    let totalMoney = document.querySelector('.total-money').textContent;
    let nameProduct = document.querySelector('.detail-title').textContent;
    let amount = document.querySelector('.input-amout').value;
    let data = { nameProduct, price, totalMoney, size, img, amount };

    let currentData = localStorage.getItem('cart');
    currentData == null
      ? localStorage.setItem('cart', JSON.stringify([data]))
      : addData(data);
  } else alert('bạn chưa chọn size');
});


function addData(data) {
  let currentData = JSON.parse(localStorage.getItem('cart'));
  currentData.push(data);
  localStorage.setItem('cart', JSON.stringify(currentData));
}

function show() {
  let bb = JSON.parse(localStorage.getItem('cart'));
  bb.forEach((item) => {
    console.log('==========================');
    console.log(item.nameProduct);
    console.log(item.totalMoney);
  });
}

show();
