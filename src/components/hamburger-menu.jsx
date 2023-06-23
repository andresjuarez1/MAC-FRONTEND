import { useState } from 'react';
import React from 'react';
import '../styles/hamburger.css';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-hamburger">
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
          <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isOpen ? (
              <>
                <img src="src\assets\mac-login-white.png" alt="Menu Open" className="mac-icon-home" />
              </>
            ) : (
              <>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </>
            )}
          </button>
        {isOpen && (
          <div className="menu">
            <div className="contamination-icon">
              <img src="src/assets/contamination-icon.svg" alt="Contamination Icon" className="contamination-image" />
              <a href="/contamination" className="contamination-txt">
                Contaminación
              </a>
            </div>
            <div className="register-icon">
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="register-image" />
              <a href="/history" className="register-txt">Registro</a>
            </div>
            <div className="pronostico-icon">
              <img src="src/assets/pronostico-icon.svg" alt="Pronostico Icon" className="pronostico-image" />
              <a href="/pronostico" className="pronostico-txt">Pronostico</a>
            </div>

            <div className="preassure-icon">
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="preassure-image" />
              <a href="/history" className="preassure-txt">Presión</a>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
