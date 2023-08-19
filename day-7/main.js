const numeroTiendas = document.querySelector('#numeroTiendas');
const ulLista = document.querySelector('ul');
const btnCalcularVentas = document.querySelector('#btnCalcularVentas');
const btnMayorMenor = document.querySelector('#btnMayorMenor');
const pVentasTotales = document.querySelector('#ventasTotales')

numeroTiendas.addEventListener('input', mostrarTiendas);
btnCalcularVentas.addEventListener('click', calcularVentasTotales)
btnMayorMenor.addEventListener('click', calcularMayorMenor)

function mostrarTiendas(e) {

    const numeroTiendas2 = document.querySelector('#numeroTiendas');
    const cantidadTiendas2 = numeroTiendas.value;
    console.log(`esto es numero de tiendas: ${cantidadTiendas2}`);

    if (cantidadTiendas2 > 0) {

        let cantidadLi = ulLista.childElementCount;

        if (cantidadTiendas2 > cantidadLi) {
            //* entra a agregar tiendas
            for (let i = 1; i <= cantidadTiendas2; i++) {

                //*evaluar si el elemento con id=i existe
                const inputsVentas = document.querySelectorAll('[name="ventas"]');
                const existe = inputsVentas[i-1];

                if (!existe) { //* si no existe lo crea
                    //*crea elemento html
                        const nuevaTienda = document.createElement('li');
                        nuevaTienda.id = `ventasTienda${i}`;
                        nuevaTienda.classList.add('mb-4')
                        nuevaTienda.innerHTML = `
                      <label for="tienda1" class="text-base">Tienda ${i}:</label>
                      <input id="${i}" type="number" placeholder="$ 120.000" class="bg-gray-100 px-3 py-1 rounded-lg ml-1 w-44 border-2" name="ventas">
                      `
                        ulLista.appendChild(nuevaTienda);

                    
                } else { //* Si ya existe continue - no lo crea
                    continue
                };
            }; //* cierra ciclo for ---------------------

        } else {
            const numeroEliminar =  cantidadLi - cantidadTiendas2;
            for( let i = 0; i < numeroEliminar; i++) {
                const ultimoHijo = ulLista.lastChild;
                ulLista.removeChild(ultimoHijo)

            };
        };
    } else {
        limpiarTiendas();
    };
}

function limpiarTiendas() {
    ulLista.textContent = '';
}

function calcularVentasTotales() {
    const verVentas = document.querySelectorAll('[name="ventas"]')
    let totalVentas = 0;
    for (let ventas of verVentas) {
        totalVentas += Number(ventas.value);
    }

    pVentasTotales.textContent = totalVentas.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
}

function calcularMayorMenor() {
    const verVentas = document.querySelectorAll('[name="ventas"]')
    let mayor = 0;
    let menor = 0;

    //* for para ver mayor
    for (let tienda of verVentas) {
        if (Number(tienda.value) > mayor) {
            mayor = Number(tienda.value)
        }
    }

    //* for para ver menor
    menor = mayor;
    for (let tienda of verVentas) {
        if (Number(tienda.value) < menor) {
            menor = Number(tienda.value)
        }
    }

    //* asignar mayor
    for (let tienda of verVentas) {
        if (Number(tienda.value) === menor) {
            tienda.classList.add('border-red-500')
        }
    }

    //* asignar mayor
    for (let tienda of verVentas) {
        if (Number(tienda.value) === mayor) {
            tienda.classList.add('border-lime-500')
        }
    }
}