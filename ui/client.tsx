import 'isomorphic-fetch';

import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'ui/containers/App';
import configureStore from 'ui/store/configureStore';
import configureApolloClient from 'ui/utils/configureApolloClient';

const isProd = process.env.NODE_ENV === 'production';
const initialState = window.__APOLLO_STATE__;
const store = configureStore(initialState);

const client = configureApolloClient({
  initialState: window.__APOLLO_STATE__,
  connectToDevTools: typeof window !== 'undefined' && !isProd
});

render(
  <AppContainer>
    <Router>
      <ApolloProvider client={client} store={store}>
        <App />
      </ApolloProvider>
    </Router>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
