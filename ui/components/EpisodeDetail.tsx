import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { pure, compose, flattenProp } from 'recompose';

import displayLoadingState from './Loading';
import Episode from './Episode';
import * as EPISODE_QUERY from 'ui/graphql/EpisodeQuery.graphql';

interface Props {
  Episode;
}

const EpisodeDetail: React.SFC<Props> = ({ Episode }) => {
  const episode = this.Episode;
  console.log(episode);
  return (
    <div>
      <h2>Episode Detail:</h2>
    </div>
  );
};

export default compose(
  graphql(EPISODE_QUERY),
  displayLoadingState,
  flattenProp('data'),
  pure
)(EpisodeDetail);
