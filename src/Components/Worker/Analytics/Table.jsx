import React, { useState, useEffect, useContext } from 'react';
import '../../Admin/Analytics/table.style.css';

// context
import userContext from '../../../Context/userContext';

// firebase
import { db } from '../../../firebase';

const Table = () => {
    const { userData } = useContext(userContext);
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        if(userData.id){
            const ref = db.ref('Projects');
            const projectRef = db.ref(`Projects/${userData.id}`);
            ref.on('value', snapshot => {
                if(snapshot.hasChild(userData.id)) {
                    projectRef.on('value', snapshot => {
                        setProjectsData(Object.values(snapshot.val()))
                    })
                }
            })
        }
    }, [userData])

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
                    {userData && !userData.admin && projectsData && projectsData.map((project, index) => {
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
