import * as devMiddleware from 'webpack-dev-middleware';
import * as hotMiddleware from 'webpack-hot-middleware';
import * as webpack from 'webpack';

import configuration from '../../webpack/webpack.client';

const compiler = webpack(configuration);

export const webpackDevMiddleware = devMiddleware(compiler, {
  stats: 'minimal'
});

export const webpackHotMiddleware = hotMiddleware(compiler);
