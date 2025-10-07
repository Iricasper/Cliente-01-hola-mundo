import React from 'react'

function Lista({items}) {
  const listItems = [];
  for (let i = 0; i < items.length; i++) {
    listItems.push(<li key={i}>{items[i]}</li>);
  }

  return <ul>{listItems}</ul>;
}

export default function App() {
  const items = ["Objeto 1", "Objeto 2", "Objeto 3"];
  return <Lista items={items} />;
}