import React from 'react';
import Hamburger from './components/hamburger-menu2';
import './styles/contamination.css';
import LinesChart from './components/linesChart';


const Contamination = () => {
  return (
    <div className="con">
      <div className='contamination-father'>
        <div className="contamination-container-title">
          <Hamburger />
          <div className="container-title">
            <h1 className="contamination-title">INDICES DE CONTAMINACION</h1>
          </div>
        </div>

        <div className="header-contamination">
          <div className="left-part-contamination">
            <h2 className='left-txt-contamination'>La zona que se está analizando se encuentra:</h2>
            <h1 className='left-txt-contamination2'>EN BUEN ESTADO</h1>
            <h2 className='left-txt-contamination3'>Procura mantenerlo asi:)</h2>
          </div>
          <div className="right-part-contamination">
            <img src="src\assets\contamination-image.png" alt="" className='contamination-header-img' />
          </div>
        </div>
      </div>

      <div className="graficas">
        <div className="grafica1-container">
          <div>
            <p className="grafica1-txt"><b>EJEMPLO #1: </b>CALIDAD DEL AIRE</p>
            <div className="grafica-1">
              <LinesChart />
            </div>
          </div>
        </div>
        <div className="grafica2-container">
          <div>
            <p className="grafica2-txt"><b>EJEMPLO #2: </b>CALIDAD DEL AIRE</p>
            <div className="grafica-1">
              <LinesChart />
            </div>
          </div>
        </div>
        <div className="grafica3-container">
          <div>
            <p className="grafica3-txt"><b>EJEMPLO #3: </b>CALIDAD DEL AIRE</p>
            <div className="grafica-1">
              <LinesChart />
            </div>
          </div>
        </div>
        <div className="grafica4-container">
          <div>
            <p className="grafica4-txt"><b>EJEMPLO #4: </b>CALIDAD DEL AIRE</p>
            <div className="grafica-1">
              <LinesChart />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-contamination">
        <h2 className="txt-footer-contamination">EN CASO DE QUE LOS NIVELES DE CONTAMINACIÓN SEAN MUY ALTOS 
        SE LANZARÁ UNA ALERTA</h2>
      </div>

      <div className="home-icon">
        <a href="/home" className="home-icon"></a>
        {/* <img src="src\assets\login.png" alt="" className='login-icon'/> */}
      </div>

    </div>
  );
};

export default Contamination;