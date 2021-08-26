import React, { useState, useEffect, useContext } from 'react';

// components
import Nav from '../../Components/Navbar/Nav';
import Analytics from '../../Components/Admin/Analytics/Analytics';
import Table from '../../Components/Admin/Analytics/Table';

// context
import userContext from '../../Context/userContext';

// firebase
import { db } from '../../firebase';
import Loading from '../../Components/Loader/Loading';

const AdminDashboard = () => {
    const { userData, setUserData } = useContext(userContext);
    const [workerCount, setWorkerCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);
    const [allUsers, setAllUsers] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let count = 0;
        let wCount = 0;
        setLoading(true);
        const usersRef = db.ref('Users');
        usersRef.on('value', snapshot => {
            for(let i=0; i<snapshot.numChildren(); i++) {
                if(!(Object.values(snapshot.val()))[i].admin) {
                    const uid = Object.values(snapshot.val())[i].id;
                    wCount++;
                    const ref = db.ref(`Projects`);
                    const projectsRef = db.ref(`Projects/${uid}`);
                    ref.on('value', snapshot => {
                        if(snapshot.hasChild(uid)) {
                            projectsRef.on('value', snapshot => {
                                if(snapshot.val()){
                                    count += Object.values(snapshot.val()).length;
                                    setProjectCount(count);
                                }
                            })
                        }
                    })
                }
            }
            setWorkerCount(wCount);
            setAllUsers(Object.values(snapshot.val()));
            setLoading(false);
        });
    }, []);
    
    return (
        <div>
            <Nav heading={'Admin Panel'} />
            {loading ? <Loading /> : 
            <div className="container">
                <Analytics workerCount={workerCount} projectCount={projectCount} />
                <Table allUsers={allUsers} />
            </div>}
        </div>
    )
}

export default AdminDashboard
