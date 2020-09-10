import React, { useEffect, useState } from 'react';
import axios from "axios"


function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => (
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => console.log(res.data.results.map(result => result.namen)))
  ),[])
  

  return (
    <div></div>
  );
}

export default App;
