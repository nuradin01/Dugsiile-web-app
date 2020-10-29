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
import { v4 as uuidv4 } from 'uuid';

// Get students from server
export const getStudents = () => async (dispatch) => {
  try {
    setLoading();

    dispatch({
      type: GET_STUDENTS,
      payload: [
        {
          id: 1,
          studentName: 'Abdulahi Moalim Abdirahman',
          parentName: 'Moalim Abdirahman',
          parentPhone: 56741,
          studentPhone: 636,
          gender: 'Male',
          fee: 4,
          isPaid: 4,
          isScholarship: false,
          joined: '01-01-2020',
          studentSubjects: ['English', 'Math'],
        },
        {
          id: 2,
          studentName: 'Zakaria Ibrahim Anshur',
          parentName: 'Ibrahim Anshur',
          parentPhone: 64223,
          studentPhone: 8765,
          gender: 'Male',
          fee: 3,
          isPaid: 3,
          isScholarship: false,
          joined: '01-01-2020',
          studentSubjects: ['English', 'Math'],
        },
        {
          id: 3,
          studentName: 'Yahya Ibrahim Anshur',
          parentName: 'Ibrahim Anshur',
          parentPhone: 64223,
          studentPhone: 'N/A',
          gender: 'Male',
          fee: 3,
          isPaid: 3,
          isScholarship: false,
          joined: '01-01-2020',
          studentSubjects: ['English', 'Math'],
        },
        {
          id: 4,
          studentName: 'Maryama Ibrahim Ali',
          parentName: 'Ibrahim Ali',
          parentPhone: 9723,
          studentPhone: 'N/A',
          gender: 'Female',
          fee: 0,
          isPaid: 0,
          isScholarship: true,
          joined: '01-01-2020',
          studentSubjects: ['English', 'Math'],
        },
        {
          id: 5,
          studentName: 'Sainab Mohamed Shiikh Abdi',
          parentName: 'Mohamed Shiikh Abdi',
          parentPhone: 2342,
          studentPhone: 'N/A',
          gender: 'Female',
          fee: 0,
          isPaid: 0,
          isScholarship: true,
          joined: '01-01-2020',
          studentSubjects: ['Af-soomaali', 'English', 'Math'],
        },
        {
          id: 6,
          studentName: 'Sadia Mohamed Shiikh Abdi',
          parentName: 'Mohamed Shiikh Abdi',
          parentPhone: 2342,
          studentPhone: 'N/A',
          gender: 'Female',
          fee: 0,
          isPaid: 0,
          isScholarship: true,
          joined: '01-01-2020',
          studentSubjects: ['Af-soomaali', 'English', 'Math'],
        },
        {
          id: 7,
          studentName: 'Yusuf Mohamed Shiikh Abdi',
          parentName: 'Mohamed Shiikh Abdi',
          parentPhone: 2342,
          studentPhone: 'N/A',
          gender: 'Male',
          fee: 0,
          isPaid: 0,
          isScholarship: true,
          joined: '01-01-2020',
          studentSubjects: ['Af-soomaali', 'English', 'Math'],
        },
        {
          id: 8,
          studentName: 'Sainab Abdulahi Shiikh Abdi',
          parentName: 'Abdulahi Shiikh Abdi',
          parentPhone: 2342,
          studentPhone: 'N/A',
          gender: 'Female',
          fee: 0,
          isPaid: 0,
          isScholarship: true,
          joined: '01-01-2020',
          studentSubjects: ['Af-soomaali', 'English', 'Math'],
        },
        {
          id: 9,
          studentName: 'Hamdi Abukar ',
          parentName: 'Sainab ',
          parentPhone: 5224,
          studentPhone: 'N/A',
          gender: 'Female',
          fee: 5,
          isPaid: 5,
          isScholarship: false,
          joined: '01-01-2020',
          studentSubjects: ['Af-soomaali', 'English', 'Math'],
        },
        {
          id: 10,
          studentName: 'Mohamed Abukar ',
          parentName: 'Sainab ',
          parentPhone: 5224,
          studentPhone: 'N/A',
          gender: 'Male',
          fee: 5,
          isPaid: 5,
          isScholarship: false,
          joined: '01-01-2020',
          studentSubjects: ['Af-soomaali', 'English', 'Math'],
        },
        {
          id: 11,
          studentName: 'Sahra Mukhtar ',
          parentName: 'Farhia ',
          parentPhone: 876543,
          studentPhone: 'N/A',
          gender: 'Female',
          fee: 3,
          isPaid: 0,
          isScholarship: false,
          joined: '01-01-2020',
          studentSubjects: ['Af-soomaali', 'English', 'Math'],
        },
      ],
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: 'Nothing to show',
    });
  }
};

// Add new student
export const addStudent = (student) => async (dispatch) => {
  try {
    setLoading();
    const id = uuidv4();
    dispatch({
      type: ADD_STUDENT,
      payload: { id, ...student },
    });
  } catch (err) {
    dispatch({
      type: STUDENT_ERROR,
      payload: 'add student error',
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
