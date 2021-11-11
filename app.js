var boton = document.getElementById('btn-login')


function getUserName() {
    var nameField = document.getElementById('card-number').value;
    var passwordUser = document.getElementById('passwordUser').value;
    var result = document.getElementById('incorrect');


    if (nameField === '44578' && passwordUser === '12345678') {
        document.location.assign('/welcome.html')
    }
    if (nameField === '49291' && passwordUser === '87654321') {
        document.location.assign('/welcome.html')
        

    } else {
        result.textContent = 'Usuario incorrecto o Contraseña incorrecto';
    }
}

boton.addEventListener('click', getUserName)

