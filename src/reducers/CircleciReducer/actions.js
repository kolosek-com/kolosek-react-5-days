import axios from 'axios';
import * as action_types from './constants';

export const selectBuild = (build) => {
  return (dispatch) => {
    dispatch({
      type: action_types.SELECT_CIRCLECI_BUILD,
      data: build
    });
  }
}

export const getCircleciBuilds = () => {
  const token = localStorage.getItem('circleci_token_api')

  return (dispatch) => {
    dispatch({
      type: action_types.GET_CIRCLECI_BUILDS_START
    })

    return axios.get(`https://circleci.com/api/v1.1/projects?circle-token=${token}`)
      .then(response => {
        if(response.status === 200) {
          dispatch({
            type: action_types.GET_CIRCLECI_BUILDS_SUCCESS,
            data: response.data
          })
        } else {
          throw response
        }
      })
      .catch(error => {
        dispatch({
          type: action_types.GET_CIRCLECI_BUILDS_ERROR,
          error: error
        });
      })
  }
}