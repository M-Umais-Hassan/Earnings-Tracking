import React from 'react';
import './workerdetails.style.css';

// icons
import { FaUserAlt } from 'react-icons/fa';
import { AiFillContacts } from 'react-icons/ai';

const WorkerDetails = ({ workerData }) => {
    return (
        <div className="worker__details__sec">
            {workerData && workerData.firstName && workerData.lastName && workerData.phone ? 
                <div className="updated__profile__status">
                    Profile Complete
                </div> 
                :
                <div className="notupdated__profile__status">
                    Profile Not Complete
                </div>
            }
            <div className="block">
                <FaUserAlt />
                <div id="line"></div>
                {workerData && workerData.name ? <h1><span>Name:</span> {workerData.name}</h1> : null}
                {workerData && workerData.firstName ? <h1><span>First Name:</span> {workerData.firstName}</h1> : null}
                {workerData && workerData.lastName ? <h1><span>Last Name:</span> {workerData.lastName}</h1> : null}
            </div>
            <div className="block">
                <AiFillContacts />
                <div id="line"></div>
                {workerData && workerData.email ? <h1><span>Email:</span> {workerData.email}</h1> : null}
                {workerData && workerData.phone ? <h1><span>Contact Number:</span> {workerData.phone}</h1> : null}

            </div>
        </div>
    )
}

export default WorkerDetails
