function verificaData() {
  const day = document.getElementById('day');
  return day;
}

function criaConta() {
  preventDefault();
  let verificador = true;// Se chegar como true no final ta td certo
  verificador *= verificaData();
  if (verificador) {
    return(true)
  } else {
    window.alert('Dados inválidos');
  }
}

function LOADED() {
  const buttonCadastreSe = document.getElementById('facebook-register');
  buttonCadastreSe.addEventListener('click', criaConta);
}

window.onload = LOADED();
