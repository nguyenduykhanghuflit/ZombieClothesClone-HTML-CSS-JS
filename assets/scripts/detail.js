//Chi tiết hình ảnh
function clickme(smallImg) {
  var fullImg = document.getElementById('imagebox');
  fullImg.src = smallImg.src;
}

let btnMinus = document.querySelector('.button-minus');
let btnAdd = document.querySelector('.button-add');
let amout = document.querySelector('.input-amout');

//nút thêm bớt sản phẩm
btnMinus.addEventListener('click', (e) => {
  let currentVal = amout.value;
  if (currentVal > 1) {
    let newVal = currentVal - 1;
    amout.value = newVal;
  }
});
btnAdd.addEventListener('click', (e) => {
  let currentVal = amout.value;
  let newVal = parseInt(currentVal) + 1;
  amout.value = newVal;
});
