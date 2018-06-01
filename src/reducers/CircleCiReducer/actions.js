import axios from 'axios';
import * as actionTypes from './constants';  

export const selectBuild = (build_id) => {
  return ((dispatch) => {
    dispatch({
      type: actionTypes.SELECT_CI_BUILD,
      build: build_id
    })
  });
};

export const getCircleCiLatestBuilds = () => {
  return (dispatch) => {
    const circleCiToken = sessionStorage.getItem('circleCiToken');
    
    dispatch({
      type: actionTypes.GET_CI_BUILDS_START,
    });
    return axios.get('https://circleci.com/api/v1.1/project/github/kolosek/finance_math' + '?circle-token=' + circleCiToken)
      .then((response) => {
        dispatch({
          type: actionTypes.GET_CI_BUILDS_SUCCESS,
          data: response.data
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.GET_CI_BUILDS_ERROR,
          error: error
        })
      })
  };
};