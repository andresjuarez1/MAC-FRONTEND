import React from 'react';
import Hamburger3 from './components/hamburger-menu3';
import './styles/history.css';

const History = () => {
  return(
    <div className='history'>
      <div className="container-history">
        <Hamburger3 />
        <h1 className="history-title">REGISTRO</h1>
        <div className="container-content">

          <div className="content-history">
            <div className="card-history-main">
              <img src="src\assets\cloud-home.png" alt="" className='cloud-card-main'/>
            </div>
            <div className="card-history1"></div>
            <div className="card-history2"></div>
            <div className="card-history3"></div>
            <div className="card-history4"></div>
            <div className="card-history5"></div>
            <div className="card-history6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;