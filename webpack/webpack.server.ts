import * as nodeExternals from 'webpack-node-externals';
import * as merge from 'webpack-merge';
import * as webpack from 'webpack';

import common from './webpack.common';

const isProd = process.env.NODE_ENV === 'production';

export default merge({}, common, {
  name: 'server',
  entry: './server',
  target: 'node',
  node: {
    __dirname: false
  },
  output: {
    filename: 'server.js',
    path: common.output.path,
    publicPath: common.output.publicPath,
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new webpack.DefinePlugin({
      CLIENT_BUNDLE: JSON.stringify(isProd ? require('../build/assets.json').client.js : '/js/client.js'),
      VENDOR_BUNDLE: JSON.stringify(isProd ? require('../build/assets.json').vendor.js : '/js/vendor.js')
    })
  ],
  externals: [nodeExternals()]
});
