import * as path from 'path';
import * as webpack from 'webpack';
import * as dotenv from 'dotenv';

dotenv.config({ silent: true });
const isProd = process.env.NODE_ENV === 'production';

export default {
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
        exclude: /(node_modules)/
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: 'source-map-loader'
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: 'graphql-tag/loader'
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg|webp)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: `static/images/[name]${isProd ? '.[hash:8]' : ''}.[ext]`
            }
          }
        ]
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack['EnvironmentPlugin']({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV) || 'development',
      GRAPHQL_ENDPOINT: JSON.stringify(process.env.GRAPHQL_ENDPOINT),
      GA_TRACKING_ID: JSON.stringify(process.env.GA_TRACKING_ID)
    })
  ],
  resolve: {
    alias: {
      ui: path.resolve(__dirname, '../ui'),
      static: path.resolve(__dirname, '../ui/static'),
      components: path.resolve(__dirname, '../ui/components'),
      server: path.resolve(__dirname, '../server')
    },
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  bail: isProd
};
