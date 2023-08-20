const marca = document.querySelector('#marca');
const modelo = document.querySelector('#modelo');
const color = document.querySelector('#color');
const year = document.querySelector('#year');
const titular = document.querySelector('#titular');
const divEstado = document.getElementsByName('estado');
const btnRegistrar = document.querySelector('#registrar');
const btnMostrarAutos = document.querySelector('#mostrarAutos');
const autosContainer = document.querySelector('#autosContainer');
const btnEstado = document.querySelector('#btnEstado');
const form = document.querySelector('form')

document.addEventListener('DOMContentLoaded', mostrarYears)
btnRegistrar.addEventListener('click', registrarAuto);
autosContainer.addEventListener('click', e => {
  if(e.target.id === 'btnEstado') { e.target.textContent === 'Poner en Venta' ? ponerEnVenta(e) : verderAuto(e) }
  if(e.target.id === 'verAuto') { verAuto(e) }
});
btnMostrarAutos.addEventListener('click', e => {
  e.preventDefault();
  (e.target.textContent === 'Ocultar Autos') ? mostrarAutos() : mostrarAutos('mostrar');
});

function Automovil(marca, modelo, color, year, titular, estado, id) {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
  this.year = year;
  this.titular = titular;
  this.estado = estado;
  this.id = id;
}

Automovil.prototype.vernderAutomovil = function(){
  const nuevoTitular = prompt('Ingrese el nombre del nuevo dueño:');
  this.titular = nuevoTitular;
  this.estado = 'Vendido'
};

Automovil.prototype.verAuto = function() {
  alert(`Este es un ${this.marca} ${this.modelo} de color ${this.color} del año ${this.year} a nombre de ${this.titular} y esta ${this.estado}`)
}

Automovil.prototype.ponerEnVenta = function() {
  this.estado = 'En Venta'
}

const autosRegistrados = [];

function registrarAuto(e) {
  e.preventDefault()
  let datos = [marca.value, modelo.value, color.value, year.value, titular.value ]
  
  //* evaluar cual radio esta checkeado
  if(divEstado[0].checked) {
    datos.push('En Venta')
  } else if (divEstado[1].checked) {
    datos.push('Vendido')
  } else {
    datos.push('');
  }

  const id = Date.now();
  datos.push(id)

  //*validar formulario
  if((datos.find( dato => dato === '') === '')) {
    generarAlerta('Debe llenar todos los campos', 'error')
    return
  } else {
    generarAlerta('Registro completado')
  }

  //* crear automovil usando el prototipo
  autosRegistrados.push(new Automovil(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5], datos[6]))

  form.reset();
  mostrarAutos('mostrar')
}

function mostrarYears() {
  const yearActual = (new Date()).getFullYear();
  const years = yearActual - 2000;

  for( let i = yearActual; i >= 2000; i--) {
    const newOption = document.createElement('option');
    newOption.value = i;
    newOption.textContent = i
    year.appendChild(newOption);
  }
}

function generarAlerta(mensaje, tipo) {
  const alerta = document.createElement('p');
  alerta.className = 'font-bold uppercase p-2 bg-gray-200 rounded-lg border-2'

  if(tipo === 'error') {
    alerta.classList.add('text-red-700', 'border-red-800')
    alerta.textContent = mensaje;
  } else {
    alerta.classList.add('text-green-700', 'border-green-800')
    alerta.textContent = mensaje;
  }

  form.appendChild(alerta)
  setTimeout(() => {
    alerta.remove()
  }, 2000);
}

function verderAuto(e) {
  const idAuto = e.target.parentNode.id;

  //*llmar al medoto venderAutomovil() -----------------------
  autosRegistrados.forEach( auto => {
    if(auto.id === Number(idAuto)){
      auto.vernderAutomovil()}
  })

  
  mostrarAutos('mostrar')
  e.target.parentNode.classList.add('opacity-50')
  console.log(e.target.parentNode);
}

function verAuto(e) {
  const idAuto = Number(e.target.parentNode.id);

  autosRegistrados.forEach( auto => {
    if(auto.id === idAuto) {
      auto.verAuto()
    }
  })
}

function ponerEnVenta(e) {
  const idAuto = Number(e.target.parentNode.id);

  autosRegistrados.forEach( auto => {
    if(auto.id === idAuto) {
      auto.ponerEnVenta();
    }
  })

  mostrarAutos('mostrar')
}

function mostrarAutos(mostrar) {
  
  if(mostrar) {
    autosContainer.textContent = ''
    for(let auto of autosRegistrados) {
      const {marca, modelo, color, year, titular, estado, id} = auto;
      
      const divNuevoAuto = document.createElement('div');
      divNuevoAuto.id = id;
      divNuevoAuto.className = 'flex flex-wrap justify-between items-center p-2 border-b-2 border-b-gray-200 hover:bg-gray-50';
      if(estado === 'Vendido') {divNuevoAuto.classList.add('opacity-50')} 
      divNuevoAuto.innerHTML = `
        <p><span class="font-bold mb-2">${marca} ${modelo}</span> - ${color} - ${year} - ${titular}</p>
        <p class="font-bold underline underline-offset-1">${estado}</p>
        <button id="btnEstado">${estado === 'Vendido' ? 'Poner en Venta' : 'Vender'}</button>
        <br>
        <button id="verAuto">Ver Auto</button>
      `
      autosContainer.appendChild(divNuevoAuto)
      btnMostrarAutos.textContent = 'Ocultar Autos';
    }
  } else {
    btnMostrarAutos.textContent = 'Mostrar Autos';
    autosContainer.textContent = ''

  }
}