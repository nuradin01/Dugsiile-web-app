import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';

const Login = () => {
  return (
    <>
      <div className="form-container sign-in-container">
        <form action="#" className="loginform">
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
            type="email"
            placeholder="Email"
            className="logininput form-control"
          />
          <input
            type="password"
            placeholder="Password"
            className="logininput form-control"
          />
          <a href="#!">Forgot your password?</a>
          <button id="signIn" className="btn btn-primary btn-lg mt-2">
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

export default Login;
