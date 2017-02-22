import 'isomorphic-fetch';
import * as WebFont from 'webfontloader';
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import { AppContainer } from 'react-hot-loader';

import App from 'ui/containers/App';
import configureStore from 'ui/store/configureStore';
import configureApolloClient from 'ui/utils/configureApolloClient';
import getNetworkInterface from 'ui/transport';

const isProd = process.env.NODE_ENV === 'production';
const initialState = window.__APOLLO_STATE__;
const PROJECT_ID = process.env.GRAPHCOOL_PROJECT_ID;

const wsClient = new SubscriptionClient(`ws://subscriptions.graph.cool/${PROJECT_ID}`, {
  reconnect: true
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  getNetworkInterface(),
  wsClient
);

WebFont.load({google: {families: ['Lato:300,400,700,900']}});

const client = configureApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
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
