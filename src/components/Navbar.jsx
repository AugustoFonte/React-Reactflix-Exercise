import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="Navbar">
      <Link to="/">
        <img className="Logo" src="/images/logo.png" alt="" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
