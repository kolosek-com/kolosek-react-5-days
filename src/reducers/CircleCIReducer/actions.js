import axios from 'axios';
import * as action_types from './constants';

export const selectBuild = (build) => {
  return (dispatch) => {
    dispatch({
      type: action_types.SELECT_BUILD,
      payload: build,
    });
  }
}

export const getBuildList = (apiKey) => {
  return (dispatch) => {
    dispatch({
      type: action_types.GET_BUILDS_START
    });
    return axios.get('https://circleci.com/api/v1.1/recent-builds?circle-token=' + apiKey)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_BUILDS_SUCCESS,
            payload: response.data
          });
        } else {
          throw response;
        }
      })
      .catch((error) => {
        dispatch({
          type: action_types.GET_BUILDS_ERROR,
          error: error
        });
      })
  }
}

export const getBuild = (vcrType, username, projectName, buildNum, apiKey) => {
  return (dispatch) => {
    dispatch({
      type: action_types.GET_BUILD_START
    });
    return axios.get(`https://circleci.com/api/v1.1/project/${vcrType}/${username}/${projectName}/${buildNum}?circle-token=${apiKey}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_BUILD_SUCCESS,
            payload: response.data,
          });
        } else {
          throw response;
        }
      })
      .catch((error) => {
        dispatch({
          type: action_types.GET_BUILD_ERROR,
          error: error
        });
      })
  }
}
