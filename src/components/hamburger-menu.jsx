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
          <div className="menu" >

            <a href="/contamination" className="hover-hamburger contamination-hamburger">
              <img src="src/assets/contamination-icon.svg" alt="Contamination Icon" className="contamination-image" />
              <h1 className='txt-hamburger-icon'>Contaminacion</h1>
            </a>

            <a className="hover-hamburger history-hamburger" href='/history'>
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="history-image" />
              <h1 className='txt-hamburger-icon'>Registro</h1>
            </a>

            <a href="/pronostico" className="hover-hamburger pronostico-hamburger">
              <img src="src/assets/pronostico-icon.svg" alt="Pronostico Icon" className="pronostico-image" />
              <h1 className='txt-hamburger-icon'>Pronostico</h1>
            </a>

            {/* <div className="preassure-icon">
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="preassure-image" />
              <a href="/history" className="preassure-txt">Presión</a>
            </div> */}
            <a href="/" className="logout"></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
