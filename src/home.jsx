import React from 'react';
import './styles/home.css';
import Hamburger from './components/hamburger-menu';
import Barra from './components/state-bar';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Establecer la conexión WebSocket en el cliente
    const socket = new WebSocket("ws://localhost:8765");

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
    <div className="container-home">
      <Barra />
      <div className="header">
        <img src="src\assets\ubication.png" alt="" className='ubication-icon' />
        <h1 className="city">Suchiapa, Chiapas</h1>
        <Hamburger />
      </div>

      {data ? (
        <div className="temperature-home">
          <img src="src\assets\cloud-home.png" alt="" className='cloud-home' />
          <h1 className='temperature-data-home'>{data.DHT11temperature}</h1>
        </div>
      ) : (
        <p>Esperando datos del servidor...</p>
      )}

      {data ? (
        <div>
          <div className="container-cards">
            <div className="cards">
              <div className="ch card">
                <img src="src\assets\cloud-home.png" alt="" className='card-img' />
                <h1 className="card-txt2">{data.DHT11temperature} °c</h1>
                <h1 className="card-txt">{data.hour}</h1>
              </div>

              <div className="ch card">
                <img src="src\assets\cloud-home.png" alt="" className='card-img' />
                <h1 className="card-txt2">{data.DHT11temperature} °c</h1>
                <h1 className="card-txt">{data.hour}</h1>
              </div>

              <div className="ch card">
                <img src="src\assets\cloud-home.png" alt="" className='card-img' />
                <h1 className="card-txt2">{data.DHT11temperature} °c</h1>
                <h1 className="card-txt">{data.hour}</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Esperando datos del servidor...</p>
      )}

    </div>
  );
};

export default Home;  