let dadosPessoais =  document.querySelectorAll('.form-box');
let botaoCadastro = document.querySelector('.btn-cadastro');
function validaNome() {
  let nome =  dadosPessoais[0];
  let sobrenome =  dadosPessoais[1];
  if(nome.value === '') {
    alert('Preencha o campo Nome');
    nome.focus(); 
  }
  else if (sobrenome.value === '') {
    alert('Preencha o campo Sobrenome');
  }
    return true;
}
function checarEmail(){
  if( dadosPessoais[2].value=="" 
      || dadosPessoais[2].value.indexOf('@') === -1
      || dadosPessoais[2].value.indexOf('.') === -1) {
      alert( "Por favor, informe um e-mail válido!" );
      return false;
    }
    return true;
}
function validarCadastro() {
  validaNome();
  checarEmail();
}
botaoCadastro.addEventListener('click', validarCadastro);
