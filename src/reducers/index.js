import { combineReducers } from 'redux'

import movieReducer from './MovieReducer/reducer';
import circleciReducer from './CircleciReducer'
import authReducer from './AuthReducer'

export default combineReducers({
  movies: movieReducer,
  builds: circleciReducer,
  auth: authReducer
});
