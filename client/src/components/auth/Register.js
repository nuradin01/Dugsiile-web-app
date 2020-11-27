import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import {registerUser} from '../../actions/userActions'


toast.configure();

const Register = ({registerUser, loadUser, history,userState:{isAuthenticated, error}}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

const onSubmit = (e) => {
  e.preventDefault()
  if (name === '' || email==='' || gender === '' || password === '' || confirmPassword=== ''){
    toast.error('Please fill all the fields', {
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  } else if (password !== confirmPassword) {
    toast.error('Please confirm your password', {
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });    

  } else {
    const signupData = {name, email, gender, password}
registerUser(signupData)
  }
}

useEffect(() => {
  if (isAuthenticated) {
    history.push('/school');
  }

  if(error === 'Duplicate field value entered'){
    toast.error('The email you entered is not availale, Please choose another email.', {
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });    
  }
  if(error === 'Path `password` (`123`) is shorter than the minimum allowed length (6).'){
    toast.error('Your password must contain at least 6 characters', {
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });    
  }
  // eslint-disable-next-line
}, [isAuthenticated, history, error])
  return (
    <>
      <div className="form-container sign-up-container">
        <form action="#" className="loginform" onSubmit={onSubmit}>
          <h1>Create Account</h1>
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
          <span>or use your email for registration</span>
          <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="logininput form-control"
            required
          />
          <input
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="logininput form-control"
            required
          />

          <select
            className=" logininput "
            defaultValue={'DEFAULT'}
            name="gender"
            onChange={(e) => setGender(e.target.value)}
           
          >
            <option value="DEFAULT" disabled>
              Select Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <input
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="logininput form-control"
            required
          />
          <input
          name="confirmPassword"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm password"
            className="logininput form-control"
          required
          />
          <button id="signUp" className="btn btn-primary btn-lg mt-2" type="submit" >
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
Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerUser: PropTypes.func.isRequired,

} 

const mapStateToProps = (state) => ({
  userState: state.userState,
})
export default connect (mapStateToProps, {registerUser})(Register);
