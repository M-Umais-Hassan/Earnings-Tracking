import React, { useContext } from 'react';

// firebase
import { auth } from '../../firebase';

// context
import userContext from '../../Context/userContext';

// components
import Nav from '../../Components/Navbar/Nav';
import Analytics from '../../Components/Worker/Analytics/Analytics';

const WorkerDashboard = () => {
    const { userData, setUserData } = useContext(userContext);

    return (
        <>
            <Nav heading={'Logo'} />
            <div className="container">
                <Analytics />
            </div>
        </>
    )
}

export default WorkerDashboard

