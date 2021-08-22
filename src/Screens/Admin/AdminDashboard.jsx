import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

// components
import Nav from '../../Components/Admin/Nav';

// context
import userContext from '../../Context/userContext';

const AdminDashboard = () => {
    const history = useHistory();
    const { userData, setUserData } = useContext(userContext);
    // useEffect(() => {
    //     if(!userData) {
    //         history.push('/signin');
    //     }
    //     else if(userData && !userData.admin) {
    //         history.push('/dashboard');
    //     }
    // }, []);
    return (
        <div>
            <Nav />
        </div>
    )
}

export default AdminDashboard
