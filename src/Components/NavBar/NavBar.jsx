import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to={'/'}>START FRAMEWORK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={'/about'}>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/portfolio'}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
