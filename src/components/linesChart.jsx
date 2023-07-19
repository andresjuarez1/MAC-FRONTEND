import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LinesChart() {
  const [data, setData] = useState({
    labels: [""],
    datasets: [
      {
        label: 'Gases',
        data: [], // Empty initial data
        tension: 0.5,
        fill: true,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 5,
        pointBorderColor: 'rgba(255, 99, 132)',
        pointBackgroundColor: 'rgba(255, 99, 132)',
      },
    ],
  });

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8765");

    socket.addEventListener("open", () => {
      console.log("Conexión WebSocket establecida");
    });

    socket.addEventListener("message", (event) => {
      const receivedData = JSON.parse(event.data);
      setData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: receivedData,
          },
        ],
      }));
    });

    socket.addEventListener("close", () => {
      console.log("Conexión WebSocket cerrada");
    });

    return () => socket.close();
  }, []);

  const misoptions = {
    scales: {
      y: {
        min: 0,
      },
      x: {
        ticks: { color: 'rgb(255, 99, 132)' },
      },
    },
  };

  return <Line data={data} options={misoptions} />;
}