import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

import number from './number';
import step from './step';

function createReducer(reducerConfig) {
  const { initialState, ...reducers } = reducerConfig;

  return (state = initialState, action) => {
    const reducer = reducers[action.type];

    if (typeof reducer === 'function') {
      return reducer(state, action);
    }
    return state;
  };
}

const reducers = [number, step].map(({ name, ...rest }) => ({ [name]: createReducer(rest) }));

const rootReducer = combineReducers(Object.assign({}, { routing: routeReducer }, ...reducers));

export default rootReducer;
