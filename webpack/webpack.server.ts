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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              emitFile: false,
              sourceMap: false
            }
          }
        ],
        include: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg|webp)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              emitFile: false,
              limit: 10000,
              name: `assets/images/[name]${isProd ? '.[hash:8]' : ''}.[ext]`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      CLIENT_BUNDLE: JSON.stringify(isProd ? require('../build/assets.json').client.js : '/js/client.js'),
      VENDOR_BUNDLE: JSON.stringify(isProd ? require('../build/assets.json').vendor.js : '/js/vendor.js')
    })
  ],
  externals: [nodeExternals()]
});
