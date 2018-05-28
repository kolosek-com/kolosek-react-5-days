import * as action_types from './constants';

const initialState = {
  buildList: [],
  selectedBuild: null,
};

function buildReducer(state = initialState, action) {
  switch(action.type) {
    case action_types.GET_BUILDS_START: {
      return Object.assign({...state}, {
        buildList: [],
      });
    }
    case action_types.GET_BUILDS_SUCCESS: {
      return Object.assign({...state}, {
        buildList: action.data,
      });
    }
    case action_types.SELECT_BUILD: {
      return Object.assign({...state}, {
        selectedBuild: action.data,
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default buildReducer;
