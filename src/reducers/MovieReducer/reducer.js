import * as action_types from './constants';
import { Record } from 'immutable';

const InitialState = Record({
  movieList: [],
  selectedMovie: null,
});

const initialState = new InitialState();

function movieReducer(state = initialState, action) {
  switch(action.type) {
    case `${action_types.GET_MOVIES}_START`: {
      return state.set('movieList', []);
    }
    case `${action_types.GET_MOVIES}_SUCCESS`: {
      return state.set('movieList', action.data);
    }
    case action_types.SELECT_MOVIE: {
      return state.set('selectedMovie', action.data);
    }
    default: {
      break;
    }
  }
  return state;
};


export default movieReducer;
