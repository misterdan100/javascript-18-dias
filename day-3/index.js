const contador = document.querySelector('#contador');
const input1 = document.querySelector('#n1').value;
const input2 = document.querySelector('#n2').value;
const input3 = document.querySelector('#n3').value;
const input4 = document.querySelector('#n4').value;
const input5 = document.querySelector('#n5').value;
const btnReiniciar = document.querySelector('#reiniciar');
const btnListo = document.querySelector('#listo');

let segundos = 30;

addEventListener('DOMContentLoaded', iniciarContador);

function iniciarContador() {
    let intervalId = setInterval(() => {
        if (segundos > 0) {
            modificarContador()
        } else {
            clearInterval(intervalId)
            revisarRespuestas();

        }

    }, 1000);
}

function modificarContador() {
    segundos -= 1;
    contador.textContent = segundos;
}

btnListo.addEventListener('click', revisarRespuestas)
btnReiniciar.addEventListener('click', () => {window.location.reload()})

function revisarRespuestas() {
    if (input1 === '' || input2 === '' || input3 === '' || input4 === '' || input5 === '') {
        window.confirm('Se acabo su tiempo!! Te falto al menos una respuesta. Vamos a reiniciar la prueba!')
        window.location.reload();

    } else if (input1 !== '' && input2 !== '' && input3 !== '' && input4 !== '' && input5 !== '') {
        window.confirm('Felicidades!! Respondiste todas las preguntas')
        window.location.reload();

    }
}