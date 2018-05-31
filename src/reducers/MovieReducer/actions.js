import { PROMISE_API } from '../../store/customMiddleware';
import * as action_types from './constants';

export const selectMovie = (movie) => {
  return (dispatch) => {
    dispatch({
      type: action_types.SELECT_MOVIE,
      data: movie,
    });
  }
}

export const getMovieList = () => {
  return {
    [PROMISE_API]: {
      type: 'GET_MOVIES',
      endpoint: '/films',
      method: 'GET',
    }
  }
}
