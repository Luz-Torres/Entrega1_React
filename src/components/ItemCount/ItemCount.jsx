import React, { useState } from 'react'

/* 
TRABAJAMOS CON EL ESTADO - INFO UTIL PARA EL COMPONENTE
SOLO DE REACT, VAMOS A USAR LOS HOOKS QUE VIENEN INCORPORADOS
*/


const ItemCount = (props) => {
    const [contador, setContador] = useState(1);
    
    const incrementar = () => {
        if(contador < props.stock){
            setContador (contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > props.stock) {
            setContador (contador - 1);
        }
    }

    return (
    <div>
        <button onClick={ incrementar }> + </button>
        <p> { contador } </p>
        <button onClick={ decrementar }> - </button>
    </div>
    )
}

export default ItemCount