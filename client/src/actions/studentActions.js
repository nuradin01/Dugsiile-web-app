import {
  GET_STUDENTS,
  SET_LOADING,
  STUDENT_ERROR,
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  CHARGE_ALL_PAID_STUDENTS,
  CHARGE_ALL_PAID_STUDENTS_ERROR,
  RECEIVE_PAYMENT,
  RECEIVE_PAYMENT_ERROR,
  CHARGE_SINGLE_STUDENT,
  CHARGE_SINGLE_STUDENT_ERROR,
  STUDENTS_INFO,
  STUDENTS_INFO_ERROR,
  FEES_INFO,
  FEES_INFO_ERROR
} from './types';
import axios from 'axios';

// Get students from server
export const getStudents = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      'http://localhost:5000/api/v1/students?isLeft=false'
    );
    dispatch({
      type: GET_STUDENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Get students information for the dashboard
export const getStudentsInfo = () => async (dispatch) => {
  try {
    setLoading();
    const activeStudents = await axios.get(
      'http://localhost:5000/api/v1/students?isLeft=false'
    );
    const leftStudents = await axios.get(
      'http://localhost:5000/api/v1/students?isLeft=true'
    );
    dispatch({
      type: STUDENTS_INFO,
      payload: {activeStudents: activeStudents.data, leftStudents: leftStudents.data},
    });
  } catch (err) {
    dispatch({
      type: STUDENTS_INFO_ERROR,
      payload: err,
    });
  }
};

// Get fees information for the dashboard
export const getFeesInfo = () => async (dispatch) => {
  try {
    setLoading();
    const unpaidFees = await axios.get(
      'http://localhost:5000/api/v1/fees?isPaid=false'
    );
    const paidFees = await axios.get(
      'http://localhost:5000/api/v1/fees?isPaid=true'
    );
    dispatch({
      type: FEES_INFO,
      payload: {unpaidFees: unpaidFees.data, paidFees: paidFees.data},
    });
  } catch (err) {
    dispatch({
      type: FEES_INFO_ERROR,
      payload: err,
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
    await axios.post(
      'http://localhost:5000/api/v1/students',
      student,
      config
    );
    const res = await axios.get(
      'http://localhost:5000/api/v1/students?isLeft=false'
    );
    dispatch({
      type: ADD_STUDENT,
      payload: res.data,
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
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const student = { isLeft: true, leftAt: new Date().toISOString() };
  try {
    setLoading();
    const res = await axios.put(
      `http://localhost:5000/api/v1/students/${id}`,
      student,
      config
    );
    dispatch({
      type: DELETE_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Update student on server
export const updateStudent = (student) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    await axios.put(
      `http://localhost:5000/api/v1/students/${student._id}`,
      student,
      config
    );
    const res = await axios.get(
      `http://localhost:5000/api/v1/students?isLeft=false&_id=${student._id}`
    );
    console.log(res)
    dispatch({
      type: UPDATE_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: err.response.data.error,
    });
  }
};

// Receive fee from single student
export const receivePayment = (payment) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  let { id } = payment;
  const feeReceived = {
    amountPaid: payment.amountPaid,
    message: payment.message,
    isPaid: payment.isPaid,
    paidAt: payment.paidAt,
  };
  try {
    setLoading();
    await axios.put(
      `http://localhost:5000/api/v1/fees/${id}`,
      feeReceived,
      config
    );
    const res = await axios.get(
      `http://localhost:5000/api/v1/students?isLeft=false&_id=${payment.id}`
    );

    dispatch({
      type: RECEIVE_PAYMENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: RECEIVE_PAYMENT_ERROR,
      payload: err.response.data.error ? err.response.data.error : err,
    });
  }
};

// charge all paid students
export const chargeAllPaidStudents = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    await axios.post('http://localhost:5000/api/v1/fees', config);
    const res = await axios.get(
      'http://localhost:5000/api/v1/students?isLeft=false'
    );
    dispatch({
      type: CHARGE_ALL_PAID_STUDENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHARGE_ALL_PAID_STUDENTS_ERROR,
      payload: err.response.data.error,
    });
  }
};

//Charge single Student
export const chargeStudent = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    setLoading();
    await axios.post(`http://localhost:5000/api/v1/fees/${id}`, config);
    const res = await axios.get(
      `http://localhost:5000/api/v1/students?isLeft=false&_id=${id}`
    );
    dispatch({
      type: CHARGE_SINGLE_STUDENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: CHARGE_SINGLE_STUDENT_ERROR,
      payload: err.response.data.error,
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
