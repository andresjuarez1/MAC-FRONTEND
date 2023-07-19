import React from "react";
import "./styles/statistics.css";
import Hamburger3 from "./components/hamburger-menu3";
import IconHome from "./components/icon-home";
import SimplePieCharts from "./components/lines-chart2";
import LinesChart from "./components/linesChart";
import axios from "axios"; // Importar Axios
import { useState, useEffect } from "react";


const Statistics = () => {
    const handlePrint = () => {
        window.print();
    };
    const [dispersionData, setDispersionData] = useState(null);
    const [tendenciaData, setTendenciaData] = useState(null);
    const [frecuenciaData, setFrecuenciaData] = useState(null);
    const [distribucionFrecuenciaData, setDistribucionFrecuenciaData] = useState(null);

    useEffect(() => {
        getDispersionData();
        getTendenciaData();
        getFrecuenciaData();
        getDistribucionFrecuenciaData();
    }, []);

    // Función para obtener las medidas de dispersión desde el servidor
    function getDispersionData() {
        axios
            .get("http://127.0.0.1:5050/calcularMedidasDispersion")
            .then((response) => {
                setDispersionData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Función para obtener las medidas de tendencia desde el servidor
    function getTendenciaData() {
        axios
            .get("http://127.0.0.1:5050/calcularMedidasTendencia")
            .then((response) => {
                setTendenciaData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Función para obtener las medidas de frecuencia desde el servidor
    function getFrecuenciaData() {
        axios
            .get("http://127.0.0.1:5050/calcularMedidasFrecuencia")
            .then((response) => {
                setFrecuenciaData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // Función para obtener las medidas de distribución de frecuencia desde el servidor
    function getDistribucionFrecuenciaData() {
        axios
            .get("http://127.0.0.1:5050/calcularMedidasDistribucionFrecuencia")
            .then((response) => {
                setDistribucionFrecuenciaData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <div className="container-statistics">
                <div className="header-statistics">
                    <Hamburger3 />
                    <IconHome />
                    <h1 className="title-statistics">DATOS ESTADÍSTICOS</h1>
                </div>

                <div className="print-part">
                    <button className="print" onClick={handlePrint}>
                        Generar PDF
                    </button>
                </div>

                <div className="content-statistics">

                    {dispersionData && (
                        <div className="card-statistic dispersion-data">
                            <h2 className="txt-statistics">MEDIDAS DE DISPERSIÓN</h2>
                            <div className="grafica-statistics">
                                <pre>{JSON.stringify(dispersionData, null, 2)}</pre>
                            </div>
                        </div>
                    )}

                    {tendenciaData && (
                        <div className="card-statistic tendencia-data">
                            <h2 className="txt-statistics">MEDIDAS DE TENDENCIA</h2>
                            <div className="grafica-statistics">
                                <pre>{JSON.stringify(tendenciaData, null, 2)}</pre>
                            </div>
                        </div>
                    )}

                    {frecuenciaData && (
                        <div className="card-statistic frecuencia-data">
                            <h2 className="txt-statistics">MEDIDAS DE FRECUENCIA</h2>
                            <div className="grafica-statistics">
                                <pre>{JSON.stringify(frecuenciaData, null, 2)}</pre>
                            </div>
                        </div>
                    )}

                    {distribucionFrecuenciaData && (
                        <div className="card-statistic distribucion-frecuencia-data">
                            <h2 className="txt-statistics">MEDIDAS DE DISTRIBUCIÓN DE FRECUENCIA</h2>
                            <div className="grafica-statistics">
                                <pre>{JSON.stringify(distribucionFrecuenciaData, null, 2)}</pre>
                            </div>
                        </div>
                    )}

                    
                    {/* <div className="card-statistic media">
                        <h2 className="txt-statistics">MEDIA</h2>
                        <div className="grafica-statistics">
                            <LinesChart />
                        </div>
                    </div> */}

                    {/* <div className="card-statistic moda">
                        <h2 className="txt-statistics">MODA</h2>
                        <div className="grafica-statistics">
                            <LinesChart />
                        </div>
                    </div> */}

                    {/* <div className="card-statistic mediana">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Statistics;
