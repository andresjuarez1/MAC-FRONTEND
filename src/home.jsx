import React from 'react';
import './styles/home.css';
import Hamburger from './components/hamburger-menu';
import Barra from './components/state-bar';

const Home = () => {
  return (
    <div className="container-home">
      <Barra />
      <div className="header">
        <img src="src\assets\ubication.png" alt="" className='ubication-icon' />
        <h1 className="city">Suchiapa, Chiapas</h1>
        <Hamburger />
      </div>
      <div className="temperature-home">
        <img src="src\assets\cloud-home.png" alt="" className='cloud-home' />
        <h1 className='temperature-data-home'>50°</h1>
      </div>
      <div className="container-cards">
        <div className="cards">
          <div className="ch card">
            <img src="src\assets\cloud-home.png" alt="" className='card-img' />
            <h1 className="card-txt">17:00 hrs</h1>
          </div>
          <div className="ch card">
            <img src="src\assets\cloud-home.png" alt="" className='card-img' />
            <h1 className="card-txt">16:00 hrs</h1>
          </div>
          <div className="ch card">
            <img src="src\assets\cloud-home.png" alt="" className='card-img' />
            <h1 className="card-txt">15:00 hrs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;  