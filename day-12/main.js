const selectCategories = document.querySelector('#selectCategories');
const inputBuscar = document.querySelector('#inputBuscar');
const btnBuscar = document.querySelector('#btnBuscar');
const ulContainer = document.querySelector('#ulContainer');

selectCategories.addEventListener('change', seleccionarDatos);

let datosMostrar;

function seleccionarDatos(e) {
  if (e.target.value === 'movies') {
    fetch('movies.json')
      .then(res => res.json())
      .then(data => leerDatos(data))
      .catch(error => console.log(error))
  }

}

function leerDatos(datos) {
  //* convertir el objeto recibido del json en array
  datosMostrar = Object.values(datos);
  datosMostrar.forEach( pelicula => {console.log(pelicula)})
}