let form = document.getElementById('form');

function dados(e) {
  let inputsArr = form.querySelectorAll('input');
  let valor1 = [];

  for (let i = 0; i < inputsArr.length; i += 1) {
    if (inputsArr[i].value == '') {
      e.preventDefault();
      alert('Preencha o campo ' + inputsArr[i].placeholder);
      return;
    }
  }

  for (let n = 0; n < (inputsArr.length - 3); n += 1) {
    e.preventDefault();
    valor1.push(inputsArr[n].value);
  }

  valor1.push(form.querySelectorAll('.genero input:checked')[0].value)

  e.preventDefault();
  alert("Dados enviados com sucesso: " + valor1.join(", "));
  return;
}

form.addEventListener('submit', dados);
