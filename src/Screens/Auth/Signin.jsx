import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

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
          <div className="inner__box">
            <h1>Login</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores quam magni error</p>
            <div id="error">{error && error}</div>
            <form onSubmit={formik.handleSubmit}>
              <h2>Email</h2>
              <div>
                  <input type="email" placeholder="Your email@gmail.com" id="email" name="email" {...formik.getFieldProps('email')} />
                  {formik.touched.email && formik.errors.email 
                  ? <div id="error">{formik.errors.email}</div> : null}
              </div>
              <h2>Password</h2>
              <div>
                <input type="password" placeholder="Your Password" id="password" name="password" {...formik.getFieldProps('password')} />
                {formik.touched.password && formik.errors.password 
                ? <div id="error">{formik.errors.password}</div> : null}
              </div>
              <h4>Don't have an account? <Link to="/signup">Register</Link></h4>
              <button id="signin" type="submit" disabled={loading}>{loading ? "Loading..." : "Login"}</button>
            </form>
          </div>
        </div>
        <div id="box__right"></div>
      </div>
  );
}

export default Signin
