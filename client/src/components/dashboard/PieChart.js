import React from 'react'
import { Pie } from 'react-chartjs-2'

function PieChart ({studentsState:{maleStudents, femaleStudents}}) {
  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        label: 'Gender ',
        data: [maleStudents,  femaleStudents, ],
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
        ]
      }
    ]
  }

  return <Pie data={data}  />
}

export default PieChart