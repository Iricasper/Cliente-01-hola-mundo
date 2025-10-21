import React from "react";
import "../css/BotonAccion.css";

function BotonAccion(props) {
  return (
    <div>
      <button className={props.color}>{props.texto}</button>
    </div>
  );
}

export default BotonAccion;
