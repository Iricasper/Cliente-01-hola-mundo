import React, { useState } from 'react'

function FormCaracteres() {
  const [caracteres, setCaracteres] = useState(0)
  return (
    <div>
      <form>
        <p>
          <label id="inputCaracteres" name="inputCaracteres">Escribe aquí: </label>
          <input
            htmlFor="inputCaracteres"
            type='text'
            onChange={(e) => setCaracteres(e.target.value.length)}
          >
          </input>
        </p>
      </form>
      <p>Número de caracteres escritos: {caracteres}</p>
    </div>
  )
}

export default FormCaracteres
