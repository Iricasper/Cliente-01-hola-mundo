import React, { useState } from 'react'

function FormDatosPersona() {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState("")
  const manejarEnvio = (e) => {
    e.preventDefault()
    alert("Nombre: " + nombre + "\nEdad: " + edad)
  }
  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <p>
        <label id='nombre' name='nombre'>
          Nombre:{" "}
        </label>
        <input htmlFor='nombre' type='text' onChange={(e) => setNombre(e.target.value)}></input>
        </p>
        <p>
        <label id='edad' name='edad'>
          Edad:{" "}
        </label>
        <input htmlFor='edad' type='text' onChange={(e) => setEdad(e.target.value)}></input>
        </p>
        <input type='submit' value='Enviar'></input>
      </form>
    </div>
  )
}

export default FormDatosPersona
