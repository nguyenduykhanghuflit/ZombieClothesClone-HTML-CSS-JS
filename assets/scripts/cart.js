// fetch('http://localhost:3000/filter/rooms?soNguoiLon=1&soTreEm=0&val=1-0')
//   .then((data) => data.json())
//   .then((dt) => console.log(dt));

fetch('http://localhost:3000/filter/rooms?soNguoiLon=1&soTreEm=0&val=1-0')
  .then((response) => response.json())
  .then((data) => console.log(data));
