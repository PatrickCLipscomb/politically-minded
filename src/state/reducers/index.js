import { combineReducers } from 'redux';
import app from './app.js';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  app,
  routing: routerReducer
});

export default rootReducer;
