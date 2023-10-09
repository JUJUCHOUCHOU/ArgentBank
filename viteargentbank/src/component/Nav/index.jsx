import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'; 
import './style.scss';

function Nav() {
  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Logo d'Argent Bank"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <Link to="/signIn" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Se connecter
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
