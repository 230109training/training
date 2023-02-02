import React from 'react';
import Pokemon from './model/Pokemon';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function PokemonTable() {
    const allPokemon: Pokemon[] = useSelector((state: RootState) => state.pokemon);

    const allPokemonJSX = allPokemon.map((pokemon, index) => {
        return (
            <div key={index}>
                <p>{pokemon.id}</p>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
        )
    });
    /* allPokemonJSX [<div key={pokemon.id}>
                <p>{pokemon.id}</p>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>, <div key={pokemon.id}>
                <p>{pokemon.id}</p>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>, 
            <div key={pokemon.id}>
                <p>{pokemon.id}</p>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>] */


    return (
    <div className="border-box">
        <h2>Pokemon Table</h2>  
        {allPokemonJSX}
    </div>
    );
}

export default PokemonTable;