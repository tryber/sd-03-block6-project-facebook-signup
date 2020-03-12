const name = document.getElementById('nome').value;
const lastName = document.getElementById('sobrenome');
const contact = document.getElementById('contato');
const password = document.getElementById('senha');
const date = document.getElementById('datepicker');
const genderF = document.getElementById('feminino');
const genderM = document.getElementById('masculino');
const genderP = document.getElementById('personalizado');
const btnCadastro = document.getElementById('facebook-register')

function validar() {
  if (name.lenght == 0) {
    window.alert('teste');
  } else {
    window.alert('ok');
  }
}

window.onload = function () {
  btnCadastro.addEventListener('click', validar);
}
