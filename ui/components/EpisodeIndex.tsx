import * as React from 'react';
import gql from 'graphql-tag';
import { withApollo } from 'react-apollo';
import { filter, propType } from 'graphql-anywhere';

import configureApolloClient from 'ui/utils/configureApolloClient';
import Episode from './Episode';

import { AllEpisodesQuery } from 'ui/schema';

const client = configureApolloClient({});
const graphqlDocuments = require('ui/graphql/documents.json');

const renderQuery = () => client.query<AllEpisodesQuery>({
  query: graphqlDocuments['AllEpisodesQuery.graphql']
}).then(({data}: {data: AllEpisodesQuery}) => {
  data.allEpisodes.map(episode => `<Episode key={episode.id} episode={episode}/>`)
});

interface Props {}

const EpisodeIndex: any = () => {
  return (
    <div>
      <h2>Episodes:</h2>
      {renderQuery}
    </div>
  );
};

// EpisodeIndex.fragments = {
//   entry: gql``
// };

export default withApollo(EpisodeIndex);
