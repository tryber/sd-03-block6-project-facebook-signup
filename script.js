$(function(){
  $("#datepicker").datepicker({
      dateFormat: "dd-mm-yy"
  });
});

const emailInput = document.getElementById('user-email-phone');
const loginBtn = document.getElementById('button-login');
loginBtn.addEventListener('click', LoginAlert);

function LoginAlert() {
  alert(emailInput.value);
}