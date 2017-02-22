import ApolloClient from 'apollo-client';

export default options => new ApolloClient(Object.assign({}, {
  dataIdFromObject: result => {
    if (result.id && result.__typename) {
      return result.__typename + result.id;
    }
    return null;
  }
}, options));
