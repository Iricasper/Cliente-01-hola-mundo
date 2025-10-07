import React from 'react'

function Mensaje({ mostrarMensaje }) {
  return (
    <div>
      {mostrarMensaje && <p>Tienes nuevos mensajes</p>}
    </div>
  )
}

export default function App() {
  const mostrarMensaje = true;
  return <Mensaje mostrarMensaje={mostrarMensaje} />
}