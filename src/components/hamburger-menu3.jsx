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

            <a href="/contamination" className="hover-hamburger contamination-hamburger3">
              <img src="src/assets/contamination-icon.svg" alt="Contamination Icon" className="contamination-image3" />
              <h1 className='txt-hamburger-icon3'>Contaminacion</h1>
            </a>

            <a className="hover-hamburger history-hamburger3" href='/history'>
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="history-image3" />
              <h1 className='txt-hamburger-icon3'>Registro</h1>
            </a>

            <a href="/pronostico" className="hover-hamburger pronostico-hamburger3">
              <img src="src/assets/pronostico-icon.svg" alt="Pronostico Icon" className="pronostico-image3"/>
              <h1 className='txt-hamburger-icon3'>Pronostico</h1>
            </a>

            <a href="/" className="logout3"></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger3;