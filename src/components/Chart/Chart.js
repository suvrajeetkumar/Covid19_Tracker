import React, { useState , useEffect } from 'react';
import CovidApi from '../../api/Covid19api';
import { Line , Bar } from 'react-chartjs-2';
import './Chart.css'
const Chart = ({data:{confirmed, deaths , recovered ,lastUpdate},country}) => {

  const [dailyData,setDailyData] = useState([]);
  
  useEffect(()=>{
    const fetchAPI = async () => {
    const { data } = await CovidApi.get("/daily");
    const dataArray = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate,
    }))
    setDailyData(dataArray);
    }
    
    fetchAPI();

    
     
    //console.log(dailyData)
    
    
  },[])

  const lineChart = (
    dailyData.length
    ? (
        <Line
        data={{
            labels: dailyData.map(({ data }) => data),
            datasets: [{
                data: dailyData.map(({ confirmed}) => confirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            },{
                data: dailyData.map(({ deaths }) => deaths),
                label: 'Death',
                borderColor: 'red',
                backgroundColor: 'rgba(255 , 0 , 0 , 0.5)',
                fill: true,
            }]
        }}
    />) : null

)

const barChart = (
    confirmed
    ? (
        <Bar
            data={{
                labels:['Infected', 'Recovered' , 'Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]
            }}
            options={{
                legend: {display:false},
                title: {display: true, text:`current state in ${country}`},
            }}
            />
    ):null
)

    return (
        <div class="container">
            {country?barChart:lineChart}
            
        </div>
    )
}

export default Chart;