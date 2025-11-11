import React, { useEffect } from "react"

const Welcome = () => {
  useEffect(() => {
    console.log("Componente montado")
    setTimeout(() => console.log("Hola, usuario"), 1000)
  }, [])

  return <div>¡Bienvenido!</div>
}

export default Welcome
