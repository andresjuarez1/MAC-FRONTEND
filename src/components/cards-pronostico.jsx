import React from "react";
import SimplePieCharts from '../components/lines-chart2'
import '../styles/cards-pronostico.css'

const PronosticoCards = () => {
    return (
        <div className="container-pronostico-cards">
            <div className="left-part-pronostico">
                <div className="cards-pronostico">

                    <div className="aa card1-pronostico">
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

                    <div className="aa card2-pronostico">
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

                    <div className="aa card3-pronostico">
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

                    <div className="aa card4-pronostico">
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

                    <div className="aa card5-pronostico">
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

                    <div className="aa card6-pronostico">
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

                    <div className="aa card7-pronostico">
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

                    <div className="aa card8-pronostico">
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

                    <div className="aa card9-pronostico">
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
                    <SimplePieCharts />
                    <div className="bottom-right-pronostico-card">
                        <div className='soleados-right-pronostico'>
                            <h4 className='bottom-txt'>Días soleados</h4>
                            <h4 className="bottom-soleado-txt">15</h4>
                        </div>
                        <div className='lluvia-right-pronostico-card'>
                            <h4 className='bottom-txt'>Días lluviosos</h4>
                            <h4 className="bottom-lluvia-txt">15</h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom-right-pronostico">
                <div className='bottom-right-part-pronostico'>
                    <h2 className='bottom-right-txt'>Temperatura máxima</h2>
                    <h2 className='bottom-right-min-txt'>40°</h2>
                    <h2 className='bottom-right-txt'>Temperatura mínima</h2>
                    <h2 className='bottom-right-max-txt'>15°</h2>
                </div>
            </div>
        </div>
    );
};

export default PronosticoCards 