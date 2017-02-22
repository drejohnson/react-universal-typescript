import { PersistedQueryNetworkInterface } from 'persistgraphql';
import * as queryMap from '../extracted_queries.json';

export default (host = '', headers = {}) => {
  return new PersistedQueryNetworkInterface({
    queryMap,
    uri: host,
    opts: {
      credentials: 'same-origin',
      headers
    },
    enablePersistedQueries: false
  });
};
