import React from 'react'

function PeticionApi() {
  const promise = () => {
    fetch('https://mhw-db.com/monsters?q={"name":"Tzitzi-Ya-Ku"}')
    .then(response => response.json())
    .then(json => console.log(json))}

  return(
    <h2 onClick={promise}>Bichito bonito</h2>
  )
}

export default PeticionApi