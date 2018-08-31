import axios from 'axios';

export const PROMISE_API = 'Promise Call';

const SERVER_URL = 'https://circleci.com/api/v1.1';

/**
* makes API call
*/
async function promisedCall(endpoint, method, data, params) {
  const token = localStorage.getItem('circleci_token_api')

  return axios(`${SERVER_URL}${endpoint}?circle-token=${token}`, {
    method,
    data,
    params
  })
    .then((response) => {
      if (response.status !== 200) {
        throw data;
      }
      return response.data;
    });
}

const promise = (store) => (next) => (action) => {
  const promiseCall = action[PROMISE_API];
  if (typeof promiseCall === 'undefined') {
    // Skip actions which are not PROMISE_API
    return next(action);
  }
  const { type, endpoint, method, data, params } = promiseCall;
  next({
    action: action,
    type: `${type}_START`
  });

  return promisedCall(endpoint, method, data, params)
    .then(
      (data) => {
        next({
          data: data,
          type: `${type}_SUCCESS`
        });
      },
      (error) => {
        next({
          error: error,
          type: `${type}_ERROR`
        });
      }
    );
};

export default promise;