import { REGISTER_SCHOOL, REGISTER_SCHOOL_ERROR, SET_LOADING, UPDATE_USER, USER_ERROR, REGISTER_USER, REGISTER_USER_FAIL } from './types';
import axios from 'axios'


// Register new school
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
      type: REGISTER_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: err.response.data.error
    });
  }
};

// Register new school
export const registerSchool = (school, subjects) => async (dispatch) => {
  try {
    setLoading();

    dispatch({
      type: REGISTER_SCHOOL,
      payload: { school, subjects },
    });
  } catch (err) {
    dispatch({
      type: REGISTER_SCHOOL_ERROR,
      payload: 'register  school error',
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
