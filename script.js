// libs
window.DatePickerX.setDefaults(
  {format:'dd/mm/yyyy',
  weekDayLabels:['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']}
)

document.getElementById('data').DatePickerX.init();

// variaveis

const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');


// funcoes

function funcaoAlert() {
  alert(`${userEmailPhone.value}`);
}

// event listeners

buttonLogin.addEventListener('click', funcaoAlert);
