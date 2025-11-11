import React, { useEffect, useState } from "react"

const NombreFormulario = () => {
  const [nombre, setNombre] = useState("")
  const [mensaje, setMensaje] = useState("")

  useEffect(() => {
    setMensaje("Hola, " + nombre)
  }, [nombre])

  return (
    <div>
      <label htmlFor="nombre">Introduce un nombre: </label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        onChange={(e) => setNombre(e.target.value)}
      ></input>
      <p>{mensaje}</p>
    </div>
  )
}

export default NombreFormulario
