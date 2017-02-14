import * as React from 'react';
import * as Helmet from 'react-helmet';
import * as serialize from 'serialize-javascript';

const isProd = process.env.NODE_ENV === 'production';
const head = Helmet.rewind();

import 'ui/containers/global-styles';

interface Props {
  html;
  state;
  styles;
}

const Html: React.SFC<Props> = ({html, state, styles}) => (
  <html lang="en">
    <head>
      {head.base.toComponent()}
      {head.title.toComponent()}
      {head.meta.toComponent()}
      {head.link.toComponent()}
      {head.script.toComponent()}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <style type="text/css">
        {styles}
      </style>
    </head>
    <body>
      <div dangerouslySetInnerHTML={{ __html: html }} id="root" />
      { isProd &&
      <script dangerouslySetInnerHTML={{ __html: `
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('service-worker.js');
        }
      ` }} />
      }
      <script dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__ = ${serialize(state)}` }} />
      <script src={`${VENDOR_BUNDLE}`} />
      <script src={`${CLIENT_BUNDLE}`} />
    </body>
  </html>
);

export default Html;
