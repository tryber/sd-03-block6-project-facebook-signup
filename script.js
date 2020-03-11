const datepicker = document.getElementById('datepicker').DatePickerX;
datepicker.init({ format: 'dd/mm/yyyy' });

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let value = document.getElementById('name').value;
  let gender = document.getElementsByName('gender');
  let checked = "";
  for(i = 0; i < gender.length; i++) { 
	    if(gender[i].checked) {
	      checked = gender[i].value; 
	    }
    }

  alert(value + " - " + checked);
});
