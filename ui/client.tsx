import * as WebFont from 'webfontloader';
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

WebFont.load({google: {families: ['Lato:300,400,700,900']}});
const client = configureApolloClient({
  initialState,
  connectToDevTools: typeof window !== 'undefined' && !isProd
});

const store = configureStore(client, initialState);

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
