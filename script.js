jQuery(function () {
  jQuery('#datepicker').datepicker({
    dateFormat: 'dd-mm-yy',
  });
});

const emailInput = document.getElementById('user-email-phone');
const loginBtn = document.getElementById('button-login');
loginBtn.addEventListener('click', function LoginAlert() {
  alert(emailInput.value);
});
