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
    const [disabled, setDisabled] = useState(false);

    const clearFields = () => {
        setProject('');
        setEarning(0);
    }

    const addProject = (project, earning) => {
        if(userData.admin && project && earning && earning !== 0) {
            setDisabled(true);
            const projectsRef = db.ref(`Projects/${workerId}`);
            const userRef = db.ref(`Users/${workerId}`);
            var newData={
                name: project, 
                earning: earning
            }
            projectsRef.push(newData).then(async() => {
                let totalEarning = 0;
                await userRef.on('value', snapshot => {
                    if(snapshot.hasChild('earning')){
                        totalEarning = parseInt(earning) + parseInt(snapshot.val().earning)
                    }
                    else {
                        totalEarning = parseInt(earning)
                    }
                })
                await userRef.update({
                    earning: totalEarning
                })
                alert('Project Added')
                clearFields();
                setDisabled(false);
            }).catch(() => {
                alert('Error while adding project')
                setDisabled(false);
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
                    <button id="signin" onClick={() => addProject(project, earning)} disabled={disabled}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddProject
