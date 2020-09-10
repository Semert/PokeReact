import React from 'react';
import axios from "axios"


https://pokeapi.co/api/v2/pokemon
function App() {

  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => console.log(res.data))

  return (
    <div></div>
  );
}

export default App;
