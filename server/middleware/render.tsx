import * as React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import * as Helmet from 'react-helmet';
import { styleSheet } from 'styled-components';

import App from '../../ui/containers/App';

export default (req, res) => {
  const context: any = {};

  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  if (context.url) {
    return res.redirect(302, context.url);
  }

  const head = Helmet.rewind();
  const styles = styleSheet.getCSS();

  return res
    .status(context.status || 200)
    .send(`
      <!doctype html>
      <html lang="en">
        <head>
          ${head.base.toString()}
          ${head.title.toString()}
          ${head.meta.toString()}
          ${head.link.toString()}
          ${head.script.toString()}
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <title>App</title>
          <style>${styles}</style>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="${VENDOR_BUNDLE}"></script>
          <script src="${CLIENT_BUNDLE}"></script>
        </body>
      </html>
    `);
};
