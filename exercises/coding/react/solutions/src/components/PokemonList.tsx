import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

interface Pokemon{
    id?: number;
    name: string;
    url: string;
    image?: string;
}

const PokemonList = () => {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
    
    useEffect(() => {
        getPokemon();
    }, []);

    async function getPokemon(){
        let response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
        let pokemons = response.data.results;
        let updatedPokemons: Pokemon[] = [];
        for(let i: number = 0; i< pokemons.length; i++){
            let response = await axios.get(pokemons[i].url);
            updatedPokemons.push({...pokemons[i], image: response.data.sprites.front_default, id: response.data.id})
        }
        setPokemonList(updatedPokemons);
    }

  return (
    <div>
        <ol>
            {pokemonList.map((pokemon: Pokemon) => {
                return (
                <li key={pokemon.name}>
                    <Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
                    <img src={pokemon.image}/>
                </li>);
            })}
        </ol>
    </div>
  )
}

export default PokemonList