const formInfo = document.querySelector('.form-info');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const address = document.getElementById('address');
const province = document.getElementById('province');
const district = document.getElementById('district');
const village = document.getElementById('village');

//hiển thị lỗi
const showError = (input, message) => {
  const parent = input.parentElement;
  parent.classList.add('err');
  const small = parent.querySelector('small');
  small.innerText = message;
};

//tắt lỗi
const showSuccess = (input) => {
  const parent = input.parentElement;
  if (parent.classList.contains('err')) {
    parent.classList.remove('err');
    const small = parent.querySelector('small');
    small.innerText = '';
  }
};

const getPlaceholder = (input) => {
  return input.getAttribute('placeholder');
};

//kiểm tra chưa nhập
const checkRequired = (inputArr) => {
  let isRequired = true;
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getPlaceholder(input)} không được trống`);
      isRequired = false;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
};

//kiểm tra email hợp lệ
const checkEmail = (input) => {
  let check = false;
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
    check = true;
  } else {
    showError(input, 'Email không hợp lệ');
  }
  return check;
};
const checkNumberPhone = (input) => {
  let check = false;
  let regex = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
  if (regex.test(input.value.trim())) {
    showSuccess(input);
    check = true;
  } else {
    showError(input, 'Số điện thoại không hợp lệ');
  }
  return check;
};

//kiểm tra tỉnh thành phố quận huyện xã
const checkAddress = (selectArr) => {
  let check = true;
  selectArr.forEach(function (select) {
    if (select.value.trim() === 'invalid') {
      showError(select, `Bạn chưa chọn ${getPlaceholder(select)}`);
      check = false;
    } else {
      showSuccess(select);
    }
  });
  return check;
};

//submit form
formInfo.addEventListener('submit', function (e) {
  e.preventDefault();

  let checkEmpty = checkRequired([fullname, email, phone, address]);
  let checkEmailInvalid = checkEmail(email);
  let checkPhoneInvalid = checkNumberPhone(phone);
  let checkAddressInvalid = checkAddress([province, village, district]);

  if (
    checkEmpty &&
    checkEmailInvalid &&
    checkPhoneInvalid &&
    checkAddressInvalid
  )
    alert('oke bro');
});
