// reselect is just a simple selector library for Redux, inspired by getters (get state in a computed format)
import { createSelector } from 'reselect';
// import { propOr } from 'ramda';

export const appState = state =>  state.app;
export const routeState = state => state.routing;

// just returns an object that is the 'state.app'
export const appData = createSelector(
  appState,
  ({ data }) => data,
);

// just returns an object that is the 'state.routing'
export const locationBeforeTransitions = createSelector(
  routeState,
  ({ locationBeforeTransitions }) => locationBeforeTransitions,
);

export const pathName = createSelector(
  locationBeforeTransitions,
  ({ pathname }) => pathname,
);

export const filerId = createSelector(
  pathName,
  p => p.split('/')[2],
)

export const campaignDetail = createSelector(
  appState,
  ({ campaign }) => campaign,
)
