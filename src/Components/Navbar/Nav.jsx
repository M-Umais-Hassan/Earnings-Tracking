import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.style.css';

// context
import userContext from '../../Context/userContext';

// firebase
import { auth } from '../../firebase';

// icons
import { MdKeyboardArrowDown } from 'react-icons/md'

const Nav = ({ heading }) => {
    const { userData, setUserData } = useContext(userContext);
    const [profileMenu, setProfileMenu] = useState(false);

    const handleSignout= () => {
        auth.signOut();
        setUserData({});
    }

    return (
        <div className="nav">
            <div id="logo">
                <h1>{heading}</h1>
            </div>
            <ul>
                {!userData.isAdmin
                    ? <li><Link to="/profile">Profile</Link></li> 
                    : null
                }
                <li onClick={handleSignout}>Logout</li>
            </ul>
        </div>
    )
}

export default Nav
