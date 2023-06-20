import React from 'react';
import './styles/home.css';
import Hamburger from './hamburger-menu';

const Home = () => {
  return (
    <div className="container">
      <Hamburger />
      <div className="description">
        <div className="viento">
          <img src="src\assets\viento.png" alt="" className='viento'/>
        </div>
        <div className="humedad">
          <img src="src\assets\humedad.png" alt="" className='humedad'/>
        </div>
        <div className="altura">
          <img src="src\assets\altura.png" alt="" className='altura'/>
        </div>
      </div>
    </div>
  );
};

export default Home;  