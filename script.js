const form = document.getElementById('form');

function dados(e) {
  const inputsArr = form.querySelectorAll('input');
  const valor1 = [];

  for (let i = 0; i < inputsArr.length; i += 1) {
    if (inputsArr[i].value === '') {
      e.preventDefault();
      alert('Preencha o campo '.concat(inputsArr[i].placeholder));
      return;
    }
  }

  for (let n = 0; n < (inputsArr.length - 3); n += 1) {
    valor1.push(inputsArr[n].value);
  }

  valor1.push(form.querySelectorAll('.genero input:checked')[0].value);

  alert('Dados enviados com sucesso: '.concat(valor1.join(', ')));
}

form.addEventListener('submit', dados);