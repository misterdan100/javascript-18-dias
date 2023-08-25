const selectCategories = document.querySelector('#selectCategories');
const inputBuscar = document.querySelector('#inputBuscar');
const btnBuscar = document.querySelector('#btnBuscar');
const ulContainer = document.querySelector('#ulContainer');
const liCard = document.querySelector('li');

selectCategories.addEventListener('change', seleccionarDatos);
inputBuscar.addEventListener('keydown', validarInput);
btnBuscar.addEventListener('click', validarParametros);
// liCard.addEventListener('mouseout', ocultarSinopsis)

let datosMostrar;

function seleccionarDatos(e) {
  if (e.target.value === 'movies') {
    fetch('movies.json')
      .then(res => res.json())
      .then(data => datosMostrar = data.data)
      .catch(error => console.log(error))
  } else {
    fetch('series.json')
      .then(res => res.json())
      .then(data => datosMostrar = data.data)
      .catch(error => console.log(error))
  };

  //* Evento personalizado 
  let nuevoEvento = new CustomEvent('categoriaElegida');
  selectCategories.dispatchEvent(nuevoEvento);
}

selectCategories.addEventListener('categoriaElegida', mostrarCategoria);

function mostrarCategoria(e) {
  if (e.target.value === 'movies') {
    alert('Se cargo la base de datos de Peliculas')
  } else {
    alert('Se cargo la base de datos de Series')
  }
}

function validarInput(e) {
  if (e.keyCode === 8 || e.keyCode === 32) {
    return
  } else if (e.keyCode >= 65 && e.keyCode <= 90) {
    return
  } else {
    e.preventDefault();
  }
}

function validarParametros() {
  if( selectCategories.value === '') {
    mostrarAlerta('Seleccione una Categoria');
  } else if( inputBuscar.value === '') {
    mostrarAlerta('Escriba un termino de busqueda');
  } else {
    filtrarBusqueda(inputBuscar.value)
  }
}

function filtrarBusqueda(terminoBusqueda) {
  console.log(datosMostrar);
  const resultados = datosMostrar.filter( video => {
    const termino = terminoBusqueda.toLowerCase();
    const nombreVideo = video.nombre.toLowerCase();
    if(nombreVideo.includes(termino)) {
      return video;
    } else {
      return;
    }
  })

  mostrarResultados(resultados);
}

function mostrarResultados(resultados) {

  ulContainer.textContent = '';

  resultados.forEach( elemento => {
    const nuevoLi = document.createElement('li');
    const pTitulo = document.createElement('p');
    const img = document.createElement('img');
    const pSinopsis = document.createElement('p');

    nuevoLi.className = 'w-64 bg-gray-100 border-2 border-transparent hover:border-pink-400 hover:drop-shadow-xl hover:scale-105 hover:cursor-pointer rounded-3xl transition p-4';
    
    
    pTitulo.className = 'font-bold text-center mb-2 capitalize text-lg';
    pTitulo.textContent = `${elemento.nombre} (${elemento.year})`
    
    img.className = 'shadow-lg object-cover'
    img.src = elemento.cover;
    img.alt = `cover ${elemento.nombre} (${elemento.year})`
    
    pSinopsis.className = 'text-center transition-all';
    pSinopsis.id = 'sinopsis';
    pSinopsis.textContent = elemento.sinopsis;
    
    nuevoLi.appendChild(pTitulo)
    nuevoLi.appendChild(img)
    nuevoLi.appendChild(pSinopsis);
    
    
    ulContainer.appendChild(nuevoLi)

  })

}

function mostrarAlerta(mensaje) {
  const alerta = document.createElement('p');
  alerta.className = 'font-bold text-red-500 text-lg';
  alerta.textContent = mensaje;

  ulContainer.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 3000);
}

function mostrarSinopsis(e) {
  // console.log(e.target.lastChild);
}

function ocultarSinopsis(e) {
  // e.stopImmediatePropagation()
  e.stopPropagation()
  console.log('saliendo');
}