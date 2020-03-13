
const buttonlogin = document.querySelector('#button-login');
const user = document.getElementById('user-email-phone').value;

buttonlogin.addEventListener('click', function () {
  alert(user);
});

document.getElementById('data').DatePickerX.init();
