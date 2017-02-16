import * as React from 'react';
import gql from 'graphql-tag';
import { withApollo, graphql } from 'react-apollo';
import { pure, compose, flattenProp } from 'recompose';

import displayLoadingState from './Loading';
import Episode from './Episode';

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

const data = graphql(gql`
  query allEpisodes {
    allEpisodes {
      id
      title
      description
      imageThumbUrl
      posterUrl
      show {
        id
        title
      }
      topics {
        id
        name
      }
    }
  }
`);

export default compose(
  data,
  displayLoadingState,
  flattenProp('data'),
  pure
)(EpisodeList);
