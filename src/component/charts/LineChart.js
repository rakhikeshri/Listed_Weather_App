import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';

Chart.register(CategoryScale);

const LineChart = ({ weather }) => {

    const weather_labels = ['temp', 'feels_like', 'temp_min', 'temp_max']

    const { temp, feels_like, temp_min, temp_max } = weather

    const data = {
        labels: weather_labels?.map(label => label),
        datasets: [
            {
                label: 'Temperature',
                data: [temp, feels_like, temp_min, temp_max],
                borderColor: 'rgb(75, 192, 192)',
                lineTension: 0.5
            },
        ],
    }

    return (
        <div className='bg-white rounded-xl mt-8 items-center justify-center hidden md:flex chart '>
            <Line data={data}/>
        </div>
    )
}

export default LineChart
