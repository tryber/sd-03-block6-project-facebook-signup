const input = document.getElementById('user-email-phone');

function submit() {
  alert(input.value);
}

window.onload = function() {
  const submitLogin = document.getElementById('button-login');
  submitLogin.addEventListener('click', submit);
};
