import React from "react";

const Ej2a = () => {
  return (
    <div>
      <h1>Bienvenido</h1>
      <MiBoton />
      <footer>
        <Enlace />
      </footer>
    </div>
  );
};
const MiBoton = () => {
  return <button>Haz clic</button>;
};
const Enlace = () => {
  return <a href="#">Ir a contacto</a>;
};

export default Ej2a;
