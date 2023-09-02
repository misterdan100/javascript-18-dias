const tbody = document.querySelector('tbody');
const divCol2 = document.querySelector('#col2');
const idInput = document.querySelector('#id');
const brandInput = document.querySelector('#brand');
const modelInput = document.querySelector('#model');
const colorInput = document.querySelector('#color');
const storageInput = document.querySelector('#storage');
const cpuInput = document.querySelector('#cpu');
const btnEdit = document.querySelector('#btnEdit');
const btnCreate = document.querySelector('#btnCreate');


document.addEventListener('DOMContentLoaded', consultarDatosAPI);
tbody.addEventListener('click', e => {
    if (e.target.classList.contains('btnEdit')) { editPutDataInput(e) }
    if (e.target.classList.contains('btnDelete')) { deleteProduct(e) }
});
btnEdit.addEventListener('click', editProductDB);
btnCreate.addEventListener('click', createNewProduct);

let datos = [];

async function consultarDatosAPI() {
    await fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db')
        .then(respuesta => respuesta.json())
        .then(resultado => {
            datos = resultado.dispositivos;
            mostrarAlerta(true, 'Todos los registros fueron cargados!');
        })
        .catch(error => {
            mostrarAlerta(false, 'Ocurrio un error al cargas los dispositivos');
        })

    // const obtenerProductos = async () => {
    //   try {
    //     const resultado = await fetch('https://my-jso-server.typicode.com/fedegaray/telefonos/db');
    //     const productos = await resultado.json();
    //     return productos.dispositivos
    //   } catch (error) {
    //     mostrarAlerta(false, 'Ocurrio un error al cargas los dispositivos')
    //   }
    // }
    // datos = await obtenerProductos();

    mostrarDispositivos(datos);
}

function mostrarDispositivos(datos) {
    tbody.textContent = '';

    for (let registro of datos) {
        const { id, marca, modelo, color, almacenamiento, procesador } = registro;
        const tr = document.createElement('TR');
        tr.innerHTML = `
    <td>${id}</td>
    <td>${marca}</td>
    <td>${modelo}</td>
    <td>${color}</td>
    <td>${almacenamiento}</td>
    <td>${procesador}</td>
    <td id="buttons">
      <button id="${id}" class="btnEdit">Edit</button>
      <button id="${id}" class="btnDelete">Delete</button>
    </td>
    `
        tbody.appendChild(tr)
    }
}

function editPutDataInput(e) {
    const producto = datos.find(producto => producto.id === Number(e.target.id));

    const { id, marca, modelo, color, almacenamiento, procesador } = producto;

    idInput.value = id;
    brandInput.value = marca;
    colorInput.value = color;
    modelInput.value = modelo;
    storageInput.value = almacenamiento;
    cpuInput.value = procesador;

    btnEdit.removeAttribute('disabled')
    btnEdit.textContent = 'Save';

    btnCreate.setAttribute('disabled', 'true')

}

function editProductDB(e) {
    const arrayMod = datos.map(producto => {
        if (producto.id === Number(idInput.value)) {
            producto.marca = brandInput.value;
            producto.color = colorInput.value;
            producto.modelo = modelInput.value;
            producto.almacenamiento = storageInput.value;
            producto.procesador = cpuInput.value;
            return producto
        } else {
            return producto
        }
    })

    datos = arrayMod;
    mostrarDispositivos(datos);

    btnEdit.textContent = 'Edit';
    btnEdit.setAttribute('disabled', 'true');
    btnCreate.removeAttribute('disabled')

    mostrarAlerta(true, 'Modificado Correctamente!');

    //! AXIOS edit product-----------
    axios.put(`https://jsonplaceholder.typicode.com/posts/${idInput.value}`, {
        marca: brandInput.value,
        color: colorInput.value,
        modelo: modelInput.value,
        almacenamiento: storageInput.value,
        procesador: cpuInput.value,
    })
        .then(respuesta => console.log(respuesta.data))
        .catch(error => console.log(error))


    cleanForm();
}

async function createNewProduct() {
    const newProduct = {
        id: Date.now(),
        marca: brandInput.value,
        modelo: modelInput.value,
        color: colorInput.value,
        almacenamiento: storageInput.value,
        procesador: cpuInput.value,
    }

    datos.push(newProduct);
    mostrarDispositivos(datos);

    //* POST new product to API
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))

    cleanForm();
    mostrarAlerta(true, 'Agregado Correctamente!')
}

function deleteProduct(e) {
    const id = Number(e.target.id);
    if (confirm(`Esta seguro que desea eliminar este producto?`)) {
        const nuevoArray = datos.filter(producto => producto.id !== id)

        datos = nuevoArray
        mostrarDispositivos(datos)

        mostrarAlerta(true, 'Producto eliminado Correctamente!')
    }

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( respuesta => console.log(respuesta))
        .catch( error => console.log(`Algo salio mal: ${error}`))
}

function mostrarAlerta(tipo, mensaje) {
    const pAlerta = document.createElement('P');
    pAlerta.textContent = mensaje;

    if (tipo) {
        pAlerta.className = 'w-full bg-teal-500 rounded-xl font-bold text-white text-base uppercase text-center py-2 border-4 border-transparent';
        setInterval(() => {
            pAlerta.classList.toggle('border-teal-700')
            pAlerta.classList.toggle('border-transparent')
        }, 200);

    } else {
        pAlerta.className = 'w-full bg-red-500 rounded-xl font-bold text-white text-base uppercase text-center py-2 border-4 border-transparent ';
        setInterval(() => {
            pAlerta.classList.toggle('border-red-700')
            pAlerta.classList.toggle('border-transparent')
        }, 200);
    }

    divCol2.appendChild(pAlerta);

    setTimeout(() => {
        pAlerta.remove();
    }, 3000);
}

function cleanForm() {
    idInput.value = '';
    brandInput.value = '';
    colorInput.value = '';
    modelInput.value = '';
    storageInput.value = '';
    cpuInput.value = '';
}