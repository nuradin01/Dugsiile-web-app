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
  FEES_INFO_ERROR,
  FEES_GRAPH,
  FEES_GRAPH_ERROR,
  GENDER_GRAPH,
  GENDER_GRAPH_ERROR,
  CLEAR_DASHBOARD,
  CLEAR_STUDENTS
} from './types';
import axios from 'axios';

// Get students from server
export const getStudents = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      '/api/v1/students?isLeft=false'
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
      '/api/v1/students?isLeft=false'
    );
    const leftStudents = await axios.get(
      '/api/v1/students?isLeft=true'
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
      '/api/v1/fees?isPaid=false'
    );
    const paidFees = await axios.get(
      '/api/v1/fees?isPaid=true'
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

// Get fees received last 120 days
export const feesGraph = () => async (dispatch) => {
  try {
    setLoading();
    // fees received 5 months ago
    const feesOf5MonthsAgo = await axios.get(
      `/api/v1/fees?isPaid=true&paidAt[lt]=${new Date().getTime() - (4*30*24*60*60*1000)}&paidAt[gt]=${new Date().getTime() - (5*30*24*60*60*1000)}`
    );
    // fees received first 30 days of the last 120 days
    const feesOfFirst30Days = await axios.get(
      `/api/v1/fees?isPaid=true&paidAt[lt]=${new Date().getTime() - (3*30*24*60*60*1000)}&paidAt[gt]=${new Date().getTime() - (4*30*24*60*60*1000)}`
    );
    // fees received second 30 days of the last 120 days
    const feesOfSecond30Days = await axios.get(
      `/api/v1/fees?isPaid=true&paidAt[lt]=${new Date().getTime() - (2*30*24*60*60*1000)}&paidAt[gt]=${new Date().getTime() - (3*30*24*60*60*1000)}`
    );
    // fees received third 30 days of the last 120 days
    const feesOfThird30Days = await axios.get(
      `/api/v1/fees?isPaid=true&paidAt[lt]=${new Date().getTime() - (30*24*60*60*1000)}&paidAt[gt]=${new Date().getTime() - (2*30*24*60*60*1000)}`
    );
    // fees received last 30 days
    const feesOfLast30Days = await axios.get(
      `/api/v1/fees?isPaid=true&paidAt[gt]=${new Date().getTime() - (30*24*60*60*1000)}`
    );
    dispatch({
      type: FEES_GRAPH,
      payload: {feesOfFirst30Days: feesOfFirst30Days.data, feesOfSecond30Days: feesOfSecond30Days.data, feesOfThird30Days: feesOfThird30Days.data, feesOfLast30Days: feesOfLast30Days.data, feesOf5MonthsAgo: feesOf5MonthsAgo.data},
    });
  } catch (err) {
    dispatch({
      type: FEES_GRAPH_ERROR,
      payload: err,
    });
  }
};

// Get students gender for the dashboard
export const genderGraph = () => async (dispatch) => {
  try {
    setLoading();
    const male = await axios.get(
      '/api/v1/students?isLeft=false&gender=Male'
    );
    const female = await axios.get(
      '/api/v1/students?isLeft=false&gender=Female'
    );
    dispatch({
      type: GENDER_GRAPH,
      payload: {male: male.data, female: female.data},
    });
  } catch (err) {
    dispatch({
      type: GENDER_GRAPH_ERROR,
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
      '/api/v1/students',
      student,
      config
    );
    const res = await axios.get(
      '/api/v1/students?isLeft=false'
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
      `/api/v1/students/${id}`,
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
      `/api/v1/students/${student._id}`,
      student,
      config
    );
    const res = await axios.get(
      `/api/v1/students?isLeft=false&_id=${student._id}`
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
      `/api/v1/fees/${id}`,
      feeReceived,
      config
    );
    const res = await axios.get(
      `/api/v1/students?isLeft=false&_id=${payment.id}`
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
    await axios.post('/api/v1/fees', config);
    const res = await axios.get(
      '/api/v1/students?isLeft=false'
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
    await axios.post(`/api/v1/fees/${id}`, config);
    const res = await axios.get(
      `/api/v1/students?isLeft=false&_id=${id}`
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
// Clear dashboard 
export const clearDashboard = () => {
  return {
    type: CLEAR_DASHBOARD,
  };
};
// Clear student list
export const clearStudents = () => {
  return {
    type: CLEAR_STUDENTS,
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
