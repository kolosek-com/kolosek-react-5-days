import * as action_types from './constants';

const initialState = {
  buildsList: [],
  selectedBuild: null,
  dataFetched: false, 
};

function circleBuildReducer(state = initialState, action) {
  switch(action.type) {
    case action_types.GET_BUILDS_START: {
      return Object.assign({...state}, {
        buildsList: [],
      });
    }
    case action_types.GET_BUILDS_SUCCESS: {
      return Object.assign({...state}, {
        buildsList: action.payload,
        dataFetched: true,
      });
    }
    case action_types.SELECT_BUILD: {
      return Object.assign({...state}, {
        selectedBuild: action.payload,
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default circleBuildReducer;
