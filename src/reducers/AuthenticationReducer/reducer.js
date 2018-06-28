import { LOGIN_SUCCESS, LOGIN_ERROR } from './constants';  

const initialState = {
  error: null,
  activeSession: false
};

const circleCiBuildsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return Object.assign({...state}, { error: null, activeSession: true });
      break;
    }
    case LOGIN_ERROR: {
      return Object.assign({...state}, { error: action.error });
      break;
    }
    default: {
      break;
    }
  };
  return state;
};

export default circleCiBuildsReducer;