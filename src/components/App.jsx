import React from 'react'
import '../css/App.css'


function Tarjeta(props) {
  return <div>
    Título: {props.titulo} <br/>
    Descripción: {props.descripcion}
  </div>
}

function Boton(props) {
  return <button type="button">{props.texto}</button>
}

function App() {
  return (
    <div>
    <Tarjeta titulo="Esto es un título" descripcion="Esto es una descripción. Si quieres, puedo ayudarte a implementarlo en tu código" />
    <Boton texto="Pulsa aquí (no hago nada)"/>
    </div>
  )
}

export default App