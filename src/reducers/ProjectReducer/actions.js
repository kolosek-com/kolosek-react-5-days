import axios from 'axios';
import * as action_types from './constants';

export const selectProject = (project) => {
  return (dispatch) => {
    dispatch({
      type: action_types.SELECT_PROJECT,
      data: project,
    });
  }
}

export const selectBranch = (branch) => {
  return (dispatch) => {
    dispatch({
      type: action_types.SELECT_BRANCH,
      data: branch,
    });
  }
}

export const getProjectList = (apiToken) => {
  return (dispatch) => {
    dispatch({
      type: action_types.GET_PROJECTS_START
    });
    return axios.get('https://circleci.com/api/v1.1/projects?circle-token=' + apiToken)
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_PROJECTS_SUCCESS,
            data: response.data
          });
        } else {
          throw response;
        }
      })
      .catch((error) => {
        dispatch({
          type: action_types.GET_PROJECTS_ERROR,
          error: error
        });
      })
  }
}
