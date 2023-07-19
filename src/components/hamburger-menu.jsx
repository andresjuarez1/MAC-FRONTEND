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
              <div className="images-header-hamb">
                <img src="src\assets\close.svg" alt="Menu Open" className="close" />
                {/* <img src="src\assets\mac-login-white.png" alt="Menu Open" className="mac-icon-home" /> */}
              </div>

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
              <img src="src/assets/contamination-icon.svg" alt="Contamination Icon" className="image" />
              <h1 className='txt-hamburger-icon'>Contaminacion</h1>
            </a>

            <a href='/history' className="hover-hamburger history-hamburger">
              <img src="src/assets/register-icon.svg" alt="Register Icon" className="image" />
              <h1 className='txt-hamburger-icon'>Registro</h1>
            </a>

            {/* <a href="/pronostico" className="hover-hamburger pronostico-hamburger">
              <img src="src/assets/pronostico-icon.svg" alt="Pronostico Icon" className="image" />
              <h1 className='txt-hamburger-icon'>Pronostico</h1>
            </a> */}

            <a href="/statistics" className="hover-hamburger statistic-hamburger">
              <img src="src\assets\estadistica-logo.svg" alt="Estadistica Icon" className="image statistic" />
              <h1 className='txt-hamburger-icon'>Estadistica</h1>
            </a>

            <a href="/" className="logout"></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
