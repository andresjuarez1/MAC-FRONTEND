import React from "react";
import "./styles/statistics.css";
import Hamburger3 from "./components/hamburger-menu3";
import IconHome from "./components/icon-home";
import SimplePieCharts from "./components/lines-chart2";
import LinesChart from "./components/linesChart";

const Statistics = () => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div>
            <div className="container-statistics">
                <div className="header-statistics">
                    <Hamburger3 />
                    <IconHome />
                    <h1 className="title-statistics">DATOS ESTADÍSTICOS</h1>
                </div>

                <div className="content-statistics">
                    <div className="card-statistic media">
                        <h2 className="txt-statistics">MEDIA</h2>
                        <div className="grafica-statistics">
                            <LinesChart />
                        </div>
                    </div>

                    <div className="card-statistic moda">
                        <h2 className="txt-statistics">MODA</h2>
                        <div className="grafica-statistics">
                            <LinesChart />
                        </div>
                    </div>

                    <div className="card-statistic mediana">
                        <h2 className="txt-statistics">MEDIANA</h2>
                        <div className="grafica-statistics">
                            <LinesChart />
                        </div>
                    </div>

                    <div className="card-statistic varianza">
                        <h2 className="txt-statistics">VARIANZA</h2>
                        <div className="grafica-statistics">
                            <LinesChart />
                        </div>
                    </div>
                </div>

                <div className="footer-statistics">
                    <button className="print" onClick={handlePrint}>
                        Generar PDF
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
