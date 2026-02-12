import { type Store, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { type StoreState, initialBaseState, rootReducer, rootSaga } from './';

export const initStore = (): Store<StoreState> => {
  const composeEnhancers = composeWithDevTools({
    name: process.env.APPLICATION_NAME || ''
  });
  const sagaMiddleware = createSagaMiddleware();

  const initialState: StoreState = {
    baseState: {
      ...initialBaseState
    }
  };

  const store = createStore(
    rootReducer(),
    initialState,
    process.env.DEBUG_STORE === 'true' ? composeEnhancers(applyMiddleware(sagaMiddleware)) : applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  return store;
};
