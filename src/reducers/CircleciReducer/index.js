import * as action_types from './constants';

const initialState = {
  buildList: [],
  selectedBuild: null,
};

const circleciReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_types.GET_CIRCLECI_BUILDS_START:
      return {
        ...state
      }
    case action_types.GET_CIRCLECI_BUILDS_SUCCESS:
      return {
        ...state,
        buildList: action.data
      }
    case action_types.SELECT_CIRCLECI_BUILD:
      return {
        ...state,
        selectedBuild: action.data
      }
    case action_types.GET_CIRCLECI_BUILDS_ERROR:
      return {
        ...state
      }
    default:
      break;
  }

  return state
}

export default circleciReducer
