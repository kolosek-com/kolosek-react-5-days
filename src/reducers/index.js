import { combineReducers } from 'redux'

import movieReducer from './MovieReducer/reducer';
import circleBuildReducer from './CircleCIReducer/reducer';

export default combineReducers({
  movies: movieReducer,
  builds: circleBuildReducer,
});
