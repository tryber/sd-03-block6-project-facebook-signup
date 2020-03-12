document.getElementById('date').DatePickerX.init({ format: "dd/mm/yyyy" });

document.getElementById('button-login').addEventListener('click', function () {
  alert(document.getElementById('user-email-phone').value);
  document.getElementById('user-email-phone').value = '';
  document.getElementById('user-password').value = '';
});
