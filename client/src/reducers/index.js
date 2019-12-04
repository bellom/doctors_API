import { combineReducers } from 'redux';
import user from './user';
import doctor from './doctor';
import appointment from './appointment';


export default combineReducers({
  user,
  doctor,
  appointment,
});