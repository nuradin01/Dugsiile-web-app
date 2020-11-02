import {
  GET_STUDENTS,
  SET_LOADING,
  STUDENT_ERROR,
  ADD_STUDENT,
  DELETE_STUDENT,
  UPDATE_STUDENT,
  SET_CURRENT,
  CLEAR_CURRENT,
} from '../actions/types';

const initialState = {
  students: [],
  current: null,
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload.data,
        loading: false,
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload.data],
        loading: false,
      };
    case DELETE_STUDENT:
      return {
        ...state,
        current: null,
        loading: false,
      };
    case UPDATE_STUDENT:
      return {
        ...state,
        current: action.payload.data
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
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
