import { useState } from 'react';
import React from 'react';
import './styles/home.css';
import Hamburger from './hamburger-menu';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <Hamburger/>
      <h1 className="city">SUCHIAPA</h1>
    </div>
  );
};

export default Home;
