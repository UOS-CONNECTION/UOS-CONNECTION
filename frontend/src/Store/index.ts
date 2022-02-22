import { applyMiddleware, createStore } from 'redux';
import ReduxPromise from 'redux-promise';

import rootReducer from './Reducer';

const store = applyMiddleware(ReduxPromise)(createStore)(rootReducer);

export default store;
