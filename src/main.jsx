import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import App from './components/App.jsx'
import Header from './components/Header.jsx'
import Bienvenida from './components/Bienvenida.jsx'
import Mensaje from './components/Mensaje.jsx'
import Lista from './components/Lista.jsx'
import Boton from './components/Boton.jsx'
import PeticionApi from './components/PeticionApi.jsx'
import ApiAsync from './components/ApiAsync.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    {/* <Bienvenida />
    <Mensaje />
    <Lista />
    <Boton />
    <PeticionApi />
    <ApiAsync /> */}
    <App />
  </StrictMode>,
)