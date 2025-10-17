import React from 'react'
import '../css/Boton.css'


function Boton() {
  const alerta = () => {
    alert("Esto es una alerta")
  }
  return (
    <div className='boton'>
      <h3 className='boton' onClick={alerta}><a>Botón de alerta</a></h3>
    </div>
  )
}

export default Boton;