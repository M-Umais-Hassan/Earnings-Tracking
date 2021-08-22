import React from 'react';
import './table.style.css';

const Table = ({ allUsers }) => {
    return (
        <div className="table__scroll">
            <table>
                <thead>
                    <tr>
                        <th><span>Name</span></th>
                        <th>Email</th>
                        <th>Projects</th>
                        <th>Earnings</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers && allUsers.map((user, index) => {
                        return (
                            !user.admin ?
                            <tr key={user.id}>
                                <td>{user.name && user.name}</td>
                                <td>{user.email && user.email}</td>
                                <td>{user.projects && user.projects.length}</td>
                                <td>{user.earnings ? user.earnings : 0}</td>
                            </tr> : null
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
