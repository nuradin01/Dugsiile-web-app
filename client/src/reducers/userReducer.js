import {
  SET_LOADING,
  REGISTER_SCHOOL_SUCCESS,
  REGISTER_SCHOOL_ERROR,
  UPDATE_USER,
  USER_ERROR,
  REGISTER_USER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_USER_FAIL,
  USER_LOADED,
  LOGIN_ERROR,
  AUTH_ERROR,
  LOGOUT
} from '../actions/types';

const initialState = {
  token: null,
  isAuthenticated: null,
  isRegisteredSchool: null,
  loading: false,
  user: null,
  school: '',
  schoolSubjects: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload.data,
      };
    case REGISTER_USER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case REGISTER_USER_FAIL:
    case LOGIN_ERROR:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      console.log(action.payload);
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case REGISTER_SCHOOL_SUCCESS:
      console.log(action.payload);
      return {
        ...state,

        loading: false,
        user: action.payload.data,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: action.payload.data,
      };
    case REGISTER_SCHOOL_ERROR:
    case USER_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
