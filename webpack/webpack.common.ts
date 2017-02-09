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
      {
        test: /\.gql$/,
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
      NODE_ENV: 'development',
      GRAPHQL_ENDPOINT: ''
    })
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    //     GRAPHQL_ENDPOINT: JSON.stringify(process.env.GRAPHQL_ENDPOINT)
    //   }
    // })
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
