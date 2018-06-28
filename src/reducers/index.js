import { combineReducers } from 'redux'
import authReducer from './AuthenticationReducer/reducer';
import circleCiReducer from './CircleCiReducer/reducer';

export default combineReducers({
  auth: authReducer,
  circleCi: circleCiReducer
});
