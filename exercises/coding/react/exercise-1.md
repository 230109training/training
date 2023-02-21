# React Exercise 1 (Displaying Pokemon List)

## Description

This exercise involves the creation of a component that displays a list of Pokemon from the PokeAPI. The component will display the name of each Pokemon in that list. You will also need to use TypeScript to define the type of the data that will be in the response from the API.

## Approach

1. Create a new React component called PokemonList.
2. Use Axios to retrieve a list of Pokemon from the PokeAPI.
3. Use TypeScript to define the shape of the data being fetched from the API.
4. Display the name and image of each Pokemon in the list using the appropriate HTML elements.
5. Style the component using CSS.

## Hints
- Use TypeScript interfaces to define the shape of the data being retrieved
- Use `useState` hook to store the list of the Pokemon within the state of the component
    - ```typescript
      const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
      ```
- Use `useEffect` hook to retrieve the data from the API when the component first mounts on the page
    - ```typescript
      useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(response => {
                const results = response.data.results.map((result: any) => ({
                    name: result.name;
                    url: result.url;
                }));
            setPokemonList(results);
        });
      }, []);

## Deliverables

- A working `PokemonList` component that displays a list of Pokemon from the PokeAPI
- A loom recording titled `React Exercise 1 (Displaying Pokemon List) firstName lastName`
    - Introduce what you have done
    - Explain how you approached it, and why you chose the decisions you did
    - Talk about what you used in the exercise (React features) and why
    - Provide a simple walkthrough, with first a demonstration of the component and then an explanation of its code
        - In the explanation, use technical keywords as much as possible instead of just descriptions
    - Treat this as a product delivery to a manager