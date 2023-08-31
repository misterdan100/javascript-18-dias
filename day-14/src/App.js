// import './App.css';
import { useState } from "react";
import Numeros from "./Numeros";
import Resultado from './Resultado';
import { misFunciones } from './Utilities'
const {generarAleatorio} = misFunciones;

function App() {

  const min = 1;
  const max = 10;

  const [ mostrarNumeros, setMostrarNumeros ] = useState(false)
  const [ numbersList, setNumbersList ] = useState([])

  function generarNumeros() {
    
    const tempArray = [];

    while(tempArray.length < 3) {
      const temporalNumber = generarAleatorio(min, max);
      if(!tempArray.find( numero => temporalNumber === numero)) {
        tempArray.push(temporalNumber)
      }
    }

    setNumbersList(tempArray)
    setMostrarNumeros(true)
    
  }
  




  return (
    <div className="App bg-gray-100 w-96 p-6 rounded-3xl shadow-xl border-2 hover:border-pink-300 flex flex-col items-center transition-all">
      <h1 className='text-3xl text-center uppercase text-pink-700 font-bold mb-4'>Adivina el numero!</h1>
      <button id='btnGenerar' onClick={generarNumeros} className='px-4 py-2 bg-white border-2 hover:border-pink-300 rounded-2xl uppercase font-bold transition-all hover:scale-105 hover:text-pink-700 mb-6'>Generar numeros</button>

      {mostrarNumeros && <Numeros numbersList={numbersList} resetear={true}/>}

    </div>
  );
}

export default App;
