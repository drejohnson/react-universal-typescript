import * as React from 'react';
import * as Helmet from 'react-helmet';

import EpisodeList from 'ui/components/EpisodeList';

interface Props {}

function Home() {
  return (
    <div>
      <Helmet title="Home"/>
      <h1>Home</h1>
      <EpisodeList />
    </div>
  );
};

export default Home;
