import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';

// firebase
import { db } from '../../firebase';

// component
import Nav from '../../Components/Navbar/Nav';
import WorkerDetails from '../../Components/Admin/Details/WorkerDetails';
import AddProject from '../../Components/Admin/Details/AddProject';
import AllProjects from '../../Components/Admin/Details/AllProjects';

// context
import userContext from '../../Context/userContext';

const Detail = () => {
    const { userData, setUserData } = useContext(userContext);
    const { workerId } = useParams();
    const [workerData, setWorkerData] = useState({});
    useEffect(() => {
        console.log('Detail useeffect')
        const ref = db.ref(`Users/${workerId}`);
        ref.on('value', snapshot => {
            setWorkerData(snapshot.val());
        });
    }, [userData]);
    return (
        <div>
            <Nav heading={'Admin Panel'} />
            <div className="container">
                <WorkerDetails workerData={workerData} />
                <AddProject workerId={workerId} />
                <AllProjects workerId={workerId} />
            </div>
        </div>
    )
}

export default Detail
