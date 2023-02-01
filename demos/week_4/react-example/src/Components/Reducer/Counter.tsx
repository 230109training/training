import React, { useReducer, useState } from 'react'

const initialState = {
    count: 0
}

const reducer = (state: {count: number}, action: any) => {
    switch(action.type){
        case 'increment':
            return { count: state.count + 1};
        case 'decrement':
            return {count : state.count - 1};
        case 'increment 2':
            return {count : state.count + 2};
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function increment(){
        dispatch({type: 'increment'});
    }

    function decrement(){
        dispatch({type: 'decrement'});
    }

  return (
    <div>
        <p>{state.count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={() => dispatch({type: 'increment 2'})}>Increment by 2</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter