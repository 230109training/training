import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './slices/userSlice';
import { DispatchType, RootState } from './store/store';

const ReduxLogin = () => {

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    // Redux
    // to use it as a reference
    const user = useSelector((state: RootState) => state.user);

    // to update it, we need a dispatcher
    const dispatch: DispatchType = useDispatch();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(userActions.setUser(state))
    }

    const usernameChanged = (event: any) => {
        setState({...state, username: event.target.value})
    }
    const passwordChanged = (event: any) => {
        setState({...state, password: event.target.value})
    }
  return (
    <form onSubmit={handleSubmit}>
        <input onChange={usernameChanged} type="text" placeholder="Enter username"/>
        <input onChange={passwordChanged} type="text" placeholder="Enter password"/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default ReduxLogin