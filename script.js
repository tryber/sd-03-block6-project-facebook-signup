
const buttonlogin = document.querySelector('#button-login');

buttonlogin.addEventListener('click', function () {
  let user = document.getElementById('user-email-phone').value;
  alert(user);
});

document.getElementById('data').DatePickerX.init();
