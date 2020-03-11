window.onload= function(){
    let botaoEmailTelefone= document.getElementById("button-login")
    botaoEmailTelefone.addEventListener("click", function(evento){
        let emailTelefone= document.getElementById("user-email-phone")
        if(emailTelefone.value==""){
            evento.preventDefault();
            //window.alert("nada escrito")
        }else{
            window.alert(`Olá, ${emailTelefone.value}`)
        }
    })

    let novaNome= document.getElementById("nome")
    let novaSobrenome= document.getElementById("sobrenome")
    let novaCelEmail= document.getElementById("celularEmail")
    let novaSenha= document.getElementById("novaSenha")
    let novaData= document.getElementById("data")
    let novaGenF= document.getElementById("Feminino")
    let novaGenM= document.getElementById("Masculino")
    let novaPers= document.getElementById("Personalizado")
    let botaoCadasatrar= document.getElementById("facebook-register")
    botaoCadasatrar.addEventListener("click", function(){
        
    })
}
