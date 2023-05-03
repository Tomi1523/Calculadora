import React from 'react'
import "../hoja-de-estilos/BotonClear.css"

const BotonClear = (props) => {
  return (
    <div className='boton-clear'
     onClick={props.limpiar}>
     {props.children}</div>
  )
}

export default BotonClear