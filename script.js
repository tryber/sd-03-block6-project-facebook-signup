let buttonlogin = document.getElementById('button-login');
buttonlogin.addEventListener('click', function(event){
  alert("o usuário é " + ": " +
  document.getElementById('user-email-phone').value);
});