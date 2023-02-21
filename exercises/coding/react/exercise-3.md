# React Exercise 3 (Adding Search Functionality)

## Description

This exercise involves adding search functionality to the PokemonList component created in the previous exercises. The component should allow users to search for Pokemon by name.

## Approach

- Add a search box to the PokemonList component.
- Allow users to search for Pokemon by name.
- Use TypeScript to define the shape of the data being fetched from the API.
- Display the search results on the PokemonList page.
- Style the search box and search results using CSS.

## Hints

- Use useState hook to store the search query in the component's state
- Use useMemo hook to filter the list of Pokemon based on the search query
    - Assume that the `searchQuery` is extracted from an input handler
    - ```typescript
      const filteredPokemonList = useMemo(() => {
        if (!searchQuery) {
            return pokemonList;
        }
        return pokemonList.filter((pokemon) => pokemon.name.includes(searchQuery));
        }, [searchQuery, pokemonList]);
        ```
    - The `useMemo` hook takes in two arguments: a function that returns the computed value, and an array of dependencies that the function depends on.
    - In this case, we are passing in the `searchQuery` and the `pokemonList` dependencies, this allows the `filteredPokemonList` to recompute if any of those dependencies change
    - From here, just map the `filteredPokemonList` on the page to show the results of the search
- Use TypeScript interfaces to define the shape of the data being fetched from the API

## Deliverables

- A working PokemonList component with search functionality
- A loom recording titled `React Exercise 4 (Adding Search Functionality) firstName lastName`
    - Introduce what you have done
    - Explain how you approached it, and why you chose the decisions you did
    - Talk about what you used in the exercise (React features) and why
    - Provide a simple walkthrough, with first a demonstration of the component and then an explanation of its code
        - In the explanation, use technical keywords as much as possible instead of just descriptions
    - Treat this as a product delivery to a manager