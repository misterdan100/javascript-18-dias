const valor1 = document.querySelector('#number1');
const valor2 = document.querySelector('#number2');
const operacionesBasicas = document.querySelector('#operaciones-basicas');
const operacionesAvanzadas = document.querySelector('#operaciones-avanzadas');
const resultado = document.querySelector('#resultado');
const extrasBtn = document.querySelector('#extras');

operacionesBasicas.addEventListener('click', leerOperacion);
operacionesAvanzadas.addEventListener('click', calcularAvanzadas);
extrasBtn.addEventListener('click', calcularExtras);

function leerOperacion(e) {
    if(!validarInputs()) {
        calcularBasicas(e);
    } else {
        alert("Debe ingresar dos valores para calcular.")
    }
};

function calcularBasicas(e) {
    switch(true) {
        case e.target.textContent === '+': 
            resultado.textContent = Number(valor1.value) + Number(valor2.value);
            break
        case e.target.textContent === '-': 
            resultado.textContent = Number(valor1.value) - Number(valor2.value);
            break
        case e.target.textContent === 'x': 
            resultado.textContent = Number(valor1.value) * Number(valor2.value);
            break
        case e.target.textContent === '/': 
            resultado.textContent = Number(valor1.value) / Number(valor2.value);
            break
    }
}

function calcularAvanzadas(e) {
    switch(true) {
        case e.target.textContent === 'potencia': 
            resultado.textContent = Math.pow(Number(valor1.value), Number(valor2.value));
            break
        case e.target.textContent === 'raiz': 
            resultado.textContent = Math.sqrt(Number(valor1.value));
            break
        case e.target.textContent === 'absoluto': 
            resultado.textContent = Math.abs(Number(valor1.value));
            break
        case e.target.textContent === 'random': 
            resultado.textContent = Math.random(Number(valor1.value)) * ((Number(valor2.value) +1 ) - Number(valor1.value)) + (Number(valor1.value));
            break
    }
}

function calcularExtras(e) {
    if(resultado.value === 'resultado') {
        alert("Realice primero una operacion basica!")
    } else {
        switch(true) {
            case e.target.textContent === 'round':
                resultado.textContent = Math.round(resultado.textContent);
                break
            case e.target.textContent === 'floor':
                resultado.textContent = Math.floor(resultado.textContent);
                break
            case e.target.textContent === 'ceil':
                resultado.textContent = Math.ceil(resultado.textContent);
                break
        }
    }
}

function validarInputs() {
    if(valor1.value === '' || valor2.value === '') {
        return true
    } else {
        return false
    }
}