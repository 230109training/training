import React, { useState } from 'react';
import { AppDispatch } from './redux/store';
import { useDispatch } from 'react-redux';
import { addPokemon } from './redux/pokemon'; // importing the addPokemon action (corresponding to
// the addPokemon reducer from the pokemon slice)

// Node.js uses the "commonJS" export and import conventions
// module.exports and require()

// Meanwhile, React uses the ES6 import/export conventions
// which are 
// export ...
// import ... from ...
// Two main types of exports
// 1. default exports: a file can only have 1 default export
//      When another file imports a default export, no {} are used for that default export
//           We can also name the imported default export any name we want
// 2. named exports: we can have as many as we want
//      When another file imports a named export, { } are used
//          We need to have the same name as what was exported
//      We can import as many named exports as we want

function PokemonFetcher() {

    const [idInputValue, setIdInputValue] = useState(0);

    // The dispatcher allows us to dispatch an action to the store
    // which will then have the appropriate reducer function be invoked
    const dispatch: AppDispatch = useDispatch();

    // Changing the idInputValue state in our PokemonFetcher component
    // Whenever a user types in a number to the input
    const onUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputElement = event.target;
        const inputValue = Number(inputElement.value);
        setIdInputValue(inputValue);
    }

    function retrievePokemon() {
        fetch(`http://pokeapi.co/api/v2/pokemon/${idInputValue}`, {
            method: 'GET'
        }).then((res) => {
            return res.json();
        }).then((pokemon) => {
            // dispatch an action to the store which contains the reducer
            dispatch(addPokemon(pokemon));
        });
    }

    return (
        <div className="border-box">
            <h2>Pokemon Fetcher</h2>
            <input onChange={onUserInput} type="number" />
            <button onClick={retrievePokemon}>Click</button>
        </div>
    )
}

export default PokemonFetcher;