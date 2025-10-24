import React, { useState } from "react"

function Contador2() {
  const [contador, setContador] = useState(0)

  return (
    <div>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <span>{contador}</span>
      <button onClick={() => setContador(contador + 1)}>+</button>
    </div>
  )
}

export default Contador2
