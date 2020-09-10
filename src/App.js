import React, { useEffect, useState } from 'react';
import axios from "axios"
import PokemonList from './components/PokemonList';


function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl,setNextPageUrl] = useState()
  const [prevPageUrl,setPrevPageUrl] = useState()
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get(currentPageUrl).then(res =>{
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous) 
      setPokemon(res.data.results.map(p => p.name))
    })
}, [currentPageUrl])

if(loading) return "Loading..."
  
  console.log(pokemon)
  return (
    <div>
      <PokemonList pokemon={pokemon} />
    
    </div>
   
  );
}

export default App;
