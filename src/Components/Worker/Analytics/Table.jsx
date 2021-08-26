import React, { useState, useEffect, useContext } from 'react';
import '../../Admin/Analytics/table.style.css';
import './btnstyle.css'

// context
import userContext from '../../../Context/userContext';

// firebase
import { db } from '../../../firebase';

const Table = () => {
    const { userData } = useContext(userContext);
    const [projectsData, setProjectsData] = useState([]);
    const [disabled, setDisabled] = useState(false);

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
    }, [userData]);

    const getDate = () => {
        var date = new Date();
        return date.toString();
    }

    const handleWithdraw = () => {
        setDisabled(true);
        const userRef = db.ref(`Users/${userData.id}`);
        const paymentRef = db.ref(`Payments`);
        userRef.on('value', async snapshot => {
            if(snapshot.hasChild("earning")) {
                await paymentRef.push({
                    id: paymentRef.push().key,
                    userId: userData.id,
                    amount: snapshot.val().earning,
                    paidStatus: false,
                    createdAt: getDate()
                })
                await userRef.child('earning').remove().then(() => {
                    alert('Your request for withdraw has been sent to admin');
                    setDisabled(true);
                })
            }
            else {
                setDisabled(false);
            }
        })
    }

    return (
        <>
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
            <div className="btn__sec">
                <button className="withdraw__btn" onClick={handleWithdraw} disabled={disabled}>Withdraw Request</button>
            </div>
        </>
    )
}

export default Table
