import React, { useState } from 'react';
import MostRecentlyFetchedPokemon from './MostRecentlyFetchedPokemon';
import PokemonFetcher from './PokemonFetcher';
import PokemonTable from './PokemonTable';
import Pokemon from './model/Pokemon';

function App() {
  return (
    <div>
      <MostRecentlyFetchedPokemon />
      <PokemonTable />
      <PokemonFetcher />
    </div>
  );
}

export default App;
