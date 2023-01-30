import React, { useState } from 'react'
import ValidatedField from './ValidatedField';

const ValidatedForm = () => {

    const [state, setState] = useState({
        name: "",
        age: 0
    })

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        console.log(state);
    }

    function validateName(event: React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value);
        // setState({...state, name: event.target.value})

        if ( event.target.value.length > 2){
            setState({...state, name: event.target.value})
        }
    }

    function validateAge(event: React.ChangeEvent<HTMLInputElement>){
        console.log(event.target.value);
        // setState({...state, age: Number(event.target.value)})
        if(Number(event.target.value) > 1){
            setState({...state, age: Number(event.target.value)})
        }
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <ValidatedField type="text" name="name"onChange={validateName}></ValidatedField>
        <ValidatedField type="number" name="age" onChange={validateAge}></ValidatedField>
        <button>Submit</button>
    </form>
  )
}

export default ValidatedForm