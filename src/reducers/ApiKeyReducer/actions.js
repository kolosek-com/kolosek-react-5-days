import * as action_types from './constants';

export const setApiKey = (apiKey) => {
  return (dispatch) => {
    dispatch({
      type: action_types.SET_API_KEY,
      data: apiKey,
    });
  }
}
