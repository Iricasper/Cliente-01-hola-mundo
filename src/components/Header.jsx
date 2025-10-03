import React from 'react'

// Ej 1
function Header() {
  return (
    <div>
    <h1>Página web de React</h1>
    <p>Por <em>{nombre}</em></p>
    </div>
  )
}

// Ej 2
const nombre = "Iris Castro"

export default Header