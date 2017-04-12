import * as SWPrecacheWebpackPlugin from 'sw-precache-webpack-plugin';
import * as AssetsPlugin from 'assets-webpack-plugin';
import * as CompressionPlugin from 'compression-webpack-plugin';
import * as CopyWebpackPlugin from 'copy-webpack-plugin';
import * as WebpackMd5Hash from 'webpack-md5-hash';
import * as merge from 'webpack-merge';
import * as webpack from 'webpack';

import common from './common';

const isProd = process.env.NODE_ENV === 'production';

export default merge({}, common, {
  name: 'client',
  entry: {
    client: isProd ? [
      './client',
    ] : [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true',
      './client',
    ],
  },
  output: {
    filename: `js/[name]${isProd ? '.[chunkhash:8]' : ''}.js`,
  },
  plugins: [
    ...(isProd
      ? [
        new AssetsPlugin({
          filename: 'assets.json',
          path: common.output.path,
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false,
          },
        }),
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.html$/,
          threshold: 10240,
          minRatio: 0.8,
        }),
        new SWPrecacheWebpackPlugin({
          cacheId: 'spottieottiedopaliscious',
          filename: 'service-worker.js',
          // maximumFileSizeToCacheInBytes: 4194304,
          // mergeStaticsConfig: true,
          // minify: true,
          staticFileGlobsIgnorePatterns: [/build\/.*\.map/],
          staticFileGlobs: [
            'build/static/**/*', // Precache all static files by default
          ],
          stripPrefix: 'build/static',
          forceDelete: true,
          runtimeCaching: [
            // Example with different handlers
            {
              handler: 'fastest',
              urlPattern: /[.](png|jpg|css)/,
            },
            {
              handler: 'networkFirst',
              urlPattern: /.*/, // cache all files
            },
          ],
        }),
      ]
      : [new webpack.HotModuleReplacementPlugin()]
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new CopyWebpackPlugin([{
      from: 'ui/static',
      to: 'static',
    }]),
    new WebpackMd5Hash(),
  ],
  devtool: isProd ? 'source-map' : 'inline-source-map',
  externals: {
    videojs: ' videojs',
  },
});
