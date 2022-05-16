import { configureStore } from '@reduxjs/toolkit';
import ReduxPromise from 'redux-promise';

import rootReducer from './Reducer';

const store2 = configureStore({
  reducer: rootReducer,
  middleware: [ReduxPromise],
});

export default store2;
