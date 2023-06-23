import React from 'react';
import Hamburger3 from './components/hamburger-menu3';
import './styles/history.css';

const History = () => {
  return (
    <div className='history'>
      <div className="container-history">
        <div className="home-icon">
          <a href="/home" className="home-icon-img"></a>
        </div>
        <Hamburger3 />
        <h1 className="history-title">REGISTRO</h1>
        <div className="container-content">
          <div className="content-history">
            <div className="card-history-main">
              <div className="header-card-main">
                <h1 className="title-history">27 de Junio del 2023</h1>
                <h2 className="subtitle-history">Suchiapa</h2>
              </div>
              <div className="content-card-main">
                <img src="src\assets\cloud-home.png" alt="" className='cloud-card-main' />
                <h1 className="temperature-card-main">40°</h1>
              </div>
              <div className="temperatura-footer">
                <h2 className="temperatura-main-footer">Máximo: 40°</h2>
                <h2 className="temperatura2-main-footer">Mínima: 25°</h2>
              </div>
            </div>

            <div className="card-history1">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="card-history2">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="card-history3">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="card-history4">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="card-history5">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

            <div className="card-history6">
              <div className="temperature-cards-title">
                <h2 className="cards-title-header">26 de Junio</h2>
              </div>

              <div className="temperature-content-card">
                <div className="left-part-cards">
                  <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                </div>
                <div className="right-part-cards">
                  <div className="temperature-card-txt">Máxima: 35°</div>
                  <div className="temperature-card-txt">Mínima: 15°</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default History;