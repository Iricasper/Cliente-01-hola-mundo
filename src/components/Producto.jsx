import React from "react"

function Producto(props) {
  return (
    <div>
      <p>
        {props.nombre} - {props.precio} €
      </p>
    </div>
  )
}

function Productos() {
  return (
    <div>
      {productos.map((prod) => (
        <Producto nombre={prod.nombre} precio={prod.precio} />
      ))}
    </div>
  )
}

const productos = [
  { nombre: "Melocotón", precio: 2 },
  { nombre: "Alcachofa", precio: 3.5 },
  { nombre: "Sandía", precio: 5 },
]

export default Producto
