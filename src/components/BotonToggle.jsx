import React, { useState } from "react"

function BotonToggle() {
  const [texto, setTexto] = useState(true)

  return (
    <button onClick={() => setTexto(!texto)}>
      {texto && "Si pulsas me oculto"}
    </button>
  )
}

export default BotonToggle
