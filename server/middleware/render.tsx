import 'isomorphic-fetch';

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { styleSheet } from 'styled-components';

import App from 'ui/containers/App';
import Html from 'server/views/Html';
import { client } from 'ui/utils/initClient';
import configureStore from 'ui/store/configureStore';

export default (req, res) => {
  const context: any = {};
  const store = configureStore();

  renderToStringWithData(
    <StaticRouter location={req.url} context={context}>
      <ApolloProvider client={client} store={store}>
        <App />
      </ApolloProvider>
    </StaticRouter>
  ).then((html) => {
    if (context.url) {
      return res.redirect(302, context.url);
    }

    const styles = styleSheet.getCSS();
    const data = client.store.getState().apollo.data;
    const state = { apollo: { data } };

    const markup = renderToStaticMarkup(
      <Html
        html={html}
        state={state}
        styles={styles}
      />
    );

    return res
      .status(context.status || 200)
      .send(`<!doctype html>${markup}`);
  }).catch((error) => {
    console.log(error);
    res.sendStatus(500);
  });
};
