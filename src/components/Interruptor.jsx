import React, { useState } from "react"

function Interruptor() {
  const [interruptor, setInteruptor] = useState(true)
  return (
    <div>
      <button onClick={() => setInteruptor(!interruptor)}>
        {interruptor ? "Encendido" : "Apagado"}
      </button>
    </div>
  )
}

export default Interruptor
