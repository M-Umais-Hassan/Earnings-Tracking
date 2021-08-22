import React from 'react';
import './table.style.css';

const Table = ({ allUsers }) => {
    return (
        <>
            <h1 className="primary center">Manage your workers data from here</h1>
            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">Name</div>
                    <div className="col col-2">Email</div>
                </li>
                {allUsers && allUsers.map((user, index) => {
                    return (
                        !user.admin ?
                        <li className="table-row" key={index}>
                            <div className="col col-1" data-label="Job Id">{user.name}</div>
                            <div className="col col-2" data-label="Customer Name">{user.email}</div>
                        </li> : null
                    )
                })}
            </ul>
        </>
    )
}

export default Table
