import { useState } from 'react';
import React from 'react';
import '../styles/hamburger3.css';

const Hamburger3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container-hamburger3">
      <div className={`hamburger-menu3 ${isOpen ? 'open' : ''}`}>
        <button className={`menu-toggle3 ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          {isOpen ? (
            <>
              <img src="src\assets\mac-login-white.png" alt="Menu Open" className="mac-icon-home3" />
            </>
          ) : (
            <>
              <span className="bar3"></span>
              <span className="bar3"></span>
              <span className="bar3"></span>
            </>
          )}
        </button>
        {isOpen && (
          <div className="menu3">
            <div className="contamination-icon3">
              <img src="src/assets/contamination-icon.svg" alt="Contamination Icon" className="contamination-image3" />
              <a href="/contamination" className="contamination-txt3">
                Contaminación
              </a>
            </div>
            <div className="register-icon3">
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="register-image3" />
              <a href="/history" className="register-txt3">Registro</a>
            </div>
            <div className="pronostico-icon3">
              <img src="src/assets/pronostico-icon.svg" alt="Pronostico Icon" className="pronostico-image3" />
              <a href="/pronostico" className="pronostico-txt3">Pronostico</a>
            </div>

            {/* <div className="preassure-icon3">
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="preassure-image3"/>
              <a href="/history" className="preassure-txt3">Presión</a>
            </div> */}
            <a href="/" className="logout3"></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger3;
