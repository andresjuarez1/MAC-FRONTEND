import React from "react";
import "./styles/statistics.css";
import Hamburger3 from "./components/hamburger-menu3";
import IconHome from "./components/icon-home";
import { LineChart } from "./components/linesChart";
import axios from "axios"; // Importar Axios
import { useState, useEffect } from "react";
import Header from './components/header'
import { LineChart2 } from './components/linesChart2';

const Statistics = () => {
    const handlePrint = () => {
        window.print();
    };
    const [dispersionData, setDispersionData] = useState(null);
    const [tendenciaData, setTendenciaData] = useState(null);
    const [frecuenciaData, setFrecuenciaData] = useState(null);
    const [distribucionFrecuenciaData, setDistribucionFrecuenciaData] = useState(null);
    const [pearson, setPearson] = useState(null);
    const [spearman, setSpearman] = useState(null);

    useEffect(() => {
        getDispersionData();
        getTendenciaData();
        getFrecuenciaData();
        getDistribucionFrecuenciaData();
        fetchData();
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


    const fetchData = () => {
        axios
            .get("http://127.0.0.1:5050/calcularCoeficientesCorrelacion")
            .then((response) => {
                const data = response.data;
                setPearson(data.coeficiente_pearson);
                setSpearman(data.coeficiente_spearman);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    function formatData(data) {
        let result = "";

        for (const [key, value] of Object.entries(data)) {
            result += `${key}:\n`;

            if (typeof value === "object") {
                for (const [subKey, subValue] of Object.entries(value)) {
                    result += `${subKey}: ${subValue}\n`;
                }
            } else {
                result += `${value}\n`;
            }

            result += "\n";
        }

        return result;
    }

    return (
        <div>
            <div className="header-main">
                <Header />
            </div>

            <div className="container-statistics">
                <div className="header-statistics">
                    <p className="title-statistics">ESTADISTICA</p>
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
                                <pre>{formatData(dispersionData)}</pre>
                            </div>
                        </div>
                    )}

                    {tendenciaData && (
                        <div className="card-statistic tendencia-data">
                            <h2 className="txt-statistics">MEDIDAS DE TENDENCIA</h2>
                            <div className="grafica-statistics">
                                <pre>{formatData(tendenciaData)}</pre>
                            </div>
                        </div>
                    )}

                    {frecuenciaData && (
                        <div className="card-statistic frecuencia-data">
                            <h2 className="txt-statistics">MEDIDAS DE FRECUENCIA</h2>
                            <div className="grafica-statistics">
                                <pre>{formatData(frecuenciaData)}</pre>
                            </div>
                        </div>
                    )}

                    <div className="card-statistic distribucion-frecuencia-data">
                        <h2 className="txt-statistics">MEDIDAS DE DISTRIBUCIÓN DE FRECUENCIA</h2>
                        <div className="grafica-statistics">
                            {distribucionFrecuenciaData &&
                                Object.entries(distribucionFrecuenciaData).map(([columna, medidas]) => (
                                    <div key={columna}>
                                        <h3>{columna}</h3>
                                        <table className="table-fre">
                                            <thead>
                                                <tr>
                                                    <th>Frecuencia Acumulada</th>
                                                    <th>Frecuencia Relativa</th>
                                                    <th>Frecuencia Relativa Acumulada</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="data-list">
                                                            {Object.entries(medidas["Frecuencia Acumulada"]).map(([valor, frecuencia]) => (
                                                                <div key={valor}>
                                                                    {valor}: {frecuencia}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="data-list">
                                                            {Object.entries(medidas["Frecuencia Relativa"]).map(([valor, frecuencia]) => (
                                                                <div key={valor}>
                                                                    {valor}: {frecuencia}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="data-list">
                                                            {Object.entries(medidas["Frecuencia Relativa Acumulada"]).map(([valor, frecuencia]) => (
                                                                <div key={valor}>
                                                                    {valor}: {frecuencia}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div className="card-statistic correlacion">
                        <h2 className="txt-statistics">CORRELACIÓN</h2>
                        <div className="correlacion-statistics">
                            {pearson && (
                                <p>
                                    Coeficiente de Pearson: <span>{pearson.toFixed(4)}</span>
                                </p>
                            )}
                            {spearman && (
                                <p>
                                    Coeficiente de Spearman: <span>{spearman.toFixed(4)}</span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
                <h1 className="graficas-title-statistics">GRÁFICAS</h1>

                <div className="graficas-container-statistics">
                    <div className="graficas-statistic">
                        <h2 className='grafica1-txt'>TEMPERATURA</h2>
                        <div className="graficas-1">
                            <LineChart2 />
                        </div>
                    </div>

                    <div className="graficas-statistic">
                        <h2 className='grafica1-txt'>CO2 LEVELS</h2>
                        <div className="graficas-1">
                            <LineChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
