const datepicker = document.getElementById('datepicker').DatePickerX;
datepicker.init({ format: 'dd/mm/yyyy' });
datepicker.setValue('03/01/1990');

document.getElementById('register').addEventListener('submit', (e) => {
  e.preventDefault();
  const value = document.getElementById('name').value;
  const gender = document.getElementsByName('gender');
  let checked = '';
  for (let i = 0; i < gender.length; i += 1) {
    if (gender[i].checked) {
      checked = gender[i].value;
    }
  }

  alert(`${value} - ${checked}`);
});

document.getElementById('login').addEventListener('submit', (e) => {
  e.preventDefault();
  const login = document.getElementById('user-email-phone');
  const password = document.getElementById('user-password');
  alert(`E-mail ou Telefone: ${login.value}`);
});
