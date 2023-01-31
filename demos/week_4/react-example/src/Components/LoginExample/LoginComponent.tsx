import React, { useState } from 'react'
import InputComponent from './InputComponent';

const LoginComponent = () => {

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(state)
    }

    const usernameChanged = (event: any) => {
        // console.log(event.target.value);
        setState({...state, username: event.target.value});
    }
    const passwordChanged = (event: any) => {
        // console.log(event.target.value);
        setState({...state, password: event.target.value});
    }

  return (
    <form onSubmit={handleSubmit}>
        <InputComponent inputHandler={usernameChanged} type="text" placeholder="Enter a Username" name="username" required={true}/>
        <InputComponent inputHandler={passwordChanged} type="text" placeholder="Enter a Password" name="password" required={true}/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default LoginComponent