import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';
// import configureStore from './store/configureStore';
// import { client } from './utils/apolloClient';

// const initialState = window.__APOLLO_STATE__;
// const store = configureStore(initialState);

render(
  <AppContainer>
    <Router>
      <App />
    </Router>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
