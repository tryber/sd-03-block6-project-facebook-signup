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
}
