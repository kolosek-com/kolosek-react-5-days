import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { logger } from './middleware';

const middleware = [thunk, logger];

const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);

export default store;
