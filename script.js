window.onload = () => {
  document.getElementById('button-login').addEventListener('click', () => {
    const emailTelefone = document.getElementById('user-email-phone');
    window.alert(`${emailTelefone.value}`);
  });
};
