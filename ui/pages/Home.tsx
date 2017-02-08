import * as React from 'react';
import * as Helmet from 'react-helmet';

import EpisodeList from '../components/EpisodeList';

interface Props {}

const Home: React.SFC<Props> = () => (
  <div>
    <Helmet title="Home"/>
    <h1>Home</h1>
    <EpisodeList />
  </div>
);

export default Home;
