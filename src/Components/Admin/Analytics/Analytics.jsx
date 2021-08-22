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
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
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
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
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
