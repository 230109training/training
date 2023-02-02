// Setting up Redux is all about writing "Boilerplate" code
// Once the initial setup process is done, and you know how to configure additional states in your store,
// as well as use the useSelector hook in your components, then you are good to go
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './pokemon';

const store = configureStore({
    reducer: {
        pokemon: pokemonReducer // we configure the pokemon slice (pokemonReducer)
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;