

var usuarios =[],
    nCuentas =[],
    nTarjetas=[],
    nFechas = [];

var boton = document.getElementById('btn-regis')    

function registrarUsuario() {
    var usuariosInput = document.getElementById('nombreU').value,
        cuentasInput = document.getElementById('cuenta').value,
        tarjetasInput = document.getElementById('tarjeta').value,
        fechasInput = document.getElementById('dateU').value;

    usuarios.push(usuariosInput);
    nCuentas.push(cuentasInput);
    nTarjetas.push(tarjetasInput);
    nFechas.push(fechasInput)

    localStorage.setItem('usuarios', JSON.stringify(usuarios) );
    localStorage.setItem('cuentas', JSON.stringify(nCuentas) );
    localStorage.setItem('tarjetas', JSON.stringify(nTarjetas) );
    localStorage.setItem('fechas', JSON.stringify(nFechas) );

}

boton.addEventListener('click', registrarUsuario);