import React from 'react';
import Hamburger3 from './components/hamburger-menu3';
import './styles/pronostico.css'

const Pronostico = () => {
  return (
    <div className="container-pronostico">
      <div className="container-content-pronostico">

        <div className="home-icon">
          <a href="/home" className="home-icon-img"></a>
        </div>

        <div className="container-pronostico-cards">
          <div className="left-part-pronostico">
            <div className="cards-pronostico">

              <div className="card1-pronostico">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico'/>
                <h2 className="card-pronostico-txt">40°</h2>
              </div>

              <div className="card2-pronostico">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico'/>
                <h2 className="card-pronostico-txt">40°</h2>
              </div>

              <div className="card3-pronostico">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico'/>
                <h2 className="card-pronostico-txt">40°</h2>
              </div>

              <div className="card4-pronostico">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico'/>
                <h2 className="card-pronostico-txt">40°</h2>
              </div>

              <div className="card5-pronostico">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico'/>
                <h2 className="card-pronostico-txt">40°</h2>
              </div>

              <div className="card6-pronostico">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico'/>
                <h2 className="card-pronostico-txt">40°</h2>
              </div>

              <div className="card7-pronostico">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico'/>
                <h2 className="card-pronostico-txt">40°</h2>
              </div>

              <div className="card8-pronostico">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico'/>
                <h2 className="card-pronostico-txt">40°</h2>
              </div>

              <div className="card9-pronostico">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico'/>
                <h2 className="card-pronostico-txt">40°</h2>
              </div>

            </div>
          </div>
          <div className="right-part-pronostico">
          </div>
        </div>

        <Hamburger3 />
      </div>
    </div>
  );
};

export default Pronostico;