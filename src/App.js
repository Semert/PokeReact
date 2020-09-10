import React from 'react';
import axios from "axios"


function App() {

  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => console.log(res.data.results))

  return (
    <div></div>
  );
}

export default App;
