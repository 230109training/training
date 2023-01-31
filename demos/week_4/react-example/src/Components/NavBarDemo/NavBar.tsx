import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">React Examples</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/events">Events Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/lists">Lists Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/props">Props Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/class">Class Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hook">Hooks Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/form">Form Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/passing">Passing Handlers Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/hoc">Higher Order Component Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/refs">Refs Demo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/axios">Axios Demo</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar