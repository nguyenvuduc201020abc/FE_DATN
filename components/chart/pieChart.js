import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { BASE_URL } from '../../api/requet'




ChartJS.register(ArcElement, Tooltip, Legend)
export const options = {




  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Statistical chart of all parking current month'
    }
  }
}





export const data = {
  labels: [
    'Bach Khoa Parking',
    'Lac Long Quan Parking',
    'Truong Dinh Parking',
    'Vu Ngoc Phan Parking',
  ],
  datasets: [
    {
      label: '# of Votes',
      data: [250, 200, 560, 350],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1
    }
  ]
}

export function PieChart() {
  return <Pie options={options} data={data} />
}
