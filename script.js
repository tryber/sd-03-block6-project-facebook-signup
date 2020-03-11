window.onload = function(){
    let botaoEmailTelefone = document.getElementById ('button-login')
    botaoEmailTelefone.addEventListener ('click', function(evento){
        let emailTelefone = document.getElementById ('user-email-phone')
        window.alert(`Olá, ${emailTelefone.value}`)
    })
}
