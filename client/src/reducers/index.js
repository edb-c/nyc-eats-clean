import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import eateries from './eateries';

export default combineReducers({
  alert,
  auth,
  profile,
  eateries
});