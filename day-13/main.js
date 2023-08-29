const spanPesos = document.querySelector('#pesos');
const spanBitcoin = document.querySelector('#bitcoin');
const spanEuro = document.querySelector('#euro');
const spinner = document.querySelector('#spinner');

window.addEventListener('DOMContentLoaded', consultarAPIs);

async function consultarAPIs() {
  const consultarDolar = await fetch('https://open.er-api.com/v6/latest/USD');
  const jsonDolar = await consultarDolar.json()
  
  let precioPesos = jsonDolar.rates.COP.toFixed(2)
  precioPesos = formatearMoneda('cop', precioPesos)
  
  const consultarEuro = await fetch('https://open.er-api.com/v6/latest/EUR');
  const jsonEuro = await consultarEuro.json();
  
  let precioEuro = jsonEuro.rates.COP.toFixed(2);
  precioEuro = formatearMoneda('cop', precioEuro)
  
  const consultarBitcoin = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const jsonBitcoin = await consultarBitcoin.json();
  
  let precioBitcoin = jsonBitcoin.bpi.USD.rate_float.toFixed(2);
  precioBitcoin = formatearMoneda('usd', precioBitcoin)
  
  setTimeout(() => {
    ocultarSpinner();
    mostrarPrecios('pesos', precioPesos);
    mostrarPrecios('euro', precioEuro);
    mostrarPrecios('bitcoin', precioBitcoin);
  }, 2000);
  
}

function mostrarPrecios(moneda, precio) {
  if(moneda === 'pesos') {
    spanPesos.textContent = `1 USD = ${precio}`;
  } else if(moneda === 'euro') {
    spanEuro.textContent = `1 EUR = ${precio}`
  } else {
    spanBitcoin.textContent = `1 BTC = ${precio}`
  }
}

function ocultarSpinner() {
    spinner.classList.add('hidden')
}

function formatearMoneda(formato, valor) {
  valor = Number(valor)
  if(formato === 'cop') {
    const valorFormateado = valor.toLocaleString("es-CO", {style: "currency", currency: "COP"})
    return valorFormateado;
  } else if(formato === 'usd') {
    const valorFormateado = valor.toLocaleString("en-US", {style: "currency", currency: "USD"})
    return valorFormateado;
  }
}