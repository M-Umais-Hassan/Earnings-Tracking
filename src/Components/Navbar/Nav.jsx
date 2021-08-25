import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.style.css';

// context
import userContext from '../../Context/userContext';

// firebase
import { auth } from '../../firebase';

// icons
import { AiFillCaretDown } from 'react-icons/ai'

const Nav = ({ heading }) => {
    const { userData, setUserData } = useContext(userContext);
    const [menu, setMenu] = useState(false);

    const handleSignout= () => {
        auth.signOut();
        setUserData({});
    }

    return (
        <div className="nav">
            <div id="logo">
                <Link to="/dashboard"><h1>{heading}</h1></Link>
            </div>
            <div id="menu__btn" onClick={() => setMenu(!menu)}>
                <span>{userData.name}</span>
                <AiFillCaretDown />
            </div>
            <ul className={menu ? "show" : ""}>
                {userData && !userData.admin
                    ? <li><Link to="/profile">Profile</Link></li> 
                    : null
                }
                <div id="line"></div>
                <li onClick={handleSignout}>Logout</li>
            </ul>
        </div>
    )
}

export default Nav
