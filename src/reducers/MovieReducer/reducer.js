import * as action_types from './constants';

const initialState = {
  movieList: [],
  selectedMovie: null,
};

function movieReducer(state = initialState, action) {
  switch(action.type) {
    case action_types.GET_MOVIES_START: {
      return Object.assign({...state}, {
        movieList: [],
      });
    }
    case action_types.GET_MOVIES_SUCCESS: {
      return Object.assign({...state}, {
        movieList: action.data,
      });
    }
    case action_types.SELECT_MOVIE: {
      return Object.assign({...state}, {
        selectedMovie: action.data,
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default movieReducer;
