import * as React from 'react';
import { withApollo } from 'react-apollo';

import configureApolloClient from 'ui/utils/configureApolloClient';

import { AllEpisodesQuery } from 'ui/schema';

const client = configureApolloClient({});
const graphqlDocuments = require('ui/graphql/documents.json');

interface Props {}

const EpisodeIndex: any = () => {
  const renderQuery = () => client.query<AllEpisodesQuery>({
    query: graphqlDocuments['AllEpisodesQuery.graphql']
  }).then(({data}: {data: AllEpisodesQuery}) => {
    data.allEpisodes.map(episode => console.log(episode));
  });
  return (
    <div>
      <h2>Episodes:</h2> 
    </div>
  );
};

export default withApollo(EpisodeIndex);
