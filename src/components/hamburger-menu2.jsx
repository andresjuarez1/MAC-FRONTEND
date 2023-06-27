import { useState } from 'react';
import React from 'react';
import '../styles/hamburger2.css';

const Hamburger2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-hamburger2">
      <div className={`hamburger-menu2 ${isOpen ? 'open' : ''}`}>
          <button className={`menu-toggle2 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isOpen ? (
              <>
                <img src="src\assets\mac-login-white.png" alt="Menu Open" className="mac-icon-home2" />
              </>
            ) : (
              <>
                <span className="bar2"></span>
                <span className="bar2"></span>
                <span className="bar2"></span>
              </>
            )}
          </button>
        {isOpen && (
          <div className="menu2">
            <div className="contamination-icon2">
              <img src="src/assets/contamination-icon.svg" alt="Contamination Icon" className="contamination-image2" />
              <a href="/contamination" className="contamination-txt2">
                Contaminación
              </a>
            </div>
            <div className="register-icon2">
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="register-image2" />
              <a href="/history" className="register-txt2">Registro</a>
            </div>
            <div className="pronostico-icon2">
              <img src="src/assets/pronostico-icon.svg" alt="Pronostico Icon" className="pronostico-image2" />
              <a href="/pronostico" className="pronostico-txt2">Pronostico</a>
            </div>
{/* 
            <div className="preassure-icon2">
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="preassure-image2" />
              <a href="/history" className="preassure-txt2">Presión</a>
            </div> */}
              <a href="/" className="logout2"></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger2;
