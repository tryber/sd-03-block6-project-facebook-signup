// libs

window.DatePickerX.setDefaults(
  {format:'dd/mm/yyyy',
  weekDayLabels:['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom']}
)

document.getElementById('data').DatePickerX.init();

// validação do form

new window.JustValidate('.form', {
  rules:{
    name: {
      required: true,
    },
    password: {
      required: true,
      password: true,
    },
    sob: {
      required: true,
      minLength: 3,
      maxLength: 30,
    },
    strength: {
      // custom: '^([0-9]{9})|([A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})$',
      required: true,
      minLength: 3,
      maxLength: 30
    },
    radio: {
      required: true
    }
  },
  messages: {
    name: {
      required: 'Este campo é obrigatório'
    },
    password: {
      required: 'Este campo é obrigatório'
    },
    sob: {
      required: 'Este campo é obrigatório'
    },
    strength : {
      required: 'Este campo é obrigatório',
      // custom: 'Digite um e-mail ou telefone válido'
    },
    radio : {
      required: 'Uma opção é obrigatória'
    }
  },
  colorWrong: "red",
  focusWrongField: true
});





// variaveis

const buttonLogin = document.querySelector('#button-login');
const userEmailPhone = document.querySelector('#user-email-phone');
const buttonCreateAccount = document.querySelector('#facebook-register');
const form = document.querySelectorAll('.form input');


// funcoes

function funcaoAlert(event) {
  event.preventDefault();
  if (event.currentTarget.value === '1'){
    alert(`${userEmailPhone.value}`);
  } else {
    let opt = document.getElementsByName('gender');
    for (let i = 0; i < opt.length; i+=1) {
      if(opt[i].checked) {
        opt = opt[i].value
        console.log(opt);
      }
    }
    alert(`${form[0].value} - ${opt}`);
  }
  
}

// event listeners

buttonLogin.addEventListener('click', funcaoAlert);
buttonCreateAccount.addEventListener('click', funcaoAlert);