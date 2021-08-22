import React, { useContext } from 'react';
import '../../Admin/Analytics/table.style.css';

// context
import userContext from '../../../Context/userContext';

const Table = () => {
    const { userData } = useContext(userContext);
    return (
        <div className="table__scroll">
            <table>
                <thead>
                    <tr>
                        <th><span>Sr. No</span></th>
                        <th>Project Name</th>
                        <th>Earning</th>
                    </tr>
                </thead>
                <tbody>
                    {userData && !userData.admin && userData.projects && userData.projects.map((project, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{project.name}</td>
                                <td>${project.earning}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
