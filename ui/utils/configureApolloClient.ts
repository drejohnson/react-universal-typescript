import { ApolloClient, createNetworkInterface } from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_ENDPOINT,
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    next();
  },
}]);

export default function configureApolloClient(options) {
  return new ApolloClient(Object.assign({}, {
    networkInterface,
    dataIdFromObject: ({ id }) => id || null,
  }, options));
}
