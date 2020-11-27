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
} from '../actions/types';

const initialState = {
  students: [],
  studentsTotal: null,
  newStudents: null,
  leftStudents: null,
  paidFees: null,
  unpaidFees: null,
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
    case ADD_STUDENT:
    case CHARGE_ALL_PAID_STUDENTS:
      return {
        ...state,
        students: action.payload.data,
        loading: false,
      };
    case STUDENTS_INFO:
      return {
        ...state,
        studentsTotal: action.payload.activeStudents.count,
        newStudents: action.payload.activeStudents.data.filter((newStudent) =>
          new Date(newStudent.joinedAt).getTime() >=
          new Date().getTime() - 30 * 24 * 60 * 60 * 1000
            ? newStudent
            : 0
        ),
        leftStudents: action.payload.leftStudents.data.filter((leftStudent) =>
          new Date(leftStudent.leftAt).getTime() >=
          new Date().getTime() - 30 * 24 * 60 * 60 * 1000
            ? leftStudent
            : 0
        ),
        loading: false,
      };
      case FEES_INFO:
        return {
          ...state,
          unpaidFees: action.payload.unpaidFees.data.reduce(
            (total, fee) => total + fee.balance,
            0
          ),
          paidFees: action.payload.paidFees.data.filter((paidFee) =>
          new Date(paidFee.paidAt).getTime() >=
          new Date().getTime() - 30 * 24 * 60 * 60 * 1000
            ? paidFee
            : 0
          ).reduce((total, paidFee) => total + paidFee.amountPaid, 0),
          loading: false,
        };
    case DELETE_STUDENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case UPDATE_STUDENT:
      console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        current: action.payload.data[0],
      };
    case RECEIVE_PAYMENT:
    case CHARGE_SINGLE_STUDENT:
      return {
        ...state,
        current: action.payload.data[0],
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_ERROR:
    case CHARGE_ALL_PAID_STUDENTS_ERROR:
    case RECEIVE_PAYMENT_ERROR:
    case CHARGE_SINGLE_STUDENT_ERROR:
    case STUDENTS_INFO_ERROR:
    case FEES_INFO_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
