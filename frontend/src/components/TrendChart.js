import React from 'react';

import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(BarController, BarElement, LinearScale, CategoryScale, Title);

const data = {
  labels: ['11:30', '11:45', '12:00', '12:15', '12:30', '12:45', '13:00'],
  datasets: [{
    label: 'My First Dataset',
    data: [12, 48, 72, 76, 56, 24, 12],
    backgroundColor: [
      '#E5E7EB',
      '#E5E7EB',
      '#F472B6',
      '#E5E7EB',
      '#E5E7EB',
      '#E5E7EB',
      '#E5E7EB'
    ],
    borderRadius: 4,
  }]
};

const options = {
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      display: false,
    }
  }
}

const TrendChart = () => {
  return (
    <div>
      <Chart 
        type='bar'
        data={data}
        options={options}
      />
    </div>
  )
}

export default TrendChart