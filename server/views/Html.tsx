import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as serialize from 'serialize-javascript';

const isProd = process.env.NODE_ENV === 'production';

import 'ui/styles/global-styles';

interface Props {
  html;
  state;
  styles;
}

function Html(props: Props) {
  const { html, state, styles } = props;
  const helmet = Helmet.renderStatic();
  return (
    <html lang="en">
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.base.toComponent()}
        {helmet.link.toComponent()}
        {helmet.script.toComponent()}
        <style type="text/css">
          {styles}
        </style>
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: html }} id="root" />
        { isProd && (
            <script dangerouslySetInnerHTML={{ __html: `
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/service-worker.js');
            }
          ` }} />
          )
        }
        <script dangerouslySetInnerHTML={{ __html: `window.__APOLLO_STATE__ = ${serialize(state)}` }} />
        <script src={`${VENDOR_BUNDLE}`} />
        <script src={`${CLIENT_BUNDLE}`} />
      </body>
    </html>
  );
}

export default Html;
