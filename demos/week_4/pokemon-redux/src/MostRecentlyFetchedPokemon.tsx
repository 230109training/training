import React from 'react';
import Pokemon from './model/Pokemon';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';

function MostRecentlyFetchedPokemon() {
    // Whenever this state in the store changes, then this component will be re-rendered
    const allPokemon: Pokemon[] = useSelector((state: RootState) => state.pokemon);

    // How do you get the most recent pokemon?
    // Just grab the object at the end of the array
    // length - 1 is the index of the last element (since indices start at 0)
    // Hence, we can do arr.length - 1
    const mostRecentPokemon = allPokemon[allPokemon.length - 1]; 

    // React Fragments are very useful (<></>)
    // Whenever you want to render JSX expressions, you need to always have a single parent element
    // You could use a div, for example, to serve that purpose, but if you want a blank element (fake parent
    // element), then you would use a "fragment"
    return (<div className="border-box">
        <h2>Most Recently Fetched Pokemon</h2>
        {mostRecentPokemon ? (
        <>
            <p>{mostRecentPokemon.id}</p>
            <p>{mostRecentPokemon.name}</p>
            <img src={mostRecentPokemon.sprites.front_default} alt={mostRecentPokemon.name} />
        </>) : ''}
        
    </div>);
}

export default MostRecentlyFetchedPokemon;