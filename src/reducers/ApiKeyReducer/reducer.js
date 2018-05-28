import * as action_types from './constants';

const initialState = {
  currentKey: null,
};

function apiKeyReducer(state = initialState, action) {
  switch(action.type) {
    case action_types.SET_API_KEY: {
      return Object.assign({...state}, {
        currentKey: action.data,
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default apiKeyReducer;
