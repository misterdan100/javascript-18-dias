const btnCargarEmpleado = document.querySelector('#btnCargarEmpleado');
const btnMostrarEmpleados = document.querySelector('#btnMostrarEmpleados');
const formulario = document.querySelector('#form');
const divCol2 = document.querySelector('#col2');

btnCargarEmpleado.addEventListener('click', guardarEmpleado);
btnMostrarEmpleados.addEventListener('click', mostrarEmpleados);
const dbEmpleados = []

function Empleado(id, nombre, apellido, fecha, edad, cargo) {
    this.nombre = nombre;
    this.id = id;
    this.apellido = apellido;
    this.fecha = fecha;
    this.edad = edad;
    this.cargo = cargo;
}

function guardarEmpleado() {
    const datos = document.querySelectorAll('#form input');
    let fecha = new Date(datos[3].value)
    const edad = ((new Date()).getFullYear()) - (fecha.getFullYear())
    fecha = `${fecha.getDate()+1}/${fecha.getMonth()+1}/${fecha.getFullYear()}`

    const nuevoEmpleado = new Empleado(datos[0].value, datos[1].value, datos[2].value, fecha, edad, datos[4].value)
    
    dbEmpleados.push(nuevoEmpleado)
    console.log(dbEmpleados);
}

function mostrarEmpleados() {
    //* limpiar empleados
    divCol2.textContent = '';

    //* recorrer array para sacar cada empleado
    for(let empleado of dbEmpleados) {
        //* recorrer objeto empleado para sacar datos
        const {nombre, id, apellido, fecha, edad, cargo} = empleado;
        
        //* construir y enviar html
        const divEmpleado = document.createElement('div');
        divEmpleado.innerHTML = `
            <p>ID: <span>${id}</span></p>
          <p >Nombre: <span class="font-bold">${nombre} ${apellido}</span></p>
          <p>Fecha de Nacimiento: <span>${fecha}</span></p>
          <p>Edad: <span>${edad}</span></p>
          <p >Cargo: <span class="font-bold">${cargo}</span></p>
        `;

        divEmpleado.className = 'bg-gray-50 border-l-teal-700 border-l-4 p-3 rounded-xl mb-3 hover:shadow-md hover:cursor-pointer transition';

        divCol2.appendChild(divEmpleado)
    }




}