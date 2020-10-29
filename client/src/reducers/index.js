import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import userReducer from './userReducer';

export default combineReducers({
  studentsState: studentReducer,
  userState: userReducer,
});
