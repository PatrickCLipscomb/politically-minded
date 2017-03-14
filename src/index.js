import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store';
import Root from './Root';

import './index.css'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
ReactDOM.render(
  <Root history={history} store={store} />,
  document.getElementById('root')
);
