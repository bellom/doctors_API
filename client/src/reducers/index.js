import { combineReducers } from 'redux';
import user from './user';
import doctors from './doctor';
import appointment from './appointment';
import doctorId from './doctorId';


export default combineReducers({
  user,
  doctors,
  appointment,
  doctorId,
});