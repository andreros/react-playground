import { type Action, combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import { postSaga } from './post';
import { baseReducer } from './reducer';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const appReducer = (): any => {
  return combineReducers({
    baseState: baseReducer
  });
};

export const rootReducer = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (state: any, action: Action): any => {
    const newState = { ...state };

    return appReducer()(newState, action);
  };
};

export function* rootSaga(): Generator {
  yield all([fork(postSaga)]);
}
