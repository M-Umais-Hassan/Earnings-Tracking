import React, { useContext } from 'react';
import './nav.style.css';

// context
import userContext from '../../../Context/userContext';

// firebase
import { auth } from '../../../firebase';

const Nav = () => {
    const { userData, setUserData } = useContext(userContext);

    const handleSignout= () => {
        auth.signOut();
        setUserData({});
    }

    return (
        <div className="nav">
            <div id="logo">
                <h1>Earnings Tracker</h1>
            </div>
            <ul>
                <li><button id="logout" onClick={handleSignout}>Logout</button></li>
            </ul>
        </div>
    )
}

export default Nav
