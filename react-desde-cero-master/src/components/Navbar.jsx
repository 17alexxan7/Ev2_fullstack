import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          EL ESTUDIO
        </Link>
        <ul className="navbar-menu">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/hombres">Hombres</Link></li>
          <li><Link to="/mujeres">Mujeres</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/perfil">Perfil</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;