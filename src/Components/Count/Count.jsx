import React from 'react';
import './count.style.css';

const Count = ({ label, value, isAmount }) => {
    return (
        <div className="count">
            <h1 className="label">{label}</h1>
            <hr />
            <h1 className="number">{isAmount ? "$" : null}{value}</h1>
        </div>
    )
}

export default Count
