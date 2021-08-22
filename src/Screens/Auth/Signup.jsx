import React, { useState, useContext } from 'react';
import './style.css';

// firebase
import { auth, db } from '../../firebase';

// components
import Authsidebar from './Authsidebar';

// error handling
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const [ loading, setLoading ] = useState(false);
  const [error, setError] = useState('');
  const initialValues = {
    name: '',
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
  })
  
  const onSubmit = async () => {
    setError('');
    setLoading(true);
    await auth
    .createUserWithEmailAndPassword(formik.values.email, formik.values.password)
    .then(async() => {
      const ref = db.ref();
      const users = ref.child(`Users/${auth.currentUser.uid}`);
      await users.set({ 
        email: formik.values.email, 
        name: formik.values.name,
        projects: [
          {name: 'Project 1', earning: 10},
          {name: 'Project 2', earning: 20},
          {name: 'Project 3', earning: 10}
        ],
        admin: false
      })
      .then(() =>{
        alert('Account created successfully');
      })
      .catch((err) => {
        auth.signOut();
        setError(err.message);
      })
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      setLoading(false);
    });
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div className="auth__box">
        <div id="box__left">
          <Authsidebar headline="Welcome Back" btnName="Login" path="/signin" />
        </div>
        <div id="box__right">
          <h2>Create Account</h2>
          <div id="error">{error && error}</div>
          <form onSubmit={formik.handleSubmit}>
            <div>
              <input type="text" placeholder="Name" id="name" name="name" {...formik.getFieldProps('name')} />
              {formik.touched.name && formik.errors.name 
              ? <div id="error">{formik.errors.name}</div> : null}
            </div>
            
            <div>
              <input type="email" placeholder="Email" id="email" name="email" {...formik.getFieldProps('email')} />
              {formik.touched.email && formik.errors.email 
              ? <div id="error">{formik.errors.email}</div> : null}
            </div>
            
            <div>
              <input type="password" placeholder="Password" id="password" name="password" {...formik.getFieldProps('password')} />
              {formik.touched.password && formik.errors.password 
              ? <div id="error">{formik.errors.password}</div> : null}
            </div>
            
            <div id="auth_btn">
              <button id="signin" type="submit" disabled={loading}>{loading ? "Loading..." : "Signup"}</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default Signup
