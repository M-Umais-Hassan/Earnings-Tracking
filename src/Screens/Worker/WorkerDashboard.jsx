import React, { useContext } from 'react';

// firebase
import { auth } from '../../firebase';

// components
import Nav from '../../Components/Navbar/Nav';
import Analytics from '../../Components/Worker/Analytics/Analytics';
import Table from '../../Components/Worker/Analytics/Table';

const WorkerDashboard = () => {
    return (
        <>
            <Nav heading={'Earnings Tracking'} />
            <div className="container">
                <Analytics />
                <Table />
            </div>
        </>
    )
}

export default WorkerDashboard

