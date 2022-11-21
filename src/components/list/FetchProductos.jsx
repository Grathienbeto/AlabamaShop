import { useState, useEffect } from "react";


const FetchProductos = () => {
  const [inventario, setInventario] = useState(() => []);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    // fetch("./Items.json")
    .then(data => data.json())
    .then(data => setInventario(data.results))
  }, [])

  return (
    <ul>
        {inventario.map((pokemon) => <li>{pokemon.name}</li>)}
    </ul>
  )

};












export default FetchProductos