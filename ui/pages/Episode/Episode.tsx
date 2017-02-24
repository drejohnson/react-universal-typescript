import * as React from 'react';
import * as Helmet from 'react-helmet';
import EpisodeDetail from 'ui/components/EpisodeDetail';

interface Props {
  match;
}

const Episode: React.SFC<Props> = ({match}) => (
  <div>
    <Helmet title="Episode"/>
    <div>
      <h1>Episode: {match.params.uid}</h1>
      <EpisodeDetail />
    </div>
  </div>
);

export default Episode;
