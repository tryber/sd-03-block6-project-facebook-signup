window.onload = function () {
  submitLogin.addEventListener('click', submit);
  submitForm.addEventListener('click', verificaFormulario);
}

// login
const submitLogin = document.getElementById('button-login');
const input = document.getElementById('user-email-phone');

// Formulario
// const nomeForm = document.getElementById('nomeForm');
// const sobreNomeForm = document.getElementById('sobrenomeForm');
// const emailForm = document.getElementById('emailForm');
// const senhaForm = document.getElementById('senhaForm');
// const nascimentoForm = document.getElementById('senhaForm');
// const radioFemForm = document.getElementById('femininoForm');
// const radioMascForm = document.getElementById('masculinoForm');
// const radioPersonForm = document.getElementById('personForm');
// submit
const submitForm = document.getElementById('facebook-register');

function submit () {
  alert(input.value);
}

// function verificaFormulario() {
// }
