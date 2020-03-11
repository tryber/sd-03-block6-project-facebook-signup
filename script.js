const botaoLogin = document.querySelector(".button-login");
botaoLogin.addEventListener("click", function() {
  const inputLoginValue = document.querySelector(".login");
  alert(`Seu email ou telefone é: ${inputLoginValue.value}`);
});
