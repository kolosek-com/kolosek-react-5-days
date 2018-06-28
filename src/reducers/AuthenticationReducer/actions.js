import axios from 'axios';
import * as actionTypes from './constants';  

export const login = (circleCiToken) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOGIN_START,
    });
    return axios.get('https://circleci.com/api/v1.1/me?circle-token=' + circleCiToken)
      .then((response) => {
        sessionStorage.setItem('circleCiToken', circleCiToken);
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
        });
      })
      .catch((error) => {
        var msg;
        if (error.response && error.response.status === "401")  msg = "Invalid API key";

        dispatch({
          type: actionTypes.LOGIN_ERROR,
          error: msg || error.message
        });
      })
  };
};