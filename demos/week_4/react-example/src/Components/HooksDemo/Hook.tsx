import React, { useEffect, useState } from 'react'

const Hook = () => {

    /**
     * What is a Hook?
     * - Extra methods added to functional components to provide the same functionality as class components
     * 
     * useState()
     * - Allows us to create state variables
     * 
     * State
     * - Variables that are directly tied to this component and changing them triggers a render call on the component
     */

    const [visibility, setVisibility] = useState(true);
    const [counter, setCounter] = useState(0);
    const [persons, setPersons] = useState<any[]>([]);

    const [state, setState] = useState({
        visibility: true,
        counter: 0
    });

    // let isVisible = true;

    function toggleVisibility(){
        // isVisible = !isVisible;
        // console.log(isVisible);
        // setVisibility(!visibility);

        // Using the spread operator allows us to only change the variable that is being changed
        // We do not have to rewrite the entire object everytime we want to change a single variable
        // setState({
        //     visibility: !visibility,
        //     counter: counter
        // })
        setState({...state, visibility: !state.visibility});
    }

    function increment(){
        // setCounter(counter + 1);
        setState({...state, counter: state.counter + 1});
    }

    function decrement(){
        // setCounter(counter - 1);
        setState({...state, counter: state.counter - 1});
    }


    /**
     * useEffect
     * - Used when you want something done either as soon as the page loads or if a thing updates in some way (dependencies)
     */
    
    useEffect(() => {
        console.log("Use Effect triggered");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setPersons(data);
            });
    }, []);

  return (
    <div>
        {/* <h2>Am I visible?</h2> */}
        {
            state.visibility ? <h2>Am I visible?</h2> : <></>
        }
        <button onClick={toggleVisibility}>Toggle</button>

        <h2>{state.counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        {
            persons.length > 0 ? persons.map(person => {
                return (
                    <div key={person.id}>
                        <h2>{person.name}</h2>
                    </div>
                );
            }) : <h3>People have not been loaded yet!</h3>
        }

        <h1>Code</h1>
        <pre style={{
            textAlign: "left",
            backgroundColor: "black",
            color: "white"
        }}>
{
`
import React, { useEffect, useState } from 'react'

const Hook = () => {

    /**
     * What is a Hook?
     * - Extra methods added to functional components to provide the same functionality as class components
     * 
     * useState()
     * - Allows us to create state variables
     * 
     * State
     * - Variables that are directly tied to this component and changing them triggers a render call on the component
     */

    const [visibility, setVisibility] = useState(true);
    const [counter, setCounter] = useState(0);
    const [persons, setPersons] = useState<any[]>([]);

    const [state, setState] = useState({
        visibility: true,
        counter: 0
    });

    // let isVisible = true;

    function toggleVisibility(){
        // isVisible = !isVisible;
        // console.log(isVisible);
        // setVisibility(!visibility);

        // Using the spread operator allows us to only change the variable that is being changed
        // We do not have to rewrite the entire object everytime we want to change a single variable
        // setState({
        //     visibility: !visibility,
        //     counter: counter
        // })
        setState({...state, visibility: !state.visibility});
    }

    function increment(){
        // setCounter(counter + 1);
        setState({...state, counter: state.counter + 1});
    }

    function decrement(){
        // setCounter(counter - 1);
        setState({...state, counter: state.counter - 1});
    }


    /**
     * useEffect
     * - Used when you want something done either as soon as the page loads or if a thing updates in some way (dependencies)
     */
    
    useEffect(() => {
        console.log("Use Effect triggered");
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => {
                setPersons(data);
            });
    }, []);

  return (
    <div>
        {/* <h2>Am I visible?</h2> */}
        {
            state.visibility ? <h2>Am I visible?</h2> : <></>
        }
        <button onClick={toggleVisibility}>Toggle</button>

        <h2>{state.counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        {
            persons.length > 0 ? persons.map(person => {
                return (
                    <div key={person.id}>
                        <h2>{person.name}</h2>
                    </div>
                );
            }) : <h3>People have not been loaded yet!</h3>
        }
    </div>
  )
}

export default Hook
`
}
        </pre>
    </div>
  )
}

export default Hook