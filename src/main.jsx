import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./css/index.css"
import App from "./components/App.jsx"
import Header from "./components/Header.jsx"
import Bienvenida from "./components/Bienvenida.jsx"
import Mensaje from "./components/Mensaje.jsx"
import Lista from "./components/Lista.jsx"
import Boton from "./components/Boton.jsx"
import PeticionApi from "./components/PeticionApi.jsx"
import ApiAsync from "./components/ApiAsync.jsx"
import App2 from "./components/App2.jsx"
import Ej2a from "./components/Ej2a.jsx"
import BotonAccion from "./components/BotonAccion.jsx"
import Producto from "./components/Producto.jsx"
import BotonContador from "./components/BotonContador.jsx"
import CajaTexto from "./components/CajaTexto.jsx"
import Contador2 from "./components/Contador2.jsx"
import FormularioLogin from "./components/FormularioLogin.jsx"
import Interruptor from "./components/Interruptor.jsx"
import BotonColores from "./components/BotonColores.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header /> */}
    {/* <Bienvenida />
    <Mensaje />
    <Lista />
    <Boton />
    <PeticionApi />
    <ApiAsync /> */}
    {/* <Ej2a /> */}
    {/* <BotonAccion color="rojo" texto="Botón 1" />
    <BotonAccion color="verde" texto="Botón 2" />
    <BotonAccion color="azul" texto="Botón 3" /> */}
    <Producto nombre="Mondongo" precio={12} />
    <BotonContador />
    <CajaTexto textoDefault="Ejemplo" />
    <Contador2 />
    <FormularioLogin />
    <Interruptor />
    <BotonColores />
  </StrictMode>
)
