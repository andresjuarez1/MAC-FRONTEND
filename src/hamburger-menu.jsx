import { useState } from 'react';
import React from 'react';
import './styles/hamburger.css';

const hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className='container-hamburger'>
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
              <div className="contamination-icon">
                <img src="src\assets\contamination-icon.svg" alt="" className='contamination-image'/>
                <a href="/contamination" className='contamination-txt'>Contaminación</a>
              </div>
              <div className="register-icon">
                <img src="src\assets\register-icon.svg" alt="" className="register-image" />
                <a href="/acerca" className='register-txt'>Registro</a>
              </div>
              <div className="pronostico-icon">
                <img src="src\assets\pronostico-icon.svg" alt="" className="pronostico-image"/>
                <a href="/servicios" className='pronostico.txt'>Pronostico</a>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default hamburger;