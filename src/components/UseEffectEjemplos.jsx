import React, { useEffect } from "react"

const UseEffectEjemplos = (nombre, setNombre) => {
  useEffect(() => {
    console.log("Se ejecuta al montar")
  }, [])

  useEffect(() => {
    console.log("Se ejecuta al actualizar el nombre")
  }, [nombre])

  useEffect(() => {
    return () => console.log("Se ejecuta al desmontar")
  }, [])

  return (
    <div>
      <label htmlFor="nombre">
        Nombre:{" "}
        <input
          id="nombre"
          onChange={(event) => setNombre(event.target.value)}
        ></input>
      </label>
    </div>
  )
}

export default UseEffectEjemplos
