import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Employee from './Employee';
import FinanceManager from './FinanceManager';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/financemanager" element={<FinanceManager />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
