import * as action_types from './constants';

var token = localStorage.getItem('circleci_token_api')

const initialState = {
  token: null,
  isAuthenticated: (token !== null),
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_types.SAVE_API_TOKEN:
      localStorage.setItem('circleci_token_api', action.token)

      return {
        ...state,
        token: action.token,
        isAuthenticated: true
      }
    default:
      return state
  }
}

export default authReducer
