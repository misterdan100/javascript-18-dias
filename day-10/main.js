const btnMostrar = document.querySelector('button');
const divContainer = document.querySelector('#divContainer');


//* 1. crear clase Animal
class Animal {
  constructor(nombre, peso, edad) {
    this.nombre = nombre;
    this.peso = peso;
    this.edad = edad;
  }

  informacion() {
    return `${this.nombre} - ${this.peso} kg. - ${this.edad} años`
  }
}

//* 2. Subclase Perro
class Perro extends Animal {
  constructor(nombre, peso, edad, raza) {
    super(nombre, peso, edad);
    this.raza = raza;
  }

  informacion() {
    return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.raza}`
  }
}

//* 3. Subclase Gato
class Gato extends Animal {
  constructor(nombre, peso, edad, sexo) {
    super(nombre, peso, edad);
    this.sexo = sexo;
  }

  informacion() {
    return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.sexo}`
  }
}

//* 4. Subclase Conejo
class Conejo extends Animal {
  constructor(nombre, peso, edad, color) {
    super(nombre, peso, edad);
    this.color = color;
  }

  informacion() {
    return `${this.nombre} - ${this.peso} kg. - ${this.edad} años - ${this.color}`
  }
}

//* 5. Definir metodo Infomacion

//* 6. Crear instancias usando cada clase 
const tony = new Perro('Tony', 5, 8, 'Pincher');
const merlin = new Gato('Merlin', 0.5, 1, 'Macho');
const sky = new Conejo('Sky', 2, 3, 'Blanco');

const listPacientes = [tony, merlin, sky]

//* 7. Mostrar animales en html
btnMostrar.addEventListener('click', mostrarPacientes);

function mostrarPacientes() {
  divContainer.textContent = '';

  for(let paciente of listPacientes) {
    const nuevoP = document.createElement('P');
    nuevoP.className = 'text-center bg-slate-500 py-2 border-b-2 border-lime-400 text-xl';
    nuevoP.textContent = paciente.informacion();
    divContainer.appendChild(nuevoP);

  }

}