import { PROMISE_API } from '../../store/customMiddleware';
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
  return {
    [PROMISE_API]: {
      type: 'GET_CIRCLECI_BUILDS',
      endpoint: `/projects`,
      method: 'GET',
    }
  }
}