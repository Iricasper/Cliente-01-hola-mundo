import React from "react"

function Saludo(props) {
  return (
    <div>
      <p>{props.logueado ? "Bienvenido" : "Por favor inicia sesión"}</p>
    </div>
  )
}

export default Saludo
