import { useEffect, useState } from "react"

function Cronometro() {
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSegundos((segundos) => segundos + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
      console.log("Contador detenido")
    }
  }, [])

  return <div>Han pasado {segundos} segundos</div>
}

export default Cronometro
