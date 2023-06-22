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

var beneficios = [0, 56, 20, 36, 80, 40, 30, 10, 25, 30, 12, 60];
var horas = ["9hrs", "10hrs", "11hrs", "12hrs", "13hrs", "14hrs", "15hrs", "16hrs", "17hrs", "18hrs", "19hrs", "20hrs"];

var midata = {
    labels: horas,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Gases',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        // {
        //     label: 'Otra línea',
        //     data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25]
        // },
    ],
};

var misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}