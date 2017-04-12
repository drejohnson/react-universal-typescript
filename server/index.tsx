import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as morgan from 'morgan';
import * as dotenv from 'dotenv';

import renderMiddleware from './middleware/render';

dotenv.config({ silent: true });

const {
  ENV = process.env.NODE_ENV || 'development',
  PORT = 8080,
} = process.env;

const isProd = ENV === 'production';

const app: express.Express = express();

// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global['navigator'] = global['navigator'] || {};
global['navigator'].userAgent = global['navigator'].userAgent || 'all';

if (isProd) {
  app.use(compression());
} else {
  const {
    webpackDevMiddleware,
    webpackHotMiddleware,
  } = require('./middleware/webpack');

  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);
}

app
  .set('env', ENV)
  .set('port', PORT)
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(morgan(isProd ? 'combined' : 'dev'))
  .use(express.static(path.resolve(__dirname, '../build')))
  .use(express.static(path.join(__dirname, '../build/static'), { maxAge: 86400000 }))
  .use(renderMiddleware);

app.listen(PORT, () => console.log(
  `App Server is now running on http://localhost:${PORT}`,
));
