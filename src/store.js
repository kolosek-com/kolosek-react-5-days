import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

const store = compose(applyMiddleware(...middleware))(createStore)(rootReducer);

export default store;
