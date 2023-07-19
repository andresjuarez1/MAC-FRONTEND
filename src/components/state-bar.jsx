import React from 'react';
import '../styles/stateBar.css';
import { useState } from 'react';
import { useEffect } from 'react';


const Barra = () => {
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
        <div>
            {data ? (
                <div className='aaa'>
                    <div className="description">

                        <div className="calidad">
                            <img src="src\assets\viento.png" alt="" className='viento-icon' />
                            <h2 className='data-state-bar'>{data.co2level}</h2>
                            <h4 className="state-bar-txt">Calidad</h4>
                        </div>

                        <div className="humedad">
                            <img src="src\assets\humedad.png" alt="" className='humedad-icon' />
                            <h2 className='data-state-bar'>{data.humidity}</h2>
                            <h4 className="state-bar-txt">Humedad</h4>
                        </div>

                        <div className="altura">
                            <img src="src\assets\altura.png" alt="" className='altura-icon' />
                            <h2 className='data-state-bar'>{data.altitude}</h2>
                            <h4 className="state-bar-txt">Altura</h4>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Esperando datos del servidor...</p>
            )}
        </div >

    );
};

export default Barra;
