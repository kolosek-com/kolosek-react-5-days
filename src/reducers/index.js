import { combineReducers } from 'redux'

import movieReducer from './MovieReducer/reducer';

export default combineReducers({
  movies: movieReducer,
});
