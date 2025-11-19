import { useEffect, useState } from "react"

function PanelUsuario() {
  const [texto, setTexto] = useState("Cargando...")
  const [usuario, setUsuario] = useState("")
  const [theme, setTheme] = useState("light")

  // SIMULA UN FETCH
  useEffect(() => {
    setTimeout(() => {
      setUsuario("Juan")
    }, 3000)

    return () => {
      clearTimeout
      console.log("Panel desmontado")
    }
  }, [])

  useEffect(() => {
    setTexto(`Hola, ${usuario}`)
  }, [usuario])

  // PIENSA MEJOR ESTO
  useEffect(() => {
    // document.body.style.colorScheme(theme)
  }, [theme])

  return (
    <div>
      <h2>{texto}</h2>
      <button
        onClick={() =>
          theme.includes("light") ? setTheme("dark") : setTheme("light")
        }
      >
        Cambia el tema
      </button>
    </div>
  )
}

export default PanelUsuario
