import React from 'react';
import './styles/home.css';
import Hamburger from './components/hamburger-menu';
import Barra from './components/state-bar';

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <Hamburger />
        <Barra />
        <div className="header">
          <img src="src\assets\ubication.png" alt="" className='ubication-icon' />
          <h1 className="city">Suchiapa, Chiapas</h1>
        </div>
      </div>
      <div className="temperature-home">
        <img src="src\assets\cloud-home.png" alt="" className='cloud-home' />
        <h1 className='temperature-data-home'>50°</h1>
      </div>

      <div className="cards">
        <div className="card1">
          <img src="src\assets\cloud-home.png" alt="" className='card1-img'/>
          <h1 className="card1-txt">17:00 hrs</h1>
        </div>
        <div className="card2">
          <img src="src\assets\cloud-home.png" alt="" className='card2-img'/>
          <h1 className="card2-txt">16:00 hrs</h1>
        </div>
        <div className="card3">
          <img src="src\assets\cloud-home.png" alt="" className='card3-img'/>
          <h1 className="card3-txt">15:00 hrs</h1>
        </div>
      </div>
      <div className="login-home-icon">
        <a href="/" className="login-icon"></a>
        {/* <img src="src\assets\login.png" alt="" className='login-icon'/> */}
      </div>
    </div>
  );
};

export default Home;  