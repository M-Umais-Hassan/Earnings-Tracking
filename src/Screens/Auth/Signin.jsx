import React, { useState, useContext } from 'react';
import './style.css';

// components
import Authsidebar from './Authsidebar';

// firebase
import { auth } from '../../firebase';

// error handling
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signin = () => {
  const [ loading, setLoading ] = useState(false);
  const [error, setError] = useState('');
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required')
  })
  
  const onSubmit = async () => {
    setError('');
    setLoading(true);
    await auth
    .signInWithEmailAndPassword(formik.values.email, formik.values.password)
    .then(() => {
      // console.log('Logged in');
      setLoading(false);
    }).catch((err) => {
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
          <Authsidebar
            headline="Don't Have Account"
            btnName="Sign Up"
            path="/Signup"
          />
        </div>
        <div id="box__right">
          <h2>Login</h2>
          <div id="error">{error && error}</div>
          <form onSubmit={formik.handleSubmit}>
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

export default Signin
