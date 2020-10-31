import { REGISTER_SCHOOL_SUCCESS, REGISTER_SCHOOL_ERROR, SET_LOADING, UPDATE_USER, USER_ERROR, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, USER_LOADED, AUTH_ERROR } from './types';
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken';



// Register new user
export const registerUser = (signupData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.post('http://localhost:5000/api/v1/auth/register', signupData, config);
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data
    });

    loadUser()
    
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: err.response.data.error
    });
  }
};

// Load User
export const loadUser = () => async (dispatch) => {
  //  load token into global headers
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    setLoading();
    const res = await axios.get('http://localhost:5000/api/v1/auth/me');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload:err.response.data.error});
  }
};

// Register new school
export const registerSchool = (school, subjects) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const schoolSubjects = subjects.map(subject => subject.subject)
  const isRegisteredSchool = true
const schoolInfo ={
  school, schoolSubjects, isRegisteredSchool
}
  try {
    setLoading();

    const res = await axios.put('http://localhost:5000/api/v1/auth/registerschool', schoolInfo, config);
    dispatch({
      type: REGISTER_SCHOOL_SUCCESS,
      payload: res.data,
    });
    loadUser()
  } catch (err) {
    dispatch({
      type: REGISTER_SCHOOL_ERROR,
      payload: err,
    });
  }
};

// Update user on server
export const updateUser = (user) => async (dispatch) => {
  try {
    setLoading();

    dispatch({
      type: UPDATE_USER,
      payload: user,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: 'Update user error',
    });
  }
};
// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
