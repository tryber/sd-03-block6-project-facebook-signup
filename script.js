
const buttonlogin = document.querySelector('.button-login');
let user = document.getElementById('user-email-phone').value;
buttonlogin.addEventListener('click', function () {
  alert(user);
});

document.getElementById('data').DatePickerX.init();
