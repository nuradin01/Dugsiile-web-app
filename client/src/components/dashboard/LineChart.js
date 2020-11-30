import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({
  studentsState: {
    feesOfFirst30Days,
    feesOfSecond30Days,
    feesOfThird30Days,
    feesOfLast30Days,
    feesOf5MonthsAgo,
    feesOf5MonthsAgoPaidAt
  },
}) {
  const data = {
    labels: [ '120', '90', '60', '30','Today'],
    datasets: [
      {
        label: 'Fees in ($)',
        data: [
          feesOf5MonthsAgo,
          feesOfFirst30Days,
          feesOfSecond30Days,
          feesOfThird30Days,
          feesOfLast30Days,
        ],
        borderColor: ['rgba(54, 162, 235, 1)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };
  return <Line data={data} />;
}

export default LineChart;
