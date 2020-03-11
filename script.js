let botaoLogin = document.querySelector('.button-login');
    botaoLogin.addEventListener('click', function () {
        let inputLoginValue = document.querySelector('.login')
        alert(`Seu email ou telefone é: ${inputLoginValue.value}`)
    })