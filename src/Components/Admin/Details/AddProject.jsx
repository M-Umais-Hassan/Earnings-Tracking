import React, { useState, useContext } from 'react';
import { auth, db } from '../../../firebase';
import './addproject.style.css';

// context
import UserContext from '../../../Context/userContext';

const AddProject = ({ workerId }) => {
    const {userData} = useContext(UserContext);
    const [project, setProject] = useState('');
    const [earning, setEarning] = useState(0);
    const [error, setError] = useState('');

    const clearFields = () => {
        setProject('');
        setEarning(0);
    }

    const addProject = (project, earning) => {
        if(userData.admin && project && earning && earning !== 0) {
            const projectsRef = db.ref(`Projects/${workerId}`);
            var newData={
                name: project, 
                earning: earning
            }
            projectsRef.push(newData).then(() => {
                alert('Project Added')
                clearFields();
            }).catch(() => {
                alert('Error while adding project')
            });
        }
        else {
            setError('All fields required and earning must be greater then 0')
        }
    }

    return (
        <div className="add__project__sec">
            <div id="box__left">
                <div className="inner__box">
                    <h1>Add Project</h1>
                    <p>Add a new project and its earnings so that worker can inspect it</p>
                    <div id="error">{error}</div>
                    <h2>Project Name</h2>
                    <div>
                        <input type="text" placeholder="Project Name" value={project} onChange={(e) => setProject(e.target.value)} />
                    </div>
                    <h2>Earnings</h2>
                    <div>
                        <input type="number" placeholder="Project Earnings" value={earning} onChange={(e) => setEarning(e.target.value)} />
                    </div>
                    <button id="signin" onClick={() => addProject(project, earning)}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddProject
