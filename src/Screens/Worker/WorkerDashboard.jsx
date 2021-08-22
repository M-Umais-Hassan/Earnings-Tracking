import React, { useContext } from 'react';

// firebase
import { auth } from '../../firebase';

// context
import userContext from '../../Context/userContext';

// components
import Nav from '../../Components/Worker/Navbar/Nav';

const WorkerDashboard = () => {
    const { userData, setUserData } = useContext(userContext);

    return (
        <>
            <Nav />
            <div className="container">
                <h1>Dashboard</h1>
            </div>
        </>
    )
}

export default WorkerDashboard

