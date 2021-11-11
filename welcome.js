

var botonDatos = document.querySelector('#btn-consulta');

var nombreU = document.getElementById('nNombre');
var gNombre = JSON.parse(localStorage.getItem('usuarios'));
    nombreU.textContent = `Hola!! Bienvenid@ ${gNombre}`;



function logDatos() {

    var cuentaU = document.getElementById('nCuenta');
    var tarjetaU = document.getElementById('nTarjeta');
    var fechaU = document.getElementById('sFecha');

    nombreU.innerHTML = '';
    cuentaU.innerHTML = '';
    tarjetaU.innerHTML = '';
    fechaU.innerHTML = '';


    var gCuenta = JSON.parse(localStorage.getItem('cuentas')),
        gTarjeta = JSON.parse(localStorage.getItem('tarjetas')),
        gFecha = JSON.parse(localStorage.getItem('fechas'));


    cuentaU.textContent = `Numero de Cuenta: ${gCuenta}`;
    tarjetaU.textContent = `Numero de Tarjeta: ${gTarjeta}`;
    fechaU.textContent = `F. Nacimento: ${gFecha}`;

}

botonDatos.addEventListener('click', logDatos);