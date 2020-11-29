import React from 'react'
import { Pie } from 'react-chartjs-2'

function PieChart () {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'April'],
    datasets: [
      {
        label: 'Sales 2020 (M)',
        data: [3, 2, 2, 6],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)',
        ]
      }
    ]
  }

  const options = {
    title: {
      display: true,
      text: 'Pie Chart'
    }
  }

  return <Pie data={data} options={options} />
}

export default PieChart