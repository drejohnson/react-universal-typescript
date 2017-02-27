import 'isomorphic-fetch';

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { styleSheet } from 'styled-components';
import { withAsyncComponents } from 'react-async-component';
import * as LRUCache from 'lru-cache';

import App from 'ui/containers/App';
import Html from 'server/views/Html';
import configureApolloClient from 'ui/utils/configureApolloClient';
import configureStore from 'ui/store/configureStore';

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 // 1hour
});

function getCacheKey(req) {
  return `${req.url}`;
}

export default async (req, res) => {
  const context: any = {};
  const client = configureApolloClient({
    ssrMode: true
  });
  const store = configureStore(client);

  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  const app = (
    <StaticRouter location={req.url} context={context}>
      <ApolloProvider client={client} store={store}>
        <App />
      </ApolloProvider>
    </StaticRouter>
  );

  const asyncSplit = await withAsyncComponents(app);
  const {appWithAsyncComponents} = asyncSplit;

  renderToStringWithData(
    appWithAsyncComponents
  ).then(html => {

    if (context.url) {
      return res.redirect(302, context.url);
    }

    const styles = styleSheet.getCSS();
    const initialState = {[client.reduxRootKey]: client.getInitialState() };

    const renderPage = (html, initialState, styles, {state = {}, STATE_IDENTIFIER = {}} = {}) => {
      const markup = renderToStaticMarkup(
        <Html
          html={html}
          state={initialState}
          styles={styles}
          asyncComponents={{state, STATE_IDENTIFIER}}
        />
      );
      return `<!doctype html>${markup}`;
    };

    const page = renderPage(html, initialState, styles, asyncSplit);

    // Let's cache this page
    console.log(`CACHE MISS: ${key}`);
    ssrCache.set(key, page);

    return res
      .status(context.status || 200)
      .send(page);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
};
