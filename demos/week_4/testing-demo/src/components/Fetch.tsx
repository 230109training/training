import axios from 'axios'
import React, { useReducer, useState } from 'react'
import { setConstantValue } from 'typescript'

function greetingReducer(state: any, action: any){
    switch (action.type){
        case 'SUCCESS': {
            return {
                error: null,
                greeting: action.greeting
            }
        }
        case 'ERROR': {
            return {
                error: action.error,
                greeting: null
            }
        }
        default: {
            return state
        }
    }
}

const initialState = {
    error: null,
    greeting: null
}

const Fetch = ({url}: {url: string}) => {

    const [{error, greeting}, dispatch] = useReducer(greetingReducer, initialState);
    const [buttonClicked, setButtonClicked] = useState(false);

    const fetchGreeting = () => {
        axios
            .get(url)
            .then(response => {
                const {data} = response;
                const {greeting} = data;
                dispatch({type: 'SUCCESS', greeting})
                setButtonClicked(true);
            })
            .catch(error => {
                dispatch({type: 'ERROR', error})
            })
    }

    const buttonText = buttonClicked ? 'OK' : 'Load Greeting'
  return (
    <div>
        <button onClick={() => fetchGreeting()} disabled={buttonClicked}>{buttonText}</button>
        {greeting && <h1>{greeting}</h1>}
        {error && <p role="alert">Failed to fetch!</p>}
    </div>
  )
}

export default Fetch