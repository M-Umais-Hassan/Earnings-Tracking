import React, { useState, useContext, useEffect } from 'react';

// components
import Count from '../../Count/Count';

// context
import userContext from '../../../Context/userContext';

// firebase
import { db } from '../../../firebase';

const Analytics = ({ setLoading }) => {
    const { userData } = useContext(userContext);
    const [projectCount, setProjectCount] = useState(0);
    const [earningsCount, setEarningsCount] = useState(0);
    
    useEffect(() => {
        if(userData.id){
            setLoading(true);
            let count = 0;
            const ref = db.ref('Projects');
            const projectRef = db.ref(`Projects/${userData.id}`);
            ref.on('value', snapshot => {
                if(snapshot.hasChild(userData.id)) {
                    projectRef.on('value', snapshot => {
                        setProjectCount(Object.values(snapshot.val()).length);
                        for(let i=0; i<Object.values(snapshot.val()).length; i++) {
                            count += parseInt(Object.values(snapshot.val())[i].earning);
                            setEarningsCount(count);
                        }
                        setLoading(false);
                    })
                }
            })
        }
    }, [userData])
    
    return (
        <div className="section">
            <div className="analytics__flex">
                <Count label={'Projects'} value={projectCount ? projectCount : 0} />
                <Count  label={'Earnings'} value={earningsCount ? earningsCount : 0} isAmount />
            </div>
        </div>
    )
}

export default Analytics;
