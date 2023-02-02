import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Pokemon from '../model/Pokemon';

// PokemonSlice
// Slice is a convenient way to define a single state that we would like the store to keep track of
// In a slice, we define reducer(s) that will perform modifications to the state
// and then we can export the actions that correspond to those reducers and the reducers themselves
// -> "It's an easy way to configure part of the store in a separate file"
export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: [] as Pokemon[],
    reducers: {
        // action represents the action object that will contain a payload which is the Pokemon object
        // that we are adding to the pokemon array state
        addPokemon: (state: Pokemon[], action: PayloadAction<Pokemon>) => {
            state.push(action.payload); // adding new pokemon to the array when the addPokemon reducer
            // is invoked by triggering the appropriate action
        },
        deletePokemon: (state: Pokemon[], action: PayloadAction<Pokemon>) => {
            // ..... This could be another reducer that we write some code for
        },
        whateverYouWant: (state: Pokemon[], action: PayloadAction<Pokemon>) => {
            // ..... This could be another reducer that we write some code for
        },
    }
})

// Export the actions corresponding to each of the reducer(s)
// These actions have the same name as the reducers that they correspond to
// However, don't confuse the actions with being the reducers themselves
export const { addPokemon, deletePokemon, whateverYouWant } = pokemonSlice.actions;

export default pokemonSlice.reducer; // We need to export the set of reducers themselves
// so that we can configure them in the store