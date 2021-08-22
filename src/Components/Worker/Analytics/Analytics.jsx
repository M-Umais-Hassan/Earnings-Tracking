import React from 'react';

// components
import Count from '../../Count/Count';

const Analytics = () => {
    return (
        <div className="section">
            <div className="analytics__flex">
                <Count label={'Your Projects'} value={100} />
                <Count  label={'Your Earnings'} value={10000} isAmount />
            </div>
        </div>
    )
}

export default Analytics;
