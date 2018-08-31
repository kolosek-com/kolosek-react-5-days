import * as action_types from './constants';
import { Record } from 'immutable';

const InitialState = Record({
  buildList: [],
  selectedBuild: null,
});

const initialState = new InitialState();

const circleciReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${action_types.GET_CIRCLECI_BUILDS}_START`:
      return state.set('buildList', [])
    case `${action_types.GET_CIRCLECI_BUILDS}_SUCCESS`:
      return state.set('buildList', action.data)
    case action_types.SELECT_CIRCLECI_BUILD:
      return state.set('selectedBuild', action.data)
    default:
      return state
  }
}

export default circleciReducer
