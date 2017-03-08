import 'isomorphic-fetch';

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { styleSheet } from 'styled-components';
import * as LRUCache from 'lru-cache';
import * as serialize from 'serialize-javascript';

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

export default (req, res) => {
  const context: any = {};
  const client = configureApolloClient({ ssrMode: true });
  const store = configureStore(client);

  const key = getCacheKey(req);

  // If we have a page in the cache, let's serve it
  if (ssrCache.has(key)) {
    console.log(`CACHE HIT: ${key}`);
    res.send(ssrCache.get(key));
    return;
  }

  renderToStringWithData(
    <StaticRouter location={req.url} context={context}>
      <ApolloProvider client={client} store={store}>
        <App />
      </ApolloProvider>
    </StaticRouter>
  ).then(html => {
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

    // Let's cache this page
    console.log(`CACHE MISS: ${key}`);
    ssrCache.set(key, `<!doctype html>${markup}`);

    return res
      .status(context.status || 200)
      .send(`<!doctype html>${markup}`);
      // .send(`
      //   <!doctype html>
      //   <html lang="en">
      //     <head>
      //       <meta charset="utf-8" />
      //       <meta content="width=device-width, initial-scale=1" name="viewport" />
      //       <title>React Starter</title>
      //       <style>${styles}</style>
      //     </head>
      //     <body>
      //       <div id="root">${html}</div>
      //       <script>window.__APOLLO_STATE__ = ${serialize(state)}</script>
      //       <script src="${VENDOR_BUNDLE}"></script>
      //       <script src="${CLIENT_BUNDLE}"></script>
      //     </body>
      //   </html>
      // `);
  }).catch(error => {
    console.log(error);
    res.sendStatus(500);
  });
};
