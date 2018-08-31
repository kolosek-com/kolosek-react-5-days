import * as action_types from './constants';
import { Record } from 'immutable';

const InitialState = Record({
  token: null,
  isAuthenticated: (localStorage.getItem('circleci_token_api') !== null),
});

const initialState = new InitialState();

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_types.SAVE_API_TOKEN:
      localStorage.setItem('circleci_token_api', action.token)
      return state.set('token', action.token)
    case action_types.LOGIN_REQUEST:
      state.set('isAuthenticated', false)
      state.set('token', action.token)
      return state
    case action_types.LOGIN_SUCCESS:
      return state.set('isAuthenticated', true)
    case action_types.LOGIN_FAILURE:
      state.set('isAuthenticated', false)
      state.set('token', null)
      return state
    default:
      return state
  }
}

export default authReducer
