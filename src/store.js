import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';

const middlewares = [thunk]

const store = createStore(
    rootReducer,
     compose(
         applyMiddleware(...middlewares) ));


export default store;