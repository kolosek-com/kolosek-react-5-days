import * as action_types from './constants';

const initialState = {
  buildsList: [],
  selectedBuild: undefined,
  dataFetched: false,
  error: undefined,
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
        error: undefined
      });
    }
    case action_types.GET_BUILDS_ERROR: {
      return Object.assign({...state}, {
        error: action.error
      });
    }
    case action_types.SELECT_BUILD: {
      return Object.assign({...state}, {
        selectedBuild: action.payload,
      });
    }
    case action_types.GET_BUILD_SUCCESS: {
      return Object.assign({...state}, {
        selectedBuild: action.payload.find(build => build.build_num === parseInt(action.buildNum, 10))
      });
    }
    default: {
      break;
    }
  }
  return state;
};


export default circleBuildReducer;
