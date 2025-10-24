import { useState } from "react"

function CajaTexto(props) {
  const [texto, setTexto] = useState(props.textoDefault)
  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <p>Has escrito {texto}</p>
    </div>
  )
}

export default CajaTexto
