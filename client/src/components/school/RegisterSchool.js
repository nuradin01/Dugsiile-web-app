import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const RegisterSchool = () => {
  return (
    <>
      <div className="form-container sign-up-container">
        <form action="#" className="loginform">
          <h1>Register Your School</h1>
          
          
          <input
            type="text"
            placeholder="Enter your school name"
            className="logininput form-control"
          />
          <Fragment style={{display:'flex'}}>
          <input
            type="email"
            placeholder="Email"
            className="logininput form-control"
          />
  <div className="form-group btn-group col-md-2 align-self-end">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                 
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
              </Fragment>
          <button id="signUp" className="btn btn-primary btn-lg mt-2">
            Sign Up
          </button>
          <div className="utility mt-4">
            <p className="semibold-text mb-2">
              Already have account? &nbsp;
              <Link to="/login">Sign In</Link>
            </p>
          </div>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1
              style={{
                fontFamily: 'Sansita Swashed',
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

export default RegisterSchool;
