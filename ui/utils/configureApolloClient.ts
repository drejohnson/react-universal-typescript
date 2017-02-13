import ApolloClient, { createNetworkInterface } from 'apollo-client';

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

export default options => new ApolloClient(Object.assign({}, {
  networkInterface,
  // dataIdFromObject: (result) => {
  //   if (result.id && result.__typename) {
  //     return result.__typename + result.id;
  //   }
  //   return null;
  // }
}, options));
