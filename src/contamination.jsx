import React, { useEffect } from 'react';
import Hamburger3 from './components/hamburger-menu3';
import HomeIcon from './components/icon-home';
import './styles/contamination.css';
import { LineChart } from './components/linesChart';

const Contamination = () => {


  return (

    <div className="con">
      <HomeIcon />
      <div className='contamination-father'>
        <div className="contamination-container-title">
          <Hamburger3 />
          <div className="container-title">
            <h1 className="contamination-title">INDICES DE CONTAMINACION</h1>
          </div>
        </div>

        <div className="header-contamination">
          <div className="left-part-contamination">
            <h2 className='left-txt-contamination'>La zona que se está analizando se encuentra:</h2>
            <h1 className='left-txt-contamination2'>EN BUEN ESTADO</h1>
            <h2 className='left-txt-contamination3'>Procura mantenerlo asi</h2>
          </div>
          <div className="right-part-contamination">
            <img src="src\assets\contamination-image.png" alt="" className='contamination-header-img' />
          </div>
        </div>

      </div>

        <div className="graficas">
          <div className="grafica1-container">
            <div>
              <h2 className='grafica1-txt'>hola</h2>
              <div className="grafica-1">
                <LineChart/>
              </div>
            </div>
          </div>
        </div>


      <div className="footer-contamination">
        <h2 className="txt-footer-contamination">EN CASO DE QUE LOS NIVELES DE CONTAMINACIÓN SEAN MUY ALTOS
          SE LANZARÁ UNA ALERTA</h2>
      </div>

    </div>
  );
};

export default Contamination;