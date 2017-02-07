import * as AssetsPlugin from 'assets-webpack-plugin';
import * as CompressionPlugin from 'compression-webpack-plugin';
import * as WebpackMd5Hash from 'webpack-md5-hash';
import * as merge from 'webpack-merge';
import * as webpack from 'webpack';

import common from './webpack.common';

const isProd = process.env.NODE_ENV === 'production';

export default merge({}, common, {
  name: 'client',
  entry: {
    client: isProd ? [
      './ui/client'
    ] : [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './ui/client'
    ]
  },
  output: {
    filename: `js/[name]${isProd ? '.[chunkhash:8]' : ''}.js`
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
              sourceMap: true
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
              limit: 10000,
              name: `assets/images/[name]${isProd ? '.[hash:8]' : ''}.[ext]`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // ...common.plugins,
    ...isProd ? [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new CompressionPlugin({
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      })
    ] : [
      new webpack.HotModuleReplacementPlugin()
    ],
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource)
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: common.output.path
    }),
    new WebpackMd5Hash()
  ]
});
