import React from 'react';
import { Link } from 'react-router-dom';
import './table.style.css';

const Table = ({ allUsers }) => {
    console.log()
    return (
        <div className="table__scroll">
            <table>
                <thead>
                    <tr>
                        <th><span>Name</span></th>
                        <th>Email</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers && allUsers.map((user) => {
                        return (
                            !user.admin ?
                            <tr key={user.id}>
                                <td>{user.name && user.name}</td>
                                <td>{user.email && user.email}</td>
                                <td><Link to={`/detail/${user.id}`}>View</Link></td>
                            </tr> : null
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
