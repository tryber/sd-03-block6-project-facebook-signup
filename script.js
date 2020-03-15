// Item 7 Pontos importantes: Ao clicar no botão, um alert
// deve ser exibido com o email ou telefone digitado pelo usuário.
const campoemailcelular = document.getElementById('user-email-phone');
const botaologin = document.getElementById('button-login');

function pegarEmailCelular() {
  alert(campoemailcelular.value);
}

botaologin.addEventListener('click', pegarEmailCelular);
