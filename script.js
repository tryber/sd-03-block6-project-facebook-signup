document.getElementById('facebook-register').addEventListener('click', function () { alert(document.forms.elements) });

let buttonLogin = document.getElementById('button-login');
let userEmailPhone = document.getElementById('user-email-phone');

function alertLogin () {
    if (userEmailPhone.value !== "") {
        alert(`${userEmailPhone.value}`);
    }
    else {
        alert("Digite seu email ou telefone");
    }
}
buttonLogin.addEventListener('click', alertLogin);