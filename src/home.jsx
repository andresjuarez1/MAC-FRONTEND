import { useState } from 'react';
import React from 'react';
import './styles/home.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div className="hamburger-menu">
        <div className={`menu-container ${isOpen ? 'open' : ''}`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          </button>
        </div>
        {isOpen && (
          <div className="menu">
            <a href="/">Inicio</a>
            <a href="/acerca">Acerca</a>
            <a href="/servicios">Servicios</a>
            <a href="/contacto">Contacto</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
