import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// firebase
import { auth, db } from '../../firebase';

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

  const getDate = () => {
    var date = new Date();
    return date.toString();
  }
  
  const onSubmit = async () => {
    // const date = new Date;
    setError('');
    setLoading(true);
    await auth
    .createUserWithEmailAndPassword(formik.values.email, formik.values.password)
    .then(async() => {
      const ref = db.ref();
      const users = ref.child(`Users/${auth.currentUser.uid}`);
      await users.set({ 
        id: auth.currentUser.uid,
        email: formik.values.email, 
        name: formik.values.name,
        admin: false,
        createdAt: getDate()
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
          <div className="inner__box">
            <h1>Create Account</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quam magni error</p>
            <div id="error">{error && error}</div>
            <form onSubmit={formik.handleSubmit}>
              <h2>Name</h2>
              <div>
                <input type="text" placeholder="Your Name" id="name" name="name" {...formik.getFieldProps('name')} />
                {formik.touched.name && formik.errors.name 
                ? <div id="error">{formik.errors.name}</div> : null}
              </div>
              <h2>Email</h2>
              <div>
                <input type="email" placeholder="Email email@gmail.com" id="email" name="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email 
                ? <div id="error">{formik.errors.email}</div> : null}
              </div>
              <h2>Password</h2>
              <div>
                <input type="password" placeholder="Password" id="password" name="password" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password 
                ? <div id="error">{formik.errors.password}</div> : null}
              </div>
              <h4>Already have an account? <Link to="/signin">Login</Link></h4>
              <button id="signin" type="submit" disabled={loading}>{loading ? "Loading..." : "Signup"}</button>
            </form>
          </div>
        </div>
        <div id="box__right"></div>
    </div>
  );
}

export default Signup
