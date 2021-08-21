import React, { useContext } from 'react';
import { auth } from '../../firebase';

// context
import userContext from '../../Context/userContext';

const WorkerDashboard = () => {
    const { userData, setUserData } = useContext(userContext);

    console.log(userData)

    const handleSignout= () => {
        auth.signOut();
    }

    return (
        <div>
            {userData && userData.name}
            <button onClick={handleSignout}>Logout</button>
        </div>
    )
}

export default WorkerDashboard

