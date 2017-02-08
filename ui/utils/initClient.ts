import ApolloClient, { createNetworkInterface } from 'apollo-client';
const isProd = process.env.NODE_ENV === 'production';

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_ENDPOINT || 'https://api.graph.cool/simple/v1/cixm67lmh1yjd0177j5cwt47t'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    next();
  }
}]);

export const client = new ApolloClient({
  ssrMode: true,
  networkInterface,
  connectToDevTools: typeof window !== 'undefined' && !isProd
});
