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
          <div className="menu2" >

            <a href="/contamination" className="hover-hamburger contamination-hamburger">
              <img src="src/assets/contamination-icon.svg" alt="Contamination Icon" className="image" />
              <h1 className='txt-hamburger-icon'>Contaminacion</h1>
            </a>

            <a href='/history' className="hover-hamburger history-hamburger">
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="image" />
              <h1 className='txt-hamburger-icon'>Registro</h1>
            </a>

            <a href="/pronostico" className="hover-hamburger pronostico-hamburger">
              <img src="src/assets/pronostico-icon.svg" alt="Pronostico Icon" className="image" />
              <h1 className='txt-hamburger-icon'>Pronostico</h1>
            </a>

            <a href="/statistics" className="hover-hamburger statistic-hamburger">
              <img src="src\assets\estadistica-logo.svg" alt="Estadistica Icon" className="image" />
              <h1 className='txt-hamburger-icon'>Estadistica</h1>
            </a>

            <a href="/" className="logout"></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger2;
