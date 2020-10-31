import {
  GET_STUDENTS,
  SET_LOADING,
  STUDENT_ERROR,
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
  SET_CURRENT,
  CLEAR_CURRENT,
} from './types';
import axios from 'axios'

// Get students from server
export const getStudents = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get('http://localhost:5000/api/v1/students');
    dispatch({
      type: GET_STUDENTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Add new student
export const addStudent = (student) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    const res = await axios.post('http://localhost:5000/api/v1/students', student, config);
    dispatch({
      type: ADD_STUDENT,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Delete Student from server
export const deleteStudent = (id) => async (dispatch) => {
  try {
    setLoading();

    dispatch({
      type: DELETE_STUDENT,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: 'delete student error',
    });
  }
};

// Update student on server
export const updateStudent = (student) => async (dispatch) => {
  try {
    setLoading();

    dispatch({
      type: UPDATE_STUDENT,
      payload: student,
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: 'Update student error',
    });
  }
};

// Set current student
export const setCurrent = (student) => {
  return {
    type: SET_CURRENT,
    payload: student,
  };
};

// Clear current student
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
