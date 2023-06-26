import React from 'react';
import Hamburger2 from './components/hamburger-menu2';
import HomeIconWhite from './components/icon-home-white';
import CardsPronostico from '../src/components/cards-pronostico'
import './styles/pronostico.css'

const Pronostico = () => {
  return (
    <div className="container-pronostico">
      <HomeIconWhite />
      <Hamburger2 />
      <div className="container-content-pronostico">
        <div className="title-header-pronostico">
          <h1 className='txt-pronostico-title'>PRONOSTICO</h1>
        </div>
        <CardsPronostico/>
      </div>
    </div>
  );
};

export default Pronostico;