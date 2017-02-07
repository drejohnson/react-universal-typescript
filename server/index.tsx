import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as morgan from 'morgan';

import renderMiddleware from './middleware/render';

const app: express.Express = express();
const ENV = process.env.NODE_ENV || 'development';
const PORT: number = process.env.PORT || 8080;
const isProd = ENV === 'production';

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
  .use(renderMiddleware);

app.listen(PORT, () => console.log(
  `App Server is now running on http://localhost:${PORT}`
));
