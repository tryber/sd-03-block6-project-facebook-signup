const botaoLogin = document.getElementById('button-login');
const inputUser = document.getElementById('user-email-phone');

botaoLogin.addEventListener('click', function () {
  alert(inputUser.value);
});
