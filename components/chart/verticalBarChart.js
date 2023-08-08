import axios from 'axios'
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip, 
  scales
} from 'chart.js'
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { BASE_URL } from '../../api/requet'
import Cookies from 'js-cookie'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)
export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Statistical chart by month'
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toLocaleString('en-US') + ' VND';
            }
            return label;
          },
        },
     
    },
    },
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Month',
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'VND',
          },
        },
      },
       
    
  }
  
export function VerticalBarChart() {
  const [month, setMonth] = useState()
  const [revenue, setRevenue]= useState([])
  const [labels, setLabels] = useState([])

  useEffect(() => {
    
    const getData = async () => {
    const response = await axios.get(
        `${BASE_URL}/statistic_revenue_month1`
      )
    const revenueData = response.data;
      // if(parseInt(Cookies.get('role')) === 0){
    //   for (let i = 1; i <= 12; i++) {
    //   const response = await axios.get(
    //     `${BASE_URL}/statistic_revenue_month?month=${i}`
    //   )
    //   revenueData.push(response.data)
    // }
    setRevenue(revenueData);
  // }
//   else{
//     for (let i = 1; i <= 12; i++) {
//     const response = await axios.get(
//       `${BASE_URL}bill/revenue/parkingCode/month?Month=${i}&ParkingCode=1`
//     )
//     revenueData.push(response.data.revenve)
//   }
//   setRevenue(revenueData);
// }
}

    getData()
  }, [])
useEffect(()=>{
  const label = revenue.map((item,index)=>{
    console.log("in",index)
    const monthH= index +1;
    return monthH
  })
setLabels([... label])

},[revenue])
    const data = {
      labels,
        datasets: [
          {
            label: 'Revenue',
        data: labels.map((item, index) => revenue[index]),
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          },
        ]
      }
    return <Bar options={options} data={data}  />
  }