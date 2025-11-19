import { useEffect, useState } from "react"

function ContadorAuto() {
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

  return (
    <div>
      <p>{segundos}</p>
      <button onClick={toggleContando(!contando)}>Pausar</button>
    </div>
  )
}

export default ContadorAuto
