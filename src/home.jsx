import React from 'react';
import './styles/home.css';
import Hamburger from './hamburger-menu';
import Barra from './state-bar';

const Home = () => {
  return (
    <div className="container">
      <div className="content">
        <Hamburger />
        <Barra />
      </div>
    </div>
  );
};

export default Home;  