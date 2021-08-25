import React from 'react';
import './analytics.style.css';

// components
import Count from '../../Count/Count';

// bar chart
import { Bar, Doughnut } from 'react-chartjs-2';

const Analytics = ({ workerCount, projectCount }) => {
    const chartData = {
        labels: ['Workers', 'Projects'],
        datasets: [
            {
                label: 'Workers and Projects',
                data: [workerCount, projectCount],
                backgroundColor: [
                    'rgb(94, 186, 97)',
                    'rgb(38, 89, 40)',
                ]
            },
        ]
    }
    const barData = {
        labels: ['Workers', 'Projects'],
        datasets: [
            {
                label: 'Workers and Projects',
                data: [workerCount, projectCount],
                borderColor: [
                    'rgb(94, 186, 97)',
                    'rgb(38, 89, 40)',
                ],
                backgroundColor: [
                    'rgb(94, 186, 97)',
                    'rgb(38, 89, 40)',
                ]
            },
        ]
    }

    return (
        <div className="section">
            <div className="analytics__flex">
                <Count label={'Workers'} value={workerCount} />
                <Count label={'Projects'} value={projectCount} />
            </div>
            <div className="section chart__area">
                <div className="chart">
                    <Doughnut data={chartData} />
                </div>
                <div className="chart">
                    <Bar data={barData} />
                </div>
            </div>
        </div> 
    )
}

export default Analytics
