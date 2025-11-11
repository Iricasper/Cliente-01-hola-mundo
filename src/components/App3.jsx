import React, { useState } from "react"
import UseEffectEjemplos from "./UseEffectEjemplos"

function App3() {
  const [nombre, setNombre] = useState("")

  return (
    <div>
      <UseEffectEjemplos nombre={nombre} setNombre={setNombre} />
    </div>
  )
}

export default App3
