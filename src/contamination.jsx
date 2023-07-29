import React, { useEffect } from 'react'
import './styles/contamination.css'
import { LineChart } from './components/linesChart'
import Header from './components/header'

const Contamination = () => {
  return (
    <>
      <div className="header-main">
        <Header />
      </div>

      <div className="l">
        <div className='contamination-father'>
          <div className="contamination-container-title">
            <div className="container-title">
              <p className="title-page">INDICES DE CONTAMINACION</p>
            </div>
          </div>

          <div className="card-contamination">
            <div className="left-part-contamination">
              <h2 className='left-txt-contamination'>La zona que se está analizando se encuentra:</h2>
              <h1 className='left-txt-contamination2'>EN BUEN ESTADO</h1>
              <h2 className='left-txt-contamination'>Procura mantenerlo asi</h2>
            </div>
            <div className="right-part-contamination">
              <img src="src\assets\contamination-image.png" alt="" className='contamination-header-img' />
            </div>
          </div>
        </div>

        <div className="graficas-part">
          <h1 className="title-graficas-contamination">GRAFICAS</h1>
          <div className="graficas">
            <div className="grafica1-container">
              <div>
                <h2 className='grafica2-txt'>CO2 LEVEL</h2>
                <div className="grafica-2">
                  <LineChart />
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="footer-contamination">
          <h2 className="txt-footer-contamination">EN CASO DE QUE LOS NIVELES DE CONTAMINACIÓN SEAN MUY ALTOS
            SE LANZARÁ UNA ALERTA</h2>
        </div>
      </div>

    </>
  );
};

export default Contamination;