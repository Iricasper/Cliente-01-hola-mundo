import React from "react"

function BotonJS() {
  alert("Botón hecho con HTML+JS")
}

function BotonReact() {
  alert("Botón hecho con React")
}

let button = document.createElement("button")
button.onclick = BotonJS
button.innerText = "Botón JS"
let divs = document.getElementsByTagName("div")
divs[divs.length - 1].appendChild(button)

function BotonComparado() {
  return (
    <div>
      <button onClick={BotonReact}>Botón React</button>
    </div>
  )
}

export default BotonComparado
