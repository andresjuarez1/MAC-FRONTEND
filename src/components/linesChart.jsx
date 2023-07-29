import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};

export function LineChart() {
  const [data, setData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    axios.get('http://127.0.0.1:5050/co2data')
      .then(response => {
        const chartData = {
          labels: [],
          datasets: [
            {
              label: 'CO2 LEVELS',
              data: [],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        };

        response.data.forEach(item => {
          chartData.labels.push(item.hour);
          chartData.datasets[0].data.push(item.co2level);
        });

        setData(chartData);
      })
      .catch(error => {
        console.error('Error al obtener los datos: ', error);
      });
  }, []);

  return <Line options={options} data={data} />;
}
