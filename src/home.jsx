import { useState } from 'react'
import React from 'react'
import './styles/home.css';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="menu-container">
        <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        {isOpen && (
          <div className="menu">
            <a href="/">Inicio</a>
            <a href="/acerca">Acerca</a>
            <a href="/servicios">Servicios</a>
            <a href="/contacto">Contacto</a>
          </div>
        )}
      </div>
    );
  };
  
export default Home;
