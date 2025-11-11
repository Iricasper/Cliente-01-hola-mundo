import React, { useEffect, useState } from "react"

const ContadorAuto = () => {
  const [segundos, setSegundos] = useState(0)
  const [contando, toggleContando] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setSegundos((segundos) => segundos + 1)
    }, 1000)
    return () => {
      console.log("Contador detenido")
      clearInterval(timer)
    }
  }, [])

  useEffect(() => {
    clearInterval()
  }, [contando])

  return (
    <div>
      <button onClick={toggleContando(false)}>Pausar</button>
    </div>
  )
}

export default ContadorAuto
