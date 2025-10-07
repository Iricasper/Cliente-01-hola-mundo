import React from 'react'

function Boton() {
  const alerta = () => {
    alert("Esto es una alerta")
  }
  return (
    <div>
      <h3 onClick={alerta}>Botón de alerta</h3>
    </div>
  )
}

export default Boton;