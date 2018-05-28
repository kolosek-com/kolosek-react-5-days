import axios from 'axios';
import * as action_types from './constants';

export const selectBuild = (build) => {
  return (dispatch) => {
    dispatch({
      type: action_types.SELECT_BUILD,
      data: build,
    });
  }
}

export const getBranchBuildList = (apiToken, project, branch) => {
  return (dispatch) => {
    dispatch({
      type: action_types.GET_BUILDS_START
    });
    return axios.get(`https://circleci.com/api/v1.1/project/${project.vcs_type}/${project.username}/${project.reponame}/tree/${branch}?circle-token=${apiToken}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_BUILDS_SUCCESS,
            data: response.data
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

export const getProjectBuildList = (apiToken, project) => {

  return (dispatch) => {
    dispatch({
      type: action_types.GET_BUILDS_START
    });
    return axios.get(`https://circleci.com/api/v1.1/project/${project.vcs_type}/${project.username}/${project.reponame}?circle-token=${apiToken}`)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_BUILDS_SUCCESS,
            data: response.data
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

export const getBuildList = (apiToken) => {
  return (dispatch) => {
    dispatch({
      type: action_types.GET_BUILDS_START
    });
    return axios.get('https://circleci.com/api/v1.1/recent-builds?circle-token=' + apiToken)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_BUILDS_SUCCESS,
            data: response.data
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
