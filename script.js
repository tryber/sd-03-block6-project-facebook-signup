// variaveis

const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');

// funcoes

function funcaoAlert() {
  alert(`${userEmailPhone.value}`);
}

// event listeners

buttonLogin.addEventListener('click', funcaoAlert);
