import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

// components
import Nav from '../../Components/Navbar/Nav';
import Analytics from '../../Components/Admin/Analytics/Analytics';
import Table from '../../Components/Admin/Analytics/Table';

// context
import userContext from '../../Context/userContext';

// firebase
import { db, auth } from '../../firebase';

const AdminDashboard = () => {
    const { userData, setUserData } = useContext(userContext);
    const [workerCount, setWorkerCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [allUsers, setAllUsers] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let count = 0;
        setLoading(true);
        const usersRef = db.ref('Users');
        usersRef.on('value', async snapshot => {
            setWorkerCount(snapshot.numChildren());
            for(let i=0; i<snapshot.numChildren(); i++) {
                if(!(Object.values(snapshot.val()))[i].admin) {
                    if((Object.values(snapshot.val()))[i].projects) {
                        for(let j=0; j<(Object.values(snapshot.val()))[i].projects.length; j++){
                            count++;
                        }
                    }
                }
            }
            setProjectCount(count);
            setAllUsers(Object.values(snapshot.val()));
            setLoading(false);
        });
    }, []);
    
    return (
        <div>
            <Nav heading={'Admin Panel'} />

            <div className="container">
                <Analytics workerCount={workerCount} projectCount={projectCount} />
                <Table allUsers={allUsers} />
            </div>
        </div>
    )
}

export default AdminDashboard
