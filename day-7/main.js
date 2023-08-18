const numeroTiendas = document.querySelector('#numeroTiendas');
const ulLista = document.querySelector('ul');
const btnCalcularVentas = document.querySelector('#btnCalcularVentas');
const btnMayorMenor = document.querySelector('#btnMayorMenor');
const pVentasTotales = document.querySelector('#ventasTotales')

numeroTiendas.addEventListener('input', mostrarTiendas);
btnCalcularVentas.addEventListener('click', calcularVentasTotales)
btnMayorMenor.addEventListener('click', calcularMayorMenor)

function mostrarTiendas(e) {

    const cantidadTiendas = Number(e.target.value);

    if (cantidadTiendas > 0) {

        let cantidadLi = ulLista.childElementCount;

        if (cantidadTiendas > cantidadLi) {
            //* entra a agregar tiendas
            for (let i = 1; i <= cantidadTiendas; i++) {
                //*crea elemento html
                let cantidadLi = document.querySelector('ul').childElementCount;
                if (cantidadTiendas > cantidadLi) {
                    const nuevaTienda = document.createElement('li');
                    nuevaTienda.id = `ventasTienda1`;
                    nuevaTienda.classList.add('mb-2')
                    nuevaTienda.innerHTML = `
                      <label for="tienda1" class="text-base">Tienda ${i}:</label>
                      <input type="number" placeholder="$ 120.000" class="bg-gray-100 px-3 py-1 rounded-lg ml-1 w-44 border-2" name="ventas">
                      `
                    ulLista.appendChild(nuevaTienda);

                }
            }

        } else {
            const ultimoHijo = ulLista.lastChild;
            ulLista.removeChild(ultimoHijo)
        }
    } else {
        limpiarTiendas();
    }
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
            // tienda.classList.replace('bg-gray-100', 'bg-lime-500')
            tienda.classList.add( 'border-red-500')
        }
    }
    //* asignar mayor
    for (let tienda of verVentas) {
        if (Number(tienda.value) === mayor) {

            // tienda.classList.replace('bg-gray-100', 'bg-lime-500')
            tienda.classList.add('border-lime-500')
        }
    }
}