import React, {PropTypes} from 'react';
import {Router} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';

// <Provider> makes the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component

const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({ getState: PropTypes.func.isRequired, dispatch: PropTypes.func.isRequired }).isRequired,
  history: PropTypes.shape({})
}

export default Root;
