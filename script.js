document.getElementById("button-login").addEventListener("click", function () {
  console.log(document.getElementById("user-email-phone").value);
  alert(document.getElementById("user-email-phone").value);
  document.getElementById("user-email-phone").value = "";
  document.getElementById("user-password").value = ""
})
