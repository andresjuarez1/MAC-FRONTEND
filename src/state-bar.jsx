import React from 'react';
import './styles/stateBar.css';

const Barra = () => {
    return (
        <div className='aaa'>
            <div className="description">
                <div className="viento">
                    <img src="src\assets\viento.png" alt="" className='viento-icon' />
                    {/* aqui deberia de ir la calidad de viento */}
                    <h4 className="viento-txt">Calidad</h4>
                </div>
                <div className="humedad">
                    <img src="src\assets\humedad.png" alt="" className='humedad-icon' />
                    {/* aqui deberia de ir la humedad */}
                    <h4 className='humedad-txt'>Humedad</h4>
                </div>
                <div className="altura">
                    <img src="src\assets\altura.png" alt="" className='altura-icon' />
                    {/* aqui deberia de ir la altura */}
                    <h4 className="altura-txt">Altura</h4>
                </div>
            </div>
        </div>
    );
};

export default Barra;
