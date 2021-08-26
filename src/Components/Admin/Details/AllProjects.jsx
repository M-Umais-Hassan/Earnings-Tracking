import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './allprojects.style.css';

// firebase
import { db } from '../../../firebase';
import userContext from '../../../Context/userContext';

const AllProjects = ({ workerId }) => {
    const [allProjects, setAllProjects] = useState([]);
    const { userData } = useContext(userContext);

    useEffect(() => {
        const ref = db.ref(`Projects`);
        const ref1 = db.ref(`Projects/${workerId}`)
        ref.on('value', async snapshot => {
            if(snapshot.hasChild(workerId)) {
                const data = [];
                ref1.on('value', async snapshot => {
                    snapshot.forEach(child => {
                        data.push(child.key);
                    })
                })
                setAllProjects([]);
                for(let i=0; i<data.length; i++) {
                    ref1.child(data[i]).on('value', snapshot => {
                        if(snapshot.val() && snapshot.val().name && snapshot.val().earning){
                            setAllProjects(prevState => [...prevState, {
                                id: data[i], 
                                projectName: snapshot.val().name,
                                earning: snapshot.val().earning
                            }]);
                        }
                    })
                }
            }
        })
    }, [workerId]);

    // const deleteProject = (id) => {
    //     const projectRef = db.ref(`Projects/${workerId}/${id}`);
    //     const rootRef = db.ref(`Users`);
    //     const userRef = db.ref(`Users/${workerId}`);
    //     projectRef.on('value', snapshot => {
    //         let deletedEarning = snapshot.val().earning;
    //         rootRef.on('value', snapshot => {
    //             if(snapshot.hasChild(workerId)) {
    //                 userRef.on('value', async snapshot => {
    //                     if(snapshot.val() && snapshot.val().earning) {
    //                         let earning = snapshot.val().earning - deletedEarning;
    //                         console.log(earning);
    //                         if(earning) {
    //                             await userRef.update({
    //                                 earning: earning
    //                             })
    //                             await projectRef.remove();
    //                         }
    //                     }
    //                     else {
    //                         await projectRef.remove();
    //                     }
    //                 })
    //             }
    //         })
    //     })
    // }

    return (
        <div className="table__scroll">
            <table>
                <thead>
                    <tr>
                        <th><span>Project Id</span></th>
                        <th>Project Name</th>
                        <th>Earnings</th>
                        {/* <th>Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    {allProjects && allProjects.map((project, index) => {
                        return (
                            <tr key={index}>
                                <td>{project.id && project.id}</td>
                                <td>{project.projectName && project.projectName}</td>
                                <td>{project.earning && project.earning}</td>
                                {/* <td><button className="delete__btn" onClick={() => deleteProject(project.id)}>Delete</button></td> */}
                            </tr> 
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllProjects
