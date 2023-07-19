import React, { useEffect } from 'react';
import Hamburger3 from './components/hamburger-menu3';
import HomeIcon from './components/icon-home';
import './styles/contamination.css';
import LinesChart from './components/linesChart';
import { useState } from 'react';

const Contamination = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Establecer la conexión WebSocket en el cliente
    const socket = new WebSocket("ws://127.0.0.1:8765");

    // Escuchar eventos de la conexión WebSocket
    socket.addEventListener("open", () => {
      console.log("Conexión WebSocket establecida");
    });

    socket.addEventListener("message", (event) => {
      const parsedData = JSON.parse(event.data);
      setData(parsedData);
    });

    socket.addEventListener("close", () => {
      console.log("Conexión WebSocket cerrada");
    });

    // Limpiar la conexión WebSocket cuando el componente se desmonta
    return () => socket.close();
  }, []);


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
      {data ? (

        <div className="graficas">
          <div className="grafica1-container">
            <div>
              <h2 className='grafica1-txt'>{data.date}</h2>
              <div className="grafica-1">
                <LinesChart />
              </div>
            </div>
          </div>

        </div>
      ) : (
        <p>Esperando datos del servidor...</p>
      )}
      <div className="footer-contamination">
        <h2 className="txt-footer-contamination">EN CASO DE QUE LOS NIVELES DE CONTAMINACIÓN SEAN MUY ALTOS
          SE LANZARÁ UNA ALERTA</h2>
      </div>

    </div>
  );
};

export default Contamination;