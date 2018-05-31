import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import promiseMiddleware from './customMiddleware';

const logger = createLogger();
const middleware = [thunk, promiseMiddleware, logger];

const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);

export default store;
