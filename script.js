const botaoLogin = document.querySelector('.button-login');
botaoLogin.addEventListener('click', function () {
  const inputLoginValue = document.querySelector('#user-email-phone');
  alert(`${inputLoginValue.value}`);
});

/* eslint-env jquery*/
$(function () {
  $('#datepicker').datepicker({
    dateFormat: 'dd/mm/yy',
  });
});
