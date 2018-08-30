import axios from 'axios';
import * as action_types from './constants';

export const saveToken = (token) => ({
  type: action_types.SAVE_API_TOKEN,
  token
})

export const requestLogin = (token) => ({
  type: action_types.LOGIN_REQUEST,
  token
})

export const loginSuccess = () => ({
  type: action_types.LOGIN_SUCCESS
})

export const loginFailure = () => ({
    type: action_types.LOGIN_FAILURE
})

export const loginUser = (token) => {
  return (dispatch) => {
    dispatch(requestLogin())

    return axios.get(`https://circleci.com/api/v1.1/me?circle-token=${token}`)
      .then(response => {
        if (response.status === 200) {
          dispatch(saveToken(token))
          dispatch(loginSuccess())
        } else {
          dispatch(loginFailure())
        }
      })
      .catch(err => console.log("Login Error: ", err))
  }
}