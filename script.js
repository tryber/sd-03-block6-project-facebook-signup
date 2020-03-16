let buttonLogin = document.getElementById('button-login');
let buttonRegister = document.getElementById('facebook-register');

buttonLogin.addEventListener('click',function() {
    let userEmailPhone = document.getElementById('user-email-phone').value;
    let userPassword = document.getElementById('user-password').value;
    let frase = 'User: '+userEmailPhone+' Senha: '+userPassword;
    alert(frase);
    document.getElementById('user-email-phone').value = '';
    document.getElementById('user-password').value= '';
})

buttonRegister.addEventListener('click',function(){
    
})

