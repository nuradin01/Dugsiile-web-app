import {
  REGISTER_SCHOOL_SUCCESS,
  REGISTER_SCHOOL_ERROR,
  SET_LOADING,
  UPDATE_USER,
  USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  LOGIN_ERROR,
  AUTH_ERROR,
  LOGOUT
} from './types';
import axios from 'axios';
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
    const res = await axios.post(
      '/api/v1/auth/register',
      signupData,
      config
    );
    dispatch({
      type: REGISTER_USER_SUCCESS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: err.response.data.error,
    });
  }
};

// Login user
export const login = (loginData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.post(
      '/api/v1/auth/login',
      loginData,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: LOGIN_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Logout
export const logout = () => {
  return {
    type: LOGOUT,
  };
};

// Load User
export const loadUser = () => async (dispatch) => {
  //  load token into global headers
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    setLoading();
    const res = await axios.get('/api/v1/auth/me');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    
      dispatch({ type: AUTH_ERROR, payload:  err.response === undefined ? err : err.response.data.error })

  
  }
};

// Register new school
export const registerSchool = (school, subjects) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const schoolSubjects = subjects.map((subject) => subject.subject);
  const isRegisteredSchool = true;
  const schoolInfo = {
    school,
    schoolSubjects,
    isRegisteredSchool,
  };
  try {
    setLoading();

    const res = await axios.put(
      '/api/v1/auth/registerschool',
      schoolInfo,
      config
    );
    dispatch({
      type: REGISTER_SCHOOL_SUCCESS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: REGISTER_SCHOOL_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Update user on server
export const updateUser = (user) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.put(
      '/api/v1/auth/updatedetails',
      user,
      config
    );
    dispatch({
      type: UPDATE_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_ERROR,
      payload: err.response.data.error,
    });
  }
};
// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
