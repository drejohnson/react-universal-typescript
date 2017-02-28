import * as React from 'react';
// import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { pure, compose, flattenProp } from 'recompose';

import displayLoadingState from './Loading';
import EpisodeCard from './Episode';
import * as EPISODE_QUERY from 'ui/graphql/EpisodeQuery.graphql';

interface Props {
  Episode;
  id;
}

const EpisodeDetail: React.SFC<Props> = ({ Episode, id }) => {
  const episode = Episode;
  return (
    <div>
      {episode &&
        <EpisodeCard key={episode.id} episode={episode} detail={true}/>
      }
    </div>
  );
};

export default compose(
  graphql(EPISODE_QUERY, {
    options: params => ({
      variables: {
        id: params.id
      }
    })
  }),
  displayLoadingState,
  flattenProp('data'),
  pure
)(EpisodeDetail);
