window.onload = function() {
  let buttonEnter = document.getElementsByClassName("enter-button")[0];
  buttonEnter.addEventListener("click", function() {
    alert(document.getElementsByClassName("data-email-phone")[0].value);
  })
}
