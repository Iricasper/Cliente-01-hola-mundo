import React from 'react'

async function ApiAsync() {
  const response = await fetch('https://mhw-db.com/monsters?q={"name":"Tzitzi-Ya-Ku"}')
  const data = await response.json();
  console.log(data)

  return (<p>{data}</p>)
}

export default function App() {
  return <h2 onClick={ApiAsync}>Bichito Bonito 2</h2>
}