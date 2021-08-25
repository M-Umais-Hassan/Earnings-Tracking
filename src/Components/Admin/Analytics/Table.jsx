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
                    </tr>
                </thead>
                <tbody>
                    {allUsers && allUsers.map((user) => {
                        return (
                            !user.admin ?
                            <tr key={user.id}>
                                <td><Link to={`/detail/${user.id}`}>{user.name && user.name}</Link></td>
                                <td>{user.email && user.email}</td>
                            </tr> : null
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
