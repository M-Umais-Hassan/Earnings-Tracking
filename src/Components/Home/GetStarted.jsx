import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// icons
import { BsChevronDown } from 'react-icons/bs';

const GetStarted = () => {
    return (
        <div className="get__started">
            <div className="logo">
                <h1>Earnings Tracking</h1>
            </div>
            <div className="hero__text">
                <h1>Work from home, office <br /> or on the go</h1>
                <h3>A signle platform to manage your company, <br /> employees, and clients remotely</h3>
                <Link to="/signup">Start for free</Link>
            </div>
            <div className="scroll">
                <h4>Scroll Down To Learn More</h4>
                <BsChevronDown />
            </div>
        </div>
    )
}

export default GetStarted
