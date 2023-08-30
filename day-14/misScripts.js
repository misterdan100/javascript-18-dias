const button = document.querySelector('button');

button.addEventListener('click', obtenerInformacion);

function obtenerInformacion() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( respuesta => respuesta.json())
    .then( respuestaDos => {
        let listaInformacion = document.querySelector('listaInformacion');
        console.log(respuestaDos);
        for( let post of respuestaDos ) {
            console.log(post);
        }
    })
}