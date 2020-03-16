const buttonLogin = document.getElementById('button-login');
const buttonRegister = document.getElementById('facebook-register');

buttonLogin.addEventListener('click', function () {
  const userEmailPhone = document.getElementById('user-email-phone').value;
  alert(userEmailPhone);
  document.getElementById('user-email-phone').value = '';
});

buttonRegister.addEventListener('click', function () {
});
