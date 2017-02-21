import * as React from 'react';
import { graphql } from 'react-apollo';
import { pure, compose, flattenProp } from 'recompose';

import displayLoadingState from './Loading';
import Episode from './Episode';

const graphqlDocuments = require('ui/graphql/documents.json');

interface Props {
  allEpisodes;
}

const EpisodeList: React.SFC<Props> = ({ allEpisodes }) => (
  <div>
    <h2>Episodes:</h2>
    {allEpisodes.map(episode =>
      <Episode key={episode.id} episode={episode}/>
    )}
  </div>
);

export default compose(
  graphql(graphqlDocuments['AllEpisodesQuery.graphql']),
  displayLoadingState,
  flattenProp('data'),
  pure
)(EpisodeList);
