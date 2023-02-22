import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<PokemonList/>}/>
        <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
