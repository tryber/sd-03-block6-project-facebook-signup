function cadastro() {
  let nome = document.getElementById('nome').value;
  let sobrenome = document.getElementById('sobrenome').value;
  let celMail = document.getElementById('celularMail').value;
  let senha = document.getElementById('senha').value;
  let data = document.getElementById('data').value;

  if (nome.length && sobrenome.length && celMail.length && senha.length && data.length > 0){

      window.alert(`${nome} ${sobrenome} - ${celMail} - ${data}`);      
      }else{
      window.alert('Dados inválidos.');
  }
}
