import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from 'ui/reducers';
import { client } from 'ui/utils/initClient';

export default (initialState?) => {
  let store;

  const middlewares = [
    client.middleware()
  ];

  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');

      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
