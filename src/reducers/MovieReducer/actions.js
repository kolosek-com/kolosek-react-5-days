import axios from 'axios';
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
  return (dispatch) => {
    dispatch({
      type: action_types.GET_MOVIES_START
    });
    return axios.get('https://ghibliapi.herokuapp.com/films')
      .then((response) => {
        if (response.status === 200) {
          dispatch({
            type: action_types.GET_MOVIES_SUCCESS,
            data: response.data
          });
        } else {
          throw response;
        }
      })
      .catch((error) => {
        dispatch({
          type: action_types.GET_MOVIES_ERROR,
          error: error
        });
      })
  }
}
