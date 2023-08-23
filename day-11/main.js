const nombre = document.querySelector('#nombre');
const nCuenta = document.querySelector('#nCuenta');
const dolares = document.querySelector('#dolares');
const euros = document.querySelector('#euros');
const cbu = document.querySelector('#cbu');
const abierta = document.querySelector('#abierta');

document.addEventListener('DOMContentLoaded', llenarCampos);

function llenarCampos() {
    //* llamar al json
    let baseDatos = fetch('009-resumen.json')
                    .then(respuesta => respuesta.json())
                    .then( resultado => recuperarDatos(resultado))
                    .catch(error => {
                        alert(error);
                    })
}

function recuperarDatos(datos) {
    console.log(datos.saldo.find(element => element.moneda === 'USD').monto);
    nombre.textContent = datos.titular;
    nCuenta.textContent = datos.nro_cuenta;
    dolares.textContent = datos.saldo.find(element => element.moneda === 'USD').monto + ' USD';
    euros.textContent = datos.saldo.find(element => element.moneda === 'EUR').monto + ' USD';

    cbu.textContent = datos.cbu;
    abierta.textContent = datos.abierto;
}