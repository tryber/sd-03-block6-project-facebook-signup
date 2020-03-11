const datepicker = document.getElementById('datepicker').DatePickerX;
datepicker.init({ format: 'dd/mm/yyyy' });

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
