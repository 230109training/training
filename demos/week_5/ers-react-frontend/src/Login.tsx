import React, { useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    function handleUsernameInput(event: React.FormEvent<HTMLInputElement>) {
        setUsername(event.currentTarget.value);
    }

    function handlePasswordInput(event: React.FormEvent<HTMLInputElement>) {
        setPassword(event.currentTarget.value);
    }

    async function login() {
        const response = await axios.post('http://127.0.0.1:8080/login', { "username": username, "password": password });
        if (response.status === 200) {
            const token = response.data.token;
            const message = response.data.message;
            localStorage.setItem('token', token);
            alert(message);

            const payload: { iat: number, role: string, username: string } = jwtDecode(token); // extracts the payload of the token
            if (payload.role === 'employee') {
                // redirect to /employee route
                return navigate("/employee");
            } else if (payload.role === 'finance_manager') {
                // redirect to /financemanager route
                return navigate("/financemanager");
            }
        }
    }

    return (
        <>
           <h1>Login</h1> 
           <form onSubmit={(event) => { event.preventDefault() }}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input value={username} type="text" id="username" name="username" onChange={handleUsernameInput} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input value={password} type="password" id="password" name="password" onChange={handlePasswordInput} />
                </div>
                <button onClick={login}>Login</button>
           </form>
        </>
    )
}

export default Login;