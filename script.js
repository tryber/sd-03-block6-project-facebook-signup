function cadastro() {
    var nome = document.getElementById('nome').value
    var sobrenome = document.getElementById('sobrenome').value
    var celMail = document.getElementById('celularMail').value
    var senha = document.getElementById('senha').value
    var data = document.getElementById('data').value

    if (nome.length, sobrenome.length, celMail.length, senha.length, data.length > 0) {

        window.alert(`${nome} ${sobrenome} - ${celMail} - ${data}`)
        
    } else {
        window.alert("Dados inválidos.")
    }
}