const notasMaterias = document.querySelector('ul');
const btnPromedio = document.querySelector('#btn-promedio');
const btnNotaAlta = document.querySelector('#btn-notaAlta');
const btnAplazo = document.querySelector('#btn-aplazo');
const resultadoPromedio = document.querySelector('#resultadoPromedio');
const resultadoNotaAlta = document.querySelector('#resultadoNotaAlta');
const resultadoAplazo = document.querySelector('#resultadoAplazo');

const notasList = {
    matematicas: 0,
    literatura: 0,
    ciencias: 0,
    deportes: 0,
    tecnologia: 0
};


notasMaterias.addEventListener('input', obtenerNotas);

function obtenerNotas(e) {
    resetResults()

    //* optimizar este codigo
    switch(true) {
        case e.target.id === 'matematicas':
            notasList.matematicas = e.target.value;
            console.log(notasList);
            break;
        case e.target.id === 'literatura':
            notasList.literatura = e.target.value;
            console.log(notasList);
            break;
        case e.target.id === 'ciencias':
            notasList.ciencias = e.target.value;
            console.log(notasList);
            break;
        case e.target.id === 'deportes':
            notasList.deportes = e.target.value;
            console.log(notasList);
            break;
        case e.target.id === 'tecnologia':
            notasList.tecnologia = e.target.value;
            console.log(notasList);
            break;
    }
}

function resetResults() {
    resultadoAplazo.textContent = '';
    resultadoNotaAlta.textContent = '';
    resultadoPromedio.textContent = '';
}