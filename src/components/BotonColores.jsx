import React, { useState } from "react"

function BotonColores() {
  const [coloresDeg, setColoresDeg] = useState(0)
  let getRotatedIdiot = () => {
    setColoresDeg(coloresDeg + 1)
    if (i > 359) {
      setColoresDeg(0)
    }
    document.body.style.filter = `hue-rotate(${coloresDeg}deg)`
  }
  setInterval(getRotatedIdiot, 10)
  return (
    <div>
      <button onClick={colores}>Pulsa aquí para sufrir epilepsia</button>
    </div>
  )
}

export default BotonColores
