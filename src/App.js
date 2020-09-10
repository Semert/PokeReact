import React, { useEffect, useState } from 'react';
import axios from "axios"
import PokemonList from './components/PokemonList';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")

  useEffect(() => (
    axios.get(currentPageUrl).then(res => setPokemon(res.data.results.map(p => p.name)))
  ),[currentPageUrl])
  
  console.log(pokemon)
  return (
    <div>
      <PokemonList pokemon={pokemon} />
    
    </div>
   
  );
}

export default App;
