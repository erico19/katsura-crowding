import React from 'react';

import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, BarController, BarElement, LinearScale, Title, CategoryScale } from 'chart.js';

ChartJS.register(BarController, BarElement, LinearScale, CategoryScale, Title);

const data = {
  labels: ['11:00', '11:05', '11:10', '11:15', '11:20', '11:25', '11:30', '11:35', '11:40', '11:45', '11:50', '11:55',
           '12:00', '12:05', '12:10', '12:15', '12:20', '12:25', '12:30', '12:35', '12:40', '12:45', '12:50', '12:55', 
           '13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55', 
           '14:00'],
  datasets: [{
    label: 'My First Dataset',
    data: [12, 48, 72, 76, 56, 24, 12, 14, 56, 24, 12, 14,
           12, 48, 72, 76, 56, 24, 12, 14, 56, 24, 12, 14,
           12, 48, 72, 76, 56, 24, 12, 14, 56, 24, 12, 14,
           12],
    backgroundColor: [
      '#E5E7EB',
      '#E5E7EB',
      '#E5E7EB',
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