const name = document.getElementById('nome').value;
const btnCadastro = document.getElementById('facebook-register');

function validar() {
  if (name.lenght === 0) {
    window.alert('teste');
  } else {
    window.alert('ok');
  }
}

window.onload = function () {
  btnCadastro.addEventListener('click', validar);
};