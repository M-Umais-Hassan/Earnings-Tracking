import React, { useState } from 'react';
import Loading from '../../Components/Loader/Loading';

// components
import Nav from '../../Components/Navbar/Nav';
import Analytics from '../../Components/Worker/Analytics/Analytics';
import Table from '../../Components/Worker/Analytics/Table';

const WorkerDashboard = () => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <Nav heading={'Bitrix24portal'} />
            {loading ? 
                <Loading /> : 
                <div className="container">
                    <Analytics setLoading={setLoading} />
                    <Table />
                </div>
            }
        </>
    )
}

export default WorkerDashboard

