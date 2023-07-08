import React from "react";
import './styles/statistics.css';
import Hamburger3 from './components/hamburger-menu3';
import IconHome from './components/icon-home'
import SimplePieCharts from './components/lines-chart2'
import LinesChart from "./components/linesChart";

const Statistics = () => {
    return (
        <div>
            <div className="container-statistics">

                <div className="header-statistics">
                    <Hamburger3 />
                    <IconHome />
                    <h1 className="title-statistics">DATOS ESTADÍSTICOS</h1>
                </div>

                <div className="content-statistics">
                    <div className="media">
                        <h2 className="txt-media">MEDIA</h2>
                        <SimplePieCharts />
                    </div>

                    <div className="moda">
                        <h2 className="txt-moda">MODA</h2>
                        <div className="grafica-1">
                            <LinesChart />
                        </div>
                    </div>

                    <div className="mediana">
                        <h2 className="txt-mediana">MEDIANA</h2>
                        <div className="grafica-1">
                            <LinesChart />
                        </div>
                    </div>

                    <div className="varianza">
                        <h2 className="txt-varianza">VARIANZA</h2>
                        <div className="grafica-1">
                            <LinesChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;