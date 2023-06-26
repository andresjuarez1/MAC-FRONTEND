import React from 'react';
import Hamburger3 from './components/hamburger-menu3';
import HomeIcon2 from './components/icon-home';
import CardsPronostico from '../src/components/cards-pronostico'
import './styles/pronostico.css'

const Pronostico = () => {
  return (
    <div className="container-pronostico">
      <HomeIcon2 />
      <Hamburger3 />
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