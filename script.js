document.getElementById('facebook-register').addEventListener('click', function () {
  alert(document.forms.elements);
});

const buttonLogin = document.getElementById('button-login');
const userEmailPhone = document.getElementById('user-email-phone');

function alertLogin() {
  if (userEmailPhone.value !== '') {
    alert(`${userEmailPhone.value}`);
  } else {
    alert('Digite seu email ou telefone');
  }
}
buttonLogin.addEventListener('click', alertLogin);

const $
$(function () {
  $('#input-data').datepicker({
    dateFormat: 'dd/mm/yy',
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
    dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
    dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  });
});

const languages = document.querySelectorAll('.languages')[0];
const footerOthers = document.querySelectorAll('.footerOthers')[0];

function paginaEmDesenvolvimento() {
  alert('Página em desenvolvimento.');
  event.preventDefault();
}
languages.addEventListener('click', paginaEmDesenvolvimento);
footerOthers.addEventListener('click', paginaEmDesenvolvimento);
