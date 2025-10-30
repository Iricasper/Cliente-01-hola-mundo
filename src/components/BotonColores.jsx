import React, { useEffect, useState } from "react"

function BotonColores() {
  const [coloresDeg, setColoresDeg] = useState(0)
  const [encendido, setEncendido] = useState(false)
  let getRotatedIdiot = () => {
    setTimeout(() => {
      setColoresDeg(coloresDeg + 1)
      if (coloresDeg > 359) {
        setColoresDeg(0)
      }
      document.body.style.backgroundColor = `red`
      document.body.style.filter = `hue-rotate(${coloresDeg}deg)`
    }, 5)
    
  }
  useEffect(() => {
    encendido && getRotatedIdiot()
  }, [coloresDeg, encendido])
  return (
    <div>
      <button onClick={() => setEncendido(!encendido)}>
        Pulsa aquí para sufrir epilepsia
      </button>
    </div>
  )
}

export default BotonColores
