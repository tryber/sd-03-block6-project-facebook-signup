function verificaData() {
  let day = document.getElementById('day')
  return day
}

function criaConta () {
  preventDefault();
  let verificador = true;// Se chegar como true no final ta td certo, caso contrario, dados inválidos
  verificador = verificador * verificaData();
  if (verificador) {

  } else {
    window.alert('Dados inválidos');
  }
}

function LOADED() {
  let buttonCadastreSe = document.getElementById('facebook-register');
  buttonCadastreSe.addEventListener('click', criaConta);

  console.log(picker);

}

window.onload = LOADED();
