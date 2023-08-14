//! meter la lista en un array e ir recorriendolo haciendo operaciones por cada simbolo dependiendo del simbolo

const valorCalcular = document.querySelector('#valoresCalcular');
const resultado = document.querySelector('#resultado');
const botones = document.querySelector('#botones');

// let contador = 0;
let listaOperaciones = [];
let resumenResultado = 0;


botones.addEventListener('click', mostrarOperacion);

function mostrarOperacion(e) {
    switch (true) {
        case e.target.name === 'number':
            valorCalcular.textContent += e.target.textContent;
            calcularOperacion();
            break

        case e.target.id === 'del':
            let nuevoString = valorCalcular.textContent.substring(0, valorCalcular.textContent.length - 1);
            valorCalcular.textContent = nuevoString;
            break

        case e.target.id === 'ac':
            valorCalcular.textContent = '';
            limpiarVariables();
            imprimirResultado();
            break

        case e.target.name === 'operador':
            valorCalcular.textContent += e.target.textContent;

            break

        case e.target.id === 'calcular':
            calcularOperacion(e);

            break
    }
}

//! ['78.2', '/', '3', '*', '6']

function calcularOperacion(e) {
    //* reiniciar contaddores
    limpiarVariables();

    //* partir operacion en array
    listaOperaciones = valorCalcular.textContent.split(/(%|\/|\*|-|\+)/)

    //* recorrer array
    for (let i = 0; i < listaOperaciones.length; i++) {
        console.log(listaOperaciones[i]);
        let valor = listaOperaciones[i];
        if (valor !== '/' || valor !== '*' || valor !== '-' || valor !== '+') { //* si no es un simbolo
            valor = Number(valor) //* convierte valor en numero

            if (i === 0) {
                resumenResultado += valor;
            } else {
                let operadorAnterior = listaOperaciones[i-1];
                switch(true) {
                    case operadorAnterior === '+':
                        resumenResultado+= valor;
                        break

                    case operadorAnterior === '-':
                        resumenResultado-= valor;
                        break

                    case operadorAnterior === '/':
                        resumenResultado/= valor;
                        break

                    case operadorAnterior === '*':
                        resumenResultado*= valor;
                        break

                    case operadorAnterior === '%':
                        resumenResultado = resumenResultado / 100;
                        break
                }
            }
        }
    }

    imprimirResultado(resumenResultado);
}

function imprimirResultado(respuesta) {
    
    resultado.textContent =  (respuesta !== undefined) ? respuesta.toLocaleString('en-US') : respuesta;
}

function limpiarVariables() {
    resumenResultado = 0;
    listaOperaciones = [];
}