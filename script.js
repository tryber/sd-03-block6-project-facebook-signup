const datepicker = document.getElementById('datepicker').DatePickerX;
datepicker.init({ format: 'dd/mm/yyyy' });

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
});
