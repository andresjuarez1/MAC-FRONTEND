import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = ['5', '6', '7', '8', '9'];

export const data = {
  labels,
  datasets: [
    {
      label: 'CO2 LEVELS',
      data: [179.69, 183, 188.33, 192.15, 184.78, 192.91, 193.42],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [1, 6, 10, 34, 53, 23, 4],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
