import * as path from 'path';
import * as webpack from 'webpack';

const isProd = process.env.NODE_ENV === 'production';

export default {
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.gql$/,
      //   exclude: /node_modules/,
      //   use: 'graphql-tag/loader'
      // },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        GRAPHQL_ENDPOINT: JSON.stringify(process.env.GRAPHQL_ENDPOINT)
      }
    })
  ],
  resolve: {
    alias: {
      client: path.resolve(__dirname, '../ui/components'),
      components: path.resolve(__dirname, '../ui/components'),
      server: path.resolve(__dirname, '../server')
    },
    extensions: ['.tsx', '.ts', '.js', '.css']
  },
  bail: isProd
};
