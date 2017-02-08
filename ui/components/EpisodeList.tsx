import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { propType } from 'graphql-anywhere';

import Episode from './Episode';

interface Props {
  data?: any;
}

const EpisodeList: React.SFC<Props> = ({ data: {loading, allEpisodes} }) => {
  if (loading) {
    return (<div>Loading</div>);
  } else {
    return (
      <div>
        <h2>Episodes:</h2>
        {allEpisodes.map(episode =>
          <Episode key={episode.id} episode={episode}/>
        )}
      </div>
    );
  }
};

export default graphql(gql`
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
`)(EpisodeList);
