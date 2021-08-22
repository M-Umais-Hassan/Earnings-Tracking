import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// data
import { featuresData } from './featuresData';

const Features = () => {
    return (
        <div className="features__sec">
            <h1>Modern businesses don’t need an office. They need Bitrix24</h1>
            <h3>Bitrix24 features all the tools you need to run your business online and achieve maximum efficiency wherever you are - at home, in the office, or on the go.</h3>
            <div className="features">
            {featuresData.map((feature) => {
                return (
                    <div className="feature" key={feature.id}>
                        <img src={feature.svg} alt="svg" />
                        <h2>{feature.title}</h2>
                        <p>{feature.text}</p>
                    </div>
                )
            })}
            </div>
            <div className="btn"><Link to="/signup">Start for free</Link></div>
        </div>
    )
}

export default Features