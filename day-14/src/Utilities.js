function generarAleatorio(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function seleccionarNumeroIdeal(lista) {
    const indice = generarAleatorio(1, lista.length) - 1
    return lista[indice]
}

export const misFunciones = {
    generarAleatorio,
    seleccionarNumeroIdeal
}