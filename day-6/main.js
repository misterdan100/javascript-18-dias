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
btnPromedio.addEventListener('click', calcularPromedio);
btnNotaAlta.addEventListener('click', calcularNotaAlta);
btnAplazo.addEventListener('click', calcularAplazo);

function obtenerNotas(e) {
    resetResults()

    //* optimizar este codigo
    switch(true) {
        case e.target.id === 'matematicas':
            notasList.matematicas = e.target.value;
            break;
        case e.target.id === 'literatura':
            notasList.literatura = e.target.value;
            break;
        case e.target.id === 'ciencias':
            notasList.ciencias = e.target.value;
            break;
        case e.target.id === 'deportes':
            notasList.deportes = e.target.value;
            break;
        case e.target.id === 'tecnologia':
            notasList.tecnologia = e.target.value;
            break;
    }
}

function calcularPromedio() {
    let sumatoria = 0;
    let lengthNotasList = Object.keys(notasList).length;
    for( const nota in notasList) {
        sumatoria+= Number(notasList[nota]);
    }
    const notaPromedio = sumatoria / lengthNotasList;
    resultadoPromedio.textContent = notaPromedio;
}

function calcularNotaAlta() {
    let notaMasAlta = 0;
    for( const nota in notasList) {
        const notaNumber = Number(notasList[nota]);
        if(Number(notaNumber) > notaMasAlta) {
            notaMasAlta = notaNumber;
        }
    }
    resultadoNotaAlta.textContent = notaMasAlta;
}

function calcularAplazo() {
    for( const nota in notasList) {
        if(notasList[nota] < 4) {
            if(resultadoAplazo.textContent.length > 0) {
                resultadoAplazo.textContent+= `, ${nota}`
            } else {
                resultadoAplazo.textContent = nota;
            }
        }
    }
}

function resetResults() {
    resultadoAplazo.textContent = '';
    resultadoNotaAlta.textContent = '';
    resultadoPromedio.textContent = '';
}