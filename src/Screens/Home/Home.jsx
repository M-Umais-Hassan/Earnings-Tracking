import React from 'react';
import { Link } from 'react-router-dom';
import './home.style.css';

const Home = () => {
    return (
        <div className="home__screen">
            <div className="top__nav">
                <div className="logo">
                    <h1>Earnings Tracking</h1>
                </div>
                <ul>
                    <li><Link to="/signin">Login</Link></li>
                    <li><Link to="/signup">Register</Link></li>
                </ul>
            </div>
            <div className="hero__txt">
                <h1>Track your earnings</h1>
                <button><Link to="signup">Get Started</Link></button>
            </div>
        </div>
    )
}

export default Home
