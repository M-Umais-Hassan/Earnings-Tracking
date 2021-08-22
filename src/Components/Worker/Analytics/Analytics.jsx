import React, { useContext } from 'react';

// components
import Count from '../../Count/Count';

// context
import userContext from '../../../Context/userContext';

const Analytics = () => {
    const { userData } = useContext(userContext);
    return (
        <div className="section">
            <div className="analytics__flex">
                <Count label={'Projects'} value={userData && userData.projects && userData.projects.length} />
                <Count  label={'Earnings'} value={userData && userData.earnings ? userData.earnings : 0} isAmount />
            </div>
        </div>
    )
}

export default Analytics;
