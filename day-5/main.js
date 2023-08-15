import peliculas from "./peliculas";

const edadInput = document.querySelector('#edad');
const botones = document.querySelector('#botones');
const peliculasDiv = document.querySelector('#peliculas');
const titulo2 = document.querySelector('#titulo2');



document.addEventListener('DOMContentLoaded', () => {mostrarPeliculas(peliculas, 'Tenemos en Cartelera:')})


botones.addEventListener('click', leyendoPeticion);

function leyendoPeticion(e) {
    const genero = e.target.id;
    const edad = edadInput.value;

    switch(true) {
        case genero === 'drama':
            filtrarEdad(genero, edad);
            break;
        case genero === 'comedia':
            filtrarEdad(genero, edad);
            break;
        case genero === 'musical':
            filtrarEdad(genero, edad);
            break;
        case genero === 'crimen':
            filtrarEdad(genero, edad);
            break;
    }
}

function filtrarEdad(genero, edad) {

    if(edad < 13) {
        filtrarPeliculas(genero, 13, 'menor');
    } else if (edad < 16) {
        filtrarPeliculas(genero, 16, 'menor');
    } else {
        filtrarPeliculas(genero, 17);
    }
}

function filtrarPeliculas(genero, edad, menor) {

    const mensaje = "Nuestra Recomendacion es:"

    if(menor) {
        let peliculasFiltradas = peliculas.filter( pelicula => pelicula.genero === genero ).filter( peliculas => peliculas.edad < edad )
        mostrarPeliculas(peliculasFiltradas, mensaje);
        
    } else {
        let peliculasFiltradas = peliculas.filter( pelicula => pelicula.genero === genero )
        mostrarPeliculas(peliculasFiltradas, mensaje);
    }
}

function mostrarPeliculas(listaPeliculas, mensaje) {
    peliculasDiv.textContent = '';
    titulo2.textContent = mensaje;

    listaPeliculas.forEach(pelicula => {
        peliculasDiv.innerHTML+= `
            <div class="w-40">
                <h1 id="titulo" class="font-bold text-xl mb-4 text-yellow-400 uppercase underline">${pelicula.titulo} (${pelicula.edad})</h1>
                <img src="${pelicula.cover}" alt="">
            </div>
        `
    });

    
}