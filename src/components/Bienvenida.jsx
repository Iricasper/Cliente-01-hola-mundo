import React from 'react'

function Bienvenida({ isLogged }) {
  return (
    <div>
      {isLogged ? <h2>Bienvenid@!</h2> : <h2>Por favor, inicie sesión.</h2>}
    </div>
  )
}

export default function App() {
  const isLogged = true
  return <Bienvenida isLogged={isLogged} />
}