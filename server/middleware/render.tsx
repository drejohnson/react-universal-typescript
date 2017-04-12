import 'isomorphic-fetch';

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { styleSheet } from 'styled-components';
import * as LRUCache from 'lru-cache';

import App from 'ui/containers/App';
import Html from 'server/views/Html';
import configureApolloClient from 'ui/utils/configureApolloClient';

import 'ui/styles/global-styles';

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
});

function getCacheKey(req) {
  return `${req.url}`;
}

export default async (req, res) => {
  const context: any = {};
  const client = configureApolloClient({ ssrMode: true });

  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  await renderToStringWithData(
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>,
  ).then(html => {
    if (context.url) {
      return res.redirect(context.status, context.url);
    }

    const styles = styleSheet.getCSS();
    const data = client.store.getState().apollo.data;
    const state = { apollo: { data } };

    const markup = renderToStaticMarkup(
      <Html
        html={html}
        state={state}
        styles={styles}
      />,
    );

    // Let's cache this page
    console.log(`CACHE MISS: ${key}`);
    ssrCache.set(key, `<!doctype html>${markup}`);

    return res
      .status(context.status || 200)
      .send(`<!doctype html>${markup}`);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
};
