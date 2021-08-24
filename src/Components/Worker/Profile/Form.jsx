import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './form.style.css';

// phone input
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

// firebase
import { db, auth } from '../../../firebase';

const Form = () => {
    const [userData, setUserData] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const getDate = () => {
        var date = new Date();
        return date.toString();
      }

    const clearField = () => {
        setError('');
        setLastName('');
        setFirstName('');
        setPhone('');
    }

    const handleProfileSubmit = async (firstName, lastName, phone) => {
        if(firstName && lastName && phone) {
            setError('');
            setLoading(true);
            const ref = db.ref();
            const users = await ref
            .child('Users')
            .child(auth.currentUser.uid);
            await users.update({
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                updatedAt: getDate()
            })
            .then(() =>{
                alert('Data Uploaded Successfully');
                setLoading(false);
                history.push('/dashboard')
            })
            .catch((err) => {
                auth.signOut();
                setError(err.message);
                setLoading(false);
            })
            clearField();
        }
        else if(!firstName || !lastName || !phone) {
            setError('All the fields are required');
        }
    }

    useEffect(() => {
        console.log('entered')
        const ref = db.ref(`Users/${auth.currentUser.uid}`);
        ref.on('value', snapshot => {
            setUserData(snapshot.val());
            if(snapshot.val()) {
                if(snapshot.val().firstName) {
                    setFirstName(snapshot.val().firstName)
                }
                if(snapshot.val().lastName) {
                    setLastName(snapshot.val().lastName)
                }
                if(snapshot.val().phone) {
                    setPhone(snapshot.val().phone)
                }
            }
        });
    }, []);

    return (
        <div className="form__box">
            <div id="box__left">
                <div className="inner__box">
                    <h1>Update Profile</h1>
                    <p>Fill out the form to get updated on the website</p>
                    <div id="error">{error}</div>
                    <h2>First Name</h2>
                    <div>
                        <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <h2>Last Name</h2>
                    <div>
                        <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <h2>Contact No</h2>
                    <div>
                        <PhoneInput 
                            international 
                            countryCallingCodeEditable={false} 
                            defaultCountry="US"
                            value={phone}
                            onChange={setPhone}
                        />
                    </div>
                    <button id="signin" onClick={() => handleProfileSubmit(firstName, lastName, phone)}>
                        {loading ? "Loading..." : "Submit"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form
