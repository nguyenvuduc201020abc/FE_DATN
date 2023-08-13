import React, { useEffect, useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { BASE_URL } from '../../api/requet'
import axios from 'axios'

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

export function PieChart() {
  const [revenue, setRevenue]= useState([])
  useEffect(() => {
    const getData = async () => {
      
      const response = await axios.get(
        `${BASE_URL}/statistic-piechart`
        )
        console.log("res",response.data)
       setRevenue(response.data)
      }
      getData()
    }, [])
    // console.log("asa",  revenue.map(item => item.parkingName))
  const data = {
  labels: revenue.map(item => item.parking_name),
  datasets: [
    {
      label: '# of Votes',
      data:revenue.map(item => item.revenue) ,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(100, 200, 50, 0.2)',
        'rgba(150, 75, 200, 0.2)',
        'rgba(50, 100, 150, 0.2)',
        'rgba(200, 50, 100, 0.2)',
        'rgba(255, 0, 0, 0.2)',
        'rgba(0, 255, 0, 0.2)',
        'rgba(0, 0, 255, 0.2)',
        'rgba(125, 125, 0, 0.2)',
        'rgba(0, 125, 125, 0.2)',
        'rgba(125, 0, 125, 0.2)',
        'rgba(200, 200, 200, 0.2)',
        'rgba(50, 75, 100, 0.2)',
        'rgba(75, 50, 100, 0.2)',
        'rgba(100, 75, 50, 0.2)',
        'rgba(0, 0, 0, 0.2)',
        'rgba(255, 255, 255, 0.2)',
        'rgba(150, 150, 150, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(255, 0, 255, 0.2)',
        'rgba(255, 255, 0, 0.2)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(100, 200, 50, 1)',
        'rgba(150, 75, 200, 1)',
        'rgba(50, 100, 150, 1)',
        'rgba(200, 50, 100, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(125, 125, 0, 1)',
        'rgba(0, 125, 125, 1)',
        'rgba(125, 0, 125, 1)',
        'rgba(200, 200, 200, 1)',
        'rgba(50, 75, 100, 1)',
        'rgba(75, 50, 100, 1)',
        'rgba(100, 75, 50, 1)',
        'rgba(0, 0, 0, 1)',
        'rgba(255, 255, 255, 1)',
        'rgba(150, 150, 150, 1)',
        'rgba(0, 255, 255, 1)',
        'rgba(255, 0, 255, 1)',
        'rgba(255, 255, 0, 1)',
        
      ],
      borderWidth: 1
    }
  ]
}

  return <Pie options={options} data={data} />
}

