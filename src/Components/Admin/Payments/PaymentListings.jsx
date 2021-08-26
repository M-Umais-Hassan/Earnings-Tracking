import React, { useContext, useState, useEffect } from 'react';
import './paymentlistings.style.css'

// context
import UserContext from '../../../Context/userContext';
import { db } from '../../../firebase';

// moment
import moment from 'moment';

const Payments = () => {
    const {userData} = useContext(UserContext);
    const [paymentList, setPaymentList] = useState([{
            id: '',
            name: '',
            email: '',
            amount: '',
            status: '',
            createdAt: '',
        }
    ]);

    useEffect(() => {
        const paymentRef = db.ref('Payments');
        paymentRef.on('value', snapshot => {
            setPaymentList([])
            snapshot.forEach(child => {
                const userRef = db.ref(`Users/${child.val().userId}`);
                userRef.once('value', snapshot1 => {
                    setPaymentList(prevState => [...prevState, {
                        id: child.key,
                        name: snapshot1.val().name,
                        email: snapshot1.val().email,
                        earning: child.val().amount,
                        status: child.val().paidStatus,
                        createdAt: child.val().createdAt
                    }]);
                }) 
            });
        });
    }, []);

    const handlePaid = (id) => {
        const ref = db.ref('Payments');
        const paymentRef = db.ref(`Payments/${id}`);
        ref.on('value', snapshot => {
            if(snapshot.hasChild(id)) {
                paymentRef.update({paidStatus: true})
            }
        });
    }

    return (
        <div className="table__scroll">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Requested</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {paymentList && paymentList.map((item, index) => {
                        return (
                            item.name &&
                            <tr key={item.id}>
                                <td>{item.name && item.name}</td>
                                <td>{item.email && item.email}</td>
                                <td>{item.earning && item.earning}</td>
                                <td>{item.createdAt && moment(item.createdAt).fromNow()}</td>
                                {item.status === false ? 
                                    <td><button className="not__paid__btn" onClick={() => handlePaid(item.id)}>Not Paid</button></td>
                                    : <td><button className="paid__btn" disabled>Paid</button></td>
                                }
                            </tr> 
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Payments
