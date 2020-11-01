import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux'
import './auth.css';
import PropTypes from 'prop-types';

import {login} from '../../actions/userActions'

const Login = ({login, history, isAuthenticated }) => {

const [loginData, setLoginData] = useState({
  email:'',
  password:''
})
const onChange = (e) =>
setLoginData({ ...loginData, [e.target.name]: e.target.value });

const onSubmit = (e) => {
  e.preventDefault()
  login(loginData)
}

useEffect(() => {
  if (isAuthenticated) {
    history.push('/school');
  }
  // eslint-disable-next-line
}, [isAuthenticated, history])

  return (
    <>
      <div className="form-container sign-in-container">
        <form action="#" className="loginform" onSubmit={onSubmit}>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#!" className="social">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="#!" className="social">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#!" className="social">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <span>or use your account</span>
          <input
          name='email'
          value={loginData.email}
          onChange={onChange}
            type="email"
            placeholder="Email"
            className="logininput form-control"
            required
          />
          <input
            name='password'
            value={loginData.password}
            onChange={onChange}
            type="password"
            placeholder="Password"
            className="logininput form-control"
            required
          />
          <a href="#!">Forgot your password?</a>
          <button id="signIn" className="btn btn-primary btn-lg mt-2" type='submit'>
            Sign In
          </button>
          <div className="utility mt-4">
            <p className="semibold-text mb-2">
              Don't have account? &nbsp;
              <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1
              style={{
                fontFamily: 'Sansita Swashed, cursive',
                marginBottom: '30px',
              }}
            >
              Dugsiile
            </h1>
            <h5 style={{ lineHeight: 2 }}>
              Built for teachers to enroll students, receive payments <br /> and
              find quick insights from their school
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.userState.isAuthenticated,
})
export default connect(mapStateToProps, {login})(Login);
