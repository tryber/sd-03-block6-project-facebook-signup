window.onload = function () {
  const botaoEmailTelefone = document.getElementById('button-login');
  botaoEmailTelefone.addEventListener('click', function() {
  const emailTelefone = document.getElementById('user-email-phone');
  window.alert(`Olá, ${emailTelefone.value}`)
  });
}
