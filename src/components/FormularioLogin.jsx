import React, { useState } from "react"

function FormularioLogin() {
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const manejarEnvio = (e) => {
    e.preventDefault()
    alert("Usuario: " + usuario + "\nContraseña: " + password)
  }
  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <p>
          <label id="usuario" name="usuario">
            Usuario:{" "}
          </label>
          <input
            htmlFor="usuario"
            type="text"
            onChange={(e) => setUsuario(e.target.value)}
          ></input>
        </p>
        <p>
          <label id="password" name="password">
            Contraseña:{" "}
          </label>
          <input
            htmlFor="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </p>
        <p>
          <input type="submit" value="Log in" />
        </p>
      </form>
    </div>
  )
}

export default FormularioLogin
