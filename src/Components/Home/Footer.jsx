import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// icons
import { AiFillFacebook, AiFillYoutube, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="footer__sec">
            <h1>Ready to Start?</h1>
            <h2>
                Switch to remote work and stay that way for as long as you need with Earnings Tracking. Get free access to the world-leading online business management platform with 30+ tools on board.
            </h2>
            <div className="btn"><Link to="/signup">Start for free</Link></div>
            <div className="flex">
                <div className="icon"><AiFillFacebook /></div>
                <div className="icon"><AiFillYoutube /></div>
                <div className="icon"><AiFillTwitterSquare /></div>
                <div className="icon"><AiFillInstagram /></div>
                <div className="icon"><AiFillLinkedin /></div>
            </div>
        </div>
    )
}

export default Footer
