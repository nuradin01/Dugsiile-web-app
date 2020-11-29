import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart ({studentsState:{feesOfFirst30Days,feesOfSecond30Days,feesOfThird30Days,feesOfLast30Days, feesOf5MonthsAgo}}) {
  const data = {
    labels: [
      '0',
      '30',
      '60',
      '90',
      '120'
    ],
    datasets: [
     
      {
        label: 'Fees in ($)',
        data: [feesOf5MonthsAgo, feesOfFirst30Days, feesOfSecond30Days, feesOfThird30Days, feesOfLast30Days],
        borderColor: ['rgba(54, 162, 235, 1)'],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
        pointBorderColor: 'rgba(54, 162, 235, 0.2)'
      }
    ]
  }

  const options = {
   
    // scales: {
    //   yAxes: [
    //     {
    //       ticks: {
    //         min: 0,
    //         max: 300,
    //         stepSize: 30
    //       }
    //     }
    //   ]
    // }
  }

  return <Line data={data} options={options} />
}

export default LineChart