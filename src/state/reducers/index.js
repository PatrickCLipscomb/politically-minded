import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app.js';


// combineReducer() does exactly that, it combines multiple reducer functions into one
// routerReducer controls an important part of state, the url. The library simply enhances a history instance to allow it to synchronize any changes it receives into application state. the routing key now holds this to your reducer
const rootReducer = combineReducers({
  routing: routerReducer,
  app,
});

export default rootReducer;
