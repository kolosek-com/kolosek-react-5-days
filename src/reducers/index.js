import { combineReducers } from 'redux'

import movieReducer from './MovieReducer/reducer';
import buildReducer from './BuildReducer/reducer';
import projectReducer from './ProjectReducer/reducer';
import apiKeyReducer from './ApiKeyReducer/reducer';

export default combineReducers({
  movies: movieReducer,
  builds: buildReducer,
  projects: projectReducer,
  apiKey: apiKeyReducer,
});
