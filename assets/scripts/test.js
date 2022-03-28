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

var btnContainer = document.querySelector('.detail-size');

// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName('size');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.querySelector('.active');
    current.classList.remove('active');
    this.classList.add('active');
  });
}
