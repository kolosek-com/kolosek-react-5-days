import * as action_types from './constants';

export const saveToken = (token) => ({
  type: action_types.SAVE_API_TOKEN,
  token
})