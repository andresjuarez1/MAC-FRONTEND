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
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['9', '10', '11', '12', '13', '14', '15'];

export const data = {
  labels,
  datasets: [
    {
      label: 'TEMPERATURA',
      data: [28, 28, 28, 28, 28, 28, 28],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    // {
    //   label: 'Dataset 2',
    //   data: [1, 6, 10, 34, 53, 23, 4],
    //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
    // },
  ],
};

export function LineChart2() {
  return <Line options={options} data={data} />;
}
