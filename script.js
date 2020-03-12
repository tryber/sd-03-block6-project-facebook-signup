document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
  document.getElementById('user-email-phone').value = '';
  document.getElementById('user-password').value = '';
});

var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'DD/MM/YYYY'
});
