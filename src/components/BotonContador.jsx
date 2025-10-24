import { useState } from "react"

const BotonContador = () => {
  let [contador, setContador] = useState(0)
  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>
        Has pulsado {contador} {contador == 1 ? "vez" : "veces"}
      </button>
    </div>
  )
}

export default BotonContador
