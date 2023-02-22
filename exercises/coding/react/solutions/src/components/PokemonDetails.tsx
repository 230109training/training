import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

interface PokeDetails{
    id: number;
    name: string;
    sprites: {front_default: string};
}

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState<PokeDetails>();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response: any) => {
                setPokemon(response.data);
            })
    }, [])

  return (
    <div>
        {
            pokemon && (
                <>
                    <img src={pokemon.sprites.front_default}/>
                    <h4>{pokemon.name}</h4>
                    <h5>{pokemon.id}</h5>
                </>
                )
        }
    
    </div>
  )
}

export default PokemonDetails