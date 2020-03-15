const dadosPessoais = document.querySelectorAll('.form-box');
const botaoCadastro = document.querySelector('.btn-cadastro');
function validaNome() {
  const nome = dadosPessoais[0];
  const sobrenome = dadosPessoais[1];
  if (nome.value === '' || sobrenome.value === '') {
    return false;
  }
  return true;
}
function checarEmail() {
  if (dadosPessoais[2].value === '' || dadosPessoais[2].value.indexOf('@') === -1 || dadosPessoais[2].value.indexOf('.') === -1) {
    return false;
  }
  return true;
}
function checarSenha() {
  const senha = dadosPessoais[3].value;
  const tamanhoSenha = senha.length;
  if (senha === '' || tamanhoSenha < 8) {
    return false;
  }
  return true;
}
function validarCadastro() {
  let erros = 0;
  const nome = validaNome();
  const senha = checarSenha();
  const email = checarEmail();
  if (!email) {
    erros += 1;
  }
  if (!senha) {
    erros += 1;
  }
  if (!nome) {
    erros += 1;
  }
  if (erros >= 1) {
    alert('Dados inválidos');
  }
  if (erros === 0) {
    const valorNome = dadosPessoais[0].value;
    const valorSobrenome = dadosPessoais[1].value;
    const valorEmail = dadosPessoais[2].value;
    const genero = 'exemplo';
    const mensagem = `Nome: ${valorNome} ${valorSobrenome} - ${genero}, E-mail: ${valorEmail}`;
    alert(mensagem);
  }
}
botaoCadastro.addEventListener('click', validarCadastro);
/* global Pikaday:true */
/* eslint no-undef: "error" */
const pikaday = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'd/M/YYYY',
  i18n: {
    previousMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
  },
  toString(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  },
  parse(dateString) {
    const parts = dateString.split('/');
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  },
});

pikaday.toString();
