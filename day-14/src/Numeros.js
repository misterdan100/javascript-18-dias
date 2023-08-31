import { useState } from "react";
import  Resultado  from "./Resultado";
import { misFunciones } from './Utilities'
const { seleccionarNumeroIdeal } = misFunciones;


function Numeros(props) {

    const [ mensaje, setMensaje ] = useState('');
    const [ mostrandoResultado, setMostrandoResultado ] = useState(false)


    let intervalID;

    detenerInterval()
    function detenerInterval() {
        clearInterval(intervalID)
    }

    const elementosP = props.numbersList.map( ( numero, index ) => {
        return ( 
            <p
                id={numero}
                onClick={seleccionarNumeroUsuario}
                className="p-4 rounded-full h-20 w-20 flex items-center justify-center font-bold text-3xl  border-2 hover:border-sky-400 hover:shadow-xl transition hover:scale-105 hover:cursor-pointer"
            >
                {numero}
            </p>
        )
    })

    const numeroIdeal = seleccionarNumeroIdeal(props.numbersList)
    console.log(numeroIdeal);

    function seleccionarNumeroUsuario(e) {
        console.log(e.target.id);
        console.log(numeroIdeal == e.target.id);

        if(mostrandoResultado) {
            return
        }

        if(numeroIdeal == e.target.id) {
            console.log('ganaste');
            console.log(e.target.classList);
            setMensaje('Ganaste!')
            setMostrandoResultado(true)
            intervalID = setInterval(() => {
                e.target.classList.toggle('bg-green-400')
                e.target.classList.toggle('shadow-xl')
                e.target.classList.toggle('shadow-green-400')
                e.target.classList.toggle('drop-shadow-xl')
                e.target.classList.toggle('drop-shadow-green-400')
            }, 200);
        } else {
            console.log('perdiste');
            setMensaje('Perdiste!')
            setMostrandoResultado(true)
            intervalID = setInterval(() => {
                e.target.classList.toggle('bg-red-400')
                e.target.classList.toggle('shadow-xl')
                e.target.classList.toggle('shadow-red-400')
                e.target.classList.toggle('drop-shadow-xl')
                e.target.classList.toggle('drop-shadow-red-400')
            }, 200);
        }
    }

    return (

        <>
        <div className="flex gap-6 mb-6">
            {elementosP}

        </div>
        
        <Resultado mensaje={mensaje}/>
        </>

    )
}

export default Numeros;