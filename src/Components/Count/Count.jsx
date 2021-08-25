import React from 'react';
import './count.style.css';

// icons
import { AiFillDollarCircle, AiFillProject } from 'react-icons/ai';

const Count = ({ label, value, isAmount }) => {
    return (
        <div className="count">
            <div className="flex">
                <h1 className="label">{label}</h1>
                {isAmount ? <AiFillDollarCircle /> : <AiFillProject />}
            </div>
            <h1 className="number">{isAmount ? "$" : null}{value}</h1>
        </div>
    )
}

export default Count
