
//--------------------------DETAIL-----------------------------

//---xử lý chọn size---
let btnSizes = document.querySelectorAll('.detail-size .size'); //mấy cái nút size

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