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
            const ref = db.ref('Projects');
            const projectRef = db.ref(`Projects/${userData.id}`);
            const userRef = db.ref(`Users/${userData.id}`);
            ref.on('value', snapshot => {
                if(snapshot.hasChild(userData.id)) {
                    projectRef.on('value', snapshot => {
                        if(snapshot.val() && Object.values(snapshot.val()).length != null){
                            setProjectCount(Object.values(snapshot.val()).length);
                        }else {
                            setProjectCount(0)
                        }
                    })
                }
                setLoading(false);
            })
            userRef.on('value', snapshot => {
                if(snapshot.hasChild('earning')) {
                    setEarningsCount(snapshot.val().earning);
                }
                else {
                    setEarningsCount(0);
                }
            })
        }
    }, [userData])
    
    return (
        <div className="section">
            <div className="analytics__flex">
                <Count label={'Projects'} value={projectCount ? projectCount : 0} />
                <Count  label={'Balance'} value={earningsCount ? earningsCount : 0} isAmount />
            </div>
        </div>
    )
}

export default Analytics;
