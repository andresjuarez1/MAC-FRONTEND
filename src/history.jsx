import React from 'react';
import Header from './components/header';
import './styles/history.css';
import { useState } from 'react';
import { useEffect } from 'react';

const History = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8765");

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
    <div className='history'>
      <div className="header-main">
        <Header />
      </div>
      <div className="container-history">
        <div className="container-title-history">
          <p className="title-page-history">REGISTRO HISTORICO</p>
        </div>
        {data ? (
          <div>
            <div className="container-content">
              <div className="content-history">
                <div className="ch1 card-history-main">
                  <div className="header-card-main">
                    <h1 className="title-history">{data.date}</h1>
                    <h2 className="subtitle-history">Suchiapa</h2>
                  </div>
                  <div className="content-card-main">
                    <img src="src\assets\cloud-home.png" alt="" className='cloud-card-main' />
                    <h1 className="temperature-card-main">{data.DHT11temperature}</h1>
                  </div>
                  {/* <div className="temperatura-footer">
                    <h2 className="temperatura-main-footer">Máximo: 40°</h2>
                    <h2 className="temperatura2-main-footer">Mínima: 25°</h2>
                  </div> */}
                </div>

                <div className="ch1 card-history1">
                  <div className="temperature-cards-title">
                    <h2 className="cards-title-header">{data.date}</h2>
                  </div>

                  <div className="temperature-content-card">
                    <div className="left-part-cards">
                      <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                    </div>
                    <div className="right-part-cards">
                      <div className="temperature-card-txt">
                        <h2>{data.DHT11temperature}°C</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ch1 card-history2">
                  <div className="temperature-cards-title">
                    <h2 className="cards-title-header">{data.date}</h2>
                  </div>

                  <div className="temperature-content-card">
                    <div className="left-part-cards">
                      <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                    </div>
                    <div className="right-part-cards">
                      <div className="temperature-card-txt">
                        <h2>{data.DHT11temperature}°C</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ch1 card-history3">
                  <div className="temperature-cards-title">
                    <h2 className="cards-title-header">{data.date}</h2>
                  </div>

                  <div className="temperature-content-card">
                    <div className="left-part-cards">
                      <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                    </div>
                    <div className="right-part-cards">
                      <div className="temperature-card-txt"></div>
                      <div className="temperature-card-txt">
                        <h2>{data.DHT11temperature}°C</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ch1 card-history4">
                  <div className="temperature-cards-title">
                    <h2 className="cards-title-header">{data.date}</h2>
                  </div>

                  <div className="temperature-content-card">
                    <div className="left-part-cards">
                      <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                    </div>
                    <div className="right-part-cards">
                      <div className="temperature-card-txt">
                        <h2>{data.DHT11temperature}°C</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ch1 card-history5">
                  <div className="temperature-cards-title">
                    <h2 className="cards-title-header">{data.date}</h2>
                  </div>

                  <div className="temperature-content-card">
                    <div className="left-part-cards">
                      <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                    </div>
                    <div className="right-part-cards">
                      <div className="temperature-card-txt">
                        <h2>{data.DHT11temperature}°C</h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ch1 card-history6">
                  <div className="temperature-cards-title">
                    <h2 className="cards-title-header">{data.date}</h2>
                  </div>
                  <div className="temperature-content-card">
                    <div className="left-part-cards">
                      <img src="src\assets\cloud-home.png" alt="" className='cloud-cards-img' />
                    </div>
                    <div className="right-part-cards">
                      <div className="temperature-card-txt">
                        <h2>{data.DHT11temperature}°C</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          console.log('Esperando datos del servidor...')
        )}
      </div>
    </div>
  );
};

export default History;