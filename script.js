//

const field = document.getElementById('datepicker');
const picker = new Pikaday({
  onSelect: function(date) {
    field.value = picker.toString();
  },
});
field.parentNode.insertBefore(picker.el, field.nextSibling);
