// src/components/TemperatureChart.js
import React from 'react';
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
  Filler, // Import Filler for the gradient fill
} from 'chart.js';

// Register the components
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

const TemperatureChart = ({ forecast }) => {
  if (!forecast || forecast.length === 0) {
    return null;
  }

  const chartData = {
    labels: forecast.map(item => new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecast.map(item => item.main.temp),
        borderColor: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          return gradient;
        },
        tension: 0.4, // Makes the line smooth
        fill: true,   // Enable the gradient fill
        pointBackgroundColor: '#fff',
        pointBorderColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: 'rgba(255, 255, 255, 0.7)' },
        grid: { display: false }
      },
      y: {
        ticks: { color: 'rgba(255, 255, 255, 0.7)' },
        grid: { color: 'rgba(255, 255, 255, 0.1)' }
      },
    },
    plugins: {
      legend: {
        display: false, // We don't need a legend for a single dataset
      },
    },
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-2">TEMPERATURE NEXT 24H</h2>
      <div className="p-4 rounded-xl bg-white/20" style={{ height: '200px' }}>
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TemperatureChart;
