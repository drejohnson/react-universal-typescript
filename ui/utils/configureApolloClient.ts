import ApolloClient, { createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: process.env.GRAPHQL_ENDPOINT
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }
    next();
  }
}]);

export default options => new ApolloClient(Object.assign({}, {
  networkInterface,
  dataIdFromObject: (result) => {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
    return null;
  }
}, options));
