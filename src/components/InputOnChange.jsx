import React, { useState } from "react"

function InputOnChange() {
  const [texto, setTexto] = useState("")
  return (
    <div>
      <label id="inputOnChange" name="inputOnChange">
        Input onChange:{" "}
      </label>
      <input
        forhtml="inputOnChange"
        type="text"
        onChange={(e) => {
          setTexto(e.target.value)
          console.log(e.nativeEvent)
        }}
      ></input>
    </div>
  )
}

export default InputOnChange
