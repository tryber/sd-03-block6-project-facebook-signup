const buttonLogin = document.getElementById('button-login');
const buttonRegister = document.getElementById('facebook-register');

buttonLogin.addEventListener('click', function () {
  const userEmailPhone = document.getElementById('user-email-phone').value;
  const userPassword = document.getElementById('user-password').value;
  let frase = `User: ${userEmailPhone} Senha: ${userPassword}`;
  alert(frase);
  document.getElementById('user-email-phone').value = '';
  document.getElementById('user-password').value = '';
});

buttonRegister.addEventListener('click', function () {
});
