
const buttonlogin = document.getElementById('button-login');
buttonlogin.addEventListener('click', function () {
  const user = document.getElementById('user-email-phone').value;
  alert(user);
});

document.getElementById('data').DatePickerX.init();
