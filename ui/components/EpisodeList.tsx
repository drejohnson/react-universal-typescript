import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { pure, compose, flattenProp } from 'recompose';

import displayLoadingState from './Loading';
import Episode from './Episode';

interface Props {
  allEpisodes: string[];
}

const enhance = flattenProp('data');
const EpisodeList: React.SFC<Props> = enhance(({ allEpisodes }) =>
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
  pure
)(EpisodeList);
