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

const facebookRegister = document.getElementById('facebook-register');
const inputNome = document.getElementById('input-nome');
const inputSobrenome = document.getElementById('input-sobrenome');
const inputCelularEmail = document.getElementById('input-celular-email');
const inputSenha = document.getElementById('input-senha');
const inputData = document.getElementById('input-data');
const inputGenero = document.querySelector('radio');
function alertRegister() {
  const cadastro = document.querySelector('.cadastro');
  let text = '';
  for (let i = 0; i < cadastro.length; i += 1) {
    /*          if (cadastro.elements[i].value === '') {
              alert('Dados inválidos');
          } else { */

    text = `${text} ${cadastro.elements[i].value} \n`
  }
  alert(text);
}
facebookRegister.addEventListener('click', alertRegister);

const languages = document.querySelectorAll('.languages')[0];
const footerOthers = document.querySelectorAll('.footerOthers')[0];

function paginaEmDesenvolvimento() {
  alert('Página em desenvolvimento.');
  event.preventDefault();
}
languages.addEventListener('click', paginaEmDesenvolvimento);
footerOthers.addEventListener('click', paginaEmDesenvolvimento);
