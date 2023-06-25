import React from 'react';
import Hamburger3 from './components/hamburger-menu3';
import HomeIcon2 from './components/icon-home';
import SimplePieCharts from '../src/components/lines-chart2'
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
        <div className="container-pronostico-cards">
          <div className="left-part-pronostico">
            <div className="cards-pronostico">

              <div className="card1-pronostico">
                <div className="title-cards-pronostico">
                  <h2>15 hrs</h2>
                </div>
                <div className="content-cards-pronostico">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico' />
                  <div className="right-temperatura-pronostico">
                    <h2 className="card-pronostico-txt">31°</h2>
                    <h2 className="card-pronostico-txt">15°</h2>
                  </div>
                </div>
              </div>

              <div className="card2-pronostico">
                <div className="title-cards-pronostico">
                  <h2>16 hrs</h2>
                </div>
                <div className="content-cards-pronostico">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico' />
                  <div className="right-temperatura-pronostico">
                    <h2 className="card-pronostico-txt">31°</h2>
                    <h2 className="card-pronostico-txt">15°</h2>
                  </div>
                </div>
              </div>

              <div className="card3-pronostico">
                <div className="title-cards-pronostico">
                  <h2>17 hrs</h2>
                </div>
                <div className="content-cards-pronostico">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico' />
                  <div className="right-temperatura-pronostico">
                    <h2 className="card-pronostico-txt">31°</h2>
                    <h2 className="card-pronostico-txt">15°</h2>
                  </div>
                </div>
              </div>

              <div className="card4-pronostico">
                <div className="title-cards-pronostico">
                  <h2>18 hrs</h2>
                </div>
                <div className="content-cards-pronostico">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico' />
                  <div className="right-temperatura-pronostico">
                    <h2 className="card-pronostico-txt">31°</h2>
                    <h2 className="card-pronostico-txt">15°</h2>
                  </div>
                </div>
              </div>

              <div className="card5-pronostico">
                <div className="title-cards-pronostico">
                  <h2>19 hrs</h2>
                </div>
                <div className="content-cards-pronostico">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico' />
                  <div className="right-temperatura-pronostico">
                    <h2 className="card-pronostico-txt">31°</h2>
                    <h2 className="card-pronostico-txt">15°</h2>
                  </div>
                </div>
              </div>

              <div className="card6-pronostico">
                <div className="title-cards-pronostico">
                  <h2>20 hrs</h2>
                </div>
                <div className="content-cards-pronostico">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico' />
                  <div className="right-temperatura-pronostico">
                    <h2 className="card-pronostico-txt">31°</h2>
                    <h2 className="card-pronostico-txt">15°</h2>
                  </div>
                </div>
              </div>

              <div className="card7-pronostico">
                <div className="title-cards-pronostico">
                  <h2>21 hrs</h2>
                </div>
                <div className="content-cards-pronostico">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico' />
                  <div className="right-temperatura-pronostico">
                    <h2 className="card-pronostico-txt">31°</h2>
                    <h2 className="card-pronostico-txt">15°</h2>
                  </div>
                </div>
              </div>

              <div className="card8-pronostico">
                <div className="title-cards-pronostico">
                  <h2>22 hrs</h2>
                </div>
                <div className="content-cards-pronostico">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico' />
                  <div className="right-temperatura-pronostico">
                    <h2 className="card-pronostico-txt">31°</h2>
                    <h2 className="card-pronostico-txt">15°</h2>
                  </div>
                </div>
              </div>

              <div className="card9-pronostico">
                <div className="title-cards-pronostico">
                  <h2>23 hrs</h2>
                </div>
                <div className="content-cards-pronostico">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-pronostico' />
                  <div className="right-temperatura-pronostico">
                    <h2 className="card-pronostico-txt">31°</h2>
                    <h2 className="card-pronostico-txt">15°</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-part-pronostico">
            <h1 className='title-right-pronostico'>Junio</h1>
            <div className='grafica-right'>
              <SimplePieCharts/>
            </div>
            <div className="bottom-right-pronostico">
              <div className='soleados-right-pronostico'>
                <h4 className='bottom-txt'>Días soleados</h4>
                <h4 className="bottom-soleado-txt">15</h4>
              </div>
              <div className='lluvia-right-pronostico'>
                <h4 className='bottom-txt'>Días lluviosos</h4>
                <h4 className="bottom-lluvia-txt">15</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pronostico;